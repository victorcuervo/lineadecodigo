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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX5YK3C6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCWN3aGMvy6OcmZFdbrzX0eIqEij1am5SGm9egIeCETDgIhAO6XE7lpyGhqCgEADSgEgb7hYPYiiaNga9yJav7ysHWLKv8DCDoQABoMNjM3NDIzMTgzODA1IgyoFHt9a0FYIFgXmtwq3AMUvtn6i7FJ8b4VpzMQ5ImZdRSZW1CU0Fb0cPi1d8KQCDMq%2FlhUsugU8EF535DEO%2FSEvKQLjrhu%2F9G%2FjY8Vqv2Hu67QaZNjZK5IvFbWjE6JKTwY7tihTo%2F2hrkliVr8jsIHjs0lnnUTsnnefx6Iq4ELY3yDH1KYwp%2Fyk7JvcE49dlHI2kyPLFQtt7ARve%2BJencMqHilEdHInzmaEwXP7CQrsw9bkY4aQN%2B67bfizPuv%2FpqA4mmDwOm3%2BF2PjDBLNdTEa3Ak1b5HJhPI2xEDuaW7YFbvWWE7sPhgIcnQbw%2FOHLF3W6LEAm1terQ1YAVjmYXf7J8KlaGKZ7omsgL3eHruPuFdK3Ax2Iv29jfT%2FQzZa8FolsgLHqMutI0Ei7RUY77ar9J5URQ2gtp053zX%2BD3n7grH7mektcrbtH%2BQGS7q4Y5djcjO1f1akw9d5Ve%2FP6fbe23hTScjfJCpnCFNG1SztqDzuEpVJf65RtoGOatHlBSBqNTpv8DelE08qx7Ke3qiX6Obwr%2BuS8WaORSuuEs03EUbjTayYHscsD0FtBnLnG8yKtErrVClLN6yh8szHnMgBuLR0LL3plLhWCfmv8GPgLGAuB1ISkVZFIWUbfc6n2LslZEFH3Mn1aCP0DC8tcPJBjqkAdqOAEfOCeJWUPMv5s8gU6%2ByL1upaMB2w2NlqZKZDwYjtdAhSnE90dDNBn7cRZtTGIybRlvi8K9cNkhgxbjjgnOaS7wk5tIgQg%2FSEqjPZZz5tsNa3rvrUW1nHvPGiWEQ0GdtvPqNn5ncNROP9wjkF%2BkFOQP%2BcEkZHxZlSr9ibTY4vJjfhmRQDoq9yY2dOjE0baDP3qkDJ9EgAEp0HhuRzgLBT9Cb&X-Amz-Signature=8501effc59a831f20a379f2231509fd2b5498d100c5e355ef8d5029c9bed3f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

