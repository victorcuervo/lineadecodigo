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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCMYNUV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFide5S6OyAlXS7RAHsENCNBg5n6wInDrJ3ULrnXtxAgAiEAmA2cAwOD7i5bGXnO4lcR23k59ZhECmGO7zKM%2FtM9hOAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHDzzxNHhsW95GXjircA%2FeX7GWLHZ5MYG2Elzb%2BHLg8swH1BL7cHaXeJHPmACyI6ewkBn9qGvg4WLH8DZSSI5e38d3bxQhPrh7zN%2BQ3TEpxkjUxNIp7B0%2BEFnMNvXJlBF8cJx45pSeK6XvtX8OcPD5FxO8WLxQkskRE6IiDrNBJmYC%2FRJa30TH4hGq5raUsdaUIXhZIyPSwl%2F9L7cMszj1%2FK36iLBkJ6JAFDiKjTEJGHzOzh3sacdMxrG9AsOHfOrqY%2BSuK9x3wkLeINEwRDkyuAbLgbH9KP2LFy2OHQ0ZgegFAOPjhQZb4zfVpvmECaTfs6Ea2PBtciR2O4sTtqaNnBBiSNplutriLwMSKRgr%2BbJ1ws1lAcd2SPo90sOYj4Z%2BjPtbg6sV9Fb76tv3Eu%2Fr0O8%2Fd4uFunJ7tnbwt1roqyWRMV%2B%2FqoaMuBM9sqbAt9F25qwunTbhV3%2BHn%2FbHk%2FATFkCz56I%2FmdI%2FSbPDc9zMGxfIzFuNniygGRdpdDo7F1xRWTTdpomcjjbdwfK%2FBXlq5to3ZzYzsxd7%2BJnI7CefAWdemJhaLM7qF1Kay6p5Cd1AzE94KBIUbbYlaDIO6KA%2Bsda0KxJ7zNDr2GFlgGxpS6ENhKo7QgbbpxmS9HI0bpjFrWI5C03vq%2BEfqMO3t2ckGOqUBzAlzHgsvMQKc0D40NNBoW1icFK%2FYhVcHNPw7t5VysoD3bmjs5HPpwqqdEdZAc1Usis0bJtBKoy6%2F%2BqhMx44oqJMcfRvv%2FZ35LdjbMrlbh%2FT9gB%2FDXG70EmVGH%2FmUZ1VIC%2Fp9RHPJtZpdP5NEig777428hrKiwbnck1cBoNtLLtHVmW8ZjT14n%2BC4yy8kY0hUXc3PMlky%2FKmUV19K1svmCuXLK5Vn&X-Amz-Signature=d2b35965a66d1f22ff728073becb21581155f9675196eb901654c3962c280610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

