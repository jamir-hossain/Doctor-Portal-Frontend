import React from 'react';

const NotFound = () => {
    const goBack = () => window.history.back();
    
    return (
        <div className="d-flex align-items-center justify-content-center text-center" style={{height:"100vh"}}>
           <div>
                <h1 className="display-1">404</h1>
                <p className="lead">Page Not Found</p>
                <button onClick={goBack} className="btn btn-primary"  to="/"> Go Back </button>
           </div>
        </div>
    );
};

export default NotFound;