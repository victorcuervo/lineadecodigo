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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMTXWSC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDddizw15piYhAfAZyBOKiQxS5HwFR5nKe5Nkqm472bFQIgB2QYFPgLA62Lh886BJo%2BYsTjiWyEud9%2BDS78eBzDvbUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeqyUOhJGQTrIS%2FGSrcA6cZKPeCNt5GnoJswXsX0kiUy5ZaHqvgaglUYnY51%2FKoWEqXQhC63F2pJNQM3zHyk%2BdZc4eBoa6NbkTULc9n8Qh1kAKZAIKChGY2P0ElTQIH9Fxc6hzrEUy0V5STqNJ6PxTFLv7RV%2FhGaa2OvAxmRyBsXsMqNxtcs0vskDSxo2UeQtdwd7ApKtTx8Lv5Dewt0gPdRsKLfPEu93MD2RYwFxJX%2BL18HRbju4UOouEreuUIhlWP1K9BIs4MAaOW8Kr5As%2FxdVSrc6b9xLqPih1MWQPjVtQTIqsDSPxF1vbeOLKomYz9myQkrsgN8bsoh36LKbZH38JmSj9lW2wfMlrz%2BvcagOPma1x68nYYssDrBkguw5K7FwbiCoIbgr7SERZOakGTqs8Vtm9mzFow%2BGe8fkWmxghaHISwEzq%2BW%2B6xBD2B6K4vVoR8inRebBGBeIijRWdjiheNxetlqh8E7X6CT%2Fi0h%2FCGVu4cS71OvBreeYJiVFmOieEZurciQ3jdADULzaDfBwP8CeLBL%2Fxl7ocaFEV34aQ%2FdqByQQ5%2F1Vo43BuwGAADCdxjVKIg31aadh8O1CB%2BSzUiViOXg60jaPJsqMhV8uBMyGbxMlXUAzI9tLHPuJtOaKybSQfjoT6OMKKk38kGOqUBDdB7SBkQfDHDJr8rH3b5AfPLqdPZj4OzEHXwPjAuTvyLLCyDUygmFDMdH6sWzW4XgQec%2BP4aPKDrs4L3UtMuA2cQUa3A0tT1%2BZ6WIni1f%2FieNpbOKWQjNk%2BzsXxinrIquXbTfT6fmC9xsudHqQ37Xn9jHu%2F6HC9KAaMJYdXdqkYvcCIs%2BALzRMixLr4M2mi3JbHISxwFMipexzZ5jtWKtraWRMTM&X-Amz-Signature=8e48331b76ad57b66708e6ee69acae85180f09f57d25be4880fbd272ad3fde3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

