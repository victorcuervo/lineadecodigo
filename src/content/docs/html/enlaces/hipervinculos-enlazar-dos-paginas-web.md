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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47VTSLD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFjwYeWvPEkTJ%2FfJYpWX9XIRrCgi4gHxQRX6qVa9eh4AiEAgKH8K3YYgjqvnRn3%2Byytv2hvwniO0mKddcA8bz6LR24q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLZspfAxO6Pp0644nircA%2FLNoPUM%2Fxu24D4nlZOiWoYa%2B2EKRJwx6Zmf1%2BFThU66Mqy%2FlxZLe08M2kA1gSxYW%2FsJnZ4NrDHKAfBaK5dPtiRr2hKuwj5yMGSacjHX96x4JF%2FN2cBgJsJVeRUOxdcVeIGfRdKqWAX79u9y8PfevFXfe%2BhNLDMcf%2FOMd3sqFapRquTQZ6mw49tG%2FtyWQU9nh1AUIg7P0NncIg1K4TTY0Ica%2F5qyNLZXaORoldpYWJyFErjaKk8G6mrsxDeytqtqI3XVtVXFNmWkMtBxc17dMLIvx%2B%2FniXveqCTkMbZyKCvnC6nGxo2pOhW%2FXFlq33asuqwyuLFngriPkZKXYTwySSrEYASHxwynK4E3%2FoTCAfKUs%2BNXbFIhSzIf2PX49rV82y1nWOFjv0Ak4nIvBBC56XAp2D7V7u98uBvaShcilGY6pPU58xYIeZ%2BfAPiMLW7KZD7OBp78u9RcxZznzHcTEFmEDeUYuAubWyWj0MVqeT2Mv7p93h8XFpsaIPKX2L8Y0w4WIOiC6KFygU%2FylFHnKZV3LTJS0J9lYTV2k0xRFq8QANtYXBPSmxYjZX%2BGWLK8Us4S3sW3UXZYLiZLdD2Hre%2B4IaJq0n3T66b%2B7gBm7bR9UlKYfPWEA%2Bye9S1mMPem0MkGOqUB5rxkf5NoOYEuRhaPY9CgaWQcW5vCO%2FPma2R98wDy3%2FZxclCesuYahUriz1Vtsx5FsvAuv9Cr6qcXK3wWFXEBDN8RXdv2zhRwEZy9Sn%2B9t1XqDvUWBclkTIeCpnqFfTsP5IZPvvjSQptZEnGh%2BYHrYsKX1nK8QRjNRaAurTwNxg20uSvc2VmWOzTGN0Oa90y5ezuSGiY9sPjm6DBC%2FcsU9x1vmKiu&X-Amz-Signature=e357635686b54d1f717e35f378112e3cb1f7832e8eeb2ce4dfc13e925a700ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

