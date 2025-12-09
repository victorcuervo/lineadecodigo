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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZTRAU5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwAu84ttsHSK4tTMTYLRcE1vNvEhe4GYNbYYm5aVtH0AiEAjcIqaeyVq8CBlDRLE3aJ22HmgHC2wlqlDptJNmZJKVAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV4g%2Fg91AvplBschSrcA5MVvX3rXkud2wNQEq98ZbiEVSYsHVBiCzJyrGRuYqQt234dS7jLImq%2BsDNF09Ms%2FcfKvRHrFm7xdaWFea5HuPbY6nL5PgpSsHPNynhQD4CEVhKkI0raBvUvHxJfwBeBtru5IpsnMA8ajTZiepKejoRapDW7bt954w6HAOAnluxQetT8DV4%2FEzobjnazt4ldmD6lS6o7mM3EeTywUPJ%2BO4YpxOpMET6M6M01B7sDB3CZ%2FTB%2BOk2MKtzo2E6J%2Bpk5eAnlAe9OFGbXATBL2PbI3CpIhXcXyi7%2BFk1YjU55qi3s4uvKQ1KIMYLkYrHhjoQnNiZS5w7HH91lyYRtE754j1%2BEyTM9ZAMBVLY4Lc0Nv%2FxBMKjbkRg6koRODEI086V%2FO25hNocXx8vEqBuJD5bMCK9ovZJop7lX3GpQzWOxrHj942bawTezzS%2BkQKdUxVapeSi1W7AyPy7JsueqMaj2zJJUupfwenJr6HNf0%2FFLfCp6ufW2j%2BHwS9EqKE3xIq08t5LfgqxpxHlV9Gl804ozNIEBVznGUry%2Fnb60XWtP6%2BMnokMrstjOKs1R4JvfugfWIc7ChqyIRBU8Xo8xe9PT%2BO5Em4V6wVr%2FxyKRREExUg%2FX36310b7o%2BMtMlCg9MLvE38kGOqUB7Zm8VQDlkfFfWImjmUKu3zHI4ut5ZIOeV7SmVOaIeOQpxs6nbGvcgDZdxJziLGUUnAxu%2F6dHS7baupb3nnRqiz7GuC4K%2FegKi2ukMhghkrf%2BVsHLJp7RNhkAM8RCAUQnFsuuYC25LIt0mOlVHP5NrFbbeCvTA31OJ9Jew6JL8GTn5BtvUurEmalr7%2FeUXlJbVhLJs2ltcLFMALrhm%2BoUJI0HRhD8&X-Amz-Signature=8979183f59853630341c101258be277de7861d018a58a3b0d98d6e7eedd1b15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

