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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEP3OORF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa2JzZ0BoElp7kpBxaYf2OHvZlNjf%2Fv0F%2BUydp5RMevgIhAOu%2BmhbsiT%2B2upqeWD%2FYZ4DLSeQZXvVQYYyRag6lYI2iKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYjr%2FHnLDSanbAV%2Boq3ANytGLCA7TdgnN8XivsVONaZb7eDJwTd%2Bb2CptnDBuit%2FOOwWxoeonrXM4JBsvMqmGRNJ3j6n0ptW2ofq%2FKP3mwhOUZTwcKcYxHUePw0UYNMeUV3ZBjyMYYniLQt9SYRMA56v4M75Roq9I%2BHAVjHSJD7sxYmIk43MYY8JklfJIaac%2FRlV9306aMOEWjr3mXlyICwCsvqgCjaHHi35nHeatF55zkOnLQrAHZFTsaeiLu3KFyMsvEOd0Sf2o6jVvthKeKTWjvfwnndiMS7ZY3Uh5LjJcBUCBWl9k8BLzh1FMEGSJzSnpI1fwBwxBtsBolAGjHC32EdQx%2BgQh5EWtNfB0NLnJaxR8DTYmSsQt%2BlYvLxq%2BFCJUjgF4RQd8BtfAjPGi4z6rifexsj8Fs%2FNP13ENKVX16YYCTTWDOItJ8nViL2OcodocLrKHzFWhLmFMIymLPLPjeBUSLuBn8arCc7b7OEyZ7rJIC1h3ZYLqpqmKV79V8kBtRjHldKJhywa%2B%2FJlWHA%2F76N6yXWVCJWhNGQ3tjYwx4RCNgMf6ZJDXC7s33Fxwkc5ZWkm0VtVPnkBhDyP1dwd%2BQR5daVGs33GQXvBe%2FoUltAkeggh3tC0FXEYthyRGBYhsKXEixho3n0jCvxt%2FJBjqkAeUwhp0kiImuRlyoO5YwYwS8yyFuBaga%2BgRuooELTayK%2BHr5dq%2B1fIm%2B6GcKiBQxSGuBnqQ%2B0ZZs7khtTuOUCpwCgAORvljUTWq8T5gaoQrJsbPRP%2FjQ2ST8aESGpHtEzx0xb5jcTR617fubsIeOlww1eSXTtMHxslwx2U1l2xB%2FujAXqDnBgBAyIuXHD8lJnziY1Q%2B%2BQsNxwvNSu8q8dOQ%2ByyIB&X-Amz-Signature=35a6eb973bfd0231e03af4b08f2ce9c63f45f3a63d14643c0a6464ecd066b0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

