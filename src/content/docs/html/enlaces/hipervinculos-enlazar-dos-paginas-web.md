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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZIKJIBI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUKtry6WK4SkAJ1%2FWmcnboB%2BOS321MYOXy4%2F9HSOGrfAiAO%2BNFP3s047WOFJ5VBkbusTWtU4pwqtH2Tdwm6dj29ESqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwBIJQDb6IxwDeqPjKtwDzOGxjAMMdPHWniTHP0WxvBliBqBYK7at93Pif8DNsY7fplcLilcy%2FjkLxd3RV52oSRBCdkB97HRxitTiMg9kZjWY%2BCJfhLfIeeYyqWKwJAebZlL%2FW4mjt%2BPE5TLIQ9RiyJILXS4AipGXZC4mCwQTK81F2DZyRJpLlYKAlt7Jvgd1wNnGkT6W8OeUJPnuM%2F21AlpKYCH1Tr5e1R3fdSysr9j8uic9z%2FA1iwT6kgl7AH9cNQcwjVNK78gCYzsUcGYubYvQq6xNiwwZrpdkDT9tLXdHPpn25rW6cRKDNvE35bGu3CACdKm57hwY56MbMU42s1plK2xu0TIoopTIEqltK3RVOtkVxT1uBlZqMS1D%2FHZ0jeHxbo06g1EXdAxhColx2RqXW3LdRYUVyNybC4ksmFY3J8MffVhACGzjFXk01ZPbYOCQQZerUxj5J5jhmF70n3CxFHoAN6rgSEg6HhkhaqitcZ29WnC2JVpPncwb90XfSI7W%2FlUuqtgiEN6SqYM%2FqjsmoDrN2tTbUvjk2mU1KjJXs9PIg2CY0CSw3tVsS3ioPUdurMZiUG%2BmsWAT3C%2B9wMRb50urCmvU%2BdqVEg60yaFPd%2F8ZVu5qJXP8zh4dc6qa0SoRYNmTSsWswOwwt8TfyQY6pgFhcKEjg2GIUbiddHpzt%2BbkZmq9%2Fl0P%2Bojudn08EHpqx%2Bd26f%2BFo4S99kgkXFa%2B57j0igkmdo3%2FQlBmxS7gsorYOLp6XlZZGMSB0elcmHMqzSNgRA%2FeAkFsV1iivBSQ%2BRll%2F9bALTKG1KAjlM5r45SUVDfJuq9YZX8tR3lJ%2BiNMFEM04BZDLeFsINe8MFDffe%2BZStJX%2B%2FaYWHxI8%2BKxG%2B7YnGz0tkrj&X-Amz-Signature=3c53d880f578538b872a8974074929a80c99a348df2833687973d51a37c1c4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

