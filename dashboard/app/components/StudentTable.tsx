'use client';

import { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table';
import { students, Student } from '../lib/data';

export default function StudentTable() {
  const [search, setSearch] = useState('');

  const columns: ColumnDef<Student>[] = [
    { accessorKey: 'name', header: 'Name', enableSorting: true },
    { accessorKey: 'class', header: 'Class', enableSorting: true },
    { accessorKey: 'assessment_score', header: 'Score', enableSorting: true },
    { accessorKey: 'comprehension', header: 'Comprehension', enableSorting: true },
    { accessorKey: 'attention', header: 'Attention', enableSorting: true },
    { accessorKey: 'focus', header: 'Focus', enableSorting: true },
    { accessorKey: 'retention', header: 'Retention', enableSorting: true },
    { accessorKey: 'engagement_time', header: 'Engagement (min)', enableSorting: true },
    { accessorKey: 'cluster', header: 'Persona', enableSorting: true },
  ];

  const table = useReactTable({
    data: students,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { globalFilter: search },
    onGlobalFilterChange: setSearch,
    globalFilterFn: 'includesString',
  });

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search students..."
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map(header => (
                <th key={header.id} className="p-4 text-left">
                  <button
                    onClick={header.column.getToggleSortingHandler()}
                    className="flex items-center"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getIsSorted() === 'asc' ? ' 🔼' : header.column.getIsSorted() === 'desc' ? ' 🔽' : ''}
                  </button>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="border-t hover:bg-gray-50">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 flex justify-between items-center">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span>Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}