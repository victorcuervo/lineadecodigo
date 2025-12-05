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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5OA4EW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPFU%2BlKk80ht3xS4OBqVRBB%2FxZUaqKkrnNkUV1taHPNQIgBLQeDLT2K1PsUCw9O7Ovx7kcTha%2F4Oje%2FJ7%2FA4HCWd0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAP1UgiHj1jih6nRTSrcAy%2BP5EjxHgGooaC8qX5L15d42mWqBn1NhZ1ybArkK3LLPHIYiaWMWznCVRQYLpb8nL6qTFSBZkGDvNIJ2%2BI%2BccMDNpYHr7i%2B0kFGbtsMPjMqP6A9YWSGSEoxIxvoFzFIkvRrmMFQfRnQPnoBq5LjZ3VXowVy5iD1cpourvTUTG%2Bt%2Fi4%2FIa2pHpy6ikWEP%2FWvtg%2BDhNH1Upzd%2FUtq0fiFPVoXfGAbMrjKd%2B7WsoyzE2DBzb1bw%2F6AfLOMgmkRrWZKbWJZe1hCuKEw%2BSynzdMrIHAGc2yZWlcInFT%2F8nk5ApxeDvy%2FQRsPHSrRt1qmSLyYBNGndm4Ybp1kezXMUpd1D2WTBRZb65NQJIuOdsgfao%2FK3AdZmj6SIrF6GyvusjW7m%2FY%2FMYhO2hFdq%2FbyHunKgRgIjDHMAVW8lzwK%2FX01mlJPgxp3enQAIZL6N9XgOEGiLylrGkzZJF7ZKCyh3b2Z0OqZHlmz3YjOI39hAakLt%2BKdHNdyvjZyhZs%2BmVK6zzFfMU9cLxVeFI%2FdderoTfzV0JVUsXJ6MTAbegZRS8LdsepTbYTfIuHpMkR4SOcdqAdyE6E5JRI1mujxsUrqIcMEyudlTJ0XwloRrwgoROyApcNFrYeNk4SRKrwrwPVIML2yyckGOqUBbmMrZ4eZTmh%2Bxxz7XlX%2BM4Mys79ETWV4s8BC%2F3oV67nQXDBkDCiRx5FPz9Z2TmNB6f2zMYhyG%2F6rBKKPSyWvDFaIuVqCsDPhPxVRGDoYy02ROHEj9Vy8Z0GTeh5zJvR8Mc9uKxjzRZGgdQvynw5fZ9KN5kvasU67gpVEVR4VYdIc6cqNjNLf%2FriTn62GuHIT0MojRW4i85ZS%2FOJIC6X4WpLhguqU&X-Amz-Signature=737eff31b544e8ec46d7e71e36028031ea4e276b91714e363819ec5022446ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

