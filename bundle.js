const path = require("path");
const { exec } = require("child_process");
const program = require("commander");
const fs = require("fs");

program
  .version("0.1.0")
  .option("-m, --modules [value]", "Add module")
  .option("-o, --output [value]", "Output Path")
  .parse(process.argv);

const outputMainJS = (modules, outputPath) => {
  let content = fs.readFileSync(path.join(__dirname, `dist/base.jsbundle`));
  modules.forEach(
    module =>
      (content += fs.readFileSync(
        path.join(__dirname, `dist/${module}.jsbundle`)
      ))
  );

  fs.writeFileSync(path.join(__dirname, outputPath), content);
};

const modules = program.output ? program.modules.trim().split(/\s*,\s*/) : [];
// just output the result
if (program.output) {
  outputMainJS(modules, program.output);
} else {
  if (modules.length) {
    // bundle selected modules

    modules.forEach(module => {
      exec(
        `node bundler/local-cli/cli.js bundle \
        --entry-file modules/${module}/index.js \
        --bundle-output dist/${module}.jsbundle \
        --manifest-output dist/${module}.manifest.json \
        --exclude dist/base.manifest.json \
        --platform ios \
        --dev false \
        --use-stable-id true`,
        (err, stdout, stderr) => {
          if (err) {
            return console.log(err);
          }

          // the *entire* stdout and stderr (buffered)
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        }
      );
    });
  } else {
    // bundle core system
    exec(
      `node bundler/local-cli/cli.js bundle \
      --entry-file index.js \
      --bundle-output dist/base.jsbundle \
      --platform ios \
      --dev false \
      --manifest-output dist/base.manifest.json \
      --use-stable-id true`,
      (err, stdout, stderr) => {
        if (err) {
          return console.log(err);
        }

        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);

        if (program.output) {
          outputMainJS([], program.output);
        }
      }
    );
  }
}
