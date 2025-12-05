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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHV76YN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGWcNeQhmfuWvHvWzjN%2Fi72CDvKT%2B0BiFMz00E1YG5dgIgTncjbIF7ADqAQpRrypDP7kOJvKoz07%2F7c4XsOnmNu0Aq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKMNFptgv5tLVgNotyrcA9SFzM567CJlvFkm1MgKGMGplLKyhBGRPqKM%2FkewROOI%2BrAuWc0Q7L2MI63Pa8QbD6NoqWUXzDPOIEz%2B%2FdvaMCapOxtEv45RWrjlGO57%2By8HU1LlwsOutbbSvb0c4TaPF9ADosdaCCDOCbV70UmNgPrwZDHJuLsAw%2FtmdBbT3iE9qFU9Ap05wLgtAFtKylWYWVs7lIbMdIp8Gg%2BCj5PBmNyyeAAxg7E6pXXCxO2vaF0Z170kEZ5IF%2BjXlIzb3%2BpIFNQAADvn2AjwLGSywwxvTxWnFLsU8PuBmMBCPHYePW0j9zuc6xeksu41Qhjq3JaCILPJdQ8ejwFTLYlzVdNHO6vknB8UkG6NrC2f%2BMf36GK%2FktzbxNtNwyX7rEtHcu535qDYbJuGmwZlxEhyVRUGxqracrNDcse0QAcBmeZCel4MBC1Hy%2BCwXiACV4q%2FLK77hZs2WGfwEPvhRgCCB5NnxM8CHCeT%2Fj2qQVklkpw2QG49iHX9%2BumrckNcrOt0%2Bg4%2BXtBIhknmk%2FuiZZNOyCzO%2BN45sgRoRthBzGOT%2F6p45GINXjwWWKvFRwkrdYMTW0EfOEu9dXqL0lFyIKETXmYaRX7gCCOtm%2BLyW4qMXpvFPaCUZa0Xc4J5YKBpS6yhMPSLyMkGOqUBJsw%2BYX1pfABH7ONmTcqxPb7rdqT8qNzSy5OsiShiqYbZLkgW2caXqL%2F5996VC0zPU9g7aRHmQmJid42rvwW%2BU3RT17XdrgVR1rc0pk1vrI3j4QuidUy3J4qu55BcbZGA56tZPo4e5CJ1lBQPYVD1Y0Q6jYEW3DFip2AJUGuIc3iz8eNdz2TVLJM8DjXWqN%2BShZ%2F9ccUC9I%2FreCkbrpJh5mP5F9%2BV&X-Amz-Signature=55a985e89b6be5284fe4a317242ed8f524d0586812645da6e950e984738d3deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

