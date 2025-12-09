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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPFETLRK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRjZoMcYmonVA1mYSXYRlCqs3KLEo7DVM4fQZHOn2EcAiAznNIkdFOtZBBWYp9GQEUes%2Fo31ckLcKWA%2FPv4qUTgGSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqYtSUGzAvJPOuUhqKtwDxWlI3OxniJHyEcmPkMZAfT5PPqEq3RgVR%2Fn4CJwOMI0FHM2t%2FEQfDn5292Oe79pHYZ3AgNV5WWFbVvzTT31%2FPAZCvNtEB%2BTfV%2BxkYX5rbMEtYUPaH8%2B3HTFzM776shzTcPUGjU82nMaAIa1mLNYrmv3y0s7Ppmt304MEA8XxkVbU9TlxfGSNFKUJJvT%2BPyQC%2FXXw%2BIXKCyMMejgguoEiSlYEcqf46ZAcWz9te3TwBfX0XUGF3LpCK2GG%2BE2vtoiP1DKYt1mX2j1rvrciiDTZBYEwuCkWb9kxIZQIW3zuNfY%2B5zdFzT5aR%2BC66hX13qaNPaYnQIr1CFpLcwVejuu5ZarmuEpJFrECs3G2U5mmrGEAog%2FgB0z99zO8O1G8bZ4kzNh47sjQHx%2BP2%2Bvmzyk2fQ3fmb8QK9rb2Y4ptsu9%2FeAi68Dz0r511GSC9p5oTviYTUcEd6Wq9B6w8LR57nZBQvF0csDZMBC6MvhuxNexb8dWdwBG1eupvpLXOz3r2D%2B1CJPqbt64wN%2B324OSIei6MWYoYun8jyObzo5PoNmQW8QzksgOWCCV6gV3i1X1g80wXKtsmolBtQrViZCUPll860gTRcopX5wtgHXQzO46csgI71q%2BWOeB4yNPRYQwlZfhyQY6pgGIxLHp8ol%2F7DeLmzbdPgiff6PGnnt67WGd7NGOSTwJclIAMDa3KWV28WU1U4%2FUX%2Fn47Vbe9wh5kRwehqlL1Ak6ervFcJHwZndl878OXTnUAkwRT5Kr1nkUudLZKQwf%2Fqq61LkcflJJ1Hov89UVpTp3IRBdL%2BFPhjXge5mjZPed7iP%2Br0pS9o%2BCHce0GyoQVxBsc09A0fnji%2B25kT0zV6JX6G0aoH2d&X-Amz-Signature=9d8b00d24e2beccf32275d3a671b1ea5ab8ff84ba74c8af3def13601d75b8a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

