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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEKBWQE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBI7aAXU%2Fz%2BMhRIMeQZcExFCwMDGSr7Isiunf7JMJeErAiEA%2F65FurNtc%2FIWrIRqI2rbrvgdFuT%2F9hPrARsdSu0OqysqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNv0CtvGpDuVNsxSbSrcAyl6kPhfkYSpOaZFHWn75v85sysv9oxi9hHl%2FGzB6RHEVA4G3l3QSzFYXCmmjpjsm194X2Q2FcfpLudZWxVuXgbCj%2Bb7AmIg94O1Cifoa9uKbGT4ZjERPrHY7BU7mPinPjjcfKTl6w5PF9qnzmh27uXi3b2h42dEN6Yq9ucaIofFl4N9ZoZkHlEGoDLqLc5FMuOcBlupNWNfnd2HiqfDYmoaPfgUGU32TJsq4oDAsFWU3fDXmHCbm%2F0WZgsDsZlJpR0zhGxEJl%2BJVjvVlgXf2nobA0KDkYS3b9Gl0PNtXyULbN%2FYQJ2mU4g6j9tMmfDjXWow8YGFCYndi9lDdLMJY7Zlzp9y9Kkq56bg90dOdd3YcEDHTuq3VHnNuGwJ6UF8gLbtiUE7CLvO8xRFEcgRvhIIYlWHDYbRPIZ%2BZFpalZiTy3R24FcYl2t1ArmmuiNNoHyyJ1xJ5Px59erltCoiwrnvdKVd0zLMNV%2Fe%2FtPCO02Sa8kmg00a3D64EWVs8FVmRUKqXGaYWO%2Fqn%2FBQdrzhCyGZ2WRJZ9ajLcyKP657PsRw6JLlOxc%2BciadFh4QZrvWDloo24S5aILwz%2FTmnSrALfKt5L3i7wbTa5HHA9rCOJzhe%2B44VkK5Lf7uKOJnMNGu3skGOqUB1lCIm%2FXhWcm72neQlCwOAyyG65T07IkinMDCujcwEV5sFQvH9ojIEoh8tMadcyEgvsV3hlWj0PNwSDL0%2FYrR3D0P8eJnE7F1t58x0ngU1Wx1oG2a3A24fB8bKCPmJOyJZcY5N3ZLfjqPUj9UuVLPPnS0VQ8yKYpIMGL%2FxDCyHu5jLhb86q%2BdZeht4WAOGqgPUj%2B9xogJ099MBsGhUXjgvYdopMJC&X-Amz-Signature=21f305b5fd089e3a091c4becdedda8dfac96ad44d4a2fb500eaa3096e4b6e2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

