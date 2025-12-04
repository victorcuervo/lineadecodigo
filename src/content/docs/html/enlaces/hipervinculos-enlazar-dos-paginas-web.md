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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72DIDZ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCGPWv3lRzJRWcEGD6roZjhZyDCWBuq3qmnTUmZccF4tAIhAPWbSiWaHfGMV5ke0eMLzGfZvD1Jac%2FEQ1BnmRKtXZDHKv8DCDsQABoMNjM3NDIzMTgzODA1Igx4WItcmUwD%2F5BWgloq3APWTqS6kozW%2BCMZvIfoOPMhSgneVWjcWW6GxCUl6x6wjSRRLspTkX9sDTMvu9LR8xvwlOOQXjTzpyu%2BjkQL%2B7aB%2B0SbdpDWdzDQ%2B4juhvhxNva5NGXcnHjkvIKDX7mGXD4PFZzrjkGKyDGFhc%2FhY6lT6H3htlndVf7gu%2FSvjZHl8ECym3UG%2FKxu8SOPwHnB5GSEYmvmxk3WUQQV%2BTYXC5LCXAF6PZVD0QguQ09FYMWbY9necHrf3pI7O96AgMc3PLiAOrA6INsDE59jcy6ccYo5qu0m9QYSMCrqFK7aZHDPva0fgpvMiq7eGAIsP2hFWHtb1Nl%2FGLwqUP9Ii6U14B3qS44iLOQCG87%2Fw5ZlUD64O6yZWnkEX4pATjlA1egtw7pyGCfu12Wqsp%2FnNRrGUhWEV45xO6S4z%2BgmQLMuRhGgxdlh362fukbcUdDAR6f7NpEY1ImdXPVMAMkmKzklmuW7IPFWkLCCn0WUPYX0fJNVE9vhGFvE%2FiPEZWIVUeLENyehKUfzuc3Z5zgBbGhgBk8cLOJW8y%2FOcqxi%2FTVXKC%2Bp4BxDkurYhKaVjjRTFL7K%2FMWY4Y8ToBbPqCwtRFpoCUvA9hoJ%2FZ3yjc2PW%2FPii5m9kh8CU9bUduOD1C95xzCz1MPJBjqkAb3A9o9V1Sz2Sv%2FKzhuKD%2FRpxcaxsjA%2BqtsrRqnMOlF5VJ3m6ZWEfmCo2Gql1x6NiZGcesdE8uRqrLBmpJVB2WtZyi63JaevNO7klZvIVdEEh4FU4kJUQHKXjsdJsPVoqlu77oBRyr6UW8FXqPYQGUc%2BtWO9OtgcGOBFqN4DqGbKAUG5Ks6G4B2fvhNBr8V4Jpj%2FVxTCRE%2Fgts%2BSTrjmnKyOXsfL&X-Amz-Signature=71c4bfc346b9cc33cb2e1d0ee5337eab77f3f328126be7717dcf6141096ab93b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

