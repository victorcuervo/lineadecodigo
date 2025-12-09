---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETGOTPD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvgkeByXjEbReXic9%2BSbsIdiqna3Xhd87LclaK54YzRAIhAOyRZ9xaprHFZ%2BN%2BoOSAemCqGCAPueCzhXYjOLjYJHUXKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwVqmVD7EjGC4MRSkq3AMC56Dixc1Kt0iXaAYh6e8aV5ISTyd07WRKSXM%2BscKIzHHJIH4ldutyZSFAp3gyzMKSurGAf5pCAyu1I9QbCPgLkIwEB%2Bkam4%2FJsG2MlWRPgLqTnZHTCk6YyasncOiKi0sbZS9j0T7LkP399barRD%2FWbP3Yjl0VZ6I14oFt8Fhbp0PwS9Pc1OtQHjtTaOrRnlS1LQ27%2FjAiZniba%2F8b5WXdOhccOZDlj8idcauglTwdTYqSsm48HosswVzew%2BeUXO8ETw4MPNiKCeM1%2BI26oaNkMDJH%2FosQ5uPzDKCPWHsimOFZ%2BGPKM8Fc3%2FBPdH20UYqSlA9kIE4IhD1nlTMtB6SY6kR2OsI%2FpUT5yaP6HhvU8pcTnZaWUDNkzFe%2Fe4oeky7ShbDj24EZtLBfxRAdm3Mq3ifnN%2BSP1%2BHAiYd4XcVrPLKVFcc1bnVRQBCq00Cgwzx63VrzQina52qrQEbUDvdTCl8oPfBr3XbieXpP93LFtZ8d0h7ehOsJ0DH2hh4QpnPmsv42yY9QrwRUR7c1pIM1oiUvcCg%2FeDXOzUWUjrEsC2bjXyg4BlHYRJh3PR6%2BvppBzwYxd%2FNS3Izlxd7GQz3hT8zO0%2F9Wbqdz%2BEEihhYeMxIEW5j5bAUCSjBXUjCFmOHJBjqkAeH6InlE3XlCEk3Ct6dciYnWH92qdBgQ1xPhGCip5hwIFrcLkfrdYH4QWyfmtZrCeNEOT58EiGSCQskU%2FYTJ0objS5TLYYF7Q2EWfmqS47jEv9MxYD05duBrIDapRrmlvPbxIIZ50PMoDB4oRiumG9KWsKDE0Ymq8PxMi3BmuaiPIvHUiBRTdq1G27NxH5MfLzMZ6VSLcU%2B835jcoBFYaLh9oD3k&X-Amz-Signature=10faa611f9c3b4850f92dd2556fcf8ba48a1c6263cbb15b5bbe8d9d75dba5b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

