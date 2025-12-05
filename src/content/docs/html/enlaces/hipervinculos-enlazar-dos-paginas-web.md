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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDADC2WQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE590zrxhN5YoFlsWrgchnODDwchRuPQ4mu1s1fK1stLAiEA6mqQ5PhDoezALcB%2FHPhWyw7J%2BMVWHjdgYFhlB8PfGAoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEXE6kEjHuNYsVOxgircA5LilUIwy0GnhpKtyz0ROZR%2F%2BS80oTkDc7D6gEHOMBgAR71jY7oEY7Hx0QIVjeZ51jBoeVYMdcOhuz6Ajux%2BgSqA2xEV9Ftc1ChHC4pbDMTjAW%2BAVLMmdGdrovmeH5%2BsDQAP9UBdUwRClRGoLsXdY%2BXmXo55S7gQqvcBOD9E2dfIqdLB5OZ9HOIl97ZLBjmXGM7UvFuOQWVtsmuu2jpzT4T6ZZhDIof2Feek8VSUGcSUZmISAAGeB2S4cajOx5e1Bwcwk0VKG%2BtWFkuAxKxr62%2BUqpRtM2SH7Fu2z3Ga%2Bj6hordSZPtzN6OVg1xu6eAIXvpJcTfZgr2THwA72QtfibZs1NlPPXNIXgVftZpVadQpUPg%2B2u05JufEaljZ%2BvgH7PZAOpfA1KDHq01SXZ57Au2D12%2BmVBT1fSSFJt99f7rWZnCb8ypgf%2BhyFHmrwU28eqp1PuYpjDdwU3d57exhKVfL2eXM2krpu1xc7Rpak5MPO10NxGR7Qwb4kBXSBlyLxlo9ULEByQ9hK3eWD3QaoVT4%2FDO1MmDDBvz6Uk2Vm3wxzjtnthfwBjGN6Shox84QsV16e3G89m3JnCk1w%2Fxrsp4iQ9i8%2FK4CgHed0hVZKyvC23Fs1GQ6btwIrGPBMI6yyckGOqUBWQRf%2FAZdT6AFGuGl%2Fhqf9TIWqoo5G%2BVYDgfaxwJEuK5Qpe6RyCKM92O6XWt%2BYPMzwFeQv8d4fYianzIyIqVH0fOY7fmzzIHv13%2BXOxIf%2BLleSGZHwtfGsaEjCpY9VP%2FEysBFpAGADwoa%2FzAJ4cuzaK0Y5Yacd%2B8aMvhGNR%2BIMetK%2FHoBRnN51dGlmtkkQtzq4R0UT%2FUPVzLgW47aXYLIT7PI6sbf&X-Amz-Signature=579aab570ac4e6b3ff1a5d73d9c967410ffcd55850b31638bd50a6011ffc2e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

