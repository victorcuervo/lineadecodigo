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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AK2CBF6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbbgv6ab82ArSBG0ywh5aaccVevkrRlwVCbVtLGQR95AIhAPqjvGo4uRaT%2Fs6PDCOgUivAxz%2BabAQ7M9PrGKGPGzwIKv8DCHEQABoMNjM3NDIzMTgzODA1IgwtiHkU3ZImqswZG6wq3ANEUXQvMhpgvp2I6N%2BW%2FsXVebv9lLiGZxus3wjOavghh52LqeXpu5BZeqfDoNi6sqJ%2B%2B%2F9XPtQgXvq1IQ%2BxOEONcsCxgu61jFoYw3SM60MMaZft4o%2FNiUBxcJ4mZE8CtocIkDdACsNUj1vCFzZppXTHetJDuBRUho5BjMTs5pHyIFmAPcSkfIehYhoybW3dKpF5KW49%2Blel28ZndBoAdJ8akio8NKpx37daeHsm2r8A7inGAgsupW8U0Hby9CIhDD76iuUry9b3BAQAb%2F9Pa3NbPet0MGMU7EDMSAM6abW2X5SZwaQu3Y0edVgXzMRoQaTFiCTixDMqm2kkBp5xSB7uL50%2B2SrQZkBmBJKS%2Fm28GC89W8a4xu21lsQBCYvCtSe7wTvGmfFg%2F2JKtw%2B0NfThAQUgLIzeIeiQY8JkScnNvswOMb92HpWXVWiZAgoX7NLB560%2BomsZbcbLHzbrMTJy5IDRBA5br3ES5tugA2BWSLzhYmt%2FRHowtrnj1J%2BfxlP224WOgiDUGWD6al135df4hYQjvf%2B%2Fzw9TF4627uF3Du%2BO%2Bz7kK4GTXk25tPL6kfKgYusQ2cIqkyo1rStm7s%2BRo00hlE9RVvOp5M7zOMA4DWnni5Sh%2FiAdYArIWjCAvc%2FJBjqkAepU%2FFqe0Jnyr9KkLg5F6E1lYDpYrKqrbGP4jrKjoy6O6%2B4cOsYN2HTNyu354YRBPEpqw%2FYUndufFcWLqzplh8hxSrfbAVNJBcMLdQq34G1rPMFO9VphxdqaM7rqoLw%2FmjvcomKuMg8bieWxiJEDQbLSXuJl0juHUh1swl9H5m9VtSeFT2dlTIIjA%2B3Liaz%2BPFrvMBL8g6iwYixx3UQsUWiiJaCF&X-Amz-Signature=bf4a532d52731deec0b5082e10d7f7c37c0c0ff71340839829444ddb0c6191c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

