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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW2TW4BR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5FTCLAqrYHSi3ewY6TgFseZcy1DyWu50v7ZcQ5zDskgIhAPX17PFV%2Ftb6%2FWI1uyv27RmeanbvIOgbHuiyQ6ewJBsEKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2wglE9p8h%2B3mGuIYq3AO7b6lvKGlOiDVFyuiBBPqzU6IO0010uTK6pv6mS5Ff4NS56JDeRBFuYxQHJ3JJYA6OJEw1VU7p8xYuTsu0YXNn3KK6QkUwoLQGozzlW%2FD9dKl2EGpz6T%2Botv%2BaMPBgc8CFCRy%2FRwDuE6gddpbixsrybXQchP8VvS2nWFA3PzReAjqRsHowowB8wqvNd97iG3Rf0L%2FLIbLf8JINK1N9roofF4QgIpxa5OjpcL1i35GNu08ET1dOf4NIJb7D%2B7Au94nyVzzhyw2aVkViPT%2BE4d0TrQ5R6drVgr6MqfYvRKW18dGpb05V%2BFA9fhxRl1p4qSWYv7zdgJfWOwvY2SDiLJBIGn1v7OwksctQpvxnhFk4qJ9cuZUrPGtn5BAeuaHD8gY7cdhVIg8o1KShyGgGgO%2BM2GcX97Mi3eE6uxHoDBQBzpIGGIsdLMG9CfVvdCBxb21c55jt%2FPOHb9ZpfNsPVj8Y86L7trrQUC3BHIHZtRjrer5Dz6L0EanGR%2FIvdkoUFNrFFREpaO94SSbjeZpjeLo6HCzwJ3%2BGZupzRpwtY%2BCaxxxYM5cIH3lKjJ5hUwSZXQURurbaaV4L4ya%2FFeR5J9i30Nw9JlyaQ2eBNepjReHrm7m2Ic%2FHM%2FYUukWNbzD6odjJBjqkAZQXVEVWhayhq8qvBnECNDoE9O%2BPTdnR72Bhns%2Bi7GJSTCZ%2Fd7PZR9B%2B98QOpO%2FUsJc%2BCWS0LZ4aw4kdkIDzUumZemv7jhL5PymZl6cKXsNVgn3Gc7FzShn53YDhmafwJIAN99ffY52f%2FelNRYJ64eboOVp%2BPqy6E2p9PHdsFfzPniyFj5jV0hR57GfJT8wFxXxAhjkMBzwb23HI2xNGMTTCsKC%2B&X-Amz-Signature=454d132a9402f8a04391f06e372b662c0cb6a0aa34baefdbfd285b2bb02557f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

