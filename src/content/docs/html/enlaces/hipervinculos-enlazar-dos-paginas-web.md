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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NERNGT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOb8buTQdtR2Y%2BYhy%2BXmlN1clE%2Fulk3YZo4BIwLTnByAiEAu%2BpQEtyDugHXfs1BsRUcXFg7aPfaECUP%2B6CkillG2Qwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEl3WVPRda9xuPucVCrcAxLmFe7%2Fi8TPJ0TmRRbO%2FPSL0YeCRXZ1NlhkzkLIciJB%2Bus441DrZmdS%2Bi6Ch56hxfWsy%2BPXnmqTzVOGFj4AkQV4%2BDyVht7nTmgACCtIWJ0VLyje0QIgRbttCBs6ReaBGHIyzBJ%2F58qVTal6Jjg4pmcffqIlaERozdbQt3Pqap0dyb8pEeaSpCIN5q8PVfUSbSENd8KPvGL7TJ9NHPPUDSBBfYjXntgoyKGf5k2O0UkAfvbwNMLdV%2BzYmXwB1zQ3c6jYIAz5y8BpKugmRQTsGTHVRgX03hN69MVZRwyv%2BAqJAZ0FosO1yZvWs4qpmtRuTCMSQjNIV9pGs%2BnkAmhKSzaf035eIrjeTeYwkx2o3rkb3EGeTt1MSLEYhvtGmj0ejJdCJsyLF2sS5F9w7dqulxbR20a1nMnhDrEyBg6755Nb2VR5R1VAGTcr7KS2Z1WNLLx5laxDoMWEuMKu%2FsAeREQbAnqyx7jV6AN3ncx3JbRU3M2coDOtaznd3cvy24%2BAS6WTm6Lx6CYwbalYUPtR5HcasPxHfsBg%2Fp0Vhh4yY7JFPxNZpcg%2F1TWDrb2WS2cS06GvdFWSYsuX6osZxN9bkitZfMogD%2Bi%2Bl1eFgcdqLtFNw8x8wbrUy%2BlJcvG%2FMKKm0MkGOqUBoIgfi7E2XrtofdNp%2FtJlEWmf4kJDjnq%2B1b5aYxp9RB4yld%2FS03REodrMOIzcqdhKV1spx8bOhEe1Yx2FYsHa8llN3DP92ZyulM2XpTSvRnlaYqYzaIy%2FagGXjSVz2GOZy6MdAtkPEwtn2X6CGO0MYdM8EggI2MIAgDBoCvAjCtgCRsR10uQliaRQYIDGxM5508mZev80YAWzc3kAoVZGESwpEULb&X-Amz-Signature=1d121c99dd4d2a49ddf689fcddfc3c0d784940a2b04265fc92dc3a553c77efdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

