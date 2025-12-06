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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNMTF7L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGDHpIz%2FeZYee4VIU6UiFk%2FM9ZnaxEMxV7FTYaX7runAiBGpIPT3MPMeFb%2BGxmk9z0MZ3Zvp3hL6uWqaCIMnui1tSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM76WD2uXfg6Q5oIYjKtwDvTnno6vugPk4LDteZX7gwF9PPpcMYAvqBdBfqQXz9DC4ond5KQlHB6e25IM%2BYfCAW1t5f8kIqvzg2BVmBGy6WFDVpRxyNiohfskitwzKmRVBEKmiz76abNur32%2BzwsDhvRlISIm7KJox32Y9IUNnj0pVvQ5MsKVu6G2vmTpibM1a4dB2Fcibk99jA5XpRWi2AUVwomoRVtIimHinvv9GppTHjXnvto9ar44vr5UhJJMCQDX9kB0YbGkPe5Mmjujx2P4WJcOGuswVXfQMgQjGOk0Ha090e14cXcabZ37lH68u9wF0vNNb2WZ%2FEOz%2B0ISv%2FMmVsC%2FYu3kc9qTDsAUEKHkcg2wn9iePOsmdoYHIfuQVyRXPU5gyosO2gZ67dTQiE3MsPJ3s57N%2ByaTjKHWHIguv9jak6AHG3Sxx9friawr9i%2BXVgF3wxfKoZsDQSawwsVUqNlpXWaPuFok5K8idl0aVCE4had5%2BLsOBTeBo4078bqELNuiChZ%2BkvSzExwrPUHnLeHATvYNdphG%2B%2F6ImnaEeWKLOtMhMwQPdSq%2BKIq6YVYi2I9%2FbLv1w6m1tp0Icy7qwwM521hZdAWKjsUSdWc2fCUhVWT87z3BJ5QGt%2BuzjIm7bWS7iQeQnHTIw26bQyQY6pgGAZ85UjQgisjN6fjtje6Q20ZiQPx1Xjl3n6IxbtX0UeWr7lNAdiq8E3ZTj88LJH7x0pchqb0sfixR7V%2FllXsS16YLSbbCH%2BsPnIE4tErVtJ0hm7AatEpjbBvjxtTKLMS%2Fcwdz5%2BUZJiv3V5WS0hObD7cQtBecz9zfew7SiAsGLEcwSBsFeDCXTpF7gIAXNV6OJr%2BAWslVRDxVSTxjHLBcnC%2F%2BkjLoj&X-Amz-Signature=2ec1d572541450ec437de4a81b5400f5ff8443177c8b9671e87180f4f5327457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

