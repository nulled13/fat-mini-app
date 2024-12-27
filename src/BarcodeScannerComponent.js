import React, { useState } from 'react';
import { BarcodeScanner } from 'react-barcode-scanner';  // Исправленный импорт

const BarcodeScannerComponent = () => {
  const [barcode, setBarcode] = useState([]);
  const [isScanning, setIsScanning] = useState(false);

  // Функция обработки сканированного штрихкода
  const handleScan = (data) => {
    setBarcode(data[0].rawValue)
    setIsScanning(false); // Остановить сканирование после нахождения штрихкода
  };

  // Функция обработки ошибок
  const handleError = (err) => {
    console.error('Ошибка сканирования:', err);
  };

  // Функция для старта и остановки сканирования
  const toggleScanner = () => {
    setIsScanning(!isScanning);
    setBarcode(null); // Очистить результат при начале нового сканирования
  };

  return (
    <div>
      <button onClick={toggleScanner}>
        {isScanning ? 'Остановить сканирование' : 'Запустить камеру'}
      </button>

      {isScanning ? (
        <BarcodeScanner
          onCapture={handleScan}
          onError={handleError}
          options={{delay: 300, formats: ['ean_13']}}
        />
      ) : (
        <div>{barcode ? `Сканированный штрихкод: ${barcode}` : 'Нажмите кнопку для начала сканирования'}</div>
      )}
    </div>
  );
};

export default BarcodeScannerComponent;
