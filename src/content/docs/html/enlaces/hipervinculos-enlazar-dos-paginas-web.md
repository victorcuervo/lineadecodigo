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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZKDMRP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhlYcKmFi7zU3VxCCTZIw9uiYacjWDrd33KK78p2OYaQIhAMTZ0JASkiuXQlAhnRJssjiwqz1ZFde2KjEnqLuNZgRsKv8DCFUQABoMNjM3NDIzMTgzODA1Igz8tNCrV1qpvrVGha4q3AN6F5R37LnGeNeFuTelYNkdzffp7mfSDY%2FT2U4VqqL8EVc8NyveRan%2F%2Fym8S9rSgrBx1yEevbkAv8tsgzpeRFsBx3gfoyz1m7NHlrrlZo279QABIeLoWZu7yD4PSo7T2%2FnSmi12n%2F2JRQir8UqaFa7pFpmN8xbhZhbq5RZoO0DPDQdZ08j%2FtIjsEWb6T7XCa40UbUCORLG3M%2FcHu02t59CQPQXTV7MFqmbQh5B0JXymtaixcm1%2FJcjuERsnRCJ%2BS%2BVxuzZN%2B%2BpNrY5nJ6kNndx6nveYTOi8M%2FlqeOCXbjjZtqX6%2FWprrJKlpwo0kumkmFC8QR4vk43G4G92U%2BN%2F7yKCvtE4IGP7zNc%2BX4hvwI%2BQsQvDhKiV4SJeTGVPWaM6EnZyZfSKrFRcsA4bV3P%2Fp3VjI7FKTqodL3UrUSkkZ%2B0Xk5eEPFIEPklbaIqN%2F%2FJoJvGstlyZNvvS5eAe322ATo5NpRd9xGXC6L9A%2FdLl2EnCag6w2Br3dkxGWrS%2F34%2BiElw4XW9k0giNVbexLT16tY5xaKGJchCFzKKmN2sV3seYZrCP%2B1HOertWPAZctFXmp5n29njfkvrMG1zcSoBeop%2FRlWs%2B62qd6pCoIFD%2Bfk6BRu9yfdkhLX4O1aEu9zDZqsnJBjqkATeuxbpr%2BSebrUxtSzLNgNgrqzorjHBz2hfuLBuiMwd1C3N1r7p%2Fxojod8qipwH35T%2BPGkqqgseyEGwkvWhDQCq%2BLmKSm8akou%2BfIGvVbKrXNPh4cP7cpaQguQyda3cqrw%2Bdw1j3X9HN7ssRGt06SnXbmL7SgnZRQG3a9ri3K2lfCLgRdVt%2BhrxwOtVyd2iiXtSQzkuPEPLGmR8f1X6c7%2Fs1mWT2&X-Amz-Signature=f7c3c17a1a02ff4c4f3ad195fd636526232801aa2917156ced3ac5ca2113f00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

