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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D553ZO5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2eA2m3ir3DM79CivgeGvXi1YagTrsAOgBR4JA5tF8UAIgQhu9iLiT9IPD6H8hwbB5tGAQBnT0vKcfPUqeyjyP2zIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLxfuvuoncEYrzl8JircA%2FKJWniLx0%2FVt4HyxtAScUtHNB%2Bw124vOPHT4kya%2FWG9t5NNfSv%2BYkYjKS3NV%2BcfIi10SZaxZu6is0GepExurUMkRyUt0lVyztN90zkuxBRRtSKv%2FGD2nWT%2FRUqv6u5Z8B4qzP1Ifv%2BEZ7pYJkegfQOPuAS92T8RVqUkca36xHQeTax9zK6Z4KVjdgD6plzi7IH9ffayB4ndBMjpzSuZv1rb824EtQulWUWVuzFgomW8ZeCa8pGHZlxL%2Fp%2Fb88Mfg6vQk5Ls42lCigQnDyyvU2w1bng71%2Bsgcm4U9S5NIu98qq7DHe%2FqECExUS%2B9stN8r9eU9TWqd6ir3C%2BVImDiiZ4naovE4eBR6YSv%2BccVFug%2Bjf8Y%2Fv5cZkwlmH8zDGUB0tagtWeq2WwrDcc4QoPjC9JRJV8GoaQFTzIzMjIKcTgq9WwOp9ITqgTOU%2FzCegbo0jDvcsz9jl5h0FScAqkgYNkidCaPO4WiRHzEljUl2NruxfuG1%2Bifk2lafeOIexSWlRVka%2FQN1LMzQnVJZbqaeEv6X4dP3zlRw8NEbjDVpgAyPB4Aa41Ho%2B%2FAXjhPb48JEbVeWIEKrfzWRdY3GSoofsEv91MqbIvPkQj36JOhgY8WuPHQXn0arfSCkM3nMM%2FU0skGOqUBJ%2FlKuFFteqrrjOfo0seKhS%2F6aNWnQS2ZBGPYjTXC2SkjhU5FBOdN6ocdolRdHe347bFFy2QYnRjegwTjSaqW17Ot6w2f8Rd9xWD0r46PWRq2g0r%2FdV80ukJXRu07fu3rQSieZDrQHs6ypsKBsYQXhQ%2FAJpa8k0SAwg8ICkmNv2LXUUjIcJiptxCZcJlFZPkouBSGTwavBa6xiXc78IHdemrMfK1i&X-Amz-Signature=d7cdf2177b1abbe5f65010e5118a384fe195901ef536a5bd7921f6223dae54d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

