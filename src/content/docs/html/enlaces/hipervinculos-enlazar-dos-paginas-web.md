---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKODKP3G%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqnmgvkNYoQGqeh8CX0fp0JGfNV%2Bgcye1tpTwxAFeXqAiBAJ2RGK7ZJKXOyUFwn0wg2udNRJYs6CLnOYR%2BcpDWHVyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUGFJQyyMIF1BlfzZKtwDuT3CmPKZSDKZVJUPpZLLFlY8sZIeQ19%2FOVXbELKHUAtoxHRPHf0mfi6sXhDgcac%2Fv0f0qrseOnmy5wYV2H9mDiulGUvXeLCe2x65lvx%2BxeNgc4uIX70aXS9tfT93TR6n2l2y8N8%2B3t2Bh7pq2g%2Fk6dVa59YdrvYS93WJsdpWIimqB0t38vPzHVWOKdQUG8tXjck%2BhjusrYUk2pcfoVoNDj6m8BkbwhOxGR4eHbM6vX5l4KCAtoVZl%2B9TwmQ69BAzXPxAT8AdfLWKI%2B%2FXWqmbPpqdWQm7a7%2BNMtr90j%2FrH%2BCPM4v81oOZoja%2BkLhJKD3enjTz%2BIs8eRTwapiH4lirguzhjUiBVQ2iQBW3r5opWmtKL86%2FcYbAOaWQxlnkHveHWCCdLImzklbf8%2BF%2Bm%2BrffGWKjcHgEia%2F6c%2BpEPAdp98tPxjAtJQf%2BEM%2FiG4dgHAa8IeV4%2BoLA76gp9teqhzlMxjaaZfzuFl1hi9UX%2BmY4x%2FtNWt2oJ5FTFTO0%2FeDycTqB6%2Fw5jy0lRBx%2Bo9Vt229P3MYk8lGuq5Ef28ND4zQ81G%2BdDiK6M5wva3SNBwxvRhpbogCwIqUU78r%2FIfQqLuILgA2p5ZmSzadAv9JL%2FTt4uXDf6sKxCKkw4NUTW0wtpnhyQY6pgFKvhlsvZ%2BCXw5WJfmVC%2Bb7r5G70hirb1TU7F5VJityo4uIfj5d3sYiyG2ouwQ%2BanyFJ5ahj0CdqJ6hjMApJrSlsYpLhSRzeZiKrADTFACz771t4X1Or1uufqUHOnixXdv1Ox0eykWqzSZnQrco6hGYJgKViWPBjmRtJ8vkGSpHJ3DEJMNER6Hm%2BqXXuRk1Egf7fcv7rj3rNW6XAXMXmBKUFw0NH5ai&X-Amz-Signature=2f496a4b9c5ebb4129635270b1fcd7955174abababfcdf1e4d3174abf2ec97b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

