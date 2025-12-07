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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYOM37C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfaBInWhtxbY8fejgXIjzBDjo8V2GhL3ckMb2XCIlk8AiEAw6y4XhPUvGNqrojGyq6vQEmC6gZzD4NcnYxZ1EszkZ4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnJl7M03Z1%2FfY1VayrcAzHjx05cLKRCY7VQa0EhWQmi9LBpGgFEhA4aS5YOaEhkyT3Kdl4T%2BNtnehyvVkRr75UyryXYbliDB2FMlQisklo%2Ft5ZAtKYAFqaG9%2FL02uPdfsvKvb2cAUi4qhKHi9ReKqYq5EaEQyuLend5B9HF9RwOXkgvFIRfAQ9Y5Zr4Cdzy%2FoGiB3TMGcgowMks4wwO6ZhJWWl91NlftQpa%2F0j2A6lVI0Zwv2x%2B4n9B2XSEufuRsmCQws%2BnApyCET4pFnCaFVfpyKbkuqKzx5Cvn0ZnzCcj5BPKGtvpUh%2F0AAXAIDXEF4BHmi0CB58odjq%2Ffg8Ddzw6dTHWYrVZgsYrR0D1G9f4WDxB57BVyV4UO0Jml3dXIW8VpfK8vOGblCk7SxRr15cuNtLh6cfdNm4nbLIaXoIfZSgVQlQ5GvwHCmC%2BMk3mT%2Bp2ijv2wD8alKtvd4kiVC8hUCdVPhsC6%2FagizevfsnrPELu7DBRJWu5CMXufNkTxapANKb9oYrxI4IX2FOjMj0CrU9eibfv2wWgACr4Xr6Z%2B8m1cceuwLEHPBWHf0AVb%2BnY%2F%2BFdsNEuKZT%2FqUXpKJ8%2F%2BXJj23QwYL7EgxDfkU0JbCPEmPIqJAwmTYPBFNufcRk855XRCw%2FKPLYoMKuf1MkGOqUB9PLD%2BUGT%2F8tQQUmOmym0bVs%2B0uO0TUwMcUqnZIK1hSwtSN9bDh0XusH5fuWdWrqtU3WhqUf6UgHqI0mZVG2HpXKqahCFPvbKoXmjT%2F5Jnrm3mBEuDZJLAY21MvcsY3jyTpHi1o%2BF9ywUQRm5oriHQbOL1rxt8OErZPZonYIAQ9y5HvfCTUfYn3lgBPe7fjx8PSaEPgGTvTzhY0%2BYUoal2wKZ5WuJ&X-Amz-Signature=8c11a7e93f5bb4e70204083034428f76ac5d1b9410d92aa5503a486b67701216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

