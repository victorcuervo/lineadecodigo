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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTV7KAON%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T221257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkIRvBDbq7MJAt8NV6zaFAU2VOPN5gsTmJ7wTcNUgOqQIhAJiWEXxts%2Bm4P9PLC8aQHLA7seaNuXzhE6WCh6XAhHboKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyILrFCWCc68D3YuYq3ANA%2BQoyTMjezvjIs%2FQ%2FXf01iMnbRTmAZUEJC9MHWEhguT4NHMJAkjOQznmdtAZHsLF0tE5Hs7Rk2IWfpG7EJcDi6bYp59EDWNIWQwAt0ATIOB1TeeDVpBuqg9k1wETeNVQvn1W5GrihiOnmuR1j%2FvVpUa9yOEiIUrRVVaBspahVoDehjBmrGP2%2BET8pSkesuMl0cYdzub%2B1tGiHi5o1xqbT9eGfJTkwSIOBC4ZX5%2BdnDuoMNXdmdqGF37Ivzn99OKzFs6Pe8%2F%2Bl06eWLsOuPtx%2BI3vjUzxaCSucvqZU1PJLo3Dr1dS90%2Bpj9C3YYyg3Ua%2B96U6Mvwn3Jw05JlaYruiFpZtioZ%2BBn7m4wW68pfbqavvgNreJ9%2Fclay%2BiiZpcG7r103PAoIZ4i1dw%2BBtUKbKzMxgrQpXT%2FnXKzZPoEkjLkMjcY61UTDSUW9PKFrtnqdK1eSD6KSp%2BXN9%2BVbiC0EeDtxEX634UeJuJ5jlWJQym9TB3kp8ioPYk4OLgFVQH6Xodg0qGmkjypiutCZ%2FFqTOw31HfSnuNnYpRmyO5fEQ6Rq69jGrsQmSCv5VFDRWAsg66SmPSCd%2BROumIGY2Z%2FIaLVKQyV1pknlLUpS1mj2lSN2nZvrVFfDwpJUocLjDVn%2BLJBjqkAUF7KUoyoRjDhI2wJQnC3qeoNOGOkXf7sZ7FsdKYxCljVShkn4QrgX3jaXte%2BA1E1bQ7hfsaR968pgk%2BycXd3MPMlVCURCGHge6g3Yv5m02%2BnbZXgvdpG%2FV59YYgcn9ABsBIYfHSnpCOehblH41sm95E8q2OSbXzAIFYxF6jqdknTYDCuwR9Y9F%2BF91M8rXVQmTGSGzIpvRcygIBGb37Vk4to5Vm&X-Amz-Signature=b68f63cb43bb2bbcdbf20850546ddde8908a34d9d289430bb57b09428c0eaea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

