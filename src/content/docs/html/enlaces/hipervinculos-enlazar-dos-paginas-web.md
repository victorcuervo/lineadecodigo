---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQF5ZMGZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbZC5KZEZHM4HcNcKeMmL4kXVnCb%2Bx9fCQ%2BGP41IkNdQIgChfHrQdOC0ciJWuOhahZz%2Bu3Tp1dXEci1CgV8P2%2BZSIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3K2FjGPOxUDEBD6SrcA0812zwu9t6tAFekHeknsr0MCA4u%2BMbnld3ZRD5HlJKRBNUDKE0kYXjls4kdTPZWYvF7rfa3F%2B43uWiJWAXcyS%2FFKGQiakgVq30aJSfYVrCU3vHB%2FMpz0F%2BSfX3P8jQlZLIiprTHLVrhJAk8vBjEvzwDLvXvAHsyX3kunqe%2BOrb6STZ9X4Aarn6EMP7RAMGMC1uMWQdFYj7sJdVcfYLu8ThOpruClVE275FhGO%2B8H6LYMKLrlTGrijUgnBrT06UcT3DTuP%2Fi5sO9oRXuNOK4o9WhBXd3GZh3XbjBBDX4Ej54h4lZdJ%2FzPfxCeLqmwuz9aDDeN2AsdlXiPw5I2H%2FNVUdjYUCIxyq4lxRuTRYYlPK8mt9wyzgj4qDdqHY5B49YDwFtXMklxRXAi20vGqDnW67JnqxZ4crrC1%2FRJ%2FD68geZFd24bWaO3zsMJw6tdxAAABRFPz57gcvEFAsHnWJz0WsDeVL2vDWaNy77JloFWv5kkHssvv3RMUSV6Hv5APe2d2ebwTloKOwrY0b%2F5l0%2B%2B%2Bs8VKy5mmlchl2i2U8H60qsKUOL5cXICDjWl31%2B6cgdJ6uaHRJft0vvyjCgfPOQPcV7gaI%2F0mFMFMvAXrYrM8E9%2FakHsPVAp5h%2Fd6PrMPaW4ckGOqUBTVfsNckUk2oYYyLAOJHQBFAVhV0rlJD8sPKOSAPXyhk6mbUe9SoGkxeJtjqStz9rpUUqn%2FcZnztioWoC%2BglY6xmPCs0CJcNyVSrklzIW1p4Wo4Jzdgf1hLdR0iaQ5Bhilbo1gP7HA7iZvBbwKC2C5vuuw8ppoDbpv2e55A4mVBYCE868dCicQ%2BVV8Kgpjzf7wu1W84iNR0vUwCog16hkLtK2WsWM&X-Amz-Signature=2b946e36b7a9a1f7f1aab45a8c3b9094045c397c25c1e67386d35b294ea528bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

