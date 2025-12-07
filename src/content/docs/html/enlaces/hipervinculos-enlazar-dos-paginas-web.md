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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWLQMTF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc58cp07dpT9aJwEAweL%2FaqNWJw4uooxo4anASeyZhzAiBkQj6l7FbvwWFufJG0vNds9TCLdGHIP6xOSjb1yfiNXyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSQYX63Mym%2FQKhhIHKtwDxRrXZh%2F8oA4cH%2Bnwa1AkFmK5Z9BDw9waxaqmYxkwO8r3L1vddx8vhe8kPWbQhJMbZ5R2Vzixn9TDJXrv8bzXmyKzQgr1hbyFJTRqOSRWuQvpIy9XZTFMYYMifD9uOHppZWfD5fTNfcgGHM9%2BR53JPoFeDxsyZgjlcbWzElsX5o2fUDec%2F67REXt5RzCvjGoyx0C%2BEU1W5Ut%2Bj6M2dSmcPExgzyEQ8PrVOhP7%2BmID8VzDwfd3o4cu5KECWOXvwGj06VO18TdczhhNX5rY8B1c0oZN1qyQHsIVciAERUMhJ%2FgStROVeXi3y52h845kgUzGCXq9O9t3X2usbTI7H1uhwJm88JKyl3JNH7n8mUa8yGVPFLS3RSEYQYUT3H9QP%2Fe5Ud12xqeoxFpRW9EU7X1TeOJKslv5vkzLChuBBK3Uha9L3i4SG8JCD%2Ba2ZNS38YZdJDIp8mZcZgpEPlVpS8X8HMDTnIGvtLECGSg5o2FTKyWLEtJAIICuLCLvG2HLCNERYyl4%2FUwL0UPm5bdxSgegUKPoiF1rxuVrusWYrhMGs%2FQUtzfYlydWcrwsB1X5pc3N9GFIbucABCRcLT877zCuPv7r1OnWGG%2BcJnNcgDR5N8BlME7Z%2F4MRdAkVvW0wvJrVyQY6pgHQ0yDEPOPjzNs0GI78HJFLjMo%2FKjT8w1ONz85ZkQOy0dzvD7EPPYNh%2Bh2ClYV99CwlmhZ3JdcW1PjNMAMe2%2FUDcRLH6g3OJ3U2WCXd4Ie7ZOkI%2BNzOv6j6VIZyvKh1CU3WJmrkZUXvY7%2BFM7VQy0ub1hRIbE313ZJ0S8aXnrYukaJVHLLr9wsmGmnWjO%2FBy1S5hnpNlVkdUk8QVRwf0HBBYuRSUZcM&X-Amz-Signature=5c1586a22abc0ec26e834624af11215bd0a798740a2a42bb0efc07e5ed79ddd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

