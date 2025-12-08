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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RHOHFVB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVXRQpyOQafXV%2BUhjQkDixDlPeD64b3JL%2BUptuIb99rgIhAPPnju4MsNwy11QO9n8OHeb7vhfr0hFYrWF%2BAiNVNT8UKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BaJQb6hyGGxYa7aIq3AO0anvwh6F32d%2FKN8nByvXmvPpCDhSrz7GkECzkU79fyFfLQt3fInK5Kmsie0DJxHGnf%2BG9aibi6sWB01KHd4Ge22fBDKndKRRaA%2Fisjy6waN4p3sfm5XRza5H8ZiXSAbu%2B7W6NcH8oEe%2B6gR2m0552Cd2ucFoqMBkwwPqX7VMgkgrPuIKqq83jLlGLjwQSHLcStM2nNoI8juzp7Lwk1oua5UDddzEqZbqb2L%2FL%2Bn%2FqYrrSGORp%2FyQ%2F4btOQ0uvaBaDTmM9cB6XJXjyDaoPskeQBFcEU58QstAh25c%2BFgvPCiN5ZCgr7%2FVgIbpd1nNLAvrXizaoaL6KLLGmKHUIDcYJYQmiX83Hu%2BIZYvfFSiOq1KaNufAw8H%2BIFxE6fJKZ%2Bf4R8NRa9LqUavbDqgzsL%2BTnuRvyGLJAxJ5mPzFNGNQz9zzfGzzW47MzzumoKXBFARoZVkCm%2Fdo6rq1pGrP5qfruOs9jKT1LbxYOcHzHoAKlYHz0YyIGuqbBIok%2B6qHZQHPdtblmEUbyQ5jP8fXEIcGrTslD4d7WN7C75VHJZCb6okeip%2FrJRBIhpRPfyuB%2FffVZdMVOshx2VdZj0m5i4zzlstMeoowYOsuZlNdjvLQtaujejR2diFNISEgRzTDn0NjJBjqkAUpvJ%2BN3ThngLjxDTlEcqDjCVF4kf6ruuUJ5Qzlspn0%2FFXRjrD9z3kb0lqQPO8P1ARHMeDJkn3lIIGzvA4r7XdL6VviTgtpzFnHlfmHbuGhwEMKzuCKyaTM6wupK1fEfI0879MQma%2Fekd1OUQPQRkjUkEb6d3hKhDDwu6%2BozQlk7z3PgubnEAAHBzCZ%2B8%2FSi5QZuzOuZQuJPBxFMKen3Hz15s1qU&X-Amz-Signature=1b906354b7853df0440bb9673b0a9c72b0683453bc3e72b5aca3f37fc5ba9ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

