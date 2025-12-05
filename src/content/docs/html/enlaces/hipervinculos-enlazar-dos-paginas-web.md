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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKCC6R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFmhA6mW0%2F1oL1w7SgdxNAvd97%2FeiHIOiszg55MSgOHwIhAIqyvvfs3ggyCanyWty3Sxr%2F8ui%2BL1qwI8YTiyjqnvtZKv8DCGAQABoMNjM3NDIzMTgzODA1IgznevkF4nmUrbbDW7Mq3APjettAJZbJ1E6mGwkCWSYky1hmph8dHvK%2FsohB8w0%2FMXE59%2F932NsDZnPxdVVdjPWXLB8vNgWRsHQosqJjvVmKaqzDuT4ZHkR%2F3LjfHvxLa15TeQ0YdNP%2BTA2H6JaaqNAsbYyoME7WkIj%2FcN%2BAIWZ%2FinBy4slrELQgzYgCkfQ6Jea4Qh6zmMR6gc4qzRR%2BLAzW6AgReOcprgleaOc7r8UBLMfZSBMZ8kzKeFY%2FQnG%2BM5KPBdFb4dak0UO%2BuqNzdxTgD2uRnzJDso3m8lvP6dbfpZ%2FSblvlTA3s60lNjb1tBOizHMXVtRAQyNK865jM3gJ5htZj2sGhN72nHZfDRNgKsr5VszPWlm3Ibcmks4415tenjzgaYKU4aw5nBi2uwBkoSnSxY1AKoZGR%2FWMtq31dTssqm%2BIVVl30Fov%2F4f9nPiS3Mpx5ynfPfMijUlKu11nGDXJAR%2BRnFCK2TW0KwTrqMegP6prjTbwEdWR0CnZ4LHVCUICGj4M5XH3KJJq7EWQYM82y7Ss2BeOZ%2FeJjFFQX1IxDKmClNe8Dvbpf5KmggILTVTT6L4y%2BpDf%2FXmqX%2BLSDJbdNknxh5Dz1oDGiKBvDuwDof5z%2FdqLc%2BdGW2SVG54OkqGov8iKMPEZTnDC77cvJBjqkARSHHCUfv4BIYKVEdyals6hW7EuCMugwuP0HlHm0qJWewlf8NGe46wK1aGVAsfU2EkyFVO9B7e9A2%2F3r3kohgwXrFt%2Fe8nV6Yf2QVLlvJXGqnp8ppcXMLbIWXYYAhTnecVfdotZNLshtDO0F9aPCt9nbWqr5iLgy5QmoHhDrNpYXFfedOGLzqg55IH%2B6JK4hZDnMAk301seWImthv%2FAW3E%2B5dobL&X-Amz-Signature=de03e05746fdf25307854f1d2868856447bb4c1a76017ba7f0b4c2c21f2a8450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

