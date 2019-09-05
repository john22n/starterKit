import jsf from 'json-schema-faker';
import {schema} from "./mockDataSchema";
import fs from 'fs';
import chalk from "chalk";
import faker from 'faker';
import path from 'path';

jsf.extend("faker", () => faker);



const json = JSON.stringify(jsf.generate(schema));
fs.writeFile('/Users/johnnoriega/WebstormProjects/starterKit/starterKit/src/api/db.json', json, err => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("mock data generatated"))
  }
});