# Update process

## Add or update models

- Make the changes in the `models.json` file
- Run `node gen-readme.js` to (re)generate the `README.md` file



## Run and Update the benchmarks

- Make the changes in the `tests/02-slms-chat-benchmarks/data/models.json` file
- Run `./start.pi.sh` to run the benchmarks
- Run `node gen-reports.js` to (re)generate the `tests/02-slms-chat-benchmarks/data/benchmarks_results.md` file
- Copy the `results.json` file to the root of the project
