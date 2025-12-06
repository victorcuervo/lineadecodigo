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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62U2ZKG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs%2BmWj2ARfYsXqwWGKCTwQHtY1PkpeT%2FUEFIViNc%2FArAiEAo4Awf0lO7ceH%2BL%2Bb6VDqGNHn3SPa%2FIYVjD3%2BQLYnOKEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN4IqbaCQoqTjeS%2BVCrcA2%2BIiMX9jj0Bg4mLUP0KvaWoF0jZt3%2BEfKgR6724SiBBmAf%2BAo4ghVSQ5Y%2F4%2F%2FPtMsdJw%2Biyg5j68TTbVOnr9nCQbLGmAGwBViEFQMd7JtvYXfUiMKcam32xfuHcRMeZ%2FQjGHRHaYg6T1rvxMbQeouaF2H2vJEnSk25jAhrez2zoR7g6wXkoezdDMPwK8HmX9d1EX8%2FUMMiMqjyCYIZesl8SB%2BwdMjZFF7UhS1qaYo4BnMrQaL4eip2pbA3W4JOCkHoMu6tIaCrwer6ai9Vf0L4M8p2ahIbfrbwJcUKwkpiDD2hNXWmr68RTzbQySAHFsqL%2BdOhvZdQff%2BbrdpwhVa%2FyxrWgkC4V6G4NxARDvMIzAWtzwQ9P%2Brhj7m3%2FtvJiwmY8wtMnkk0p4nZQ1AbOnTuV%2F7vhIPuxUPVdDawth1c5Ol4VQStxkC5rH%2Fz%2Fa9eSsdPeXN3VC%2FTTuSPNrKbhO%2BF%2B2Cf3PDlz1aSXrNBkdcL2dpZh0N25kBPGLaatdoyW3yzrTLtUzS5mPAr%2BOmiw0qcoYDZG9YBEJE6ldPJtZV1E2Dw75rH%2FFN%2BfZBn8EQIOMKfGmCdaPWWrdPyKCUq2MMcF38sA6dIKVGxy9yV60JG84heXv%2Fd4QfMJR%2FVlMN6nzskGOqUBQztvYLyBfZr9piq%2FLPL8%2BPeMtMDpRJv3ZhvUPgUI8CIXggsYd%2FMTQ%2FL3sypNXbzkRiUhpHegUkr2UoyWbM7dPQtSHSQxoxgG6w46MSApbPRn5W1Q8VmQ9Lsv%2FLx6iurC6toFLjQBM4xEtK2Rcc6wbwsEKVAAwxGeARroEo0IhAgYArKI1pMOn15Pki7VGChi3w8O%2BO4D%2F8ErZ%2FA3T8x9MijXl1cU&X-Amz-Signature=1a81e87309339deb4cb759eed47b02b2484c25d40482541bee2808d10a069490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

