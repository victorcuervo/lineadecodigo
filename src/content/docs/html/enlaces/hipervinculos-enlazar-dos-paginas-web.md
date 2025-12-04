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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDEQRPY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIB%2B1NCqzRrWmxkFO%2FDLtlPGLSHfVZ1%2F%2BuV%2BfdtO%2F3UQqAiEAtoJ8tNNJPS6hBWWiCSq0o7K4eQTV6ZHjnE0dieeBHoQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHooToq%2BQqO8IhFNUyrcA6Idg453QRnO0Z8mOA0vKnXFDCjzwM5FR5H%2FxgraSB4fSn1gSUQ2QCacjTSL9GUCqn2WAnf258eH%2BthfE2TtsGtUlnwaKePEfP5AYxxB85b0Q1ylQkK6p%2BM2eC5Z1xRDF9AJaKOMzZYU4Rp7wokRDt9BBfyYL2r%2BU6kMGMo%2BvCVOdPogFfJ29r8aS9NPxbTsI%2BUdKIvCKYqKc0kKfBGYopZJEPFLKTBOzSByqeK7paETk9gkgpV3cTWIMRdtquQYkw%2BWXql0NSLOPNzSJ7srZPmhfIEZjjxXPdcI8LoxDjxCB9mHpazMleuXTDKaz9PMyL8ohsYffUKB9S7XxRJZmADzHBciDoJCNz1ldLsGdhQo06%2FrlHsj9%2FwPt2kkT19QvgfL8tuVVaeSHApOWm3rKcOV3NvzFVB3w1Jqj47qmtxO6E9bzbgVojoLSFt3wo57Gy0Ad4bpq%2FXCV7KK4DDuelvuphfoSC73wtcrSvIF2AcyDN5kzKMMkhI7lyu5mfD%2BXN6W9q3%2FzQYOVcE8nGWkQH7pjSpQKLCyxNjqXALfrnh%2BSFhQ8gHdURqN%2BWbMFclsOW%2F3nHtQLMmjCIq40NlwQCGegl%2BqnbT%2BA4AxQVega2kXEsN%2F%2BlBq0ahzNAB7MO%2BuxMkGOqUBdOEbCpQX0GNcMVCXewMD2VbH6QTQjo7th%2FoP5dp0RMnsaU%2BidTOJovKYir5dFbGaCElVhMIcrsuRMc0dmAV%2BJX6vZMB%2BYGbl1C42IK38JDMwbDkuSSMDwqvj6PSVAdHBBOyAijsDH112ADlaHBjP2dujD0eHFbND34ftLqZL7BauEcoIQEsn2ZfR7p9w4RFiGZN1aNyugNcR8lh4Advy3abfwtwe&X-Amz-Signature=1529828c83d6b65c3bcad8c1150979f31144c29844b4daeff3f630226769e7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

