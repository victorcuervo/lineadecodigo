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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEB3VOY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG43QrGgbxe1zDHQQNqleOAqnA%2FfBKMWgydF3hMTEeFAiEAmvncjuEC2X36rmEKOUeUKpA0VHkUUPwige3lvv%2FodAsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBegIPrHOQwrAw54QircAwgAORWhD0qRdHU0DQZAzil1Kf7u%2F6jkRKSg0HbH%2BXhZBPDRkegTx6ZrLtlI1Q1f5Aiz8zOK%2FL3%2FSLuPtCwyD5dhx5s5GA7JdDr%2FtYbO%2F5yBHuV0%2BcFgX5Ha6jPtXfwP3%2BbrwN4Y7%2FKbi1fPSjIEJMQyjFwL85wVssV%2BElZoM%2BngBVeE1lsUMgReOI1marjVdGUEw3p6ULZbANu4zb7DHx4w6yaokpXaD76YEI3euCqppwnWJczrhdU726EoKzCuoiY9nxYBJXxIQUf%2FGdqROmgYkQnBQ7gZTH%2FycI3D45pJCOvoAIULZ19ASIyVgKxzN92yU2H0BPbRBtwAtlMaP4yylaXhWdYscAkk7hT7OYMG7w%2BNk2xd1pn8KJiZ8a3RBlV28V7fQPBZ1x8oXeRaA9HOwJISkyK91wgeHIow91NJkDanzrL8txvI8oc3M88jdZcglPb02LWg4BmX%2BgsJFDS0q%2BTAMNgb%2B124qdHxkgeUX%2BcSwHftLSUrP1ZMlWU%2FSq1e5IwFbHofmdos5wodvgJoy4Q9LoEzyNfHqosQpbQYENqdQ72DElusMk%2Bzv%2BVwRPVr5E8BVknuCY4Gto1gmKzAWRMyJkdnocx0D7DYZ1TxBh1S%2FMQE78NNKe6UMI6u3skGOqUBFAVcylQ0uS%2BKXfhw3Hz2KTMn1mnV2%2BG4iLw72knxmJsic9yScSRfLIl2vJMW9iQMdGXG03FTlzqxr3th8RdplX8ETCGlbcfnnKGHwmSgq1Ud7m4ZParG52ri%2Bo0AgoF6fT39ydS13rxbtzI3ldS3sFEVF9oE%2FspqjKegZ2pXWWRGrOOYcGciUZaBxWRG967DJDaQFDm4QB2BkEnGmFqWWCHm0gq%2B&X-Amz-Signature=80c7ecbaa1b430749a1c325f4b5c9c7eb2b2b07c76c1c6e1171001fb119d600c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

