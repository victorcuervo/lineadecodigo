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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOY62JJP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoAmANH1EASj4etghzsgUEWuDLvcPjtkoJWdaA75a%2BwAIhAM3HQrjxPMIyMeWepPKuTrcAQp8p3V74D2IWMNDU%2BOniKv8DCF8QABoMNjM3NDIzMTgzODA1IgxCKNXb5rVy9fE4pZwq3AM2WYg6zaJ71P1Q44noyn54sjxhwAWH%2BNUnQCMA1H1mD1hhroJiGUJWPVseQ5wpWFfyajn8CXQE3zloP82Y8oxPhhrz5u3E5CN6Yw0K0s2083ZiUPUw%2BYefJ8aAnFlDtvEjyHDos4RYZpokGgg5ORqfbUu0ndNWjbO2rgUWEYwNv%2FKVC%2BnrskE5WO0h4hCTu9p1kRf9vdEs9vYIph6T0LibAHePnaKW8m6YgcjIbor%2B5201OC2DJskGIlEDUjatf7RfMNvXGEmxOnXZM9aBhdkqr0eYnIsfE4dc5eqo3MJ1GR%2Bp1jsuo7x50Bec7mJlswILevrIQbEweGxf27aQo1KwDy%2FgWyZ13Dr7jZ%2F1Y3OkR488FaHAdPjzjdioOYvdl3OhxStLyZbsS62dyKqcCvDH1cXFodESX4tGwFdpCa%2B6Tm6HAs0EaE5fuKjtEbFmf6sAIjiX6MQQaPY2XHUFohRUu2BfazvdXpNp1RwXrfRUglXrmTg4T0kpAJ2ubfg0K6BMcTrarxwcUIBDHWg%2BVl5wo1QTe2V8XXDsOf3Hd4LKhI9XwyXD8ft795YU18p6a8RrCMZeZ5AvsAARPl5spIajv7%2F%2F6hmAEs93nTzEYJwLpSElqd9HxtsKHlE2VzCLysvJBjqkAQaco%2F9n%2BNnjMd5sI9DktbytR3BHFWaTQtRgGFMT0yWvDfqTTceUf1NVkSRUGpjrqju5pnNp9fEI%2FpkwCTHNaG90cCb3U6%2F3d9%2BNMIRHKuPao%2Bkn8nKW4pJ9yc2eWM%2B3B6nA9NpS4ldKuX6v2kYwJnaCm0tnjbW81bGb7u%2BMS%2B2Li51BKLwKupBD6TuaLac%2FKI3St4uq8fPMBraBs2I18KJPuvfB&X-Amz-Signature=f6c701b180e2536a0b069372417c8c0fdb2530b5ba025a3fa59e000c68f0def4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

