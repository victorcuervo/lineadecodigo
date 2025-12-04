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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4OX5AA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDWL0ZcTKDEtt6JI93oVXNILOL7M6LnwCUP2Ejq%2BrpevwIgYdYXZw7jAEaxdxlRAO93U31ROoqj4TUx1%2F337QQ69cwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBawWi%2FC33Qd5eYLnircA2n2yo%2Bsj%2BML%2F4%2F23aJQcqToISRvIV8QdnVMPFeFYGugVpH5ts0qxIiCaayqGQIssxhYyBSkRQF8K4Gk6%2Fo%2FJq6t%2F8BBYEuX%2FeGO2MP%2BVxpm%2BR6cUuTkeBhN1NyTN9bFkqQ2RMbRewQFxNu1%2BGlO0Xi1fxd68330q5Fwre%2FHlDp1WcwbCdH7jZkFjl73QnSj3hbSfurb1CJTrXmUT%2BB7yzdNbbilV04TeAiCDigOC97ewpkp4TlH%2FMbly7Zx4rOwn0xsj1RhM69AmDrCg5JAOE6yBaZCp8rnFWWMM5iTk2WbjIAKOitWsbivJ7NdCqT98Y4tLjQpbkGJHCCudD7%2B48gJg5%2F0mEjEpR9eT88%2FVAVFT%2BlqG63cdh31TUtH7%2BoC2SP7hhxbfR1jpXNA7uxL7YtXsxcOhXrcUKZ%2Bjir1qC2dbPKD2YKzN%2FgRu8eB1McOps70RJkYprbkaJVAmyVxrJjz7vgiODSDSrxizeGfOQKPALJGenMss%2BY%2B9%2FF5DjmNowLkqaF9%2F0Xwgsx1SXBJ5TDhuwyd8fOYOvaou%2FNbFwpErNf0vDT5yNa8ASq%2F9ocppCVxjM3tqlGq%2BEOCwneAVPrX7LsyK0urZAXDJVKcQ%2FjPF5JtcFS6ZrOkYIPSMO6txMkGOqUBLVFavlX8qS1dhlwPEbSliW0fBW1HUY4ij1Y%2BgbNtleU%2Br7MXpjcif9vBxPIOtOLELwcmyBDJaKhvVtMXPvlAOyVJ62pEKavlkkSOHhuA5x1w8TVE340z4cNWjlHBO41Dkp0HVoejPKIYmv%2FuL%2FQkmXEaj2bCHSfZu0TxzP%2BoyzJMxlMPGXlzHikpMNjK9b3frXwnaGfr9fNrN%2Fi6uGNYLf%2FAjxR%2F&X-Amz-Signature=dbed368d128888b07c077eb0bc313651b2a6473886f5b7eadc5f84ecfd7b6522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

