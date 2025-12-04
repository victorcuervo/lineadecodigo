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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WHWEW7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdliMQF%2Bf0f3vsl%2BLryBsvQ83UFcmwt6ajxgS9b6Ft7gIgdTCSXZfmLBkW2wyvv2rB2wTKZMDBJ0RriYb1gk05SuUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBiIovIJRzP4iT9hYSrcA15kdDWAXFpD1OSZG9wtYnWV8pSlx3DPek1Zb1Z6sMidQCPCDBDmPvomCMsDUdfPMC2EwWmEgKKvV4n4sN6d4wPL4DX5Idkygdd1hv9c0oc9JcWxcgKB8EjY8kUKoe4R3Zl24Ahwzhj%2F18LGx3KSVp2UUgQ1ddr3cAyetnj%2FegxY7ppNkZRlHQWb%2BhsaKYjTM8R%2FPrQioxX2P%2BSapLOZXligL8FHS2r8vJ40k0UDATlA4lbmJXaf26vmovisnoWfe%2BvEf7XcG87azdrmsciahijZDn8OE3SjJ2Cpp7616ctY0%2Fhi8mPwjTnRQZST%2B8Ks4UjxFTHN2DEV7j3u1A350qG7xZqpz4BbuqADAUoKpqIqprf5XS2xH3zoCqRORxtD12fq9IYks6Gnm3paFde5tq4bqXru9hJS0%2FYyeRk5ncbEgkQbbR0tjSKifQRqOHT8S9MO1bAO1pYNcmf%2BaBTpJjU8pSBpeFjpYOVOk9HWNUdCBKhys1rmZY6OJvy6gf%2BNYvQYzoTfWc2PWNQBEhFLx7YTjhEXvquD%2FyPW4aiRKC1pfL49d8J3WTLxTJgrfpxAVqr5Zra%2Fn%2BRcc0Sz26IGmznwTCTrawJK%2F0qFx8hFTm8V%2FqBg5BFGVgxtDETzMOrbxskGOqUBeWMv5nrd9yqN%2BznffSuHTxDFcKM%2BZh%2FP56tWJv%2BEQ54OSmSJsgZGzo8pAOEU46Sbc7oYAREAzo656KkDTeW%2BQqRezhWklci8UrrV67hR7SI9sJGMGKt98Osw%2Fm18Rvjp9zEc6pBKya6axEJrOW0J5LPJJX2zl%2BjgTmqJI0f6YboPY34bPdO37CGS7ZctdNrmDGmvLSX8JtMN7pwiE%2FZ8JulcGfTq&X-Amz-Signature=7436edc365719fcb9b82edebe325160007e543ad712cd8a6d34c5ebd4aea734a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

