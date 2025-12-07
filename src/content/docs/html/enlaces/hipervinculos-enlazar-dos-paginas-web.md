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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRAXLES%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7lqOFSfWpiujH8cU7JnM9t%2B86D6iYLRizTKuGclTG5AiBepQXFJ8CiCIHXtveOAhhPi9KKUkucUlv37AbzMrV3DCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBB0NPVrBIpHwKm%2FIKtwDjoA51AHpnHwgXIgHsgSHCfAJ5fqX3sIbiQC9xnyNNstFWxaeh7MTJQYmLJUYvxTKt8MFklI5ymhWFSx1RUIxf6VYNkR2AyzBmnJ%2BgaM3TUCsLK%2FubRAb1w1lhmt6kTWoVqMsGfOp1TvdTyzq%2BZsfgSpxf0XTzWh6djGsNvC%2FDLxpZvSMSprHV0sfcVk%2FMFQ6EHPghT4a0MkxIRkyjT8Ta3nVp9kMBmk%2FBnAZ%2F0LM5%2F%2FgbyJt%2F%2BH1%2Fvgy%2FIwozPTq%2Bkh7FKwOD35PiUUTwX2NixNqIoeNe5tMlWhIykAmAYJWQAlcucoc3hIAiK7WXtitEZyEiu0mxjMsjbZUq8U13vgkEqv60GJLPmVFlZEgtnOxrlj%2BsuLkhLrA76ebYfxiK3gnVT73YeNM17hySgaQdmb5A2yBdJjrTpBdzEw1sKryI3GW%2BtCDrlVnMNngk6H70pd7aYJIhBtpdq0xxlTJhhoSRC9klZxgE5Yab8FkF4191Z8VcM%2B0YOshAkgATMOlhxpjE15FBOELFYnC7M4mxE6mWLZgSLxrZGDRLyktOvYqJs4fMUM6J6YEL%2FCdYEkVX%2B%2B7NOBslz4xFu2rJSqeKWtOuFVUbm3UxNqrcMShPK%2FP44mQUdjGYQB6t8UwsKLUyQY6pgHvZNGJiVGjHrw7ldM%2BTDzJi3PyHMR%2FVtxgpYrO8woMO5OlWfcCrFU0DLK2qGZe6M7N9Rcsk2AsKarmOUvFAWUgKgYglDGdNHyot8bRZRwJlUMSrbBx1y4a386OMIMJjkuPN6LozYUouyf1FHO%2F54nOAMJBW89JniCufRO0XZ2UK4zkH95vVLt%2BOdipEmtp5oXXG1K3%2FNTlgrY6aX9bMfLW9eGmcIRx&X-Amz-Signature=51b39bd15c98011955f71087f085cc9ce11c81e559abf42af0ffa270fae94cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

