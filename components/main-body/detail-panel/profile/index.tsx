import { FC } from 'react';
import { ProfileProps } from 'lib/@types/common'
import { useRouter } from "next/router";
const Profile: FC<ProfileProps> = () => {
    const router = useRouter();
    return (
        <div onClick={() => {
            router.push(`/url`);
        }}>Profile Panel</div>
    )
}
export default Profile;