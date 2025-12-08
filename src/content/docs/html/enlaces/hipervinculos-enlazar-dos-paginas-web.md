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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EWCXYT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9PfpcrTCTWQLcVe%2BkscO40dr%2BmmKX7zZLg58JX5e8SgIgd2HTROUc8VCUd6Fjc1wsZb3e6c5KyrJX%2Fpr%2FLi5IZTIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCJWnWvzhbemA3ybCrcAzCKM6F7c4KuurKrz389B5nvLmr3R8%2Fc357fXPbC6v7inzb2RVaGmXlGspw%2B9E%2FLpl7p8DDn5HnQVL8iBUDHlQwHMIrRxylLv2siWtJdAMQGUrrzxjM3E19BfYZ1ll4W9Gk6dItvN8zXEJbffld61fwWbQDtCHPdRRXYi5z%2B0HJqBaAyCgQNr7zXNxP1ISeHLDBorY7f06bKK6fIX%2B01wDQhvGh0jBSgQosOppgdKViJqvBeKKlmtSFRGhuA4t0hXPrvzjomICOg2hVpdq0u03eM2P2FYdnMyknSu%2BAgf3Ha6jmM1Ffgye9DMjuU1yuhWM%2BVAKI1awYl7AvHHmCru%2BXOni5x9lR5RZGS8TM8GC%2BDxbCkEFJkK5Ew43Ig2rfaMd52mT0wiT8FDA5lgnLfgb%2BT17fCbXh8PUc0Do6k8nssAZudxJs378znLv%2BO%2Bpj2k0AIHbxqOvIaDIZWSrVDuGYW0ED3Bh7O%2BzX7wY3KOSKUcVMHmrCmjzitGypZNYdZby0Dw8zP7j2pOqamBRRsU%2FbrCvUg1DeOm5DU9c4y1sdBae%2F8XSvEkgNNynwpsSS45yqgQxgES5%2BkIw%2BvXS%2FPzc7nUQpDgvETqz9q2WHX1jE7kvnFQH0hECLMBBSQMMTB28kGOqUBVXhFPQIXKZ%2B6I6CWsSGLgC3xYqQjdSrkYf3UaJKfpQGVZPRtXVoQBWMhGnT9nhTvC%2FHk3%2BLA8qRYXb3IrNJhSIdObV5qfqo5OTNrDKJPbtK873wxB3Xm9TfhsrjWGoVZUZXwQsci3xy5IPI2tBbZGguWO9Ful6K%2F0I4oG9xZPW9D3tf8e%2BFfPnr47%2Fq3Jk%2FJYW8%2B%2FjZ97sQWoCFAfkFxFAEAwcIn&X-Amz-Signature=a3b33ab84e2b94cc6378ff61b1ac781f87e269f4579dfce765eba9d48a91291e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

