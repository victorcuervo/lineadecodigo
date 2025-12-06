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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6WWSXZA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeZjLgeKacUSNNcGD01GsgvxIcbQkFAyzLPztsVPTnxAIgFE7xAp17f1I8IKU6CRCGcKb7%2BQNgivcIQL6lqkP4BYgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDITc5LTPtf7hgTzf%2BCrcA51h10BSmhCaElgEtukzNTHoFBAk%2BZxn36wAoO3nrCGCaMwCOKoU6pelRTd1Ho4Ps07ABC7ndKvx%2FQmFWd6XAK%2B9f1O0HHZTQlSKeXshueoLgxxCAPcxAibIYOId0JOzLbo5R8SEhvowaoSoZ295rPnP637t6a9a582fDfMEYRU%2BnRpw974GryzapmMTVqw1H%2Bo0wBaSQ5c7dda0zZiivfzC%2Bl%2BBo0YLYkqeUASJdFSp2NtOSPynMl%2B4AQQ3JRXH4BFfKWoyYkH3TJ07Pxty8wvAjLBYO24G%2FpaUipqr5sHJH6UHj4ReXR3OdDn65g53e6DsmKWmudteDVbyuoLAT%2BJpDqgQH%2F2p4CD0%2BPHdOEbiEJTB0penttxrpbP93xyZea91mCD%2FJMG9yRoq7dQgSA5J%2Fm602UuTWCybMBNoXbbhtOVVOx2WQXjVTRMNVSAOTu5ZjcQg%2Ff9UQ6h%2BmCcNv43HZyZKOr0A%2FnXHN4t6IT0VnCf3%2FAea9qkZCFxxIX1VitRZnOCDMZ2KiImRsOHAWlcMY4KvcYMnNy7mZ0sxDSWr5FOj20xf0jwBmIjDa8CiAoiWKEBkGFjCUZrNj5hbskXCRC9WIriyi86vT3DuVs3ozyVQ0AxoIfqIOURyMKGm0MkGOqUBnDtz3BUKLrtSfKsG6T53Icw4XfxVdH%2FviQlT2bdtWQI0W2j%2FGlc1ehMQ4Y48gFuyYOSI1PGfzsV%2BR%2FuNLocX1Ocl1ioGQEpW1XDNp3ab2U9wVR6gZBV%2FvrtbXM4MTTvfQPfeUjBL7rBSw6V%2F5ISTMVCRTWY7ju7ZX%2FjQI7YQQ1m6pxqfyFqwl7kkSYmG1HHjKvmaBtUew8JYOcmU4RRzqSi73deO&X-Amz-Signature=6016a402e8bc1f88e751f0f5e13e7ea14cddefc309f2a48f337f54cdcced3973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

