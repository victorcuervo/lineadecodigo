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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH3VQ5CS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbqYtM%2B4wnbzX1rF07XkzXijyhAuQJxlpsG1EOVrDo7AiBgntXLsco9KSfg9ZPx2nYjTERJjyNrppPCvjIM7Y0jgir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMITMAmGMoDK6t3jE8KtwDDnFxYs4x62vABpvnfh4%2Ft%2FJXXgxlFApDQhciEoNetEEUEy9ohBmhwmmEIMzixUXeCWaBPTI220OXnVY8EfFfDJPG%2F4Q2HeTuL4qBGB5OR%2BxAohruMdaszoJAvsyHpCqOdcl%2BKPJ6K2jBIE6oBMFEk2Bhpns2RZbvJfcp0kpyiVL4hf8D5zEPj5Czapgbcskf7d9dcmsM8Eu6UHF%2BjMwXsrdPWRPUMyFmcW6yVlzQxhMVc%2Fpaqbf1SX78dF8kSc%2BemOCfRRYmdgXFB6HSMlGiBbC8Cd1P4s%2FDTyJaOTngIL43MuyWL7xmWhcMtAYB1QuIX4qIEUNdXb3YVrYY2q9hALJ8iwABKt3TOzlES3Ct79eJeouCbo%2FkjWg6%2BbyXIHDn7lFgHPQBXXpW6eGmDRdxDOD9Okd1SzI5iOSTBUaLZSoJi3MYjPNwhJEHq6JVw7M4%2FtZxlx%2Bl%2FLu6Ig0SeHmQLZYUQ%2B27U%2Fcq8CWSW4Fv0RU6xoq9qqzTAmhBUQ%2BiQOooca7L159btwlGmboh5dkb6udFq9HPSSSBwB8vAICV3bL0MlppBuqSpC366%2FMLsSNice6jNhVtgEUsGHU6uawc0EJT7J2%2BYfH9OJsdkb7pCwAoNZSiIs7TXWdE0lgww4zIyQY6pgFwyqR5yoTBGKKWct87HknO84CyPq0Y85eSWA%2BhtzLwLpE2KHUe1b5YbjhXgYY4SvEIDPM8xzbx5HQB%2FIlKV%2Fee0XaOQebwXtVVZ8J%2F1j%2FaphdYqZ9L2d8WwGF0HVCIQRhjxX4OiMWHNdqzvEULRYPTF%2FoQuhNXmFMb6KBvzBBSy33yNfHGXUUIwWyG4lrjK3H2RTmr6Vo4wsbkaNMLik6oU1RXdXdK&X-Amz-Signature=d1ad7d03a32e15a57133f53b64aca19892f563b6e773e2e00d7b77311e9c9be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

