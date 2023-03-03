"use client";

import { WorksProps } from "@/services/casesService";
import { Analytics } from "@/services/analytics";
import { useState } from "react";
import { Card } from "../card/card";
import { MoreIcon } from "../icons/more";
import { UppArrow } from "../icons/upp";
import { Modal } from "../modal/modal";
import { Title } from "../title/title";

export const Work = ({ data }: { data: WorksProps[] }) => {
  const [selectedWork, setSelectedWork] = useState<WorksProps>();
  const [filterWorks, setFilterWorks] = useState(9);
  const showMore = filterWorks === 9;

  const onClick = (work: WorksProps) => {
    setSelectedWork(work)
    Analytics.savePage(work.name)
  }

  return (
    <div>
      <Title>my work</Title>
      <div className="flex sm:space-x-3 flex-wrap justify-center">
        {data.slice(0, filterWorks).map((work) => (
          <Card
            name={work.name}
            key={work.id}
            onClick={() => onClick(work)}
            alt={`printscreen from website ${work.name}`}
            src={work.image.url}
          />
        ))}
      </div>

      <div className="flex justify-center mt-7">
        {showMore ? (
          <button onClick={() => setFilterWorks(data.length)}>
            <MoreIcon className="w-10 h-10 mx-2 cursor-pointer" />
          </button>
        ) : (
          <button onClick={() => setFilterWorks(9)}>
            <UppArrow className="w-9 h-9 mx-2 cursor-pointer" />
          </button>
        )}
      </div>

      {selectedWork && (
        <Modal
          work={selectedWork}
          closeModal={() => setSelectedWork(undefined)}
        />
      )}
    </div>
  );
};
