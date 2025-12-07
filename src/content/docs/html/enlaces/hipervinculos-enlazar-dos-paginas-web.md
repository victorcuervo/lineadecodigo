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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJ3IUBE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyb7rpE1umlIc%2BBNuVlcZAjczAeO2qN3x3H2KbvutHwwIhAMtcB%2FACCDaVevpd6%2Bf8tE2RC%2BOE7EZfP2%2F1PTWmZrlWKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwKFFvbNZImEBAlioq3AMOISedaDL96avX2n7jKsUV3o%2FX9qG2Ou0dnq60%2BQgHZDP8PubSBZnEiqPoQ%2Brd8eNIZuyKQOx6J02azr0tiAwaXemuY5x0jkhYKh5h4hf%2Fa2HhV87eHX6a7XuXUUiq3LFtfyktX6T4DUVuh1CKddVWGasT9RqDExWPurct9PHMo6UWDcpEOFi0LBvMh0btHvuv7AJXM2z%2Bx1%2BTra8UuOlMh7U4zY20ZuzlfVdVu3bQhBqk2xdtzc4ymwBhhqRv9WmPEXFSQq9tE1FWnr7f%2B2ClRTlan%2BrTki2eAXlUeEv6sAtTku3IMdp%2BPBxC13nAMPv0xkyChrWcgrA6nMATb2ioPGcnLyCSywJFf7pDalO2pvgUmrP66iLDtCNj%2F0aEVF%2BqBkN4l1uWF8xohzD0h9XJz%2Bih0WHsnxiNq8tHubZQ4IeJnvUel%2Bq77P%2BjqWJcO9Tq6ONzGfDQua%2F%2BzLqzqkmfyboLrhUts2ocdFayU1ElaGJqNT8A7DxAbGq%2BI3zdy2alX4ILP9I1r7HUVvel7N5k8oZO04RkZ1j4lsT77AEpdQ%2Fvo2Ix0T8cJFExBN9hNQmN3z3TId%2BAAj8841SgCCI%2FTTstPLhA9N58oX5FZQmfDLTMX0gh6LM%2Be%2FvePzCRv9bJBjqkAYrzpq9kNuGOLmlacK0T2X5SOu3QKV5KVJSrl7sPmnGabZzqUZZ7E8DA%2FHBGYpdVnwPpBU6ycHNyCzr8QVryCcHuEK6na5sZ3oiUTSkPP0wnEmCamLVYkOiCz%2F0tSohpnwUsbWcqquk%2BLoDN2PTh6LOQ1EPI6NxBhOZBeWQKAOQ9klbUG0BVid8KrQzj7mJshdKcyV3XRYHQjqnWToWEcNP0amkz&X-Amz-Signature=74028f38f838812a6cdf458d761847c93c5618259dd25442a864f97ca3f3e601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

