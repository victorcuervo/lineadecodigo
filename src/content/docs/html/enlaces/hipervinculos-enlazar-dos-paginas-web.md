---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3X5H7M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD%2BTsd60WSIQEsuCe9HLZVjGKHVUIYWNDMj44hkSn%2FZFAIgepd%2FNzD47%2FRGawDLgNaQZglZRx750ttKPArrld9CVFgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJLTnop08VWR0dhLUyrcA3lwjbdCnaKJk5S0oCbzjdVO%2BxMH%2FPTryxkxUCsoEnzzjCq6a6ZCxDq8T3zx%2BhcaroWikWGmgIRWeecKeUxvKNiCiAOs8vKv%2FmyIXxzprllFFtDDnOUmuhRgSV6WJX0v1Y8qWFnHRgYyYuxReM9Zzheq4q6xUeFVb9uLl57QOSHxTkDQVTJROTuMzL%2B%2BO3HxTivYmbHCg6LO4ITVGdYT7%2BzHTrz5%2B7ZgjJjM2J4P75cjel%2Busokc1RtRNbMeR0GZgT5W0GhKnBn05jJeTgkaEFi%2BG6hSx3lpZItcKUzgg%2FmHT%2B%2F97iwLV%2Bsl1WiKSbxeKv6FQknWH0cQa4J6bPTGfG8h6wVyLSGO1LxXY8grIU1y91I7YKuapHZjeSOEezEevjpKOXZvJvX2g6Vrdnd6Nq6xsiJXUeYEnzAODSHC0%2F%2BTgYcith3P2RVjSD9CNgWy%2Fg7HvBwCHbcopiSaGIyQ2vscNLvrjc%2FKJsJUCaUBXQBvHIsU1DQ3KSO8VbL7wUHG4NGIeZ4xjoJ0YzlEX1HSOvXQnY2tUgk9qwjqC4d0ze6Tj%2FzJnHY5ZFcklV6Wm9w7N4kw1WUWTht1KNJ3NJzn7J5SwHdkF%2Bs4adkOe59qjsIrGhAsuwAttg73O9XvMMyGxckGOqUBQIuWjymkPhBtMUfHZL6lY4qeTO6wKeYvUfJk3R3OZWIijZn%2BLvs1VXH1185tz6XJf2ZOzv0BeS94gucGPJTcrh7JWGCoST%2Bo0MBUinR4IALnYssD0s72NlADHL1QDRKkf0WeJvdK5Bjo%2BJwajqPuFOy2LScq7DPbKSwEKWKG6PCRFSgEhlgTUWR01h49ERrC%2BuiyR%2FdQ64OMFi%2FhevHIxdEWy%2Be7&X-Amz-Signature=361a73e9eafdf7c5634343b3b1b0d39db5f2331378f8adad56066f3d9112166f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

