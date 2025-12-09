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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3XFXGE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T202651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG17tHNbr0fjZCryxoLdgOSTFdEnOlwfPQUmXq18x1soAiEAkGd2579HwGeOug2D3%2FmjKz3zM6tLhc7TNdzUAT10ZoIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEt1fNfeEFMUXDUSSrcA8ogHM7paaTIOBTdRiguc8M8MyHrODhq3WS%2Bx0rrRcH2s%2Bir%2BRFnfOhhXnIbhDs46burTQmf7wPgpbKHI8gzDSHNwxa2w2QrMV0%2FOghYVj%2BH9PLI8pftLBYoW7cWFUHkWdYilTX7hInO9Krb5PklZK9H6AgF%2FW7wIPb4S0Yqr5htQg%2BATHucRUBTvB0UVgL4zcWeAS0qIM3wYHczVkAYbkN2HLFEQQ8BO4axemLKJPShpYzZVMLp8E%2Bxrub9mQHxtmhgc9s5%2BtxI4YD5dfnzs6%2FBMJHuoWmK4Bmf%2F3Du9%2BRRuza9ki6Vgjz0p17O647v4xixz1WTSlqTGhmzImJm21xGkcSKaUZY%2FTZjSkNQvj69EZgqsAs1JD6BxFzPDFZfFTSgKdWb4Z3TSOiFw0c8x72fYxRFrcuuEB6CYuiNj1Jtz9mTz6DczfxVy1Jca%2Fq98WZx16%2Fw%2BXjBdEjp0rQa5bEwsRDzn7dv9NMYSOOST8DZO3pqVTutZlpCbJn3mRy3Lfuhs7jD44QTtPjH7hL1OfZzGnZwSnFN%2BlvdS966tQ%2BmHtuPXTGVpKYXrH3fgUc3Gmm34eZokP%2FsHQLKHOIj1XShaR4VRedsORQhKmstT7In%2BSoVr0DgnwAbYpJTMPT%2B4ckGOqUBr8yefgDfc5mxxg4IrNvjWhp6XAu6kQOzGJ%2FaCIc7IiMe2qv7XUW%2FuYxon5eNTMIGDyIjvHuMzVGGnblcVN1ekr8%2BWTuaTzFUNDYZpgHR9GkA8LNeuFTsSFVv4h68oE3H2gZKJP%2Bl4fY28jmjesf9H2nu54AUVjN4DUJGaXr%2FguowZVzUoTa33S4LlBNMLfUuWDD73TlweuSZ6aKZC45JrzBAqcf2&X-Amz-Signature=7b46e4d4e5d965a569b24f7f0b9d62a06d8dc834118e07922393431fb8ac2e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

