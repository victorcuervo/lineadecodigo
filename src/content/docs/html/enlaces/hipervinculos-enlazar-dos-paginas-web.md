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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUVPL57Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv8UyKmHY%2FFcLJHCoGLjahKH%2FEF7loe6FiJSRVngJdsAiEAgT7H8uG%2FvmHyvcCcjaiWjOc0kxVzW9nhegZ2TaLG3EQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAckypjcYrHY6405qircAyWUKoM3nCPQ4XmqWk8RrbR%2FmDFO5oJUMs4Mnq00bNaxsrnJqqtfaJkjhJZJVMhBDr01%2BLQJFCX4nIO5aTw3OJNI%2Fadm5zI6twdMxuEuWM%2FUtfxZr9270K4bmGdkahmTwSE8SpI61pGdzK%2Fwpa67uM5%2BCMmItuw80WAhBRStFbiSxL4BDFyOj1OF78hONpBIANpeq7zyW2N%2F%2BiBd1bf%2FN0PKrIGmy2DPyTKRc55VgQF2iAEuoyveo5IUV0BrbrtJ2%2FGRTrbI6685Lh%2FwOcvcXraLcuEBDXVZkXSARtJFx1Xfx5KRZ0PMX%2BPFJnGQ2kF1qXqQwueenRPgSTv3YrNxRcValFQgSHjlA01%2BrEHsoFisN%2FSDJ6oNO0q8xCw2w9Vpy%2BKNlJzj%2FtxA7sD1qykavEb5Pmk4S4Iadji7loBHEmS4L6QFwRhXXBi4qOVSEg0kPQMvffU%2FWOMZNV15cGynnpTa9njONzRQWp2n%2BxRXV5TewNXbyZtNUwAvDHONZ0FVpe%2BdsT0ndWUux7Kwnj%2BMksa2XraGz3jA73crypHM%2FFDtiydHq6CaAOPjbv5gSa376UubIpxr2vle7QBCNT6dsjsfGxeanO6L%2BF86ag%2BtYnJjmMzI0j69EVgbh%2B3cMJfty8kGOqUBQtN1NZ1L5%2F6nyOXaJlof3GHZ6ARr%2BMdK2JcDTQOu2w5OF9ux4yfKhkHX%2BcbIkFrCaEV%2FCcWn3sO3PCOzMTPl0thT8YbXuCjsuj96P5JmtJqLGZ2Zu2hQs9WCWh%2BmfqyGfZ49aK0aY9Shz4Crb6TCnPvhaEHMCsGIIBZXycIZlSoXTQ8MwXxZNOohqTGPRdCCHZkte22sKczxHbX8pH0L3mJq1Ahe&X-Amz-Signature=c0be6f421b9ce00c0094943b7d674374f4d751a60601eee137af45a2636099c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

