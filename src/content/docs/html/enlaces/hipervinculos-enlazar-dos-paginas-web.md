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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HX7TRX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEQcFYfPF29faAFumZIN0gy%2BsysjGzKVwJxk1a4kzAIZAiEA25mMz%2FEglMaRAvgXdkjqoWGY7koOvHH5iICu87cagTEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMkEzUKn%2FtUN%2BDSVEyrcA3yRyGEKFDSPsns00gCYR3x4pFBxgqhOVdkoqcGpeM2SYLaRSwe%2FfwV1NWJgaOEx%2BOyxLmfWY%2FrBVLSvQk8%2BpW7JijbmEFdzNgJN6%2F3qQ4yTaQ%2BBBJTZVvd6Npnw%2FwZ47xmkh1iLersLqacLiFM6MbH0aPT%2FNJv3P0ZuHsq2WLD9nT6B7G6tpZAFnEDkFtuQh9gU6ktuRYUEXO1WbhY8Kt83inAI0ijmcda8GvlxV8hghdYE8xdJb5tnBpKKCM33MK5137zQoRyr5NfSbQ%2BWVAaYP79qGnaPvjZAGT9XR7xmk5MhXWAppWadRz6n%2B43mFZ%2B86wlyqoz3Y4kaA%2FugEAMyig5Vh06tlHUksg7dwxF8SMaZ6991AFrWHGSQzZSuOJmtiRcb3k5cd5zF9DNaiF4hVGi7SaD2Wk4G6Fcrsgeej714vALmt%2BY5%2BL9Fyv%2BHYilrbmY88O7D5bmqsvrsJzC7JldqW%2FrK35tljwZObhqg9cox%2BOUu5iEzp7JQOWIif0R%2FegbIHr5vGHQFIEOhQLsx6CkpV2TLAK9wKi9APG8h%2FwrP4M26PLL1Fl6gPIa%2FFf5my4zXZ3aW3umlk0NkYX7a9YTZrQus8SiFaOXTjjsT37HTnUwW%2BetCBagpMIrpxMkGOqUBlb%2BEeq7IQ%2FcRSPDWp%2B5nVJzEaHl8KjqQYXF4J8xSaRlrDZOPQ5YbfXXMgL4kHFqxfwU5NmjeqaQsRpI3o7fdXZqntKG927rjSpto%2F2ouli2fKa1%2F3C%2Br%2B3%2FlXDQsZ%2FjaM3HhdstMhn%2BO691aQuDZ6B7hP%2FgT72f7CiIYEHj5gFepMo1w87F3iYNCMRMSrqdG%2BjZw2J8Ttq0CFn7aZQXT8wMzZrbh&X-Amz-Signature=360f40cac858e946fe75e2be071fc82b9dea88789ff36b38a515eb6185dd8b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

