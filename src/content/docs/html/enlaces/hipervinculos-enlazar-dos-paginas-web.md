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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSND5VSL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbXbMk%2BoVbgS5%2BnfkFyLXu%2FJgCkqy9jE2uhPVsQsctqAIgGboiswKhfNV9JCoUCUfE1Jv9y6xWLflNK5HrvAdStK8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyU0rEkVKl1TamFvircA%2BzbUyK7eYH%2FcbOxpWirZebW5EbwCBLzEWio2ulT8HIdaQ5skxSh3ATCdEOjESDnYZmagQsa1fe%2B9GC7DoTfKGakeFeWmvj6htF0o4Oau7ZbDchHvHFtJM7u51hDvw7ue%2FgNM6c4%2FpMfzAdO7DOittSttjmKFybmpID5pt7nKJGoLXr9XUvvmCwubEYirkDbyo7HaqpTnE3vtch4%2F%2BFBQcgEJM%2FSbkKP%2BL%2B2cn0CzgOcg1Wov92jIYtw4InN3zcUEH8htnBeTAwH5gw3kgxeboM25olt4IAUMuTtK6Ax0T%2Fl91G9NwTZ9tKpU0xikkGAsPWLXCVw3n6P0o1613bRg42eRpDsia7xjFQ4pOzuJyz%2BbQ203U2QPgyNRNkrVqUfBXypreye4arlVlOZ1nJO2VebRqACP5kneNzdMK7GmvbdLCHkH7i2PzBVwBO%2BZSRrzzBNP%2BgBCWv6yucQk%2FAU94XIW8Pxc82WLYf6LiyKLtCa7xrZ0n%2Br1ibt9gcu6npmvesXV0ZzF8929yzUQsJzve%2BmgjMvqq%2FpiLkZbH7LsUhAgAHpu81nPuNDkX8i2of1T%2BfSdUjIlYVYNGJ3wKZaBL8oT2Yp%2B%2Fs2GovAujW1%2BMkmuuqvGcMYii5HgluYMOS84ckGOqUBUHR92WgNH6BpjBKUihScTbu%2FxSE8Y%2BvVUNZkXA3rAfi3hfaoBIbWZK7KZDNlVhqzw7p%2F8tf%2BC8fAxj8R6j8XQNGZBOX22xgokkicY58f1TdbEB4b0BRLhUsL8nftL5Nn2geqzJjhMcKSKen1B01D0qhjeK9m3Z6RY6Ckc9gwq6qLYYlt9MSIkOM9qsI6B8r5gX8%2FaIlsCMcuKgd4F1AUyVndJqsy&X-Amz-Signature=fd2ad3355577dab2a67b78a48f369c104324c176930a42025f2bfb019bfe57db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

