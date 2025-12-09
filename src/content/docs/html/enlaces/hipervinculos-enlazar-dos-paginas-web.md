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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5LANE6D%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T191739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKsnEQiCVk1oPnxuaaM%2F1Aet9U4RKdUIeP8uZF7lvqAIgFcz6Z9XYzz8miA8xZVdJfffRv1F29LOYvERxQCvsUI8qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKOAs%2BI05nPP%2F1RNCrcA5qe87pCmImS30JAGLQ9at19oZWUyiklnoseBnlV%2F5n8mY8yyn4zPFGCQ9hEu7hj4pfj6DkMV1s7EXnPA8jSC7G71Wi9cfgHgX4tXMhp4K7Mskrl9TT1BPUIwrdVwn2J5Poa1CuI1YSpvoWuivqXmVd%2BA%2Bf%2FXsrlesbo66TKzhfONydxSgW9izSy6SsM1HgWdfyuBnBNHI%2BippFvlda3mF1OgP2vrs3s%2FHZlvT8%2FqH7eJo5lDRq2zj0rgPLagi8QL7Dv02aPKZYW5jMCRXrDn%2FRJX5PizXmPDRLLYNPT8%2BkR5FRKL6m54ktu5pq37LXRSBCifwUv%2BZbe4lxTmuoY8anKR6s4nOswlY%2Fo1HKIAbc%2B%2FzAF1TIhPjit1lx8nbdq2L3%2BoOhjkEQxxPCf%2BdAZ0CnmMWCQh%2BKGIC1f6BXKeX2mGad4lMAjv1%2Bu2wxcuggzT2PsV4Ft347dPprE3Ejy4HM037vPn2ORV1BUd5ucXCmSMSihJCnjpuby5AMFlfBIreEuzp2dgZNUN%2BbfpzdqmUtvZMJmX2DB8p3bu%2FRAjvrIK7bBHn%2FjGGTQEfeMasA41rvg%2FFoFO5c0AinJyOwMGDk0zZoS%2FlcH11zFST%2FJj%2FSOb%2BUVu52q9sZZLasiMPne4ckGOqUBkxY%2BXz%2BZQg1MLwr0Z6co5AvD%2FgOYtX887XJSGvdTQo5aMNRi8o61wLEF09x3WtSetbaWgfyj2XYoAp7sn8G4RqOzusIj15yW3EDBCbSrMzzyXC7qqBRHxeH581Tw%2B9SCfmWUNqOHeaSZFFoYghsN2k0pPd0lEL1GRLAJq5uEVrin80dreHboI46FV4Zc%2BqR4%2Bh4r%2BspBKhn1Hr7xx4b4Ri6eiSYl&X-Amz-Signature=a009cd353963eb89327942029467d8c59eb5a1b46c162a69ed6f9aad1d2ca53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

