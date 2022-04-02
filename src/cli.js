import arg from "arg";
import inquirer from "inquirer";
import { createProject } from "./main";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--skip": Boolean,
      "--typescript": String,
      "--yarn": String,

      "-s": "--skip",
      "-t": "--typescript",
      "-y": "--yarn",
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  return {
    skipPrompt: args["--skip"] || false,
    template: args._[0],
    packageManager: args["--yarn"] || args["-y"],
  };
}

async function promptForMissingOptions(options) {
  const defaultTemplate = "JavaScript";
  const defaultPackageManager = "npm";

  if (options.skipPrompt) {
    return {
      ...options,
      template: options.template || defaultTemplate,
    };
  }

  const questions = [];
  if (!options.template) {
    questions.push({
      type: "list",
      name: "template",
      message: "Please choose which project template to use",
      choices: ["JavaScript", "TypeScript"],
      default: defaultTemplate,
    });
  }

  if (!options.packageManager) {
    questions.push({
      type: "list",
      name: "packageManager",
      message: "Which package manager do you prefer?",
      choices: ["NPM", "Yarn"],
      default: defaultPackageManager,
    });
  }

  const answer = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answer.template,
    packageManager: options.packageManager || answer.packageManager,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
}
