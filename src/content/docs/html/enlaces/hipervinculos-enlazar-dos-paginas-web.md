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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666IWP2X3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEvCwzCKqTtZTGyth29B5bQvsfWth9UYR7UkU2CRvyKAIhAOyEWlgFoAXrSOqmnD16BIVJwlbRZ9cJebRwAgj28a2LKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVim4Ogbu%2Fp7OvPmsq3AO1RgNpDMvBewcVPxJdAkThImc0VqAid3%2BX%2BCRec0T2nhO%2BQFNTWkQubbi8zSmHFT%2FIddeimZsQg9KObBrR9LLd56HME5V1XM37kRWVzYnJOhNcdtQ3SJOe3%2B8QC%2BQDLGSo7Ge8YS5dlW3xQyDvZDURZEtzUskw5sTqz%2B%2BeRBOKelZRJUyihSZ%2BR8S8cH6JpFQvBew6YL%2FyBoRIhNynRsOmUon0bpztV1cHtnCE4xLskiQ6fcMfTikB1WKP%2FerHLiFUCOnTgDeK369ql5WZvnTR54yXhCC2VT7qV79i2nkCE4E2sY6V2IpB4S761wDxBTOu%2BzH5BGkbX0V54qmAKFptvUbUEoqe7yV9bUlENR694WAekMvYbidf7ElXi0NzapixLZnv%2B6%2FBqhq%2FjZi4jylOA5p7SG05rct3xx9fhBVhB3aMAblPj05i2hlK1Z%2FgGPx6wO54VbUaadaoCX1kzQbcN5SlHNwC0tdIU1%2BUvjJe6EMs5FsSPbvFRfoM%2FgYY9Y%2BhJOJPI5k8iQdILnMX7fr75ush5LnxlY%2FxHfPR0mypGGoDu2u5UdM8j57qq%2Bberh2aoGlBM72pLqnqPaGFxicwHVWtO0T3%2BeS4%2FqMqVL%2FGv4ep0KkUwnCsCowdADDB5NvJBjqkAV1U0nRBsnvjFxSktpBKkozUz70slK9ERA6OgnsvAy2fQNm7%2BXtGsz%2BMakmRX4kOJMv3p69DWxJcv5T2tX4SFmfWjgXb6%2BXAZLzsywvmq6S6Lann56HuRctNGMplWZRUSfdQRWa5RzVWwyTxHHyhepzVk5mpGAZEngBmAo9bMPfvz177e3OPy7OvWRO0nlNxgK%2Bw%2F%2FwjFryP%2F9LKCyYoUAnJL6Pv&X-Amz-Signature=c545ba28969cbf7104337dd788a22f6de56a025530a2d563cd375ec691d465ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

