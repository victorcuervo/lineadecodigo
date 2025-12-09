---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSK7KB47%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOGbRBDYb%2BKovBYAIclRskhVLN4O0k%2FXHxYg84p8UcnAiB1H6edqy7DeOuCIwWRi%2FylHwO9OMbkpYZ27hQ3xA1WcSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIqPRw3iYYTWOkFpyKtwDSqLxSlQvTSXm%2Fktj3FyqTS4uQZDdZbHsZp3w03GoLGcJvUwWzPpFeZuyjcoOgllg9qypkIy7lCk0cJF%2FMRa4riNbN6XZlMg3sXNEE30PNiPhq0cGkQInrlm52X0DuRhMSTbm%2FGkSCF0KA9B%2BeGgSUPiPtkJ9VGm3qA4vL%2FTGSbqj9bOobltujXH%2Bbbj%2F5L0Vj1WuD8xuIVQ2K23Wl1Oa11vo8n41q6obJ6OWqt68mN%2B4CGkZJPKKccm4rKykvBPeNEDNWBYLNlC7y9XRXsRJmLIAzSjVMm%2BCPByi2O5fVtcgpMhbTHvCRFSOPd%2B533aM9z21xXd3Em7oP6xi6jDp7WtBXP0e0pN4VFHNIQVlV4KUJUCUAThGCx7RyI73vWK%2FtN07zlfHmVmr%2BXJYIk%2FoW7%2BuWV1nuRFxx9MPOm8FbIDclCcR9JUYj3%2F4SjtqiuXF9fhpbWZSTmnnwP8XCGMeG%2Bo5fMcEL3dSwNKom3Vtv8bCA2mfBvtKIqpYOW4pJYjsOdqxj1umo%2FyAygTEJr6KuZQWy9GsuqNylxTypf35RhZG5N1qNIl2b8zmH3Uv9Fdr4jtwTFAa8b6ih2VymMmPWweoWs3ntZr%2FTGidH9KsbvztizKlxv%2Fh0p%2ByKaMwlJjhyQY6pgFlBAbXkmMZaUsSgOUV5vtQ950G3yVHkziTv7ZPrAz9h8RF1c6MqmyU1nLbPxu2t9PrBNRnmudPjgG8%2BiFsiPZThWrtLbzaU2ohsBDsYQ7ziFuNAB6v%2FjQdrSt5rTfWg3U1aNWEEpDsqzilMyev1puwCPF0wutye05lD935r%2F%2BNYDEV60J2Y6lnTy1FHHJnEicesgtRw933DRQ4ikqWvdByfCzjir1%2F&X-Amz-Signature=ccc49047ac8341d728962618717643e0cd197ed992461c2390bdf95914c44b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

