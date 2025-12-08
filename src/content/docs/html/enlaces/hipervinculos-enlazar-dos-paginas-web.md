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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CRSUPB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDk7Z6RGsQFr3dMBAcpLOGbl9i6x5XX4wDdhm7yh6AJqAiBDbvD4rLRCdvUV883L%2BbXXGab5HPL8KCCyaF3%2BGFWqvyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BY1mbP6nNeactw5bKtwDvPZF7pO6tCtVcvOj7m1A1b7PjMmfHcco2dJie3YI%2F8IsrwZcXE7%2BPcwtlt%2FHBXgPC0EKiFGAGEkE6%2BL2HPfV05cXaAhNrmKhDREyOp%2FqGvWbDxtUDEJWEhGkQ9S5614U42C%2FSdLBQ4OfAH2NAwy8v8UP8U0oR8jcfK6nUXLol4HLN12ksCJ6NQDI70PUQavsMUlLOLqHn71U%2BKzjyGoQ5JmmU5LLnSlkIHcZ0aVi2M4hHpqllVrqGtGRfQYfkQr7b5YwJqLY%2B7nnYu%2Friby1ucBOJSfUVTGnc6GO0XMPbP5Hq%2F%2FJ8KM%2BdausysAnj3nzSlgl3DxzUh%2FOymaNyg6m8PE2qzwdfhCVX1gOO3ziO4CDOTyNf2lGiZNPUVND3LxkUeBbRYBkuo4w6%2F1lFIEayEjIGM2uy6ixxcUC78X28bHcfX7Sm0Bad%2Bn9soznc6eMPM8a3Mvo%2BiTYfDdp8AOJo4%2BifPMxIp5K0qSoS2i9dCToPrNn1x8atFzCSp%2FfFlV15xT8ng0v2wafIskf8SfEPYG4LpOQmP9FGMK2FygmXCGYUzpcSQbksJCnCPfL1fvmrdfh%2F5A3A1uAtbS6XWyoIAt25NohPs7NtB2PNM5V%2B1iHVbsmIxzHxc7YVKUwjpDbyQY6pgH3SpKMY421YEF4NJ8m05xd0Df3OAkgpE%2Fbjqu7yz8qdFY1a8foIBBxbflRh%2FUK37wQby5HmBdXAjcTgdVt7MepqR9paU6i5j1HFhtUrKXegOGxCeTPpUE5ozEj%2BYbHMdoErh0g9%2FG5X3tRdCNECdOgRrQYsLn5NrrD8VZnPDK0SK8e7aK4LgpRrVEOGvozioeEywjMkSPoCDBOSO%2FDpKmNFVP7Aaxm&X-Amz-Signature=6619b7399a15c92be4f50da6d7f12c0d4262d61f47809eb75a946dde546a7640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

