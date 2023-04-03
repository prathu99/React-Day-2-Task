export function Free() {
    return (
        <div className='container'>
            <div className='cards'>
                <h5 className='type'>FREE</h5>
                <h1 className='price'>$0<small className='month'>/month</small></h1>
                <hr></hr>
                <span className='listItems'><b>✔</b> Single User</span>
                <span className='listItems'><b>✔</b> 5GB Storage</span>
                <span className='listItems'><b>✔</b> Unlimited Public Projects</span>
                <span className='listItems'><b>✔</b> Community Access</span>
                <span className='listItems2'>❌ Unlimited Private Projects </span>
                <span className='listItems2'>❌ Dedicated Phone Support</span>
                <span className='listItems2'>❌ Free Subdomain</span>
                <span className='listItems2'>❌ Monthly Status Reports</span>
                <button className='btn'>SELECT NOW</button>
            </div>
        </div>
    );
}
