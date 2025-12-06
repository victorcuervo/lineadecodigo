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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBUV64L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN6oUcHJnsNpyLjScRVON802geSRWwY5xhqQaeWwSYiwIhAOg2aZxApDmyyKLFG8HxI85EhAvr2igZ0x4wmZLOdzNLKv8DCHEQABoMNjM3NDIzMTgzODA1IgyLHJPL%2FTJZI0gQ8Jgq3AOlZ44d9xWVg1jrC6buTuEx6tcmOwJ4wPmwbKW46%2BFFXc%2BzPmzKLdQ1ajd9mMLGyxJM3xgZAtpzuIIlDqZxEfSs9LuWNOzmGIxDKniCp0sEW4qf2D9xVPp4IC7kXVHJfRY%2BlJZkA%2BffhOJ61kfavOWvSzxLcO%2FWPIuU4yyxa0M9Ziu%2BUKyneWxslQnajB615PwcAKC%2FfgIc%2BrtiaCsuknIWf0PLfK1rgWH8dLy8TdfDciqf5GWI%2Fw7WU3ew5z26Kb8MwX8hxL3FT%2Bg91%2FJeQErrzoqfYOOQYxaJfIMEqumxdmFBm6MPy8jNmnfFCTv128pLluKyEz2wjl%2B1s7t2GiEtGNUDCrRKYv7tUYyDORf%2FnhqMXhD%2BLpteWFd0Xkb0NNQCPJ%2Fl7KRSanUS2g1qXOfplQCa51rxiaZdGCJswhMRkedr7Jem%2BzRLAFXd1gyBii9%2FnE6ldVPN50Zll4k6P3XUBy%2FKu%2BxZi48XChkMD3Keioa7qGMzrKOR7REltqrO1N4mnEzdkfoyXZbCxnhlup13EcY8RYTzwbWEliEtvcKWphKeeGjvCpgvnSVPJDIaX03n%2B7qgVud1b5UBQRABeNqPfk7VVNdaYKVRUkb7gefFnlL62iviRRFL8M%2FcljC%2FvM%2FJBjqkAa8ZYkSfkVh6ZRS5paLRT7NzD9ZR7XQSf3ypIdsQSx04TmEnN6Ga7lw4LxSLnWNkVog%2F8otUguBdmWG6EXuCGLcILEda%2B2vqrhjeOCTMYZU1PBEVYAbp9KtI2gwj%2B%2FUEXE2%2BWQHX6mCAS%2F1dagTlysi7UOOe8zHVnUfkSh%2F0sZTA8Sg%2BTOULbEQPgGLV93jHDbe7Yu7yHF59IaxXYp7tWZoaFgWe&X-Amz-Signature=4a1c61808b3089e232f9e8f64983a0932ac55d4dea76eeb7ea3531b75dc3fd9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

