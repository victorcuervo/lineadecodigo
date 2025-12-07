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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKLFPWWU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQWd9RRAP7yCUVeLUVfwHiSp5%2BogBAQEOkRjchNGjxgIgMU1VbGssxIcSfUKai86nzAsp%2BqTxSKfnis3b0pxCG2gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BJQlq4h8WzGfZSRCrcA4z5e%2B9cBmMOqDe595%2BggRd2XGrep3sajpnx7eOPRiu6JoYzsZA%2B%2FLtjycCpv77Sr65Cs%2ByLpBYZwOONeTTFZdo9QW4SCEhuagRIp0VDWVmX2S9XECYzmAt9ztan4RF7ico34dAJ9PrEQaWSRMXsPYENIz93tGFOaHPovQw9nVkLAppb0RQhPc0LZFRVx0cx%2Fvr5wpf9U16%2BYgWX%2FRiyWKu3RSyBd7W8lmVrnFjh%2FmSSQkgpmM14rOBmHsANgSYXs8SumRf4d%2ByDvSnw61b3Bs1%2FvWyc16OpS5%2FKdpFIk0FUVMclb6MRlmxFUakVlNhHv1dj91NUTC9VdqxltyCLHcTAm4jDe7E4Gi9485HZ0CeHrx9qxcTXcKlZW%2Bd0O5zSV%2BdcZnSt2WGXGf%2BPJHwirEB8HYpIJD9mhJqbZjr4GxVDWNbLzW0FSbgPS4R1EISQKUaUccn0G8WWiosn5o4p7b7GXpc7qhV9YytAafn3JK9V6t7Oa3GwRIk%2Bm2Z8AT8yxcZdvDkE27ZVhrbtYU%2FH9C98yMJnv9W8V7y0Yl0SVeD4Hyzea3yJzCavgVqsTkW6cTpcink%2Bq26XvcfSqxDc0o3%2FeVZLSUyFs7smr2TuEGzicRNmYJR9aNlfa8%2F6MNL90skGOqUBuIVduPCrj0wkfPD%2FBQlUg69Of2VTdvuMVNXWYVSGAM1amrp1bbu%2B5qfiLJYCarv7IUpydXJ8kotuRCgCHUI2gfG1NAijwByz7TiY1LdFET4xnNafG3Q8ci%2Fk4WabRBJKLP2xxCWM6DWtVwJl8RVssQFvVC18AJzUHmXLbCiIotBP1i1PQ%2BWoCxlWMnHqh1U3Z3EhZQYAnGiBAxwgpbWfyjskoQ2l&X-Amz-Signature=d39eae8d141a1d426b4ba0f30a108000f0b9b002d5515cb3239e4ba3a7c0b302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

