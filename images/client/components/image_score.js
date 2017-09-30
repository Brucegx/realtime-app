import React from 'react';

const ImageScore = (props) => {
    const { ups, downs } = props;

    const upsPrecent = `${100 * (ups / (ups + downs))}%`;
    const downsPrecent = `${100 * (downs / (ups + downs))}%`;
    //console.log(downsPrecent)
    return (
        <div>
            Ups/Downs
            <div className="progress">
                <div style={{width: upsPrecent}}className="progress-bar progress-bar-success progress-bar-striped" />
                <div style={{width: downsPrecent}}className="progress-bar progress-bar-danger progress-bar-striped" />
            </div>
        </div>
    );
};

export default ImageScore;