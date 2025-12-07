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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLXJCBGC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMU4y2mebojwUjB8CW9osGRacPNu8hFLH4OKNGN21W1AiBEIW38caPNMnJdCKMjc0NL8azM1aBt3fvMd5DxTqooqSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Uu3%2BmiGoYCFMQKhKtwDthaqT7cruWQJWv1AJ6aK%2BKehX5KIfCEuEYm5mTQDS8D3FoYHvG9XWOfjyj07mWzEsjm%2FcsR2P3jK8nwgMiv%2B9FK3LhkW4pcB4SA1wlo2Y9Wx3iBCBHFuqA1V7bVuox7W0meNv%2F%2B48PHAysb9CRPdWRvNtwAE74zmpwqu64LyHcOBkirAVWtmKIGd66Wo%2BcI1lMDEEq3Pbgz9S7pIH11s%2BT3JthMrFjQjn%2BFuJiJ%2BipNO13O9VzvrGp91%2BCsbYQPcotJzJur2g%2FBRQj81n9fhgI5VUkzjVsqrXBfQ2D%2FeU8fP14hWoXIbhCO36lSx5T5QViNfT6VEmL5Jw5bn7CHZHCv5V3CsMvFsOW9Qv3%2FYBVHexkiBs3ten4%2BApfE%2FojOqaXIyCHBK6iruW2940wcIy%2BZWXrZ47IGC8i7ZKOs6grPWi0dkW8JpUD%2BQEKgYFGmEWSMaEoWVewegx8iewFaPV3lgZPnmSIVSRW0nafWQQoUCjeYPAr8mRE1K%2BE6zeiwfqFalA3ai79REtDAAvEXqOUioE0X%2BF3YyhL32kxUAG3WW%2FplQSW39A9uPNyqRDj9yD2S1wKzUEDVFC20h9MpAiMwaSDOuWjtYnKvTYCkujXaj2hyH5xlrIbiccIkwyZnVyQY6pgFb%2FNePyXN7BdeIrQBuCA2ab%2FUT5qcJtseZ89kj9enyWdqmQC1UgJ2f7l8v4WBRzJLqCvbEJPx1V2zu%2F0oRwwz3zxRUQkmfD%2Fy5AE%2FO2EYS%2BawW73NkGSTT28avS2CTBhAY58ulMvwIlU9pahDJFncoDXF8Oq8nx8utNZpkyy0IlpeKKCXdtFxnIqX11NANvp9DdZTwzMw8DhH4L75KiOGrNb%2FkJ%2BKa&X-Amz-Signature=0819ece2695f756c1bd0a7fdea78db41dc67f069dfecda905031d786ec32e8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

