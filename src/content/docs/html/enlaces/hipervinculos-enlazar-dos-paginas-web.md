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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YGKBBUD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtE3Aefecu27PTa3U30r2ZFsHoEcbyPZf3NFr4ReFVjQIgK%2FZol3VZ4A0LNg91unbm1Qov1d3XDwubacRmDFkSbgAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAVXhMVB%2BkSk3XoxCrcA6O9%2Fs3cWN4byh%2BHb78LSrJDmMyvN0h5UHKi9e54Uj%2BStTFl%2B5agKfdSXgMn4Kc6W%2BBr5xCO9U%2F42Hjx4lJLFbWJ9nxpF4tCmQilJVez36Jw4iBTbOgWbPK%2Bx%2FloUuvXNe2k4m%2FDf7Rdglj%2FD5zdT35z4bJaSwBRMxRbWWgkANO9f68xSw%2BWINdwZytb2g%2Fe%2BXJZvw6WSUFodF2rcUN0b1J6fVjYo%2FF6j543niKLgR3uUEwEYyVPNWLnx9H6MiE8%2BQNo0BRuyluB3CSJU5%2FLetfCjXrNYGX4Y3i3ODFgEdg9Gu0Fbu2OpSpeLZ0sxE5ss8D3wyGSIvFtU3xlFePla7jeZMKO3ATKX51XCVSCOqICRsOYD2YUecuDrHSAHhWCDMXSwZ6POdxe5DxhE%2BS%2FBLiuns7VkbCxUJAAAtvcdMWaw%2Bew5mx7%2BQ1uCSOxy%2BfFyoGqUmdfTMuxKt9WBAjMztor8%2BaOvqD15a6l5dUsTkgJkDIdskGVH8118VaDLcTwOLo0tGwl7H6tyBrMBq4M%2BzVe0S1IJTomQmTABzPKhl7xOQnZfFhQuVkZI7BvH1uNDuAbv25qEKstY256mgL0LKf5rnd3sYAQ1tet9Fwv0F%2BHJLzryf%2BKmhDJ8hDFMIaf1MkGOqUBVUJK4Vh4rToxL5uavg6xSxTra8r3qWv7uaNNT1wn7GCmuvyQM0TSZbl9BYFRe3dPwya6%2FTyQEa2U9El%2FF2a7gLcJghWxW9sQwxNnguKQnm1m6BGtHfPoaD6lJrkBjQ4GnZKHUqNbdeJxabN88s7QCdnwHlpi%2F6uR3%2FA3p1imNqj4KUkvdDD28yoAsp9rYmze8D6YcEI5Hzz1iZBln%2BxfxBax%2FZlw&X-Amz-Signature=d2164e3cb9d5d46f48fd33f96ba63f04235546eeba4402c6c6f87bd833657995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

