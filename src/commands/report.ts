import { CommandBuilder } from "yargs";
import { BaseOptions, baseOptions } from "../shared";

export const command = "report";
export const desc = "Post reports to CI/CD pipelines";

export const builder: CommandBuilder<BaseOptions, BaseOptions> = (yargs) => {
  return yargs
    .options({
      ...baseOptions,
    })
    .example([
      [
        `
      $0 report github --repo <org/repo> --pull-request <pr-number> --path <path-to-kengine-output> --github-token <github-token>
    `,
      ],
    ])
    .commandDir("report")
    .strict();
};
