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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGXKQQD4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoevOprge2YZPRT5A1sdRjPaafXbo4JDy9oa4FCVsWAgIgK6Hat12Ta4gpa10%2FRLk0dC%2BRZPPJLF8YYGksAdFBYbAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOCoqAxAoSvM8c%2FeYircA3an6LXIz4MQIMj6%2FI1GHlQxyEO4UVAJoLCyGqQUMmt49gFjG8EyrIhr%2B3DsxujytwDWvyCHOuo3DmROqGUOhb2XGGCOg%2Fs%2BNPDAis8O5rGg1HvdL%2B5HI2J4BS43eEsjvPOMFCMrAAOp6dZidup9hsxnKwrQZIQFcGLplYs6MtfmEBVo%2BZXcGOP59tuJs4eDftGWBw7svUk1S3762LU5k2Bn1HiVTWM1AzOkeboEkHxjIaEmYdJsGWZ%2FfHfiv1%2BLxoqjkG7vpuffjZL%2FpbUqK4u3GlxgqSsOfFj10rGzmXPiIkWP0WHxDVPsmorjleGR0Bq%2B07fbpQLN59QBN929xcxNGMAAR0KOR2FB5PsbrGGBxID%2B8hVLzlg%2BOcH4Aqvk3GF4SDXxDjEiDw%2F%2Fse%2F3q09r51u99u8tbvA%2Bees0GiFPAE4VKCh0wOPbqFT2TODWzONi%2B8AMKNYChSpePb7YyQeJtcp4ayKaNuHtPxdfBh8oRJu5jhMlFq%2FpaEKyyjF8tI1Y3Qz2aJNcdqva6VqJCTw9sWoROjzGjvfPDp9vmlAfIKlNZVW38M0DNvE2Bu2E5hJ0zmSlZCCdeEGyrrHCtd1b4E%2FBD48aSn73ZdYlW9TnJW4dEwHXZoLX%2BJrMMLD2y8kGOqUB5B83%2B%2F2RYBa1rX5qd%2BPpDT9nRMpIrk4ro1SOhG4eJB%2Fcv13Kq%2F8ygcp1rYj60brigCZScd3sR%2BlZXE0LwAsgs5HTBS7zduamLcFIBLiJ2HVcB7MAslABkEAN5FJ1N49h48GaWGLwB3m3nHlxNIwQts2nTaMBFV69JY1BITvQExEHXxxEXM24t96lYYxq3HvYMkGwV%2Bc5UpdkPeRi%2BdmfQYe%2BZ0KV&X-Amz-Signature=c83003ef353671db02a20da7f42ac786613eb55437b774e1df59cdf7df316331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

