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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H5EGWCZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwAueOoUrx%2BMzqPzh4yk0bQSXpf2F7GuFvRUTbZV6scAIgRrIgHWrbkNuyVeaUSb8h%2FhQUZ1Yuf2NLNXRt0zQGFnMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxvPWPH%2BiKqxNqJeCrcA%2B60jD9tjHQyHrb0NxPt6mvQT7apccYNXkE7VgQQZK8ZwMuSJuqJFFMLxmrNdCwldWKZhrDnY0%2FM3l%2FiemvRNIbpp%2BEvyV3%2FpoaKNY%2FwHClflck9cDvvRhkuZWigK003kV5e38QHG7c6RRH9SBW3jrdg2QiO8Z%2Fdmhnu4A18NS8js6wvbNptKAE6K4wRFcZ3d7Jn6mItB2b%2B977Cj3JiHTryINTGvJUnZ6kLSfUHDLXKhw%2BrKAzebncu%2B80qDpUt%2BECJB6FSDL51KBGSJ%2Bio40HRp69tImW%2F5Njfwls6ZrxHATjG5fmo13lHhIuEcqAvPHSEH950nVEH2r5grTK%2BW7b5hgeuI0d25UjZS0ljPRZXhNpNYY5r1tqZiZXV79x8wV%2FOJVNgdza70K6BdY0Wf523xl2tlOqaTgSv3QdNtRDIEKUA1wrv2JoaX70%2Faa1Li5M7fZIcphC9%2Fwa8c%2BcWKQmaWrz7BbR%2BYnKdO24hQe3%2FuR3BAI7GbuIXfTt4HCBM4DXFdwdME06umzXIAdqPE%2BXjh75GIAfDFgcWnP5fapmeJIGHjdlYEn0cgbIcW4jRJK0Hef10IhutGlXHK3gAJ63BInehqGWPJpbUcAJMssxU04hD1QXAZZiJXVLbMMqh1MkGOqUBuPV541eXLGKuQglBeNvLXdsq1JT8aGvgLjU9xoXgNzmoA1sE%2Fty2VxYwx9%2FmREG8qqUWBEmGU9FdfwaMfEbzaooXOUGqVgffBGl%2BNZXEPc0Ty6ol8ztNRhcPtNYd%2FLDRXU8U4XPIye69wtbwx%2FHmUrTOkNjdKhdapNmjXpw2L%2BeeUAwKM%2FRIIDFa8Xn3dmwFqzSI3WxSUUiynPoFm4Yh7IK1%2FdGo&X-Amz-Signature=56c4915eb8aebafae15c5b9c6e5ec893afda5a095a37fb1cc099f181c941ec3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

