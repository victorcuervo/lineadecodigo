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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKBU4OA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCphU0b5LpH7joPkBa3MV1D2Jd%2BNkBkrF35q7Ez%2BtpAQAIgNAbmroMKTgsusYm6SRRPhg02knJJFL7Y9%2Bls62x%2BZC0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1AoLTzCmM%2Bmj0anCrcA1STjH1PomHGe2eVT6l4uUPESMJrHhc39qhidpr0jjtElaogmCtndY6bu0wIuiBUkCqval7QR2Wd1pkwv0FYLiwM%2BXvNCtsSMOwrt1p8siIaPsnGlpz8auqsT6uZSfUfiPGYL%2B1AOUgs1yuklJn%2FnovU1%2BwripdIEi3OvDhqxSOoLIDWVazMEepCH%2BDgIeXA89M9kd%2FB%2F3f76wWZUw7ljwGxG51C1Ffj6VOw59afpBxVjVUMS1BOpYiZxqwpmZ%2FzG2jgjmMVZcY2BsoNrVQw3DmMSRnQN%2BjIi5Z0A3YCDFTmXRLZ6yywCRoYt6g1GgHC3QDwTgVsRqIqFXtXT7q6HoupoJS9feYai63r6rgwwgRuciRDRsOh7gTlFr2RE3TLUd5LBZz9YYGbZfLh0MBnVlFxZ8lpf0Bf2lXzhHfGLFSvhpdaEtO9GvYrwWW71HgpwoqLHARgDqeA9T%2BwrbF92z%2BgWCaQ8%2FU%2BeM6Fc5Z9QdkdcLNoCHjoitkAvTXBc8SPh8JSsXOptJkdqNSKgVtovZE1QO0j1OKJ2CSZwjqv33zdqoQU7nT4jB3WWvc2fdIGaQaA6Rh8F9zpvtUHyj3e6tVGbsaC7E1%2BimtWZflY7mfQij0AKGGDnca4AqmhMLqh2MkGOqUB8qcxXB%2FrXPj3GnzNFLrFveFIn%2BdXCurJptz9RyA2uTMdfTcdOzvcKXaWcBtxaDZAxOgUf7H0yxRwheMUgvDaiB2JEtH9SHT49WvFGQlC72nK12lLnDyCxkVm6a%2FSkdxvaiuhXlLClx%2BdrkD5%2B1JdQ1bCPuvtKyH6BjuT%2Fh5dj2ZHKIoLkNwvzcaYp%2FKt%2FpxwZNmn6PQhPCmpteQw%2B4yQ85Nlz0gc&X-Amz-Signature=69c847020fd64a26bcce411f58d2312cc781b925a915b1683755068836065bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

