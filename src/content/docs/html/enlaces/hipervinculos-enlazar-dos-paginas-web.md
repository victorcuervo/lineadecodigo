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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKEJDII%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBYpW%2FwcmVFA9B3sTkfok9%2BvSj%2BrMxuCs8Yab0b8xd11AiAd5gT7FL7QObou5NAJ91u2zjK9OzzwwQt%2BI6MD%2BdXEpir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM0%2BKtrHPXukJJ%2BpY2KtwDqt8bfiWB14%2BN%2BT3zdNqGdUFwhEy58zpnh%2BxMz2rqJ8EaXvXvqhNSvwLJFuL1l6MZNJRBUvPXNl1zZjLV6fK4qJ4tTjv5fuYcRCAXS%2BX%2FQcjv%2F%2Bf3OWODaFs8eG9dRgWFH4pmadoJOyIJMoeRcmD%2BRVnJxxfj5SlZeXcBrnDf2daptWcVUXnCWAzlu13GN65T84TG%2Bb7rsf3F3iSOL6xYXqdFGJJXRlEhtboTLaKSfhnj3xEgsqgP8igiWf1nYq4MIJYCosoCL%2F09Bf2UA6tQE2VN1EXHSbp%2FvIRROjL2AZTdXN5OuQEnbxMyZp%2Fh8Jj56rvc0kQ9E5C5qyKRpw5V8LgkJe%2F%2F3dZii1tRnCZzvBiw1U2Zn9TNeAzc5A6otNf0wMrWI8%2Fs%2BHvPS9r8vRZgaHkldo9recXaP3ywclwmDGxHUnmPPWE89pxGnxdlN8gphYmH9F5M%2BlEx2yYy76XEVURLbVO1Al8M3vwcp9JMMULAuaOU62h90xjPh%2Bh2FT1bCe23jJ4KIiLFcC9SjjznVrF%2F91rs4YXXrHcA97kwbWhHNZzhyGt%2FHCS2kYtNY0SBlNh%2F1x1xFTjHdMRAWhNohBxcc05mX5MwSGHe49%2Fen5VhFreCyXlKQPZkSAQwwPLDyQY6pgEXXosBw%2FlmJNT7IdPMtkQ8z0X%2BEUtIKwm%2FOf%2BBVo2w%2By4dQAfD1WRq7SvZ%2Fxb5VHWPA7IWHFIjAreqXAW5k8C1ciML508Vn3bXr8TD%2F7oFIcIMNg19%2BITg9XBYp1ylxOq3JnuHtP669rPQI5cA8h%2FndRtIeoGfeJl0mC2JQTXFB%2BE2gr2N7phPIUV6ZbUetZew%2BrgV%2BTNNL9FZ3fo4aknYNR3Ze1z7&X-Amz-Signature=9a343ed5832162e20789e0e076bfcbe95784b5ce87a90057cb096e82a95e67dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

