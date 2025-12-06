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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4JAICV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW%2FoA14GYjkJCUviKMg7HyJedopVgb9mStIOm%2F2vp%2FEwIhAOD43bQoZgSLAACh6zvJWOuwfPXFiQzOnYzlsmwmrSRKKv8DCHoQABoMNjM3NDIzMTgzODA1IgzEa3BLSP%2Fm0l807Ykq3AOsNjl2epwcsYsnM9nsc3XLvwmXunsP3ZIyGDiDDjyQ8MjRGPRFA7YUEFblmvvpObRrV2Arv6HxKvqkodoWSJpmTPdDNIBeeSmLsrnyJUR88FMFjqlI9IdoHdDLVa3iiGgR8Brq6pde%2B%2B%2BMEI7eg2LyodhO0wJ7o8iW3jGvne4BoX2wT0YOJCf3vvFESVG3Pbqnk4JqoPzxJgEtBocvEAqf6hiQREU2pUQresqvNIOozymHyb3w1gBdxGxI45ROSEg4v5%2FpXx5tYc7gzJO8gekW5t2cxKiJwBnY6F0rojcZArAKlyhI7VD1JjT%2FE7D%2FtnMzc8cYyXVqHNKohKZnjyYftQ%2FOoYe5Zh3mS9m0kc5jjdNNzmFyu2EgPkjxsJ1bJ4OJw8O2%2FMHYi8OBivOwKwZVBbEc%2Flw%2FrdFMK2btz2VhoNREVq5nEA3aDwIhAKM99b7zAOntip8NmkHRWJk7AwkT%2Bk0h56h4i9Bf1OnqybrYd%2BBQcETojQQjiF74lkAwBR%2FeS0vZmVfrlGAYbNeDcbLCWygLUS%2B3maneBq9%2FNOOlxgy02U7Dpom3IM9tVPwO7GEWxsTdNlB1PdI1OG5DSEnxIcIpsPZX1nyuX7aL1KclhEus0SjtDg5k3ON28TCjxdHJBjqkAe9kDs94SRsV1J2CeY9JXCNgibMY2AYYmKULHZc63DMxMmi2vTv%2B%2FNcOkh5PeW1DNY65%2FA3LVU8s2k5HrUObF85cYWL%2F2irkeMKDquAK%2B4Dv44GKY%2B2xUAqh0SMxSseabcwinlOZxs3%2FGZdHlt8iXUPY110ta0hm5j1IxsdO%2F8Bv23qrilzc%2FLL4fXQ2%2FnRfSAOmMyD9%2F4r2c2FUAXBpynDlTLK5&X-Amz-Signature=dc4cbd9d3fb195c215fd76502464bfee43f5b03d6ca5dbebfd18815475fc4265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

