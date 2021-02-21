//Java: Exception
// JavaScript: Error

//Error Handling : try => catch => finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exist ${fileName}`);
  }

  return fileName;
}

function closeFile(fileName) {
  // 
}


function run() {
  const fileName = 'not exist!';

  try {
    console.log(readFile(fileName))

  } catch (e) {
    console.log('error')
  } finally {
    closeFile(fileName);
  }
}

run();





