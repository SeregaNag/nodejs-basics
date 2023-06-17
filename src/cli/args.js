const parseArgs = () => {
  const args = process.argv.slice(2);

  const formattedArgs = args.map((arg, index) => {
    if (index % 2 === 0) {
      const prop = arg.slice(2);
      const value = args[index + 1];
      return `${prop} is ${value}`;
    }
  });

  console.log(formattedArgs.join(", "));
};

parseArgs();
