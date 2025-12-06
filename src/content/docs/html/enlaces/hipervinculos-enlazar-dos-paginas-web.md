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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YXGCGPL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLqz1WeOTs3NPJZlqTQuNCG4yrvDOfrocbSMC7kDIyEQIhANjk%2F0xLZC06wXS%2FgUPAkQ5IGHmob%2BuaD6p5vIwQGrVcKv8DCHoQABoMNjM3NDIzMTgzODA1IgxmuZux0L%2F2KaPLWLcq3AMMMgndEvBy5gJuKHzYIMGmc3QOO7UTEsY7SJbBvOSHgNsshPiIyoCeZHknWC0eiytAbzH7nAvsQFZ93QIPDJMKUiKfTPSQ3ZTxHzr7kOO2LaUj5QrPIoGJUwQCYxeiL9YyFuVvJISRIiBBdu6HEE1o8JtUpmV02TxyUatakv3hIAgzKt4agdhbOrAEQdaM5VKbWSchoVxIEMBjy3iVLmjmaejYRj6n0m2KD%2FQK1WSWX7OnPaPHb5vlLhVvQvVRaE%2BAo669qbBV1pJVbBYkFm7fjYmB4BMtmNB%2FJiLX0TNKUQWjUc%2BCx4ui8Tola%2FWVNGVe9rL3yfZ6yUL2hodgGUWkajsUV72oZzFZlt55mdCgTwvKamIc51wbqZeQpz7XOI5FUD%2BpspAoLVDTw2YrDiM%2Bx7ZXzRCWHV6Utz%2FnZK41ZsXyJG3UpMrol78ECpBLlxdSg0pfAuW1bokPVX3D%2FY8pC5Cz9u3bVtOCl98IlPDHZBJ6jVFWrUQVmaeB0x3NhY65Qai5pkATr80NU3GpPAZ6aJxReSYI8GTdZwUUF4ksDlGL6hGfvR4Hx0%2FLlPEeyEZxiq73uF%2F4y0i3voFHKylTKqn0rvmJqPQgYljefJjVGsoYK5DtXnM3raA4ZzDTxtHJBjqkAWVaXEANXV2U1x4n6f4NMbGWp%2BLdb3irtcvQDQWcJnC1IxoCsMuvJU2Dv9bSiaksuCyCza%2FhY1YJK2Bvmyo8SIDy2NJF5Urysofrm4HstuzgWCYDUbXGwYtzm43amFZ3fbs%2BieZaqrDec8C4AwBUtMfLy%2FH6IKEFeKhWmAhMdKmAQ%2F65zpmqX5M5IMUxC4rpWAP1sQOP80Npq0iHr6ckz6QIpzHU&X-Amz-Signature=5703b7bcaf4ac8eabd319258b70ce24be67c1d549fe5103e5e02d6b1586669da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

