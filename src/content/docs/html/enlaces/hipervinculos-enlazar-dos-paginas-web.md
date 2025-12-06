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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAWEDQO7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5Vg2qcyL1tRqOf7zjcQW71s4MuptxNAqk69wPG0KFsAiEApeaNdPOQjJ7NxXGDWqCLY4B2n4PPaHozwNaD411hvPoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGQzTorK9UYF4UeZHircA5jwiHdnmX%2B%2F7XRhxFQPRc9fSJoFNijKuAhGAMixt672%2FhlpuiURIrIbudeFwNJXPeCN664sBJpK3bpZGS%2F87Gf2s83ng1MVPxYkMJdyuNaW0IHS8UDHBjg2xqIucmGAfIiZU5ANPcxzK4uDkpcguh6HERqN72igc%2Bvpu5veBkSex0UeWU%2FcyhzUl9EQpIzgYoIHmZxIarSuA6DxXr5%2BbOgzfWlZNPk7oceKlt0huAV5ae35MHaMNqczh1LB8kxLYUmqem4jCJjsxeCQzFyh20qazjvGYPkBBThHPuylEJoZRaRY9%2FZjVUxj4WZLEmlRnV9tZjxMVht2yfsLjhSLuDuCtOFK1LdoKbYc6tQJohqQKqEiDCCkC7OZiCwt%2ByY98%2BrQEoLDYofW%2B4PQ5hTqDTOrAmzx7fStWTx10vlrI9YgWuB5C6hx1dz27nLJO%2FnnVM4FTv9%2BHF%2FZRe6iSww3VcszhonnP5l6AjTqGEYA9cfpCIrdlrMt9E4p8hkWQPEpEOdEt8vb5uRXZphMrSAAw2r4bgqgEPSylvSZKtn%2FwMO%2BrlJv0BpTd%2FAysMoqQmRyHT93DUyFf6D910M4ZlKfQ1n2SwbvxRS7sft1v3GN7dkUjMUe4nnMAWQllzt5MOi8z8kGOqUBtK%2BpS%2FAPwTLZSCKiZJki2c%2BV5DfaLY12iO6u8HKSbjVshyFJaCymSMXTZOL9TdV%2BK1tuoYlzTKY5VoqimsNawKbrQ9iRCfpyCZZJv1voDfcJQLXPt2bYy8UrSAupJUrbr4hG6N7eMhUPPlHArNHRCsrmnzEQznepKFLW9p%2FIPlP6v4drHjd6wS%2Ftp7USVK4%2BwNMqkS4YxhCpWhaoGsCbqOWmiO49&X-Amz-Signature=e84746dd00c60cb79697b3b6ba66107c4d655f47fbe463aa44fc839922e85782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

