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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAO3UM3E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzsnxFlnjq5ywhf82XCPyp1uWImmREKIHtAeWQhfzc%2FAiEAv%2FZ3a%2FleJ6ADL%2FawzD76U%2Fj6sqLUCA6lS0YAsYDR39oqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTRXuTogbGGG322sCrcA3Wge35tx%2BDiVph8v%2FYcdpw87LSGGHmSHDNhdX8WZEj4dPvqVlLerLgy5%2BnGwx%2F%2BKpPMoPXNRcU5x%2FAZkS%2BDypsUP9F78YaKodQoH%2Fx%2B%2Fd5e7C4dAmfL%2FEwXL7oVjXOe14Yo5AaTkISNUGTDAq49LjOKmXwCagX20hXQeUckj4Oc2bfANwzU%2Fn1oIo7OCL5KAnirB6L9ueFpqjSrFTvCIaszVd0Hh3EDt%2FDU2loQRDnYeZf9xgZNIWdhqI9xgRnzeLeAPcywe%2FZme1LlnaGEJtlfIXu7k8lZOulqKTP%2FxqVbq9X8JH2RxA2dPykcIQkrw6nHns7T5dWqXbWqqvE%2BML0V8fPCvGhtPc8RGR%2F8lheeFbxVpNtrA9Tt2FVyB1KO5q3gKrjttY6TkQfZt%2FebywlcP3DsREi81IaqsIJcwfluT1lmkyO%2BtWAJEJM3m3fLi1kx0%2FcwUxbu0FlVW05rzYU8Fjti%2F8zwbfOe1UngQWZDuYuNB9iINY1sWl9KQyvWjmI2A8hpv%2Fsk1PmhqyRxnoA%2FZNzLGnajuRLZGfzDuUZLfrmsIVjT9G7DApMEkRJdJ0AxY8VZDt%2FfRGiCAF5OeUJsMfamLgqx03y61qGqsJOHVlDAXHFPcApJgxMdMP631skGOqUBM8NxBoiZ0D%2FZAuNyzD2OQGBQS7Hj7gRRzi9XVzj8to5vYI6Xg2XbflQ1BqlfL%2BTyZVSChEm%2F4%2FYz%2BOaWLn3T4O5gtTZ84QKGBPN6OPfMcgATpvHuMicsNSCH20fpY9lTuc2kHXu%2BWbIh88y7%2FHqQnFnjcLOJ7plAD5MGKH9abOV7xAiCBmTica6SWenEHttJRUnaBIBgusH%2FpDsPT%2FttYAPUTVtO&X-Amz-Signature=bfc8db78a7fa7198300f7c2d2a9889ebebedd2b6859c73e51a0e3839b9eb1b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

