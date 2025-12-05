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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMHIABK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi01Ztom%2BPzmu66nOqMMEK5UHm5pgV32PqFWzkFeu4CAIge%2Fqzec7XNnvwQP0mIUMw276s2Mrwcznv%2FQlvDoyeb3Uq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGtoNbHHNX0%2B9FHw8SrcA4tV4myMeJWhpFjTTyifwUakjmGRvNP%2BJgJP2jwJBl9VMro2BZIZowxM%2BCo3E8Xx0%2BUgLH3jvdB73nKRZjJpoHYAjBle%2BuqGey7C3O2JauW9ckX5DU%2BIX5rSmdlsdCtEuCntc5UT40rhI3lSzpfS0xxzppZiB7kZeImBp0UrTKHnXfIX%2FeVe7%2BTHtSnP3FotTJZdwbcj%2F6ReLzcSczis402BDJ5PWsZsaD8wI0eGj6O3hy5ZqiLaGDHjVfnM1N3mRaeSVeCie6qCyC8pvNdY2YnRDNcjS0zjD4ywRTG7bEsCEpGA2i6DahJIwBDpXT5CUvAySJvivB8usWc8Vxgzo%2FvaInSegzP7Hbvza0%2FbLi%2FnPPxEH4fe2hQr0MJIgO5J%2B%2BoS36ENEGqPC6xQIB9E7YZL6QylMoAGp9hyDCuChNDC5igfGJZC2yCJlTQm5f3KIg9z5LYDCcHxTY6hIM2SoIZitfV4MpmmiC12d5FaQljGoGHkVfxnkx4C2%2FHUtq0UyoenzYRN9qDPuTVX5C8v8kHSpRyaVt%2B9y4bFfymQ%2FksWRUB80XML6ccvFZbnquSjej153FQ%2BDeIEa3028mwh8QSCwVzbtwvZXXqgrKiMpQQAyxroSD6cObAu304FMMbPyskGOqUBYtZoYz1C6Q8xqoN9yJ7gqEd30fAulUMM%2BYLHdxVMUz9OfZJnYoZOYKUgBtjlpPLSs6BrlL6wbFNACrdboLLwxwAE4DgcCBJrF2YTB%2BPf3mZLlkqnjR9r8l1oZnZFrwMxZMx6Y6AvGY2Da8s%2FcVL4g3SRVYCJam4PUyXrL8%2BgEXQbtRcOHJIz9KK%2Fw%2Fq46WcoLyPPlfTAFEOvL%2FJijHI6EaFgH4yo&X-Amz-Signature=1310cad514ac3a70bc1db19e43810e15215b83507d657a29f8153b36a30f777a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

