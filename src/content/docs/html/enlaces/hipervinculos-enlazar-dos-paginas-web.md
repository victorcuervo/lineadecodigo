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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3VACQ5Q%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFycJdsM72uLTCzx9dqigSndYWk8yVHuFd2HQ1avmP7QIgW5%2Fz9mYZhtE8TbXnfoeTBKPzZ7apJBFw9bhDwj7Uq2kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEg4qF35mYcLIH%2FzTyrcA2fvXKz25q0JQiPMh3ssJlc5MyJnIo5oLk4WsKP8DucmlJg2%2BFSv4t7qPDFxL3gb7W5CZtVwIu1a0zMUrPvdMWdhcDRaKSNfg64VzY7LkPod%2BoEvaH%2Fu1WlkoEOKadacnMsu%2FLHTefekKKPly%2BMAR5weHefBFD0UFgpkwyc39PxQnRQDF2N2NFPuOaY45m3tNdMTlCNmti3GNC9uIlEasw1KLeSDyxCkxqbP0J0V2Tu4cSCb5%2B1BEKr%2FfW17edfdc%2BoFC4LVCZ%2FadtEfNkIc4AQSsxogqP5pW9u7eMVvZzCrXDt%2FQDDlkMFwnix813eXVehEqQeEw%2BBIU%2B4a%2BKFVodhQ2E0QAIuLDGYTsZRm1uWEwAqhZurxaVRCwRcedyNwGs2WcaQ4yoG998BXoklPDQWjdOOIZpefyADriS6bBzo1DSbVD%2FdaSQdBV5MO%2BifrORNGx46nu2qKYC1QTyI84oUpg8oVig6bJaRpPk%2Bq9QXVxUsyciNbNwI9TjH%2BEmkJS8RvPj5oCdWgJ6vQ9m7BJIizCR9mJ303t7m4FgkKMkF%2BLG629WzPyAtiCXbCyfc2%2Fgwuktfd3LtHHWnQ3D0h3FGFMvclRucJYuKwFFWdf0j1g%2Fujkb%2BW21M4kxX6MMrM0ckGOqUBTy8cXx1HlWUiwtVHMkq7LX5SlSFRVIhujf3oc2VwLSGcytrovB8J8UOTHPOXwcBeZcotRUICWtb51ANnXihZvmjfTlPiWlT87M5PI7LKE7Ag8ilrO8MYSn%2FQChmWrBwv%2F8gbZtBfl4CGHXTUhdnXv5fg8BEPxJaljDtka0jPQjOgmj9SU1pRXYp4QYx4QqPkiD29TgtZtNMHDfIaj1vO%2Fs10W3XO&X-Amz-Signature=9fb51a5ef128972055a865ac3c598977d999d28ee063bec4ecf5214e9c86a09c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

