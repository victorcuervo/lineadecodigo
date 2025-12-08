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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647MBGEZ2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ygsR8a7qmb4LRfPnSD505bbN1WRQ5uYVJ9NOmmlooAIhAPOCYx7nu6TOYtU6q5BT%2FzH5nBHfkHYrQv%2BwbdDYYRqMKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydADRCylIudv%2BtK2Yq3AP7iRPD3uPUICf8aFeBnBVwiLI2L%2BI82tTPBSVMwe6jjsOxYcuwmkfEsPoVCsWHEq%2F4pXuK9mVyNqtmsk2VD3LTKagsOePFcSfW%2FceH1bEUsfhEmpcPC2fU2%2BNk8Dnu43m%2BzjKzSzoEfo9RNdj71FGKK3uO0JqmknP9rl4Sf41WlczzAeH41yMiTnwOgwooAuJYDYL%2FRqut0AQhGzDRPg2EezfEyQftegiQEWCUO3mEwgZIK%2Fo3BeoKDrdVbypnkzxS79PNcP0%2FPcL5vn99Ibffd9R4n5F3d%2FF0ajadAEGrAWEmDxnpeEW3DvhsCCJUYi%2FMDnVbL1wllIzDfiHKqJBEL64q4uf4LFm8bpWPut9K1AgFP0HB0FPTgu%2FQd53EHwcbgEB%2BeCO0Bhoj8bVSgdxV44tffvlgX210WmSKQdU3W154Edbfmox4T3KJWctSRWyecJq6JKKtEVBrrgQXOlpnKBxwQtWur0x8kVo3psWKdTHUKlbrvGIUQ%2BR%2BAfEQUV23al%2FpkbhfYipIGhDkO5QxU0VPxFg0JRKqZwkYqQrKuTlvIlUtIk6hw8djTACjjFIleNjEWFZUVdBr2d4TFLrzn4Hu%2Bdxt%2FiuK2zYN2KoZ8td7BklnDEQU2LB%2FNjC63dzJBjqkAftuoJrnzJ6Kiqum2GtK35rG%2FO8vSWo5khS2r7pIWHBlEn%2F6DuYwGFQjmM%2BBvDUVpAaHcYLq04g0KdQIuozA2jFcLdn%2FJ8iiq4xpnCekmaBE7EOvhZOwyOdCrIaMqmFcv04ERAlqrGi2faoA4iDvkeiCjRDis0MOHMh3n1VpgP%2BatYSmqITAGaMwoDgeAOccEifpvtDNbSaz%2BsqFJAGC0R7mZIMm&X-Amz-Signature=77207bd4275786af16922eb68a460a89d88571a4a5a912a1769f981a8c498d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

