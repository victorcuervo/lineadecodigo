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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNIFVHP4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIDq1ELlvnmzltWxgEI7erNqU4q5KQpWMq8eK6q6LtWLNAiEAt3kA3AE2QNV4YHLRG9qjEQKCOwEFNqmQlAjZwxLV7lgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJsOih32pxVM%2BPnCTCrcAy4XaaUaDswZ2QwMiBIEEC%2FE1ZfKdcKz%2BS2rkc7i3Qf6YGir%2FznrDNGcINFAApfGCzkJrq0HMB%2F70GFLHEkAwDct3leiKbrxTTUYJuR6AzfvSMGOQPWTWnnwdRdOXVVYRLRzbJJVOpwxXF3ei1XjRK7xj14cocsC4TyD%2FgLJdH%2Biey03CodWsqRoaMx5TbaYXc0oA%2B2y8RAWOgcClGlhBK4Ss555FEGpT6DDlcHXvSbvDlhVoJLcS6dAFbIQcJ3vlts%2BM39CKXmwP%2BFdVDTiTa2LzRQU8f95roJKHfF3Hzd0ve%2BwgSpxVPw%2By7Je9eca2rlMKSQVvm%2BgBIiLWCaIlQhq71DSqFCT9w1NaX%2F7GffuFm0FmKG2it2ze7dR09JYI%2FWi6Tup4ox8ne26JpD7khxM8B5amiZxQMpcQotleYNR3mQDxdE5oQW1aZkMj7jWzJvGmXRbUI%2FrQ%2B3q08t5mJjGEqdMJAmYfbuAJKH2vOLd8zaKf0Z8pmeMLYcXDeHki18%2BMk3dDHpXrPzgwZpjm7PThGQPW4fO3IfaD8zO4WziDGSNSNNUURE6KCEuzDuaqD9kRj9gRI1Lf96kebqg%2BXJwvdbNuk1Pi9KCZr%2FXyWK7uhwBpwQf55pesVODMNuExskGOqUB2K1k0XeN8Gt%2FQXDIDR6xULDhVI6rjV1Db%2BglqK%2By6MyJC5X9blYag%2BUOnKyOMrn3Yu9fQReU2%2FiWPYcG%2Bh%2Fpt725LjUg9fvCNjIbTY4zawzJcrvav6bgwkzG%2F%2B%2Byc2kHSRXz5ZY4CRz9DvwfgZjeCrdcqbLu2tnjbMT5z%2FOUZoGBo%2FoqhmIab8eTUa0UalnA%2BrvZFerAFdOOJQ77sPGfpjmBNPhx&X-Amz-Signature=7a0d9672676a4e76598d70388560d0637f86c6bb6e6ca4f3219b1e5582cf0e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

