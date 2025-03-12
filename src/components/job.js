import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Job = ({ offer, locale }) => {
  // Determinar la palabra correcta para millones
  const millionText = locale === "es" ? (offer.salary === 1 ? "millón" : "millones") : "million";

  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>{offer.name}</td>
      <td>{offer.company}</td>
      <td>
        <FormattedNumber value={offer.salary} /> {millionText}
      </td>
      <td>{offer.city}</td>
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
