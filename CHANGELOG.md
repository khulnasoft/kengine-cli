# Changelog

All notable changes to this project will be documented in this file.


The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased] 

## [0.0.84] 2023-11-15
### Changed
- The README
- The splash screen after login

## [0.0.83] 2023-10-30
### Deleted
- The service field in alerts, queries and dashboards

## [0.0.81] 2023-10-13
### Deprecated
- connect command

## [0.0.80] 2023-10-10
### Deprecated
- A few commands and all associatd code:
  - deploy
  - pull
  - templates
  - validate

## [0.0.79] 2023-09-23
### Added
- Add metadata to kengine mark command
### Fixed
- Improved kengine iam output formatting

## [0.0.78] 2023-09-23
### Removed
- API Key permissions
## [0.0.77] 2023-09-07
### Added
- Enabled passing the api key as arg 

## [0.0.76] 2023-08-27
### Added
- Added widget type to dashbaords

## [0.0.75] 2023-08-23
### Added
- Added support for passing in the granularity when running queries
- Added fetching the datasets from the backend when prompting to select a dataset
- Added printing a chart of the query results

## [0.0.74] 2023-08-15
### Removed
- Removed _firstSeen and _lastSeen from the query results


## [0.0.73] 2023-07-07
### Added
- Added kengine mark command
### Changed
- Improved the docs of the kengine rehydrate command
### Removed
- Removed unnecessary options in kengine console command

## [0.0.72] 2023-06-30
### Fixed
- Fixed data endpoint

## [0.0.71] 2023-06-27

- add GitHub login support
  
## [0.0.70] 2023-06-15
### Changed
- Updated the series data types to enable multi-group bys
- Added rehydration command

## [0.0.69] 2023-05-31
### Changed
- Changed the data structure for queries to enable multiple group bys

## [0.0.68] 2023-05-29
### Changed
- Changed the data structure for query calculations to enable multiple group-bys

## [0.0.67] 2023-05-23
### Changed
- Fixed typo in templates docs
- Add support for email alerts

## [0.0.66] 2023-05-16
### Changed
- Renamed push command to deploy
- Renamed environments command to connect
- Renamed snapshot command to test
- Fixed the data url

### Removed
- Deleted alerts commands
- Deleted destroy command
- Deleted explain command
- Deleted queries commands
- Deleted services commands

## [0.0.65]
### Removed
- Removed view in the dashboards schema
- Make alert frequency and window optional

## [0.0.64]

### Removed
- Removed namespaces command

### Changed
- Updated docs URL
- Changed the data URL

## [0.0.63]

### Changed

- Point explain to different backend endpoint

## [0.0.62]

### Changed

- Improved error grouping

## [0.0.61]

### Added

- Explaining the error using ChatGPT without the need for an API key

## [0.0.60]

### Added

- Querying errors in user's environment
- Explaining the error using ChatGPT

## [0.0.59]

### Added

- Field flag to the tail command
- Improved README

## [0.0.58]

### Added

- Enable kengine pull to clone existing and discovered services 
- Add filters and calculations 
  - COUNT_DISTINCT
  - STDDEV
  - VARIANCE
  - LIKE
  - NOT_LIKE
  - DOES_NOT_INCLUDE
  - MATCH_REGEX

## [0.0.57]

### Added

- Ability to initialise an existing service

## [0.0.56]

### Fixed

- Do not attempt to update the onboarding for the demo user

## [0.0.55]

- Add calculation alias to queries
- Add support for dashboards Observability as Code

## [0.0.54] 2023-02-23

### Added

- Add service to get keys and tidy up query runs create
- Add the ability to have filter keys with parantheses

## [0.0.52] 2023-02-02

### Added

- Add ca-central-1 to the supported regions
- Add onboarding events to signing up

## [0.0.50] 2023-02-02

- Nicely format templates when calling `kengine templates get`

## [0.0.48] 2023-01-30

### Removed

- removed postinstall script

### Changed

- Simplified error report command
- Added --recurse to kengine templates publish


### Added

- Illustration in the local login screen

### Changed

- Simplified query command

### Added

- A npm post-install script
- Signup from CLI

### Changed

- kengine environments connect is now interactive
- kengine login is more interactive
- Improved flow in kengine init
- Improved flow in kengine query


## [0.0.44] 2023-01-26

### Added

- Interactive query builder

### Changed

- The slack channel the updates are posted to

### Removed

- Removed the CF stack stage in the kengine init command

## [0.0.43] 2023-01-19

### Fixed

- Clarifications in commands documentations
- Fix environment alias and replace with id throughout
- Add space to prevent mentions in Slack update CI

## [0.0.42] 2023-01-18

### Fixed

- Clarifications in commands documentations
- Making selecting stacks in the kengine init command more straightforward
- Do not prompt for the query if the query id is provided in the kengine query command 
- Fix kengine query output edge cases
- Ensure that query filters where values are lists are always between parantheses '()'

### Changed

- kengine init adds the template in the index.yml file instead of downloading it
- Adopt rome.tools for linting and formatting
- Linted and formatted the whole repo

### Added

- Added support for quiet alert checks
- Added support for kengine report slack
- Linting as part of CI/CD
- Facilitate connecting an AWS Account from the CLI

### Removed

- Removed the alias on the debug flag

## [0.0.41] 2022-12-23

### Fixed

- Add package:alpine npm command 

## [0.0.40] 2022-12-23

### Fixed

- Fixed and refactored kengine login

## [0.0.39] 2022-12-22

### Added
- kengine login improvements
- google oauth flow to login
- kengine login --demo to run the demo

## [0.0.38] 2022-12-19

