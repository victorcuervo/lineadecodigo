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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PSUPU2O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPzMa4qSnm6DenVjYqtm%2FoSY9HThika94a4Jw3jM8iNAiA5VNNrrcm9g370rH1PD6AilmFUDV7O4EnwFK3TIQeZwyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjIK9TL1W5zkPjQCMKtwD%2BJ05Nr0Gv4mMv76mUJQmnh4iJU2QQiQVasT9pHZKznpyw8cbzwOfS8jbLy%2FWcm4N0U2f4MC2n948zPdnMwUiuZ%2B7YgQIGXRW7zwSxBLuJ1jIKxvB15TFniwI17cINDyCPPNzIHjiP38DwhTdLkDJmqxbCd%2FX2fwdzNXVc%2FwAn2xoGXFlGDULGFBBLUYnak3raHfXQCGVoz6lyjH6IHJeCaOsxCrEpTQpoVw76mN%2FNfhb1pqYWwxkdK4BJbmDSYVAlULUnJUPu1jKNqWebTkClPD46LDCqTevOcj6XJOR66nF%2FzsjIT%2F%2F0p7d1n6yCP2dhYY9gLpg%2F6K3Z0GWLk%2FmDZbq%2F0HVklS7BwacGzx1k%2BdCq4Vy9wIatIflEJqhwfOOIihpNArZP%2FxZttEK2E1yxPjaWMNzbjApNDv2KAvG%2FrzbugPZhf0pMI5fV%2F19TfCbHTd5awY1sYG%2B3uautVgse1VxINMLMe9jxp%2B03QHdRQufLT0HPiyUxu90h%2FrzNWTpp%2BX5e0D8a4H%2BAzo0ntNPYXxARCnjG7a3f%2FhXYbfjLKyGTL0LlzX5kiTy%2BcigSxjXBZ%2BMPkhRTYaoGRcYh%2FDLGbknUODjblWshTjRLSYb9LP%2FfzsDOIWsOqLRthwwzOXbyQY6pgFn8yOiXTbm%2FEp%2FWrCgidrNx3JPhETv%2Bc1RB6ViYiy8NhJb%2F91LYkh4xyfk6d%2BIQ1hCrya1NY7%2BNIx33MWUXJbbfSn%2BDOmGe%2B1uRBtqgH4WVy1arGDroXKdrLjjCdfgkXzMxfqjJzt9WhdAwBOE052piQbTK%2BT5M0WDVH7Fl8O5wd7TtiP%2B1eTXncIKdNU4%2BlAmJvJZV%2BsO5XKD34HJGMr4jnhLfB%2Bb&X-Amz-Signature=d0f95609de4b8925957cc4a9b7cccdfedbddfbf47ea795dd2d14daf35ecf170f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

