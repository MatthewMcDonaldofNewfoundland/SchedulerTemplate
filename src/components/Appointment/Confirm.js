import Button from "components/Button";

export default function Show(props) {

  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold"> Delete the appointment?</h1>
      <section className="appointment__actions">
        <Button danger onClick = {props.onCancel} >Cancel</Button>
        <Button danger onConfirm = {props.onConfirm}   >Confirm</Button>
      </section>
    </main> );


};
