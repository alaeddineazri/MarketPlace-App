import {useSelector} from 'react-redux'
import {Card , Avatar} from 'antd'
import moment from 'moment'



const {Meta}=Card

function ConnectNav() {
    const {auth}= useSelector(state => ({...state}))
    const {user}=auth
    return (
        <div className="d-flex justify-content-around">
            <Card>
                <Meta  avatar={<Avatar>{user.name[0].toUpperCase()} </Avatar>} title={user.name} description={`Joined ${moment(user.createdAt).fromNow()}`}/>
            </Card>
            {auth &&
            auth.user &&
            auth.user.stripe_seller &&
            auth.user.stripe_seller.charge_enabled &&
            (<>
                <div>Pending balance</div>
                <div>Payout settings</div>
            </>)
            }
        </div>

)}

export default ConnectNav;
