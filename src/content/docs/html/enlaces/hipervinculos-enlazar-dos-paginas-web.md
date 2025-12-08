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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOV33O5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfSrsmjiIbF79tTqEF8K6bs9rr6aMcC9H7ewq3CcOscgIhAPjbdYqMX2MFSpxFrCYiR0ZB1sCNzipHcNVwkjwEE9K%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlrAq7q9Y62gGJ1X8q3APIEJoVQ2ckcb6GO649AfWhFnGilvyOQCd4mCTwOeQrI5JcqH0Giy3WXKbmWOUkhbKDOmTe7BV571I9aIDj6uLLdhIRBPdR36paEJqrL2wiVWU8%2BC44FDdNQM6x%2FDpCLt07qP7PDtBpCC71K%2FZk6PYfbYQKYyi9H%2FuKSa58fi%2FHaaFNCShcJQ2MfeWfXB%2FLXSiUqN0P2uoApJhVBa4AW8LuwmQLOPjTPJejsCoOv7kEjrRlZzhyAQxl1%2Bio%2Bb2wB5y9h0rsbaV5t1sNdrWakxlUheh%2FXBwBKXjTCSGuUN5ho89fn7Y0s2Ydh6s13%2FDICB7pxV9CrDzTmQ5ecDhhEEHhQt7fZRwSz0y249d4j4eN7PAEAutBDurDc%2FMrUhHP%2FAhz3XSID7krOsZSMDWIhNlKUXN3P9go5p7QVl4m306l8rjQ9cJ2pqSSCxQY1RjWFcnXXMuEy6%2BGdsiwobDCYnCkeQtrcj1reLMFuVKj6g5pqRSRWUivEB1BxmDbrjatLJkCSiUjPJMVr0wG4%2F7I%2FrPF%2BUXrReurr10XHBwsGTM%2FLFLeb%2Bnk3ONx%2F2oPwnjmBxFx8Vl1EXXuhFPgIVFDfYjVQerCx%2Fm%2FLw8lu1R7CoTi1RcV%2Fcf02UMIBD8NpDCflNnJBjqkAdnGZs3cmVahrqTOzRyfvCYbRbDSMGekiLpyXQYa8yCtInejXi9Jpd2kS0LcXk0Mefmzf%2FO4HyxbkhcmsqYxttNO6ZJtG8VLNGp%2BM2R0AQbthHhzCkmr6O1gyDayKLGNcNxJ0wizgXsRJEvCtDEBYR%2Fx1EicjpHco7tr9Ew06rNbiDuByjeKv2WwyrhAabITLFRK9Qfa0JWaQdnxvpDX2mp8X9dI&X-Amz-Signature=598511fe12d1aff7825eac4f9754c09386003f6de5da9a517b73b83318dad75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

