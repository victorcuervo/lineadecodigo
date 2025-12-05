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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SA3DPNZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyQHn17arGPztvfHVV4DMSy%2BJhomGpjAaUvOGGeWqQoQIgA1o9IwCSrGY1nv5dspRRvLJtizrwDo3oKhnWATAFN2wq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLNd%2FRT89nAwhikRkyrcA6Rbijw4kK197e2WygLxkzuG8yS2cdYkQ8GxQ4CNj8gUbsoOko3sX%2FhgYsCQv053jiw%2BFEkNlFQvJGWwOuW%2B9zYLhlGWAw7P9IHCpaN6y0yFOU4ax23g6I%2FClG6gInuExCqCSvu%2BtU%2FFQoRVCIY9TGGA9xlEJc%2FAe8o%2F4QZb%2FRSABzzz1ffj8gha758GeyXagLCjQFLcPBsDA0LConinmUVwqewY4EHKjAmXr8xB6fh8htU54eSKKlOWGz8By6MPWzK%2FMZ4C%2Bvze%2BywM3fEfUCpPdcEohaDbQzW7YSU2Sk7fPuFuq2MpOBzHGOjynqzSiEKZV2MEBBEQ1BGMGKLvbRJKBfUBLas0UmpoPx%2Fk5GUSwZFC%2FlLEJrmpQn4keSN5rrX5Git35394HeXyyx7X3ebKjh8d%2Bnieex%2B7Od0tmcZG6lRq1GjAsSjBhDmqX74cNBjp%2FHGbLvjf6d%2FhR7yYpCYNv%2F9FYbYYv%2F4FQ6U5UU4yGSGpVYSPH%2B41mT7TM672ggqt5%2FE3bEmPwMEj3NNDDQyXoHMq2Ao6XSlkWhvFDATq%2B33Z6A7DfbDf7Aj9Se9hl1TWgXgAvqsZUm52LTOnlBRpZkqFPPb7hDYSgBF5kmkoeISv3Qu7ziMMKQvBMKKazckGOqUBPf3rn8VdpgAp1jJ%2FRpyOIYkKLO357eSGF2kGfb7bY31dX7Eg%2B9Z33YVOwsW003PFKyChsrJfZEPe3mAPiyJovgDyVkyxQ7UYaLLm8e9eUC8YOcaydXE3qlZ58Nc1ApzNA1MdFCbRbasG01ovFeVSoUnbW79C%2BNR0SjfZJkQnRebmpVOZV8ZrRrJAmdjKSrenx7vF%2Bsq8zRvzMv%2B0uJSu0epVBOTi&X-Amz-Signature=e332ea3fee203895b274e63a113ea2ae5b8e3fedd93c926f99c596b3921914b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

