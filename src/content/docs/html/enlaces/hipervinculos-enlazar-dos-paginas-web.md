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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622EEUZYR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWn0yAtmHgu6ylE1v3%2F%2F9Qh6K2KK%2BVwQ%2B1RvhdUpUB9AiAurbMKneMK9WFNuzpr79Q6kIl6eC7cGSRPz%2BHcVny9yiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8AfZBi0tjxVld%2BsKtwD73zurNHBHHSdlZqDeMKmZUJ3STo%2Fkg0S2g2pLSQ4RgBiWEEw1l74CkcvruT9mRUOUnQCiOZd8QlgD646XdPxJvUtwCxawXq9PX5kXeL9eSjSBvKgrmAvA5CJYtoDbEY78d3OTQrUHqOO4mLWtc7KFZxEof1I7Ccb5mL%2BI9dpyN7a%2FyipyTu%2FzfLsd7UYfx%2F2NXXfKP7LqV63muAVI43pyAWReEEABU60DM6IG%2Blta0HNqM8XSMtm21ExmxILejY7fiO5JMIh2Vfnx3%2BMgLnuHcRDD257C1uLrCQytXJPfVn9QZlUHSTdMj7UyqBS12YFUo7GluC6N%2BtKf98VbcSy0iaoFFynJNtOIX7mLrvLPAR6Z3F1Y0CjTc5bjpwEHrwrsT6urNU5CEt1%2FE%2FDJ%2B2VmNIuvhuRYlBB6BB6aID1PdMK3EcF%2B8hrymhbjAPI5PyI5Z3dG6LLhaktiG42LaHUWufp8W%2FYNFxq%2FV2jm5jjZfgnhCxFOQ6mSxo2M%2BfXF3o8QJi5eydgL4N3j%2BogMTtLj%2BPljIEofA3G%2FLykFXWjgf9srkmxesmTfsLlUMF9X7y%2Fk4gyfJ3QEyYsqVvnq%2BlhyzS7lhgbdKICJdr9q0mF1ijj13eFTxFaAVB9Gm4w65fhyQY6pgF8vB7P5tbf4Bc40W%2BYk61t%2Bz646upND%2FI71MnRxaLUlsckfRXiDdiNXTbFUnuRZ%2F%2B6LRN0UE%2FS%2F9t%2BtWw9ST4JEMg%2FWhqopesrWpvVidyqsMlFKvzw7X%2B34zd3Eq6hYLFp%2FKZO%2BoazabHMXaSMEcIhRpubG7e9MGPNm1HKJm8WDCP%2BPoYJLJu3lg2XHDwi3VcUnMUclIHeIy1FgHua2a7TeGZX2bR%2B&X-Amz-Signature=091fe12106e5a112085e0c7926d55dde37df762a2e25e27334a0f302d7f16d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

