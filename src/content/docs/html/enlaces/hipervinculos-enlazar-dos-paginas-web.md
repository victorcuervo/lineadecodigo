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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PFRNDU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs%2BEYBSx8L2I4IvZI%2FMo%2FQVTvnjrRHUGXLbBzXZHvlzAIgL0X%2BmTyG7iLcKhUvII9%2FBb1%2BIcQ8Xt6UWyyEchmxfgcq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHM%2FyE3p%2FAKSY%2BEmDircAyLGn8Qmei4DQeQ1ORLET%2ByHyk9fU04w0Jiead%2BYXTb7sshUDjKjYFMA8Fx18WxHL8%2FlEfZxNElUf9HHgmxw%2FQICtVBYGvgD%2Fb%2FFMfyzT3Uc7a%2B2B8ikruiiqHH2muWECQL7ulrSrdOJJ9WgSh1PmOJL%2Bab3jZNYh3cNFGKGhDvjpKaHv2bnsky6uDWioqEtQsszFnUK%2BA0WdLH2kaArqq9i75rvh9UbwF7%2FN6mcXN%2FlhxMh0aSOXJMOQy1Ktkeh1RbBIoA%2F%2FJfyR7uYOT3NmPali8lsrCkcGcSzTsosMYKJwKZdoJ9qDf5CwLRVd3LGEbf0Z5Y7%2FyWbROE1Bp%2FVKWWRLOPE9HLk5Ig2pQRPbsHWITjFG08xtGfSvdWpV70WBi0Soqn4YUffzOr3zij7SiNh9mc6XgLT2WC3EYVy9xr6M6uh591bEj53WhbMWVVH%2BoS4dD5XKAd0CwFVo6GvvEWTiY6un6cz37%2FXVBTp5jbIKhaXbI7L13jHeMtYRLIF90yCTcEgYENFTQPcA1WOGbrS2x%2FJEuc19D5s4YOJkDQV%2BC%2FR2giOg5XrNp%2FL%2BmuY%2FSrbjlzYsxgJryrGHYE0MJvj%2BytdHd4Isx%2BQ35nuDmi59XbF0tdMwuJj4O6wMNr8zskGOqUBWm%2BBSAe0sqpCkCR8LkGPbykKqDdTMLdoAOAH%2BQaDwgcAGYwdrxguy1iOyMtaY31X0d6dOZBUbZfH%2FlRi0Wf2A7mTfjlHrD2Udqoq7nYgnP5jygxvkEIgKAKL4VJBQCDys2KrOd8bTSpOstMlLESTFLSe5VfE0yvQ8ZApVLuKWLkqh7XjYF0qwJeY30N0EBZDIJmcbWtxsPaUd1nyRbBpnjxI6mzv&X-Amz-Signature=4ce4e76341b2867230a1fe2b81dbce47958e8a62c6ff2a7625623c3ea3222918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

