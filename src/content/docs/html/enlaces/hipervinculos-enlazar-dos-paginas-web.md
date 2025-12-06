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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535OLHOE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVNCwJz363WSu%2FVeX45LQp6BOPRbY5UwUaDt0mdW5AsAIhAO43rYGy%2BJSQTGidwvyMRKIDP6VMWT5L4YPRn5aONnHLKv8DCHoQABoMNjM3NDIzMTgzODA1IgxxlXI2ftIb7Zta%2F4gq3AOZvnsViq5xpw9iiPhkgC14ksFwosozzp0tVG%2F%2FtlnSrrsZZfmdtDuAktHi9ECohb9AngF4BvVViKckRy6kKkf86SdrJr2q%2FRyjqB5Ff6cc0rtpncoqpwtmZXwjoea3Bw9sb0I10XdsjpBqicNOBd1QL47%2BNGlvpWDlu%2FhS0KrSRhc44eXx%2Fj7HJxm27BoYU3Lp%2Bwp9UixbD6WoKJpryzRxgwZ8Thk%2BZGP8D5f74UzvrhW9vGHnG8jEOEYtaVqNoye0RyuY%2FPF2p22J%2FT%2BES7DVjnHbHBKO13v91xHZDvOJJoio3qMdduD%2F362Pt9mVS%2FD3ZWDYTdis5IqDm3sweCtIyy7XboxS5yxZvjBqM0Vq%2F4a5Rw2o01U7m%2FbtbJmZ00Fg0xxiHhnRPmrAcQ6HgiFkRlikIxYpRqW83F6cBcVZfCgwjjZJbegCR0Ey1o7pxBfzr%2FzZof%2BtfF4Vq4KIWNvonz%2F3qxd%2FbvLQ34ZtVAB9%2B8lrLjJYlpbKK4D4KQKzsWzpyPEJD1nK7n%2BlKi87nBe8OseWdVNXHzfowGb1pHWK9b2V6nl14vF1hK57KDz8S3CX%2BBF3aTEQAZj4zEKSAhxpximu2wdKh10aHP5WuMrYd5fj4VLr91LV9AYGPTCTzNHJBjqkAQR7eCCRjwmLScUJn%2FDQliaH6egANSa4XyUa4rFiDtEUVEAhXLymZ8z0oCEFwnyUJFenqqBTBLwIgsPQ8E4ECjJw3PIrKfxd3Wi8WcV7jucU2oSRkD85FH7WNmxoeQh%2FTGLNYoOtRfR1J8U1gi%2BwqlVtXxcS1P87ru%2Bng3BvVdBhDHVuLWYOjrLe6%2F7iw%2BR%2FZ98K5AZ6Rmzuit8UBVeApumMOavS&X-Amz-Signature=9b8ffe1b4516e2099b8e8fd3240f23a8a4c3aad52b5bda95fdcd0f6df4f9026a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

