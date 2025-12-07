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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ELGRVLM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfOj8zVYgyt2Mp5MaXHIJ3k7uS4yfgo3E1Zp1vlxEk3AiBySwtL%2FEJ3piq6K6G4gVT9R0LALIsDtNJ6avdk87GYJCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuekzQQzjBvdd83VlKtwD87Mvh1CWmqxWBOn3sqyz6bMPb9XCRbBEeMk0pTt63QwGRG1Ky%2B4sZPfk3Dg9IrhK%2F3D7h%2FqqItHLBJbeXOX1X3dIaUSBY%2FouHPWWrvCn1G44cw2%2FlIhpQCTzX6VOSvvlFWld3L0GhfHfLjtnFtTiCmvG3nuTCl90QclhMaZUKJczgAREEkUMP45dzpGtMbdjSAdE38qbXTT%2F%2BZmNQtHIwzpA%2Bi%2Fq9nAl7pQ4t6lh72Nixk8de7HX%2BIpFsNbuP1zHluNMNUrN1BSAt%2Be6wBb34oJSzcTPN9Nl6iOhBGg66SjZvp9Jc5fMm2kE%2Fm5Ko6r6nEklyNGxeNeXuTkAKfPBPEN5nWXjcCmUuoe5c2%2FbxDpDxnkRpcp5eVYSeP2ovD1v27V1D3S%2FWipiUo8NXPj99wWPeR6Hi70dsfbwk3lmgqptjd6nrx6XGBTFcTDa%2F%2FFK1Qvuq5j57KblDYGd%2BqWqTPHxR69HBjkYnBsF1t93ggkDIrWWjt%2FWsPXlwJF7PVWMidAzWFZSCfFDvOgIDksbwtf0sL9AIoWUKTrD0490u2iEmOBVfDXTzVdZXmb9lERqGAPv69XPNiYnWP3pEQmLpI2kkt7UZRwMvT7u%2BMm5%2FSJp8aMwErV%2F2znMeG8wp7fWyQY6pgF62qXDEEbLprv4KlnA%2BrhHeD7KKfbrrYepKzZYdt73Uo8HsQxjmXaBmqGaR9hFexSaWXcCpEdG54SVwee0jhWfwqryClBejD%2BbE%2BRyVGhYCc%2FqUyrpZyYg8sDe%2F77zdxoDsZ%2BseJqXYEHUqQZ0CQaE3Q%2FzLiu1Ws7GLSZrawmhRyVS%2Bwk7%2Bkaw7CWf8khMpMSs5d8BoO3qpRYi81Aszx%2BSmdy5NQ%2Bg&X-Amz-Signature=7073444bf6fa9fa9e549be59897c705d12f513407a312ffb1dddc33dce55b8a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

