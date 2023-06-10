import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import React from "react";
import { getNigeriaStates, getLgaSubAreas } from "geo-ng";

const nigeriaStates = getNigeriaStates();

const getStateData = () => {
  const result: CollapseProps["items"] = nigeriaStates.map((i, index) => {
    const getItems2 = (): CollapseProps["items"] =>
      i.lgas.map((lga, lgaIndex) => {
        const subs = getLgaSubAreas(i.code, lga);
        return {
          key: (lgaIndex + 1).toString(),
          label: lga,
          children: (
            <div>
              <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Sub-areas in {lga}
              </h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                {subs.map((sub, subIndex) => (
                  <li key={subIndex}>{sub}</li>
                ))}
              </ul>
            </div>
          ),
        };
      });

    return {
      key: (index + 1).toString(),
      label: i.name,
      children: (
        <div className="">
          <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
            Local government areas under {i.name}
          </h2>
          <Collapse items={getItems2()} />
        </div>
      ),
    };
  });
  return result;
};

const StatesList: React.FC = () => {
  return (
    <div className="  pb-10">
      <Collapse items={getStateData()} />
    </div>
  );
};

export default StatesList;
