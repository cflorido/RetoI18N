import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Job = ({ offer, locale }) => {

  const millionText = locale === "es" ? (offer.salary === 1 ? "millón" : "millones") : "million";

  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>
        <FormattedMessage id={`Position.${offer.name}`} defaultMessage={offer.name} />
      </td>
      <td>
        <FormattedMessage id={`Company.${offer.company}`} defaultMessage={offer.company} />
      </td>
      <td>
        <FormattedNumber value={offer.salary} /> {millionText}
      </td>
      <td>
        <FormattedMessage id={`City.${offer.city}`} defaultMessage={offer.city} />
      </td>
      <td>
        <FormattedDate
          value={new Date(offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={offer.views} />
      </td>
    </tr>
  );
};

export default Job;
