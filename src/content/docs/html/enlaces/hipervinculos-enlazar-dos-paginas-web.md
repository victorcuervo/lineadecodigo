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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQQDVMW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FUUX9ji2pJK1tLWCuXuTJ8mLndbSvlgXB8%2B9jYJ4QHQIhAIH967BiRkn9f%2FNAEXRoqFC9rF08J1W11T%2FxFUZ7ElYLKv8DCFsQABoMNjM3NDIzMTgzODA1IgxS1JZLLH6ahuO9%2Fasq3AOBOr19DgfhoBTDF5qcjcbjmTp28Tb0poX%2BfJvNfLiVu9fWRTLbnZvgVk%2F9%2F0v4Eq1PPU1ojIRnaA390WopJj0w%2BwD%2BLB%2FegPtM26%2FMp8C2i9sh12DVhIoByK2rbzV%2FgRrOFouA1t8f%2Bd0u0Y%2BytaEbeL1ttsIwYSsI9oIZaKBNJo4sizHjsC0RB5w3BCeWCgzWlhAENu4yVPKOtDCzRkV5xs3ygJ%2FgwlQ4Q9bGlUu%2BPbRDqkS1IsfJk24fr0pz2tlPxU4BJpEbrg2TiMLIu6k1K4znXB5dhMegigJU9bbMr2SLej8qMyMDglpkatNIklJfJiIYbEvuxajSWlzeOQVo71%2BiHGlrqtU630L3Sww35BYcIO9fxUXNP%2BRHYp8OTio9IvS43UZv08McgustFeBwTzFD3PUkkqMO0A7amTEqLx1vGzQi2SYlii5Y8hwI58VEImP5FgQ%2F8m5BHk5dgpxC1qgkN4OjL4W0SWAI%2BjAbW%2B7lfZb%2FJIn9kYKSeZrboAGtrkfLmUNHaQS2I%2FYo%2BJy%2BZtKpyBM4FxqYgPqFQO6I3iLoNAhg1NTiRPN7A1gZU3MymD2rwQxO2Gjj8fb%2FEI0xWbEAMsUJDiDImy7HiG2heUxceWmVhr%2F9IT7JgjDYysrJBjqkAZAkZfF%2F%2By7hTRE4hOKlfWxLnRuHxYRbxuHrASBEK0xNT0V89bAHHWG9JleWyCglyXKSZO40NCmWY3vCNu%2FSukLPNNi722EaTtF3j1cdzqh%2B%2BoWQRKbsXP3%2FKRTea7%2BTEBHVnjtTRSxzjPEyl3O%2BD5o01xR2ZQioMAVRTyHpUWnbNxvyiDhY7hbR8NdD7qLuHBE8eNzT69qLq8UXTp09n9OReMIt&X-Amz-Signature=c368a5b4ece47b3277d7c5542a08685d10929fcbe953ce9de1f024ce31c79350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

