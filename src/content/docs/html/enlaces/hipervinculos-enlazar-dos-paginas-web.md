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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRNQSZMA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6xFBdN5tBpDWyrk9zmkRljpWcDDWMKreRUDuW%2BA3lwAiAByVHISpoF5lC4tzlqEk4un5FexPywsYa6ISeHk2u9XSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMVW%2FqAHlwhvrxQmhTKtwDzsM%2B9BLgHhwU1Q27ARyrqFNH8Uij%2FGYqiHe2jXEF2kvx14taoT4gm6po5RM%2FmXzy4ysjlDBVN20egDPJNZIU1D%2BNPxYp3qtFfcN7BpVR4uj2YRZOs8dXoESZLsLWInzkbSLQyLga2MXbCWNjDgjwQr0lX7KV7gHkMzvS8dGN4lShndL3qWXu16ozIynVD1OEJiEALzoGVQH%2F3UHuXgPZEOOrPLFCnQl3zZpBYNGsqxlROq16VPJVu6aZ1HkT2QC%2B4ZTR4kTy6%2FhRh09tFISMt3QJmaIVJUj42ptw9Im38bMgt7jz4Casc%2BkgisLkex8u41ZDr2KuSdIi0%2Fip76GTJgJ0pP4hm4fekBQswzBddhqyA2IzTAxPBynabzKhMOzFzDDmwoRaG4xkKegS9otQF5ZjxF%2FNuKJNByMOroxpaz3ihc6cquGPxjzbvCH1R2NolacCkAAuInRUjcSEEDdUAjO5AJ70WU%2FNlv1sY1cT0pUhcbxDa48%2Bn4V1DZaCN%2BqPjDpAkrHbgbzPi9SWLMCFT71Pu%2FwfUdHW1hZ374kVAhmQ3IlN%2BrQnNgIPIicX8Lqzl0CTsrGfaB7pUl6jhSvZ3MMOV5mTaeZ1Jv64YUAcFbUHtWolnVuzFjVjDnIwmMjKyQY6pgFJ9MH%2BlUWN0aWs%2FNdGMXDcEn%2FCbPrnI5Mmqi59DvgqlbIVdHQrJIa0qMCVGh0L%2B7ODmGkQbIywiM0Iuy%2FXSgM6kv92VU83cLVTphpdodYgq7Utq39tPY%2BNrz5ZG5x95q1GbrU1wLSwtcI9h1N3DeASfEn3J7enTCvzeC8Np22uyXrK33hGBujN0mFl6pBJwQaeqOEjQqquP2e4JYRtr4pQi3vE%2FXRP&X-Amz-Signature=f415d2eccefa0d2d5c0a1aef3245a7d07a1f7273ec5dadc13aa6496c0d18affe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

