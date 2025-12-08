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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLT4UBG6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8VqGdBrqkZZwvrkcoVdSQTUetNeE3kSArUFrQDjTddQIgLsXaMZ9rh9KDwOS9mMYZfDSL1MWcESUEiIiB2NHtqh4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgxDZwsloxoYIDftSrcA1Lpjfym2gj8d3HXRdy5Pqa3Nk5NluW0zc8wCMU0wo%2FIJcrhh9ophICGwFi0I013exBy0wxNtVvqPgE%2F4lLtTrvuurCfn6HE6YPUmdXXH6RpkzRZAnSurNXntJVKgSXULAjyuOB76IvBjj57yYnBR78PIZuYdcHmigRu%2F%2BfDYK4BfyaNhm2Fr5XVRgG4QX8fTtwm5L0PCaasEJcpfFi%2FMMD84B94h0dX6jVAi2OIjtRusBtWG5%2FX8PoYi6y%2B6CUAdbgWnD%2BeSSaYDUn332w%2FFTjfklvexbJbDfpr0hdOtOsIHDca4TmSeGsoSlnXjHkckq6nrDWb1hVpPqeVQz9VEI0wKt%2BAxZQRypoKqnb7QD27PeL0hRKpsvCgaQ0N%2BAclrWoNyEgI9qpMMo0zMTSQKFeIph%2F05Ro0e1iGlcXYaxfxv2uWcT3MnB%2BffN%2Bk9hi5hHhkRYoDOLxZXE5P7DrxuGbSG%2F2pjEDN7gVFd2JQqwAC3SBGghB5Hp7oXXZF9FAWmuAOcUbNj0T4%2Fk78IBncWHEJ%2FLnoyXSKEPQPJLMGz%2BnfTOQ1gRWPg%2Ff8KQl9R6TUnbvrxPYSF1uPtStoUhanpj1Y5Vr%2BN3X%2Ft4O1vZzRBLPZDqmoUO6T%2FaqH2mFnMMOA3ckGOqUBkDs7DaOBwUpO3bQAGH1Y8VJPPupYurKtsPLD4u5N3nqiBfmyS0NWnLbjg0U6tV1tmFmBUFbXrObqeV6eIKvKIpbicG6Gq4diNC%2FEBxF4Kju26dxsigiEgX7g%2FVFWLeECPlGPDZDgIC4%2BmLeMoFxFSF24HGdFac64ATsw82BM0is5GrImkd%2BzW8ktaxpepZoj9M2G7bccWXI1u0Ch%2BrAouXlnN%2BJP&X-Amz-Signature=1d4b0b4d79eae670ed89bfc854db6644f7953288a0b70afe3a4a142078671704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

