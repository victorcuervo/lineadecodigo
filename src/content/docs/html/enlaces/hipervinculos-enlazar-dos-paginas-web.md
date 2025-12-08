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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GH5I6N7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTol1wi4vq%2BOa7G%2Bcln7Yi2moJMHThz8n%2F%2FsbL5AYlKgIhAJx%2F2oPrNJz19tBLy3wpkC0N56zmcL8IjVPKuGATpYblKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZfOg0Gxu1KAX%2F1P4q3APKdTsYzvzDMCqt%2FLwkMw4xyKZBhP3DUHy7NtKCj1rXaQ1%2BnTuB6zTLN2uJTtwsQy1I65m%2B2QGLA%2BUHZiaETnGMaJupa60sVVPGhFCiamAwPyN%2BdJfytseb9MlrNvZTA%2FU7wLWj9BGi3PkFpkHQkiXODKienP09RQ4I5%2FpEjmSWepGQfdhJdYJcnMjfnQV3nmNqv%2FQjPcGDLC8IRd%2FIs%2F3oMUsA1elOmdqVKRToIv%2Ft6ILd898Bryl0UFbrY9NelRsfLvd6ssvCfXs3X1%2BUaetSK3M7oDbdZjKUnm4okAy8KgA1oLy1YOl4YK2bjYNbf8fhx8J6cy4rwTq%2B5lnY5Dl1sxAYQDgYGDby3ejPM7BJnzaR3oITGmyNkaELwcql%2Bo6viXpcMO8cZ%2FuKqYvzaM1%2B%2FTAAhAwdXlVx7LvNDIpDFSVG0XJvz1ptOJWW96Kn2llm%2B6OfRIhs1u59RYfkJRy4PWHdtQzKiuJ171%2BZhLu%2Fh7QtAOYlyd8jHng5gAyP7n3JHRf%2Fan0IilvNijVe%2BNv4d%2Fo9M%2F0k2kwyflk%2F7J3QLhgv4%2FkvOEszkKgY%2FyN%2FV%2BcA4%2BEmHXTVfFPNQKnjjxK1c2p0mHzrQ7btxZPiwoI1vj7BiOfiIHaU1%2Buk7jCj5NvJBjqkAZzXuGD2Ge6zGgnL4m16a3lD5VAwtzO8va2DUQy3ZinBlgTwilhIa7sdbiaaeYKF6HAGVycsELUfjI3fR4fHQ1I0pQ8lXowMONeDIOKBULTT%2BptCUHJVDuFpVG0sVPCo9cv0%2F8Gg9W1M5efBWes70NF%2B7e6z3QBG8oY47ZSxNePgiviGhIfa5xUVUvUnpu1V6f3q4CzEmPR8oKgfCxtRVMU6oG1q&X-Amz-Signature=4956d9497e84684dd6c82ca52d4709c90de6e26b2abdb40fe7fac6c57c3bd7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

