---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTM72WC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzYi8XqIMCcMfm7Ha7QB6gGZe8hE0zRloWgrhaY%2FxguAiBk9fxCwKUbPy7Ds0JEH8myP2enlOpc73CgUbM1132kPyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKmWKMMf16XB08vNKtwD7ZXG2dKZzqpLRk0bzff7AZvsIscif8ayLr5WHRl9YiV80y5QF%2Bvlmk54LpQtFsMJg%2FmDSaUU9V1SMykvyvMLaIUShZAzkEsUZKoFr0LPt%2FbzM1NleaK3QgP%2FiRefMhhRK%2F7tBvmVLJRKLte%2FGR%2FZbgNNpH9PY0T1agkNSZVm%2BSJlDs6RQyeE5NR2WondIf%2BtCS7OuQA6x4xmpY%2FTHHVteKBPgQ4UVJeXgSUsVMD%2FdHwBZkikMCDw1xJopbyCllZVhLB21uvTQxuKbus2qYNIVO12kN9JGK4t5P8J66rHofCw63lsN03yNJhEh%2BFgDzcSvuSWGyiHYEOXDe6004WrIwBanyp6SGJ9rIxnKVe73JCUYxLojGbhJZfoxDEZJlbuZ3i86aHG3%2FsBnj0ZQ0G8llgYHTIMl0LGeWCZ8mUMWIuVdMp6ILeZVLc5DgCDAaRnnPgxK87PGVQLimFPEdpz4E9xc3dkhaeR7tN8scotCU55%2F9sHF3wReQsrrncswushCOkAdEa9QjuiSkWf17%2FTos66u8nduDBSs3KUjTxCZdzrQNaO57p6Y23%2F7SO1ADV%2FucM8AdaVBpGTTuByGFq6aPFxXm9EWkhlvvOKMNufrU4V3cJpNO0qmVu4OnEw0oDdyQY6pgFnx98FXBL%2FI%2F1dmA0sWQ5qjfPCMPktsQQScB4Ry5tCgUsFFECUn3xODZ8kxVoZTBPmOP6Kr%2BUaiBiZZaZgcaAIlqgVncyEVq93NoAVwLA4S2Pbf%2FG%2F0M09G%2FUPEl4Q5uFwqp28csBZyWtev7qSvvLg9B%2BVfMzeZ8VrRBXF4GzlVA8f622gCpJJITUQg%2B0pdpi4kCtgsfKqZK%2FH9402RuHlx78SCYYH&X-Amz-Signature=c715b29ea50f98720225ec56283e943768d5cb711872723c63b86146578ae7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

