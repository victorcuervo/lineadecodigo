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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SQGEMV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESg7ZH95HIVCi30BRWszY%2F5l8G1YpD0odc6QOQWvoTzAiEAj357NlXN3sG%2F5yradRHCEzE1XIrcQrHvSQLj8XKnblUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIt%2F1GE9fWcgI9fQ4yrcAxlV%2BKNMqaKnHiYW2MoquY6oZXCBioPGJgrgpDaINg8%2FsMU%2Ba%2FBtL4bhIsLjpidgfRXKwFI%2BTyeLz5jiO1h53OJPNF2X7sM52CxLGVzbNth1XKjRhaJEtgo%2BLsfKKD0YZemZwDMwGgs76JWYauMUtWtJdHQPej%2BBSmUR4rz4jIxERZbVilSlMesigg9j%2BHrMzu7iqs7l1cDvc3%2FiZ3WPwc8CD3v2TCPTQ4lO4NcILhAFj%2FK9jmM%2FqrHfAwR2g4hW8ksQFFRPxVMT%2BZzTA7JaHyoAa4cIXia%2FIq1OGa7i9b4hStSIHm1zsCTG7fhrLZwIj8wrpYjBJPtEpmpdnx2ib2UTJjz%2B9Uqmmuv5HVaJkLa3Kb1Ph840o22rgsokE29nWKS5XC1U32hLP7C3foFU51m6AMGN2IZzYR2ZjqxJxHKX2%2B8LQl7iESlF1Iy3JASC4ELY6Jp8CMNLuhR5ADjgtvPTN8oDeS%2Fc3d1iNxQ%2FOBVSryxKp4gJlps29dVRc4tfcKZNertmqMpGgUa5z8xB1lsqs6EzOMcE8LJAr7a7oVYlxi8XuO8kr9jdYinRKG7WugkkzxqUBwOh9cro1Nos2yupuVeuEVIgqdv7MGFChTIeXWu%2FrVCMA4JGkqlBMIjGzckGOqUBkqf8UuHzXsUViFxddLERdAKMZw5lluay9WpoVqf57LhbzfQ3R9p62jejNToiTEmBMMqBRsHIcPPHiZ%2F0vmhuRnUHTW3ZUpGjUUZlf7%2BLig1N5vFWTa%2FXx6C%2Bz2szyK8aE6gtzmkHjqzRZp69bbgMH%2FI8rLoSALkn9h6xafkFzWLirpow1A459qC9jPQOFwwxN7Ld1Aj3vvsNhOkPBu6KGEehCKRg&X-Amz-Signature=17aef06fd9ea33cdf68b48615b57d5a1d589801759856a1388518ecb9539d7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

