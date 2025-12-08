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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7JHXHR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFvbbLMMOCj%2Ffa6JGBcPIS5akGJfw%2FmEJjkaWOU2065gIhANYhDgsenjZG9ij1GXqJT%2FhighBt2PFyZAkPqdrLKA14KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8uO0Uh%2BtAeRNwrT4q3ANJC41lY%2FBKqK%2FGHhuKJQKKn0gfN3Fsqk5wWSIniWHMq0T0RmeeUcdrtxP6qdCC4k1PSDg03AqpFJ%2FXY7P69QMwHewSWlBreW4FikZlKscU3dKFiPKj5bUGOAazDT2KpDcvotePtar9glFhvuObtR9vhJRI1g7lYYX47mL1PTr3AQqJAjVnQyPC6rvjPLZfNxFzvpc1a%2B1r3r6rjY3YaJDTiukSlfh6VLROFNReq1Vng4ACoY3eicRnwTHvA8jYRwADBoeLxxWjnhgePwYFtkdnqqeIPu1I4r9dMp390YQuSpyZaOcUsGsIUyAkKX2mGurpF2ejH4j65N4lREwOwJv0CxvDk2meL%2FiL1r37%2F673PDqcb61jbpSPrwXA1t4aRdidj%2BOTAKrwnAK59sMJNyi3W%2FklgWD1Ky5vMkW%2FwqaWmnOMF4cunkGEYIBvAd8iHxeXws8h%2Fn9av7hNtVasv3CaTrHbvp4hY8mf%2BqGDnapJJtKvww%2FcMYVLrL4BJG0JTVv0UTG%2FFlAPRo0mTz8u3ELjrrYVLEfsmtiYErsd8ooAh7MIHFJaAP9rtt2SfiKbRayqp5cnnoR6mymPCpypdMjdDNLAoy907FzlCrP%2F0naoSz6lsnxWHWJRcIkV7jC7ot3JBjqkAawjsLr62pbwfM2dIVtg5heaH04tTIG8%2BpCgD%2BPReu1%2B8cxozMVCOt%2BgfUsqJndD%2FJMShC0G8mE3xOtPfMOROSEqsqEezhPhwvY8wQl7n%2FsGCIJNqpJmFJuO1SR2JD%2FcHF2pM7ti3NniVeYH5OModsqN0X1I8pHwRhtxTfx3b6RHaYqJJKxK8IeD0MsUaBdwQYscDLlSuGSx8ur8F7biNOrp3m2A&X-Amz-Signature=1b0e2911bf69dd761d29d4c03db05f3db0abc7a9514dfbbf4643526508c169f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

