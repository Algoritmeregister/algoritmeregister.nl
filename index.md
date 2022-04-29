---
layout: algoritmeregisters
---
<div class="search">
    <p>Filter op naam:&emsp;<input type="text" placeholder="Voer zoektekst in" id="filter-title-input"></p>
    <script>
    let filterTitleInput = document.getElementById("filter-title-input");
    filterTitleInput.onkeyup = function (event) {
        document.getElementById("filter-status-select").selectedIndex = 0; //reset other filter
        let str = event.target.value;
        Array.prototype.forEach.call(document.getElementsByClassName("card"), function (el) {
        el.style.display = el.dataset.filterTitle.toLowerCase().includes(str.toLowerCase()) ?
            "block" :
            "none";
        });
    }
    </script>
    <p>Filter op status:&emsp;<select id="filter-status-select"><option></option><option>in gebruik</option><option>in ontwikkeling</option></select></p>
    <script>
    let filterStatusSelect = document.getElementById("filter-status-select");
    filterStatusSelect.onchange = function (event) {
        document.getElementById("filter-title-input").value = ''; //reset other filter
        let str = event.target.value;
        Array.prototype.forEach.call(document.getElementsByClassName("card"), function (el) {
        el.style.display = el.dataset.filterStatus.toLowerCase().includes(str.toLowerCase()) ?
            "block" :
            "none";
        });
    }
    </script>
</div>

<div class="cards">
    {% assign regs = site.data.algoritmeregisters | sort: 'title' %}
    {% for reg in regs %}
    <div class="card" data-filter-title="{{reg.title}}" data-filter-status="{{reg.status}}">
    <div style="float:right">
        <p style="font-size:0.85em">{{ reg.status }}</p>
    </div>
    <p style="margin-bottom: 0">{{ reg.organisation }}</p>
    <h2>
        {{ reg.title }}&emsp;<span class="type">{{ reg.type }}</span>
    </h2>
    {% if reg.description %}
    <p style="font-style: italic; color: #777">
        "{{ reg.description }}"
    </p>
    {% endif %}
    {% if reg.url %}
    <p>
        <a target="_blank" href="{{ reg.url }}"
        >{{ reg.url }}&nbsp;<img
            style="vertical-align: baseline"
            src="/img/external-link.svg"
            alt="externe link indicator"
        /></a>
    </p>
    {% endif %}
    </div>
    {% endfor %}
</div>