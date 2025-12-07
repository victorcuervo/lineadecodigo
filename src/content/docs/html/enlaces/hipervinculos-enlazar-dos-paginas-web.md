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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFUAPXP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECUwfZ2ZgH1ONg9SoMP1IaWuwmGfL5SGZKtLxuxxQNSAiAOjODb3c2SLtfxBLAm2I0Y5%2B5isnZev1towL%2B6luPMWSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh4vnCdmhDoLg9C8kKtwDkQhDVjDmkdxESvcUxpfRzOhmH65m%2FrtoB7kfkNcPTTC315Kn%2FNemGbmBKEfMnCvoBjSPdA0%2ByFzYVtgwAvAOU5GPPxrouQTeHgz1u9KvdWBn4prsA53ScBYFyY%2FfxUj3HPSlmFcxmx3Ge6Xry2H6wzwThUTVOZDjjMnA0pC1COsrBDaEFsrVT1Vv3W1vC6JxVerr2NPFsC6EcDIrRGAaN7jdwLXpEco1JJ7xrAjRfzym6xD%2BIuxrV4Hnvvy4HUcJEGQftAk07eediztNlUpP0va2ShxjsrLezfTK6cJFGg5DzCHLUIMig2fsN4iLYxVECASnzn0F9XnVrPaHgXzmNRoFCciHv2SDsL%2B2fdVE%2FrpCuqBIwuROR90RwE2TdHMl3YyZyFpoOq0yGT0GpScM2%2BaHlnX8QZXTUgm%2BGR2YUJblmN12WErkyktWzuOYf2AFBzUWnYru035pvLxBIXp6S13hOCaFv8p7z2v2zeoVXqFbZXnyIz5fXMffXTRQJGsr0a%2BgEmgljk56rYgnBUztqDTKdJra5SjQU%2FoXtocJp5bNaPqGaF197P7Iub7nLlsu7BNoS3YI%2FFFlhD6C8CoCKD6KKWjkW5sL3pCQy6hYmR2vOIqUj3LAbqM%2Bao8w%2BqPUyQY6pgEmTX8lkJRNDr9Fy%2F40LGuFK0h%2FSfmswQmKN7OVZRF5CT75QFY3uuyl5WNhqqhuZNgzZK7hsazF%2FgcdSja8Td4LqCnLfwByO2JrO%2FKTnzGxhS1NCJBR0ln2DI3acoR5vUysaKsSb3hFy3eA%2B9QkwZ%2FGG3C0Dr%2BTK6rJS%2F0hJ3VG5e4OWwzaFeLVFLXLj3f6b8X2BQXEOsPXwbMP8bAEjbI63Ir1PfP3&X-Amz-Signature=920f0690c8c5368d512fbc71dcdeceaba5a83d42b952e0f9179843501922cbda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

