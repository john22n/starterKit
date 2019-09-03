import jsdom from 'jsdom';
import fs from 'fs';

describe('index.html', () => {
  it('should say something', () => {
    expect('it to say something', () => {
      const index = fs.readFileSync('./index.html', 'utf-8');
      jsdom.env(index, (err, window) => {
        const h1 = window.document.getElementById('yo')[0];
        expect(h1.innerHTML).toEqual('yo');
        done();
        window.close();
      })
    })
  })
});