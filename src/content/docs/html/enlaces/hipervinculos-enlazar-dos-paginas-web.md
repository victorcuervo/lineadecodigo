---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5SQXIP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T221903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdL9B5UPOvBYK5O4qCjfvOHcTao6UYn05LEeyyIJCJQAiEAnke4wctJHjzOG%2F2VCJfRXRs37MwAdPrW12w58yl%2BV4kqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYiojWNrJTc96IpvircA4n93PXyKAoTy2GsTAn8Az4DSbgwbp3Th6YE6UImYYqH%2B82iuIqcDTOJhKrh1%2BadkhJWBpXQPxoKZJWdtJi4qSunm9EBkR1KoOe%2BoRWnwMrxzBkhR5iSYz9OqDKQ%2BYOOFo4hU9U%2BUu%2BdApIlUe6IEqCN7GQvV5cz5Z37I6xhmNWOwxokP2JskD0j2P2VT5MH4y84y84WkDlyCUtDCaGHmvW2pSiZG4hzgzsYP82LeOM9yJgyR3VS6zrdZ6EwnxA5oYNPQppomHXXW0Kzu5DoIrUA%2BsyB5rKi0lFbfe1aBQGTpN7HYNDcg6eTzoSD0f1DSMWtYdbz55wmVZy71WdLFvYRXvv5kMG8BFZ%2FOOyWdLLWwsFommr%2FyiW338jHKcJ2BQXZChbIAiljCmtDJzY6n62JvNHNMuuH48IEApa%2BGcOmxnPvkuyMFWQiFa3sFPmruRnG4lqPJYRJc3Ga9x1AGzwrpT%2Bzc4k5Ti4crwhOeplx1tfyjgni5G6U%2F%2FE8hWGAOiHj0G4xAkpWLZeAhiia3Ic3FBfoPohHg1ybhwgxTGfh3za3%2FP6iF%2B2hpETDLe5QT5csQc5borFBuy%2F1TiJyy6S128UcC1vCDG69Ff%2F8X%2Bx9B%2FpI4Vg%2FttIXOPx8MN6e4skGOqUB68VBl2RxO7X%2FhY4%2BGSwWkJ7p5AFhsxrXhChGAzLm2OcOGpd7yijSB74gNOE1rKD%2FBtivVL2HgpvIaao37UqPtBKaVhMivYkECi24kkFhBv4X5hj8a9RLXh49eF%2BUTN2wnUR02MJ%2F1yxKBwchoW4NeTFN34a3%2FpGvBKw7O%2BaRuClIQhsx7A9jeb62geRPkffd0PHNG2MWkIV3LJJGMhQu6B7XJeOS&X-Amz-Signature=f9b40a2830ce23597a78da7e3627882157a6bac6e9144e7e3f92a89ff3f53999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

