export interface Props {
  datetime: string | Date;
  dateOnly?: boolean;
  size?: 'sm' | 'lg';
  className?: string;
}

export default function Datetime({
  datetime,
  dateOnly = false,
  size = 'sm',
  className,
}: Props) {
  return (
    <div className={`flex opacity-80 ${className}`}>
      <span className={`italic ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
        <FormattedDatetime datetime={datetime} dateOnly={dateOnly} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({
  datetime,
  dateOnly,
}: {
  datetime: string | Date;
  dateOnly: boolean;
}) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString([], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (dateOnly) {
    return <>{date}</>;
  }

  const time = myDatetime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
      {date}
      <span aria-hidden="true"> | </span>
      <span className="sr-only">&nbsp;at&nbsp;</span>
      {time}
    </>
  );
};
