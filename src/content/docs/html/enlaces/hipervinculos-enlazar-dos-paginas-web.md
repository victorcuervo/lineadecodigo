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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBTWG7U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlvyNSn4vS2dYOs8A6ligQjnOh8wIe%2Fjn%2FSGREvR5fgAIhAJEehiT5TJwNEqD7Sf8ZqqRO2IsiTtnQlhpHZu3ZaRfjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnJc5c5%2FPvQTooxDIq3AM81KWuBnM0vbEh1EGERodNS3%2FIyLWYGPilACnYbZE%2B0hLO%2Fb2rkhBuQrqLHs%2FnrPWAYfnJDffbv5IWWGfW9vgtQ5Hg9OGSh1QaM1CvY%2BGY0t84aLLbjpKdteW3KiKgYpYtlDHm5n8cLAPfpjscl7TeskX5GBGphkm1%2F7nwLXeX%2BdtIGV12mDK4Ti4i%2F8WavpradzmlSk8UbguZFshnwP0vaA1UsgSWuiDhBrzSi5h8jvwcz4DHnI7maOzQu5VVD6O8sMpz9G%2BEvBitofvhqUewJd2G%2BAK4InIxkttojAhfldbpKwChTvXQKiDXQa2pq5j9v%2BvvqRr1vBHOA%2FSRdEpcH1K2bDHMF9g%2BRCdC2a%2Bj6%2FDdRN9i2PnrXbDM3RBtLuZOIoVEpOci2rbNeaQA%2FlJ8mu%2BZ7Qz1eAfdPn108lry1YqNrk95v5RfoduWqtxQrseegw4VljjnrqUYncDsNwI8e3U5nYSsxy0PMg61auEBqy7JFqz8k2C2yAIe5%2F%2FowQtyY0P%2BogVR7eljQA1Ar8x8Lon7%2BWSh9T0YnSyyBvwuR48b9AHjEzosVCGkSMXMmcXpFhFYhNhp0yjCLtYYH2QY4lIzwGfctrWy%2FfRyfAxP9vMjhI0hgcHqL2XCDTDW%2FdLJBjqkAWUxzAZZZ3VM13TBAX38Bg976NqR%2BuY06nuIJgK%2B46TRETKSjn3vbXgvye1dadle8ZW8njXXzsfNmDSDLjxd9YVFMI10Mnhoi5vBA02zAzK%2F%2F29pHZ6D3ZIknm%2FrYpAlB9g0L6nOU%2FEa9ccG4KDelVtGBDSMN2Xp113%2BxYoJJEzafnUTi4QVhHdDJmVK9KEhdLbBHmayQuckHDxPvmQTz2wwJ3FD&X-Amz-Signature=299da742dd68c6eae0c7c585522ca8e7bf8d6fdaa9378a6cb88269bdb94481f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

