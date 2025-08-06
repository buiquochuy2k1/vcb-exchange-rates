import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

const VCB_XML_ENDPOINT =
  'https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx';

/**
 *  Request Vietcombank XML endpoint and parse data
 * @returns {Promise<Object|null>}
 */
export async function getVCBExchangeRates() {
  try {
    const response = await fetch(VCB_XML_ENDPOINT, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const xml = await response.text();

    // Parse XML to JS object
    const result = await parseStringPromise(xml, {
      explicitArray: false, 
      mergeAttrs: true, 
    });

    return result;
  } catch (err) {
    console.error('Error fetching/parsing VCB exchange rates:', err);
    return null;
  }
}
