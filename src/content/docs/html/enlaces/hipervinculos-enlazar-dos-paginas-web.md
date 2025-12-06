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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IEAOI27%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkW0RKs9IOpa6OiebwTtcXDpvSSZ1o73PspAMHhiDzBwIgaa2CddVBnmUGUPany0gOQFeda4eNpzQ1Zsq%2BOvqZ8c4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMauSpbBSpfeGoMaJyrcA5dlERFyfSeuBQTlHTdh07wCHr%2BWml5pb5WiG4ILivAwRfLX8h0Fx5JB2sWSIWzRU6bqkB8TNNC8Wx5EbliU8c7GTYPBBwsX%2BapG93ovopLAe7lrOF%2F%2Bjp7uO6rpbNY6qQz7Tf6Wax%2BJzAjDX09yyQPKlKy0xjf5FqEdPJLp%2BR7p7F3zMtK%2F9MuaMrL%2FhyXGk80OMQ044WvvxDnOE%2BoIltg%2BHNoEf89w72NYK0VG1roukp0i6se53dMHgRWdkn7q9bWOukm2uFfH2Exb%2B2rx2nyPl5PkQ2Ue5QxdAZKq09TK%2FrDuEpa2GC5s5fNzi%2FITL6XbDCZNgdYjdPTybZlRPretYExNst3wVRqtiRR9Y%2Bg6iYK%2FmPhYVmiGc8T3kgE3z5IUuiWVnbUO4S11Ac2KVvuClaLPaVEqVJGZl1p84f58FCy0OYAYng5YH1yCoHaJPm3%2BNH7wFfKfIexfFNE%2FUlTWdjm6V%2BW1DcY2ulbb4hLXXf4fgSPqjGLTq9eYXEtQkfHb3OVnjkC4L%2FQmRvph1xa3hExE9969t5vwyzFHdjRqrbC%2FAczQhsiDEyYLw%2BWVOIFsSayOFbkhRtVmdBSa76KJWMgJTMawpIRbsDceQM6PUxhJIgVhMZD%2FWnCTMPnA0ckGOqUBs1ygg9mkAH0E6XLbRwmnHkXAZMA5AYGlQQlTlRq8Y0PV0%2BFMyoXeadmZOpfCZJs2rhAIzFrWZPgbxvacidXiDANha%2FVUxt13yzHNng0rYXr6NWWt0XFWI6%2Bxl6wojSGia20CeeKFa9A9K2E15rC7OZIDQeTcgVsUmIA6Lx%2BvXUS3x1jf2CMNkeZvhZb6jpuy68tIrn%2BpT6IXacCS9Om9M68xCZTU&X-Amz-Signature=a78deadf2ce4e34ec0711056729e9da6dbd664f59b40d1b04af44f6841050700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

