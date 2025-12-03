---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2S4KXA3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCwbFl4rwBVTDwaBFVd%2B9dFqgRgXkbdat0lPjo66%2BrP7QIhAPLVq1oKZDFEPL%2Fjyxn9vc1UhwHThHvyZHPix8u2JhJMKv8DCDYQABoMNjM3NDIzMTgzODA1Igz%2F%2FwShFND1iAUMMQIq3AMCbllnXX2urhl0WkPCK2aPx0bK01Y7k9QYV3bVSa8IoPphdswMnML3saYgIEiRzxyQDxG0jCmnaNJaI%2FfhjKv8OFGXMjrf%2F3Xtwn%2F4%2FL%2BlCnqHPcDCOyy8TJnpDlYMbRvmiAi6Ri4zVc5X5iVkZfjMy0B7TZl4Ih%2B3x42QlpfU3vEA8nvXHHtc1J4c7t%2FYvodDDmWoYhTnjC7ZRZYCwdTONnscSs3%2FTDZ%2FpVSn%2BFWvsgrTVb4Pbj5SBCC1J8S%2Fuw35mEGGFCh8lVP5nMLBTJry5dCg%2B2B7WRpE48X1JFTeN5E3dBqwEa4Jt%2Bo0vJsjFIP8982cdZipEWu9leNdmcKxdh17AMeBOIsOzTyJUGVFi9Hwbfulkf77KCGB0XXdWu5D5UCgh%2FvMmGoER3rgaBRz%2FZ3B63OmD3fGGYkkBE77wKA6dhBTROY7xvLhGQ6k4ywo9rMP6hr6SBTyJElwi%2BI0fB0e7AiTACiQfmIvAlERusMhINibpWtdP02eHfWASQsH3iIZwyTYe9bUcZxsXGiS3QANMN7CR0Dpxo5W%2B3mgLJZMZj%2BrBmUEkeLKAhUTOn0kgVdYiSKJVPw2qq6VodpOPPXc3p7nu4gW1DAJ8OWc%2BakEYM80nWTTAXe2vDCdvcLJBjqkARECuZ7H%2FhDhj3S7CVCag14VNjVZIIuZPM1lDAqgQctoRJcMUOUwc5NXkcAtg4VeTunJxTewqqNSymAQY3GynrEhL2VEt6j25wpr7zxIZhe6R4uXpBDT6loeKinlfnAvc2JmCgq%2BnSX3gs1D%2Bl4tC39voxa3SYeCMfQ7c0RAJw7iU4dZIOvmuuwhp3cWfnkfZFbN1up0byDrcsSJhcNMF8e0vpru&X-Amz-Signature=d5e5636ad88d3bd8e67b484397a5e13269283e9ffe55e40f78eb8ca1355dd032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

