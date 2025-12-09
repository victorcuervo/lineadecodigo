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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AYZ2PLF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFZXbqPCoprGOTL8%2FeuSe9d1Ue%2BOMVfej0w6oiykcd%2BAiB5LioCWHFGab2X%2FtHRKnBXTv9t6tVb6jI2jhbWoXH2ACqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsmwtz7MmBIgbvR8sKtwD%2F6SfcyU8twJSr4G%2FQUqvqeXk11c5ExX58GscjHC8HQpU99x9uTwYe9sP%2F%2BWqqPnc0z4l9JPxTyCWcBUnBOkLr8KiNyiIKybHzT3aclS2XTghq9ux2Im0LRnYc0wAxOV9zCStWQXNC8B4XQNlhoJEVRsR%2BfmZxvn7%2FMmqk1YYgeWw81Asr8oDmZY%2BzAxTOsBTIPpASHxE02ybXChQeO27ktNxrDyA3GTOFMRKFd1GWYSfrIdED6vpFo49CnMhBOt4cubIztx8I6ksbVy5uQz46UEhv%2BpRRd6nj%2FHHu3HZJFRyd7etdfNifybzpwJywoLbrfPPAowXJqqyBGTBIpQC27JptvAgXIP5oAnDSyiXUo40zaFzfv7PoERR4%2B0otbsJPlgoHknnFl9a37E3PeVM4Ikz7%2BbJJP0WkuAlmien1EN6T7KEjp%2B%2F9VD6vLUcnY%2Fh%2BXEW1Qws67qiZff8YrPdjC%2BQsoxJkvZFY1xBivAFSv9nFcjPjYui%2BqvRm%2B2S1FvrPhNSR9v6%2BL98BrTyAIYH7%2F9VRyEYe8Kr6lzxaW6KN9VobwqOWinO8x82%2FWQfsHgsNhjk4fMyaW1iDGElmSKWA4GrEd0YxOGU6MrHcvepvQpWHZwAC3yg1RoRGZsw2OXeyQY6pgFu1R7PNn%2BPtjUYoPp%2BMkbBLSFYofewZ0MEngiTkt%2BzzI7sKkY1TUj%2FkZgeQDwvp2%2BOrFiFD17UKjvKfaILe%2BhJ%2BsYw72OjG9IOuxvvU4%2Bt8xHUKt3514tUU0vlx02w2MAEIReV5oIwlk2kF2PX3Fk5J9Cctl6y3Gro4IMuWSeaUk3muY92jLBoGnZC2px%2BbmZWLW%2Ba1f89xMSjisCkL9LOXYYGhQNM&X-Amz-Signature=ad30e6874cd1999322fa028d59a2f16021d4d7228a99e0cb59b9009402879b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

