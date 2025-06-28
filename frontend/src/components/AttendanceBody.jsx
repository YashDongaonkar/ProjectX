import { useState, useEffect } from "react";

const AttendanceBody = () => {

    const [subjects, setSubjects] = useState([]);

    const markAttendance = async (subjectId, isPresent) => {
        try {
            // await axios.patch(`/api/user/attendance/${subjectId}`, { isPresent });
            setSubjects(prev =>
                prev.map(subject =>
                    subject.subjectId._id === subjectId
                        ? {
                            ...subject,
                            totalClasses: subject.totalClasses + 1,
                            presentDays: subject.presentDays + (isPresent ? 1 : 0),
                        }
                        : subject
                )
            );
        } catch (err) {
            console.error("Error updating attendance", err);
        }
    };

    useEffect(() => {

        // fetch instead

        const dummySubjects = [
            {
                subjectId: {
                    _id: "subj1",
                    name: "Mathematics"
                },
                totalClasses: 10,
                presentDays: 8
            },
            {
                subjectId: {
                    _id: "subj2",
                    name: "Physics"
                },
                totalClasses: 12,
                presentDays: 9
            },
            {
                subjectId: {
                    _id: "subj3",
                    name: "Computer Science"
                },
                totalClasses: 14,
                presentDays: 13
            },
            {
                subjectId: {
                    _id: "subj4",
                    name: "Mathematics"
                },
                totalClasses: 10,
                presentDays: 8
            },
            {
                subjectId: {
                    _id: "subj5",
                    name: "Physics"
                },
                totalClasses: 12,
                presentDays: 9
            },
            {
                subjectId: {
                    _id: "subj6",
                    name: "Computer Science"
                },
                totalClasses: 14,
                presentDays: 13
            }
        ];

        setSubjects(dummySubjects)

    }, [])

    return (

        <div className="carousel carousel-vertical rounded-box">
            {subjects.map(({ subjectId, totalClasses, presentDays }) => {
                const percentage =
                    totalClasses === 0
                        ? 0
                        : Math.round((presentDays / totalClasses) * 100);

                return (
                    <div key={subjectId._id} className="carousel-item">
                        <div className="card card-sm bg-base-200 m-5 p-5">

                            <h2 className="card-title">{subjectId.name}</h2>
                            <div className="card-body">
                                <div>
                                    Present: {presentDays} / {totalClasses} ({percentage}%)
                                    <progress className={"progress " + (percentage<75?"progress-error":percentage<80?"progress-warning":"progress-primary")} value={percentage} max={100}></progress>
                                </div>

                                <div className="card-actions">
                                    <button
                                        onClick={() => markAttendance(subjectId._id, true)}
                                        className="btn btn-success"
                                    >
                                        Present
                                    </button>
                                    <button
                                        onClick={() => markAttendance(subjectId._id, false)}
                                        className="btn btn-danger"
                                    >
                                        Absent
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                );
            })}
        </div>


    );
};

export default AttendanceBody;