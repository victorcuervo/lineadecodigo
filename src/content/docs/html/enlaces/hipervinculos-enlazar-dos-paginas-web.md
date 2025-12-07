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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHWOISW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaej4surRZsPe9KSNHbulbpToYj7vjkopc1XvTezd6fAIhALpElEttrtRRQzuYpSLKgZAsu1rQ6AyXbdBtaWEiQFQmKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4HTSeQ%2FAdRImuF6cq3AOVBznel86rvylGyXZO1Puswdjwc6Ad5bVIjztRb9UKJ71HtVc46hz5oNOk7BI5EQ6R8MkCsqf2am2jxxcwwezroOepsNda9uDySpKBzV4RxEVHnIfbPrV4pZwGCChgjMIIHD64EyQKKUhsb%2FszzV5%2FcVpD4j0KpUZeCYq1b%2B6bJrgDLvO%2FwYd8ntdmPwPXweey0lNNKicpp%2BO%2BfoZzHHfbCpCwHswntL3JDEhTZoQRUVd460piTUrBA1M2beQpViFySuXFxff%2BWS87M2chCtkpx%2BCOVLbk6jfPuMVXk6Hu2LVsE148T%2Fk8wRK1u%2B0vpXDFz1d9bx%2BGjivv2Qd47Ft%2FjyWRsdZiSxABdUSI0dWXRpwNp4Sp2h1ioPf0tnRQC%2B1H%2FZcOqr5UGPAZWud0qFtHV1V8Zjrp2HiBNRf%2FbxInZTTA6Er0HLKgpJCEq65%2FbwcN3SnRZPBRuE8MdHVjI2z2iewnFYDQbH4YbzYDa5zBwZ1qhuTuQop6TAdgCVMf5B2LLzCcEGjm0ZHHQNe%2B4B7Sm%2B7w3NUp4CsYL%2B1TWeIOTcLYT0s%2FyY1ZAtr%2BiU%2BAK44mWDsE%2F4Kv5ZfE6mZJfghQYCYVqmbbwBx1kPDixh6V8QusjOkkWgiqS94BKzCsmdXJBjqkAUdCrNhPWU1NSuPr4tU3VE9tKjGtcEjekMOHwNHDAKr%2BRdWAAArqGtqSTo9g0xvDRTtn6L1RaO4UfmieNSZwZI%2BJRN87p92hxKRqxUzXtRp5WGU%2B%2F4R6uo3OSBijuqJ%2FNDq7agI61nVT5mS2sKHasmXFjdGbFM5W9jUrIpGKjdETfFO5Et9kwjqS%2FqQxI2JBr%2BMb2BCKVvf1AkUhoCQEt85VhoPp&X-Amz-Signature=2b0c27c1f44d577764b0fd950795eb2192c2c53bfa722f866379bbc793c9416b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

