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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRERVTCH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFLh5uMolnf5s%2BQ9oN%2Bm3nrQowyF2x8SlG5LINf%2F2JyAAiEAnBVMME5Qeq56vWBOWiYZn%2Fgr%2BTVx6veEeGqrjlNFKuQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFlzio52276VK84DvCrcA7jHC5FenOkmzWelZu2Su4qkbtUCnOFdjEUVIgHkix0ICCW7ryjF5JWoIhtWElobM77ZERW1Y71r50SlTwh38J0SxImXGtNf2MmSWU4SA1fK8wP5njDs%2B6yIr1MlNJ7al1GY2TirlNFEUhsBe5DRTmKnfqt6sx3hwda6ChtKEQEWBQP4XTFAKwIwWH5ye5zq21Kl90bnwMsSU5aCbxnN933Z5q9jbY%2Behl69Bcnt6pqfsUCTDSCeuOZX1Q4syHzQsyFPf4xfJqy%2BbrqEKYZI49KFi9hojE9LEfvtw5P7a9%2By9CrZhnalwMQ8Ukh04p3mOgjANTnm9EKYRKNUWy8YQ%2FyTdziReOUseIBp2TllkPDYxylTvbpjT2HS7ot0nRYWzqm94F4O%2FKxs2sg%2FqZkwhe2hmd0IcgaeEuYRQ9jOxSYbpZGe4w7%2BXN2CzfiNZLn4aQfSDsT3GpmD3xYuyMBWn6vvQPr67htZqlbtTs4s8Qk0PC0R7yGyG9PGxsUF8NzTNOzahEyKqn%2BdlFTxpH9rAxIk2OH%2B%2FQQaJthVufHDVOkskHqpTW2Sir6RMVOCZmO3R4NkYKfyTW68QtJi58CaeVq6X26XZYHEe2uUdwNWYU%2F2sRrU%2FNQ8stKMh3fsMPmzw8kGOqUB6bikKjqecfC7VZ%2BQUjdo65ExaIrdGy0vdSdhfMNN9JAHA%2BCYK9NG9n34DvUIJtbZjw%2BGj78AP8EoBYxTL1dw1q8ms0L%2Fn%2BKq%2FgCmRbNh5RPBO1OA413zuiaDv%2BSyOhw2UhTZSbf5UlVrmKemLGLvgKkjfZ2D4Smzq1YAIVEgOYBh1civLMuoxIyvElGD5jyW5e4YD%2F6KMn1F8HcyeRxjA2yQCRIw&X-Amz-Signature=38ef202c31b74a3f7703b53a56980248cc9a6dc824bb60d05c781e9b3ca92f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

