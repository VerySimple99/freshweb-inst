  // 1️⃣ 기본 변수 복습
        function basicVariables() {
            let result = "=== 기본 변수들 (JSON 배우기 전 복습) ===\n\n";
            
            // 기본 데이터 타입들
            let studentName = "김철수";       // 문자열
            let studentAge = 20;            // 숫자
            let isGraduated = false;        // 불린 (true/false)
            
            result += "개별 변수들:\n";
            result += "이름: " + studentName + "\n";
            result += "나이: " + studentAge + "\n";
            result += "졸업 여부: " + isGraduated + "\n\n";
            
            // 문제점: 관련된 정보들이 흩어져 있음
            result += "❌ 문제점:\n";
            result += "- 학생 정보가 여러 변수에 흩어져 있음\n";
            result += "- 학생이 많아지면 변수가 너무 많아짐\n";
            result += "- 정보들 사이의 관계를 알기 어려움\n\n";
            
            result += "💡 해결책: JSON 객체를 사용하자!\n";
            result += "관련된 정보들을 하나의 '객체'로 묶어서 관리";
            
            document.getElementById('output1').textContent = result;
        }

        // 2️⃣ JSON 객체 기초
        function jsonObjectBasics() {
            let result = "=== JSON 객체: 관련 정보를 하나로 묶기 ===\n\n";
            
            // JSON 객체 만들기
            // 중괄호 {}를 사용하고, key: value 형태로 저장
            let student = {
                name: "김철수",        // key가 'name', value가 '김철수'
                age: 20,             // key가 'age', value가 20
                major: "컴퓨터공학",   // key가 'major', value가 '컴퓨터공학'
                isGraduated: false   // key가 'isGraduated', value가 false
            };
            
            result += "📦 JSON 객체 구조:\n";
            result += "{\n";
            result += "  key: value,     // 키: 값 쌍으로 구성\n";
            result += "  key: value,     // 쉼표로 구분\n";
            result += "  key: value      // 마지막은 쉼표 없음\n";
            result += "}\n\n";
            
            result += "👤 학생 정보 (JSON 객체):\n";
            // 객체의 값에 접근: 객체이름.키이름 또는 객체이름['키이름']
            result += "이름: " + student.name + "\n";
            result += "나이: " + student.age + "세\n";
            result += "전공: " + student.major + "\n";
            result += "졸업 여부: " + student.isGraduated + "\n\n";
            
            // 다른 접근 방법 (대괄호 사용)
            result += "🔍 다른 방식으로 정보 접근:\n";
            result += "이름: " + student['name'] + "\n";
            result += "나이: " + student['age'] + "세\n\n";
            
            // 값 변경하기
            student.age = 21;  // 나이 변경
            student.isGraduated = true;  // 졸업 여부 변경
            
            result += "📝 정보 수정 후:\n";
            result += "나이: " + student.age + "세 (수정됨)\n";
            result += "졸업 여부: " + student.isGraduated + " (수정됨)\n\n";
            
            result += "✅ JSON 객체의 장점:\n";
            result += "- 관련된 정보를 하나로 묶어서 관리\n";
            result += "- 의미있는 이름(key)으로 정보에 접근\n";
            result += "- 코드가 더 깔끔하고 이해하기 쉬움\n";
            
            document.getElementById('output2').textContent = result;
        }

        // 3️⃣ JSON 배열 기초
        function jsonArrayBasics() {
            let result = "=== JSON 배열: 여러 객체들의 모음 ===\n\n";
            
            // 여러 학생 객체들을 배열로 관리
            // 대괄호 []로 배열을 만들고, 각 객체를 쉼표로 구분
            let students = [
                {
                    name: "김철수",
                    age: 20,
                    major: "컴퓨터공학",
                    grade: "A"
                },
                {
                    name: "이영희",
                    age: 19,
                    major: "수학과",
                    grade: "B+"
                },
                {
                    name: "박민수",
                    age: 22,
                    major: "물리학과",
                    grade: "A-"
                }
            ];
            
            result += "📚 학생 배열 구조:\n";
            result += "[\n";
            result += "  { 첫 번째 학생 객체 },\n";
            result += "  { 두 번째 학생 객체 },\n";
            result += "  { 세 번째 학생 객체 }\n";
            result += "]\n\n";
            
            result += "👥 전체 학생 목록:\n";
            result += "총 학생 수: " + students.length + "명\n\n";
            
            // 배열의 각 요소(객체)에 접근
            // 인덱스는 0부터 시작!
            result += "🔍 각 학생 정보:\n";
            result += "첫 번째 학생: " + students[0].name + " (" + students[0].major + ")\n";
            result += "두 번째 학생: " + students[1].name + " (" + students[1].major + ")\n";
            result += "세 번째 학생: " + students[2].name + " (" + students[2].major + ")\n\n";
            
            // 반복문으로 모든 학생 정보 출력
            result += "🔄 반복문으로 모든 학생 출력:\n";
            for (let i = 0; i < students.length; i++) {
                let student = students[i];  // i번째 학생 객체
                result += (i + 1) + "번 " + student.name + " - " + student.major + " - 성적: " + student.grade + "\n";
            }
            
            result += "\n✅ JSON 배열의 장점:\n";
            result += "- 같은 구조의 여러 객체를 체계적으로 관리\n";
            result += "- 반복문으로 쉽게 처리 가능\n";
            result += "- 데이터 추가/삭제가 간편\n";
            
            document.getElementById('output3').textContent = result;
        }

        // 4️⃣ 백틱 (Template Literals)
        function templateLiterals() {
            let result = "=== 백틱(`): 문자열을 쉽게 만들기 ===\n\n";
            
            let studentName = "김철수";
            let studentAge = 20;
            let studentMajor = "컴퓨터공학";
            
            // 기존 방식 (+ 연산자 사용)
            let oldWay = "안녕하세요! 제 이름은 " + studentName + "이고, " + studentAge + "세입니다. 전공은 " + studentMajor + "입니다.";
            
            result += "❌ 기존 방식 (+ 연산자):\n";
            result += "복잡하고 실수하기 쉬운 문자열 연결:\n";
            result += '"안녕하세요! 제 이름은 " + studentName + "이고, " + studentAge + "세입니다."\n\n';
            result += "결과: " + oldWay + "\n\n";
            
            // 백틱 사용 (ES6 Template Literals)
            // 백틱(`)으로 문자열을 감싸고, ${변수명}으로 변수 삽입
            let newWay = `안녕하세요! 제 이름은 ${studentName}이고, ${studentAge}세입니다. 전공은 ${studentMajor}입니다.`;
            
            result += "✅ 새로운 방식 (백틱 사용):\n";
            result += "간단하고 읽기 쉬운 문자열:\n";
            result += "`안녕하세요! 제 이름은 ${studentName}이고, ${studentAge}세입니다.`\n\n";
            result += "결과: " + newWay + "\n\n";
            
            // 백틱의 다른 장점들
            result += "🎯 백틱의 특별한 기능들:\n\n";
            
            // 1. 여러 줄 문자열
            let multiLine = `첫 번째 줄
두 번째 줄
세 번째 줄`;
            
            result += "1. 여러 줄 문자열 (줄바꿈 자동 인식):\n";
            result += multiLine + "\n\n";
            
            // 2. 계산식도 가능
            let mathResult = `나이를 2배하면: ${studentAge * 2}세`;
            result += "2. 계산식도 삽입 가능:\n";
            result += mathResult + "\n\n";
            
            // 3. 함수 호출도 가능
            function getGreeting() {
                return "좋은 하루 되세요!";
            }
            
            let functionResult = `인사말: ${getGreeting()}`;
            result += "3. 함수 호출도 삽입 가능:\n";
            result += functionResult + "\n\n";
            
            result += "💡 백틱 사용법 정리:\n";
            result += "- 백틱(`)으로 문자열을 감싸기\n";
            result += "- ${변수명} 또는 ${식}으로 값 삽입\n";
            result += "- 여러 줄 문자열 자동 지원\n";
            result += "- + 연산자보다 훨씬 읽기 쉬움\n";
            
            document.getElementById('output4').textContent = result;
        }

        // 5️⃣ JSON과 백틱 조합
        function jsonWithTemplates() {
            let result = "=== JSON 객체 + 백틱 조합하기 ===\n\n";
            
            // 학생 객체
            let student = {
                name: "김철수",
                age: 20,
                major: "컴퓨터공학",
                grade: "A",
                hobby: "코딩"
            };
            
            // 백틱을 사용해서 객체 정보를 예쁘게 출력
            let studentCard = `
╔════════════════════════════╗
║           학생증           ║
╠════════════════════════════╣
║ 이름: ${student.name}                ║
║ 나이: ${student.age}세               ║
║ 전공: ${student.major}         ║
║ 성적: ${student.grade}                ║
║ 취미: ${student.hobby}              ║
╚════════════════════════════╝
            `;
            
            result += "🎫 백틱으로 만든 예쁜 학생증:\n";
            result += studentCard + "\n";
            
            // 여러 학생들의 정보
            let students = [
                { name: "김철수", age: 20, major: "컴퓨터공학" },
                { name: "이영희", age: 19, major: "수학과" },
                { name: "박민수", age: 22, major: "물리학과" }
            ];
            
            result += "\n👥 학생 목록 (JSON 배열 + 백틱):\n";
            
            // 반복문과 백틱 조합
            for (let i = 0; i < students.length; i++) {
                let s = students[i];
                let studentInfo = `${i + 1}번. ${s.name} (${s.age}세) - ${s.major}`;
                result += studentInfo + "\n";
            }
            
            // 조건문도 백틱 안에서 사용 (삼항 연산자)
            result += "\n🎓 졸업 예정자 확인:\n";
            for (let i = 0; i < students.length; i++) {
                let s = students[i];
                let status = `${s.name}: ${s.age >= 22 ? '졸업 예정' : '재학 중'}`;
                result += status + "\n";
            }
            
            result += "\n💡 JSON + 백틱의 강력함:\n";
            result += "- 복잡한 문자열도 쉽게 만들기\n";
            result += "- 객체 데이터를 자연스럽게 삽입\n";
            result += "- 조건문, 계산식도 함께 사용 가능\n";
            result += "- 코드가 읽기 쉽고 유지보수 편함\n";
            
            document.getElementById('output5').textContent = result;
        }

        // 6️⃣ 종합 실습
        function classRosterExample() {
            let result = "=== 🏫 우리 반 학급 명단 관리 시스템 ===\n\n";
            
            // 학급 정보 (JSON 객체)
            let classInfo = {
                className: "컴퓨터공학과 3학년 A반",
                teacher: "김선생님",
                room: "공학관 301호",
                semester: "2024년 1학기"
            };
            
            // 학생들 정보 (JSON 배열)
            let students = [
                {
                    id: "2021001",
                    name: "김철수",
                    age: 20,
                    major: "컴퓨터공학",
                    subjects: ["자료구조", "알고리즘", "데이터베이스"],
                    grades: { midterm: 85, final: 90 }
                },
                {
                    id: "2021002", 
                    name: "이영희",
                    age: 19,
                    major: "컴퓨터공학",
                    subjects: ["자료구조", "알고리즘", "네트워크"],
                    grades: { midterm: 92, final: 88 }
                },
                {
                    id: "2021003",
                    name: "박민수", 
                    age: 22,
                    major: "컴퓨터공학",
                    subjects: ["데이터베이스", "네트워크", "소프트웨어공학"],
                    grades: { midterm: 78, final: 85 }
                }
            ];
            
            // 반 정보 출력 (백틱 사용)
            result += `📋 반 정보:
반 이름: ${classInfo.className}
담임: ${classInfo.teacher}
교실: ${classInfo.room}
학기: ${classInfo.semester}
총 학생 수: ${students.length}명

`;
            
            // 전체 학생 명단
            result += "👥 전체 학생 명단:\n";
            result += "═".repeat(50) + "\n";
            
            for (let i = 0; i < students.length; i++) {
                let student = students[i];
                let avgGrade = (student.grades.midterm + student.grades.final) / 2;
                
                // 백틱으로 학생 카드 만들기
                let studentCard = `
${i + 1}. ${student.name} (학번: ${student.id})
   나이: ${student.age}세 | 전공: ${student.major}
   수강과목: ${student.subjects.join(', ')}
   성적: 중간(${student.grades.midterm}) 기말(${student.grades.final}) 평균(${avgGrade.toFixed(1)})
   등급: ${avgGrade >= 90 ? 'A' : avgGrade >= 80 ? 'B' : avgGrade >= 70 ? 'C' : 'D'}
`;
                result += studentCard;
            }
            
            // 통계 정보
            let totalMidterm = 0;
            let totalFinal = 0;
            let topStudent = students[0];
            let maxAvg = 0;
            
            for (let i = 0; i < students.length; i++) {
                let student = students[i];
                totalMidterm += student.grades.midterm;
                totalFinal += student.grades.final;
                
                let avg = (student.grades.midterm + student.grades.final) / 2;
                if (avg > maxAvg) {
                    maxAvg = avg;
                    topStudent = student;
                }
            }
            
            let classAvgMidterm = (totalMidterm / students.length).toFixed(1);
            let classAvgFinal = (totalFinal / students.length).toFixed(1);
            
            result += "\n📊 반 통계:\n";
            result += "═".repeat(30) + "\n";
            result += `중간고사 평균: ${classAvgMidterm}점
기말고사 평균: ${classAvgFinal}점
최우수 학생: ${topStudent.name} (평균 ${maxAvg.toFixed(1)}점)

`;
            
            result += "🎯 학습 완료!\n";
            result += "JSON 객체, 배열, 백틱을 모두 활용한 실습을 완성했습니다!\n";
            result += "이제 복잡한 데이터도 체계적으로 관리할 수 있어요! 💪";
            
            document.getElementById('output6').textContent = result;
        }

        // 페이지 로드 시 안내 메시지
        window.onload = function() {
            document.getElementById('output1').textContent = '버튼을 클릭해서 JSON의 세계로 들어가보세요!';
            document.getElementById('output2').textContent = '버튼을 클릭해서 JSON 객체를 만나보세요!';
            document.getElementById('output3').textContent = '버튼을 클릭해서 JSON 배열을 체험해보세요!';
            document.getElementById('output4').textContent = '버튼을 클릭해서 백틱의 마법을 경험해보세요!';
            document.getElementById('output5').textContent = '버튼을 클릭해서 JSON과 백틱의 조합을 확인해보세요!';
            document.getElementById('output6').textContent = '버튼을 클릭해서 종합 실습을 시작해보세요!';
        };