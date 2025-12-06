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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62XQPWM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1kavx5CSxbf1AXRgbfv1XP%2FqqvJc8cclq%2F32W%2FKWG4AiEA5Mqbh08LKulMh7z67C9EHgAxT%2FVhOOOqlYbDzDlBKk8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIYJLN3Zdf2Xe5eL2CrcA30bwXwRx3%2FdECXc4HMAtjWWGpZtvtEtVUgHwkEPVygrqkJAftv3arz4sAgMbZUySkhzzL0Wvi7rq7NcXKO3GiVHXpZuxeAql98AVUH7Jst7%2F6Vk1TKc7rT6vYs20VbZqR6Fwr9XeayusNvZF2HR1W79FNQRMKYdw0AMOGVHBk5tA7lKDbrFNEtZrf1%2BzxwmElILM%2FrQHkRYh3w2vS7b0VfcRlVd130Q8q%2Fdg%2BHaHYaLk%2BWbBclnDBjzUX1CJOiKTPgxicyY7m330Hq0n%2FxyKNHnKPmK1VvrBHgxbphBIHehE8A11DXfbJx6nW%2ByhxGuFoeH6Zu9%2BE4zGK2QtAbJds3yubxX1QmBxJd4noebTbw9BAiNlIyWeiCKUBx5r7qUtVYnLFvG9WxIj2IdH20vpY%2Fc4y%2F%2FTh%2FXGuAurJBxCADjLFi2TlSl9fSMdwvcNX%2BKz2WJ7By7yrdDqrTKYhYeKTQiXDn9HGljgOrnQFVn4qTToaDDOhoOjNhkQF5vOcrYPW70FniAIlFk3D9khbFCjj6IL6udwYkNZsIB4g49ZI4ZeGkQ2Wj9Jf3dRaAX5r3%2FW%2BOCA9hvoaxjpiwoayrtq1PGT2Y5OXeG0%2FyIB%2FVrVoCCAI0VSHmHiOI%2BWEPkMLum0MkGOqUBQLk3acDCs4zz4BcDmuIwlYFmQEYZmbh%2BDE5BT164mk%2BlteVwaREI4pdNt17GJhlWkqlIaRnf%2BmjHxSGNWddnJjL1V1%2FNaaOiiLZs0Ou9vEUM%2BxAsCS9Qxki71RE2QgeRyNADoApRDzNtN%2FQtegR%2BL4WiHNQiaBNtV51%2FZ9anA6vbjDA2X3x5C9ef7YnBynUVPT1a1QQUGK7MG5Bc6SZx63MeRfFR&X-Amz-Signature=01cf9efbefb88363954d320023335a774c9372928940efe0e0bb787c7311582d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

