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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TFUXB6D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdsVPrFDnCqb5Fo2udzjsuiIvmzdkBWE65Sge6bkNWFAiEA9eQTO4Z4IAtzkTrfmzUB13xUfWwLwhNaBvnBG76I6goq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHO0OllJg3DjL%2B7fNCrcA0FufatoxAq%2Fy9r11Osll7C6c0w7zEEqAUOB0jlsAK6Of8e7qH0kkfhejl6wnG%2BCHrlW9ngymPX2H5Bqxt%2BfbYOI0DWDo6ifojxAKodv0i7GLg5NJL9maqfY4PxhU7ar6IUbjwz2AJBO%2B%2BQmLCxpmujxNEj2uEFBWhR888LKYB5dSn7%2FaQAqZRG1R5PPVu9HV5UWJsPpGwGAeanR1DRydRWS2%2BLvmx9oD9e%2FGZR2ogEBAljOwqLLZNVNXUDQ45PkQC6CdiRAZ0mFv9zqWgSyBO%2FFeOCwDT4zoMeED%2FM2N%2FdnuyScSsNkPXOlCP7elDCankiiiqGv3icANKTeayR1x%2F8DgUBTmHBZFWMDwF%2Fw%2F%2FRu%2FP3PvO7mSmz7041lqFzIn%2BYx6ggNi%2FccfbbO2fedKm2DwQFPxJrAUqAkmbunlArJ54jfuNfMdwSmVsEHwyUFeFeSq5nTNI3oW13eU8ShlxxscSG1xibhH32krfB9KLsIBg87%2BI%2B2j%2BGcNYj7hzdcXNdbGGeknq5qA17wsj%2FfSEJrlaSrvARgPqBQvz%2B74K6%2Fdwou8rffU7ueFnyoL0PbHaoU5mvrAvIuZITxPhQSDyGVTxvCRVTM2yIDKm0V%2FVibPpiorS01ivRPR9KNMIbyy8kGOqUBhIoNUywhm2LKCWXGFmubQmZoWP1pM1uwUB2n%2BiJTrGsNrsTB2aK4ajBUM4o0o8ERf16rQh0XbeuSMmGSEWkBUFTQDvnXrUt%2FyYvUkFaz2MvIbDnWvR3H6bO6JCPIyxjm%2BgYOXiCxWn8ff5mEb472N1gBnSLPt6tgc78WQtBE4HtneUabrclFG1WJYRsdQqKXBzfxXmy5AT3GfyYaGz3NbxWO6x4n&X-Amz-Signature=162f820ffc84dc30ad8d876dc6c2c0bb03b6b02365124e30cb727090c6d9509e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

