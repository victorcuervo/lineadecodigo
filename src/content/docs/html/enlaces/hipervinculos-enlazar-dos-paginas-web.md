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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6XZTT5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbX5BTurOMJx5b5xyoF16yeOpcPxjcD33V%2Ftr5CCJGMAiEA0FqbS2Ur8Unvo3LxenelK15%2B4PUVbKNHZdFeiDWYGqMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEqVNBHCAEDSG%2BFZ%2BCrcAy86DHDu2%2BckDPShhfnJVhakvw7jHwDK1euiN1eFYRY%2Fnny%2FVZ1RmXjadUu0Opl7BArfMOfSNXVLVcWH3QtZB1q0%2B%2F2T%2FV%2Fi0F%2BejG%2Fy5mOq%2BdOjm2%2B76XEEg%2FKYnn%2Bu1bwAYLorg%2BJ%2Bw7prxUOd%2BmKw9x%2FsAqQNzaSDnBh%2F26KjSPdMYl7lEzHPXPt4ZOZ6IJDIFF5Q%2BN%2BRaMyIRD4lRHmeYZhdALsdqYyWSQEd3Phd70LtI8MecmuwATjxJTkcd6s0JOX%2BMLw6ywb6MLlBhfeh%2B2%2FTQJGym5n0QYlqw6mNiehFvPRkXU0oV68hLeaYxD30HHszSctrdmIf%2FoK77RG1VGSyaiK4xoT6lH0%2FPxRXtBUx1wooQgg9dkng4g9uyK%2FUWJfEECq1KwcdAprCDNsjVVT7y1GSF%2FMJr%2BBW3CCQtwiaxt0UIRR7zViFaGQE2fMFOjZJKbs09OtJPbN%2BSR%2FJgmKWaU31JeywzwAgmIbyM5VrOHBXSQdLZ8us0%2FQjeG4nMPoGFLJvKayS4Yif%2BgdBHM6FK7EcfVEmTbkRs6d5wy98ux3vlgsZTXgL5Lmqpv5SOczW9%2FWe5l2PTiKMZBKE1hT%2BjkcoseX2KL8qCeJ77ghBGVbQb5bmjyHjMNOwyckGOqUBf%2FVREQMQw3TlncMZK4PWZIFsETdh8L152JJNukfR5zUOKkxpLOMu%2FD7ziow1cLKBR9B6M4%2Fq%2FpgMxq7ZKCUcatAU6CyOLwH7J9UFvZg%2Bhi%2B0mPrR5RLrGfEptbufm5fYfsJNvHaddaYUukLQCjxLsHzewaF3RaY8hyj6n82AgTysCy%2BNqBmcaCceH%2BPbslu520ki0OXSQw9Y7EBRNFFYegUIrjMr&X-Amz-Signature=371035a02124361035d611fd089016879d9d56b5a2df7d34d0b6a84ec1b7e708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

