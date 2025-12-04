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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKE7M4X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaWsa04yluJg27uk7TyCV97F3UrXkycWLdTIxgI0XHzwIhAKGTNCJUttGX7AnLaKabBzpVbJJ2xLDOvlEEXs3xPDuUKv8DCEkQABoMNjM3NDIzMTgzODA1IgxKdyC1BQPbQzvBrKEq3APLdutB1DalkdPq2ByYY39GbQoVErQjM4C%2B5HPY2fbfkHmW3WAKXRbkwFUO6cTZnUPyDaFM%2BgwBF4YLhPNxGbb9c4XTSOfq6%2Bz5tgJOt9QWAY%2B%2F%2Fk2uPNQLpQia192nWPwqXrctegszsOxU5Gq3VSy%2FEXxeEfw4wCBBsyh6Okf5fakqssPzPW58WyTbVcLubTjEszPIwbdzEAJ6mFuusN8d7%2F3SGjS%2Bt8mUNIJAg9hO5akLFocdRiKKA1OANx%2Bh4VOLdqzCZI2vj%2FvmE5K0SUIQEMZ0c2vbh1sZmhfS4pOTLnFOiJcWTa5I7oNNRkUls6NZLET9Pa%2F9hcpyvwrKO68CTLKxRWFdXny2Xxdc1oHaDORgKCew%2F3KqzLsJqkgCtdHVXhW%2FZ4NKnPs2sALMjrYEmsgePU9nqaxwJfpUazhzp9CDFrYL9ZICzgSi7NqGZfYK5V5iZzHWufrak5AqnKgjJwESQYwB8WypTRyi1LH2YYcb1gu3dCG9GxusLGNVMlM%2Bv3hjQsc2ObcaljP1xYHMI8bRD3hu%2BDI3S1hsTCVEx%2B%2FQlQZ1r797r2D2iitFDCPY0XproDdPQT3xSI0L3Pgl2FGL34Kw4%2FiPsCeXr52mJif2YUyaVKPFdrgkmTDw28bJBjqkAVcgYXBNYG5t%2B%2B9AlvgFgCkihb3ip2gVPuFj9qmpoH61YqoQQVpl4%2Fw7uQO2v9%2B8yfpUP2%2F2koTZ%2Fz4UItWx5ajXDf4ARUqVA8Qf7refdLP7JBxoVPeuFhyMgVhYDvI12n2fhcX7J%2ByZ2gRlvxNQ15w%2Fxk41THtBBapiI5ypXXoy38cMbTEoHgsKdoElOWmUK7BT%2F7q4pBP6%2BPdH4aZGGLTOVMWI&X-Amz-Signature=76389325a96f5cf7e88d6557c42c94587f1727b41d73addffca16fcdb48b7350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

