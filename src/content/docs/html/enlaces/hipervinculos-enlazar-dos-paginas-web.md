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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTJZPYIF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt5tzcmO1gCv7g75wDmfrxqzeZgwPgaEuDZYO2PF9h6wIhAJYYRXcGwF%2FlbV7fQb9WuMNtBzMSxmc2oMW%2BaV46NxphKv8DCGYQABoMNjM3NDIzMTgzODA1Igx9njwaCZwySS4AE8Eq3ANyIasCtyxGY8amGFFdYWcaXQ%2B4e9mesS%2FnOLWeuzLEwctpHHx4f0r%2FKMsX2Lqvg%2FQYSTbK8aR8U7J9fGPVi04krdnS%2FWp1lvRKKh4moQNAa6k51QYIY7ENHxPcAljvIdxHxN%2Fqq20MDzXAXaWIK2hCESu%2Fz95cZ%2FcFuRQ1c1bzQO01TV0RydOBy%2FCWJooVBSx%2Fx%2BdQSmYejv3yFmcYVbjCoNrIYlOPW2vtc0qikIiTb8Vv31VsRzBlhIJAzmvn4B86jwUAM7jc6AOV0hNxHOFu7hRQfOQO%2FX%2F055b7cchOjein0V7pOY1WWPZRie26UO1ZSBxcd0DkZaXekar%2B3%2Be5hZ92zUATU1Xw%2BVfNw%2F9zmgWdvoggIn652BwJB10FUY2RaaMHizZmlzAmCnenab6uf2OtR8nkcFqsaHzteSz%2FkONRkYwVTMpXh5dUNETFZMMkhu7%2BGfMFrUWsZzRB9gcu2QLc5pEWXaj4Kl4R0esBaH3Pzyg8yNOX%2FzeygpD5huc8PqCdfxh4CarxCzQL2clLsFDv1SHicSphjquW%2FcW6eZkGCxg39Wz2bJE7ZoK6TytqZvQWSwHvWyapOV7CF5qpQUFGttHKK%2Fxh65B8Oo1rVtngPYuAzyxPJ%2FcMkjDEh83JBjqkAZwS%2BGYOPNj0UhLZOaBRlJwJcw1gOfbJhkEC3F9AN0mOnkAkmpLgoJ3JBUGrefXsvqchR4h7EA64EkkW1XobxbccnHKWFSu0QM50jQd5qiMNkD3j2yD92FRObZvaUK%2BgmCb4NvnJsRk0kPPY0YD99Fytt2Z4MM28KPzeGpzk0RFCTrQe%2BE%2F4oKshmorqa61%2BhNd2LtXI%2BLWZDH%2FFhlZEugCYODso&X-Amz-Signature=2d463783f00304c286b0b282972c5cc5477aa61cd66a1d9ca6b9e89286d76f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

