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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6TQTIVY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPumDz%2B%2B70ufYCepJoHUU93j255lSHu5kcqYZ2AbgDTwIhAIKe%2F68Bj6CyGOJshxm4wgXTwcjGqHx0VaNeVf6yAj98Kv8DCHUQABoMNjM3NDIzMTgzODA1IgwFd%2BViEKBHRsi5nGwq3AMOLm8eomQnnHbSG4ZvLAmq8weljCsbMrGh5pfS%2B%2F4WUbjg2l3H8IFJ%2B40utXVCCNARDNfXdDPxJQ5yYgzfajjS8oHwDCyOTvr2noaEC9rYLNGw8KOTVi1IaEUgL2R3jyWopHMlD65ukhidqNI4vD0pWBK5Al0e8PZDmn%2Fka4i0wPYTm%2Fc3wJXyZRyW%2FkAO3ykdual9lPMW%2FW%2Fwfe%2BQCO7LNDbd%2Fqjc44e1MyNcsmdIlR%2B4QNSuvD4k9JU4i44aLSB4taOBoivn5gXc5LKv%2F4%2Bv39FHN1cVjPacRa31D4oaxJeLDZUnUmBunRsa28P6dN2BfyW7IYpJgFPTb2BQmjw9uiAm8lIytVodxoblgHZ%2F504%2BKTgvR6YbdAMTVJAJwQ5bzh%2FlR3DKuKSRf%2B1E43KkSilckEeLIpYe9qJhu3by5CkiuUKJz4g2b5TQgZUpiX3Kl9hlY5QG%2F7o4SI4Uoo73hHAO2nUsMGadxjBo02pZ5rT7v901IGHmAeYiMUNqfJXVd1JSWdIABfDMjUoOfUhscfYgXAURsgfcndIGJWF0H2MIz0TsrRfjmvLqkd00iT0mLLlXIVTa9SUG75PqQ864NrbdOAgdZhhpmgCvWIPdF7HVv%2BsRnLRXqt0YfDDlptDJBjqkAYVj9c80ncHC1GUZFLd8ecYPmMO1oEr3cA8GT5%2Bi48981%2BtBBcqpmnNFlSPTlpqMFZ7gBwATatsZlXLtsLrDEZEE91mIChHqQV648Ssicw5fXAfKmJX8zaNFORZy9kwVuYKeRgnczPNu%2ByolKZtDsG9DhjTGwCn0lZzT4FoY%2F%2Fc4vBbs%2BhrSQOIVhOYy7XIFByZ82l8TIiqW4fd3UFwNFy%2FXTvVa&X-Amz-Signature=018c6a293f882c7eee684068353ad47bd5008842963aa89801ddbe7120502e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

