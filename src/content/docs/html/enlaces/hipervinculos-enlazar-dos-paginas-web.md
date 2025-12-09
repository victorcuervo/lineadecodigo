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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7F5QLZC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9ynVWPyfPnotZmeCrsIitYwl7QTrScNT4RZ4ADMN48AiAMvofxB9uAghH0%2BXukPYows%2BsfatV4DtDfeK5i8W9dyCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdXELLcWJi1QIruIwKtwDDf3Z67dhvtDCugKNG2ocgTeCsoFOC3Ts5nAUAydHAS7%2B1XK4u2oY1ovQldobjmgqxHXDMNz0qMYknoStGS9lHVzQ7GYJXbUQ4sPmKFqO03qpR81KTpl85VajQWJvpRbJwacK0%2FKtFYcZP5qdMsReOPIuMBP4Dx5N8CLrwP%2BlexbkVhZtFmtQ7BoJ5CBh5zePDnLBQif5vRd2sdoQIbdyzHv7SPwNKqMI4VfhU0%2B8SDX2itEbmhJKGAmPZ%2BDDcl53B2D%2BBPrbKDRZPcoaxzBsFcHDUlCzeUn%2BRPAbgzZyVr04ArAL1R9SSV2eiQh6K%2BE84YPxTrZ6Xe5YDjSF8zZMod9%2Fqf7Tdqvlr2mkJeu6MHaxxHKdNSsrVIaCadiG22ZiLgOoBT0p2P9F5NTdWkgc5SenTxbKzo0LPMbKpx%2FZ3JvmVIidg2PHwacUdDSfJqBDmilh3dxj0jb3hDnAGXylgGyLwhkVzs60chIYBDV%2F%2Bk88AN6dGjmg%2FeOj4TMmOrPnimc1zYFasosiDMqhuRyZVJOsHx%2FpCTFPvmg8ICdx4cm3wrPAvWPkvIHayq3gMQ1gOGQNH3ntrs%2BJLP0mrkddeVnga8B7mHE2kOacx3LULuDp1%2Ffwov1HJlb3rjMwvMPdyQY6pgHjvet3RZDvbDZFAMNTl1sJlljLQ8p0ryi51G5qkt3QbB5rbuLvM9digBGMhfDaZEQ5rPjwlS1ispM4arGnornY5XNwZ%2BTr8caar%2FbyNgYsdifNBQSmceaQELFdIkCBg9zPdxtchDvHZyK2ETYd7JtIBBmzxpdm1byWT1oyhfkjuyYZ6Ii%2BGNYCp2P3TjjrdLGUfBnfYH0VLSIQREhikNj5tYknKik%2F&X-Amz-Signature=295673d52ef57055d6c81235820ae57694fe8b5f0037fed55d26b7373a5ce029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

