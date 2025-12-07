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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PI3HOTI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHlzeZ%2BS5F6YGc9TyIU6%2FuXAEkAV6E3Kpo6tzOsBgKSQIhALjiZvfEeJ2GhBP%2BCoQeDsJFTXY%2B8TabaGnG67L4Yf3mKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd8aHepCfPiO10uPIq3APYOtaSWbuISoeeqJ3o0jW%2F%2FI84in%2FZ%2FhRa2RMNApg%2F0R1JrcbdIK%2FPFXA9zNXw0LOxoJvbEKSCmWoas8vjGa%2BjgavzIHBuJBt1dayCgMmGgB2psGmNC7ZamRFn2z3qDtC%2FrzHpwqC%2FqLW1f6Em%2FpWxqrBLK4qTygElL5AYHoohOBlMZqMzTRhcJv2RjjDXUsKqMmZvF4G5EsLLJJycB%2FUB97pIEgHzv5dcWbsOhV9dWBvRTBRczTCl3qWcY%2Bvy0Jbs%2BZItnaguvx4Zv5lKhwGGX%2B5ZPqvGYzxeWxuehbgwwEUsNsnIs3EuqfSz557Nw%2BEScccKeeh2OqowGbufWGBMf9EDxQeyHXua7h06CJ%2F%2FkaKYESrFKhaGICXYElzmZBWZJrPqUABWQuWjvgOVG66iBW9B%2BJHf%2FnbYqoO1SbB64HrgHHvr196WhnNu3iNjk3oUOIIhGtAx8LKGVZ5uZPE9mGGnRdRwFEQx1Gt2mgGIDQTYtfH5lycKeezsoPLB4YqG1HYFoCmeUsgDdqbJ%2FJiQp4hvpdIj3gYDWlvdDEfShpbS6ELstcvBt5c6KkjTgjS5HMBGLhbRSVRRZ7ag3G2lY13BNoKr46ZDwa9oS9M%2BdpjZ3SyTF%2Bl4whZIFTDyx9fJBjqkAVC%2Fq9HyvLFforVb9dWr2qbl%2FZO0PPuSlV60COTxz86VKtQ1QYskLYnnPHpm9zl%2F9kA8k6tIJI3AYtEGh71ree33kMjUGw4MtdfOo5RinqYGBtJQwkO3XpDjn1vzaLg1Z0sJ60NXQ64DMcpZp0cM%2FN3UhwoD7VxIGA50MbRpR71Jpv1pbKNRKSkaR28Ryi3QpIfrQW6Xq%2BWKR6%2F4tsDve2Crr61K&X-Amz-Signature=5f551f5c3a52f51ba30bb49b8f11c45d422e820cada56e85f1a9abac6ab7f4c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

