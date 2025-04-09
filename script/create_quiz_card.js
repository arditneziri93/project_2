export function createQuizCard(questionObj, toggleBookmarkCallback) {
  const li = document.createElement("li");
  li.className = "card-list__item";

  const isActive = questionObj.isBookmarked ? "bookmark--active" : "";

  li.innerHTML = `
    <article class="card">
      <h2 class="card__question">${questionObj.question}</h2>
      <button class="card__button-answer" type="button">Show answer</button>
      <p class="card__answer" style="display: none;">${questionObj.answer}</p>
      <ul class="card__tag-list">
        ${questionObj.tags
          .map((tag) => `<li class="card__tag-list-item">#${tag}</li>`)
          .join("")}
      </ul>
      <div class="card__button-bookmark">
        <button
          class="bookmark ${isActive}"
          aria-label="bookmark"
          type="button"
        >
          <svg
            class="bookmark__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
          </svg>
        </button>
      </div>
    </article>
  `;

  const answerBtn = li.querySelector(".card__button-answer");
  const answer = li.querySelector(".card__answer");

  answerBtn.addEventListener("click", () => {
    const isHidden = answer.style.display === "none";
    answer.style.display = isHidden ? "block" : "none";
    answerBtn.textContent = isHidden ? "Hide answer" : "Show answer";
  });

  const bookmarkBtn = li.querySelector(".bookmark");
  bookmarkBtn.addEventListener("click", () => {
    bookmarkBtn.classList.toggle("bookmark--active");
    if (typeof toggleBookmarkCallback === "function") {
      toggleBookmarkCallback(questionObj.id);
    }
  });

  return li;
}
