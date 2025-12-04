---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4RTTHSY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDcS%2BFeaZdvY%2F7xnaOUkUXGLg9bXA0jFkcX%2BuTU8RsxZAiBwCOizPQJgk%2FO9qMm5h8IDuNFWuBLXR7UaHtHEjGhLQir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQp7i6cJgAZqK%2BQCHKtwDU5ycU8JWNqX8UAKG5a6hJ5D8OfvnsClg7y7t%2BxeuxOJVBfM4POXbUpB0yMJTdr7aF8lA1JpAOxODoz8zpD%2F1jCBop2tcchtK6dTTGop%2F43HDz9wz0Cf8LeSqrCTm4%2FjE9jEYau6Dwz0huKKUr3Dtip1HTrTAAYgcckIOkA9S7RtLiCEHjit4xgGKsHc05KWbW2UlLXScAm3%2BmVd1blB6qRZQUctXvSVPu7HqeR%2FEnmlWr2oQq6ckL7NsH3Z7ODQH6T0shHr9Jx0WpcZHvvGRZQs5fKqT4kYc%2Bd9uI8p6xyjkHgAYlF54jBuSPMsF86FGtDz8Cogobix54vJ8UmuFibR4dfnILAE659UBFhNnyTmZ9Os4q6%2FVgWUJ1glYn0rtkaGQ%2FhtaLalm0UMZ5btocZqSCEA7i%2Fj2kLF4Z7hmm2QWm9C48YhdF1IH48%2F%2BQj3r%2BoNKtJCDIkamtU%2B6rz0YmNylCST8qQ%2FNmgwQx6j%2BdWMrSAWoiFK54rrpltwFQXN4SY7ufejaM5xBDJAb%2BaWwuMP6NYw%2FOq78BB5hXHDkX0TtNSTRiAQAFW%2FBcPMywXDhPno39uS4aR46sQt6auje%2BDwFpxD2o8SGwcR8TFCevXdfQvhj3uv9%2Fi7Uw%2BEwnsvEyQY6pgH4bj%2FqhqVbWe50GyRnb7U9JD6njJIW3p8NadbKWR15h%2BZef95bRSYv9iuoq%2BntlchPHT0Lnk4dpd16n0FYCF3g2JFZKw73OlvELoDvlWcPfRCsfbmgv5ENd%2B5%2BRApL3f1zrKA0MfVkj8SdMMSQQQPzl4bIabB2kALaqfoC%2FSIBk0IzRya18g6xtVY2sKFacTSk7g%2B5OMELC7DfOWGHGnMsJXfvJHJZ&X-Amz-Signature=7c256ce3d16fd9e8b332476e8ab9f1f1522bb960553d21990025e8ef2eb108fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

