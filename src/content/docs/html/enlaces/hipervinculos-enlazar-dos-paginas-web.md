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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBR6FJTX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FTUrF23vLfs4V3Zp4zop%2Bx4gX%2BpgCMKEEDBRkeRGXwAiBCdpkIJsu7EOAoAwyV1U8dOss1qwHVqaF5RofZehQOviqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMOxKTGQmxI9B7i9EKtwDRqudkTFvsqMldEp9x40uCnzTS1ydR8xxXwfMs%2FGCHm6haffQ4nj2vTCdZMrMUa%2Fcf1o7MR1V3N3kKPaMSo2M6acbOrh%2BdFmvp%2BBd%2FRnrFlw0HvMOFYm9%2BLfoiBGsHrcXv76uaUQUQ48iH2NwGNF3YOs519U6F9WcRvUaEOmFcCmxQVGleoqs45XbTKPDGUr0jMfvISHHGdBXi6Owu8rJDktBI5x0lh3BqFcjiTMQaUtDVBAHZ6Tf6JPP7KnAxasmVNFR6bDOgAtFr%2BEW71kOsROV6%2BAuCXTXDhe2SxY4mwuyDOYsxqK4GUmeyZQSRZT9m%2FUdDJabbTGFzHwIcvfYiuO5Mq6%2BV04kR2qCObdIer%2FHysm3XqD3zyyU1gMLG7jCB7VMtVu6HUX5wrnSbBzlBnTodSWqlLLksZ2DY46jDHoXbZr1K43wwJHBojc2WRESf5MpF5%2Bn40U3OU5K1Uk%2BnyI6x4bzkNlV2ODkP%2Burd33OFz6bs9XTXTvLbJLQ%2BbNDK53ZmFE%2BYNsFU61zm8YbRa6QhUVP9gl6km8YHmMYSoT5Biq9op19PKLLjAgD0Rr1YLLOixRtSwbavPL6iMc3M%2BU2FOBj9btF6tCnW3bn35jCadFY3NxSUZBGIxYwvJrVyQY6pgF7ALz2SZ2i%2FYhwFdkgMj%2B4DZa%2Fcqs3nWamJwkx4LTNnmaMtRIUggJvE5wOhhjHiFXw%2B%2B2bnfiVlHoOGrC1xJkdnncUDoQ4bVpnvTCeGeF0zqONljlUTa%2F2Z5fw2xmgFd49l5Dk%2BCRzHp8r0g4A4kj7sf3NtgQ6%2FL1rW8ulrIDr9FF%2FkWCdcB0%2BoUe6I%2FYpt8fZuXwhwCCQ%2FBzGakKAWV3bigPmt9re&X-Amz-Signature=c82f0b9c279931397a6b8917fdc8338d0868a7cd666bdcaff5f0a0ce48151fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

