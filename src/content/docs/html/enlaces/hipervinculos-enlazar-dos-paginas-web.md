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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRLWO7D%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T195849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJEH%2BIB8nGlQOBO10XoUvXkd918y8XSIzdsOhLONTicAiAfktAxqaJ0jJxTHF2RhXdD%2BWLI0%2BmGuLnxtb2405qM1yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuWc15IoZsUfdJ22NKtwDcEIFmX4T%2FUZ%2B9v7uELlvCa932eM6X%2BjFk9RXG3IXBYe4gsExGXzt3nF%2FEk6Bp08TFn66TnergI0sRRnsB8xBNCwzcJvSH1qdt3%2FfSEpuv%2FCmwN0VL7iERy2AcrLS1RUMmsLZf7eE99H4ZDYl8TyLiRHi0eWx3fHW0tsgfrAo9WgC3885Bp%2BqFkzN7tBTvWXdIbw2u95XwxqauowS9t9gd7lL0Dra50DWb8gQdAMgJ5UYdndJ2dssbSFkNvD4jItias5dDIIHPMWouMYFobnOCBNhGcOG8TSHnPveANpBR6QTtjQCk6qYp1dwZ%2B1ZJuU6X%2BLG%2BmqZcn%2F7FZsnT0BoPo7XHlLZ1FnQcwVWSbPbvjQvmlXeI%2FpCquFtbTS%2Fl27wbEVfStqlfsNwm3sF5nJ9spK7eB3PBkQyDlEjwhg7JMy5yL20M2SLfzT2PKhwhPu1ZmdhfOKC1CC8OtqtdPwqhA8FhisQe0M%2FtpN0VRYDl%2FEcjKyxHEt6WZIeUsjXLlf6w0G1T0aldqs3hOukI7yngxu%2FBbqFCgGHQ6Qz%2FWjUxtFOC1O91rLaCeaTNUSlgJZ2iFkPQOOE6iE3BQxGAUC3MgcBNUSXTNks%2FThth3F4SUkxXWyj7TUHKcn02IcwtN%2FhyQY6pgEuIog6kEiIjpP3vfmwrc5ugtA%2FrFFEJlMxBfD21bIlna9hhgJzW13%2FDUomBmOyhjhUALPmn5Pz0wSkaWyLlodmKYxCkBofxu16ee32JdcYqy9Ywbzahis4aGfosmU17EUh%2Fs43KgxfHFCzhUdvST7ewC8J9yvFW8SrXhX4fFJXhwQ7sJF34x%2FY7DniBYIHUt4nuFo9ksptER4zv8lRslSWTJ8jp7fD&X-Amz-Signature=2efb677f016f17d32b77cd12ccb9018f91d2f751b1f9d71ed4db91f1d93cad82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

