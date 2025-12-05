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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YCDTFG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSsfYOsI2lOTglMgRClEBekD1BdJDY5A%2BDnLQeUUydVAiBI9%2F0%2BZjgCmI6q5qk0sTeaqUAf3%2BsTVwE3NNi1sN2vdSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMeXCXy7%2Fk8bPnFp%2FMKtwDU2cDZuRRW%2FKeZsnJG36U8PE%2F%2FYzPyt79s7vFTyETQZvCxvtRDnoQ5ViCheJyK8a%2F%2FdLwQJ2ML%2BROE8N8aiE6jc2klPJ%2F8l5K3XSII9crNzIftkFZYsyzkihLlqcPhqhqu6Mc4wEN9UnLeawXFRn%2FA0GjlWfQLCtov4SIkou3weQOzaWNI6lvdHk0hRXJUSrriQ5L2SebpRa%2B05TksLQBkQTViwpBiq8JKLXTrREJWOUeT4%2FnnTiBwOPwP9tHXy5u6bZKpkgmlNeDfJxnlaM6LfqKEtHJpgBuQ%2BJt9lUG0hyxsSV8w2O7ICkXOfyC5olqLjD2vOVq1Q6uKZaXevFyFlfh%2FRT%2FxVlqimk%2FYx8jjy2ZkoOI3mbf2THSeNgOzUHrZZUTxyAYGdH1yZ4htew6lZ64SKzIiDX01hEvpVo1eWU3b9%2Frgc1I3f87P07k4OZncqDQfIjIxzIpVsHQmYAMMHJuR7Ddk6RdnpkdBvAOkK5KtSODd3xlMTvFh4ximXjNY1S3agr9jrKdwsZJqxgOUpPKgMfedzFCFiwdOXzdQCAkSkfhfratEPQbyQ0fMgjh17vfOj%2B3NlLOFzOt8OiYaiDBXRF64X7COtfFp791enOG%2FOGaL3EVbReGVIUwxKzJyQY6pgGTX4IX9iYZ42zKjp6nZ68n6zfId5tn0%2FG6wfDmRXxjYMviQ0K9E6XiDDbAGacQBmRYANThrtM00MzrSgvh%2BkLSrfWHE9LcmxbdZ8auTyR0dN8P5dN22Pq6uiRXygUmURhBUJLB2WDzwLJZtRmPiNJRE7y2bzOeAfikfhvFpUwwoUJt1Ag6oSClhT6vctKPmh7CJ5gNUnOysn3fXdAHvZWIrn9xosvc&X-Amz-Signature=2eaf6f3dcc0209929ed7173988ba002b3b192621b42eddeebc3a5f253fcaf423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

