import React from "react";
import FileUpload from "./react-fileupload";
class FileUploader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    /*set properties*/
    const options = {
      baseUrl: "/manage/product/upload.do",
      fileFieldName: "upload_file",
      dataType: "json",
      chooseAndUpload: true,
      uploadSuccess: res => {
        this.props.onSuccess(res.data);
      },
      uploadError: err => {
        this.props.onError(err.message || "upload falid");
      }
    };
    /*Use FileUpload with options*/
    /*Set two dom with ref*/
    return (
      <FileUpload options={options}>
        <button ref="chooseAndUpload">choose image</button>
      </FileUpload>
    );
  }
}
export default FileUploader;
