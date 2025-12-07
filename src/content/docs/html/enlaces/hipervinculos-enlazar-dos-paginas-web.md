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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5PULMAE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYRuzyNN9s0z%2FDwASLHeSGhRyfKttI7WwA576FihKAqAiEAmtg%2FbAbMlXcFXmun1BYRTaHYRxhWJb0fIPHCWAg2tDQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV47LNVOrW1roiemyrcA2%2BC7VHIiPN%2FXRTZNGJvs3r5sXtlQM9KQ0HthJ6wg%2FoRrAMObasgM5CSX8HLha3PSZAOgnhXxCcY9cpHXvCKB%2B99NPgL%2Bm4SVst%2BXnorDAmf%2F%2BmaLYVC86AOMgz%2F3Sc5nV13FkgEmNmq60DTLpQQqBeezuyx5ZG1NttCkf12Ba9C%2FySXQLSEFSb156Byv2PnQrgzg%2FuzaLUv3197mVXl6g4ykGE73yZEgkL%2FLLPRlO0gBErsW1aBNv0AzpXvqpSLgN5CWcBkwPMKQhBhaOA4zueWQVocR5A8AsDIG9UMQmV9OAa019ZUsJV3g7n%2FOQQ7dUZJahF2xUOD%2B%2B3pKn4z7a3xSnQhYLRtOcZB%2BVBoukPHOyw8j2xqZ2csjc5wVEAY1pS2YA6y1moh%2Bqi0LD3NlkSZmI8xtHnmZUZo8AZMXv%2BEihMf6hws9%2BtOaUNgkHcxmcf3Li1KTcMsOw2fot8A2TBzgQIfkjZhoEdfdq0jwGMpnq10pLbr63tgNX682ePtEqzhVVbynaXo6xbzix5I6wKfjEAvTnvFDDrnLL2A5d6wc2HJX8EddT82vSq8RNQjEMu5k3iu2%2B8Lxo7nYjgCChN3kV6ZvdE9UApEQRbzBJu%2BiQtreG6BQNZiyk6dMPLG18kGOqUB9BLQcRJGcd0oOA6U7XY8ASXb%2BLr6XMbW9vf6h1Qan3dMSDN5zj5BWqjTaRG64PmtYfmTM13nENwW2bKcRM%2FDrNHsJ0HUFTsEfBKDm0wtxDnB2btZx8o7jn1sIPfN0%2BUZIgSSZS2LSpuweOdtZsG0wNpIIz7wixJgFzgBTbIFopAShM94HD18%2F6q6nP%2BVzDkzZdB1ddDyQdlubCjqjUohHFtGpg1x&X-Amz-Signature=5a9292cebd29b3cfb2e83ac2f30763a6df60d438efa36833617b6e2f34371309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

