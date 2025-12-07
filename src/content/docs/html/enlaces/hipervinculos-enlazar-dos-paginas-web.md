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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXWCQ5X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARVEbZqkGMzQRiuCsK3QD6x2OIiaE7yAv6YOUo9wYoPAiEAjw%2FDEiPU0%2FX7%2FfJuOkwUr%2Fl2tV%2Bs8102ZSsl%2F8xMVbcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDINmJ76TSjOZ22TircA2FKII%2F4KBKAa1EiAooazyvo7%2BULcL0Ggm38JWlWX8A9NjXsvn0hmWwX9sAVKwLPWw8E8CscB5NUFYTB5ZBE9X8Qg4rpGywgW%2FYdeLbAqWFV3wj5TPylxblqCjW6o6jYfoDC0bSLou1OBaTTDipVnnLMq%2FKAe%2FgvlvX%2Bfz0AnjJ%2BX9cchzGkWyxm2NxVBFVMQFw1QXZPh%2BoQfduD%2F4%2FmSd6CeOsxUpAZHydNoRi5lM6cffEqI2%2F9oCwmMbh3oX4643gNfdfuA%2F%2FxBiT%2F0OL5z4PEi2o6rb%2BmS7doNfxZzb8moAQaMxznKH4IURk1QbFgQ75qRCE7i8f1ZgUg7dQ5NsGF%2B0HAXrCx93gfBk0BoGOFmX95dU88iHWWF4iX0bMrN3mJ91MzGk6gDSDlV24vNWuHhnfNkZRMhqShr%2FyrL1EAQGdxaUYu%2BCsTWE5%2FxnAeGyRCwMv%2Bsdn94CRz%2FJpdms8INoUBM4ZdMBwGFAxcsIcAI5MvXSD0oL4L8G8%2FZnkYpedNwT2nDqkcaaiv4VYDG%2Br%2FK8Ofmd4A%2FpTBBPAuUq5Y87DfS9ZmHpLDnZbFqe%2BoDgl4JMwpecfbpRe4pPoGJrwcyvqit8KZpmtbnpi9OCNBBDj05YeTjf1S74h2MNf90skGOqUBYMO9JI5W%2BBExwdKIP7kqt9f2079%2F7ZKR7hlMorD%2FcuUueUBX0H3gTdy3dDW1t2yiS3U%2Fjnc6oSOH5o7maBnF20NNUu41wervqU%2B55KNZm29K0WdJNmlsbnC9QqeSxBCIlZ2G%2BZFL6AwEeHChJnS5moJW9U6sd4%2B3IYAjblKAq2FfVxrd8uEKHrKPbWs9aptj7iTIzaXMCXlUSRkKrM%2FlYHpE%2B1QV&X-Amz-Signature=034635e261e06b3c25112482292c4036d573da957dd3a9dcaa71060e524822da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

