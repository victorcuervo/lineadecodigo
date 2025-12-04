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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2323ZOJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDUr2t6PeNHSs6nBi0GvS4IrniVpv3ik4ZUDUbBu6djVQIhAP3%2Bw4knpS3lWYXZQq0Bcd1OSjV4pBWOYNCE7tpiV1d5Kv8DCD0QABoMNjM3NDIzMTgzODA1IgxGVDfGcIjyueXRw%2Bkq3ANmH8JYmmoxOq8af2JgT%2FKbwls5Mi1ulXfiwVGz5LRqt4XQG8BIwQJ7CXZadup2NyKGm2OTBTqCVuVlUsIARQVJNTArR2HUCb6R%2FelcQ9L6%2FcH8nl8e0ZTTK3bYH%2Bh%2BSN6syvTj%2FsPhaeVp7rmQvrl5kf0kLpsHxTjLrmrppzD7xAdNhq66kDgZ9lEpvuDnLSjGNx3ZLDWZYUqdMUZkCi9oUTCbl8lkj52QYH58QUhD4%2B8L3E8d%2F37k6KavypPB2P5IK%2FI1E94mgnax8y%2FqcPReqKjSXtumm%2BX%2BU1XE87qQJUwl%2B9a17RZKn1B4kp%2BqB%2BGG7mQiCLoBigbeBf9UdEGSzuFzbmDj%2FwL6taHikw8Es6cmCF8ZTBxO27Z3Bsj50KgWaiWKBocKdR%2BBnuE%2BM%2BAhmphKqq8eMdAa3I0CmkZ4uKH%2FXkbij01XZVDtJOHFb%2Brch1N2qHRpLSJUI6ps98csNO5o%2FSwnyQKwS%2BsTdxdUczmuWD7EjeRZ4Ir3uhx6L9VfDU4FqkIUIFIQYUIlbONt2Nd1QkNxQmtL50qgKWq9w5O%2Fa5u0gdTOZXhMq3VYcHHZ87cEW5Jf2I%2FMIVRLUIfUup6GfEvCXPZgYKfHI%2BEjTxe3cNtEeLXw%2BCNtAjCMkMTJBjqkAXriiqEEwsS%2BW5o5ezPOHwbpBnS2OjBzt2s7BW4x9Q37FfJwlqCM3VLaGVaNiqFMGYQEOUD9xrqVqUbVz7FrQS4mQlZfqX2b4KSKqYLQ1TpCp0IAdZwPApQ9dTRSFVpLQY5HHhCl%2Bzz3WGp2nDi%2BJ3Fo6BSIpLTUz73EbXgfHbQevBqhHAJbAWFBlU5E3wiVX2xpARJJkaSToYLrlgIHQLBYgAne&X-Amz-Signature=4e6bb6801b181cbfe02fc0e8918150f4b9a1768396c19de52829e616d282807f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

