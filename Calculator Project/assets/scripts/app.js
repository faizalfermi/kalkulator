const defalutResult = 0;
let currentResult;
let logEntries = [];

// ambil angka dari input user
function inputAngkaDariUser() {
  return parseInt(userInput)
}

function cetakDanTulisKalkulator(hasilAwal, operator, hasilSaatIni) {
  const deskripsiKalkulator = `${hasilAwal} ${operator} ${hasilSaatIni}`;
  outputResult(currentResult, deskripsiKalkulator);
}

function log(currentResult, operationNumber, result, operationType) {
  const logEntry = {
    currentResult = saatIni,
    operationNumber = tipeOperasi,
    result = akhirResult,
    operationType = tipeOperasi
  };
  logEntires.push(logEntry);
  console.log(logEntries);
}

// perhitungan kalkulator 
function kalkulator (calculationType) {
  const enteredNumber = inputAngkaDariUser();
  if (calculationType === 'TAMBAH' || 
      calculationType === 'KURANG' ||
      calculationType === 'KALI' ||
      calculationType === 'BAGI'
      ) {
        return;
      }
  const initialResult = currentResult; 
  let mathOperator;
  if (calculationType === 'TAMBAH') {
    enteredNumber += currentResult;
    mathOperator = '+';
  } else if (calculationType === 'KURANG') {
    enteredNumber -= currentResult;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    enteredNumber *= currentResult;
    mathOperator = '*';
  } else if (calculationType === 'BAGI') {
    enteredNumber /= currentResult;
    mathOperator = '/';
  }
  cetakDanTulisKalkulator (initialResult, operator, enteredNumber);
  log (initialResult, mathOperator, currentResult, calculationType);
}

function tambah () {
  kalkulator('TAMBAH');
}


addBtn.addEventListener('click');
subtractBtn.addEventListener('click');
multiplyBtn.addEventListener('click');
divideBtn.addEventListener('click');