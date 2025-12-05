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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7MBLFY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjLx%2FaXmlYuAYvh6VqPAd62DXU4Cx9609Hp2vnhGmJfAiEA0HyNA5AgqAEpMJZ85TRM4a%2F6VG%2BkuoEFL%2Bhs5dIZnegq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFOVipNX8OYraKsldircA5qd117he5hnvK8kk2%2FmpX3%2BucYTu7h4gBRN24QRjK68vn3oXfKV%2FeyhOwTaIpYS4ReSogVo8xK%2FtaKMwd2Tbe0U0KrTRxe%2FUN%2FyslrRbySScARws0eZ2Kj98P2W0HavOa%2FQ3%2F1hJV3GIEIa3KH90CsPYi9F81ltCGFkqVyqypg8XjvfotkaxxyUl5zeXJ6M%2BZjjn5oAATImZW9v7aLK6dyWf4N22RkDTldo9d%2BnYqCx%2Fqw1%2BASbzfKP2S6PT%2FAYyCYM3lxI7gmpPamRYqFZBqvao5U%2FESCfqdN1IJISpY%2Fgj3fM6L2LxImXaIZDjpIN%2F3Z9GX98yUG%2FJmIayVtUrzhPJUcHHhrwgu9xolVl3PYg8e8A4XQkrECWMBMQLIlQ2CPkT4EGwAnrFXj7BOEBi9%2F4ld7QYOvp8kaIBq7n%2BlezMXo2CHzRhiZiijlS87aVjVFUOPFUG%2Fcpm%2Fcy8lYaeyQgumhzZKuF7WOj8jFOtEWBkUZlMf4t3AMtViKvFP%2FoRZsuGdBKdSZu2c5pv3cWwgfBtpAa8mcTvTot6Lz1GJqe3jazQ4BTvD3Tt4gPM7cirj%2FHo%2FPB4610SXJboWuyL%2BhWMxbRXRrWVD7CSvagdDseAIzPIDpzwFqnk2meMJDJy8kGOqUBwfkqvHMSouLoJ4imJ5Ycm9RoCBmoSyvgv%2BRfKh%2BolG0FSunq7z18sxezJCI2c29YT7a07k7x84XhU2SfdagP3CQ7oIVUujBbFEgXR%2Fu3OuHK7b2HHMSYA7ZcLNxrWaXtoRawpSd3jLKcCkYoGBlfpXMprX%2FZeHA2IhV5tfc3xuyNJG%2B%2F7PsjkK%2FqgzsprrA%2BiAJoEFGtAQcGXmwGic0gnCMRW64f&X-Amz-Signature=93b6167fb425ef450e300ef77d067d0d3a0cb9f7b3b2808ef3329ebf963d9557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

