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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRIWHBJW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtNa3u%2BMyWDTVkwYcuxRF95bICU05Q1bmYvK0t7c3R2AiBravbRpqxt2PJVt9KvtTENAJSmJKFP5m1HrlXB4AEt2Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMtKipbp3dLwlSN%2B8mKtwD5zPK19dPK3lxssUZlbi4SKMKjtZnjvV5K6fatLnqwrxmYUWOVj7eCzMXlo5kOWzfoQW8kYEBuSPWBm76%2FeZIKoylWE4N6IE3izSoHHkrwGc35E9xw0yZdlz8PijiEY%2BKEWXeJlnv6283ywvFpKI%2FfA%2B5D6DMtsFhTEnoo5o3f5xDviqo4lYhOlwpRyUtQBuoy5bhHsm%2Bk4NTZzNoMqLYLjLyVuf%2FCikkDa6nryYcJTYp30gnUOci5vA48IbNNRb%2B7E2jJSqYGf1nhX2sv%2BFyqDSiTBFmZtoTTzunYgRDYihRo8HnLMdvAttbLcDmNxkJaq22f2PaqDcgwHvFSnzkTLCVMbNh6oIzbdcQuS6eucG%2B55VQrzhjmpOmef%2BiEZkK2lAmDuonJvfX1fMpAnkoMngZ3b2ceCTs4YC5Ru0mLyapkYptA9zziWovp6ir9K4C2mCcWIafx28fLhuDKWEFToQJeYdUvALEiSDTIueFEFepi41bj4O0BX%2B431B3y7HUwF7TYakalzY7cNJCQ9LxuJRro49j%2Bk%2Bd85yWhA0sjmNrAVAhAyxMKP1%2BZYvMbWg1OrdIdUNZGMgSJj3FpBgVxNq0w%2FF4FREU3JWp0jsRiIfEOtFNmEUbk9vr5ZAwzqbQyQY6pgGA185NPhCdMZNuAZTH71CoYwh1anSCgE88jEYcTbpUc0KkFQY8QB3d9Ba8Qlsigoh%2B8LvIjrtpqAvcYVxsWGEHHE0Wp%2F1%2BVn3MnuHSYS2P2H2qmblURuO6f3C5ARm6g4bnbpuwkCESx70GMV%2BDo2ZJ%2BjeIPsfL2dOyMPig0VnsZxo3oy%2FoRAJYhTMshM%2BRjVeVNFeOafVo2Tn6r8jqw137tt0Zvx4k&X-Amz-Signature=3a1976fbd52150980fd067972c4a77f25bcdf2e19d90fe490e3a8ff76086d44a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

