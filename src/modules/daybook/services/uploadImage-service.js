import { cloudinaryAPI } from "../../../api/cloudinaryAPI"
import { Service } from "../../../services/service"

class MediaUploadService extends Service{

    constructor(){
        super()
    }

    uploadImageToCloudinary = async ( body ) => {
        // secure_url
        return cloudinaryAPI.post('/upload', body )
    }
}


export default new MediaUploadService
