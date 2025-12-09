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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUADJS5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyJcezAS5e9x%2FVAERYgtn60LADtPkjxwwyPWdI%2FGBd1AiBwvpe4hpv5mVSKUmoND9swJlxX2a3Jxwv3B%2Byp3uz47CqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQrbsQzis6GnnFbn4KtwD%2FL3oG%2FaehbPeCCvUERixdwrO36mkg9QEUkTTYAkoDoKIC%2FaSyLO%2Flz0vjjv6A%2BIU7PWonhGh0FpnWE0YOv%2FqveA0EYgcZUd7UK6icGUsheE7wVB2LId%2B2RynmytfpVWi5P8pgdtXDYdczphi0BBSyp019JQ%2B9AGA6hwswIQkhKedjsiodb9mEm5rvsZ%2BlQE7lRUxGJyxil93nw%2FtOndF14KZ%2B2Rqrs8wfQltZelS%2FmdVlA2aGVlcDaltMUHRrLtsKL3crA9UNeRsiHHX7xad2wtiQkr8ZaPQeNO5P2CbhVb7h4ZmmXfp25ff32yFhCjxCoFqc%2B%2Fi7hnWtxI5uPHxqufSnTaxLXAOemIeWsn3edfp13J%2Fb%2BhfwUD2kA0MCrjWL4FbBq9yNV4QpEZOQcVvKnrMLtD8XDr085sMLkODnF5n1Tvdmp%2BWlKaAGXaSpPAjNoGzRkt5VyCHLs5AholxFd0vrcOuQsKNIGxa4CEgCPaL10sNW3gmskLmDQJnLx72nFPRdVBPpwvdklS3EJEJaPtqWeM4T7Gtivm2DnkEy0Ed%2Bue%2B93acM4xIYXhyg5TJrnCZvd5xzKAk6V8hvkW%2Bd196KffUvJ9nuwTE%2Fnu3HMo5ARUmaYSCVLaHsnkwm67eyQY6pgFwSDuLrYhnpFHTi1yG1AQJnaZk9rFjxa3pQQsH2HPj5isvyof08Vt7VM%2BzUfPHMstizsJExkTEe0dV08gEfhiSsME7TtEscv1BMMSosklzZW5qYS%2FDSy5BJ1ACeLXzmdlLjvJ%2F%2B76ImfWaVhhlaBlKykWD7D%2FPmmeMbkv4mBJGdO53vENU5iUmm%2BnpNCADk2RufMtIb9y2A8sxebIBe1SmFr%2BcQXBE&X-Amz-Signature=9f108ecb3e89075c383954ccd11c5ecae3532598a7824a8b74ee04a2697e1574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

