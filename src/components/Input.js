export default function Input({ location, onChangeLocation }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by location..."
        value={location}
        onChange={onChangeLocation}
      />
    </div>
  );
}
