const parseArgs = () => {
  const args = {};
  for (let i = 2; i < process.argv.length - 1; i += 2) {
    args[process.argv[i]] = process.argv[i + 1];
  }

  let result = "";
  for (const arg in args) {
    result += `${arg.replace("--", "")} is ${args[arg]}, `;
  }
  
  console.log(result.substring(0, result.length - 2));
};

parseArgs();
