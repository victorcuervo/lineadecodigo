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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZDAEBTB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFTPXmon8NJ3bo6as%2BkSvIrBbmCyp8ODYBGwRVN6VFISAiEAiXQhSGy0w7Uk5qJ8Hfvq3Ge%2Blq%2BbVqjrGpZQH29bs0kq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDD20%2BrW71VybOzVbtircA7eWTut85102jat5k5n7G3ueKNtiw45EU7deXiquPeMdXZ7cqvHrewMA1V4MY%2FBp4KhbLsfJh2P8bcM16%2B5zmTBIhWOe44djGZ%2BTHQyzp9g4SiGi4MTpJC2dcBaluCHdzpte96wP%2FPcZ9kzIqz582b8PqwkwJDy8mZFhqqdpQ%2FHjFcIdE5tx5nFw3zokPb87I2nCAQtoRRKgKgxZFtcMPnhOJy2I7M9COO6ppArVi0xzQ12Ud3VI4V1vSgnUDhHl6Eedi3w%2BeUjWpHiNNVEK4SecDFa060DFnt9WPYjAwfaMlkD4mrQIfpGp0AagxZU%2BPN6BvNPo4sw8SQlADrQLQRXNp9rUj%2FJ3cEp0afGC3vT7SQMoooOacR802KLc415J%2F0CJPI5sc0dP%2FHTmB%2FQskHBGBaIdySTgihLPNj0IJ9780M5WXIDkvgvlIMOJh61qZIXlD7LKmEvuoEWNPuvYF4aBDjr6%2Btx2infvaUVZjbEFh1qoKDVrVvKPn1gVCdzrK3B1eDuO2gLnA0GLbTlC0%2Fb95THvSk1h02EV8dNgitX1hjAgqMgnt5la4p8DHKT6AFjY9BtV6K%2FDkDoh0e5EP%2FTw1waUgTD8Rdrz2In1%2F4np%2BqMCnm%2FPaSNU7j9yMLq1w8kGOqUBmtFVnE41Z0raPvvtX0AQyWKKRrZFfUG4BYKLzkCOrDYdFZ%2BGx0JaVl0wJwdONINjp2aExab7puarXA769sDvXg1Y0gOrsceFCf4X9mYzRFDMdVDeL6nxwt4D5sj2C7iJvMsVfNf3nQHY9fMcTq3P%2BIACWtbwZXfyqDBRjIoS4ZzPjUlVxhVtPQFAclTqjBXtQ7PwKhpepr7ZnHLzIi%2FM%2BP6YKgt3&X-Amz-Signature=51516d371ba75cdb78815dc87d7869ce83364c9de833c30db2fb2a91236218e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

