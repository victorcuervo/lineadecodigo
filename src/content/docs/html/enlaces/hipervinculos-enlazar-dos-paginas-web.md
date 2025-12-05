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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAK25VO5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByl0mLZJfb5NmV9nZVJHN4jFwiv1kpoC%2Bt8iZY8lEVQAiAki9RA9OC2zSFWjlVkdmAoIhvy3W7xTkivTRU5wiY25ir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM66pms6qMwl5ybt5hKtwDY6%2Bgjl1CNP0dHDr4zY3uYLNgKBxh93Q9lfsTZgj1yrEk%2FXX4BBLgJdXppTOXYuba1PcmCHIPjaf8fw5XnAus%2BzvPTCQ7vIO4KTDdlmZZ9KtcYeR9QUcz0f1syh0jRij%2F6USpUAg%2FBu%2FJH9pNgCklnPMClSbzpTyH1sE9Boqvpp3UQWl6BMXAPbZ2C9dlMHIRPYX%2F%2B42QeKQWBK7V0kRW%2BdQsCfM%2FAYbQnQUCDHXW6gcr0erx7PzxODl7bUqUKtKsXZPLsAJHYBCKpUspGaVBc89Jd9YujN3N%2Bx2TPhfrO1sx7ogxX4PokedXa85JVB5%2B%2F9kjrj9fkMy8CT2EpT6Mnhfd2FKjqpvfsL4OqBtwUArs%2BuZPtBp%2BHKA9recDZLU1X4cDr54ierZO7psD9TErLtmKId18I2QGXLgV6DH1Dnh7bW4sBydFnYH%2BSefCekSp9YswinsgF3n61Lhb5gmNTqLFTIlTwd%2BuZ3OBfet75ZepDbrGVkGBlye7SpXCkT9%2BxNqOJQXIan8IaQtyVYeZO7mneRiPcSujsjjezscouE%2FIBcIXC0A7MmBq%2FMFN%2FGejrrxqEwwB8pB0N4968uRTe4%2Fo2%2FUNu01DvL5GkfyRoxZTixWDCsscvOW22UIwp67JyQY6pgF%2FNkdrdui0J8eKvNSijGYzVPmc640ICRX%2B%2FSx%2BWi%2Bfvnf9WK1t2FMJkf7wyjbkxIJ9z0TVgNkG3qenCw3Hcrz4idmn6WciYQzAoMngM6e%2FMaVKWLfJPE4Mrl1bDkIP8tWa6sWs2kh0%2BTnVsUTUvSnGjdnOSQSlRR5RVOtBw%2FyCLYLqMMqtnfqA7%2FkmOYl0jp4Ra%2FVaOFX3WfweM%2FYuNM9cDPjq%2FONa&X-Amz-Signature=d3b42294b3b8c307c9860c5cf66cf3832e61bd6aeca3e99cae039da8e3660f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

