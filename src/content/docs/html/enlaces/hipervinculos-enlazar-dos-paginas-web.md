---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJ6KFJ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFum9qZJDD18wx2rA2xnNI2%2FGfWydYFtea%2BxJaU9VLQ2AiAAzrejpibWmDlcMiSNaOK1c4ZEia7mrJbdW7QeP9LAeSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2Fr0MBLEle2%2FxvOLiKtwDQt1riqM36%2BIbVEPltjnbBzOQVCclsL0Rx%2FjqkXd3t5Qm0G3gDyMy9RnTX5%2BLPJXm4hbJazBRfqQIQSaHwM1ZJk8YOGKTdtsvC1iKJJwzNPgdT%2FfSRsSVQKeYPsChmouOy1zZky%2BTJIVNvvq9XaJxEEuQ1u2nKCs4SroqXiLnCJtddA9LRQ0XTh6Q9YHAc9rVUMGZ5Q%2BWsrZQjKQCFesq7UrEnTWJyplezkq2uQrzlvZ8WBu3%2FPr7WDU%2FKce35IUq6KI6tSoxWF0c2FM%2B7uCdPm9G2hVJQUyhmd8RV3az6POb1oBsb9UtFJW7s3Vdml9phrkrPUhgGpj9IP9eVgFnbmRqHdirvuDDGFgnmrqimWj8fFQePxRKn3DhpJ7oETwpaYTwCu3OeJFDaZjNUu4V%2BAzb41wRe90zhDgiiwivgZONXNPtFX9FYLrPf4yHN7zEfbBXmdQ5DyF3T5cuv%2Bw93h8b7bpq0ZPxWmZVEsb8lO0jyBqe%2BHWeFyS7k1IqPoMQKM6J80syyk3oLbMvvXZtRrm4Wpx8dakn7FoRGd7oKYvIf6%2F4SJXVyW2ukT3OMHBp4E2lD9s%2BW8SNH%2BYOgRUwHemVnTVw27QyeseYRmZQp4bzSFM6IZwxe18x4MowxaDGyQY6pgES2rkjV2M%2BpO81mXLWP2HBDyuNqodMKP1aijjYl%2FV2zR2qkEZPF9Dnlfwm4MWqTHj3RPgk2cEJh%2FZMNcE3hLuMMqH8qF4LJx%2BcLHTSIf627e0p4i%2FPZF1xs%2BhrlYJt%2BVItNJWZFW5aLmISItzLepbzmBz3O5KpmK6zdTAuw2dMOdMFN6ugELkgclsyAvdis9OH4v1t6IbvA1pjRrqGPQLNsB6c2is0&X-Amz-Signature=3d1abb9b8404bf9d614c0120cfac793d64fe24db2ca67cae808f32c7d1eb562d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

