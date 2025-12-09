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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3B6QBD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T235539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3k6zWY8kz71v923JxO62HuurkZyZ0FN2TMulwvPx9%2FgIgKPP39UZ%2Bu8ErOslTwZV%2BA%2FZJqKbvXaHqu5rMfY3Bti8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8dMUUL%2BIWaCgzfmCrcA9pr2wq317ez%2BAApCzwLXfrzQMQM6%2B5IKvsj2s1GYO5ki4%2FV58EgS9pl1ejZSdqOeVesS7pMGl%2BfSS%2FlF1732MUipTGTbLWBjAAFdAAcSVtZS%2FZ0p5CXwrggAHSTjPxTsDDjPrKv9LL8%2Bt0W6TKCdiXFuOSiAKQy%2FrJTN9HUEDb%2BfB9U%2BDADucHLxKli%2FvbnNsRpZZ0yaUBMjgruFc6iHY74Wl1VgATzxi648fGfY5j2MD8G4G2zk1rlup%2BkzoFtqO7zG8rb%2B7WF9b37c1IF5%2BfQoyl%2FAJipFzJwb41xx8Uo4AVtXwWhiJGiJROhUeC9%2BSwjK%2FOKdvKL9wfgEa75tMEqTN2HFpDt3IJLbng1dGq22Iv30WaF%2FWktBmtmbw8VN4hZMpjStuu9J2Pq1hp54e82D9kdpoxH6u8DYbY9OLFWuigOc0p0hOQvYswOrzhOT2IyFS9Aj5pArcr3nmKCtV8LpKTfn61YfYr2YkHV1AZhB02WNANZxl%2BPztk7qWh4mb%2B5WRh%2FHPrtJ5j1dnjRZeHhOx7cd%2FBBjm7BuvUXyP9q8xVJ1UAcNVkjy7NVIVbA4o6BJGRFYHCDBqRJYl%2B%2BPuxIeL9oFweKmb8%2BmHcet3Z8T88kmsmdOEsffzw%2BMMPD4skGOqUBAmpV6USa2HLCAbMDQtW2QH4x%2B0Wud0qp8fU3900FdY0ToAbEe81sCy4fGBVit2m%2FVMgnEULD%2BU%2F0V9S2TY8ub4UbJVoVAtc9AUsBC6a8On2ZqxNk95Wlt9jWw1hDUUOi61zlQJj7NCIad%2BerU33HrOa%2Frljff4tYYRXVZRavIXnGPXVtFDbOYsID%2BwGLNW4ZXcuHCJ5epjrLQ%2FSMZSscmKe18pRd&X-Amz-Signature=436ef5c2e9049261b1a8d0f9b64a7ee94191dfe1e16598457a786a4c0bb2fb58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

