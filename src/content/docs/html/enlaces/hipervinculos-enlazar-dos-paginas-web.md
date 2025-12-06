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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW55UGYJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabQCYsw72pa7%2FrohbuBFMiN4be0v9mDCwYoFP63DVMwIhAPeLGji8hOSRw9%2FQ%2BzpQfJdlZg83q2ce1L%2FAzAiDeHgoKv8DCHoQABoMNjM3NDIzMTgzODA1Igw9Fdvw%2BTIdjvcVA9sq3AN7wF90t9U96i9zHuh7LTa%2BC5ntOBSOAm2ABJNaJEBXdMEJcnlsGK6ewQOJTXmw3S29qbVzvjGlLynJDwZ4Xepd1SkPICOH8EC8Q6zqo7qGKUB3GpVK57h8NWta6kA7rlj7Q7cMbqdWJ6u9TJrjGaGA9XmWjHJQNCeO%2FWrr0ToD1gv9L1KnZuB3oTMiCGH7s3amSYQ2TOYPsXSBYFsozmk1AX9QW%2B7gaW5HWSYd1Z9ADLAqyQXpkkKBPNicAjWR5MyZONSmYTgReeUwdSjxTVIzD8Te5dyzUj02h6M7KFm%2FAcl65s%2BMm5lnA5hRiysqVhz1WQpWpTUj9UKxHPZeQJIsLbdsd%2FsOa5Mms5OaY8M9SYmXW4YntTJE71TC6S9usuYlezxhzr81%2FX%2Fvfrvr8fSpYDV64Rq1lgkssYQ%2FgBuSeObelSrQPrKw1qLRkZRdJCtCqngAhxmVA82Ea0c7zcR0GQtw1%2FpcXIjcyRbN2fkKP3bxb1%2Fkk5Lb%2BYFcMoYshL%2B77kaFlR6%2FPGwD2gsjrup4vNDKN48cZ9oQ5VrSaxvfxWe89gNSuX1hgno83HUbEYeC1ZYJbPsNF2alHRSW6AuBr7K2HMBh9yRNcrugRw7Quie9kHUnrYMkzu2HejCvw9HJBjqkAVXwwTfjzt%2BUyOSSybDEbTJMa16OvPyr4%2BxaVs5S9R7UTnwpQfqcXtRgqeXLoc3fPbklCTmGtdg1p%2BeD7uZv7cSzDyNgyz%2B5Krs1tfijDDOchyhx9QE8C%2FW9POl%2BualgofPFtaBjRnBugL9vHQfbAISEckHQ%2BWu%2FrgfPe9w2fdPCywsIer1ni4B%2FkNpOiuB7Uvx9c509jdrEvpm7tleCvNFMB5N5&X-Amz-Signature=b959e9539f70583c830881231bce4880fedcd15979b18c4c932c234061bb9afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

