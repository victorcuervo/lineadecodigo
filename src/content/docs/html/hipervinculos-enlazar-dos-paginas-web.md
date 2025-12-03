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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU6CSAGM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGcQEa2LfjU1%2FAY5KuvXaHEOe3s6i0GJnzW6RwpTnhWGAiBJJQkOmk11nuwJAZu3G79u43CtkT48EFORBInaCradoCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMu%2F9Xlds2heTi68EpKtwDcLXw1dBXgpyQZ5s2nJaA7QpsVraSGCcfU27DkCmAWy2r28dWn4Dbm%2BeHl0thq0AYHEH0tsHro7NJXmkvDhOXC%2FQaTJGxn%2BEDS2Wm9F0jglgMHidgLgkdaPVzp2j7yZ3nhqp5ZGN58MBtXNdFNF48Gdv7l7W08ffkArpYXWcOQQU0Ls6T7EVzEjNclM3ndo9Om2tXaHny3D2nEzcuXvA9IOwjqmuHza4XJRSwrQhQy7YpQp6iGEfy2x6KFuW7ksr3kmA8N0S1gdvFrSV7dThsxJqLr6UncYvVXhmCBYRTiL2Ty1RwVCqLdDyTDrE%2BdT1SEK999oBS82PHc47E95eumGcpag2k0HDmQrldNHZlS9i00k4YhkTB63ct9of1RwTnMK6kqgWFgHg9SeWtISVu08ED1VXiQXKFvUFIN8FI5vU3joY1%2BOpmoyZuqGnZVxAzzQhXdL2CK6OuYaKsAAE5xQwaOYUwwbbpUedqVxjyVucQp6Y6%2FnvBfTTkyOUxFO1ngRm6u%2FAODj0QUiIev8vONen8S2bIBo2VkLvMPn%2B7FX%2FoBtcYg2OGDHoVnCnrLMlksfR5f0phnqefvit%2Fb31HmjlWm7sNHpG3%2FlyF7dsfR1jHzMTS4Jb0l%2F0NXtwwsr3CyQY6pgEymIWflZasUT4a6LQU0xvs%2ByyHgIAeuNskjrReoXF1%2FIM%2BPsFgsj2xYSch1uW5Afw7g07zsHd59%2B7mtEG8rNPvK8I3MYOkJMgXsJ9OOZglqbk32khEN65wkksAYD17qHg%2BNrdbpy29DwvGKAIBtNA2Owuigr8geExWTUuAgvi5ZJPOsoGCB%2B9V5%2F6UaZgnKHpI66P5ZnqnA4vk0njDvhH8Jfskt%2FXm&X-Amz-Signature=194896a1256122eb84208361d45bccf071c66bc89c5c69d944c6c6c21af4b319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

