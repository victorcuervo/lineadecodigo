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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNP4MZ75%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEzpkCte8IJnUMAGowIJzDM9LfJnZQGGewTYGycAO%2B7AiAtyIYjlS7CRwwGQMD0EWdMwvXEg7leWnCgOSC85ZxkOir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMM33obhp3ChhNfQe%2FKtwDzLGR0M6w55eFhmDBLTqRPIINHnPzgeixa0e0nfGWb6dLCtRn1N39wB2vg8TUw7KGRj8eNH1paTF2HCnkHnRplouI6L1x2Yfz7bgahT9EP2ev2ukdSrmW%2Fg4LoTlXGdO7hVkNyMwcXPrcuZu7%2FX039tMHB5EYMo06oy1lDPEC8JgyVh1vSPPkXorOgob051xjlu05JkJitnDorvTMKKAf8tDstdUDcxuKYHUUXKSZ%2BXuAeZe35%2BiR06GbxZqdVyq04RVAsL7zwbRNbiXNTwVVpSb9SXeB7UYApkUH0TUwytwMCZIj2nPAgxMcyGPEuJRYILWKyLftNvSnNw3wzsBDZw4uxr%2Fz%2BuYa%2FezMkUM%2FXW4EBq%2FgEzxP3KDr0CR6V9klIzEoRfxsQlXVI1G1GJRjQtw2ZuWRZtVYs2we89acCxO1MedLE18uGNsVE%2Bj%2B97XPyX0K6lyD8JNga1qynqO8vRFC8G%2BBp3YBuB1KMtxV4ELrJy0qPYND7Wm8plnAKoX2sT9Nd68aF2L30ZSo3aCtHI%2BLknGnlSF4ACM0jhtu8yv0uF1BjUjg4xYtPnw55qjiHSbSI47eDl904ZamKP%2BsAVvl59e4f6REYc28Y6bd5oTi8Gxbq4hNNm7IsZ8wuMLOyQY6pgHZk%2Fyr0aidUrxXyuqHQrnmU8V9K0nuDoWgvsiju4mMu0hhDgc6UHgY0V%2Bbe4K8qm7EBxvq8vx604M74GiUl2iIjO6N5HOm8LcQz4e5O2shobMhPfIzIF7HZvSfqc9WxbxXyoVY8xaWNjkGGHUk%2BLuCQZqPSrexrVzGV4QUZiXh%2Fp9J%2BrEccmy45Ar0PSoUJeAYDvz%2FTSrOz70J627WA91sucImOJ17&X-Amz-Signature=24a0fbe960f52c8cf1895ca8235830e54795492de8bd2477aaf5fb285f550173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

