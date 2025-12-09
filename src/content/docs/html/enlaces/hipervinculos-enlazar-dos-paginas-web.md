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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5V7MZX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIPt%2F0gthToOStX8HZCMrbgIw6rMaFESRcPP2iT7d7TAIgaxV2NnI66M6JcD5DiOHsXpwDfQQlh3Mvd5gtnnMldxwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9bd1rWfTe1N54mbSrcA7Gc41hpyMrKkEdnPQJrpvOXO0kpjx5pU4v2aXtG2TdpZ6QfG26S65b46u69TKBPrC9Twvuv3vLaevAbIcmqw%2B0vrh8dDtSAV4BFsCGAlGzs%2BOgqnuhnSpDqooLc6X5foxVCNmJByyfOLbOxEvxnGEU3UFzuMeNMpArDatmM44zPstfH5VfuDcvkJ60sHO4ktA5NXmz02UWZJSOhRZIGgHskgyluWB2BMnz%2FXDHj%2BrV8aXk1RiZUOlbFV%2FJsGxr5JnXIh4Q37TjTeHM6yIJhqnvqTDJ4fAE%2FBG4y1vUR1Ul%2FqxzeBx7vMtw%2F3l7zYVAocKyjNujBLA8yL%2BpmcwqLRddKuPduHBhKLlCoC7%2BYETgCqqBTMHUKs4RbPxr2c1ad3mMfBRVu6ky8R8QG0NKBR7jelrM4v9Jluwi7lU%2BU12tbHHo9jtBAV1FILLVOUaO5V7t8a%2FaHSuLkkbWPvhb8NUnIteW00LojynTLvcD6OU3dNWf04rh0V9VJVfzW98gxRqtiQlpZlY5rLphkGDpeiAAO43Yq5E8T96TK6bo3piWt3p2bdIhOs1%2ByiGJJB9LL9tmmW42j4ETeB3GRRHubxg3nTPBuwhMRRJ%2BQ881y0xMrYloMpbePqBPDe7hhMI6X4ckGOqUB0s8pPq80S0hE5GlLvjNm2Ushpzk2a60gzKkPbFLF%2B0otGNWzAjxbMdlJvf071VnRC9jCLxGOkoh9Ndet8FmLgiNkG3tRbQ16TaMmN5UwVPQ7cvTZfZCosb9m0YZvu3qaKlQW39NKpKEV3Bcf7aq%2FC3V6rUYLw%2BL72CfklP9nJoY6MIM0t%2BCQ6a8GfJknx7ZTGfLJD8Rq7WZh6qoLPpMhICD3HDc4&X-Amz-Signature=72ea92511f56854ef37f9ba165e664ee2eac599d8e66bdcfce4ceda6a6c15faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

