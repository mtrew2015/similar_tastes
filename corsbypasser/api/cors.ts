import { NowRequest, NowResponse } from '@now/node';
import axios from 'axios';

export default async function(req: NowRequest, res: NowResponse) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    const baseUrl:string = req.body.baseurl
    const queryParams:string =req.body.queryParams

    console.log(baseUrl+queryParams)

    axios.get(baseUrl+queryParams).then((response) => res.status(200).send(response.data))
    .catch(err => res.send(err));
}
