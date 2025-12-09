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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCBJ47QR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T201259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9OnoHsaV1K4T5sN5la2%2BvWz4jTZqG8TVfz%2FJcLJk6iQIhAJ95z2jKdEK7w0SGb7ZlDSDqhTPZI0jaW94pqQqCWRgAKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BgsNnfvyR3IxtDR8q3AOkhVweQCdOhnVNduYuDYj9F4m1xfxLctx8UZha%2B0eQpvq564EbDu%2B2hAiH7vQycPfTvI6bBFeXi1dFQ8Kr6T%2FSRkWZvhkxJRJDXwnnPbFM3%2F5l7CnA56ERCbNu8i%2F3wJGcZav1XsPY8R1KWN2spT9RG57eZ4vBWuEdXCoEd827rNhsl4tyx5xilKKH7M0jLYvZJ8zz0dCURVc%2F4gHzOXRMm0%2B9SIEVGZKlQpTS%2FeIaOutFeLPJdmbgYofljHVvYejQf10V0%2BfCrk2%2BbHLlSE6YDor4J724DbVr3y%2BISymPgChyDJnSUNHKtg%2FwS90mBZ8NReKF3WJrY7v9ReUCqFn4%2F1Y2188eEpOBTmMUYz4gKwZFBhbYnBHsfHQMl4MItvqCRGe7h%2FSsljJUDV7ww5Pjx4goIqb%2F3nVI8gfiVfPTmZ5u1HAzJh66AINZNRIXpjrJyAVL5J%2Bbz0bP0wlFujl%2B3KOb3XlHXV%2FxU8nawc7Axr4Gz2f2jh666LT7h0NjbpGVlJ1G13GcpvDj9%2FKDWOCTMh%2FaIvJ8soOJftkxbwzwa%2FEk0XeA%2FCPg9GicA3EKg3NsFzzkAa7I96SIOiT0pdi3rHMVL9Sa2YdNb2%2BbVuLvFo2XwhWw4EqdV3FMWzCR%2F%2BHJBjqkAYwU6n8YtQwnxwdZbBd6HQwwpVNV4k7jXaGmkPTCTF8xg74NOckJdnoT4MVJqUrN78PHpWSZwJPaBRcd8wJr8%2BL2XqawL3khwxAF0O5BBptbtcGAR71msmPT3YG7SSFO7rPjt1QIMl84xpTZ81lrRF6QdCdzY3pp9t9EyoNZrjW5jifLHx%2FoagIweYE%2BcKbhYZGffxGYduUQajXZ3Z4w9ziAhcWG&X-Amz-Signature=037fcd7a688256493e79054eedfe8c52da0532024f7e137e07f0f03caa5bde1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

