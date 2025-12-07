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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MEI7SAM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXT3SwmXP%2FEn4%2BmfNFqdcnCt%2Fux8aJNeteaGcoZyZu%2BgIgJAFpxbEnxu5FeKeuQWUUCoWlOwj1bWkpsMNOcxhnrCYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUgUXj%2FouSCjHvgyyrcAythuL4QHSQEOq6g9EBFa5lrAVn5NVZPpcVayh8419nqbv9ncw1PRKs20CTAj3k88h7GKxbwO0hMcj38lLK9Q4JmBjpbQi62H7IWm2v5ptWYB0NxA6zb9T9%2BaYcx83G3zC6vsKXOpFIEd6uj0gVbkzD2QPlOXjz6gVwhMNzxSyzm%2BnuNeG3D7qrzL9lxvRLD%2FF%2F%2B0%2BgfcKUuv4dz4Hy1RLNwiIYA4mfR9a8Fn1CUd%2FxKV64UQt%2BWJxzAOv38jTObDo3McRh1Hp6RJf5m4rbKEfJMz%2BeU6bxpqO4hVTiPj6Jq98EPdIktd98qrswRTMWzwaQXBkwjFnCjbCnKoCclGG4Pw5ZxMD8YA8Wo8Wxccn4gM66MaNnK1eAKtnN41h8GpiUBYhaVYS8xcuyGyKWup%2FrbzrioiN8ELVSPZ3dDMryoLWKVl%2FBx8yR30IwpJ8k%2F5ShmJrO47azTpFduxRLROfS5fqFJpUjdFeJ%2BGqnFhsZjz00fkUCuEVS4lU0NQofKyNf6dJ1NLK78wBMfsfzInDo9rtvkAsCAI6m7igauycqL2AIkPpk88M%2BzjFV0fCZO91qjmmv2%2BWpVxlkbkofjDgemLZ2S9OIQ0pKD3UsxRpDkEiIi5w8TyfQ%2BBbwRMMWa1ckGOqUBP6K0%2FSec5jWfBqfKhE0WoWsQ00CLrh%2FmM%2FrGU2H%2F2mOr0NVdpPqQTk7fvtPip36i5cU%2BmuU1ZSHgptTXvk3u2HdU%2BhLYt37%2BdsXaPWvRZQve%2FRHNqDg8JnDqSl295wzUoYw142Z%2FDNmJ%2BhhIgnexvwaNpyT651IDHWuofZCROB2aCuu2lpMwYqgvnklb06yari%2BUM3yhT7w9SCC3o0z5U68DJJC2&X-Amz-Signature=eea0c32149a2bb77ab2257ca49f5e6d4d5ba866a048998556d75f2fa81945f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

