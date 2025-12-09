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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOD6A6R5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T194138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuHri%2Fr9%2FWCkvBgH77OVs4KUSOD6zp1JGj5Uf%2F%2FYzklwIhAJWmVjm%2FIp2T6KQTDxLC5CPY8%2FenLHIj3WH3XPH0cLxMKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytUEkoFmFWPgmCZE8q3AMPKgJJqp3CG4g5sYM8N2%2FmtO%2F%2F2skJASD93MTt9CQ90vkqbD48sF9Qh7Dk%2F06GU4rZEC6os524EMsbYc5Wf2fns8rP1a0iucXzWb1lTnddJU%2B5zc%2FlsVUenhUA91tpEjXEW84J1mhGsAZ8%2BR53D%2FyWcGvaquLOhmV7GfJeoJzJ%2BLBXLQOdqZLTkq41NUdl1R3scTAnaQIr2BjSRMy34BwCBHEejG275W7cSrWtLQtufxktsscY0nJOFIBQG%2B%2BDzKKYIzUaWtT3SH%2FN8ndbGwaz%2BqzG%2FmIw16D9HDMTdq3SuQcw%2By5mqjx%2FysfecQJ695YUgQiyu4F8Y2N8YWfCrnnU0fsRXJT7M%2Fi4xVnUdaTJkBHGduwddVN2r5lGpAJoyZeQ5%2Faarn25UBvmaL1RKTljOIpAeIorOGioX1gapZf%2BWoRgPlIQbs8YJTULd7un3SQv0HT0mUFFXrITSkTeSGvXtzDA2NlLQyo0vQs1yDJsnAA00kQT77XN6IqbLZ7%2BvNiLgqEWifBvbfdud%2FNerJSIRgXsjEKiWRlT7c56%2FIRftoCBVqrO%2BRp5xNsHPvQwHtMfutAOaqaoky0XLIUID6wEEBkfd9OUzWz2qwM8%2BdkOM%2BauYvFfXjHWWIM3HTCo3uHJBjqkAfW0EjD4UuadYMoJCrMUwwZOuK5V8FYZOVQrtsdVuLRm3YJcD4LZnvnMKhJ4FQbNu%2B1qj3JGJSt7ld5kmgwxLsEczmi%2BhxD8hdhqkXRqFsZoeGXc39s1oIw%2BDX54mj9dsQJ8nJEEPdVPTDi4N90apQChMIYcYQMfj5kBx7WMG9qHCJZLvjpCb9Jq7duGnI5jvFzyDTVQF1M8pSi0Ut6kWfGYbTsd&X-Amz-Signature=4c6014c80c2646c516f4f5da6574a4dedc4e9ee2fc463adf65e4cda27b2bff14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

