export default function ToDoCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={4}>{category}</th>
    </tr>
  );
}