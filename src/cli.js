import arg from "arg";
import inquirer from "inquirer";
import { createProject } from "./main";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--skip": Boolean,
      "--typescript": Boolean,
      "-s": "--skip",
      "-t": "--typescript",
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  return {
    skipPrompt: args["--skip"] || false,
    template: args._[0],
  };
}

async function promptForMissingOptions(options) {
  const defaultTemplate = "JavaScript";
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

  const answer = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answer.template,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
}
