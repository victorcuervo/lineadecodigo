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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TA4NZ3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T210625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRGlqwZ2Ov9Mv9sLDH2vJyVzoCQfTXa1%2F%2B0nW4WfQckAIgeEJBqNvWZyUSWNr0noYI16TQfOLXN5KgSJ9veQ5UEQ0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa9jzxMGWPlHX1xHSrcA746CdkbuTn7y26qe41hnD92rG1iZPaf2cIVjPz5dlqiEQsu9yJh9wMtnbLV1iBTHOIZMnmPjuGkBDWA9qs64rWFfyoHlv4VtTQn48V%2BYJd3lVCNfVLf2CGlai9zN6IjSOtSiHPDG5GCubJGc1xi8DSsizNfPt%2BbPS0yv53Mj6Rmz0GEOlXRZuAJy1xtZdKmhsnRc4UpgzTagm6pkEFTeqsRNL6xuxlolUcRchrRD8pesLyJafJpBeiHE6Ai02v3t8M7PZHlZFdfmNiwjdRLuqBL6FCg2s%2FvNUiWJp3dcrZ8IAaSV69V9rgOQdlMfYWUEMnMvR1dfaN7d1hn6w0eFIHj9qnX2mVDuWUxZERmHQ6mFtSxynP2nUHEVblgO5%2Fur9bxSfwfMmQ0ELQI8g%2Brr5%2Fckk0SIrobYhgZ6MZzEFS6HVpOYV5dfwjD7kDy5C6vpX3LyZb6f%2Fr5lAQ4v04%2B0yPjhYmyl4RWfjhTb73%2BnXPHhxlOWCm7OCbKWuBoN516vKxcM2%2FrVL9esOGAvFRREtPw%2Bxn06Mbt6rUekuAdCrhVEA30toi1ojKAQrptChiNrVzroe55De8%2FzT3T0z%2BqMFQ8xrmTPPuUG9WmIhYsJG3hFkLrusR6dv%2FYFpRYMK3%2B4ckGOqUBXssOxexS7Jzt12ZbCo7kzGTWK%2F5o%2Bi6o35yiNV33IW%2BdxD34EicAw2%2BqQb76tp%2FnokrUrVSxhDBSScJNOZEaWZpZebVs2wtKWGfWy5SdqRC7WYKFRusBdhJZSlvR5iAHJn1cewdQ43jPZm%2BeqjYabR4r3udTJDZxbPfT%2BC3NLZ2M97wAZtvcphv%2FMnPBZi%2B7pJUJpWchBK0FSxIrFyIXf%2FZZZNO3&X-Amz-Signature=b51dca5ed19a8a4bcca7388f46f49968893d44806086583c1a1f97aa0c7cbf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

