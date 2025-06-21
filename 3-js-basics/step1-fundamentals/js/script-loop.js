// 🍎 실습용 데이터: 과일과 세계 명작들
const fruits = ["사과", "바나나", "오렌지", "딸기", "포도"];

const books = [
  { title: "1984", author: "조지 오웰", year: 1949, pages: 328 },
  {
    title: "위대한 개츠비",
    author: "F. 스콧 피츠제럴드",
    year: 1925,
    pages: 180,
  },
  {
    title: "백년의 고독",
    author: "가브리엘 가르시아 마르케스",
    year: 1967,
    pages: 417,
  },
  { title: "죄와 벌", author: "표도르 도스토예프스키", year: 1866, pages: 671 },
];

// 1️⃣ 전통적인 for문 - 인덱스를 활용한 정확한 제어
function traditionalFor() {
  let result = "=== 전통적인 for문으로 과일 나열하기 ===\n";

  // 🎯 핵심: for(초기화; 조건; 증감)의 3단계 구조
  // 초기화: let i = 0 (시작점 설정)
  // 조건: i < fruits.length (언제까지 반복할지)
  // 증감: i++ (매 반복마다 i를 1씩 증가)
  for (let i = 0; i < fruits.length; i++) {
    // 배열의 인덱스를 활용해 순서와 값을 모두 출력
    result += `${i + 1}번째 과일: ${fruits[i]}\n`;
  }

  result += "\n💡 핵심 포인트:\n";
  result += "- 인덱스(i)를 통해 배열 요소에 접근\n";
  result += "- 반복 횟수를 정확히 제어 가능\n";
  result += "- 가장 기본적이고 범용적인 반복문\n";

  document.getElementById("output1").textContent = result;
}

// 2️⃣ while문 - 조건 기반 반복
function whileLoop() {
  let result = "=== while문으로 도서 검색하기 ===\n";

  // 🎯 시나리오: 300페이지 이상인 책을 찾아서 출력
  let index = 0; // 현재 확인 중인 책의 인덱스
  let foundBooks = []; // 조건에 맞는 책들을 저장할 배열

  // while문: 조건이 참(true)인 동안 계속 반복
  // 조건: index가 books 배열 길이보다 작을 때
  while (index < books.length) {
    let currentBook = books[index]; // 현재 검사 중인 책

    // 300페이지 이상인 책인지 확인
    if (currentBook.pages >= 300) {
      foundBooks.push(currentBook);
      result += `📚 발견: "${currentBook.title}" - ${currentBook.pages}페이지\n`;
    }

    index++; // ⚠️ 중요: 무한루프 방지를 위해 반드시 증가시켜야 함
  }

  result += `\n총 ${foundBooks.length}권의 대작을 발견했습니다!\n`;
  result += "\n💡 핵심 포인트:\n";
  result += "- 조건이 거짓이 될 때까지 반복\n";
  result += "- 반복 횟수를 미리 알 수 없을 때 유용\n";
  result += "- 무한루프 주의! 조건이 언젠가는 거짓이 되도록 해야 함\n";

  document.getElementById("output2").textContent = result;
}

// 3️⃣ for...in문 - 객체의 속성(property) 순회
function forInLoop() {
  let result = "=== for...in문으로 책 정보 상세보기 ===\n";

  // 첫 번째 책의 모든 속성을 하나씩 출력
  const firstBook = books[0];
  result += `"${firstBook.title}" 상세 정보:\n`;

  // for...in: 객체의 모든 속성 이름(key)을 하나씩 가져옴
  for (let property in firstBook) {
    // property는 속성 이름(문자열): 'title', 'author', 'year', 'pages'
    // firstBook[property]는 해당 속성의 값
    result += `${property}: ${firstBook[property]}\n`;
  }

  result += "\n=== 모든 과일의 인덱스와 값 ===\n";
  // 배열에서도 for...in 사용 가능 (인덱스를 가져옴)
  for (let index in fruits) {
    result += `인덱스 ${index}: ${fruits[index]}\n`;
  }

  result += "\n💡 핵심 포인트:\n";
  result += "- 객체의 속성 이름(key)을 순회\n";
  result += "- 배열에서는 인덱스를 문자열로 반환\n";
  result += "- 객체의 구조를 모를 때 유용\n";

  document.getElementById("output3").textContent = result;
}

