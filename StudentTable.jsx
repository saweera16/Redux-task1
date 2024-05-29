import React from 'react';

function StudentTable() {
    // Dummy data
    const courses = [
        { id: 1, coursename: "Mathematics", author: "John Doe", subject: "Algebra" },
        { id: 2, coursename: "Science", author: "Jane Smith", subject: "Physics" },
        { id: 3, coursename: "History", author: "Michael Johnson", subject: "World History" },
        { id: 4, coursename: "English", author: "Emily Brown", subject: "Literature" },
        { id: 5, coursename: "Computer Science", author: "David Wilson", subject: "Programming" }
    ];

    return (
        <div className='px-20 pt-20'>
            <h2 className='text-center text-3xl font-semibold mb-5'>Course Table</h2>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                coursename
                            </th>
                            <th scope="col" className="px-6 py-3">
                                author
                            </th>
                            <th scope="col" className="px-6 py-3">
                                subject
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map over the courses array to generate table rows */}
                        {courses.map(course => (
                            <tr key={course.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {course.id}
                                </th>
                                <td className="px-6 py-4">
                                    {course.coursename}
                                </td>
                                <td className="px-6 py-4">
                                    {course.author}
                                </td>
                                <td className="px-6 py-4">
                                    {course.subject}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentTable;
