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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPJZIPPF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4lCDyQQwQZ4AyCfZIYSK5QJ4c6Mbw59Ymhz2bNUbP9wIhAKqYv49s151wtrHeHH5TXwsNDLk8uqCArWq9nasxLs2QKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwdN7Em0Pmajuq1sAq3APwqKAT3x%2BY8FkaDSzDAC%2FC3pTyJMSWz4bS0EbIttbVi5igzdjkOCwKLVH15lcpz6L8bXfXahsPGVvyVEwkr9LOzlbqJe8FvjhfdJub%2BFj0BU37dLQJG8QAPZYcvS3iRLXL1KFDu%2BLNfZ7RorcQ3qTGLG8F2%2FKkfL1Y3MT9Hq85hC5nuDE0gQF5OeoZMbfTiv21YaRF5KVcqAd%2FRsTV4EoeE3R5ShDPQbssY3vSTjOJVq5RGOW%2BSO%2B34DxGdAdPnNWeFZhdRovKPBfp771rY3xL22o1qwUJ2lSo%2Fm5ANASc2W6djnMcw26V3TY03Pooic8riX9s%2BLjfaNs9Qoa86tVf0DDO1MMf8mQ8j0ylCsSj8YB%2BTJiScXFI2LkHe0KMpBZi%2F0gzETvkZngv8Ew6qUc61XvdLFAi5fU1W2FW9IyWGKSRU%2B%2BPAsoUdrHymSU0n6j8od1zbim5S1Uelm5XLJUfMspmO6wx0WlzXzkKEdKngx%2FtUr1YpWMqe4NbD3qNquzOsW%2FQ318v876TBmBb9EjXXiCUcSW%2FInWz%2B3t0JzFsgbT%2FKG%2FJCRq69b3mJj7nf8B42qrQD8bo0b16GWDra7ec4K3ak9zH2ZAmtZnfW32zlN6jZCHJDYcEQ%2FeBUzCC%2F%2BHJBjqkAXM5lz%2BruS6qQbLgePbvcKTDxKjop4w5%2Bqkaz1r3tk8v3sY44DCwwrFRj%2BbK5FRkr8VVzy5MoHVK%2FdDB%2BnZ%2FJZ2OqGEQF%2FhzbdcmYnYSGlNLRrj5ouHYVR3MTjIjQbfuEEMcOHBGK4j28reVYpctb2Sm5wrDRuQp9NI0eaRjU9cOsvQIhn43sgKYJgqvmzjUGU1t5vi8CKYdLttp7tlbdsczY5ui&X-Amz-Signature=0aaaf2585771df3d52bae178d9dc2e43a92dfde49cc2b8dcc25f460352ad5818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

