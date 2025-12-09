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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEGGDAS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAKH3CXEA2vyTYcSd7EwRPzhEO72abhRYwDMNHSNLEMAiAYvwgTen0GEWODsKLCeGi%2B4CCO02jcXlEL9%2BFDuUKEbyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUdrag%2BUDKsiqlYeoKtwDrutq4u44vaYYP9WTy0r8FF%2F8qD7B3lY8XdOOlqzj95tXU4iCcatuyH6odJQUm6zvDB8MgTTrV1LK17oEmhTJCVQq9lbEbzhM6bCgGO0SlMR6he6MlU4ug8dcam7XEcbSFJ6swmyqMyRq5toL9KP8WMVVBUFQsBTfLkP7W8n29F8IwK8Xtys%2BF5g32%2BCck9xaa5uneyyN3dsXIKxC0Ph84Q6hAVr%2BFPbLwx74ORvuyqNep1IIPnT1tnnaubaxJDvA%2Fx13fhaBJqecqPs2wnnMVo6aNpVzuZMh%2FhOWhQlJE5vxIxV2lgWvizygTuYJlFr4bSg5gBTS6xfC%2B3Ydd0w9hNV0X4P3IDfzt6lL66SNcBXHbKhE0xFBfCGSVQKSE5jQJgkrUyqO%2FPLmxKoqJSoC5tZWaNzoFC0cmmU6wpuxTlSMTyzOCuHsuQX4IxZzpH5o7rfvSliUxKwSumbPevoTxTpKdSj5Vc%2BgPf7tl6QioN96VR%2FLs76fHYO9zveOVF%2BI2Y0GjmXcu%2BLA0n5VMaAk5kLiPGH5m7FGZa5ClrfACx32lOIo76tpIXekBpj%2F2s81cdc7eKDuUmdzALm5fsjAkGZTifiEPUp3%2Fn86xAsR6bRR3DpuYSKazKF6gB0wheXeyQY6pgG%2BbVotHdH4z0QfGNnEVKndDF56Vbxjxuo%2BfBopF9I7LSK1kqMAN0w1jfMcnMRc5oE6APb9SRfdxJv3gabwxVyq3IfhUeskqv97%2FTcLdmVm91LkWTTHWhd6DEaO6cfJWeTEALUkuzspXVv2QUXBKTlNJANj8OVeoV5j3%2FhJaFk55K8AxjJjtLuFuBpXcmpCp6CBMShY94742e3FxxTx3X5K%2FotABpfD&X-Amz-Signature=69fc76732f553c78fb0c96f8a45cd3823b8515125f407e8f26ca2319cb66cb62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

