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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBU5I43D%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6%2Fy6ad4eMMQC5bPN2RunL5nOTKJ8TLigb7C20UzOPQIgU5EkQrt3smAZgENYI17a7ptD4UuqbPedoLIkHbMjHEAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOu6dcaXW0I2OF3kyrcA%2FAznwkoOAmr1Q5KDt3KoT4obwKeHPsE8Vzd8VZtCa0e2gkdDYtmRZZ4OrbdMqHjvn8Ck89WSiX21t%2FTwZsZxanGQUQi1S%2BgEhThdZJDHnBgqHBsHIIfa0g%2F4wm3%2B2QfuBeAYst7ReSRbh3DLIGdd5aa4dltBdGqtYvTVNYyXtqZjB0JfNV1jlxzTdGude%2FFpG9pdFhgo59GixhkW1sv1viDUcDUzgWdeJmHIdNsaR3k3zmt9E9dz2cd6Bvq7HCWjynRNgL7TmTdkR%2FYTcurYPQUk9Zrx%2BWT%2FaeUwxmCex4hgtnKUXLm7qVvEEU3uEQ0ijeHMnrnRrVZ5xLbS8GkuhYPv42T9h%2F4GBAyeu3HhzpF%2FzEndZIXwGlGgR7RW4Ok11scoiq81%2BzAAQIP7sCj5gnLlZ%2Fr68YElCa8HJ0Uxp0%2FYGu4uzi2M2DtbvI7BasxScYhI7xfF21oM2HXS63d%2F0S4ggN2%2Bk9LG3cCVfr0W74hAjTU8x7qTXm%2BQ1sAxj6%2BuAqYc4ryYD26ktJGNHpqcvXM4L2xltep43ZifVvMMhEQJHzQT4VKcptjAYy4AYVj1UiDo4V1mwjEd3yBGjNBAirnJKxayCzFDCpC3NmO3ojX82FxlSoN9mWMLyWbMPSk38kGOqUBLo%2FhU2dhwrgj5e8dsdT4mcjhYVijRCsWt33V%2B7GpVF5sFGKVaRZsztFiqJXwAyB%2BdACNhDKA34aK4TlPXvceIS3MhuSdQsIX%2BkuzHAMKRa2MQhjJfXzk46H4e0ke5lnFY9SrBoX87JPg9jrZ%2FC%2B8Tf4PyF78RC0xOiwnSBQ8PXrQjFyySZmThOgxVmooEbz%2Fd1qgrMkupl0d8BS4lqbg2dpM5yUg&X-Amz-Signature=f06b0ee832d653a875ae0350eaa5f1ab3323d566aa599ccd0f6999d96c80d5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

