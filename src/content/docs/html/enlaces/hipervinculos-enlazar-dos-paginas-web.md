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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCZZGCP6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmFzpLYjncohRJiGyDDe9ieqcJHjauox7KHZ1k6VcCHAiBoIe2N1bN4ZHUzsBhmdHVmUlo3HTUR3Q0qMcpCB2Vahir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMqk5I7hu2M2jLzI18KtwDjbDA7ddpcUxB8HMbOxWNzDsQ%2FQAPwK9y%2FLX%2B8sOtKYXT%2BheNXT8TIC0lyq8kAxlXGDQHEgoHGZ6L%2Bd924ZjQ1qoKdcToGxUCMl5Oqblt0pLevFhYs3p77ieyX17USOXWRvTE2V71qLIMfsm5FEoEIffRTMkLhOt6x5jMc8lLro%2BTjAcxic4eGj9hXEbNqgxyxiuQxb4LFGS67ZZnVCkMgER6ERNpbAFy2ieGtYv9oD29N47JmDmZBeT38kS2jmImMwf6%2FpDCs15qF6GMHrC8A1WealXgBVoZCTue36weGijai8KxSGYPUx%2B6d110lsUIa74YrdKWi5MT50ODKLeGKgsejcN9GcWWRfUyBG3YelKBwA%2BQBMisrHzAJk2HDh6rD8biSsOkh%2F8tDiN%2FtKdVpqR4QTaJPMIcfLrYtmizVZRIBATfXKaNz7ZXXarGwgqPtDL8EI8WwsfkX4HzRCrBJf4AVjvv7x4QOsReDS5lhLrbnHzyAASUWPRYz6F%2F9PDDaZu7LNemufnAQzJbWDiXug5zrZ39FAJ6xjGpjwlB%2BMIXY2N5h%2F2Gl5X%2BAT0TmsFctZzQAZ%2FXDh1VCxXHTi7Z0q6X4mtDeQEHSwfloVJNKnOR1D2%2Bs5VH4McWv5gw6IbNyQY6pgGdAfbogzBbDz8bQgUu9VoyiWAKfNcMyziTX6YX3uYWZ693sOirUTx3Mi1XHJBtWPW47RQdXL83CjPZE0RLM0VlCG9rPAxhjXDDD3YqMYa7%2FH05pIQwQHfQ2ZUuCeUV6ac2YOd4aqnorcWFgdWhbFB86H19nCkFioOxY1pf9otToZqcqo0bQe5c%2FWFx0OgfJ48jP%2FgK18T%2FthQGIJv2kBh9jTWBoS6c&X-Amz-Signature=12d3c33115b8beec3261fae735cb0300430d4821e6d5fcf4c140fd3696778290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

