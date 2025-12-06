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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEQBWOW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwfvILWndjd0mORJYCJyJ4phSYzm6vt2n80UO8kGfthAiEApbvyOZLVIurYexVTUPMEZP7Em5jiAC11fJWY4C8hT5Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDH%2FYLsY5gvC0UAm2tircA%2BQkYVOSOy%2FDir5640v2LPSU9LFJ5nuQa3zPy%2BSS5LSdhd%2BGuntyLA7GTanZSUHcOvZTos0AAoGkLYCOQyvrBcciceXNGN1J882M3EW2LYsdg%2FVcsFZ9Ot%2FWECKO0XDtcuBpaHRyg5wSsVsWepz7nKYiiQAvYXCHVYzmcW64w5RpNY3mhuGwoG%2FIRpEE5YkXW4cFHwbkR%2B2wdsRN1Hr6s66WaKAybcqskmLawfsaoi%2FMC1l1YCb6KAkcCuQgaZ22HXt46a2F%2BEI5ELMF83D4tiqjstt9FuFEjF0RP%2BFiiBlYUijRG8Yg1tion9mruVefELAAPreW27xXl95KXzlt3fqKvi4pPDzRJcN7m%2F8jc9C4sKMCOIOaBm4weQrms7w%2F0BWMdoEfF6t4I9FscqkxzfoEPpV%2FgHRhuoSMAeVovpCR2IFJkfvtFQK6W0xtriDJhBXuzTLSLGwpltZzNmIKUOpmQoIIpBJFqu7fh%2Bhjl3DFTLPziBrJE3tUdv3MJhGBvflIF6PrASIQ5yEFuBEmm%2Fviz9ZupF%2F2KzFPt899LbXuuNSEZ37suQYbOIST%2Fq1o8ZgROcMFzglS9s6NP3PEngZL7Ir54f889ROZ5c8tPzueCbmqky0o40%2FeHhzBMJ3C0ckGOqUBlFlF7pk5URqB1J6EJLdvv3NHAYbYGGro%2B4NTQPZ5oawtDy1zHhCs4xapVqmwVn04HXf7Nx9OqTGrjFjucQrvcK9rnuVa1aznSWX9I12qu9TafjT%2BzhyNXvK0JB%2BC3q10tu2vy%2FckaDpEE%2FoqlJlLYpEYrtZGa79Lcz6BWYAFOfY2c6kpxCXgEgI5yxFogq9bvtLUIADtXDwG9CJH%2F6chuIC0NZYM&X-Amz-Signature=d2467d9ae3670b5c0524914ead286b80e342c29091c62a535eabe6c71d21060c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

