const parseEnv = () => {
  const rssEnvVariable = "RSS_";
  let result = "";

  for (const key in process.env) {
    if (key.startsWith(rssEnvVariable)) {
      result += `${key}=${process.env[key]}; `;
    }
  }

  console.log(result);
};

parseEnv();
