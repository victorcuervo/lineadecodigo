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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GTPUQD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu2zXVmN4IF9%2FbUduHemoLW60P3Tb4yR7%2BJj%2FiW07xWQIhANnjFm9CMPuPKON9SlIxoOlmXi5elDp%2FFMcxsOokL5o2KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2B%2FDKm%2BGQRGea3yoq3APsNi6eyaSQoPleBgRwnYAR0LSUhBtYfzxqD%2B1fBBm608WUqYkdCRU1siENHfDZr22ouIHW1A96Q4JlLt1I11I%2FDSW1MjkeUW0BBvC%2FWOpNcCkphFPSWkhLdXGSUf1FOSITyvzNq6BHIA6SDm4c9vrj7yoMsxy3rKIUEA0AWjwnCVKonaxgM0dTLgn%2Fv9NCGRNqwYM27kVezFRBauiN34i2pw2XFkjKsnJW0ePaCgFNGKE3%2B7Ue3nBQzQ%2BmVKCgc25BstV3Q8kRjxa4fG%2Bk5tathjkogFF61tSeymm7gw1Y9hVMX0kr3bVb3u%2B7yXG5X2Li7ptMxDB8%2BnPYqh3fMGvAq5jMBVZX31Jj9WYLtBiBSYkItzd9EAMNmvQW5hbBMwF%2FbS6w6k3%2ByuHUmD%2B1DgkJJyiw82GrtDTIFY3nHdmAAk%2B7rq%2FXDi8e65kxh%2F4o1Z9E4E67q%2FAWZtbsJDaWh%2BiiiIy%2FxxqBSoCJ5fB0TgUI84mDahEYnOb9tqIZ%2Br5u3hLrItbWMtmBAy1tPufMc9S7b%2Fbi%2FvZ8w7%2BxCxAehbSTGdJcjfbhwGbE7Es7WE%2FqPYHj%2FJgX4jRlnxJU%2B%2BqH9OOfLB9OtCVoY9suoyZRPbhXm7Y1sDgBk4wmx10uhjCj7dnJBjqkAQGYovxGPuQHsZVKH4z03kSKyxMoSksY9kSnLRCB2c%2BZ6ypPXbtmaRG1TRbgLOLLCKNh1nldZMPHAP2kn%2F36%2B%2FyoiIoK6Ko04ocMtH%2BwjZrFcczin%2BclhNryxNMlHEFpE1DnKcmNqukWhf9CczMpTpQX3Md3vkZUoh%2FTq69s1Xa5xoX8VFG%2BH%2FnTSS7awaorL6G5mi2im1ebaRqvgh6Ep%2Bq9zlpL&X-Amz-Signature=bc36dc0e2f796cbaa086485f5c74a99c142c47ee6366e0c0523c1a6db29575da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

