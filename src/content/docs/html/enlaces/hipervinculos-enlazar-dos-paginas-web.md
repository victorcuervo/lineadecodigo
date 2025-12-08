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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCWGGE6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWQl4x9VfWJ03rHKauwPQpWggiyRYVFzWOaA%2FSxLgTsAiEA4AnKk09mDDSp829ZQX%2BIoBpgRoujuDp2AgAdBi3vMioqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNQZrFo504iCGzikCrcA4AkZHhLyq91Zq47lxC4y9iNe6OVkr6q3dRm0gRgko0B7QzmBnXH0wPPsQ4Hn786HlbHSKQMXxANPXukoo955mGaKWKCeACnOeQG%2FTrWMNsrbq9Nmpcl49Fdscu1W3saa8WNJ5UMi8G7%2B%2BPC86DRPCYX36QdxUkYqDl3GQ0uilOMW2%2BtfmnuTl55utvS3tt9hTFgdS0b0GLLMzo9om2I2J1ryJHi%2B%2FiuH4PF3DC2hPUGZ6%2FGl9ouAY2Wrl11OR3olrkHGbuF0S1QqcLWGb%2BxXfLVoy0b29TW%2Ba1tT4OSZBnvt9YvCMz4M1eM7cSZz2IkEuR6%2BEHGvFt8rgzG5leW1ELhKbg99yzLbiPWOnSsgKcCrJCzIFJ3gTHahcKBUeAhqvqw3h1y67Ecj4HCEbZhkH57CPUX9i99QLO01PbozONTPROX%2Bw9XzndsDB%2B8xR7PY4zpWUwzIoAPHUS0P76Bkpr7XXxm1GNT8xlog9SeUB4FUGp1KVD23X29KGgSa6rgM3Rjfh0Rc5n%2BFImDsmy09lDOMzifyUtG9N81V1WBYLtUh2mT6gzV6R%2Bxckht1UZlJhR6OyCVN39lrTrauVDRKoafGf%2FX2%2Fg0w1fcHKq17L%2B3JRAbK1Gpk3nKtrMYMP7B28kGOqUBnjB8sKz5HdI0gnHrqGqq0opvQuxOC7RE2pgQM6By0WwiG1PtoyplRKu%2BdjXbUDp84LLRaIf%2F0uBEMSw7grCdOtPr3IZlb56Tq37jjO9Kb4xXkJrmKTJT1XPHpr0hITBh4u29%2BW7l7vQsd3q3S2VB4PgP5M%2FC%2FwbUWIU6Ex0BZtGKt%2FfL%2FIrbWnYjX381%2BHI0MMQBbskH3Prwo44NvuQEbghMGJsc&X-Amz-Signature=2327bed411e31ff5efe7bab9858117e292b3f83615bc236329ae337276ea308b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

