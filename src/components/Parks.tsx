import React, { useState } from 'react';
import allParks from '@data/allParks.json';
import parkVisits from '@data/parkVisits.json';
import internationalParkVisits from '@data/internationalParkVisits.json';

type Park = {
  description: string;
  nps_link: string;
  states: string[];
  title: string;
  id: string;
  visitors: number;
  world_heritage_site: boolean;
  location: string;
  acres: number;
  square_km: number;
  date_established: string;
};

type ParkVisit = {
  date: string;
  park_id: string;
  pictures?: string[];
};

const createParkMap = (parks: Park[]) => {
  const parkMap = parks.reduce(
    (acc, park) => {
      acc[park.id] = park;
      return acc;
    },
    {} as Record<string, Park>,
  );

  return parkMap;
};

const groupParksByState = (parks: Park[]) => {
  const groupedParks = parks.reduce(
    (acc, park) => {
      const states = park.states;
      states.forEach((state) => {
        if (!acc[state]) {
          acc[state] = [];
        }
        acc[state].push(park.id);
      });
      return acc;
    },
    {} as Record<string, string[]>,
  );

  return groupedParks;
};

// TODO: Use Object.groupBy when TS 5.4 is available
const groupParkVisitsByPark = (parkVisits: ParkVisit[]) => {
  const groupedVisits = parkVisits.reduce(
    (acc, visit) => {
      const parkId = visit.park_id;
      if (!acc[parkId]) {
        acc[parkId] = [];
      }
      acc[parkId].push(visit);
      return acc;
    },
    {} as Record<string, ParkVisit[]>,
  );

  return groupedVisits;
};

const groupedParks = groupParksByState(allParks);
const sortedGroupedParks = Object.entries(groupedParks).sort((a, b) => {
  const [stateA] = a;
  const [stateB] = b;
  return stateA.localeCompare(stateB);
});

const parkMap = createParkMap(allParks);
const groupedVisits = groupParkVisitsByPark(parkVisits);

type Filter = 'visited' | 'all';
type GroupBy = 'state' | 'none';

const Parks = () => {
  const [filter, setFilter] = useState<Filter>('visited');
  const [groupBy, setGroupBy] = useState<GroupBy>('state');

  return (
    <>
      <TotalVisited />
      <Controls
        filter={filter}
        groupBy={groupBy}
        setFilter={setFilter}
        setGroupBy={setGroupBy}
      />
      {groupBy === 'state' && (
        <div className="parks-grid">
          {sortedGroupedParks.map(([state, parks]) => (
            <State key={state} state={state} parks={parks} filter={filter} />
          ))}
        </div>
      )}
      {groupBy === 'none' && (
        <ul className="parks-flat-list">
          {allParks.map((park) => (
            <ParkVisit key={park.id} parkId={park.id} filter={filter} />
          ))}
        </ul>
      )}
      <InternationalParks />
    </>
  );
};

const TotalVisited = () => {
  return (
    <div className="parks-summary">
      Visited: {Object.keys(groupedVisits).length} out of {allParks.length}
    </div>
  );
};

const Controls = ({
  filter,
  groupBy,
  setFilter,
  setGroupBy,
}: {
  filter: Filter;
  groupBy: GroupBy;
  setFilter: (filter: Filter) => void;
  setGroupBy: (groupBy: GroupBy) => void;
}) => {
  const buttonClass = (active: boolean) =>
    `parks-button${active ? ' parks-button-active' : ''}`;

  return (
    <>
      <div className="parks-controls">
        View by:
        <button
          className={buttonClass(filter === 'visited')}
          onClick={() => setFilter('visited')}
        >
          Visited
        </button>
        <span>|</span>
        <button
          className={buttonClass(filter === 'all')}
          onClick={() => setFilter('all')}
        >
          All
        </button>
      </div>
      <div className="parks-controls parks-controls-last">
        Group by:
        <button
          className={buttonClass(groupBy === 'state')}
          onClick={() => setGroupBy('state')}
        >
          State
        </button>
        <span>|</span>
        <button
          className={buttonClass(groupBy === 'none')}
          onClick={() => setGroupBy('none')}
        >
          None
        </button>
      </div>
    </>
  );
};

const State = ({
  state,
  parks,
  filter,
}: {
  state: string;
  parks: string[];
  filter: Filter;
}) => {
  const hasVisited = parks.some((parkId) => {
    const visits = groupedVisits[parkId];
    return Boolean(visits?.length > 0);
  });
  if (filter === 'visited' && !hasVisited) {
    return null;
  }

  return (
    <div className="parks-state" key={state}>
      <h2 className="parks-state-title">{state}</h2>
      <ul>
        {parks.map((parkId) => {
          return <ParkVisit key={parkId} parkId={parkId} filter={filter} />;
        })}
      </ul>
    </div>
  );
};

const ParkVisit = ({ parkId, filter }: { parkId: string; filter: Filter }) => {
  const park = parkMap[parkId];
  const visits = groupedVisits[parkId];
  const hasVisited = Boolean(visits?.length > 0);
  if (hasVisited) {
    return <li>✅ {park.title}</li>;
  }
  return filter === 'all' ? <li>{park.title}</li> : null;
};

const InternationalParks = () => {
  return (
    <div className="parks-international">
      <p>
        Not directly part of my goal, but I've also visited a few international
        parks:
      </p>
      <ul>
        {internationalParkVisits.map((visit) => {
          return (
            <li key={visit.name}>
              {visit.name} ({visit.country})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Parks;
