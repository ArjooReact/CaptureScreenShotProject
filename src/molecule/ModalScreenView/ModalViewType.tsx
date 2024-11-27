
export interface ModalViewType{
    toggleSwitch:()=>void
    onChange:()=> void
    isEnabled:boolean
    uri:string
    postData?:PostDataType
}

export interface PostDataType{
    OS:string
    deviceName?:string
    deviceMacAddress:string
    IMEI:string
    Location:LocationType
    publicIPAddress:string
    screenShotStatus:string
}

export interface LocationType{
    latitude:number
    longitude:number
}