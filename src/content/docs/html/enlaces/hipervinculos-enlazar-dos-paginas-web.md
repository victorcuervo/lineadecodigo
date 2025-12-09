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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJJEE2PI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T232706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi3Z2BLnfpTwzeDqXhubCWqAgWrTyUr3fOq7Rm36iZ1AiEAmdSFIBzl6Tn5HPxUyyrXgzpuiMuC86ulxYMfg1P1lyYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIymXtLrrJINBUQLCSrcA3HP5r1vnl2ZuKM1ebB3m7odGuN9WLETbclsw%2BsZaek3knKiNbJFIlJ0imzJYVzQev4dP0vydeWUO45fMCY4C8Vfqa2JD47J7c8luKJ4a5yIwkWW0qShXs42%2BzSE2JTqpJHfSZ1MIewJQ16v0YSF8Q2tdEWe%2BQX8VaAj4DzQg6PaFaepL3cfnC6VAVhtdV80sPI6RdW3Kn1YDII94AgsqdiNQA4qP1KOxr1NtIsQsWwS43rovjTgbhibr0A%2FwglJgZx4gzzLMZfzNbPPhuMnDXdfmB3JTEmkQQe7lH%2B4TMB5ZaXWA9wWpO3w9xiR1vAgY6JA5XGLOZfZCVCHYIJPJsYNTBKRwAsr%2BEbfwl2UwfdQ4BTnRbFQ62VjDt3%2BGO2jTOnWsLI3MVnNtTfFBx6FXvc9smT3epQzQkDpqdvKarRjBzqLxSKAH%2BHoJGDKf0ZgY%2F0L%2FpDc2%2Fls6MN%2FPJYdF92nc949Bs2thCCOAGbSVZEixBxs2fnk%2FT0qseI6iQ6kppP7V%2BufGZVtb7puu7ZcSIEa5vEXG4W2KYZ564g%2Bto3NYk2WpsHcDlG%2BENtM4KISKQ9FJGWCcrAp1WhjSZiat1UglZENE%2F6xwu%2F9R6t599D08yQNXHi%2FiRHC2TBJMLDD4skGOqUBvdR29JDYbxznNQ943YXWbKEkpOSkk8GVum%2F%2BrxmU7FbyoviGkvc6nDkrAGHpqulJBDFHLt7xbPTxiLzLz%2FhjCoa7GKkAGEBb7m8nQC27f7aiCee%2B6t%2BDNYFS7gcmcl77zuWiVPV0wF5B8BVAHjuuTiKHlQq2xEdgyVdGVssvMwpe6biEVqTlj0KkxWQd6TEIVE%2FAuyAFAIgVUbSpWHR21TNU5ZUR&X-Amz-Signature=05e6b56143bcb4a0ee301e2fcf28644987c9bcb397ebb72350676201a02c0649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

