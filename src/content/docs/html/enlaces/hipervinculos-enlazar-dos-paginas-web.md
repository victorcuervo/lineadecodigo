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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLQN73U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQD%2BYgr%2FwQzzyYI%2FnC3PYyvwRIjj4E0f3YXW2KtluLC8DgIfUz1OjjihrjofBXj2DFbfk9XINKX1tS021H4LusOWtSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7Elb23ll22nic2LKtwDNhVgE2aejLBYM%2BRKtRQ%2BXsJSKD6MjHBkOoB2PAsVjTluHMTUzsu9nXYQ2RQgb2Havt1GxAH9fAj8n2VPXrgxcnYe7RqHUx01YAU8NwRbSIidhf5UlfuzTRAug6Tv1NVSB%2BUWRWYnzZFHXOoMGI5XBH0Cec6oyj3pOjQoJHfroNc0KJKq3M2ZtHv85UZQYgbDfLsEy76%2BKe3U8pvJLza6HGZSnVYrrTel%2BPFDsN5%2Fc11zpPxEsYMU34xuNZHf1PWUMtTD2BeyqlHCpTSVEGnU%2FcRMv8CX1I5xpL3GGVNX%2BuFbqWg%2BtqIqQa8I9WR0YKMJGjBIn%2Fe7LFrzdb8TcrMIPJ%2Fs%2BvDiJ%2BCddBEyrbz1zNU70oCbj20yYRHGJHNNolFbSEyvBsUhqrfYcOngnZ6JP76kqCt6iNbfpUi2Ms%2BzaW725bYM%2FGY%2BubgH4proT8dSIlYBb%2BYZQwmi%2FpQxKlyeD8xwsC1Bgq0Yyv4aGHU%2FKNdNrNadTpOSSc1HpOZfbTdm%2FS%2BcuoiBJYf9%2FSBgQaLzIBvtiV4skvhn83NuiNSm8377Wfc%2Be2yEGNjcouz2AYE%2BxdGbyD0ZWICmD4BMCogqJ8v6EDPLxPlBtjVpxfqaY2qxJJCafCHCGiyRuoUwvv3SyQY6pgFJ697et%2BlHgx0K%2FbiPbCk5MEmkB8EHadGf8OkvMUVE4drD%2FKAOIayNHQ2uN1Wrn%2BNYYntCpit9dT5omWg1a59NnOYeotl4z0L4Ec5mXC6swMWBPOamW7HEx1hycWVv7bGbE7422HJrhPHIn3m4QjESSpY94Uy%2BYMskyQzk50FKOcJpEjNl0YyC%2FFvsscsMLxiUmVGrEiyLYj8jcClRXzkx8zYbYs4W&X-Amz-Signature=2ab85744526129b426c5b39652f924c1f939a6665d080590bcf6f0e304c1a1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

