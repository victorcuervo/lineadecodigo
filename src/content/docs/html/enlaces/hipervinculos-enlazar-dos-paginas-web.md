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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRNODYNU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQwhbu%2BkuXQ5ZlXZWRLtXutXIoia5cMq89lddJEMtW%2BAiEA6rMa6171eqAkwA3epJzIiOsEVpKBfBviUP4KfjSlj34qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSP%2FDW5J1tTrPgs3yrcA8eKa2SlRTCEM1Qn%2B5sPKblpTEiNRLpyhhl1N1eLaMa9mz7FkYk9xSYv9sDKXXirEI3J%2Fg5P2NoJs6za0o%2FAOn%2Bl0ew668eYlWsNm0%2B9e75svKaQpahOdpwRM%2FOLqKkDK1FcFKz0RiyZGUtv2JrYVScfd0gaNvlEHj17iR%2B4CxPL2ySVMbcNgT1Ly3gdXRLZePSJPbStra3Atk8lbDrnnJWf%2FkSyp8U5Y16qUOplUczZ0OP1W1JYlQhArtayaR8EoauJRywYR6F4%2Bf%2BcifKHC6xQPNwrX3Mhi%2BEUgso18Q1k%2BKCANNDtRcsLtbVJEacVrjFg1%2BVn5vooKPixgHCneXMSin67zfqKcOEK2%2FC2Y5x1a3D12ixlLUIjzidg6xw92q4yxYngE7f%2F%2FkEx7iw2CnF%2FzC9Q26jzcP6wYPMlPm9i4taA5MjfaUReMfeQ8XCD5OR98A2vAETBw2AfcC5D7YVG8bftTKAHfIh9XCoGqXA%2BF7mGkykJI2EGYUr4wH0Snt%2BMVV3qEWF0WZD9o1wjlhM161oBB81PmoomGzJXFPEHsfka8JaOADC%2FNJj8TmiwMy%2FofiF5jahi9cQM4lgMoAUqZMtVqsspZkSu3bRUgvp3TJCLlHQOI2E%2BGlmHMIzC28kGOqUBHQ0VXYeCHphFwGdHEIhk%2FqYhg4fZbZ%2Bbg0QTPHaYhjoqNSGcQ6Q0eNzbSzUsot4%2FkZ4xoHk52IPrgMwe1uRzhrutA4e0Md%2FsfSit1QpRNw%2BGtYFpdXLAybW8hvSl%2B6uf4ZhGC0jb%2BHvvMHDPWHN546g9ZSTCqKx%2BaAdyh%2B2nP%2BmRvIOHF1YkY06rt5DAaW10U6MyQfv6oArmedCROam4I%2FhDofHR&X-Amz-Signature=1772951d8a1cb00a2e354ec1f32fd0e2220542e7d48936432426b518cc5e0765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

