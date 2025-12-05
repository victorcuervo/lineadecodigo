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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YXYHFVJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3zQinZO9HT%2FJ15iSz%2FPI3esDEcCAPhrD%2Bo%2FQqkobp3gIhAMO8RVuBrGcrNVziC7zmT3R6QXohvQIoeSIlxUPMceWhKv8DCFsQABoMNjM3NDIzMTgzODA1Igy8CQMkPq7F8JjKd%2Bkq3AMnEKVqyyGaJkf3ejZnaOXT5fEjcR6jN4COw0lCTOxJ4izH8Uk2M7ememNPDEUq%2Bo5ZSXIEWPA4aqxrr88HF3NSTRhoNDFIPLoPLOOGN97SiBbY71lo2BBE0SYZYQxuN68%2FVFA3FFlK0JyPnOv3FcNs2ev4W6EitaNpR2UMNuBz%2F%2FcT2r3uj1%2FusPRbwxhmksgI7ucbVLUjzTGdIGg5%2BSj%2FNK8qBM4UzFKkRxeMQAvzpXHDDN0CbISpfMtqAFY5DaqHC0FkJOyscTj%2B2uRctIDcC3JnOVXmqkSKdSKYqInU0J%2BIYPii8wmbmzE0VgnPyTPlGv9gS2BPEHCnLTSzoCKTbjfO2XtEQmTIlRG3ELwWQQnAdZgklkwwBfGs%2B7Nmre1bMyupktAt6I%2F533h4F9nhFJv5USX5cO6hU0mWus3XtFs1A0ajTQsOdZsYRoSC5HrMgOCjLEcuUFBPBAZ6YMCiAnyWuGHtC1yjtWvQ5CFIkUdYh3OT5HNUEbsdn6spR5TKPf0kwgzponCwcv7rx0PfR5LtrkQMrMJ%2BHLzJBYnZUywEX5YpYKdZd40sLdaSl27eYZ1GlmpE2nC03795nw%2Bp%2FOeTUikO4SvVQymrx%2BLt7piiWk0kML%2B948eNLDDJzsrJBjqkAWb%2BNMIGWbAm1VgIJi3Y9f8YCWFGxjbVlBG4z0iFj7hdhLj0D2SBsm%2FSzwSapNegwmJAruJECAxXgtT5Isg3OC8olfKfsBymTP8PEOfKTmbTSS1L2XjA9TJJc%2BkAhODAECqcqrlI6bDQtnDNTiJp%2FH6IEiJOtyFLoEF%2FrITckm1DN76OkKeBcMDHXmvGAckkDmpB7VrNEuUtaIkkaVcyiKZL%2FSzZ&X-Amz-Signature=86012fdea4f0e19dbdf724c07bc20be135190df37722ab32e9d589fb2eeb8244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

