const CONTACT_EMAIL = "info@ballotline.com";

const services = [
  {
    name: "Community strategy",
    detail:
      "We help you decide where your community lives, who it is for, and what it should feel like.",
  },
  {
    name: "Day-to-day moderation",
    detail:
      "Our team keeps conversations civil, on topic, and safe. This is especially important in a space such as this.",
  },
  {
    name: "Live feeds",
    detail: "We organize events, Q&As, and feeds that give members a reason to show up and stay.",
  },
  {
    name: "KPI Reporting",
    detail: "Clear updates on growth, activity, and user sentiment so you know what is working.",
  },
];

export function About() {
  return (
    <p>
      <strong>
        BALLOTLINE is a community management firm for organizations in the political sphere.
      </strong>{" "}
      We work with organizations to build meaningful online communities for both our clients and
      members alike.
    </p>
  );
}

export function Services() {
  return (
    <dl className="grid gap-6 sm:grid-cols-2">
      {services.map((service) => (
        <div key={service.name} className="flex flex-col gap-1">
          <dt className="font-display font-black uppercase text-xl">{service.name}</dt>
          <dd>{service.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

const clients = [
  {
    name: "Decision Desk HQ",
    url: "https://decisiondeskhq.com",
  },
];

export function Clients() {
  return (
    <ul className="flex flex-col gap-4">
      {clients.map((client) => (
        <li key={client.name} className="flex flex-col gap-1">
          <a className="self-start" href={client.url}>
            {client.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Contact() {
  return (
    <>
      <p>Tell us about your organization and the community you want to build.</p>
      <a className="self-start" href={`mailto:${CONTACT_EMAIL}`}>
        {CONTACT_EMAIL}
      </a>
    </>
  );
}
