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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44R3YPM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZtdOecl1IIpWYgUCiyr8pHs7wAaa0DLsbGwd%2FxGDUvAiEA93QULMIv2xXlMo53aKkDoyKvb6awvDdCHsRMgSwOmDMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCpQNNPN9MRJ2ZZNlCrcAzC6rpc0nZCwimKmRrwcD3NlZE5AJ%2BNNRKXHTpRrn6xVSAFhOldafu9Vb93SWHYe6FqH9VBYv4J%2FgG9p8vpGAUXX9OyhxP2UXiOrSHl6UUvaJGySu7yQGWpgRjzSviN0KwR5RNsG5DHOrbf30CVQV7PiSrtWm3CG5ei8ugYBlB3pruV3LlrjFpGtTRXDJzuLKL8TpN2SjsFJRFCo64blpzXvCjSDZeSTVt2tJH8QCq1xqjbQnV9h%2BvFg8C3GvbmwclZbROS35xUhdWmpMWKZnlaQ94hMp%2FyEdF6kYsuRN2XRSbA9SymzfgdhAg9SMuqiS%2B93K9VXaJjhQxpUNodkieX%2FnzbHeVtNOToIHZy8dnSOhvsTRGU5nN6wmkoFD6%2FhwCFTTCWUu%2B2ZlraqkInY90QzWsyvSbwHStD4MpSuW2vI1Fb7nAKMMTvKs9xAOhfhmhB5sKmXbCRznx5wZ4xQtalgc16JMSxksDrANTQ6Qq%2FPQF4AYs1XluOvADXIMOQm1IW2DwES2Zj80nnKN6yslrbYoFXpUhlJDSLu%2Bk%2BxzctB%2Fxzf2lGHGnlCXLtY4opmFl0IoRV8n0ZEhc91YKLlmIlh8VeWZ7EvqoSY%2Fgz6nWa8va6edmHUK6WQgXL%2FMPn0y8kGOqUB5K9ITmQtJEaWbRJ6YUUeRwvThuvGzm6LU8Z%2FD0Dvs4YOFTHDfNQum866GJoybP8E4Y%2B11frVYQzHnqY6Qn5UgWWc%2BNlZY9KCxGSFUWzTvIh8GFJfjRzyFCB%2B9FxLkYyrYHJYbGztBtxmDe8XyohHF5QHwSeDoTgMFx4Evrzj9WsF%2F3Zvdz7wLN7bF%2BFdC%2Flrnosb1gTGJNHgXmwOCvyiRQSG1bX6&X-Amz-Signature=f9a8784f8221d60bdade6a4e746802cbf0396030fc5c73c3aef698fddda3a6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

