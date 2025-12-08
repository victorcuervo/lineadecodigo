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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOFXSX6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2Fk%2B7TGhSax9GfJmAwSG1Oi3F8DxoeN29FxYSXap%2FZUAiEA5s82xmygHqgP1OmUiuaLPPbBlNA8FWB4%2FRXjn%2Fg3dUIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF173MkOddLPfhHuXSrcA2tuw3Fsli9EMXmprJJ6YyPoExydeNwDD7%2BdBSo3K12EI5r%2FDGdfM3USZDaHbW6J83TfZXRLaf4foqPuDWPgV8LXerEcB6c9wmRpd%2FFmpl3By%2Bc81O8TC7CLESvrQZiRsJRLfTWFAr1EMslwIVt%2FchACpvzuZpQCcxdXby3sItYDyKuB9jNcdzD9XsH%2Bpd6fA9olhHPlcZsffnYVVRhpTnsxBrsOUH5KNcaENjiQPlxrDyaraN9Mv4FqaGQ5vSoBaTNOL1%2BwKkF%2F9PUkOLlTPlAknSI1T140BDgWbqDIvXzqkVC%2Bim%2BP1EoJtw9Im6bU23Axp7TtV9j6bb3bJKKIYiGsdQlKKGzIV7PD3QfPIO%2BH%2FNJ0y5qXKWCLep1JAe7bqpFZwwPt8z5ZHlhk7IHjjPLyJTbUuj4fX9vrYYFohevIrrV038mKtxThYTBFu4Y2JuVAgFP6uFM8Nf8KZBSkXTyFUXthe%2BDi7WCg%2BrE6d7QnSFkUpRTWED3pr1EV5y4LIEvJpECxYDlwpNz3u2rnjG9Pjmj0mUystD%2FEGl4dvTN5MqEVPCgwQazUaazHw30%2B%2Bp0gLnIpxwNtOifPX8qXC%2BMDID48mKJ1IVBdrJK3EwITZCNsSZTSRHTh39OLMI3u2MkGOqUB%2BbEFReDLEsItQxPgHQNx85K%2B6ifyz3EOEPUfW%2BbNq8TX4jDHuq7ma9WVwnx2U2v5MDu5x16Z2pAqPlZg1ARckFWty%2B1RTnFedtcYWDGPbPkSOoKjChcs9CKucSh1knKdkVPTsEAXM8OW1TnASr6F7aECB5tPdcXHRHveASvPotArBoJTv43U4JbFgXZ4nU1Nq%2BKtvYBdpPmVKFPJPyyhacNX0hkz&X-Amz-Signature=1680bfe1ebc02304663b996db0d191a5bb9b6f54d4510c98803b70500d1ea541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

