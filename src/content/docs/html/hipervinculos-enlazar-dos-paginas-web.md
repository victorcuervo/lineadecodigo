---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH4A3QPR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD3wVoVsHz%2F1Hn7pfmxTOC%2FgbHYAhXwuj9t%2Fd0rjjMYjgIgRGSdVXfG5NEoR1U9%2B58UqhtXVHO5lXG0elNd0EyL8D8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDFxZdwQanWdhvunf4ircA4fFSgi1CqhL%2BK478ThZH4f4HP8%2Beu%2F3qsUrTv6pPjq%2BNYmn%2FBoYRsysXER8V%2BobFrOvr764WwCE49ruiQf2G1r9Kg7v9ZAMi0qKr%2FvNrLIy8BQs8DWYJZuJvgRlAryDS9iabv2cJ80XAdzN30CJ6%2B8T9EzyhgxFW5qnFVDtqvx19RTZFH2GeJapkd4RyGUVGuroi6WRrX%2B94MhzS5tcbKLV9wyRwLwaCQJGdJus21Usw7dDAErX%2BFnuGfsb8F5efWRb8cNiu98kDN0%2FxYHT6NpIj5LgzdyYHt6SYezwtYf%2Fvh6dWG8V%2Bu8KQ7TrTjXgfOSZi4GfB0N7V5OXoBlqWqYr498lmtTPjVduND0V%2Bhsp6aPUDgpmrB3wpH3%2B45LR39fgrgsQmKgc2E7ODFDjgqqDZ9wv0i6Do4YDSXJDcOcoMXZ1RikJbN6rRCdObAEl33lJ4nGD59WsHltK2uXDLuvzO67MQ5sc6riCLjDsfo%2FYsv0dmajgF0Yzn3PxOxzko24Pg0FP6ol4Q5DLG9X4eN4kxLtRKZhzx7LJEeBHWh0LoifCYNwlefP%2F9BOhiMnncydHUaU5zeSAJA%2F4xFpmsW7IV1aEBlnnxsraIHR1PhB%2BwA5ImB0E1SweMJm0MKe9wskGOqUBCHZqTI%2F%2FDwHzNlpRpsh%2F%2BcyuMyS3AcvB1ymenA3lAFyLHlVCjmRWeL7jd7ZgIiy6WMq7DlSmPi%2F6ekOqJCD4QwFWpkhMtrty8nMk1VZ%2B4NGIQUHqE0KC1%2F6aGnbZsMCMtphRmAu7bAVdrm8eT6LAQoG5s8u3rzNk%2BrpyLznqmq6ik1an9%2F7b2ocEhMhzmE6jNJTKVefL0s9cdqBuPBv2FUuhcv%2Fa&X-Amz-Signature=7db909d28451a551f94e009addd661fa666bd126709a8fd3a82a6f88cd964551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

