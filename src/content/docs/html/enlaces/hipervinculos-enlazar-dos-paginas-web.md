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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2W4MSUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK50x2qg%2F92SMUkAgMHKujnUoGzorLhC5QTPKtQghJwAiBjgg0d54QnpGphLosZLnnPyxdnOpxA3AuqbCAI8xLCyir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYV%2BdcFBR4sw%2BjSr6KtwDRs%2BRj%2B33L5CDlQ%2FUTwIAvrIh8xlwqioOb7J%2BF8soGr%2F7oSTyUe6xATzcb5zJWIQYMirnRBBzyWhCbvn%2BvoPH2R4lmYu%2FaI2FEOpgSgtfjm777qOCW2INUIoazTzpnwn5rGo7NLKiOyePKIoqRtimkyxBKk5oPku%2BM%2F7x6F1DIOBz5wDdV1%2F1EnwYwRrlQiAGnpXM%2BwN6eLRIlpE%2BD1JniAnfdrbUjinNi%2BFI6xZwvzSoaHpyR7GLdp81KQOZcrKtNMZQwvOqnIGJQVjj%2FT7UEF6RojxeCymMiYPRh2VTAd2pWb%2Bi0YD6vpkEo8%2Fx%2ByVxBhnzZrWl9pFM0%2FuMGyrOvBpzI8O%2BSrzI6HWIiwXx4mVgRbr%2Fee949bfk1ZpEdbkh4Xu7wCXeIB975j%2ByAs6T%2BJiHjmrgsCOQbLrmTv4yd3gnN6JVVNHmRAwAZVhEULN7bij3RC9%2FyGDYCt7o0J6oyIrkIEN0vXGimIbzyPTwl1tQ%2FSWlB1YNFXK43ZC9YzOtkiEJsR6FYXZpY9ZuEF3XUkD8c1RR6vzh9mOjHh8ouixrK6YxLETcA9HP59FIbGOxLq5CuDEnnaZnTx9J%2BCuzeWuFBHpMBZ%2B6m2cgL8wD%2FXuHMC1ArZHaOiw7MyUw7czRyQY6pgHWz7yTl%2B%2FHp%2BD5ffMvm5ODd8fhl3lTT1%2BZyqzJp8ir9C2qj45firN%2FSibmVTBGXPRIPMXOL4lk1Ic8ZMwm%2BtGjI5DUjk7FEmX6x94avoUfl2nBteteR1oonvcNG%2FaUmXLYDJpxbrVH3FatPOT9N0jqQRHQUzLYEEik%2BS9jU2Sz%2Bw0xdd8xcHeWqzYp6%2BfMD6dSgBuT8zh5gEvdNPXmEL2u41tjBpg0&X-Amz-Signature=bbcbd556763658b8e14809fb7aa6258526b17b4cf1b118cd345f9932495f3a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

