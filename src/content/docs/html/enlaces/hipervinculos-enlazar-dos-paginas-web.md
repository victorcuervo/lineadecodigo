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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NRJBNSR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCICJX2xDnuqadwVhKFKoroEMzWVHH8zCjdLmbMNZVgXXSAiAl9t8iVmoHXiZqUhA0EqZPaKEDimrZ8rioCRHUhp2ymir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMPfhX7oM1J0sWbEKLKtwDemOs5cZCQPiiMtH1NdSu7jbVQWw3ZM4ci%2FY3jb2I0NL%2B%2B0Lupjpq07pOZAObJLH2AqvNCvAZnBLLDfNiJ5%2FGyU0d8FxCEMWP8589oNKog0szoGbemYlfhFRIWJEdPhtdHL%2FveMuXdnFY%2Fj54VzXIb29ufV2WdRa06LCIqXl4JNUJdfh1VS2M85BXmUqwf73%2B4dAKpRi1uD2e1qbv08tQej%2F%2BBJtyP9Ib%2BBbNJjEe2DBx1wsW4yecBnfysGQbJPBjq8w1EQSCS5KQ%2Bb9SZVOl%2BttMQSfiJ4blG99IKU18fpHE8Tb%2BVdc0gaSDG3I%2FT%2FLyDSvR2RgaJR2DiqZbU%2F9lUs%2Fq0sM5FOAbHhziycHp7xuiNkGDl1iOzA7AARCVVTJj4u3BNSx%2B0huIIPfb5UaLnMrDkCal2WgEMuSjY%2FKO3B1tQyTOSJb3whq0rkonjpa6ZG%2B%2BRMsP%2BBA2Nrx7kf%2F2d5s8Cwjrw0bWYpTzGIaF62YnpuJ52TNFVG%2B36VY9ucobzZ4Wkbz1RRfCgLlymOEVPvJ0Vd%2FWyXIG8W2SfD7ZKwRuQtZs8TJ2ZCOCWeuItTcfSECJQovkp76XC3RAfoJ4EzQFIhB7VT12%2BmRElFoxFJsp%2B5Gp5oX142p02a0wp67EyQY6pgG1M8xq1ZgmN41a27JEj0pi4jU6yt9JKBULpgTSCVlElu88mc45e%2FaCvkvrAoQNHv8L%2BTfUA3NGMVXL5Id6fulM8eH9JtyE42FrjZ%2Bjliha9CIxl%2FDGRw%2BklvdxI6ToRJC2BrnWogKVj%2BFMieU2HC3mifldL36XJ1mSjJfwYso%2FYuYtJva82r3D%2FIHATGsmd%2Bta8zrkoIyVFEvtijwgjchU3QTZzCZN&X-Amz-Signature=838b6ff3bef75fe33dde1eb3d0fdefa1061f718e8851b05c3a5ed15dd498d17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

