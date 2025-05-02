import React from 'react'

const SchoolTiming = () => {
return (
    <div className="container w-full flex-center min-h-screen mb-10 h-full mt-2 md:mt-14 flex-col relative mx-auto bg-slate-50">
        <h1 className="text-2xl md:mt-2 relative hori-strip after:top-15 md:text-4xl text-blue-600 text-center font-bold">School Timings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4">
            <div>
                <h2 className="text-xl font-semibold mb-2">IOS School Timings</h2>
                <p><strong>Grade Nursery to Kindergarten:</strong> 10:00 am to 12:30 pm</p>
                <p><strong>Grade I & II:</strong> 8:00 am to 12:30 pm</p>
                <p><strong>Grade III to XII:</strong> 8:00 am to 2:30 pm</p>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">Administration Office</h2>
                <p><strong>Timing:</strong> 8:00 am to 3:00 pm</p>
            </div>
        </div>
    </div>
)
}

export default SchoolTiming