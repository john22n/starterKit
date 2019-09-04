import jsdom from 'jsdom';
import fs from 'fs';
import path from 'path';


const index = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');

const {JSDOM} = jsdom;
const dom  = new JSDOM(index, { runScripts: 'dangerously'});



describe('index.html', () => {
  it('should say something', () => {
    console.log(dom.window.document.getElementById('yo').textContent);
    const h1 = dom.window.document.getElementById('yo').textContent;
      expect(h1).toEqual('Yo');
      window.close();
  })
});