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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Z6TAWV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb4yFKVRW0bq8XAXn603YWh05VHPfUfw8R3%2Bt1WkKSBQIhAIC5xY8QMeSzv5dk45vQiH3iNkUEmUHj9hlfgYbenyacKv8DCD8QABoMNjM3NDIzMTgzODA1IgzKyhuXzBrLilxwclYq3ANLj%2BU%2BKSoBQ51nrbdSaT68PWNPl%2FLOpozDQzbAj4ubtO8tjNh0Z4jT5VrZOU3YEEU0kdsDrs1mh0a9Z4eMIxvIniehzTd8kqncdrNscDf%2BnWLPPh9aYKiJq55PaDJTGPhn36dkQrIYggPiI0kQblYaE%2BjZlwW0Ad4NhINeryy0UJmhI0lyK88m%2B7FOYCKZ4bBB7wNaU5VcbvqDYvdVs35y6RMEyqA5mtlFZW0cxnQcZL4wD7PEvz%2BZrBwZxbnaXlb7px6n0URCiMmtbSwcnSVSQ6h87xXxvbZtzxvjUG8E3%2Bn5HAaEjVVY8tbWPFVdXRW588bAfus47WRLhDVkXrgsodeLL7Y%2BkYjm3R9eRDXI0WG8e4jvWnz1lvCj5vOwaTnNvoa2QZTDb8sSc%2Fs1KcwpI2MMsOBv9sIx1XCsUEv5GrnQTt09k14wCpWw7hKl6wE3uQydOcOsLioEHHPSdk7WCu%2FWQsEApNRF0xH4Cq0pKPReh6STfo9NdXO01RkJbJ0vll1ZbaZ6QEM3YWcmX%2BFxrODZUYNLZPEgeZ7pFkQXIumsdI5WIAbyVepkdPqVfXFzRi%2BAxZkgRofS0NAgwHnp8%2BI21R4%2FY0GDoIZtkVMrsMRj2c0oYaMTVAZYrDC5y8TJBjqkARm%2BYTmfXMKjlXRfHcIpG2SWWeOcRPnAfm5TuGgFhvqt%2FP3OjXA2ZlSinVum90hMGARGaA3WjV8DMvDyZCBOk1y%2B%2BI0WRCjZHt3XVorxN2CMW3eVc1ok2RRYRMiBjDWWS86ZT8U9ZWTbms5rd8soK1q4SSfWdIgBoH058hYc2OAMWNjutdKGN88G7nzgXyXckyKDxibrW6xu7cYsI8G84p1AZ2xO&X-Amz-Signature=9535fb38080e99fd208b395f65a4d86c4fd4dc45dec7bc31f92d9d81307e6f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

