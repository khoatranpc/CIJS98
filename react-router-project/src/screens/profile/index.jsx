import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const ProfilePage = () => {
    return (
        <div className='profilPage' style={{ display: 'flex', marginTop: '12px' }}>
            <div className="col" style={{ borderRight: '1px solid black' }}>
                <h2>Profile page</h2>
                <p>Trần Đăng Khoa</p>
                <p>1999</p>
                <p>Hà Nội Việt Nam</p>
            </div>
            <div className="col" >
                <div style={{ display: 'flex', gap: '12px' }}>
                    <Link to={'/profile/about'}>About</Link>
                    <Link to={'/profile/edit-profile'}>Edit profile</Link>
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;