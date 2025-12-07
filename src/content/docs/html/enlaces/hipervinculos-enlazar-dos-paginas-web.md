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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MXTAF3N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaRpmP9bFFQ4uEaE4610VWRBS3C%2BRoUo6oF9SCyNiZ0gIgR70Cy5EmSnerksMebi95iRNGnJYXQDbfZ8o%2FLgVVPhEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zPMj2ewlCrSyTGCrcA7m2qF%2FWpduUEz9ak80EpTLEXNMEmmjsEWvW1BvP6ggI6S7VeMHjvbihfYyvODTmyccg9MsWb38COGG9BYPa5rnMliff3S5sKf2GDFw57JJzVJ5%2BDf9IyqXLrhzux9CL3%2FizQi3lvS691t7LrYvs7zqOixvTSLUxM%2FiuXuFLqeOfyZfgGyMT%2BZoFOufxFc1JwAjVg%2BlO0kJjCU8tQMUp4zjzCXQ1xzrMAGNyJrQ5F%2FrqdrDgMIdwXjtiKDXaEXNi2Z%2BlMYjH%2Bcy0tnhsZFBcS44bmTGAbk8jnqs4ZxzS7VIVDxFEL7a0kmQTYP47eLkRYc%2FpE28cY4X59mch7oiD24vfY4FPYgiku5GgPkRxQIbMEBsRzjn3SX9kovZJayds2axPllIB2F6wJn4MLVKAWIcmkzN6lsezQ3hXSvhRCmbVaxv2ExTML8%2BAHl2Q4U%2BjNP011YKiQWJFOjpYyy7nrrSabBInsBuslBZ6YFuWw8gAAzQV25LQ%2BFx8Yr0v9yGUrEy28FokfKvxHZZJ4axbiHR5RLf2Xp2xLpjYFZ8XmDfo80Bp80CD6wwYuxcDdnCABnpGAqoOEi7u6INMmNR%2Fwc18rBbrYfzYrtujpeniamXKfY4y6WyzKySHxxj9MLD%2B0skGOqUBGMfRLSzvX54tBkCgGplHZEeZcEr5THDvFFCCEZ%2FgRcVFuamINvvmV3VIVD6cWhhLxy3%2Fo15AJ%2BETX7UvHX91KcFWUtMIzN78Tux0SdwAWbNEj9zS2Nt2z%2FePYegT3%2FMUM%2BnhPzm9LhwSTLkZOwQOuJ2bQd%2BB2umPbLC4NnksReTwPvodr%2F4jWrqyPQTZNlNzsiRofiVjI313AvuXFmao3ro%2B%2BCB5&X-Amz-Signature=6f41724960b2b4a2c7b4db8f37a488a633179aea2c71de9227d64b4c8c2e6059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

