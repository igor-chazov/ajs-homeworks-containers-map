// import Team from '../app';
import ErrorRepository from '../app';

test('должна получать по коду ошибки текст сообшения', () => {
  const testShowErr = new Map();
  testShowErr.set(1, 'ОШИБКА 1');
  const expected = testShowErr.get(1);

  const errorRepositiry = new ErrorRepository();
  errorRepositiry.errors.set(1, 'ОШИБКА 1');
  const received = errorRepositiry.translate(1);

  expect(received).toEqual(expected);
});

test('должна возвращать сообщение об отсутствии кода текста ошибки', () => {
  function errCode() {
    const testShowErr = new Map();
    testShowErr.set(1, 'ОШИБКА 1');
    const code = 2;
    if (!testShowErr.has(code)) {
      return 'Unknown error';
    }
    return testShowErr.get(code);
  }
  const expected = errCode();

  const errorRepositiry = new ErrorRepository();
  errorRepositiry.errors.set(1, 'ОШИБКА 1');
  const received = errorRepositiry.translate(2);

  expect(received).toEqual(expected);
});
