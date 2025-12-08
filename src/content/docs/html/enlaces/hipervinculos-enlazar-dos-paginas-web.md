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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXW75IZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm2aT72CVrRDkIpYUDXmCENZp6pITEWMKS2vA28cdpDQIgGhYkJ0EC7BgsolUxYMynsl7iwud6Niifl%2FbfzmprXmkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeEnH%2B%2BBQuVgDATuircAxfvcPCUvl7ipMj%2FKXx2QBVTWroyzB3b6F4wX%2FFryVT7s58SIc8wkEd0FebRyJjPPmkIf1wSBzf%2BCSxDF1cKU%2FL94mnyp4cYcBEqUrqJh5DNxY5x3GFk0EZii8Dia8j%2BynEKEN0NSeoubT8teowdqxeKQz8Xgj84Cfjs296dBAf8x72PwHm9Z6PnkA5OBTxw1ZXsrpnihFnsmHWr4cnF9J4gKrebGekD9g8OhdlOPjdXxUOunimrs3EH1%2BP8gWwZiU%2FCAU%2BM20Ple23BohfFK4nrOwKzEs1MZjZtWjwLcp5BGnuOuQ%2BqmvL5SvEReaAPIL1%2B7hEVv4xtRl0cRbMwphup%2FHtL%2FN9%2BN48E3PuHaRvuZSqOOsBZVKuQ7x1rgOjMdsKL17VyUgdq8Zc6E%2FNwgyjXVXFkW4Gu7CDJf4reWognzwqkXgqZIXSqLgYUbSZ2eTvAI2AxUTTaDn4IDALxMsd%2Bz%2BGHuYrQcvT0hV9FWthnxSrFpyaWo6o6foHppb%2FngaCkIvABx8Xa6ShycNlJ%2Bdame8m3uoAWSHdzxK5WCeLSrWv1YRksU9llyY2A9fHvFyryzw%2BZCj4UUlk3z%2Be%2BrmIy6hF%2F5CQb7G6wo6LI1cM%2BoHs95MB4AKWcRbuEMIHu2ckGOqUBCTVw9As%2FwZwKvv6tcVQxwsz2Y7io%2Bh%2F0KTyDXVeOauPWBaN4PmBiGi5Wv5%2Foo3DnyBfpU8XH0d8YYbKG0oZ6iN2iyhobJGd0mmcDjXgg8wp1G6oslwKkhG%2BfCApOuAt2Ii1M%2BsI%2BLeajiG212%2BhK%2FyurA6%2B4vR5EjVRYsFl3b2uXU%2BSNtpw55XSai%2Fv%2BtWFwdr%2FkKKStIT%2BfA9ZPL68zYgdA8ZfU&X-Amz-Signature=22d5adcc5160c1cecb281dfbd497fa75cf0cfa3b623873249a26e4c1e2587d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

