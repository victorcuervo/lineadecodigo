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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDPPWKAM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCci3EGuhuuW%2FrIvcVi8OJ90%2BLAU3LuEm1mXr2B2U5E3wIhAPxh4KyfgAU%2Fb%2FXFMRMALiJk8MmKnOfUFjOEVfADGJqGKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFKjWhAz9i2skOsxEq3AMh98dHfZfsdyHc5VfKfYARxJYWY3GziQ3Fvs9hgemT3qyt2TpJWsgeEga6QbmBWrJk3jc4upnPZtXTeqN2LUY8JWROL0U9MAAIirdDHew7dj1ba9Zp5ib8qK%2Fc%2FDSrBjcBXfWL4JiY6xUxjQS7rHU3Eds50XyGVn0AmgNlKxn03%2FOOJKJNaGZgR3fpta9BlejdV2bVByPLg1b9pjLO5jvjgGkwN4IehKUy%2BcEArIdCh00AELVX1QKNpD%2FUDY5jxdUBN6hNTEp30zPnLLd%2BCfJtOMJJfmkZJD3%2BpaykSXnvJ8yKGjwTXWRY0l6HQofmdfDHXUDXJfN70jNnj8gJs3scBppM2iMsudMzJ7XomESbjndYjnhiWwXag%2BPAmj2Ikcn3XaBma5Pr%2FuUgZh%2F6S%2BM9QugC6Z7E7hEORvYyVsFL2PLvkSLlGiwHjjkAz5%2FbejK3L34S1L%2Fe4YvQ0avL0IimnZNZCyfEKmLrgTpyVDVwCu8yq1mniiC50uW6kmXZfqkXLne1UnpRXCfezT4zOBFYD3l0VRx4XRXYT42k6af6M8P%2Bq%2FnGtHlROYO9hx5KEqzgCyRLK%2Fhs%2FS0VPHhF6MdPrNvv8O96fkPzPFcARfMi%2FnS54GRnOaUYIACBPjCBpNTJBjqkAfTxVL%2Bvep0aXhkp1dxfBkcQHXclm1KhEDNDhqwdjrEL1wWdWN7vmGaWwq8asAUrBVIiyz%2F7nCeE8SdvDC7DWWcl3vT0zIKsyBRe6dJh9Q7krTVTfJ%2Fz7e6lcoR%2FuPHYDaCnkLZiy7J4wt0BLODyfvKczZSCoBasq4vVShxJknil3KnZGdEvXhJ9OoE1C7cM63diy%2Baimd9x%2Fq3IQFZOyUnRH7YT&X-Amz-Signature=82c01a6b395ab4aefc20c2f188b6dee82e00b6c633808fb6f9b4c95671885920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

