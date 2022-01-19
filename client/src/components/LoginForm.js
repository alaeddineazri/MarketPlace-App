const LoginForm = ({handelSubmit,email,setEmail,password,setPassword}) => {
    return (
        <form onSubmit={handelSubmit} className="mt-3">
            <div className="form-group">
                <label className="label-group" >Email</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="label-group" >Password</label>
                <input
                    className="form-control"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button disabled={!email||!password}  type="submit" className="btn btn-primary" >Login</button>
        </form>
    )
}

export default LoginForm
