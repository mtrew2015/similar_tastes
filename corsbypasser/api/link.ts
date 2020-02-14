import { NowRequest, NowResponse } from '@now/node'
import { kMaxLength } from 'buffer';
import axios from 'axios';


export default async function(req: NowRequest,res: NowResponse) {
res.setHeader('Access-Control-Allow-Origin', '*')
res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
const baseurl: string = req.body.baseurl;
const queryParams = req.body.queryParams
axios.get(baseurl + queryParams)
.then(response => res.status(200).send(response.data))
}