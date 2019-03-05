import React from "react";

import { Modal, ModalHeader, ModalContent, ModalFooter } from "../../../Modal";
import { TextFieldType } from "../../../TextFieldType";
import { Button } from "../../../Button";
import { Url } from "../../../Url";

import { schema } from "../react-prosemirror-schema";

import styles from "./EmbedModal.less";
export class EmbedModal extends React.Component {
  embed = React.createRef();

  state = {
    id: ""
  };

  constructor(props) {
    super(props);
    if (!this.props.options && !this.props.options.service) {
      throw new Error(
        "EmbedModal is missing required `options` property with a service specified."
      );
    }
  }

  componentDidMount() {
    this.embed.current.querySelector("input").focus();
    window.addEventListener("keypress", this.onEnter);
  }

  componentWillUnmount() {
    window.removeEventListener("keypress", this.onEnter);
  }

  onEnter = evt => {
    if (evt.key === "Enter" || evt.keyCode == 13) {
      this.onSave();
    }
  };

  onSave = () => {
    if (this.state.id) {
      this.props.view.dispatch(
        this.props.view.state.tr.replaceSelectionWith(
          schema.nodes.iframe.create({
            id: this.state.id,
            "data-service": this.props.options.service
          })
        )
      );
    }

    zesty.trigger("PROSEMIRROR_DIALOG_CLOSE", "showEmbedModal");
    this.props.view.focus();
  };

  render() {
    return (
      <Modal
        type="local"
        className={styles.EmbedModal}
        onClose={() => {
          zesty.trigger("PROSEMIRROR_DIALOG_CLOSE", "showEmbedModal");
        }}
      >
        <ModalContent>
          {this.props.options.service === "Twitframe" && (
            <h1>
              <i className="fa fa-exclamation-triangle" aria-hidden="true" />
              &nbsp;
              <Url href="https://twitframe.com/" target="_blank">
                Twitframe
              </Url>{" "}
              embeds require the full URL for the tweet you would like to embed.
            </h1>
          )}
          <TextFieldType
            innerRef={this.embed}
            label={`Enter unique ${this.props.options.service} ID`}
            name="embed"
            placeholder="e.g. puXYPrrsrA"
            required="true"
            autoFocus="true"
            onChange={(name, id) => this.setState({ id })}
          />
        </ModalContent>
        <ModalFooter>
          <Button
            kind="save"
            disabled={this.state.id.length === 0}
            onClick={this.onSave}
          >
            <i className="fa fa-plus" aria-hidden="true" />
            Insert Embed
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
