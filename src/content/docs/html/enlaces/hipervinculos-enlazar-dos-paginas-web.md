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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QXG2G2N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7ro95XF9Y16WGMHEDBXANB2k9ILZCh3Y1qucIw%2B4fwIgQaqaqsAnz5PFUjL68%2BhM%2FLX1HjzvZ54kQBRad4wckIoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcS1ECQzxoTMJjN5CrcA03B17YynkplGZ7mc3cSvzei3%2BJV0e%2FlQOcAS0xrCnroHjMh7i%2BS83o0o2e6ztsBUBoNP9kTocQOYhTGX4Xe9VqUESpdf6Bb%2BZueu9w%2Bb%2Bx%2BdfIc2oLreLJZ%2B204mfPTxMFCx8afdxlTUDd2u0bHutB7%2BZR2M1yDpGWTWT0pxagQ59TT6Nsnhwzu4NLlhIhUUBP4lkOD0R%2Fefp%2FjLk7Gg0ONTSqO3vQjy9iREUvNMiUtKGxKPZu5%2BGfHus4judL4taXmj8sgrnl4CmhNkF%2B88tjci6fysOfSJPQvE3PtpxswJyRg%2BZ86OnzsqrEAcn6QNPF3ikj2YGFQ9IcJNKcpx7I%2B%2BAOrEJA7uzQIzlgDjUIV7kGBgfeChyvir7IXe%2BMLT3gw%2FdWlM4sn3bG3maNlfwf1w5hfwQs4d6srVVfJMzEisRgiphV4oxbWg4Ww3gRhRZ0J6hBCz9S%2Fq1a%2BhRpTC1WZ4%2B6qqgJZ7HFgF%2FRylcQ3Bl2PrAvF%2F1adfBLAe13SiTgEvB43tjUzRt8dUWATk%2B6Gwur7w9LpyAsYnDeHzuR4FYe2fcE9DIIpJCWTx35JErXL1DSO3oLJkOApkFZFOUdMytRwbT2dmNDEsvhJwnuZS7D6pzl5Rh1zVphvMMCG3MkGOqUB%2FkvXtWfIsAkxYDAxmQ2phXIRzt7knpH3L8jWYet5KsMZ6rsOuxeGR5anlOfVwb8dX08NzfuWASl0CvilgbrRCRPaoNlO55Kia2XY7%2FILgcjZE0gb4%2BAdZh86d9F5%2BvUHSsw%2FDtIuYU1h5kUiyTkdj%2BOqrxObpVWIMX7UAjsgez%2FFlKVckJYWa8hnv7NEwV1BUZyTZVaOTt83VLPhov2xDne2ZWrm&X-Amz-Signature=20d73aef563f6aa9a271238ac366770debdfc84fdcbbefcdbb23afbd37619377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

