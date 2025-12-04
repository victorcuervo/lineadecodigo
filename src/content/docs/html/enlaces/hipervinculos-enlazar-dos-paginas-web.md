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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I24TUB2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDwPuOAd6U9E86qJigT3R%2B%2FOoZx1F4cG9uzps2ctJDcLQIhAP7B%2BB6GCNwBjl0yGKljQJD5qhvBotCEEZx5GL3N3RhkKv8DCD8QABoMNjM3NDIzMTgzODA1Igz7mZrCHz%2FNTRjdw%2B0q3ANaqnL6uKQNk3QKd2e76lnf5o7mzsJCx0YC7dlXu3dKsY1HWPp9Z%2FM%2B4W8OPja%2F%2BDEa%2F9yE1rcHscLqX4NbB7SlSWBeOcmFoA6iovqt4N%2BubSqsjx73F3GN7IdiIEZbN%2B82w3MVJ09E2vf2WrxIrgxnBy1GR44YpI3dg3doyf2hKHyhEkcLNU1EnF%2B7LDUkcpG2pIx%2FTKCZgJNc7BjdWH4lq8PsynQIvnP1Nrs%2F%2BSL%2BKwLmkG5DD1Ap9zIYRSCv1RxYIUzLqbYy%2FBvNZx8Vgn%2BQdERUDTbbZJTgpx8lwgy%2BIa1%2BoxC0G428gFrPD%2Fi0eMQYyHdElJSEHBD3USQpeapRhlfiMLlEalMSpDv04rzwf8%2B9gvagc6ATaC6rn09z5dD2m96aT34a0hdFANjUwwAEBeqwBXE9Y3SCmI2Ab2KpebBWNcvquK70Q6d1wWuopKojFAAQnq7A6RUDga9WnU8U67wsRc%2FiaAvqk5klcQCZ7mJhNKmCvuLUYYgoJBZfMNk%2BYtolemh8gGB9e15Xl1dUgmhmC3SF0Z%2BNv66IiodRV%2FyJnNtjLbYQn7Aq%2Fx3qrVtvuQCUajwVsc4xh0UcSvuf1x57b%2FghQ9%2BR6LyZRcZ1oB3SjUq%2FzuAx5IRZ%2FTCMy8TJBjqkAWjmhbDT%2FD6ROXYk9SjJW%2BlBQWOBycsuWXuQ5%2B%2FFVFMYZ9HsFj5qqz4yICIk6Yz02pVUb6Y7exhNfgGa%2BhzYEAz3zW8fvzyAe3yvZxcRyaEBzof%2FICoBxH9MNQCvxDfGVXIQmtcsCX6A1rwiiqfLpoXMriI6Tu12eZuRfc53FNYrERKXSQbXB%2FomfvLNSg%2BOGt94zBS4lCYFxTBxfIN5Wjjerc96&X-Amz-Signature=27a82fb05ba8962fa4a82f8cde950ac2e015bf0098956331491667a07067d114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

