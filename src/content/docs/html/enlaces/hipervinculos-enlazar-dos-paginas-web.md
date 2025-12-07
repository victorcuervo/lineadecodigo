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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYSRKRH3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyLtPTkDtyl7ABuFoUcwfaicT9oSW8zJd2ptImjhu47AiBbXmYw0huGJ0rBuHm1dmPpn%2FX%2FqME%2FdeqLIzMvZfxjnSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOedzRemVFvXzSg3jKtwDw0ySgaEUKsfNyLMYEGEQ0MijqWXO4HHy1T52US2JvuG8EiRps0TlDdyQQ9WevrdPT0KWeuWCXKe9Towa9q9Bjo4uJjtbEk19iUwYNADg4TTlbFJ3Fc7RzVOUa%2BkarQjhJ4LmjnF5ZSKXT3udwwkGJjSj8eljmgmnB4S1YQmxotKnX1jXwnwmD2dEMSDigKy6LPvOjZTmvXalStqdgR7IpEPt%2FnjNy4JTOlXbOauQ8zkvjPdRFXGgTxTp1qcd1cMZDHKJ5EUJeBqN5WnrVijDTX55s46KVe7v0lVydqmMIjFyrpNxM%2FsmwRqdxute0PtU5Cv8RRQ%2BbAVRQmnXwY4HGiBHymiuZAiIa7kPMuL4gkbaukn77Q%2B%2FBMAMfpfT95cnVo73XCWjqVK0V2RGTmF1eqVXNLj780xC%2Fa0xlkpS5oC39lLpBl%2FSVPSqzY%2BBabtvGjIDAVkdpOaHfi3ReO8cNUs8OfTSgJkRFiwbc4E5vxbAMzqUoJbO0tSRaYtdNM6BRnyH2J75Eb2XcM3qUdy2F06%2FPauVlYVFEAhKLg0SQjDImXj3lANeKEDw3novCzJUd1nKFVdKB8asjQNGE8haUPtcltyOK2PMLsJoh4twPw%2BzAnV8I8a4mbU5Egcw9JnUyQY6pgHF%2B1qK%2F84xLpKw6qsUxoOYb9CO9h3XiCMS%2BLmtg0OvSpUN0XJKAtJOdLpsWfKCBbmTos6v4eZUxLm0pFOGcaD3Q%2F%2F%2BOoEMDyxErlT018IRmPW9VA1hmek5PfHNRfihPxINFe548jOw3Lp%2FoyD2fbKSox3JbXubN%2BnSTdcvnlYKVMVv4GGFz732W6nXzWSy%2FfxvyYtzzl2Quyk8JycrqgPh9fAZK3Gh&X-Amz-Signature=4de4a0ec58c1320fff8420fbbdfba2b549fe5e7d3b015d88c4c50a2254784c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

