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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC57IROO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDy9RkroZazZNc61wPHxbsdkkAyNDXQStXP%2BpHJMu056AiEAmRwkQ9Yv6RVN8wxBIQURqIMgKQvzlYoWWtGqapVKn0wqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSCK1SilAEjHwVh5SrcAwo%2BJxWn%2BzorL000GhJhHYAMlYfkGZXvOQo4rrEsRUQ%2FZLtxngAJjJAFOT%2Fx7Nl3WDiYFBR1vb72SckUZmoDxyowwelFEEvbwGwqKXCZMOM32bns6hlRZwOWISe1NtQ2J57VR%2Ffm2WTRUjFFjo%2Fp6jK%2F3T29PWwXDlKiIX4h15wlkLLhjR7ugwezZyt%2BEZFfA%2FJCs%2BiYJh75pn2uL1Q5j2OENkDOn29PJGmeLvHsf%2Fl%2F2FwaG3Fan0CKVaXKw1nDyklPdxismme9WW%2FP%2FW%2Fm9kujbKMvfSYoRcm07om%2Bj%2Bha6JZ9Z4NKDg1AkODj0Tt2U8VjXsMeTY%2FkazPnUTJs%2FfM9aTwrBtdKrNFUuR9eA8IqjXrpWut7rKiRBGIO3bLH69IExdSZOg%2FymKStmWdSwH9J3OfqzPIUdtLk3eciJzghnsI3PaMlDRbcLBB7sbhGhw0C0VqCkkM4kao6vogasP7u1ESpEGJFweTPLpA%2BzgXasuzZvJk9KmQLtldHmzb9ZRt%2BdL2sUCgAgJnRfrmpihLcNK%2BE0kaddx%2FEaQH97HL5t6UgoRADGYQtbvKVrfe83y2yNzu9KlQh9cLiBFbWy4Nk8QonWhgrmG2hL4TywVM7Gxt9gupxmx%2BgKgLeMJWa1ckGOqUBDwvNEcPg8a0FQ4s8pOIATorjHSD1krSPyZiIeBTRbJ8OB%2BGU9p6PdPWAeFY3P6oWQA7zF5Z%2Bu%2FlMnQb%2BL38y4aVEYp%2FEHZTL5vIY7oNN%2Fvvo2eHe1Qj8qo1LB%2FRS910zv3ASjAnRZsBxOZB6An51WXVw2OkA4Q0p%2BsuXcS7W75MW0q5LRId%2FRFVj8732tikn5SAzObFr0owmq%2FvIpKeEwwcgx7ZU&X-Amz-Signature=7937c8dc28c561af9e5da3d73de31a53744ea292a06223a056845941ad772aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

