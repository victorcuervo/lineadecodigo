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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALUGE5G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLw22M4iQk690Oe7oB7deVNf39%2Fqbs5c2x75kkiWvZAAiEA4I9f3IMeMH7tncqXDI7QrRqfW740SM1X%2FGmWgKD%2BbY4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJOFHyyifhbIacuPYyrcA08k8GCjTn0dFY80VDp3NMp6DyPvnIzQOncYaW5IKBF2f%2BuSjZJTeyBSZGM%2B%2BCqui%2Bc%2F0uC7s8HJikEKnZXzAVib82tZaJQMw9YoObvEbb1wZ8T%2BSP5x8AdY0%2FS3ZlX5fhMm2wXLEgpsLPOrnyWjFQVDuJ1Hp334TVVgAKVAxGnpXV0KkWjMVBRfHlJsYre75b%2BaamBPxoyo0JgdkcJkkSnx88jXsZiSuxLIvP6Xf7TZFeWyxiVoOex2ItfS0TpW6883u5WUZS8LDcF2718wQ2Ab14%2FnSKvboCsEKLhG%2FPf6i0NDQ%2BdXFPNbue4yw7LHGLxFxmkoesT2jBSBKw3YtuwdhLKbovRjfIhb%2BYYiwqXsMUfxUDA8nF0MJ11rbUIGXEx3S8f6216jynjzRZLVPPtshR74rcY88GX58nwIAkt6XqfhbjeCOpba9bRSk1eeMPP2nzqcsD9ORCioZwMSWWVBI5xboXgIDpKTOq0vnre5Sfjj%2B4TmDrqeQLSc%2F1hijjp%2FjIPhO0CJrzPcdPdswPdeZYm8k7K8BRfHQo1SpbjSBWw6g6V2m%2FvAe6lzZ3WgS3GCATkEUQYiWZ8%2BL%2FhJD6fV2QfacA97hvNNwT%2FFtq5H9Eo6zUwgQR5XCvSFMJaJ0MkGOqUBTdR7iZGczW2G1uMUIaEqLoDgFQYhaDQ4IYPgK9yidQ6ZfV%2BzYci%2BgzNwhKRqv3HUwqxLFzJYpFv6%2FE5LhPdRv32rhzXpCUGKk6mbPU%2FE%2FV2ClnsSNblfVPUylSxvim6q8fNB2PDUcj2XnfaFMgaXCAb7BlubDqZWtiBjWPw8MhwD6y680Pae9vIQLOzuy%2FwDsjqWGwoZ38F97whJOEW9qTbyKFro&X-Amz-Signature=0166228a0cafae46229bb335e5f9a09239e6c578cd2cc03b63a860046df9456e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

