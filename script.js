async function GetDataAPI() {
    const loadingIndicator = document.getElementById("loadingIndicator");
    loadingIndicator.style.display = "block"; // Show loading indicator

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);

    document.querySelector("#postList").innerHTML = `
        <select class="form-control" onchange="selectPost()" id="mySelect">
            <option value="">Select please</option>
            ${data.map(p => `<option value="${p.body}">${p.title}</option>`).join("")
        }
        </select>
    `;

    loadingIndicator.style.display = "none"; // Hide loading indicator
}
GetDataAPI();

async function selectPost() {
    const x = document.getElementById("mySelect").value;
    document.getElementById("contentPost").innerHTML = x;
}