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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLOGRGN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3dHSsDyfclj%2F1tE9PwXVj9B%2FWfswwyL%2BmE1rFZoj1lAiEA338U%2Bm26oQYIHWMLElUBdFLnajF9xF%2ByrziiO4ammPoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDR13aKz6EoTjCzQcircA0r%2FF6ry23AMHebE27FakvqY3BxwGztGod57hc%2BF6pOfzdMdka1bDblrU1suNVHMbgXein%2BfyeCHOyUaPtmIwuCgK9kCD4pXN4IDIhVypbPP8%2BSztaR64A58m2de5qTNkcbcDlOr%2FYW26dpTLp21Z%2ByjDS3W7eSmAKH1RQnSwM1IIEhwPiDSvBqv5NMotvBN0Sm12FFOo8eSxYinRoSWUq0NIpJy9cH9Uxr7m6LLHeIH5VZNWL9HeZPWwQGNDWx%2B4VMXROJh57QEMGUWi%2BV3gcwCO0fIfTKrfXRqcYSDvDU31hKPkFu4uF6tVV0hc1sJP4ZN%2By3Kfuojk8Xt%2B1upHFsDhfnpukex17GVZTfmJKv9TZxF6v0tGvVhNxE6pXEi8vKzrxyq3cITK%2B8FMl7essYsSm3lweOlqHRObLl%2F0k5KkK9%2BKp2RQ25Vi8cNILtrsGUovG5o%2F8NhPT6bbI0tw2Ac%2Fplgm5tpxNtBwANmBeliKYrUy2kECUfrljCcOE7tJWiC%2Feo%2FwisaQLqe%2BIdL9pEKJHqcL8vKNTwCdeKM2HDooMNDEg85amGhRRIpZZ4hCgtgXbM%2FLgvvVtKCnG7aQYeMe9y0rkfITcddE4Vbf%2F6CU%2BXHNmvO85VtyGuOMNbM0ckGOqUBLjlTWH6R61jpC7qyLiw3ouxRDbIjY0CgKFiMLgLjQzlmz5%2Boe3MSN%2Fy2oOpYPyZbm0Rr33IMsBdNfxph1BD7RA7aXRaKlZldIrfSeK8Gfo3DlEXquSYgEzEC5qxQ5graZEDBYqH5NojLEeoDfid8vxKuRnmiopPi5%2Ba40gET2d4nabNh04xDe9XciSH10xia206SkEugKSnV5RFYtxBPvTGbXQNN&X-Amz-Signature=8b1db15401165cf32c2d0b4ca390f156ebb82b9def3566740e0e09be43c5be0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

