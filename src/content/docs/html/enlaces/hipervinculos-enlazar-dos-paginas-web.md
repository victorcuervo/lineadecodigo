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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGGIULR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F5WZWnvvHgs9svaLBl3ClVu88buP7Svpz7xRdppW%2BEAiEAlXYCQyPtmRPcKXZ6LJj3u7yHt0RC%2FAxGn1a2GcwJ%2Be4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJH1dbfi8NCawsyrvircA%2FwSfmngKs2Sk7TRFsGSirm3F4lEWXibcrGp0g1nrRjYVm3fPZ7SmC2EgKG%2FzCI61%2Fk%2FlEaBi2DPI8GACvQHS01Cj1p7FLeBGEoys08nn4GUHQZHJIFsuPNp1l2dUvRMf7UutY5fGmJsx5yDIyjhyA0g6PNdTLFVlJEhe6lJcA11EyvMII7J%2Fs0ERDkTB%2FC9uuwPHKPpwuzOcYo4XpiIP%2FD%2BpT8GlD3lsFPzoUD8%2F1zu2V5v4NL29ybK4bwVO4eAI2r03Xp7OeZVUlB92ql0cADW9%2FWXwE5ReERJGWIHITKMsdKZ945JNtZFBXeMfJkdv5aPLIPBavoavVcN%2B8POcSDULiiXMF8Orx6TurHdIBZb0kcE4ii72Q8xJAINVDysFbbCO6dlpqO%2BdsipYefWXR5dKZ5GU1TIAmgDXvr1V%2F6Uk8J%2Bs%2F%2Bklp4Yi1Zbee6qI4VfwZKfaN%2B%2F3KZJFEy4xznbR7TPdGbFtXEboKJ%2FpI6550RAWklkotgyguVWw%2FzNdwUV7vdi201qnMnQ%2FqxinONKycc0%2Bg55k2SP%2FRAm7YHDPey0toHmDrZKOqV6Zn%2FXdcffjhU%2BSRSFVeD8uMq0zXLryojO50%2F5uz2Ew9MLT5TiAZA5YzHJ2LYrdz0yMIaNyMkGOqUBjG75MJ0AoOj%2FGzaY5O94T0unsG35lKlwkrFU0oCPCOFr%2Fb4uvp4B3%2Fb6Nx6idMs528P12nkkpue9M0NhSCOpjqDqRH4zleKeNkLybJDHMpLwKv2lXh0Zc4GyY3E2bxtVFWOkAMY5%2ByRMs28wdy10vrA1INjOcxVprtwZl%2FvtgW0yifXILbPzKsH%2Ff%2B1HS1SVtEdJvBACXyzanAn7Xoc%2F%2F2OQUeGF&X-Amz-Signature=1226f23dc422cdcd6f81bef77fc71f87ff94870751946d7c506d8c07cfc86aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

