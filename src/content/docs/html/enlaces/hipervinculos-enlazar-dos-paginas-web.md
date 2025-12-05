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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJWZC4E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERTEtLMVZl1kWpqwSq0Dfz0sxPw6fAnGCmQBReB14l5AiEA2AnchIY7aQuzMzEFVJae1yfsuduBp0DZn46dO4QldScq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJPip62CeZbN7MasdyrcAwiVjlkC974M3zoQ5fbtXTBS%2FDqya7k%2BsqDeHCpRfshjT%2B0psUMBgymMxDat6LNvAD4WJIsl6%2FjDcOfyNqskMpEGPSOCLHKOB1uzPEpD9wRDpbk2Uv83M7ZuXLUoxyW89YULBYeJhzkMIZSe%2FmZGzNS9iDoLeoVj2HTipB7NP%2BSrJRdOGAXH4cpi%2BH33xfrvtaclFInuev5vDVMBpaaxZuQYvtkeCZQbofihKTJGYBgkOxk5IfvOkkIuMWAtjUigfJrakLQcv8n6FotUvGmD99kNTb3xQBcvoaBOBkm%2FR3C8TSd5n0C1I2Fs7rJ3n0u3HY02AWCiKKwQHRsqS%2FE4cnwfqsVm3cr3nYM79cQb37PXHpqL%2F7aYcssLcUCoypuvZEzrfOw8Oia0nwhM35KMemzQC1xLo3RbxFRgEHmm2a6qK%2BVaFYxRIfc3wWMA%2FhLcRp3BL%2B6vXh0TtUxAbCY%2F3yTWVn29QrU7Lct0SxlA09oRPXxSzO5WZxt2dqq3sUvkEf5Dg8WoyvO1L8TKOj1W3l8TVoRzHjqiq5Cr6GKOwqQh9%2FDDPrLa6a9HawCJXqCOcNu%2BLSdcNIkmKrkrusWIiRQazVYliKVO624GYANG9O5p5iBVSCxW8xQKEXE9MKeuyckGOqUBXwiGS8Cca%2B8eKmABJVDmpSL78h%2BMqcK4WAqGI8IxRPz6cSAaUXqZBpehzvZgCxKCKLiiu%2BAAjkJ44zuHVzoNRTrI65lGh4Grr7g91arpf36FBk5Yeg0XjK7j08vnzLVKIGjhV44qWcmpSEEBRijB5oPHGLifG1MblxihZB2%2BcMxJ%2Bl2sc201%2BM%2Bn%2BQVu1ICeRO5oROQBjzZGrSw84DVDPR4vOM6E&X-Amz-Signature=da38c147ab77ca43d3d642da0c9736d72e4d7cfe626200ae3138b6a375d7d644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

