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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJGOP4L4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmjMqW2VFmrjQ8FJDkrshfchuRNRr1eSaPM8Q78mbR8gIhAKh90I3bFhZDMGLNVf4kxPQ5mEdq8HtGoGQmcPeRlqZ3Kv8DCFUQABoMNjM3NDIzMTgzODA1IgyxQowPys21eGoIn48q3AOZaaHprRA8LkCxZYEPkZ1Sf%2Ber2r0ahih4H4uZ0j0ODk%2BfcH5wCWAAR6GgUPj7Crd4bPaxakzrLZR5AJdjnnlSoVr5u0mp1e1zsWA12tnEWHPz5pasCyU5XabLu5dY%2F0yIzWDqF5uNIUJWH88OxtvN1OAUYONWd35MsnwiWyLd2uCdpJH18cs26Y9CxbseF8ZEBCL1l0cSYo2q1Z8aeYQ4UlYT8NBVPdKQmXNTgffVxvwf%2BuxxlAyHdKLHn0aqLtyyAVwwTGBL2NegtaYIKJowMh3pNFr8VeG86VtGpBEi54lz9wjm1jUzs4hVZANck%2F6dOXe%2FOvtGH%2BlyjsH06XHtQ9sjkd0D8X8OufRWI4zOE%2BhclNM666SBDbjuvZqXTzhW%2FY7wI2eLTH8iviUysVht6CHGbSv3XxZeMXQa2KhFF4vvFQPjljsL2%2B5jsH0wmI0%2FqYhWv5kM%2B06ltAnDhL5QsLEil%2FltxdsiBcRDlkQmjAf42hOi4NvhXZovnxevHYlKbJ5tURmpp4JMn3BHtHKUKkpOHhlZ%2BTlhZfWN4LXkQfbswYEFCLNlx18eEW7FIBF%2BpWgNW%2FlBSJWixpbxSfEi%2BsvwOt6VIeDGq3AE9v6JWJfxReabHO37ehgA8DC1sMnJBjqkAftG2kkVU770qCzpsSauzZ8T5cRuvtCeEbvBPuxdu7K5%2FavULlMLcZLuZ%2BEt9iK76Ypu1pGHJIT02eU%2FbjzXsN3K5RhM9DSn0K2XENwC0Ya0j%2BOMpmm%2FsnI33LAjTRVx7%2Bfgm9w3cNeHnf0kDfISX%2FoR1kxFt2F4MOCYCEMSToefUY5e4wIrx68pObn8K%2B9PrSNTwWAC6qNjRWbv%2Bl%2BnmYM4nvJr&X-Amz-Signature=b9e218f0566f4283cb85c9f5a872cbe6e46b0e466c3febb0a7df374489955838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

