export const Practices = () => {
    const student = [7, 8];
     console.log(Boolean(student.length));
      console.log(student.length);

    return (
        <div>
            {/* <p>{student.length && "No student found"}</p> */}
            {/* 1st */}
           
            {/* <p>{student.length === 0 && "No student found"}</p> */}
           
           {/* 2nd. */}

         <p>{!student.length && "No student found"}</p>

          {/* 3rd. */}

          <p>{!Boolean(student.length) && "No student found"}</p>
         

            <p>Number of student: {student.length}</p>
        </div>
    );
};