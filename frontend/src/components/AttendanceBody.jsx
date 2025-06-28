import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

const AttendanceBody = () => {

    const [subjects, setSubjects] = useState([]);

    const markAttendance = async (subjectDetail, isPresent) => {
        try {
            // await axios.patch(`/api/user/attendance/${subjectDetail}`, { isPresent });
            setSubjects(prev =>
                prev.map(subject =>
                    subject.subjectDetail._id === subjectDetail
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
                subjectDetail: {
                    _id: "subj1",
                    name: "Mathematics"
                },
                totalClasses: 10,
                presentDays: 8
            },
            {
                subjectDetail: {
                    _id: "subj2",
                    name: "Physics"
                },
                totalClasses: 12,
                presentDays: 9
            },
            {
                subjectDetail: {
                    _id: "subj3",
                    name: "Computer Science"
                },
                totalClasses: 14,
                presentDays: 13
            },
            {
                subjectDetail: {
                    _id: "subj4",
                    name: "Mathematics"
                },
                totalClasses: 10,
                presentDays: 8
            },
            {
                subjectDetail: {
                    _id: "subj5",
                    name: "Physics"
                },
                totalClasses: 12,
                presentDays: 9
            },
            {
                subjectDetail: {
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
            {subjects.map(({ subjectDetail, totalClasses, presentDays }) => {
                const percentage =
                    totalClasses === 0
                        ? 0
                        : Math.round((presentDays / totalClasses) * 100);

                return (
                    <div key={subjectDetail._id} className="carousel-item">
                        <div className="card card-sm bg-base-200 m-5 p-5">
                            <Link to={`/attendance/{${subjectDetail._id}}`} className="card-body">
                                <h2 className="card-title">{subjectDetail.name}</h2>

                                <div>
                                    Present: {presentDays} / {totalClasses} ({percentage}%)
                                    <progress className={"progress " + (percentage < 75 ? "progress-error" : percentage < 80 ? "progress-warning" : "progress-primary")} value={percentage} max={100}></progress>
                                </div>

                            </Link>

                            <div className="card-actions">
                                <button
                                    onClick={() => markAttendance(subjectDetail._id, true)}
                                    className="btn btn-primary"
                                >
                                    Present
                                </button>
                                <button
                                    onClick={() => markAttendance(subjectDetail._id, false)}
                                    className="btn btn-danger"
                                >
                                    Absent
                                </button>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div >


    );
};

export default AttendanceBody;