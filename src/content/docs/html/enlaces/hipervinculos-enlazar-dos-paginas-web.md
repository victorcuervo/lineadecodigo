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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ4OWLGG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE233DT0%2FW6lfDAz7dyP8rtqdi7lfIH03%2FboxTgkhvW%2FAiEA7l7FU7P0MtaL28JTVXVi6EK5Pa6Il4qmMpph2w3NvH4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLk%2Fu9KTb%2BJytmDakircAxkspPM6K78oaUzu70x2xspF3oBWTIj7yepbsfyOCCHbuiy2r7g6nEI6mboekjhd%2BSzVyQw0JvIoiybtXA3oQRp172foyZkai%2FJXsWhGElaoi3Z%2Fg0FxMiR5uL2ORyr%2FH8IAnXKLrIrF1uMh5B0%2FH5Y7pYuoCWnfujLhr4dSyMW6aUsB6JTArPaTkkgpog6BLT8qN7IPbG%2FcqbZA0MZJiIp%2BEKr8U43cfeTBITmu5AjdEwmUW92rPJRN3MojAkUzhJhPKtl1Y27Wy4S0ySXPoti8o3IDa8o20io1b5nidKqDsoxtIIqB8NBIdF186bio8791Fv6QX75jJbtNiQk3l8fAEFjKJrGapkC8%2B6EwhGHxhR44mNVJsAAkO8ZtJ6g9pkMakZrmSlZdJd6q2UKLmHRwasBQ1tcMRft5vxvnO9d8ij%2BWYdNMbGD0UHa6AbKIWQHnJLO69UGbmEwlLWP%2FdL5gfxNrZK4hcz9ChvMih4UzW8%2BHz4cJQq3PAoxV0EGEkOnFOa2XffrcetCXrNKWKT79AH1%2B6rUsUkhKxQX2DKaEmkIJFfGWmpuxV9ntNynRnVU4APms124Fa1mdKEloLbCuEMW2MP4dZbnnU3i1eJ8jPCmEZRsqbT3I2jJBMKHp3ckGOqUB1vkTn8O5v8JG3U%2FtckAz%2FU1212qXaz9nmx1MYTCbEdvOXgTqqjmCEnZ46xKWdOzldveiEYC2FO%2FmhYGgkH3GufZPouRzW5nfH9uAf5VUHQnQwyeh4KFBPrz%2ByB1pW9lIvZyGyTaR1LHXV5CpGyTw8rMJobOpN55cZ9NpOHgDwR1149TBS0IWATNwJ%2Fkmkk7xTwGFWxdKIQJXmLOeSF0AxX1imJiw&X-Amz-Signature=6f7da2feabbd01804380eb46d416883bf9d061ea660a1dd8d75ae3de6716ec0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

