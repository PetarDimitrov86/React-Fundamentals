import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const SeriesListItem = ({ series }) => (
    <tr>
        <td>
            <Link to={`/series/${series.show.id}`}>
                {series.show.name}
            </Link>
        </td>
        <td>{series.show.rating.average == null ? 'N/A' : series.show.rating.average}</td>
        <td>{series.show.genres.join(', ')}</td>
        {/* <td>{series.show.summary.substring(0, 100)}</td> */}
        <td>
            <a href={series.show.officialSite}>{series.show.officialSite}</a>                        
        </td>
        <td>
            <img 
            src={series.show.image == null ? '' : series.show.image.medium}
            alt='series poster'></img>
        </td>
    </tr>
)

const SeriesList = props => {
    return (
        <div>
            <table className='series-list'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Genres</th>
                        {/* <th>Summary</th> */}
                        <th>Official Site</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map(series => (
                        <SeriesListItem series={series} key={series.show.id}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SeriesList;