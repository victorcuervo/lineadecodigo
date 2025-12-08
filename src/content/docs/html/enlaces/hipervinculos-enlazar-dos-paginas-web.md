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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQSOKSII%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwNEDtI866S%2Fgw%2ByJ6APwBP8055kZNcm2Ip2RQKo3q7wIhALd8xu6%2BT3q2uH0BtTyAt%2FtUHOfnD4PfKBN%2F6hI31YaJKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXHLX34XawgdpwkX8q3AO9M6c16mi2uYPNzu%2BFCLiz6qDUsnEvz%2Fp302LjNrMa%2BxBdtxs%2BW6HSCc2F%2BGakZMmfEUs1a68TTvDY47bA%2FgDlsoh3g64H44HZt8a5mIRShJLcO%2FOH5VqI6ymX6fyB73hr9rnuXvUBzWRvk7t0oyhBWhaEQ5zbkmYfUbM07%2BrwoLw%2FXH9JNNe6vKSxQUpRZOLAWztuocAwW26mPK%2FwCX9xpWr3MoFfDZKkuirCWizA0DJ0DGUQluvhqDObY8lVWPphUYlyQ0mwK2wtPry7A0Dn1vH5GRqV2H0aarz1Tb5HxSRkTHfUgVrnMZ7p%2FqI7Estm20FnHRR1qqXkhE9rEandLXEJ%2B4f0cCoAg9wPTdYMkRPRaONSFBALCI2XRld98oEuGMX8wvY0V%2Fiva3Os4OP4ZPmzUHy2IM1VEAKt%2BH16bfM0DrZG82hW1YP5EookWKG4SNj1DQqEcu6nhfkuk%2FsuHXH3Ua9LdhziTNGt9zVAOjR2ATTAF49yjMPwlgzoOYwM4p5adkvLrYQT%2FPAjl18xGmGK7rc0v%2FhD82gC402ZwZw7IpVLrKNRJ5JP%2Fsckj0bQkG5cgqB8gsLiPXj2zIZO8zv9WctPUcMLYiqOMy1WKLhmPdlTeg4GkVbg3jCT0NnJBjqkAWkINj1xdSZuIgFX%2BFY27sc%2FIE6Yav%2F19x%2BH54jzQwCYDAyhQWsK%2F5ER3NVbUGeG7BgT6c1Ib02srauUWEZ8pb%2Bkc%2FdmWkoiFoOsTbTRmxNc%2BAGjrnFy5f5MuqkcOUHFhR%2FHTqqWlr11cg%2BWdxRcJdbo5E6JzPPtcX3p7%2BZmU0OfuHjYTGm1Huo%2BfI84d2vW5JicJlmUx%2Fm1hsSXAk0R9WgD3O8w&X-Amz-Signature=5e37200b484e51b53d0e523027985afd3c7924b0475c8d5b7cbf3b924c639fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

