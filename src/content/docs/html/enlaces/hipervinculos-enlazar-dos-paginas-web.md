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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDW6AZD6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoGNB0%2Blb09s%2Brghn2IdCOrhk9EuVkppm1m%2F0DfdOBrAiA9AGURhAYySwn5iYW1k5InesR6Xd73aP3MxfK4Z08wgyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1V2WY0Yi3GyKKEb%2BKtwDaQLBaAowiid%2B%2Fb%2FwVd24vNGQqDGsFnqtTVOVKrlGtJrdMr03XLng%2BHInsSvfNPgf%2FlINmgtPQQqLzXZuZjoKES%2Fel%2F3aev8QQU4XC28Aliqip9zVqZP6MfoyetYClZDMGj25OQ4yvI%2B3xvWUqNPIQOy%2F8NccHAW%2FC%2BdYEKAJk%2BXqCKT4b%2FLmgDJGsIRguZbJci9r1C%2BWAdmh0UBK1HgztFjoFzX37r1233u%2Fj8S%2BjqYSb4Hc5TyWfd6cHcME1A7CYBdaOw43mjrNII06Z%2FuIo9hKbs5Z5W372ZmPYSsgiaxT3qKwmGEtWQV9sQIgDWIRed07lo8cwY%2Ff6KrQdz29CQcz%2FjOq%2FYPEPnIA102Gg62p1xTo081gNibU7Z65eyRdkMO6a7al1Dr63Dku6xoKbclgZWN5Y9JDxhX%2BlunQv%2BEWo47nbgzjHlByhqWEYmgGbgncKYHCb%2Fy5JiCWCvvV6lA2CI%2Byj7YcqQ4ykrb2wlFWIUeFpx8r8Gkzb5IewEgr4MKxwRuGnoBLf7fG2Y%2BYjnri%2FCasY33TlDy0GAK7EdUe5BQ5%2Foq6HO7a2f1JVycyuuJrZp9rJAz3Oy3jfU3ON954xRBCKTKayiyHP6aCeOZaa0aAMtaIJOMiKeIwlu7YyQY6pgEpLoXVi2SQH%2FgEdAEy5BJ%2Bs%2F4gfpnqpRu6e0%2FbJh7T6izP2hFkAoPRtU7xPWogH4IMGO5s0%2FN5f01lBbog7PhRTUvUBCq3Z8BsFrbZTxm0ODHByF%2B9bk4j93gddSVoOJYJI%2F9Fvj49Eb%2FPV8bl9pS4zhJPfSIRungj5LuTny6Ib4r3BXseY4L4EeYrOPTvq%2BFVTySehX383gEX49dYl1MjpeK6f2Ya&X-Amz-Signature=78ec70cd886cd8558108d71b261e8acf33441ccef4866f97d64152888109cd45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

