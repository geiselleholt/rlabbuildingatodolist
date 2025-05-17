export default function ToDoCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={3}>{category}</th>
    </tr>
  );
}