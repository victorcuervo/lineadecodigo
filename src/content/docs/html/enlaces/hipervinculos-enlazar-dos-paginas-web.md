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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJTZZVH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBpil6u8Lxy%2Fu2goCjhoXV78NU2yMCGmm1CfnIYDCz44AiEAzMJ8NB75cmYm9sXgHebCNuW8%2FXx9fHqQozDzWQKvXmUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNuOg90XtKbdxBA%2FrircA08%2BGeW4QNH8H99IhcmwMnpiCKl%2FPHjsKBWFtdWToeNDov0PS9dHrhGWDfFUKXoijrr5pbQ052ISU5vRUjOrFQk7j17sw%2B6PIyWkalkN4p0%2FlQ0DIoxLEAAJ8hWoRzoHVDYY3Hzb8dtY57IgDZBZF4%2Bsi1NWhDpFQHVd4ioiIyTjTI2y%2BatFp%2F0f7hRR8kXrxQDapZbEIIlw7Yrsv95%2BlUasKFNjr7QQP8w4ZFHXLVQ5mLSn4SjHSKSk74KYM6tZnc%2BZP3aJzErUqQ0UqTqehhBsgCDjziACbZpndGngdaBvVlEOG6u4fRMyJSJpWpDRLLRs5o%2BiNjwtwjZ9ik4vKkT3xUT%2FCS45%2B9r8VcS7sh%2FN1iKgtMobezHoULK7pAxL9Kp9%2BrIo%2BHDVPQCr0Y020jT5T3TcTYZqqeqf%2BLhH1tdGQG0UEzxvqDNBMpvnvE2qmKYkPbiZ4ls16uaantWpjSJ070TKWDftof7VIajVQf0ybLSuTcd2o6ngWJtXRIiuG%2BUln9v0OSLMOVocLVSyFio%2BHe9b0NAp8og8r9JContKfuB5AK9yCtldKh56cgCrZgphBQC0B2nUEfcLipKfi9B%2BHWdq0jGybr3%2FgWpVHCjJpVWnAD5XQugOm5ZkMI2QxMkGOqUB%2BbysacILEb9hKasHQZVYJm2wPXeTQVwB%2Byipu2FPyJSPSH9NgNKD16H1bEetUoV0nZbqPtIUuU3kxJocRVf7lBLfHdl5CE5tiMI2jzVlwiWQl0EYCLakg87S%2BVgw31Zeg%2BIXeU9ybwm8R3NHjkwBKwieNuH0DdRjS9V4n1hMojymyQdfUGNfkD57HaFn5SpZlzf4HlRYHplx%2FflZ%2FRx6LLE2irMC&X-Amz-Signature=791ff97c15221f2837d6e49e084ca000a4ffc0aaeabac72a20eac361fadbbc6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

