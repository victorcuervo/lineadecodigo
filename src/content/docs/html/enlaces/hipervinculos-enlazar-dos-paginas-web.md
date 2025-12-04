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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N7ZD2BJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCAuw%2Ft5kOYiJFET%2FZQUQTf1JNUacG5yzFnN8DVCOBSUwIgbq3RFw%2FJPQjt5klPMmkiPy3HoTcO9JMenEtYr8vyaf4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPXRIn2JWUqK7PJRxCrcAxK7vjHizajBtupNeoQGmdrKrBn4w2cYN3EWJ8qGj3qtWNjZZK7vvDZXTaqIdBtMd%2B2AOVCvofc%2FtIKT%2BoS%2B6sheQR1tPqjytzhonOlYP3%2BvmnGZyeqgTLp5KK4AYLxjK6pgYW1VaqX%2Fy2sw13bVSw9DN6DbVQS5rVvLbSawmErO1PVtHH3JL%2BfZ8TQp5GnbkWDqxZkrW8L3U2qQJzJmblvdLUHI1NEdr%2FWy2AWgzwPiF2e60wKCPwnQYPP4Mc%2FBpM3ZeSr2t3siS53k1laiOmt9RdM%2BWiQiCsYRBptKjsLj6Q0VRWMootqGF3kBKlPSSEdcQMd7NN7Pg0u9OGirev9P3nbK3KPkPvwO%2FLtj2KdRHtcGcye9AKuYbHKwB1X8tj0HkNNITicOC7QtYyPAs2K27weGCkdDGC%2FR%2BfckARDCm4JHOIWvEQvqumPt4I2zJCyV5x%2FCADW%2F9MxhNCVigslpBaJaDCLlYNHnHgluahapJv%2BSwIeiJmcEwTs7HXAgQ9XQ8ghROYoU9cgEkyDiH6VxlZSaDgHlpb4GwMMYlJLSzBQkzLcj0oQdEhZoRTSNff7aWS1Let7d9sPoxpLKohkNFLdCwFLWvocmpzY9VsobW9NRVK6DrWPVbNZOMPyFxckGOqUBEdbamHBSq5I8sS2vY%2BivbIQr0kLjK1qrvYP24BZdriCjlDhuGUcrp90K9qbkntPxAgKu80g1XFcQ%2B1dfss39PiC%2BXSmHalLh8QoUxm5p5g0ZXZr0YINtQP95Vsxs2QxrrwyAlH4xo6rM88yK2QoZ%2FeF6vFfJtPPNxC75yZV6Zyaug7CLeK1jLPfTYpruHDtXantQo%2FErPVnSQbB7ps%2BFQm0BjbGQ&X-Amz-Signature=287a98f0ad4fda7151cd7d9aee29340278e59e5dc90d0bcd84713a83e6022eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

