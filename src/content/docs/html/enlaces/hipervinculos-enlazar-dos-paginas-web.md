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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3FYLCR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0H%2BkX5sCBAPp5NLrrMchJZ19Q3%2BvrxO8QM%2BvtpmbJhQIhAIOvFehNyolQH3CfdwnmqiD3s3Xl%2BGVTpkuS%2BqPugJQvKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG1j60Oi%2B4xhTnCoUq3AOTjsWgoYwk6zN13GKwRnxkUXg%2Ff%2BKdJq1vxlNrf2jXIkrlF6yKlgkm%2BTEqamyhbJ9Nyts6%2B4ydpA97MYm%2FPrUOL3TpivEXSBsBIrVGNHqzfIZ1fECg%2F%2BQJhbhViLqncsuTGZI7prww5NL8vHvSQAO5QvMKAnygXLNga9jTkcoBPZW7KZJJFGEEgbZOXCktXcgFJbLKr69S%2FcsmY3uzUpe3f9nT6G2qpRsSTnjJvyIOY8UXRrfQ4Nr9tOnJaxDuFU%2BHItUwvD8Za1s5%2FDrBRCStEEwqMl2r9F8%2Fdoii13l0hIY2CJpt5D84I8t6rq9DF5QI0Beb%2FrF%2FA7AqDzrKsvChj%2FzNNiDtlWo1tJa67KNfyRuDsM1m3qi9CCDigKsZZUMb%2FUCT0z7Q9D%2FgCpFmDDUWp%2FNwgfo9KVsXo%2FwV%2BYjwhw1u4aLBi7LLWXtDJfbDI%2B0YDBvHvpSzascEN7dzrcNbdcy%2BdLQFPzmbP%2F%2BIv3LI%2BsxdhcLqpc1PesxhcfvoRbpKrTQEwDbQpMqIBQt5%2BRpA0A0toikgpDCABPRhE2rN3fApasAsHE5N721L9DTrvzuNLIMNX12mIhvwaoniKG1SbNyykyovkb3psi3a24QemLD1RcLbkHb%2FDSlMazDskNvJBjqkAT2aODp0CuXR3Uo60T41h%2FixN24eG4uikAUWCIipFA6SrJE8fZrGbAWA1%2Bhk2V9XuakP1x6Jxua3yixYTtO8rLT2MlQuO0QC6KQg6XTES%2FjrqDGDR%2Fxt6ywTYvlB6RKpM1ESRtvljZsJzO95wLaR1NlXhzPAs2Hgz7Y3%2FIsrSn6n2s0hAyrDoZkYP02hMrCC08%2BP2ViveeOI6FCJjb5%2BprmInioB&X-Amz-Signature=f0b52a691cce9e112675542c55b51688811503980ad778047cb271c0618f11ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

