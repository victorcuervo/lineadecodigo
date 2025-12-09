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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YLVIE74%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEH6bxuhwAK8GNP5vQgBtO2nu20no74ti3bHDeatvRaZAiApJZ2aQM4HxSlx8k6hTIPSwIZNiaRJ2zRt0YypfOUhByqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdPe96bl963TyGxOKtwDjC4Ho5N8hS03bfJw0BuUc1eoZLpkp7vCp6wHgOcF56bz9R6HeHpRfm%2FFeg5WJShErNY9ZRiyMqdryoNBNpMLdokxX1gXOBne%2FpduINrnlrf0z3lm9SC3mFBs%2F4JORhagKWsIADx4UhTK36z2zJT9%2FY5hwgMMs9MvJihKpLzCQotOCxCD3lqGeH2EJRHlEnbbAxTj6qTImy0TgOmsULWuuJAorT2KXF9Pj4kXx7nry256cMF%2FoyRmo%2FekMCrObmeePrjhZIuXSvftnAhO%2BZi%2BrV%2ByFvv6elEH%2Fc162Asv6qviBtK0NuNAj5PwvrwJ1h5xwm5Fj5Ms87ADgp%2BLuJkeXJ2mqUrOZLpAe7en2HjDwwI40szFWueO%2FSyhCVq2Bgz2WuNH8B1DqQblvXik3uJKBnjZMyDO%2BKCNjmqy3GpfLtriXXthf3QdNKB3PGh6GSSMU%2F6oerduieoExwW3IO7h1pq%2F%2BiUenXTjpmsWImr7Pi5A6%2B2b9daoNaBAQYJKYzwJl1iB%2BnVZv7GtHNKS8aSAZTa%2BdEL97JD0Mv6t9t88KKUGMzIV5d9f2U68ETsTHGNOCoA0ISvXjLCAnOfUnTfZIkNUmcs6y9jMifewiSoflQ9erprKSOQuz59mi6owvpjhyQY6pgFvJWC9GEtzZDjU36wIDuMDo9mZFFt28Z63GnL1MZlboJEAjZocqV8x0S1iC7ExOQzIZtScVh%2BD8ILJXkK96mxI513qJVDkPzsCnNHD5fmcpr%2FcR9GqbHBGlKoztSb6ZWG3EIhVPECXy9SyWfo3Bn5p6nJ1l2HseHG%2BncE4OOLP1GUbBxWHrzb%2B4uLhIPH0o5S7DG1KTCmdt4bLaravLi7CmuQwIQCY&X-Amz-Signature=6c86245d554bb5b907a8777e01c26b39f785ba9c95ce2e79d50ac0399b121e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

