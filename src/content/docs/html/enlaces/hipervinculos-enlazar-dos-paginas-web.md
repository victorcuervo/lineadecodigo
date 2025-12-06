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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2S5MIR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn%2FM9IjHWAXcEqadW0gmdAt%2Bmuuq5LC7bZMiN%2FC0TS1gIgNFyKpj4mgwZ81DZoD71JePdJfheuDNLOHosK3R2X%2F%2Bkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBfWiWRWCqS0v%2FUVkyrcA7VtadHrdhdvYlNLpBx4Zg3uq1%2B4dd3pFgAAlIUPMmM6bNK6oI9SuDmSS1w2Wvq526DszcV2CW3JsqXZLJxdwMXU%2FG6BCWY09b%2FUXLyVyI%2BWmEHC%2FTrACjyH%2BqjuJfv4IHO5C4oeFnHKFGUdKBhUkbp7MmAGPw1DLravPDauPVSOyt4%2B384SRiGAvCXdfNPriyOyzoIIb0tK6SaQ5C42AAb6j%2F3ylcISBn21YyktKgqHkxZbfrWt9wdwnbPhsSb0f6ybirXBxuPLhavVZc1%2BomBqx6tLoybpIdnGUu%2FkRps61%2F9mHZ6Uo8u03CY6ZwL84PBJ4%2Fs789rCIG14FbRm4kpJn6n30jL3hluidEEH3uA5eHcZ3Lpoz%2BfopQWfQmgSaHbU34otTOExccfQU86lYnws4bb4fF3EpiRDdRShWnfQtE4FzoLHRwzrDn00fdOaDjS50s%2FZZoaBIV04hrBHvL5BhQBx3aaPMG5MoXSny4Wr%2FwZ%2FttWLewGCypKbG0Qp0SAvIITExD0HzdQmqCo8ebtop4BFiMAgKktCSszjE%2BoN3pv8nWN3TfZj%2B1jkOROAYprT7iNMEsAUtiY9ssgZy5GxCJGxsN86yLGMteCik%2FrDLo%2FAS2p9NdVkLHh0MOPDzskGOqUBJFRJTBjKuk9RXpRFn52kHyncdd5oTL8FHnI0i6CbzQsTmNJHsEe22pImAtvE5E6AV4EaS5%2FRpsFwzMitNr816SrjzkKBZOPuU0VdlgBCZC5Gtn0f04ChorAIpOJ2jzafmcSNW%2BuCTFIrhaSw3Fp4%2BdrJGZQwhMpTZEkgmYjFvChZE%2FNCr85Unvnc49E%2B80kuI30PRRyUYEbtyn5AjtT6gILUyOXo&X-Amz-Signature=29bdf90a9f9427b277be27252043365fe37749c13919f8db4e6fca23cf0a57c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

