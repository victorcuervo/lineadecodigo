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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2FFLMG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T190051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3i9MGApnAxR%2FFV4o0DzGKk%2BztanW8ZqgaSs69zG7w2gIgBC1yt0NYIuhVpKX%2F7CHxQOlLAyc74uD7h%2F34%2FWEBvSoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWirm3THM1%2FeoQEnyrcA9UJMOLyMZwsdazRfQxZ7i3rVd7PgWmvXPq0WdFr8ywVWLXbrB6VPdrnOA71zlBcpYrMkYPzyUdCgpRhgGlgyeo9HpAadZE4T6xNWwXgUV5PYtLbNT879cvwIFR2X1oS2pJywA%2FSkK%2B8r5vNtj2SsbMoXZ5L%2B9M6yFTCsRO45YBOAr8OLF%2Fhpog35RYZdZ8wuZ2gZepERZd3v5l5ceUsI3PiIK0bvikf7ReH0QAEBYYxHpn0Zz4e47QzyKlQUjWrmJVhlFc2ACFu2tsefGZ2V3%2Ff%2F0713%2FXyXvh4096FvHWkjYrnHfcFMHoQ6GlXJrOckQl85epSrBBvBTi1v9JJl6RXy0y30ZBnovgP0c2DhmOxrZ4xwHBl2SfUgM7W63Iwi64CnROoxCqjlaCCf0%2B86mXlfH3c1dZ9ORAZ5G605a6hNprfHpbqq2MTPeBMWWk%2FndhWicePtJR8PyfhnCg1IFyVjIoodQpqLCS%2FKoEKrtgI3DET%2FzIxBOX6csmLk%2Bx7eLiFv8HheBuKx8ahFSwptsctE3pL%2FOiqTEZthYN9rtqAiS%2BIAXMQgeaUOWDOOHp8Ty8HtlgkdlojD%2B0Bpt3OBHYefRnmaqwpUMM%2BusOWAIfv886mRpFYuhnY6I%2FYMLjf4ckGOqUBJf%2BYu0qprF1%2FFOwYQJrex9eOJ9to4gPTrVRA5tejdf1KRMzm3%2FbCrbg3TFu9Qv%2B%2Bbv24%2FWqVb2%2BgEvqX8DAPdU4sXXFNSdAkfkEFGsM0qRErhxYnq%2Bqnjy0efUUscIMvIRTUBY4qpVmZsNbXBblz6zcUHy2NrysJtVogIirydM%2BCgkaqzbt0lR6NM0Bb2le2UMvefvO2dojoPsMD2FkLIIopsbJl&X-Amz-Signature=d45747540a3a2f096e8c21d0fcf524cbb98e6254cde470c44b5c71502e71f218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

