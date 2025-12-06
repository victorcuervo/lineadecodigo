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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOIH4RJZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPqOAmzfcTmTBXqDmgrehj%2FhYOhVZbhtsTZKX4EevxEAIhAI7ZPhHVRLjXe4jHbzO2HBJCh3%2FDjuZr0Y3Fng4GHAhYKv8DCHUQABoMNjM3NDIzMTgzODA1IgwwuK8zZbE2%2BNNp8GIq3AM8DDojqwcPqqdJR6giJFOEvA%2FdyMr2faVsxpFrLGp51I3pqGHA4LfGCIf0npPra3NeiVTRU5q7mi%2Bou8VqOAJhcQurBDtbQWcYkxg1oKvcvjbMUsZFBhmVbjbOQ9Z4NCtmMgJHmFZ80ikDP4F0csWcSM987P7rD7bZTg%2Fc0%2BHX%2F0d%2BhrSFXv8J0x7aGEs9mcbz569JXh4efzHmank8O5aJtDAE7BH9vi13RrJ1uGVQqoUNo4Q4SN%2BTTDXBv1L%2F4m3nV6aCqn%2BsQNrUuuBzv%2FYD8He8PMGFSP8%2FnH56IEZw8obLZgCXwqpwoCwq6LBmyDGoauuok%2BPkOEYc4G6sLISsyM7CZ5Oz0zSlV1siX2Yd6TQP4c0J6a88MUJy1bJFR4%2BJW21TciOo%2BzbeW2iiI1KeDV0KoEKgaLNXdKcOrSZNioh3PApRdx7FHy94Gls0SDQnIpg8f9guH6Mws23nV07fM52Bwlz2WyM5bt45GdWDQGsf3CbkOfMIUl39A4lkienB2pj7GhsDSgKRnpStXoT%2FzcmTc1k%2BWtp2k%2F2cRtlBJgFTos%2FhrIaAYPoMSSxCSPxxEeitJFPq1nixtedy4VvPuqH6irvIv3AhUhlwGEj4Y%2Bmm77Zmbdtg3NAe1jCSp9DJBjqkAX2mxosS5vjmBr%2FPxYPxDkeWT48K5yGQsBiQqLK9Y3OOczVZziZ4%2F7MoH0DTgSFoofEZLZZNfe9B2FPL0or3ygrdb4Jy7e3mOt3HMfdwVuwN1N4WARp9uddUKUxI0jIlAfACuF%2FOyLYFPxc8OjbE%2BRte03VaYh7YVdbE4hUr%2BXT3fzK9Tk2BKyufvtRq6dXuxR9PQmiLt%2F6JnOEhIs3wF1tUtdJX&X-Amz-Signature=ee0dee501a61244c5f50213910ab80d86134c9a6c1395c4860811b6a14239177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

