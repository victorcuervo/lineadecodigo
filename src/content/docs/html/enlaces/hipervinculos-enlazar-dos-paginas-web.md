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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2PYOAQN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbKmLWTtJ3SHkhGiUpWrzV86S%2BfaB8noyu2C6Pj0m4%2BgIgMMv30zWG7PMIN9QzGoepIBJupeqL1s13%2BJ1DllLJoHMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF18luD3A4Sv7Iml5yrcAwQjDU3ymv1L4TZtVIDk8%2BsYwVKiyphq1F4LWnnDb0520rlwMuu5g%2Bxcwcr6d6JksO4ZHw9VuLuB2PJMxalEJigwZoiHD2UO26N3n9Y17%2FpOX9vPTDHNLfXKO9AI1JfnMbIOJ%2BmkcSdIodC0p6dRDYqo3gCyW5TBGxjX4nOXIQh7XPpwoWdsW4zOW6mrdROJzIYdrvnullXgmpYIIR9eMzp9vbQ2reujWeLOk6a5DYWlDwl8igam4pYFaMxtey8uADgtt9a3BVnWXbwSBLLaXvpl5qImvbcoMIcTz99oLigtbFhnA%2BxBOMMimsoVSqN3GGZRV8x1qafpIdeRdl2%2BO3vRFIpcNTiH%2BvDSZASCDoC1BSi6w9uP5%2BguwmwLket2h0V1ho9nrTcxK%2FRdQIvuYix8Re%2FMQ4sZ1oNsTqMcV2h046%2BzUseZgp3KVwHGUAt2Ab1NcS24XeqVvIdUy2SkcQdf99q0hg6bOOOsNWsuueXrcldOftIdG1UuiZV4PibRhSh8zhOYZGBAwkiQwqv%2BtpUMSkg7GFojZaKZuRUu%2BXXeQnXg3RyIccgf%2BijoBKWy3yeBZPEJEaJjlXrv0gCCz43bKAuBi%2Fpc7d8rTy3z%2Br2uow9am8QqEBH7gVCRMJGn0MkGOqUBbN8vRKR9jQHFPu5aSVFTijDV1BjStOEpCXZ8309q%2FGw%2FF1UDwhfZ3jG%2BWH0gDOa5wUBKmgV4d%2FSOIjOZi0Y%2F1eS2qn7wTVtOOhzWPe6wg9sFZZUtff94t4e7V0vwFJK8RT4aIp4%2BGmp%2Bbqudbm2z5LSXkkB3JDvLJzyXz4XBbYYLMMj0O74U62ddMGd3Ey6RToUOgdNODMVSGdNRAUZ5V6DSpWyi&X-Amz-Signature=d007f20dee902b104486b54852bff0ab1e6f4f4e1b3d700010d0ffc6cb0057ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

