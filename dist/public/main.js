"use strict"; {
    const config = HFS.getPluginConfig()
    let uri;

    HFS.onEvent('fileMenu', ({ entry }) =>
        new RegExp(config.regex).test(entry.ext) &&
        { id: 'drawio', icon: '❖', label: "Draw", onClick: () => drawChart(entry) }
    )

    HFS.onEvent('afterMenuBar', () => `<div id='view' style='display: none;'></div>`)

    const drawChart = (entry = "") => {
        fetch(entry.uri)
            .then(response => response.blob())
            .then(blob => {

                uri = entry.uri
                let startElement;
                const file = new File([blob], entry.name, { type: 'application/vnd.jgraph.mxfile' });

                if (file && file.name.endsWith('.drawio')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const fileContent = e.target.result;

                        const root = document.getElementById('view')
                        startElement = document.createElement('div');
                        startElement.setAttribute('data', fileContent);
                        root.appendChild(startElement)

                        editor = DiagramEditor.editElement(
                            startElement,
                            {},
                            'min',
                            (data, draft, elt) => {
                                if (!draft)
                                    return fetch(entry.uri + '?existing=overwrite', { method: 'PUT', body: data })
                                        .then(HFS.reloadList)
                            }

                        );
                        document.getElementById("saveButton").disabled = false;
                    };
                    reader.readAsText(file);
                } else {
                    alert("Please select a .drawio file to load.");
                }
            })
    }
}