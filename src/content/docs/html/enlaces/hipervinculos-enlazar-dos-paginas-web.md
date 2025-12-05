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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOK6HE4W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPqs27%2FNxqhxnAAtvvmlUsU9rtOWLEhA%2BLrOngsAGW9QIgKDHKW6IbKAgGyspo5IzknVGPBRpVs%2Fsxe6EBseg4%2BwMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOu5C9Y2jo6yFtVlESrcAyyT%2FnLi752dYU2f%2BfAisX6QWzXAz5X8fWWKV9FFQaXQOwYYMUqMKZaTwwgleT37S%2FW7MHEmyVpzE45h41pwtDrycJlAFJzQOUoDPdwLj0Y74%2FrN7gXNthH1rJOTg%2BNmqQIsnXe%2BL8PVgqyr50KX2XHI7hQklpU%2FJ0Ik7JOPEogZS61msYT7FgJWi1vg%2FCQsm0znyfoZCUTXO%2FzAvlQkkCBHuNuNoedWJ%2FfTzOeG3Mahe0PwAKRApNFeFekHyBGdYsvsb5Ulf5Vuxb%2FSExz43Y%2F34tK09imHloNNSOUn%2BDyjK4%2BvBVl1atxPopoqa1udnaZR7s7M3Bg5pyuZnsiWXra0d1MCCO6QlYGmiQThpKv%2Ftq5HjaESMDXaF1MWJQeelZFcBRvPFOY2RTSf88%2B1JzrsAviMs3%2FqRQrsbtFxrSz96uvPP2ZpyZrMsXSqqM3A24TllsOlvRYF1nkl1Ij4sFuZo7Cey%2Fet5O%2FS9XP2G4IIY80%2FoCrpBzW0tQfVFbnxVs7wzrWbq8vnj34xn9Wpv1zbJ8a4xurbaCDflwuUo0YcQBYikBVg%2BX824jHb0ujaVv5xq04nmo%2Bk9sp3Wbi%2Fon8YLzLIud8L2om8%2Fk29sNOYzhgU0YT5qtftTAD8MI3MyskGOqUBzVIUhM3N5Td%2F98Un3bkIkiNf2P8oxvblus9vrOCzhDBqqiHlwUYDmoYs%2FdCd70Qa5kkUMsX4yxCxOvK0OWUHF%2FG2WxRDBh7ld2lFSOClra2CMm7AqCubv26gaXA%2FOKPBjOoQbBbqEGC4RZHubZEebIrDa7n%2BvUk%2FRAG0g0s49DaXzrFMOVAR13KYnDjoGkHrpKyY8TC4npKthwi90U1CP%2BgBwMa3&X-Amz-Signature=c3e91e92d5aac7e9c494ac837ce42f6fe956069fd9bbbf63e6a3fa26a1c72cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

