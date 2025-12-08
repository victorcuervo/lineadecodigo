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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEU3KNFI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9lOUhBViZhuSuiKDWHZc4JBoe9KnYM8HgQFVpBeie8AiEAsCKZhCrAvHhJWcXDtcUD64bMKoba2hxrgzyrQJ18zuMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2F%2FLqK9QPGTY1TzeSrcA0NYj%2BVwGLN4v8IS2lWBwc%2BeOD6HpuD3inLtcCyT8acOPHMMuhqwA8QwYETYz%2FPDsvaAyueA2VcO%2BIka0socdyJXh63vZvGD1G%2BX3VO4vRxIXglsvSjAeGniKJQF6%2B%2FTV02vcnFY15Alx2Sv%2FjdOc0%2BcoyAkHGKoFDFgyQ6yxJWGRG%2Fco7GFdIBZiL7KqZ9huSc21%2FdIFwxVk1wrvmAklN5apbS%2BiWOI516j%2Fcqn%2F7y3duOAnU1FlTAQNKxONe02kyd0A8mcqp43UWNUTeLJSmrmaR0Kzt5h2Qyi1OjSBwFFo4JoiQVxh%2FyqqdQQw436qOjitCo3HwNG6DTCvfmF8JnnjkAYo%2BoqA1fMUdp97JQ0BashsPxMERf1SqLKvAofXn3CBqZH3R4M7xP6ZXch%2BTROp1%2B%2FYCKAopL5zV%2F1Ee7ps0q0sSWyp%2F8IHlGFOi2JhXY0nZ3seCcL0WpVuJxXRo8Vb1F%2FLyD099XPg%2FdKITENwRWrm1BqVIT3DX%2B2wQzO8qtHKoZxL%2FYZrGJ3cMDazuBtBXXX2qSPFF3OmU1nVCaFOq5DWQYaHAwSNrXCmz3XeEDzKRmXtxKEMeU%2FKTBsvrvha8vL6m%2BcZI%2Bto9nopiXnN74Q3E0U%2FQ2Sw7YVMI%2FR2MkGOqUB5UObudaMGf73xzHvC74yGfgHuPxskO5NcfPZl%2B6dRWdwcV7VUOwTg11yjh8MbaPZ%2Fn0SsoQrmrJKSXKK3O1dpZPJXhU1zdFneEWzjyDueWm4lwXVwZzALt7BimrnooVO1XRz%2Bfdtd1hriUoFI56duo6E5xxy1yMsWka%2BaPDt6G97lub50Vevvgl1DqKwz19AUbrl4hPH5jXg7VIcUkpAsXlxUmxY&X-Amz-Signature=7954906343874939b05e106a5e03bfe073a9ac1c4b1ab515f75706efe9df2f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

