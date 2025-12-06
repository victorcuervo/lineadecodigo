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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HO7BNN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG8bRoLphgI424GRcQNrAM5eIiduesyehsi%2FONsY%2FReAiBX5eeCUD%2FJFg6CqGfWlqfrl07cj7ik21rFJ049D5lWiSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMB9S4nMffOQNi66mOKtwDkVfyP3tr9v72dq%2Bss3euSq6X5j2EmFkaY6wTl578DruTyXJThGH1sDl4serSJlNKmy%2FFZ3JJtT1Edi1sjbO6xMq%2FJteMVHVXrIPXxZ%2BNHvg87RzsX2B%2Bbkwdd0ExAogIHyGqc9xhNSg9%2BGzAP9MzhQN7Xl3HC7AiNegCWFTvlkqIzevb1ookmMXr4JkgkTcBVPmYFAGCi%2F%2BsPscfH%2F%2B5rjbbU0AVvaWE8gzut1We4ef7kInX3UgmtRRnqgjbSdBsoTHBECx2eJpFe%2BUghu4HmFK29aCBC82Tr9pLcGx0Pv0WTw8wpmWTR49MkPxxbs%2B33zI%2Bhs0H1i5iXR8A3zBbc%2B5Fv2Uvt5q3Kdt9z6FWYkwsPcOH%2BpYLcxSRUWgVr0xXVTHD4T2g9wU3pZ5PVFjjcXdLsOxjd9wofCmWDkIdIbOrqvmJ7qpEQuf60IDr%2Fhr5qJZnRY7OsHIfoXMe%2Ft7HtPG22HvbYWvn%2BUZ%2F19%2BoqH0of%2FiX1YsAWWnGZxxTVV3P2ItJaRFaIhS%2B7pJovXDPG3C4Evdz%2FKV0PogEqN%2BpY13t44eWz%2BFbkNvEEbTzQRJ9ixd0alJ3UxV1cx%2FkqeeTPkpsadTHiTzy6%2FO0xzbz8My37Esh7UILmI1VkoQwiJ%2FPyQY6pgHyLJ59Hpem%2Bs7XwznVJgh1LgDAq%2BcDWY2s8vcrYpGAdNypf8GUkDjohfusE3jZF%2F4SrHcQwLuy2TIKaHghGj%2BWFFPqYDeRemwItcQ825%2BwXYeL3PZHpE33HBPnLTx8ICecuh4XEL4%2FrOH7qfKf8kMsH%2BC9cOqkjw%2F40UiJkYHnw7rnWv2Amlltut3Plzaa1zQXFJiSg%2By%2Fw6Iug2oaADfroVUq0l%2By&X-Amz-Signature=d0d315f85dd288c683bb7422db4dcc61793b0254d5e8cbaed94eadc7b8152bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

