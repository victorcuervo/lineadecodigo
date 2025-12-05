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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCSORL5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9IPc1roX7MtyTYTZQIe0oUlnYk2dT58y9knmUoESFyQIhAOIRdZN4BHBPGgVKLUrxW5o3PlY4maDlxfrVCKNKBfmBKv8DCGUQABoMNjM3NDIzMTgzODA1IgwkgIZ3nIoYFF3R5csq3AOj4afTWSNW39xhm%2Fbs%2BL0IXGHZzkhYahxr0ciPG9EhnHoP6vCV5y%2F4go4ClouhDk%2B0ODYYS4CNLgwhZMmykXL0lRWaI2Ji93ELfKPjRcxzDs4ZK4FYDC%2B8O%2Fxs5gY2IrGcbQAZpONfCdko6GcPOmlyaL8uVX%2FhQ9waf07IfHVglFF5MMFdku3qSQDZ0zM5G4sHtBsv0%2BHxjHHOSKBjLcG5RV4o4BPt%2BMpGV5QRGv9zEQdq%2FjV68pUnu1zQrmkvVDSgGQuZ74pB6uJB%2FGbcJD2N3VWmYCIASEg%2BuuhSu5x0s8xnFecE71WEXIR8GpI38qlZZNJ58D33DQc84krqrHqHtIXsvQLNvOJPjxHZW32rKlsTcGdksASr2NQxyqvXjsQLQnyVGSoZEV3hxBro%2B9Jii79sDpgb%2BiYUl5CFJY6RVW8Vu9YUKbxgkTLoiIDVQpzgqvjUBBKDqYDnwwfwl6QZqU5oqWYK3Dsnhs3mJEd3lFbXjkIhC3SlED2cxYl1mBGf6XPnjNnGrUV9NSQ7m%2F9IMHq%2FGMFOf4zVHdwaZ64NwDQvKKkwHyt1%2BkJmeChMYPEPhoUby2rTeQ4wmBAf2F5bAXrS%2FW%2FYm8xtfEK6JG0N9uZxQgmjXqyzj6f1bTDn7MzJBjqkAUpk550YTnK0FjxMFs2POH8UyTi6yL0hPIXuDbJtbPqKRxu5IlczV%2BoMwjTaWwjr3%2BzYYxsh4HOYX0ZiJENsGj66VLSZDdpXi4Z3hFzzhvL4xo1mWpoY6nwZe5HjfV1%2FsOzOX5MY2cYp2%2Bu9LnVd2Msmna9GalIe7heWIcXLFws5IHAbkmKE7BSv22sQDHZgQNq9uSclqqzN%2B%2FDkgihZ9Sfm%2BK4C&X-Amz-Signature=d0552a9fc4a80ddde4fab261c45e612abc481255001815e9db40623f37bbb0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

