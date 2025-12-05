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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VBHTD2H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCMYQGX7lucHMh9j1bWW%2B%2F14qDxaRJ2G%2FZbWi%2FjP0v0gIgRreTFHpeVgq4CPA%2Br2xNw6clVqJS2KofRrufw3yYg18q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHfp0P7xVLeS%2BOR8oSrcA%2FO9pAtIjAFwqoTz5emX7QF5amXKGrXRVfSz1qzaZ7elTuTOQm%2B0lcxLycY1y%2FDJp2utGwxe9evOtKRO12SKQHv%2B9nV4GkTEi6AlUFzIWWUuXWihFTKBVwe0H908COk0Y5V%2Bq%2FNWlshd%2F0YDLsqrhGVGCBOJgGgFlm26K%2BTgkiFqlg0pSob3dIaJrUhGMd68V8uA7LdHmtMWxnFz1jzaq8%2FnsuM6NaFgHdir1SHV3yI30YfX%2BEQ4Wkj7PYpT2WscDHM47DBwjQ%2B4ZqS%2FV7MbbEOo7MN1RyQmrcPRTIPE9NGlRh5Sp7jWOhtESMsQSDOLjtZ82DJvLWglb529SYAOz6ccenfU2aaOVNd4%2FZdWE6AnmtM0kFXOCBJE87gakmB8tZ7b%2Fwh8J9UDuwitlZTx6qjif3y3K3UwdhGx1LxhsbLIeD%2FeyP0jDe25oSpQhwzKMjqMg2qBfuuASAxJmdUu5hIeynu2jGlQgeU%2B6Q01uoPKmCW%2BtDo73m%2BDxqdQb%2B%2FD2EHKMXpfeAwsTr2NSSMRIizcqeHJTjLRNEb0B4SozIEidf0Begt0C%2FeqeFCPypuylZMTS8JJAua%2BXcHH%2BKwLk7osvzOAK%2Bn8Mfhpkek%2FKB72U%2FKHo5V9c42heM2tMMCpyckGOqUB06E2Iz8Ekn6Cp%2BPwPB0Wa1Bu7%2B1b7hacfEuyKfIEXUz4gePDEoMLK8sA5Ng8wxWMDvHEFm9L%2BHq5M0k3SKwG9l6TwvcykKavqCacIs1HZxR3ut8CWfoAMIrTRT%2B5xQbFc6%2FoogJtM4t0Ox8AhSkTouLWdDcDABOY1Pn6vK8AzBIwXm3E1MnAY269L4qHGNN9BIS2cnGbXYKNvwcRc5sr4MNGWCqP&X-Amz-Signature=d25cedae8b0f8815ab9c21354facca8e776c35720c5a6f87e6ff56211d027185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

