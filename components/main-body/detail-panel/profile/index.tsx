import { FC, useEffect } from 'react';
import { ProfileProps } from 'lib/@types/common'
import { useRouter } from "next/router";
import { ENDPOINTS, HEADERS } from 'lib/api'
import { API_DOMAIN } from 'lib/general-config'
import axios from 'axios'
const Profile: FC<ProfileProps> = () => {
    const getEntries = async () => {
        const response = await axios.get(
            API_DOMAIN + ENDPOINTS.GET.entries, {
            headers: {
                ...HEADERS.JSON
            }
        })
    }
    useEffect(() => {
        getEntries()
    }, [])

    const router = useRouter();
    return (
        <div onClick={() => {
            router.push(`/url`);
        }}>Profile Panel</div>
    )
}
export default Profile;