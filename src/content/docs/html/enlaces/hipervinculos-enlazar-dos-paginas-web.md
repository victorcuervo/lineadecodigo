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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643OGNX4X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU7deBmLEWfw89%2F3koWw9rpmg8WGauQcVpC%2BF8n6xSxQIgD%2Fv3%2BJ4%2FS2UPjvlS%2Fu1mGwckA%2BraxKIeQT%2F5PfRwiDEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQ8GZXCcM5zwQMy8yrcA3bdP%2BNumMjSBqto87xTXLDoOUe56DVijuURypB3ZydKAdAn1dp5E2O3Ual%2FNmilkjvv0P0%2FCGbutp%2BuvnHpLAjPVf8YTf4c25YvFsCtAmEFsBz7OZLvMaM15Z29pp0meJbIEbMjib%2BWtiaUPJWef3tnxN5ZnvdRhD3V12gQXotMLCZzkghQSmXZebjokZw36eY9Rjr99RUm7SuTTt4AyLQTnpK8QY9%2B8f8QW1fi6vHF7E%2BjkFq5F1WmaY5MOnpGo2qYiwXIGAT7KT5q1hbfUhgARfYTqkCRP9GsHbqF3QF%2BydgEvg2%2BMYficZgltR%2Bh9KpuLL9w%2Bsx14n9SefUdfo5uSqPPxS8XZ02Z5Gm6CWvBP8TIou%2Bkq%2BchJ3VclCCieNxTiH%2FB7aSA2mnG3EI60dqNP2ohfBqh%2BWsX%2FW3ss70eehpNRIcOXg30A2bMthdI6xiklC84OxjIH05C6Ldsppo%2F5nAH8uunK4dStTYvlh2zgLyPbx7FaChzvJT6sYO29ugoHu97rho92T%2Bt7bUevOqfQ6KD0h1OZuShuZ3qhp4TBvjHdXZDeai5fSoSeqiJynaab0BGXMOOkH3pxZ1aVYvPn4LGTQJDBvTyLISYrxPxrUWraiHUL7SF9ShoMI%2B41skGOqUBxr06j%2F8o8G%2FI0D8AreLkIlw8bGm2pUplLRXStTSdS%2BDcw9aaXbgjRmF2GW7%2Bb3BCz55qsXnk%2BKrhQBkyC14cz6EQNl9szqsbtY0DRUhOQr3aflxxdCmw8xFZcXgUSJCMnsMCH%2FdBcSzZRHURyY9m1ecBeGD1gwFSTppab9JkX%2BDig027HeLclXvJCE9YUtpinN5jqKk5u7IW1q%2FqIqtoj7g5e%2BNZ&X-Amz-Signature=01875181d5fc2b6e43b923af19525afd227eba16652eb33737ff3612a033066d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

