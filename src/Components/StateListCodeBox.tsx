import { Card, message } from "antd";
import React from "react";
import { getNigeriaStates } from "geo-ng";
import { CopyOutlined } from "@ant-design/icons";

const nigeriaStates = getNigeriaStates();
export default function StateListCodeBox() {
  class PrettyPrintJson extends React.Component {
    render() {
      return (
        <div>
          <pre>{JSON.stringify(nigeriaStates, null, 2)}</pre>
        </div>
      );
    }
  }

  function copyJSONToClipboard() {
    const jsonString = JSON.stringify(nigeriaStates, null, 2);

    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = jsonString;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the contents of the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea from the document
    document.body.removeChild(textarea);

    // Optional: Show a notification or perform any other action
    message.success("JSON data copied to clipboard!");
  }

  return (
    <div>
      <Card
        type="inner"
        title="States and LGAs in Nigeria"
        extra={
          <CopyOutlined onClick={copyJSONToClipboard} className="text-lg" />
        }
      >
        <div className="max-h-[60vh] overflow-scroll">
          <PrettyPrintJson />
        </div>
      </Card>
    </div>
  );
}
