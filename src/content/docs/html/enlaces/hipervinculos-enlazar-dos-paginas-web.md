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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CHMS6M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2F7xoxA4TQRyTeiIgDcWrfKwTTZ3jySeqQvfeG1bEwJAiEAz%2FEt%2FX%2FR7M6k8bchZijh8ii3CvzVgpcHhx1fnpWPaPgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe3AiO1139w1RgDEircAx3LO6PY%2FbAtXhjXiNpd%2BW9Erl5lE81BiMpfofCXjMx2wv%2B6zrsz%2FE7oWI5jMfdQ2zvPbmoQc4N4mluJ2ISVuhp9LwILgULlhzblLel3Chi9KBznTyn0PqG%2BQQR%2BmghRjT8iEMIn5ut%2Bsp7nq%2F7lNP0zpgmP6IxtYdgfzdWmnMJ65wHtACZTzuj2A108T5Q0i2ymAkL4k3u597vSuwtR3IQhwdZk%2F32bIrAzhN53H3CGkNMUoQx26mZ1OZ4myg0kn%2FBKSUekpylfoNd%2Bz0geltwPnAH4NJ%2BaE3eSgDkGX2XSaThOvaHChAjbcljEdci6VSdinP369goGVb2Z3p1%2F0b%2BNe2B32wTDhTQ6E1M3B3WIXpK%2FOPiHjY6o%2BwWWsxQDcqZpdncM1%2FXqcXxkykA8SVp%2FbAiKFHtu2ql0LbYiFPV%2FaH4wCRk2nrNcDP85J8kZxl3F5AUwrBwkLGLIZIbwyqP71waqw84v7CxZY85MgtF36ZddR6RSSUYRj4hPD%2FxQIQGU3mwV7TpPMOEqvwBP%2F4NkwzjcH%2F%2BENUkjqJA52qYGfAbpwHeT8J5SEPbLthiTxacTpAbd80CdOiv2PGwXNn7stLlG7rR3FeaO3vTO0kVwo54SpT1sqBe6AKG%2BMNn90skGOqUB%2FfDHr8qgqccwJgg5CmI6WCTXalbTnnvvvY5CVVLSthuqkZ9FCJwmu3DShEcA6mZAinl4vgpotoLIGJpKlSeT%2FX0oMwyjvCK4eh4XfDt7zrt8xutsf14nfC2l%2B5BBQwim%2BTNDPxea6Dy7Lzn%2FkjA%2FOJ1hDkTKZYNbIWSuwiItM9XiED1o7qbFH4ZoSY8Pa%2Fg0LFlyHolS9qGqPFkLBphw4hyz%2BkvO&X-Amz-Signature=850933e155935c178f7ae328c6cb7b76c10462f72ec58d09efead12edce40f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

