#!/usr/bin/env node

import yargs, { Arguments } from "yargs";
import { hideBin } from "yargs/helpers";
import { getVersion } from "./shared";
import { trackCommand } from "./services/telemetry/telemetry";
async function track(args: Arguments) {
  const command = args._[0];
  await trackCommand(command.toString(), args);
  return;
}

yargs(hideBin(process.argv))
  .commandDir("commands")
  .demandCommand()
  .usage("kengine [command]\nThe power of Kengine in the command-line")
  .recommendCommands()
  .wrap(yargs.terminalWidth())
  .help("help", "Show this help output, or the help for a specified command or subcommand")
  .version("version", "Show the current Kengine CLI version", getVersion())
  .strict()
  .middleware(track, false)
  .alias({ h: "help", v: "version" }).argv;
