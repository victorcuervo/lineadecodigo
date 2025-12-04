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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHIYKACS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGITKyW0RnZ1yGPDBI13b6NQw%2F%2BEpRqRlV%2Ba%2F576Trl9AiAW76ktyaFGHQC8lSaw%2BdxlKcjPNolKjKtZoVNkKI1%2FiCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMLEkUrmzsijbSIxJUKtwDFJuBOYek1XL50aX86e1jKXmhE3h82uXKo2xEJ7nhVfs0zwEcan5sXonsitwfXDQEDWMg8lrbGULISvbLGsQ3ab49z9gcpEarNr5lzZ3ia%2BgQuRxWEbxQC%2Fq%2F2oENl004umN9L8cPnLzKZzJ5A%2Bq2adXH2GQ50Y83pGjRlvtZuMy38mMMmEHadLZSvcDMc%2BO7i%2FILN%2BeJhV3k8kokkQErJGsLYS5oR9LlP5j%2FfW8DPjTbsBD7WBM6Au2YmPKwCGrTcfzsNLCmHllNGHYyMTaR78zT6tohT8eeR%2FiC8KCDnteBGgRW3wXAxGA2UjzsDOm%2BhNDjtgCnv%2FcVhX%2Bvsi66BD30j%2Byjqhs0Zra4y3C%2F%2B9wZ%2Fd%2B0zR4pLa1exw%2BvS4mKSdqU8H3Ee38bo%2FE9Cvc3qYAiwEsKH4Yt4g0kJE%2BjstVTVpUwm1t2h73ooH5TVGSaDrNX5QfID2H1b59m%2FkXS6jbYYSWNjvsKHZm0W4rMQyuG9JmEbdXcJkcxuMWGRbrO5pwtSdAJ9B5P1uiwt0v1ZnjQ9y%2FXmPHlHz3oGdJu%2FmrlkL5RJLXAqp2l7GTnC%2FI2WHehQFhipHMp2yi1kZT937%2Fty8l0yc5SS7uNTquUoTJMo46tRMKGLNM4JOgw7ozIyQY6pgEiokuaay628C5kVCWgS%2BWxMjU1XSR7uE5HR4bZMs7jI6s6qOQfzqkb5OiVsVMv3BZJOzxVxeQtIXI0B6qvngqj99YnYI%2FhMKm3vaS%2FR6Re966dDJ5h2QH%2Bv12RuZ7lHk9bt6R0EcP%2BiXUW1OCcZF%2BFWp6vWmW181TJgyqTcNhWdvjB1y7ZBrKlku5nw7eBi8iRkuuNij3XProkcim%2BZ4OHtfddbLt2&X-Amz-Signature=892dcbf8b47cd5510de90c069610ba94a96c0fa23d6e0c9c63512e117b9672e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

