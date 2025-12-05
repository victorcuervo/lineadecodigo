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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOUXZLV4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH5jLvyTUDEsD%2FsaadNrHMHY1GhrG%2FjrHA818F2fncEgIgL8phVGjv9ATdfG1M%2F9J%2Fx8PTdgQGL97a4sJlbX1MkLYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAJdNlqTJBUNjr2KqircA0LQqG%2FoiIDKD0LdTdGCGiFw%2B6EzutyxPW09Ust10MQceUuHk7jTk75wt6%2BXMYdPx8pQIq5hLmIWM5xN5hpnSK69P0Smz1dFdd4MRC9EE9D%2FEILRTvXCPxuPAfrbRGR1oOXjnrhZYKp%2FqSHrSuNCaukuSu8Hvs7wKdTYmByRYDnFSZRlslUzhhouh80Cqelt44UfE4eRAV2s7KHjTPxVZQUzKvVBGPqgvVmahJXXEdMNcALMPiEMe3kG%2Bt5qSAA9ifPwiT0TKRqTxPg%2BWlRsqVWCgQaxWg1F67IUscla%2BksA2cFW3CxZLgg39Db3fPubQrpqhCOBp2RGYA9cz20pS%2FKyRq%2FXazP1f73FIQe%2Fy%2F2nbdtqGn8xIO2t2CpEHGc4Ur8UHxSJ2T2%2BpQi3OdjBpQucjVctYlXlb9MMhKcP2YxsLF8DRDpzV4kG0p%2F8a79F4tF6DYsgki0NQaB7GsszRKK0qK9CRrjWyMBos5ar0OpVBfcrGnqJmEUg7kHhB3AUuFw0bumKIUYfyLxNo2dW7W1Nr7qYC%2BZVMJ4G3oBL9hYga0dF3qUwwitmBQuKRVEFUudzOCKuiKGo5MENhK64Yp8pbWnrVmEZMh3TAdISm1Y1cDEtrQPnrqsXDQT%2FMLCxyckGOqUBtWy7VJDpPRYPVLexhg15gn2ZnNr5Jg1GAsHsq84lLIFK6Q9nrvWV1R4CXGcmzsXFASLBvHPwdHmoGILMSc%2BHhook7%2FwM3qDHXmZs9bG7cq%2BbdDsZOg%2BQ4q8lYPQ53i%2FiZI1VdHe3CgVhuiYEe8FR2LchXOfrlnU2egdT51qco7GnGWs8h7ExjAeJyOSTGqYyAGUvYkLfb5GCvyTsDrjTxPADNUxq&X-Amz-Signature=03e45a0877f9f52382d89f7a04880e90263d30dac4451c23c6be933dc2dda901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

