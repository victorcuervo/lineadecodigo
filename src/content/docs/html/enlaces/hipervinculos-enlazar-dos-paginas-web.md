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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646EMEH3Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoaZDDBecizouDC8sNlItAqs43lauRFyvXQgdmw32x5AiEA0kP63bzqtckomyZfhFBgWY1trjuTCbzGWSKfZ9SzQ8gq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDL7dFanWNkkhC3A4NCrcA0HpriuOxTGVOHsPmICQyJhAxaiMPvTmyydGV%2FLB%2BaaedGTFR%2BTQaFwA%2Buk3Ge9cytZV5RlK6d4kD57BGtZAszZ6BudHEgCSSfPhDC%2BOwGlk7LfJigIuy6ef9PJKe1rME6a0Dp%2BOHZzsmSezJ8VTKiDf8cjB2UJLJ%2Fvlk4K4LDkee%2BaFuK5H4XTOV6KK%2F9p5oVryKbBVboux9%2F%2FqB1ycMj5GzDdavr1oxvr4mJm%2BN80KhjJF%2Bb1T%2F0nVaF2ceLhYVZisYq2kjLGCkkikLfYsRFcXWzYMzHpko%2FuS%2FAU8ixJ8BrC8f2Ci8uXDtc5MCOg5EnbGHFK4ZSWxKxLnA0%2F91ooEMrHHtT7yJd6oZIt6cRmWzgsO%2FzkelqHKNpWLgTgBwVlzL1VePpRlczSwCF8zGr4pncGQqGOOopZaQOi8yrE%2FPCiMfKCU0yYaCvmatCu9JKpVl5y%2Fq4PhZfsgVw1qHTVFiqmK4trGHzqC6L96T4j7a2pUm8dYZNYkmWvGtjwU4BOHtbmQB6gbgRRqoJtKwNXfv4dNOPLsYyljcV83%2BkF6dqKa7WTuTIfLbzaJdnQkysuEUIC4WX56PFbzgaq69mLmjc6l9Qz%2Bc14%2FAVA1r1g1Q%2Bp4x2Wch8Ba71OzMMiez8kGOqUBnOuHiK4oTHkvPAX9OMiJGvTGYIexmcxqn0fNRGrrCLe6oHVkeoeN2u%2FKtPcZevm2P%2FMgTHeB49bL5pLm%2FkvsW5s%2B0USgcm0rX2jV%2FrPyKZv95gwg3w%2BV07TTIODnHGVHaTN5KSu7nLnvKjm9MY6Aj7r4vEJrQ3uQ6%2BdlIm7CUZn35%2FMaTPLTeF3cJlTMAZp43Zt6a1FEd2CKgk8yVYZkWZNLEJRs&X-Amz-Signature=5ee44c927642bb8d5ba5a344e58eddc004cbbdb7bb26c2bcbaa9e26d4d83d483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

