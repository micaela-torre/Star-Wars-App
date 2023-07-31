import React from 'react';
import { PublicRoutes } from '../../../../models/routes';
import { Link } from 'react-router-dom';

export const RenderDetail = (item, index) => {
  const { id, label, value, section, data } = item;

  if (data?.length > 0) return data?.map(RenderDetail);
  return (
    <React.Fragment key={`RenderDetail_${index}`}>
      {!section && !id ? (
        <span>{value}</span>
      ) : (
        <ul>
          <li>
            <Link to={`${PublicRoutes.DETAILS}${section}/${id}/`}>
              See {label} {id}
            </Link>
          </li>
        </ul>
      )}
    </React.Fragment>
  );
};
