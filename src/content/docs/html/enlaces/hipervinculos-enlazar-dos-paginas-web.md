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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3SCT5L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGQ1LtH%2BZwIowew7i1iNY8ub4Ak8kF34gidrxqY%2BNldAiEAj3GfDqgURHKbthdpjxa7KtlruPcIsovTfhWCY6xPZ%2Fwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIMc5Vq547Bi9P2t3yrcAyzxU5RY7O5r4jVGmllc%2FWY5yxFToabw4nKpDEN7zD9HL6ICWmJTe3iG71HqdanbjVrhNoGh6YxuOYy6WgU5lT5FopK91%2FpakDkjgb6PRervzqyLk46u76CmJKVXwstdwpqSMfyGCi72UtgN1fpZzbNQGpNZS1Z1eJRqKPh9iT1DOlAn338POw%2BPIMubuKJXsOfM8%2BsIoD8mRMEESPUYj%2BlWrFVyXPU94T0S%2F9o7CX1OdvauwE0VzKzh%2F09DezJvt9EDIfQgF76634%2FxYm7R6b7tNOjp6X5Qs3IKKExS%2B7ZGVEqJ8kcGtrL1R82EhYGJr%2FhWLVhxgmZ%2BR0h1CaO5PG9Zrz6DNfvirIbX8mbAUUwj%2FMOtgfWgtG%2BrJF%2B2fejEM2sDfilS3r3ZiaFwTZwH%2BmtW8Xq63cKs4huzo%2FwcMKTHVtey%2BNIDHjHpF7PUCleDTefiaqKnHAYBazC%2BmBh5ZlW2GAcCRHlMaXRPFo6Q49sCZ6pxfolrXaW6ZsyzDVa25gWtacj8CzCD8IOMaSjtH4shdUbBW7ippWDBtT8nnyE1kcRVEVTGOYAXNmdmdm6NL46Wnq%2FGssXrFlzR7bIRGf8T%2B7JlOaGTkRvruJORg2DQfRzP%2FE6bcBXEGaW8MI2nzskGOqUBgTxXjSkfwDjw3NxJS3vwKEulHnnOA89xC6YKWrh46SHxE4wOk5NCc47CK8xlGnkY8bgj%2BnEeAuw%2BDm3Ks1SFgQooO%2F4gyJbuh%2FAuzIzFzVUHPrrqnfZ2v3tSeTQNFh%2BViUtmeBvxAyivPSp8MDDuxAZoCi2WADGWC7n%2BVxpkrth0DYexVsR%2Bi9zoNVM5kgbOY%2BIdaY3E4im35Mv30SmiU55ke%2Bw1&X-Amz-Signature=4063d74849131f376716b3abe8d7031620bf20b1f588a19eade9368957d7c934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

