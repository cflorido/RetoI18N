import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Job = ({ offer, locale }) => {
  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>
  <FormattedMessage id={`Position.${offer.name}`} defaultMessage={offer.name} />
</td>
      <td>{offer.company}</td>
      <td>
        <FormattedNumber value={offer.salary} />{" "}
        <FormattedMessage
          id={locale === "es" ? (offer.salary === 1 ? "Million" : "Milliones") : "Million"}
        />
      </td>
      <td>
        <FormattedMessage id={offer.city} defaultMessage={offer.city} />
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
      <FormattedNumber value={offer.views} useGrouping={true} />
    </td>

    </tr>
  );
};

export default Job;
