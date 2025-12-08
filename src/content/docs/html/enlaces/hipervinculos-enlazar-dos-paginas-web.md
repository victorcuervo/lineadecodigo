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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MONDRF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6C%2F90UmcuvMvOGAqaKFqaLTrGQA6HwgSeOHZU7uGqHAIgFbL3ZOOqtPPf%2BFBVBNxuUGsDU823Fn6bZxq97%2BPdr%2FsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq9HJl9qcOp2aT4SircA8cW6zBW6%2BF5g%2BHmVd91iN9Qizxshd3h%2F4gbAF5eX541DQJ5b6yUm6vQMbM2UhxAoeSSxiGLziOSMUnRH07nM46dsP0UhAuCKIf41xCyuELhmT7hjceLWVmp2DDrE%2FBSChc2LjerIMAum0kiLCUFxrkfs5n9NfRCsYCNsdlsCAFMBhdhEebpxsI4oQAWzGe79e7WCgB6manZkj7SkrmHt4DhdaO%2BPlpIBMRECXbpGWrtGXXGPXiJ07RUHGxF%2FljgYzBzbLQgS96a1EsAac7NK7%2By6JZe6YI2kwJmtZDDry0W7%2B6Zf9i2bvY7ICrYxPExcxy6McR94KRidmHRp9LSmJz7X2piN46%2Bh0i7N%2BKhm3gMSSvrjATZ1k%2Bgq0RTXnqSh%2B7J3n3oAOKHbFISCsQ8X3xtZcULMuZZqzjdRY5%2B7RW1oTfMD%2FUK1H3BADSckbzM2yYqpRcw6JV1qYqCtUZQCwZR8i%2Be7KKdar9bCVbNiyUwn5Dh7L36O9WW9bh4WW2GY9xihiaKMCEmY2A6nDTLEaDUfA4gD3q5tAdB%2FQw4qCbt%2FvFWDWWD0v8YB6i6FqaHs2JJWVHG8lSc1%2BgFpdc1a%2BKDln25wyVGNLBYrO467UqCL8LfVduVHoMO5e1mMJ%2BQ28kGOqUBRiD0%2Fh7DsA0a4dvYp9QS54xxsJmpXBwAs683%2B%2FE5Gk4R6GHrzkKn8hJb0p9GQxFVDIgLPKFl3c3nwROQxGobsZVZdi%2F79eMZ9I0YkGoiZfMuFeqYpUMsFCPPPHMBKx7QpdNpHOpg%2BqJUxbmtMwQbJx%2FF6OHPPdhfBouR3FR00Fc0xj5evNorUvLjBj2Wv%2BQwRlEjPNEdK%2F4Dh5qVYTAwgNPd8Xnc&X-Amz-Signature=e046e679e9cdb4c0f19424837365065e0d5881c160ac11f317e8420f92927d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