// 4️⃣ for...of문 - 배열/문자열의 값 직접 순회 (ES6)
function forOfLoop() {
  let result = "=== for...of문으로 과일 직접 순회하기 ===\n";

  // for...of: 배열의 값을 직접 가져옴 (인덱스 없이)
  // fruit 변수에는 실제 과일 이름이 들어감
  for (let fruit of fruits) {
    result += `🍎 맛있는 ${fruit}!\n`;
  }

  result += "\n=== 책 제목만 뽑아내기 ===\n";
  // 객체 배열에서 특정 속성값들만 순회
  for (let book of books) {
    result += `📖 "${book.title}" by ${book.author}\n`;
  }

  result += "\n=== 문자열도 순회 가능 ===\n";
  const message = "Hello";
  for (let char of message) {
    result += `글자: ${char}\n`;
  }

  result += "\n💡 핵심 포인트:\n";
  result += "- 배열의 값을 직접 가져옴 (인덱스 불필요)\n";
  result += "- 문자열, Set, Map 등도 순회 가능\n";
  result += "- ES6(2015)에서 도입된 현대적 문법\n";

  document.getElementById("output4").textContent = result;
}

// 5️⃣ forEach 메서드 - 배열 전용 반복 메서드
function forEachMethod() {
  let result = "=== forEach로 과일 처리하기 ===\n";

  // forEach: 배열의 각 요소에 대해 함수를 실행
  // 매개변수: (현재값, 인덱스, 전체배열)
  fruits.forEach(function (fruit, index, array) {
    result += `${index + 1}. ${fruit} (전체 ${array.length}개 중)\n`;
  });

  result += "\n=== 화살표 함수로 간단하게 ===\n";
  // ES6 화살표 함수 사용: 더 간결한 문법
  books.forEach((book, index) => {
    result += `${index + 1}번째: ${book.title} (${book.year}년)\n`;
  });

  result += "\n=== 조건부 처리 예제 ===\n";
  books.forEach((book) => {
    // 1950년 이후 출간된 현대 문학만 표시
    if (book.year >= 1950) {
      result += `🔥 현대문학: ${book.title}\n`;
    }
  });

  result += "\n💡 핵심 포인트:\n";
  result += "- 배열 전용 메서드 (break/continue 사용 불가)\n";
  result += "- 함수형 프로그래밍 스타일\n";
  result += "- 현재값, 인덱스, 전체배열 모두 접근 가능\n";

  document.getElementById("output5").textContent = result;
}

// 6️⃣ map 메서드 - 새로운 배열 생성하며 반복
function mapMethod() {
  let result = "=== map으로 새로운 배열 만들기 ===\n";

  // map: 각 요소를 변환해서 새로운 배열 생성
  // 원본 배열은 변경되지 않음!
  const fruitEmojis = fruits.map(function (fruit) {
    // 각 과일 이름 앞에 이모지 추가
    const emojiMap = {
      사과: "🍎",
      바나나: "🍌",
      오렌지: "🍊",
      딸기: "🍓",
      포도: "🍇",
    };
    return emojiMap[fruit] + " " + fruit;
  });

  result += "원본 과일들:\n" + fruits.join(", ") + "\n\n";
  result += "이모지가 추가된 과일들:\n" + fruitEmojis.join(", ") + "\n\n";

  // 화살표 함수로 더 간단하게
  const bookTitles = books.map((book) => book.title.toUpperCase());
  result += "=== 책 제목을 대문자로 변환 ===\n";
  result += bookTitles.join("\n") + "\n\n";

  // 복잡한 객체 변환 예제
  const bookSummaries = books.map((book) => ({
    summary: `${book.title}는 ${book.author}가 ${book.year}년에 쓴 ${book.pages}페이지 작품입니다.`,
    category: book.pages > 300 ? "대작" : "단편",
  }));

  result += "=== 책 요약 정보 ===\n";
  bookSummaries.forEach((summary) => {
    result += `${summary.summary} [${summary.category}]\n`;
  });

  result += "\n💡 핵심 포인트:\n";
  result += "- 원본 배열을 변경하지 않고 새 배열 생성\n";
  result += "- 데이터 변환에 특화 (1:1 대응)\n";
  result += "- 함수형 프로그래밍의 핵심 메서드\n";

  document.getElementById("output6").textContent = result;
}

