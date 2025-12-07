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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYV27667%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPDFrsTJnjns%2FluufA0S97AqXZres2garU0o2xWzSg6AIgLreAury0Zkf64ySj4J105PnLVl21RyU8vjhO11vuyEoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FYc4c%2FBBbLJwB%2ByircA2gRF6nv3fi823wuFygSDvMqUGgnT0oAGv%2FnRw%2FPb4o3ThniCGdkA1N7kRTwlIv88qLzNnEQ9heAe1OlaQTsNIqOavqQcI5ReCDfp5LhT5sDac4AfumrXU0X8PQbWRA%2B78cDUUHQL%2FV%2Bv6Ipu2n3e%2Ff3V2Kms7KfFpufnijlDLydTFV14Lvs9%2BHPlXkYz5KSH7YaB%2BEIxK8ZbcEsaMZskcaSvgjvv4hgNn4Th93MPLAU6skCiuF%2BpVFJGJ%2Femo1f5uAie0oH9ST7wsFVeYFtEfvCQagvYmdKN0XTWimmK9qQkPKIicq0kzE0I2JFwsPmKTAlMiBWr7DofGD%2FnZeUreucUT%2FVkUAFOAzGA2ufS4A1Q3%2FNqeSlFeHjwXjOw2rylQSyXBgrKMFuZM7EeHrYrFbg%2B9AWImZB8yujrf9OHt0AtBV63xikRDz6%2FIfZ3mCpsNbFPaNc1oRxTmnTAFrdUIy5wIBmk7Xb3pWZwRnmDYe99quKzqu3g3qN0hqhF62sXMqclcTwxqxWnBDQ1cjgugGcUVuB0mL33Qy1WWWuD2Fm0Cq6AxK78lnEswu6ge2R%2BxvJPuXXwFLOMg7XKgDmcjNiWuDUmLPviT18xjtq8uWHdhUJepW%2BLS38SXPXMIaf1MkGOqUB4I5KIClSNkuToC%2FbNc2DsERoVbKxV9bf09dDvt9nrTL2WPR%2BOo1Hgaqyfx9aOYLSlrQNc56cQigNebcMgitRxnSIK%2B2vNh7qnvQeQxkbfQxLiwXSqg0yr8ATSRyur0UdkLNXfRdNGQ08jZ8H6mLujfhJ8DRjF%2FUJXmCpLXMX0BZwkHv0vq2UxkmrIPZjS%2Fni5a1surIur3t1gIGi45dvotFsovCH&X-Amz-Signature=d73e71acbe28fd4379666b99ca0c71b6ee4dd5ef30ba1f0a2b3a60b3dee8c171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

