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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3RWTDQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICc97PnihHxogpc3xDmNyn5dVhBdiKx9vJ1h8KoI2EcDAiA2u40xZMjhyWOQEvmXf0b2PNuYtSgIqWFt21wFkEYfeyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMFkNi8mRoXBs7Tv6AKtwDA9C18swWeFKq8s0eJROxmCE0nyPPydJ5EOTYRPsbx9cPB9jTolXD%2Bg85tHw26M8E7WKhBlrWQweicKyKMkUTYu8QD6A7BvHQxXkB3NWB3o%2F0uaopP7%2FoqobVwPQPcMhbqFSfKIAZXmaJ9dsMFsRDounc94H40dClutNVFsJfB7LLC313xJYYnpSG%2Ff4G8BZgXLSz22X50zddRS7HXePtIquzju95RMd0RRBp4bp%2FvlB3bNTNqj6koMaxDiUWBsl5Hh2IH7MVY%2FJ%2BkzGCN0rKSdFdgZNzEctLu723koeqdc8o%2Fqd%2F6uTfu96QtEJ0YqER3NNrXLodV70%2FpueljzwOzDa8NzP3WFrkhSXFwImsq5G1C%2Bnwr8hqdOzkf5zx4eVZfz2RODw%2FwgpuK3GX2yTuuSqmBtrfy5j90yhzcGdCh3AN0JhmHsa%2FRiPfCpvIC483r6OwPPG%2Fy4UEW8S4x8L4XNz3mx0P0PrVY4wr8EUwnbJ6oBq3CPJyWkqoQCds6uNvY554R7WWh2MGjjjy51UuRzVyjbXQ2S3GYcY6bIZad%2B%2FjHaJweDbHnR11VSCthEckMtEoohdcWOJUGKFngpzgrsLdiOx8dLElHfrvjIs6aSBU1wGECpdw4yh6njswh%2BbLyQY6pgGewoIDnG%2B3j8dwLWZhazpPuu4NdKzZUb6iow3LkUtSkl03UT%2FC3YhJQMj6AYb%2F%2Fugf5%2Be4EB3CZ8WjmSKWy6xRa1B61pOnpQ%2FqTbfXC6%2B9XvI0KlbZQ28xftWu9K0c3sY0DOEx2yx6nTh12BHjP2BYJamJkV%2FjOrnXZj7TYr2QVK7XB96JVrfhzbD5FbvXVvtuuU6BOPfexPMTmpCAbjI26rbYD%2FkV&X-Amz-Signature=cc23929f763a3310902eb2ee1aa0ed13378a619dc1e303b2c3b1560b162c6323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

