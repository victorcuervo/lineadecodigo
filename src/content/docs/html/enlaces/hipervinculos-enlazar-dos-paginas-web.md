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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4UY2HHX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaLhS3Tbk9%2F3C8vNsE0nTTs%2BaqfojTcYE0TwOOCpgTeAIgVI7T9qoJmOcey8%2FfoaUzaPqKP1I57HiK%2FKoNUmg5EXQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPR9FKJSqAhrNMHOSrcA9j9VQ6On8IwC9uXssu7KGoq98Ud0t%2F6wnLoV1PKKELws6I3UCfUffvQ5ViyeZlHj45yIVl0XiP57rQKGYsHoJB87kNjMUbwNl6NQKJ7rd8iVxTfQo7Nr0ZKpLlREKn3KQKSr8UG2DWwQPh8WW2xhmJOElAuIPtjnBHo1c100MAsGFqH4e0K1%2FQB2ph8%2BwfK2YQe30O8lK2Sq4iXKfoZLYYx3wP0UCbBGCCfIJu%2FgDDFsjkp3U%2FlsCBmmnF%2F%2FcQYwLaqeTTJOGIhovm7E335vK%2BNMgLZzG1Kv%2FUds5SPOQ%2FK%2F6Y7U0OGMWwNl2gTjmOBhqEzLuOG3GIMgEgclqgPLr2bBUMKAyUSx80U7nuDSnAAIrMyg8o1Q3xfxnjb6jy1A6FKCecYCXEFMDwytkhvsnYUm8KPzdNTCXfETTVuzZTkEOUxaf7UagfGshFXcxp9nrODSI5NlYty6C64K%2BMy1BI5I37I66iXe55oKVEDnp2xYwwYJ2Bzq5bR5Xw%2Fb8JwnWjQqKUJ47EGXMG25dEOSyMwbvYyKshw1s6hNSS1zadMMrYOA5T9xKVa9DK6yQ4kSNA2Z2xcVUCKij4NHNP8rLoNikYxtExNanNpeEbSn%2FLfYtpytpO2Y0JpWdEGMLP02skGOqUBOaSqLL1hXcNYIYY9%2BJNU9TMXZlSlol%2BhkV3FEl3DMKr8M3qiLvaJV36JwYdWoknQon4q1axin79QM5xM0O84wGFECrVsEMS%2BHtXwZI2AvIp01HBoyqgJ1I4ruMv2RbuU9cqnPI2ZLQnhwVNBEkHT%2B%2FoldoHonVcuNCOoU5i9ub4V7%2BaVM92wEv7Z%2FXXQUw2D8rkaVWKdJ%2BLK2YIb4O5JxZbnqPWp&X-Amz-Signature=296399880196adcdfa38762920117493279acf3e2fdeb2afe4a9d163d9d09a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

