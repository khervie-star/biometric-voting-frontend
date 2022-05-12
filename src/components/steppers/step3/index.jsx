import image from "../../../assets/svg/fingerprint-svgrepo-com.svg";

export default function Step3() {
  return (
    <>
      <p className="mb-4">Add your fingerprint to complete verification</p>
      <div className="flex justify-center text-center mx-auto my-10">
        <img src={image} width="100px" height="300px" className="text-center" />
      </div>
    </>
  );
}
