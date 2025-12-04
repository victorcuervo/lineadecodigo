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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDPIRMO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDTkjJzn4ZFmXVTfRE%2FrCIg9A1t2HE2KU3lY0HNK0V0xAIhAN6IQn6%2FXR9i6Rz7Vw6530jOTQ8pAWv8%2F2S%2B5P0zidQ8Kv8DCD0QABoMNjM3NDIzMTgzODA1IgycMY6T%2BlCyKYXz9e8q3AMaVKRoqTXgPrjPe4nFZkiLH9B30MBJgCx4yYLjZF9Hvu5qdNtb0nhF4%2FL0CXgKWl2NzYjlURpYfvG9FDzlDNhs7ZWa%2B%2B6pifFpVNI8%2BdtnwJDE9Mq8IjqgpWTcyxTbB7x2QAVXaTIaxlCM0hKgwSBsnLCde5333gRv6gQU5kkCzAJXwMfgVGuca8dh4Vb1myyMZIUs0yJzlGp623v0ypcZfaN5Py%2BKWMsThPTw5BMVkBYRUQQ%2BLVrt6thRJaH4%2Bmjb7%2BA1sPYq3F4jhRp99MY7t0mOp8YL7g%2FUGeHAC8%2BlsYRWxst2M5M8kYbDXxETsuR30qHYhqdC6ipx4tfWaKAybtRvtu9Ko5byWKhc0NqNz%2B0wPhhqaHtrnG5RzOC6R0vlB6eeO3s3k6v6fyWdXN9dNq1R60nTQ%2FQrQbeUjHh7G5Ue1Z488VRblIIjS5pBIFmGXopOciyWV5KQc5RiC9fU8%2BYgtFAPEadiXMl0H2GjDdrRuQrhiBoq1b8W1bcIRsV6cm3iNfKtWXrX4wiVbnANZeCXhWjjwM1KoeKtc12ng39z%2BDP2OnvRG6kiBtFtyUCN%2B%2FAC52%2BzDm9%2F8mnMdrzmZaCyYv80slgQomWI04zUvPqnQZuNuRJS5rgeWTDpkMTJBjqkAbV51BL8U7jhcu11DQPlbeihX4xubXDy7tWS1hG3WLiY0omSwCzgYZgOciIK8H1eqKhklYc3OOnr7QT%2Br1wh6TlodMNtDyxStLShpyFFCUqZ5VEcEAe9EKCpiCdZdQB5TlqPgEAKI2q5ttZP%2FM2jRJwGq%2BFrLodg%2BZ6i47CBVMdEFiy%2BB%2F%2B4muLFr1%2Byy97Pc7OBDs61cnSVWfKUgvpK7IUz59bQ&X-Amz-Signature=c88abaae0b362ca253d92dc511c0d6e9446234231410b23b59df5dca7a09a095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

