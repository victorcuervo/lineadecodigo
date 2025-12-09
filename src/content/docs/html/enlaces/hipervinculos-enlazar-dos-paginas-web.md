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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GYCEEN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRbfDV6cb45Jtbd3gNX856Xk1GGb9P%2FR8A0t32gw3vbAiAYcgRDP0T%2F5lF59EADIP0XtrTdKXVFaMtPCmngxeNmWiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpJDWyVsogeJP0CmQKtwDEM6xF5%2FrXSXx1Zd4mi7fHelZitSNu0l%2FJ6MLtlL9wgTXlrdn0PYviXG7swyLTsuuA7FNiQYSzGXP4aH6bf4hAwMFbUrSQOAMF5J%2BK5Vecn4DJJavRL%2FNim7R9m03HhzWvFxWDw5xbk6crdXlL5VU8DFSfVy7SLvuqk5YI7Q8h4ZMGXENTJ5gmHL5gKlC8n6lurPNoNs9foupH1Xjz5ATWnu%2FcI6tRWYLmNd0eE6mh3Jxx4DdxPec1Ffeh9sBbHTUbm64yzNBYp3Few9ePU6QkHoslZI4W3ZavNaomewOorr9s2Uhki0Hg3a5CQJzaiPpj4xuOFY6%2Bbr4%2FMYxyA21APgI8z1ZESPwI3wwSR6uw1%2B4qf5ZlfpKugGnFTlA9JHfdQo3oNdqauNdMhTunXzhaMiD6zl%2F%2BBjg17f2thbgL8hgIh8aMtAXXGaSSvHXVEbZCpAkEUvDmsPfpkLOq2DFOd6wwTEWxLaIiVxnIZd3gGWEsGEaQ8kDtoNwMFHvZ7%2Bx61bEVQVlnLlXLLDkn6TyfXh5%2FtPK5AvsyVGcIBBHGvOcCDswBpdkrHOqLXtMksUjLI6IDzuYLkBHgz1RjK6pPRn1qYac6QV0mFfn%2FxAk2KYy5ehEe8615XYp1qow8K3eyQY6pgHtpVudjJRY9BVI6XeBUTIWaDAsNQ4kg4RLdDJZ3ufnUGbFeIRi5EFYbiV%2BfMoDZLgqCKwI1hKWwELcgqKlAwa9Bi4c07grpQsHnSvaizudGBVi1YERY8v8QfliNW5s%2FReguDGq7iD8TKOJ1SGIPzZaJUxt5fEWw1%2F%2FdKAlIh%2Fjje6NeA88hcIrIufI%2BWRijQXSXtKvLe%2BfnckA34vrjH%2BeR2%2BXnpcK&X-Amz-Signature=1654b01dac542753ecabf0a6609f1564c035f0278d0de11c6d5dbc858fdf1eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

