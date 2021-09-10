import useToggle from "../../hooks/useToggle/useToggle";

export default function ToggleComponent() {
    const [value, setToggle] = useToggle(false);

    return (
        <div>
            <button onClick={setToggle}>Toggle value</button>
            <button onClick={() => setToggle(true)}>Make it true</button>
            <button onClick={() => setToggle(false)}>Make it false</button>
            <div>{value.toString()}</div>
        </div>
    )
}