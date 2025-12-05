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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQSSJAD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvu3Osb1V6%2F7eMO5NuZaZq3eGHUgvTAZKQC15JKIeGuAiEAhYlLqMcZnWDJ2zZ41gBu2lpGW%2FUw30Tr0N5oZ2fShLMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFKZIQ9HUabJDq180SrcA6jrkcqymV3uaJVkP3ORTbs2WQZ85SjBeteJkJW3XnM6iWg9gWAwueqA5QdamtmE7Oc4RRTAnOll6oCuCmVU%2FVFdXPio5lp5YUFXcJFUluOtdTqaKpslLe0zxTFzQpmwUFkMADpDlFXumVW%2FsmIjE0X9Nd0qpJElJobXSWa9NX28hYoQfGfKtLzf0F1I6usGEYvuBoGr%2FKAn9BKuf6WjQNm2a2t%2BlL1IlerjJFyMZb0PKlwgum3ci9Y7HZh5yPBt9QBuwqKCxZNBegE6HndkQfp%2BZwWy2X%2FQujxK1lgWFU7zq0%2FOz8InbbQ46Lm9FJrdrU8Ai1tss3qir5q5WNdvn6FWMGQTd8tqUrOXf0udi8DBqezH8o%2FxRNx6U2HB%2FwLON65xY%2F9PxriH%2BMIgw5a1QKLrECQheUanKPwvXxtWUYDDCzFJGTvSVpTAzy7B%2FhSiDruruRc%2BfymzV2SoB%2FVs%2BKHtcyVDcG8oE2JggSMHhXnMiLIA%2BVzu0DoXlKhXgsvBD3uG7BdItHX1%2BVF4SsYxmzrip5tmaDSFgHsKWPiUr8n5PlLFbjGhmGk5LZla3CI1l1gjcPEocHKZF6azYgwUVE9zCbCMZQ3HDcHazCnEamBkWXJzciFV7TAMjs%2FVMPumyckGOqUBDI49IGHngZQqy7B7RDZq%2BcaRsbChN58WUQfbndVxhF89bCt3UPZ%2Bd%2Bi5tuaWqw4gWDnSNDFgTRVJbrUAnY67a3%2FUc6Id35azMHBCnEYAdQ1zEnD0jLObQbLCNiI%2Bb2eiOz9Icl6dedPCtN1fYdxczJ8ekCpSZFkHtLFhy%2FF42M7ImaUt0SJMjIaX4uc%2BFS0%2BblTGCevrK1QWPz4Cszsg8FP4n%2BxW&X-Amz-Signature=a8bcd1b99422e7cfe0cb7784d03204d01ceb3f20d9b26ead4e0240825fa75d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

