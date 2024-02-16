import { Typography } from "@mui/material";
import { useRouter } from "next/router";

const Breadcrumb = ({url}:any) => { 
    // const router = useRouter();
    // const routePath = router.pathname;
    const firstSegment = url.split('/')[0]
    // const secondSegment = routePath.split('/')[1]

    
    // switch (firstSegment) {
    //     case 'dat-dai': { 
    //         firstSegment = 'Đất đai'
    //         break}
    //     case 'gia-dat-gpmb': {'Giá đất GPMB'
    //         break}
    //     default: {
    //         'Quản lý'
    //         break;
    //     }
    // }

    // switch (secondSegment) {
    //     case 'phong': 'Phòng'
    //         break
    //     case 'van-ban': 'Văn bản'
    //         break
    // }

    return (
        <Typography variant='h6' sx={{ mr: 2 }}>{firstSegment}</Typography>
    )
}


export default Breadcrumb;