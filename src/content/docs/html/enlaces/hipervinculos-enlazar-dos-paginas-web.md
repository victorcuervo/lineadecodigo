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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD3HOBBR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnPuuKgd8cxflwRdezBwwgCrHRn0Adze5yztEO1zSmJAiEA7lpXOp6SbUZth9aXQNbEGaAGoh9YEjatbEtzMbRHbdoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmS8PUkWdx%2Fd82ScircA5ivUcwFFclKtmiU7UBrv071E91YSH226E5YlpExUDdD2AsoPyr0HqK8u2uBa80%2FB3J7mcXJxuIgo%2Fnt8kabQCRf4l70NQGrNEy7SGnYExnlbloBl%2FoHOebLSedtronuvavurip52UPD%2BqTGQMZils1wP3Q0KmUtw4XEEu9YjG6U9EaXQAN7caUd3AnL4ZUyxqe5yJKIdexdgaZz4BYiv0rmpJdOZpVS34CzsW0iuLcxmGc%2Bt9AvQMK%2FHW6mqjJ4M5a1mnMlvKMYcH3eEL6NA3%2BccyjUb1U2XrtXdrqAmT6omKM0Cct2%2BTOovbrTxk%2FV%2FSSbgNpw7MCBk7f0zktLgwdbiRh%2FQjyWP%2BGeGzInU8%2FAcmW5zL28H8HjD6%2BPPwIziSaNPRyRqQyxweU33OcVbWNB5FX5cJXuSrpIvbLgmB3ueL3hypUg2kdqWSjaLbsNht6%2Fk2Iapk9soMcBibYMIaA76KyfTGUJZZR9nrPLycrRfU5y1y1P2uHZHcl2qOIpGKR2T9lYCan5gpBPL4ooGCOt4nA4KSkJe4cswwGzH0vi1xbip5OkU2RzchIU8Ym4N3lG8y0uA1WkRb4376BTzzzZ3vCrqVgrDlXfccfwlXrqE1CS9DQBJAb%2FiY4OMOPl3skGOqUBTaP0N34g5O243k4n9tqj8BCvodZOUibDop%2BISiXz897qQpuKxvQ4jwdEWY6jRIb7dYVrfbWNGC92mD1E8EgnyqCmHXOX0y78bRx1mA7HoGMGglID23VygmffCCos3GuCsHsz%2FfDHSR%2BSKcSi883wN1w2ifG%2BVY6404S2q%2FOhQlqh9CmS0HK3MqPlZuygRnDD5cBOzyfQOlIgadQOo8fsw3LzerWd&X-Amz-Signature=bf6e7d218cc9d9a5f7289b1db309ecf566457943ac8c05e7b394f1386d4ca405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

