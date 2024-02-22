export default function Button(props: { label: string }) {
  return <button>{props.label ?? 'Default'}</button>
}
