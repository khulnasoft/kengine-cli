FROM node:16.15.1 as builder

# Set Environment Variables
SHELL ["/bin/bash", "-c"]
ENV HOME /app

# Install Packages
RUN apt-get update -q && apt-get -y install unzip upx

WORKDIR /app

# Build Application
COPY . .
RUN npm ci
RUN npm run build
RUN npm run package:alpine

RUN chmod +x /app/bin/linux/kengine

# Application
FROM alpine:3.17.0 as app

# Tools needed for running diffs in CI integrations
RUN apk add ca-certificates git

# RUN apt-get update
# RUN apt-get -y install ca-certificates openssl openssh-client curl git bash jq

WORKDIR /root/
COPY --from=builder /app/bin/linux/kengine /usr/bin/

ENTRYPOINT [ "/usr/bin/kengine" ]
CMD ["--help"]
