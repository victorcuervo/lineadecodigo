---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FQGA7NF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIEB%2F66NY2zlUCxxRkGJprzrymZxFwczIxMDAf%2BFBlspdAiEAuh2ZQL4Qr9i0D0Qob00jLbsnSJ8kCg63pRRO7mo%2B1toq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAVYOV%2FWeAmjMaDwCSrcA6J79VEzNq5EKlEfRQqp1q%2BRYCuihkXALyCbAyL9A8Z%2FPp9Iakppkx2dgGBv%2ByGBVhbERDffNea3ITGvBe3u1KeHFSlg%2FqHrRbd8S4zFyN%2FM0z0dii3BA%2FHTAI%2BMpuiaf0PjONDkeh%2F3SemeyD4bwqw2RlwnXlZR5JRoXNcXpKoDwbT%2Fc5uD%2BF%2FFFBhCCl8LeJBR9aHAmOfGYQCjfgDZbfCdXYDUBVYPnvOUviV0ToiUP295PORz9FlYJ0%2BKikrQXNxPoYCebbUC6JCPZCf6zCisdUf6qfSVhJ%2BjrSgUUSFaXIMV1Ydu4PVGvuHw3S9QaDwoBGaFIz1gQ2FE7X32%2FEvK03UnbCVHcNRph5Yl9i0kh3Bez%2FLj3hAtpyjjmStgokerT4eeKjoNpcvrptY9xAZrxOjlro0QMnbGhrKKp%2BHqKASbHGRPONVW2k2P5KieaNuxmjMgSmu14fhc1aAR%2BBimy161H3Ql7KwH9lx4kyPB3jsoq6v9ySbWRZxks06mCBoEqHyrAujvPCVjo2AQdbi4uy4MjO%2BdaevGAYr7PZE2Q%2FaJGh7R0UH4K9qRrlUr2VTHnfcehnn4x9WSuHlWAGc9gl%2BTGTlqYzKnr300RIASy825ZyeAQgvipO5JMJOVw8kGOqUBsoZlzsNRyk7nI2jOJX5ug4kFM%2FGampaWvS0It9lMgU8%2Fx%2F0ZuWh4yN%2F16bbt4MOOCAuB3TAH7fbgVsGcfJbEmGODC%2BK%2F579cwFh%2FiuOJ6ze1KQ0cxLl2dRlIIvnoPKstEMC9%2B0v6j5DrkpVArF1rkW%2FhpI%2FJl%2B2Y2enACcjICra0GWgFuv%2BGM25HWKmzh8768pPQM010T0S99j%2BB9H6OUxZYZeHq&X-Amz-Signature=26af65a9ce843e4bd1093e490e9933177c4a605957564a5646f114a024d53019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

