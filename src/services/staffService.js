
import {post,get,update} from 'services/http';

export default class StaffService {
    create = async (data)=>{
        return await post(data,'api/staff/create')
            .then( res=>{
                return res;
            })
            .catch(e=>{
                return e.message
            })
    }

    get = async (data)=>{
        return await get(data,'api/staff/create')
            .then( res=>{
                return res;
            })
            .catch(e=>{
                return e.message
            })
    }

    all = async (data)=>{
        return await get(data,'api/staff/create')
            .then( res=>{
                return res;
            })
            .catch(e=>{
                return e.message
            })
    }

    update = async (data)=>{
        return await update(data,'api/staff/create')
            .then( res=>{
                return res;
            })
            .catch(e=>{
                return e.message
            })
    }

}