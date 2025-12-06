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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN66UF57%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClYLN2PJoMKV%2B5nlyNu7h56srZRmLnjtMSZyiRYcLzrQIhAMCqk94DzlsE6sGyGfkYg8AC9uAkAtN1Xvv9rEdWwZ4LKv8DCHEQABoMNjM3NDIzMTgzODA1IgzoSZ2uXo6HAQGwrZQq3AMbuBfJfNxYSiUXu4lAyF0WZjbq9OD1ohUfPimaVXfNVJFa3VPDOY76DE5FiZc1vJ42lNeWWzbA4E%2BBCoU76XSsC720H9LrZeQaK14zg8gQWN3%2F1hhS6Q0Yz4bqZM2xRMzSTz3KRTyv1V%2FCYVXlFJ4IWtJ%2Fz4WopWOrMJalqafcWIX1t4CZNwka1j8Pv4LJ3kItjnt95bOPeu3FLAMmRNVyrxgtSvRm5t6mszkn4AdtwwGbZePCkBu6yEPVUPk6rXtpFZ6A%2BfRE%2FI6YONzxxVpHtUO6MWJ5P3HIX65Fl2FCVKRGM4CKHl7aL0cYXlLzhsb%2FTrGBeFj%2B%2F%2FQwc1I%2Bvm110kA2MLvxngrSy%2BQSeKwDqAMoX7piwp464d6WemQ57SUpmGP90aP2jY9GXlpdZQYu3qw3rxNpdDQ5KxuoRHrJVSp7ADyU8KYFcTsr9iw8z9Tx94yk5%2FIR2M0yLfkL4edmVftl0GPrhySothfEDevesMA9hiH9FNWiJtjNO2%2BVCPJyWfs9RILNI5F9X9QLxTAsvD1awiBGzYNTqxzS1FbXMTzlob%2Ba2kYPFBprDz6nePE6zKdylMTDFHTG7H0U574wfJQfQQV2pluskThcTqjkwgqyNlRIEfJKPdg2AjD7vM%2FJBjqkAZi4XYb%2BzREtJyrCQzs9T2C%2FwrpR1tktSPtQbQXXyCTRqNnZl8d%2Fbi1Z8AuTKxXhlp4vi1elS5lpELe5gccHs91AV1BkqVCO5BzkUrLYGkUcPIN3KRbe6TjpXdL2BWzjrv4tLNi60Wg68iGNbtuoBajLP5QQ5W3fL4YQQxZzw1QnMYCXIhozWxRPo%2BCnWFLpzkLVgKALwW0%2FTKngwfp6pF%2FhL3xS&X-Amz-Signature=64000e59c64e62f6ab2538b53448c2c39c2828f97747c2a71027ebc82fa78920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

