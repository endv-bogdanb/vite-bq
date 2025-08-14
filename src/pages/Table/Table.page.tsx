import { type FC, useEffect, useState } from "react";
import { BqButton, BqIcon, BqSwitch, BqTag } from "@beeq/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styles from "./Table.module.css";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const columnHelper = createColumnHelper<Todo>();

const columns = [
  columnHelper.accessor("id", {
    enableSorting: true,
    header: "ID",
  }),
  columnHelper.accessor("userId", {
    enableSorting: false,
    header: "User ID",
  }),
  columnHelper.accessor("title", {
    enableSorting: false,
    header: "Title",
  }),
  columnHelper.accessor("completed", {
    cell: (info) => (
      <BqTag color={info.getValue() ? "success" : "gray"}>
        {info.getValue() ? "Yes" : "No"}
      </BqTag>
    ),
    enableSorting: false,
    header: "Completed",
  }),
];

export const Table: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    void (async function fetchTodos(signal: AbortSignal) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
          {
            signal,
          },
        );
        const todos = await response.json();
        setTodos(todos);
      } catch {
        console.warn("Failed to fetch todos");
      }
    })(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, []);

  const table = useReactTable({
    columns,
    data: todos,
    enableSorting: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <div className={styles.filters}>
        <BqSwitch
          onBqChange={(event) =>
            table.setColumnFilters(() =>
              event.detail.checked ? [{ id: "completed", value: true }] : [],
            )
          }
        >
          Completed
        </BqSwitch>
        <BqSwitch
          checked={table.getIsAllColumnsVisible()}
          onBqChange={(event) =>
            table.setColumnVisibility(() => ({ userId: event.detail.checked }))
          }
        >
          User id
        </BqSwitch>
      </div>
      <div className="bq-table--container">
        <table className="bq-table compact">
          <thead>
            <tr>
              {table.getFlatHeaders().map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div
                    className={`${styles.header} ${header.column.getCanSort() ? styles.pointer : ""}`}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {header.column.getCanSort() ? (
                      <BqIcon
                        size={16}
                        name={
                          header.column.getIsSorted()
                            ? header.column.getNextSortingOrder() === "asc"
                              ? "arrow-up"
                              : "arrow-down"
                            : "arrows-down-up"
                        }
                      />
                    ) : null}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={table.getFlatHeaders().length}>
                <div className={styles.footer}>
                  <BqButton
                    size="small"
                    appearance="text"
                    disabled={!table.getCanPreviousPage()}
                    onClick={() => table.previousPage()}
                  >
                    <BqIcon name="arrow-left" />
                  </BqButton>
                  <span>
                    {table.getState().pagination.pageIndex + 1}/
                    {table.getPageCount()}
                  </span>
                  <BqButton
                    size="small"
                    appearance="text"
                    disabled={!table.getCanNextPage()}
                    onClick={() => table.nextPage()}
                  >
                    <BqIcon name="arrow-right" />
                  </BqButton>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};
