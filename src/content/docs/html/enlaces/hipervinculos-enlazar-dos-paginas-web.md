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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLMFUC3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4Jm3anhZmZ6bo8O0Xrnm7A6xLyQJHV7br3mqUQjee%2FAiBTxo9ea50KSRmBGpw0zuB8725YBMYhbw8r7sA%2BILsJSCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFieTGwLfKJ%2FEd8ySKtwD0xuDlTn%2BttaMIlgIualtMHqoUkXBEVT8wGZYRan4BblQZxzdCc5obazmcbBQZ9KZ3xOpnqR%2FZiqeh3GIKb%2FqvacJqImmriHbLVo9YbznJGC%2BMqf7yd9x1qdJ18Zbawk42GA52vAiOW5444pPpz90xCsXeflWJbN0Tb6xzIwFFH44meYPSR%2BP1Tq0QRMVGikVL5I64Bf5JrLY7J%2BGukAcLx%2B4li8vaKmYdIGICW6eLdIxfICL5Bdh6%2F%2FHiItbjOAiu78n5L9UYHUl74peQZuyVqTDz006s1uEwxmMmJR8XIliheaynkOMbC1%2FT11o0OreE12K0ohmrE3YsTD%2FfXgclSslyPZBJNiqy%2FRWJo0XMvHPWOrHleP9DP7Q6rFVKT3U3nIyf2l0JqdkwhCJApo2p8%2BtLnOSzhwD74462EM7Dwf%2BZwU0crAakxTUeW8fG1iddt4X7tZVBTiO8dzZUEH4%2BljlmFe5W7dn8dKFJykLhHOkUkQYZIs25iCvy18d6bGJitzqiXzHtL%2FyA%2BRBxmPa4CMom3MjeC%2F9xWIrGHFgA0wWckhKAL80xKPRH8Gp%2B1VcRFtxX2Z360d%2Bpa94AqeM8GQudhiPEfQOUTwoqsc6IjGOhdLsV3%2B4ExlfddgwkMPdyQY6pgF3M%2Fn1uMZ%2FmglH3c%2FqDFtQjWOtO%2FKPtPRpfqKu6GUgeG5x2o3gNL7dJQB%2Fd0rxlVWbbp6H%2Fahuqs61SO4cK5LoxzVpLnhI4H02JgiKrmdatDy6sD8KPvS%2FJbJJm%2B14CWXoGhGRzf0dk7zSaHXJfbf2lBLS0%2BMo0a4IV3vvDd1Kk%2F8yvjq3%2B5%2BUFABrQHTTceul%2FX3rR8MXZ%2FvjG5lBYfTnSAP8ukq8&X-Amz-Signature=b0cfcb5b13c887fdd2358d97b1a4f95467f8302ecb9199964aca6bdb570c8e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

