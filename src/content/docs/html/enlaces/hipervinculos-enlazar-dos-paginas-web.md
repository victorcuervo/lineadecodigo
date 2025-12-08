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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGTCIRA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOb8pH1JsKPZHhKqEXL6K0lO8Sbt1WfICuPwYtEMOHhAiEAsEhq7qRJHR9mPPxrpEAZ%2Fi86GCeYcbXt55VTeSvg8jUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4pSq7LbiTaO4eRXCrcA67tR7KMjtT2acqwLx77je0agkP9L6tUuKxrwrJcVgD07D%2BLMBcaVBEUpzwpSK6yHQwY7eS9AaGoG418I11AXG2quu34U0R7%2FHYq%2BfaJAJMKFFMY9I7Uct5%2B0dhbbe50TogjmFcXfs1UeJ80O2EhPoa1%2BQ3fNw2Pj4FVO%2FNMbLEd%2FiDAj4D5QswhKOFjS9Dx41UZxkbJHx%2BHWXGQokhg%2BwpFvf9wsvRS1l938kISkZWtGj02%2B%2Bhw%2BTEUGKPa3bIUMZxGaS6V75IMg3rwBpVR65fOELmJ%2F%2F7M%2Fk2vtLdfmmtG2TpVj%2B4ETpgzE8AhTB5oNYVJFFMObV%2BOO5Hw9t%2FwhKNi3PGv2l%2FdR5GlY6lvE2OJuopPXuwWL46jsR0EpKl%2F%2FauwNG%2FX7rwiRZuWmCNJrVpfGbP6M2GzRoDuAxp2xmXRE88KqwNbwphAf3wVZgTYJ%2F3SQSz6VtzUKrIrdMLbzv7SXzTDQljEk2ZgpLEDMinyV%2FwInZgQ10sgw2%2BSPvjE9PhSsdG6DThbX0dhaG0BpAFblhIquDgxODiE3MsRFTKQGUmEUDWrBMSJwK6DzL1K%2Frb8MwmmDeLr%2FS1Tt8VOuX%2BTdraU0z5JXNxwzEjiK5A4cRa7IWE2vXec%2Fk96MLjk28kGOqUBlOBsXXR4Kgseq9FNXUvKxWO2CbwO2cFSUU7lh5%2F3pfn2Dorxnrvs77u%2B%2FbBg3duFTiNms4t7sjAqJO7yqTbxCxlxmLXKroIojg5kpnq%2FLXRvflFl58%2F6WGXittG4rNS2iE49QSRyTuMaZbzwcXoZHrueLTylZvnKILY2eoDUSx5KGHXAfAvTtn9DeDr5pYW2sSxawz74j8GmAE%2B91b4B3hdD%2BHVX&X-Amz-Signature=4b905ee5e12923777d9b9b3b1bb70f593aeb472cdc750917b3b94025b2d61589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

