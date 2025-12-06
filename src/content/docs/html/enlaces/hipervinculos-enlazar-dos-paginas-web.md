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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654PK2DHM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdOOSaJRahaihTCdQJXLwMbQs8Vxz%2FdV63zs1BYOMlYAiABNVACczyF8Vfc0zi6r8%2BN%2BAEdETkKSdazucFLhIS02yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMeQIPbNWmsiDuEd8KKtwDa%2F0nJpmbFjcOtxb0mH5YVinM8T18OZ2dG%2BhsYE4qAMiF7UJH4%2BiE7%2Fkw3V4yWwsNeRXmfkX5ztHyo79Qa0pJmW6L61QVVKnydH%2BYluvXOW1kAm2kaw10MDJkEpSxfyjbtYKaW68%2BuF9Ugw0YC6MUNSaz0pHMTOMkjU%2FwQDUjWLg%2F8afaHPc1p6hpJn89B1P6dke1ydHlIa9mn0k3edTBWltae7GWAl5Ebm1yT026l6xMqwrUhV8CF2iA1BCC0ftAi8gc%2FOBasc6u6OvHXPQXrE1FqfSOaoxAVMMCp1Y0d8HPXOt8P8azh2mRVUY6TFA4RIwAaKX0x%2Fp3RRl6FcrKTYbl0WM06LuUCGDWXSZxSB8yFPcGwf8yo%2Fr1TOeCiBtHlDvgC%2BMKRmQ%2BNL9F1Z9C11z3KFMl6CJGahCnfoKEzpks%2BtaDR0xgnHc8OwHAVna9iUZ74pMaFrGdKWJQztDMxzcS925Y54tJSDHfM%2F0Hh%2FaEGyGtcBgeLe4fv%2BunGwJjbgMeQSjVdX%2F%2BvRAdOP1HZxkqTx0kYiyfVJbAycoHMGc5pZBd36%2FloKt3eTgfELc1Qd9Qpyt4fcYMD1iOOTRjcZqT7x25y3Vk0e6s8enxZ%2FejIVhYqaDPTP8Iwycw8J7PyQY6pgG3IPMKRqD8EqRm%2FDNPPSMDR38lISx5cq8MYNS7MARSN4LIyzI1PwfNY9akH3WYCD%2B9C6IPAB%2BxsFsA1%2BpV37jw4wv6Kg0gPIGV9oeWQVakGagv4qVtjvS7mzU%2FS335fgqnyloieQtOOskW7Wot7yYi6u5ds%2FiHVeteuIfAoKZlwjwvCtz5EmTSZ1RdDNy%2BWYoj8ksmtnouAjnAFb4iFECdfnBsxH%2Bv&X-Amz-Signature=76ca4e89fece504b6916869e0e739c81ed230cce841d15d3c24428ce7a71cc9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

