module.exports = function check(str, bracketsConfig) {
  const samples = bracketsConfig.flatMap(item => item.join(""));
  let counter = 0;

  for (let i = 0; i < samples.length; i++) {
    if(!str.includes(samples[i])) counter++;
    else str = str.replace(samples[i], "");
  }

  if (counter === samples.length) return false;

  if (str.length === 0) return true;

  return check(str, bracketsConfig);
}


