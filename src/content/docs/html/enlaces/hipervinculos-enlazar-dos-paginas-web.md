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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGGG6MK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVnHt9W3%2F3yUxxiqGsvc4w8G4HgSYlnRlX1oOwoUs7aAiA0AZCVpM%2Bn%2Bp4QjuzM%2Bp2EiZ%2Bi1%2FLp955l6KUDLLLV0yr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJkTQuxqmJ8WaqYveKtwDYwnf8T5I3HbYWVvHkgU097O%2FtMI9Tj2YvQojwlkzANwlfWc6f38oRNmFAySSMPQvBv6YBEhBRDh6CgE%2Fg4rP6AjrDZNYmeoFDjssFVvaL0lnP6%2BIkNGuAnRsBtgnpB3CkG9J5Os5sbnmUoTIEs2aVdPwDpPn26YKcPO5gJ88mzR9pC%2FpVWAuk0II4L%2B2bsuX5X3pEzUNDTtk9AbD%2BxNq1RT5AIHKOHPKkDoZfd5SiDyaSlYk1XEzLvWYMNPSz6VNuMOBFhHnZTOLLYMCPRkvaOvkYhkCYdRLdef4ibJ2%2Bn5FPWK4jH0FEMa3J44r%2FwRBuAOI4Jm1OjvaADELLW%2BwDSJV%2BBIGPWVCbCM0K927BXYKvLYhCuDMHcrfmkY02pHZzZC2NP8SAk0eme5nEKeHtYaEXILY9cHeP7pqMXx%2BabFcLmu1S3y2wUDV5kaUnbFUHifYwz8uhcADDn6dp8v7r3LbNOecwVM0UAcgqioVzreKBD8WcP7IolFaUJMiYoyBayOczhCQsLSSlYWMK8HzeEs%2B60Cb9UAoE8fFYIviRCr5GIXBkvoJowwnawS9Id3dGtsRMaZpZFzBOkXLkNYl45A5s6sfLB2zmDGfBbH%2F4lmNNnNWjHVZG%2BXbv9UwxvXLyQY6pgFH4IkgYuO1jZ3FCgYYfI2VTQK8FoPwcmpPMQnEsCwT6vcrG9xJ8R7FJV%2BfWV3LjyRva0pz5pvpJlzR3adGLkMzQSRPHgLYBoWThuSGfjFtrnFS2vrQTfTLnMdL1h9QmDchumcD42qAjJ7SAFWoR9iIGlYBBuWClpViGdNYrKq7mmOMw7MRAieTYOL6DiLWByZD20gWa9cL9VupzTXJVqj29MtohDcS&X-Amz-Signature=5fda4baa77a932a3bc4938d341b711a0f73d071bf2d4e9d45484a47332863103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

