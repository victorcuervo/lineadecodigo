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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPCD4GC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICx%2BUnvMFnOtMGJrDI9DwXYWY88i131S1LKJUJcyH2J9AiALAutqmEVsKlE%2FctP%2ByZLIjQ%2FI7vG2iOBm%2FRifJMvqoCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFpZnK1BFuv6YZkzgKtwDK4JWO4y682lL7P5MsyKPvSLCX7Q6oOLpmP2QBxhSXnHGGeGBdsMNbJwXXv2ac6eTifbzYbctNenkW4yCjBRiv20WaTN9WrPaJjvhoM2MUWbD8%2BZEqyaHHk3r0a8QC%2FS8Al1HQtXukXB5J38uwQCIs%2Fis%2BIhCOvGyAeOdELN6dEfvxwNrhB0R1qL40RKuJnZtS06WEfJ0heHrWJjywCIpXDDXVeDUIIR5JgOX9HO%2FVowf%2BdLzxhQGpSsX4XoGgJEiHdTbtASHvWu0mC%2B64e2nAePeUuhM5v79pT4Y%2BIJTEfTWU6DvC7zSUiYznBN9QJ37r5AcGM5moS8UQu5V%2B5Z6qoMSf4RYszsOFAwWoF9afyGZScv5ATBkD%2B%2FbHqZH9VlPPJVwzh9EZhpE1kf5piUv9jJ%2BESPGZemLbsJTLSe80oO9K7v8MDnInZEMMITxh8pv5V%2BswQz23nEvgPgRLoN2vp7sMWD7NzzfobgjNLWEwsVxpgtST0j6uy5XvlpFYOEQZ6CVJgEUMAixHaKsWTFEq0WxIWvro%2FM2PzJ45nFY4BqPWKNJtenq3AQe9UrAlvgP%2BUEd7hP37ZlhIIcdKt02h3rL2T7hSsmJRlIhqHZgKaeuoka7pBO0ftiNqdQw0bzWyQY6pgF%2BcLMff%2FlUb3zKKSSXdq4Nd%2FdON1UlWV6ILYTt0%2FaB7JiZJl5D90BRBG%2Fwu1YjqCmqJoaIqcjNgw5%2BZIrQbyllWV6HugIXnO8REKJ%2FQH%2FEb4%2FrPkW6fmPGjRpS3QpJkUI42O8HsSNCgQSk7fdJS0Te2sWooVcN51UIuqCMM5M0hMOjYqnfA5lQzFtBKV%2F%2FI67BiQA8F8zvIWtxzXCJQnOzS9xy4wtK&X-Amz-Signature=017316b0b1d6c0608634d804a985970e553f02df59fd61b4dbf589bc4e68aff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

