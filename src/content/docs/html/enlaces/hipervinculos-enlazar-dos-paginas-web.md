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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDMKJJY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbbdoHKzhEgQPEn8lG9InPJ50wUDoeIw5lPnSCyDflIAiBNIBFAVf6kQKEBnpeatXYG9yCTBgDxZzwX8kYOVDVHOSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCbt6dthjqCffOM4qKtwD07q85bTUdzA7FodeNu81VENsjiuQNH%2F9iBeTngaPpeNg71kj%2FfKdnVkL88lbMJDm0vYm25yyc971BUScXc35Pvf21yzAPLmcHS3Tn6zHkUvn00l6BIDbRZSCJqIg5WDjpUR%2FlnzRPPlu0pQISCvEFXoreZNBtcCxO4qJhpBZt4yJoyW9cr3PCyIdqEzwilPb30ArgFWuiiiquU%2Fx86Lw%2Ba5k3FfKQ9CbkKqN7GdWC1NFzrrpBfdcfAKgXCxtN0IG%2FNUAnAQ0sZmiqrhtRBVRwg1ok%2BLQVtOCy5X8%2FMMMqDOLBK3F%2F5fSiYvx7Y1ye56VoyrA3e9v0IBguXmUY8ECPVKsE%2BOI3ds7Fc0HGQLJMptcSQ3o%2BCu8H2Rmt9p6MrOvYoFEgDTBQNjQGxHslhHK3UmspY6I75a%2FhAItXnUAEmytqOhVivrQY0ugMgjbqFqtBnBhoWmtM7IbeTZnhLY0VYrRjeKht6TSpbKpVQ%2BLOWyugifXHfrXAIgS6z0XP5bkBlB372qj8A%2FDJ86RoMx4Z65AVuTJ2vsevARAtqfbKz%2BegphQJyQUFNtSNl9PEXBAN1%2F%2FIyQ%2FtIX8bgrvyW%2Fmg4Wiuv%2Fj9Jk0rN2938V6%2By9KYr7%2B2DTk4mqRs9swoN7OyQY6pgGooQ7kk9xgji5UYtIWHPsxUkV7RlHzDWXpq0oMIABxhVgYTURux720Zo7dqcDbx9ocvbc5cEii5oXiAmgh8ziOCBiqrz15NC59M9YAoVHyQrsaJAi8gHSVyIdwmS2kOi39yvc1GVbmzUk%2BfZor4Mr6%2FdyBM2Cy8NQdDapeKJp3XqsXe3HOMan%2BwbSBJxih42cOuskXoFgo2rpy5wvv3DHgPf5vy47N&X-Amz-Signature=8d1670d2002aeeb89ca9d32b4d98f6f9e04a6fa9ba7fce49bf3de46cb8af1cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

