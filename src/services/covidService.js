import { httpService } from './httpService'
import axios from 'axios'
import { StorageService } from './StorageService';

// var axios = Axios.create({
//     withCredentials: false,
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     }
// })
const headers = {
    'Content-Type': '*'
};
export const covidService = {
    getData,
    getDataVaccineByage

}


async function getData() {
    try {

        var data = await axios.get('https://data.gov.il/api/3/action/datastore_search?resource_id=d07c0771-01a8-43b2-96cc-c6154e7fa9bd&limit=600000', { headers })
        return data.data.result
    }
    catch (err) {

        throw err
    }
}
async function getDataVaccineByage() {
    try {

        var data = await axios.get('https://data.gov.il/api/3/action/datastore_search?resource_id=57410611-936c-49a6-ac3c-838171055b1f&limit=700', { headers })
        return data.data.result
    }
    catch (err) {

        throw err
    }
}