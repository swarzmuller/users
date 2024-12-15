import { DataProps } from "@/types";

export const renderTableData = (data: DataProps, keyPrefix?: string) => {
  return Object.entries(data).map(([key, value]) => {
    const compositeKey = keyPrefix ? `${keyPrefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      return (
        <tr key={compositeKey}>
          <td>
            <strong>{key}</strong>
          </td>
          <td>
            <table>
              <tbody>{renderTableData(value, compositeKey)}</tbody>
            </table>
          </td>
        </tr>
      );
    }
    return (
      <tr key={compositeKey}>
        <td>
          <strong>{key}</strong>
        </td>
        <td>{value as string}</td>
      </tr>
    );
  });
};
