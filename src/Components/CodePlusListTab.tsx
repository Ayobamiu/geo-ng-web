import { Tabs } from "antd";
import { CodeSandboxOutlined, OrderedListOutlined } from "@ant-design/icons";
import StatesList from "./StatesList";
import StateListCodeBox from "./StateListCodeBox";

export default function CodePlusListTab() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Tabs
        items={[
          {
            icon: OrderedListOutlined,
            name: "List",
            component: <StatesList />,
          },
          {
            icon: CodeSandboxOutlined,
            name: "JSON",
            component: <StateListCodeBox />,
          },
        ].map((Icon, i) => {
          const id = String(i + 1);

          return {
            label: (
              <span>
                <Icon.icon />
                {Icon.name}
              </span>
            ),
            key: id,
            children: Icon.component,
          };
        })}
      />
    </div>
  );
}
