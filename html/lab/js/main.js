document.addEventListener("DOMContentLoaded", function () {
    fetch("vacancies.json")
        .then(response => response.json())
        .then(data => {
            const vacanciesList = document.getElementById("vacancies-list");
            let currentIndex = 0;
            const vacanciesPerPage = 3;

            function displayVacancies() {
                vacanciesList.innerHTML = "";

                for (let i = currentIndex; i < currentIndex + vacanciesPerPage; i++) {
                    if (i >= data.length) {
                        break;
                    }

                    const vacancy = data[i];
                    const vacancyItem = document.createElement("div");
                    vacancyItem.classList.add("col-md-4");

                    vacancyItem.innerHTML = `
                        <div class="card mb-4 rounded shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title">${vacancy.title}</h5>
                                <p class="card-text">${vacancy.company} - ${vacancy.location}</p>
                                <p class="card-text">Salary: ${vacancy.salary}</p>
                                <p class="card-text">${vacancy.description}</p>
                            </div>
                        </div>
                    `;
                    vacanciesList.appendChild(vacancyItem);
                }
                document.getElementById("prevBtn").style.display = currentIndex === 0 ? "none" : "inline-block";
                document.getElementById("nextBtn").style.display = currentIndex + vacanciesPerPage >= data.length ? "none" : "inline-block";
            }

            displayVacancies();

            document.getElementById("nextBtn").addEventListener("click", function () {
                if (currentIndex + vacanciesPerPage < data.length) {
                    currentIndex += vacanciesPerPage;
                    displayVacancies();
                }
            });

            document.getElementById("prevBtn").addEventListener("click", function () {
                if (currentIndex - vacanciesPerPage >= 0) {
                    currentIndex -= vacanciesPerPage;
                    displayVacancies();
                }
            });
        })
        .catch(error => console.error("Error loading vacancies:", error));
});

