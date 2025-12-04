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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDHA7VW4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICdQP0Bx0d4cT4uaup%2FexKyNDh27ESnCkWA%2BPWHZdMLVAiBeWA4TF48Iz%2FNB6E0R%2FIAgmKwkRZz5t008xvbSQdVh4Sr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMm8lkbMbNdBwW3lyYKtwDEChRWWx2pLcMCOgmB7bCWP4hV4Oyk7QVB9JWL8R8F7qtwj50r3Vuajb6jKPMZiCbNBRzkiXm%2FyWlN1EAywOU9oUCncyS6SGt3cpEgOybmyxe6Rk87NmxyKJE6hVeEo1vc%2Boqpbg0H%2BVYQknOajlAi8qkbjUquJ154bUedhT621FnlD2vQCoAmd21lxK3doQDHfrpK2NdQjVuohcbi7ibkLi7x9Td%2FifdVJ3GILUNMto5RylFEB8nDa4pG8vdea%2BnYGgmfSwd8cbl0pKyUPJlft97UGPgCey%2BZatf8pMKQbnukve%2FqdgatVfSb6LTiOS4jDTc4MfMdI8YTMYvo7bvMoHQ%2BZLaXN3OZJS%2F50d5U1jjadZCd4b%2FayEbrk1XnvZhLZkY4W5fwTOX0R%2Bpr5r%2BInz1Kao7%2BuE%2FRteJR9k4ZY3zxxfU8s0hFZdb%2BpA4C%2Bk4DuV2tqpia6%2BMog5V864Eeqk%2BfHWeXX8FPGpkKo5RZ3zXNC6AE6LBAC%2BfLNRT4OT00erlMz%2BKENzdkU%2Ba30FGOZidKMNDd1V5jCDA1VXOC5yty7DxE5cwxovcohW55befpv%2Fq0Z7eZ8Ea%2BzMw9XZcTSBEQINh%2BMnRsfKtEUw05XmGPTxBfDx4uyR8BNQww%2BbFyQY6pgEHe3fEAaxQv2IQhp%2FiBaXFvbmpJtHUZRYLG809yIDVToI6EeeD6HbmO9uq1nvZvnmEodanGThI7sT2tTaArZAf6vJUVvt1lXEwkrF3BOshDHVW1kVaye2RobI123rXh%2FWQkdTWU8XYz%2Bg1sAYAgrieidXk22u0uFNuIstvhem6Hmclf6M89W2dtnQMytqI1GmH2j2nydtC5P1AoAjqwLzjK1G%2B7YM5&X-Amz-Signature=9a4032a1e1e29fdfb175ca28d4a3a7ebc43e04e826e9d7cf3050f9e7bc265502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

