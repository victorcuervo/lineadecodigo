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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZQBHULP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T151954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtA3WG2yDC27dSjtJtLy8nsUscqRMvgyY52t5ghEEElAiB6qpFJoEcsBBzm0ckZp4W7o5xbTLAgZmTQsfMjin%2FN3yqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9T1VO1Uto%2BwYa0mUKtwDDGNqVMorV8Ty6Vt0PZbWuZ8GyDJ0s5BSq76Ctq36FjtHGEuTDTjIsy0ijKcqYJZJ3Rk0qQN3YS4Xp1OInOUc7GIOwEQ0b64QiCvCgs9xRGwBLawxXw5mu65XgKF0iqWMgGfBvdhgNLbFLW8e1rZyREb2IM1fupu8Ak4Qp6eSFAK%2F334hhtI%2BaSTmlXlAEVdFLr1RTHcc7gY4jnTSfiQjb4yI9GFZ2CJd1mz75HExKDUIvhAfXv66LnlFiDEtVxgDgoRzoI%2F2WPirvthTqDi4eJM6yMycb9ooGZJJdimWoQcLxWeBzRPyQW%2Bb%2FP7b8FGQ7gs6IEahjYSQMO%2FGD%2FTcwpO%2B1dqPYHYxjHogEmEIZP%2BkQhl4v6tiERKu2WX0UphopPr%2BDdJOiEP3oZD0HWjD6HUDYM8%2F%2B7SzYHyIuJn4tEgRi9upDBX5F8U2JC1HxCaOini8bRoHa%2FeDQcMO1ZLLH4Y5ZDDpFB7x6X1QXiqPbT0T8OuAVbQVgTC2zaEPgjd8gOOw01f6kZw1%2FvWdI5nzD5w9Gv%2BYHkuaYxM1P8YpGOIsplasv94MwwIjH3Y9M26FUBUe7moDUKxZuOPjihCWuND2qSvMpr2eSZ2n%2BiC4pe8bdNQALZL5mmkNpo8w8tzgyQY6pgG6FNMMAXxO3x4Rurcx2Kxt3Cj7APTOhYGmUJ9liy9EGSnAp4HvYsQw95fBa7I8C2RtHrtsse8iTYu0LniEo%2BNxUVcGzrmHOrfPLHq3JBWoknk%2Fta4TOntpkYFwMNoZJcaKq7fWTwjPJaI9pP%2FrcW4A0QAlA%2B6VS0NofU7n6qu3DDrrXfaSZ%2Bex8b94bg9NXjAzzQyHI2pAphShdzitFmp93gIY1lov&X-Amz-Signature=aafd6932ed57b64eee4b8b4924e089f1f31e054284e8ca62f808d52c626dd16a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

