import { Imóvel } from './smtx.d.ts'
import { parse } from "https://deno.land/x/xml/mod.ts"

type DeepObject = { [key: string]: any };
function getFinalValues(obj: DeepObject, prefix = ''): [string, any][] {
    let results: [string, any][] = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
  
        if (Array.isArray(value) && !isArrayOfObjects(value)) {
          value.forEach((item: any, index: number) => {
            results.push([`${prefix}${key}[${index}]`, item]);
          });
        } else if (typeof value === 'object') {
          const nestedResults = getFinalValues(value, `${prefix}${key}.`);
          results = results.concat(nestedResults);
        } else {
          results.push([`${prefix}${key}`, value]);
        }
      }
    }
  
    return results;
  }
  
  function isArrayOfObjects(arr: any[]): boolean {
    return arr.length > 0 && typeof arr[0] === 'object';
  }
  
function XMLtoJson(XML_uintArray: Uint8Array) {
    const decoder = new TextDecoder("utf-8");
    return parse(decoder.decode(XML_uintArray))
}

const datastore_xml = Deno.readFileSync('./datastore.xml')
const json_from_xml = XMLtoJson(datastore_xml)

const finalValues = getFinalValues(json_from_xml);
console.log(finalValues);
