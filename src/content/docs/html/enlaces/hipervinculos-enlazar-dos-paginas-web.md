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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD4KVKAT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUKhH6O%2FCPrGP0pM5xiHGIGAkl3FMmmXqA2CIY%2FvxJ8AiEA7RWH0WCkFXcg4THhdahevvCGB3UpgaTUU%2FITMkMtypIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKguTaaL57oi3tiYDCrcA95ht93Iopsqcfy%2BJcI2Zq69LAHGJ4HGNKJQHN9fJN2q1wKniIJPGoApWIl%2Bf%2FheQSU68RplDf3qTkqKsA30DtWZWhDjfP2hYdxHKAg%2FQhejVSQadxJdtfj93U4C8U8JofiIXJ0%2FWNnldlqd8a%2FibWaiqNewb88ozgB5yl7XTyk2soIYpnoagzNXmgIihEMNVm6rJ7Dk4XkioLGaGMoLXZDGO1MMbPSCBFqZuUythjLFb%2FPFH47BxP%2BQYV8OLUuA%2Fwo%2FkN8A4v%2FZCszy4w%2BJ7wRjSUDCS9kedTc4pTBxRWe7U6hzwqBifZ4R4D0qw7WHYjFhWatWqI2h5WRa2moJrtDbfGppwqvEKKRv2zU54Th6t1tKRkSjXLm0hdFprwKPBmrEwd8TIKXUdPKn%2BhQ5pC2c5AeDHe%2F0Q%2BWnXh0HHP8mtOaayG2UgN5TUxU8UbE5A6MGA7y7s%2F3I9gYyDSERXekjRX9TZS9kDaxMpBcf92aoUiwXGxx3fX2RiIasP7Ym9Z2hzrtDBcqpuchv%2F5kco0CmyWB2xaWjTg5bcQ57EKqD2yu9r0hrtTTcq%2FjRXWz5J3f%2BPujzqCJ%2FTcdE2%2FJf18BOVWRvhhO5zG95aN6jle%2FAteVd4qAw8N3MlqwvMMul38kGOqUBha1jPa5tPFkvTMERXuXfcCA1%2BDXJ7bvvmgt06jH01lPKsACvbXsAoRFORifRJ1n%2BuOrba6K201aFR4HLjlMW9B2oB1grkJdYrRaFpxTWK3AAzV4sHjNIyTMuiABFnmcX6LDdhlxcB%2BZCjerv%2B5kSQgfPJp%2FG5w%2FEuh97wb7CJ6M43Y6EgrGtcabW%2FellzBoYd2dAqKtxpNgVP%2FNHQMKmLEqmZ8JE&X-Amz-Signature=71a33ed95cf3dab8c91a9103c8a293a4f3cc30da4d8237b05904730f871e1c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

