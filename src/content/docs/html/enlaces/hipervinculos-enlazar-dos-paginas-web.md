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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7663GE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFy2zfOUl29iC%2BmxIJzvl%2BpSPoGTPznojiNot8aTjMBAAiEApMFGUS4a8IPmNziHbHAxJuiNNotrWYEKgMvgBWeBmWkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLkOPbo9YZ5lJy3KOSrcAz8FVw19MToYwBHr9v2a1oe2WYEKU3rxKS%2FVoNs5tkEEuvr8%2FC9TFfi8DiRhStQ2qBjQ%2FoiORywIA8vT2v%2FeQfFRpqbmNLHD2s6NvnIcMal7zLDmdSO6gkJKhIh9VOPXKlyVxiVaSaMNFEmMHPmdnkJkDlsF3j901GAUZ8ZG58M5%2FwbkRkvys7MktyRqIDZmunozwwMCt%2FwS98qd5YCDLEN%2Ff%2FymD08eLGtJ3GB5L0zr9%2BlhrYuwyVMuSu%2B8oS4CrzhpAQGdiAieHoDYDT6FQfCJxPQRvPYvtBOeKZV6cw%2FFck5LAMZyCCFcs8K8X%2FD8gD90vBBYICzobjwUr6nduF7XMbtVH9HAC4tCLtojOfbZROIHbWJJORzbBuXyQ2vbH6yvWS4aqndWTJfLr1D2cffcUkTmFdGUr%2FxTsB3D%2BJyuuCmbHTsbXjzNtAb2AwwTaBb8IVE9zYG8xFrGRMOs4c9SssUbpuYanqTyG3T%2Bf355EQ2%2FQ%2BysKkfjq2rk16q6pkjmWsUnhbUfB5Vm4UFw%2FjENX8Jl6qf52DuoFImgrbS35DXTC2r%2B3QQStGw1BCYoy96%2BdiRgdNttObLvaN8IJYa9U%2B0u4OyLl5M8uMqZQXlgPvRJeQQ8FGVSKAIMMILDyskGOqUBgKJBZntMUcRt3qwD%2B8NJkIwEw7jbCaYeaK1w%2BLAwgVa7FCLPomoYZpGubRdHgys0i%2F48PG4pdzL247MYMPq93cGbA5e3RkJ2rJWHOKQyTZZFSN3J4lJsN%2F827qjJDgOOxfqTvTBxWtFB%2FxUlnhTxJr1jd4agJBSK6fhlQCx2wPVoePjnfcm7hyhxGn%2BOTPtvsif8tljJ8rQQrWCJgLbStioQWy2s&X-Amz-Signature=bea53fb18b3ed6148b7c9f4a12d33cf692ecef064cdd4e3af2562e3d2bac94ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

