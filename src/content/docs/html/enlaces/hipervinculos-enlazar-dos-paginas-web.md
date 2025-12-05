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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUSGTG4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BF%2FcFqj5Oth6%2BiyACrDN3E%2FJiYFl4kiEllaYcAP1TcAiEAwh3CNaNwB76GUG8wfG%2BxZtMlABcnqN6nuVY4%2FB7xHocq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJpisf8AbAIS6YPeFCrcA9rVCXqNDTkobDuAn6o1xQV%2BQtLaGqzVCbsSBURnTw75h68YNWtRCZlO7Wz6bUIx0QGbxRAPOaD8OvMi870FF9%2FKTmzUwaWcctRNIqtBjoXKyadg%2FPzYhkIvWhaTkenfL0YuaSizJJ6B0aIaoZLpfvv3StSkP%2F9tLZnV8p89t4nSueVhDlpF4b9QclgH4FFNsJ76gaGh942L5Vl6CxyLNw9xVC%2Flm4fXnHsbnVnhdpXbW5NL1S8e08xd3SiisRWDf6p6zr3khLbaS8DXl593XrBcanc%2BUviyEp1%2F5D4kxncRe1HLiMKrVOZU5BztdISN9kV1wvJ15nvdAzaBiXaVod%2F6%2BOzvSUou8p6zmrjp22wwqg0YoPvkZJh%2FzROmBFySJQlYo0f4AmVP1qnyG7sGFa1Hy%2BfgU1PvLAhTC4uEAbPvpYyRfT9IduNv4hgNl85AZDfdcGyV6T3eEKLJJWFL3f3A4dRdtpWa8enL1FLBVZjfyND9V%2BFHknn9bQSW0SuMkMa4ENBgdnZQDx4gSXXqqSVQgS36CoKO8YkQnF%2Bgmi7pJx9LPg7td9in3y8wjBPCTynuwwuJDifYLIVyOgAQxQRiEQE093CTqlNbHLADegl1h77w7tUpYJdvEoFzMOPNyskGOqUBKjNW9xRJVrTRNSmaVmYGA7xPddDvJo4%2F2eJsjhUdHTwNnNqZTDGJPtam2uQzFuiOFgxpJ%2BwvBXl8eH4T%2F6Va%2BfdMngzb%2FbmrMvCAmidd%2BfIYMsc72HJzgmqUGmgY2j%2Bv68bxIc4DSJ2W%2FCxBYV1wm5TIaox6qnUSGxIfElXdUwzX%2Bw4yVanYGmBO0%2FbPF922m6gYZ2nlc4Ep6Ki7vJMQbeM07Mw8&X-Amz-Signature=ee23cc333f2961956660a5a13a358367458253b95ae4249b0c7a71b39b903592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

