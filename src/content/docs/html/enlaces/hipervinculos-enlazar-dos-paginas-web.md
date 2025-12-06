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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFRYTLS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7VDLG%2BNYAF0kxEnG4BmAERj%2FfJeBXdqKqH01Yog4adAIgLBqeX9V8F465wIju2wLJBAoMuQ1Dt9CLbXX%2BwSyMQdoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDELYFICfSBV0Lm4%2BpSrcAzxRRnjI6eCK2U0hu1i43V36OeX8Fs0%2FC5RTYTJRdBYJsXSDjVPi2il0VzHA89dgVj9mfajFVywSN3sT8ml7WWcGZXqzmOEI3RyWn0%2Fm69Of6PkUAVPFrq5rnOw7j7Pl7uLuvbZru20v5KPHw%2BIdVymHNPciW0ilZLUkoYoO2k3gUFVON5vi9itc8xNjFu%2FQBxAsrrfWy7I9lCRxWOj4kuVslVT38hb1E1kloMvxuDSPXeVre%2Bi8zXSp4fbqWYKJLDjxIFo5UpbbeT692WN9J6n9j1Xim%2F4DTadLW%2FhSQGclch28qeRiPeU3h7w9AHVsG0LWpLTZuVXkbUhG%2BW0pZAP%2ByW5jMliOou7EHPWzidDNcpAOXeNKT5wRmL%2Ftn0tC0xVlb%2B0Zgydme2ku%2F69tpfcI99rm4zi%2Bb0ZtfGtV9eUfgtwnoOfhKb5HaqcgEAiwWk6ZKhHOGeVHE%2BhgbQV1TeRg6vuPwQbJ%2BW0FRDimzkJRN46oa%2BGKwSizUVswbczWA8R0ZDdQ91Q5IsE%2F96GDuGly0gXOsunh4ox7ehiL9sJo8l3r1vypbN9AIJmgt4Dh5jgY3y5MrlY0%2FTPOGeNmkcPKn7NxfN2McYaivOHadCmr%2B0kWUFTivgxrvgdDMO%2Bm0MkGOqUBf5Zfgf9GGje1sQOc5uI3pD827EmTcxvuZOCEM1qHbex2RDqHGV%2F1gSRlirhqVJdavxDpVmyKHF5fqZKiajndds8OYhpg4M%2BbHZeY%2BvZbf4cNjwNnVrC5yk6S8orA2ZJyhWuE8Q%2FjfMSLYnZtkzpg84jsDAFEecs6o9bqyRAHYjXCyU79wvvbstt%2B3NUOEV4wkDiDtsAKlaRFbPsFWXki2rhbrz6N&X-Amz-Signature=504698c21e2de926930db1c000e2711bd98e85af13e201614a93cb581883169b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