### Added
- Producing alert report as file or stdout

## [0.0.36] 2022-12-19

### Added

- Added support for STARTS_WITH query filter
- Added support for namespaces in query filters using $kengine.namespace as key
- Allow $ in query filters

### Deprecated

- namespaces and namespaceCombination in query definitions
- Removed the concept of namespaceCombination

## [0.0.35] 2022-12-16

### Removed

- Removed `kengine stream` command

### Added

- Added `kengine tail` command

## [0.0.34] 2022-12-16

### Removed

- Removed `kengine plan` command

### Added

- Added `--dry-run` to `kengine push` command

## [0.0.33] 2022-12-16

### Removed

- `--short` flag in `plan` command

## [0.0.32] 2022-12-15

### Added

- Improved inline documentation
- Improved messaging when an error occurs

## [0.0.31] 2022-12-15

### Added

- Add option for shorter diff in `kengine plan`

## [0.0.30] 2022-12-14

### Added

- Enables creating snapshots from within the `report` command

### Changed

- Reduces Docker image size

### Fixed

- Bug fixes

## [0.0.29] 2022-12-13

### Fixed

- Bug fixes

## [0.0.28] 2022-12-13

### Added

- Add support for template variables
- Add kengine stream command

### Changed
- Improve output of query runs
- Rename `kengine comment` to `kengine report`
- Rename `kengine templates create` to `kengine templates report`

### Fixed

- Bug fixes

## [0.0.27] 2022-12-7

### Fixed

- Bug fixes

## [0.0.26] 2022-12-6

### Added

- Enable definition of multiple possible values for variables and select in the command flags

## [0.0.25] 2022-12-05

### Added

- Add support for negative numbers as alert thresholds
- Validate filters, calculations, thesholds and order bys inline
- Add `templates` commands
- Add support for observability as code variables
- Add support for inline variables
- Add support for running queries without calculations

### Changed

- Rename applications to services

## [0.0.24] 2022-11-30

### Added

- Add support for inline channels in alerts
- Add `kengine query` command

### Changed

- Rename `apply` to `push`
- Rename `refresh` to `pull`

### Deprecated

- Deprecate channels

## [0.0.23] 2022-11-11

- Add support for search needles in queries
- Add support for multiple datasets in queries

## [0.0.22] 2022-10-31

- Add support for `orderBy`, `limit` and `order` in queries
- Add support for geting API key from environment variable
- `imported` folder for resources imported with `kengine refresh`
- Deprecate dashboards
- Deprecate charts
- Deprecate email alerts
- Deprecate individual functions in `index.yml` file

## [0.0.21] 2022-10-09

- Add Dockerfile
- Imporoved prompts
- Improved outputs
- Bug fixes

## [0.0.20] 2022-10-08

- Add support for `comment` commands
- Add support for `status` command
- Improved outputs
- Bug fixes

## [0.0.19] 2022-10-03

- Add support for cron expression for alerts
- Improved outputs
- Remove the need for `auth` when `login`, `logout` and `iam`
- Bug fixes

## [0.0.18] 2022-09-26

- Add support for stacks in the application definition
- Add support for `IN` and `NOT_IN` operations for query filters
- Add dataset to `events stream` command output
- Feedback on the status of a `apply` command
- Interactive `init` command
- Interactive `queries run` command
- Bug fixes

## [0.0.17] 2022-09-21

- Add support for the application flag in the `events stream` command

## [0.0.16] 2022-09-19

- Add support for filters and searches in the `events stream` command
- Error handling
- Bug fixes

## [0.0.15] 2022-09-13

- Remove the need for `:` when declaring query filters and alert thresholds

## [0.0.14] 2022-09-12

- Enable setting the `provider` in an application
- Enable setting the `functions` and `infrastructure` in the `index.yml` for an application
- List `functions` when running `kengine init` to populate the `infrastructure` field of the `index.yml` 
- Bug fixes

## [0.0.13] 2022-09-08

- Implement `refresh` command
- Enable setting up global namespaces for all queries in an application
- Bug fixes

## [0.0.12] 2022-09-05

- Bug fixes

## [0.0.11] 2022-09-02

- Implement `plan` and `destroy` commands
- Bug fixes

## [0.0.10] 2022-08-24

- Add support for `slack` and `webhook` channel types
- Bug fixes

## [0.0.9] 2022-08-12

- Add support for templates when initialising a new application with `kengine init`
- Bug fixes

## [0.0.8] 2022-09-01

- Migrate to using a `.kengine` folder rather than a `.kengine.yml` file

## [0.0.7] 2022-07-29

- Adds `dashboards` command
- Prevents unknown keys in resources schemas
- Adds collection of telemetry data
- Bug fixes

## [0.0.6] 2022-07-04

- Adds `channels` command
- Adds `charts` command
- Add support for queries with `groupBy`
- Bug fixes

## [0.0.5] 2022-06-17

- Adds `upgrade` command
- Improves default query and alert created with `init` command
- Add `environment setup` command
- Bug fixes

## [0.0.4] 2022-06-03

- Adds `--follow` flag to `events stream` command
- Adds namespace combination to queries and the `events stream` command
- Simplifies query filters
- Simplifies alert thresholds
- Adds sample queries, alerts and channels in the file generated by `kengine init`
- Bug fixes

## [0.0.3] 2022-05-23

- Adds `auth` commands
- Adds `applications` commands
- Adds `namsepaces` commands
- Adds `events` commands
- Adds `--debug` flag
- Impoves error messages
- Better documentation
- Bug fixes

## [0.0.2] 2022-05-05

- Adds support for alerts channels
- Bug fixes

## [0.0.1] 2022-04-18

- Initial release