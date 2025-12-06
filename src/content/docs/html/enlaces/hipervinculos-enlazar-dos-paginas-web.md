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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SASO6RFK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuAPoRSfQjQaH0Mb%2FNAbMXuPA4Cnu61FBA91YIigVLlgIgIWVKKo5vf5j0YuFGAIUWasNh68g21tUn7%2FqtRa26diIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOz0qKsk12088YPdcircA0BoarRh6AjGBVcjij3uOZ1OPoq5yV4XW2oVuSIv1f7FAXj0mD9Z%2BpQrudCu5ZVgkY1L1WBrIWpIaxNouyeO9QEZu2JHM8IaHPUKSmm9vKYau%2B0D8PBmp8g2DdJtXWVOkq3x9gOI1RnfG2AMFKgOf%2FePiBbeyV9pWF3TUPIe1vXgQdlibLt6z9ZILSo9o6l1p1RDHljYHIMUFbCoVoUP7LOWXS6hrUBH9WpkTAEBMk%2F%2BWoKVFDGh5F8q0CVrMyLefx9rtDW75XTV1IoGMJtLhBWb5ruDAVXFaaJmvF2btRKzRaZZPyGvwyvUGT1XM6sp6hOlhp9saGD7iYjqTFVIiFLDRYSb%2F4S2sW2hm%2Br%2FZ6rNelzSPE93vUxlHbpgVLgPslk0u0JTeLfRPK7tIWjUUUO1aFuT3mpQ4F4SWcpJmtErJt817vgaoZ8%2BOeWX%2B3Rlz91k7LL7O6K4dOENFH5yqp305rNJOlll5ZxlxGWev4T5pcPY4jwvHnfUVANSk34yOSf8yNoAcjNbPB5mf%2F9GoQ5GbjPsbc0FEHRB7VsQrFqr5Ob8vDabkkdRUKO5%2B1siFWlzH2f2A61NQo7tat%2B4WpCCVhtBo4VsvQn%2BacYusbAoWaI1GEPrhXIIpu9UMJXT0skGOqUBUvYDgIZj0T08266C0koEm3k0kn1ehxDyA%2B8hoRl7PCHia4AQZaDW%2FvaQvWX7CPP9Ee6j9GlI9iMfDXFg5ap9gOHGg%2FzT6SsKKZE1FSni9MFqzu5IItHVnZZkqFIeLufFX2dDrnrZodWuNVrZLOdMyzMSlu8pcbVsLW%2FaV%2BcGQqm6h1G3QOGj9xOilO8huplPOP2mAvs3sAp3TyKRX7OsUgibAi3z&X-Amz-Signature=a90fd8b677d4b40868089dbfb9708bb2bff6527df6ca625e7b3c705d5833786c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

