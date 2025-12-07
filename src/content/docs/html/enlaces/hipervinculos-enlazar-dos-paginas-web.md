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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVCAX237%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHGcyAmxxRRCIyt41psbyJvmLvmhXp0md3pRXt86xixAIgEP2W0%2Ft52mVnwzMtloMtZHmwCrIsQRfds3A5y6hAdGgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMI1RmTF2nZkZKKTEyrcAzGVtzzk4Owk5mMmyC2jafjcDvRuvyh7tZj1WaVuCA1%2BfPFP0gS38%2B0Sgsm8uLxo5BV5MmtUodoBDp1WWrXAIXl%2FqBp75%2BmHxQ9ZblmACeojlE9BMLGOlc0wR9DnSAS9f5qZ6ZzTTXYSMuSIVhY5iisJzt6ATTVV5R1zlbjrtbtkSbn%2BhV%2BIDnc70JNxrbnhqO4fqi%2Firjf7eY2ooISgUAIQ6LvnqyAYGFMXe3ATFMQBDlOSh5mdInCAfJPEErYp5kLbY5ALzL6iv4FjYVbePw%2BiTwCJslKsBDXbLiwz2CdZfvhX8vRhko9ySVqtTAvhJPalRCLKTrdq0ujhsPBTTBi4GwCxQKCrRj7IPy3kYHVRogETTAPJqFNtn7OjdZEmJ%2BuzGTPYGl6tXbUCNKjajE%2BMdlJIThumenKbrG2YMQAUQeyjoUVrzZKLpOxqpx%2BQ8Du59fNsQwWt%2FTR2adMIG3Qe%2B0olCrdlw04MwUfYWksbGkAhMPYTH8cfJfetIODKLMnm8EVe6LaL%2BqCGsSPmkdeGmNd3mPockLDBvcHHSsX1P6WGM1RQfJgYvBXeQ9MeHj83tJIbU%2Ba0%2Fotavo5nNJVX44q5dsRgk9ZebXCLFQvrPCT8U66j2PrMX82AMMH90skGOqUBV1gmiFn%2BJ3FhtZMlYqqGjPIatbbk%2FvRp52gNdTKfqUcYMIVZxUubWG0K9SLfr2Wd719XliX7e4h6QAeem8N%2B0967VP0lMxEVTTII3c39jb9IS8NjRx%2F7fYhYNHItwhaE4zh25ipY%2BvQ2LzPMuYFs0YXcgNqlYc0TZvm5A5f%2Fvw9iMJ7DPlPeDLoDIDren4wMYKSWZH59Up5YVZSWU9Lth%2BqVVhBd&X-Amz-Signature=6b760dc32b6b2233996a31c9c12045af1512f301870161237df1d4c4d7b7cde3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

