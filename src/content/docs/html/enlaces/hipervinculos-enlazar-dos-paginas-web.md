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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRB54NWM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqipP%2FSGRjsHWWtwl1%2BFWZ0E1CiswCMxLdRcqh9btxNgIgH08%2BfLX%2FHwG9zDmm2NgzPU6nRUv37MKh62SOmX%2F0CrIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL8VtW8fWP4sI95UircA90QIKZSxsMjs7Ni%2FPTyvNsyRZHjVjENzwOl2I27CLy9WX1iIbvUsXBUvL9p4fxoSzre0%2B%2FSCeLvy9637ub5zZSvW7jYt1TPjM4YbenNANcn5i6uQpHgzoTNFuf%2FeX9dUJrird5AkQg3Lhr5c4t86cAJU%2BCXkR4UO7XQSKDIjHLi9LgKJST00qWonw3Abqzvrilm3ky7duGAORWlsjxJdilrtHJW3qCA4pnF0CjPEWB7jDc6SI%2Bl6XMgfDUdz6YFupk0wqJgD4n16BqCnEFrbTh5meeAvIOk31hG37H75TqoHMwkMC9NJH0ZM62QIKKID2jFGMW%2B4nczz3gNSYKLJGITaxierY6u09V%2BPQC%2FvkgjJ%2F37vUtvNzQTWx%2FY%2B1AxwkMNTty%2B9TpUiMFhdAwOm8%2B2RtY2eDwwm83nMRxq51D3VMVq9%2FTJ3DHcHCPpIHhxolGhm3JKPFeCcq%2BpRO543LgciNypPUhn6gK1P65P917eRHEVon7n46AsWJtHQLfZbuDywX1tTl3mhpS9XHk98qWvppf9tBCkOmpQmMiuPKegsLQT%2BWi9oyzJuvmskXWaOnSPMYYYd4rw88ZZxbFv9dOkNpuBOPKWBsSyVe1UJ5bJ%2FrnqEnLWngQ1ht1aMOn90skGOqUBQS9kdnCZPgYMhua%2BkH%2F7Jgv%2Fdx%2BuoF9fx0%2BbjsLih2NSmM2%2BPXQlIDmcIh8FLSdlGtYZucWrJCxI%2FTRdnqi0pJLaHYIGIQgl3pGUKEWDHhN7ZixVn%2BvIS%2FN9Ze2YQiuog0sCb6RHNeeegLlA2Smy1p7xKKIDOgqf46SNi8Pj2NYW8FKHa2eo%2BBF4RyJY6qn1dLn8ab%2BdBzyBR81URqLSeVFHfk1w&X-Amz-Signature=d119dadf4ccdf3a469d98e3c7a73299055d9eba80fb9c7eb4a75736c79ae25ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

