import React from 'react';

const Contributions = ({contributions}) => {

    return(
        <div>
            <div className="contributionRow">
            {contributions.weeks.splice(-38).map( (week) => {
                    return(
                        <div className="contributionColumn">
                            {week.contributionDays.map((day) => {
                                return (
                                    <div className="day" style={{backgroundColor: day.color}}>
                                        {''}
                                    </div>
                                );
                            })}
                        </div>
                    );
            })}
            </div>
            <h3>Total Contributions: {contributions.totalContributions}</h3>
        </div>
    );
}

export default Contributions