// 🎯 종합 실습: 모든 반복문을 활용한 도서관 시스템
function practiceExercise() {
  let result = "=== 📚 세계 명작 도서관 관리 시스템 ===\n\n";

  // 1. 전통적인 for문: 책 목록 번호 매기기
  result += "📖 전체 도서 목록:\n";
  for (let i = 0; i < books.length; i++) {
    result += `${i + 1}. ${books[i].title}\n`;
  }

  // 2. while문: 특정 조건 검색
  result += "\n🔍 대작 찾기 (400페이지 이상):\n";
  let index = 0;
  while (index < books.length) {
    if (books[index].pages >= 400) {
      result += `📚 ${books[index].title} - ${books[index].pages}페이지\n`;
    }
    index++;
  }

  // 3. for...of: 간단한 데이터 추출
  result += "\n✨ 작가별 작품:\n";
  for (let book of books) {
    result += `${book.author}: "${book.title}"\n`;
  }

  // 4. forEach: 조건부 처리
  result += "\n📅 시대별 분류:\n";
  books.forEach((book) => {
    const era = book.year < 1900 ? "고전" : book.year < 1950 ? "근대" : "현대";
    result += `${era} 문학: ${book.title} (${book.year})\n`;
  });

  // 5. map: 데이터 변환
  const bookCards = books.map(
    (book) => `"${book.title}" | ${book.author} | ${book.year} | ${book.pages}p`
  );
  result += "\n💳 도서 카드 형식:\n";
  result += bookCards.join("\n") + "\n";

  // 6. 복합 활용: 통계 계산
  let totalPages = 0;
  let oldestYear = books[0].year;

  for (let book of books) {
    totalPages += book.pages;
    if (book.year < oldestYear) oldestYear = book.year;
  }

  result += "\n📊 도서관 통계:\n";
  result += `- 총 도서 수: ${books.length}권\n`;
  result += `- 총 페이지 수: ${totalPages.toLocaleString()}페이지\n`;
  result += `- 평균 페이지: ${Math.round(totalPages / books.length)}페이지\n`;
  result += `- 가장 오래된 작품: ${oldestYear}년\n`;

  result += "\n🎯 학습 완료! 모든 반복문을 마스터했습니다!\n";
  result += "💡 실무에서는 상황에 맞는 반복문을 선택하는 것이 중요합니다.";

  document.getElementById("outputPractice").textContent = result;
}

// 페이지 로드 시 첫 번째 예제 자동 실행
window.onload = function () {
  document.getElementById("output1").textContent =
    "버튼을 클릭해서 예제를 실행해보세요!";
  document.getElementById("output2").textContent =
    "버튼을 클릭해서 예제를 실행해보세요!";
  document.getElementById("output3").textContent =
    "버튼을 클릭해서 예제를 실행해보세요!";
  document.getElementById("output4").textContent =
    "버튼을 클릭해서 예제를 실행해보세요!";
  document.getElementById("output5").textContent =
    "버튼을 클릭해서 예제를 실행해보세요!";
  document.getElementById("output6").textContent =
    "버튼을 클릭해서 예제를 실행해보세요!";
  document.getElementById("outputPractice").textContent =
    "버튼을 클릭해서 종합 실습을 시작해보세요!";
};
