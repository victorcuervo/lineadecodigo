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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLSO4OEZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoWbIzqyCALVvJFHc2QSM5ykM1i2jEE7meJyqQMYiZzgIgB44ixZCNx1%2B%2BY%2BnVGbEGIdsQydSzzQYUv7nnd8QfzdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhYbwyK6hujxEzByircA2mdgpja1WGBan7j3Fy7oCDhQQiI2%2FPdWCUHjnkLYNuKHUO4GXRJzO1fgY5oBFQjLCxWjh5UHR3WI5YilxOJc7tkFjxw0qECNo20VtTyg5G3l02sM4jS3EXRk0GmYTSgZvCIVdrIUWEiRg1WGZeixSs1tdgcexpsYSkiNNbX5Rj6hFsabROT6B34VcmfpeFAlYgbOcvmPn99GuA1lHjzWd1F8cDsAGe5AkLMHRW8tEWj6PXcazjoYqz05IsVVMnjYuWJDCECSyq39kKhQezDcAdyLByFfxI0BQqWz862q5G%2BqmvNXR9%2BXFm1wgEm34S0GOOWsjzTHgiLOGpXcVTsYt9kCKVg3%2F6o8yklMxHXtF1gNSg0Fnt7jXe10QF%2BvADfNcdxykDky2wPnO5OtiqzBB7CFvcs7OEAcORR1U8bwHkwEPTtoob2jfGESKIPtdsp4ZNnzneEnzyce4w3WyL%2FBiOQWkEuwXYOfzxKoEMPpCPWYNwCayYjhgF4L02wnaNicGfCezLcg24AfBHDrM0Hg4wbi63pxqbJkyk9Os058kZkvkuTvES13Lw6QAu97iN6KzcZcSLMsu5fDutnwCQRf0%2BHC7l6K3aVdvTHwm0v7Ob65wIVPKV%2Bi86Y1HI7MKCd1MkGOqUBlcL6Plo2Oumer8KBvsATaLmddNe%2FNnarP74sqdK4M42vN9s8sEjTZBxkyDVS0ECbbzwo%2FA%2BZ80%2FYqZcJ6bSgnt4plNW%2FklUQUoKKmPDpDuZDjktIMqMx2CLTnA7v8DD%2F6SxScInxOQy4KcbkktNgRTDfy1BF%2BPuqZ6bpZGfyq9n%2B3W7DFW01BPT7BdwB27E%2BHfwZDlMpgPZ%2FtAAFihPc4owESbhg&X-Amz-Signature=2b26b5056d1e79621f657374f94d66bf38c16c06ac5f730b10f7c913ca9c05cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

