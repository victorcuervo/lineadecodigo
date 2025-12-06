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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQLZPXBQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbWLvu69EBjMd1Az39Xb5MRkN%2BzoAfZE8TzoAtllWcFAiBI9dFSuSpPWoSHBKDHZJKHG7mPP%2FIC5WxsHPsi2RixxSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMCuUTVkEZesjUC3C0KtwDm%2BQmlhkzTCnFDbj8odpFUPasGKXFEMEZecOavIWmOSURxcGo11jOR%2BGKV3t2081skGfr%2BXFR3%2Bou7VWgHabUTYndJ533UcT2rUG1hs9VyeTRcogVVcALwgCRBCRkqVYropcuEcmlEvX0kznMHkiCpfonhhFdL%2B6d2pOa7VflumNYUpbX13t8sFRCwaH9uDluhz4Qtd06bmKcM%2B0fakV86TLTKlLd7400%2Bv16rIObo404s5YGqQ9OmlSXt%2FJ9fjR7Ew%2BMw7jPeIikYYbLOp5H8vWQhgtileuNQJRVGJKwrf9wfxv%2Fr8yqTa1JkKxtnP5bC71zfwTX9LkE2h1U8doSYeUQu0YTr%2F7HcIxcMKqEnpG6UISLqeEWFVZbrLlxt8JaM6Ju52VcpI6pyoDshguCQwnSJ3jM%2FrEWOPa1gZ6nDXCY%2Fa9%2FMBo8vZ%2BPxZ7obbFppDez5yc4vqAWcl%2F7fdPCUvaOdov3Hynti9r0v9tzcT2A2v1HrG4OWCQi59epJ%2B9%2F56qNCowcg2hcDkoH2NuyPAPIauF%2FbxXl3vpaQMI2kTg2Bn05%2BaRvzsuPyeU%2FjMl1bGwKTMQ9%2B3%2B0R%2Bw7o7vTT2KpbGakUinPdJrsvuXqRm0ie%2F9EYOvtln2v0G8w1NTSyQY6pgH71HTyGUsbTvDlpPjz6nC%2Fw4hmstlsy39mb5tvN4abzsRXOVVM0FGWLHdzIkyxTYUn6CUCzzYoYEklfkkAxmuSnQyHU%2Fsea%2BYqIxv13UvkQEaZGo4gnlt5aNSnrRQvG8Bh%2B4RxeVZ8SlBpB3GmvHpWImkLyAclp%2BgxyNr2gTw1%2F9ehyVEnTq8mNgVzq74dfMsLuRurggcSabrQnRKvAi%2B95Np6Uq6R&X-Amz-Signature=997df3c0b7f48fa8b68d699710c3d3c24232b02cf8586bf81afca5fdd250fbd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

