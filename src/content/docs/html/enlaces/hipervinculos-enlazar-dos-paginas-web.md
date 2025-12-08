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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CISE2G7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXZpfxILXasC5%2BvT6ty3aWtxvpPi0bKcNFrQVE4atm0AiEAtArW%2FXTKyIVTUz9ELycxCpXU8t3%2FGhGQ3MWuXP5ElRkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtypVAT%2BbsLDCvHOCrcA3pSboTAgKeWBtZR8c9P90GOWkLboKISqiw33r9dRseeQA3d6%2FtAgK8FzM1SERWHvlnekdDFaWp6aaawLzyYsv4%2BRpJ5laysvN3bYsQmaC46jtQVYqngVxXITjmwU3JEavRlSDaJg%2FZxHnci7OEAweG%2FwbGZoyMh7wPnZVE9Qhk78BHOQ0fLeu9dwFUAv7u5H3ORIaWHmeBbIQAixiI3j%2Bm%2Bc6Wb0bMCOyzkAonbgIJh6RoY%2BsQKU0fm2wuvHExtCZLpu20mWl4%2F33bhJF1qI%2BfShmYLv8LxZsOjm1drIOCXj2UyfFw82xVKtM8ayZCeSmShQSMfY4uX9WUL0uLhTdkKBeh1Jp8Z0QAfcVgEBUb%2FwtgSDeOcI2f0dM0JEGzGGgXNyynRTAeq4O0foeHaKU21Bx%2B2yXsLNlWKNSCVGYYl40NCODJxKm5S8znpDFT99b%2FOqQhrENNP49s7U9E%2BnTY4tPah9poJPAx%2F2oKyaRhH9qT72gzPxaRz72wTl3LKtKzQSS51f0%2BNFLlCxcYF1IPC6XcC7cm7%2BV68wPwLs5JEFIrBvfj40Ufd8HhjpkivGNG2Q%2B19wAlx7gKygKYcrnmzvJdTVtmuRh4b0hn335eVicwRAcxM0EiZPjnfMKXz2skGOqUBK6y%2B1loU3P7TQDa34BkQkzu9HzxkZxbAdlByNWc4OM3sXxyLcAnJxisXLNZ7T3GKxSfOSDOMwPXDvTIVOF7gpS%2BmURzmMQF9z9kUtmDnLaOO8imw%2FmcyYNbo%2Fjdqpee3n6tJprbPjErC98d%2FBWAgkebi4pJH6yCI%2FwXUbdnzRJlCGD%2BhagjkLIOSRpycFzmIJq0m%2Bu7c6x6yR4%2FXJof2nLAzCSVq&X-Amz-Signature=a8d6b7df69e41a8b57ff3a099998d53c97774144348737681cfc2c5fece56a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

