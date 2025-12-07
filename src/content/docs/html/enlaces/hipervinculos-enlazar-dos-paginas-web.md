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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666NIACXB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCROJjrsMuit9nUKkYspqaGA9Tfx4utNPQSyt8eg4tUoQIgAQYrQcFfQe78LlgU44RU69zxSF2%2FMCkqWhEIo9dY8tQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOAfdcfATAgWny76ircA5to42yYWJOI%2B7DdhG1md%2FA6R1lj7C%2FUfFzllVKnhUn6MAyOARzLCSc1y167mG13mt7sN%2Bi6bvlkUYz9xpdW5s73nip%2FWvUsfwxQYg5jJ8%2FlDBQb3jHTKhArAe2%2Bqet5kcQB9TvXVdv6TuyT8MDI%2BXQW1Mp5fPNGPaS85pgTLB66sfhqyONYJJQoPPvK78Utoh6HsVy38ZHqt0YT3HOHOpMhXtybKRI26od4gnB6YPqdYRYSXnCNNCV2SZ0NuKdKwr6iqaU1eRufq5lJrS3w3ySNT7vR9bwkuv7ERIi1Jfy7hIsw0Qj8KyL7FCphvk6g9dG82V8LDTXpo5pIWr2OwK7cpCafbQpbzFane6q6FS8wTg5eLSo47Vq5YN9qBS4qH%2FKjblBV682ssu0wWxL6%2FZCMYk8txBOXkhpZDofjQ8lobC0BhPCeugnZkNDn1Lkx3SriSsC2bk0is7DfMT%2BF%2BgzPRunqfZ0lMIpBE%2Bc1RBYcsoKvJjvsgefAXdQAAY43wgfgaumpufi6%2F1BtChfur9A5gPUj7KfLarave6zs6lwtCggSDkMiva8XlT5LumoRlPgf92%2FmLKuikqv%2BU9k4gMTxHyV27NeP%2FIEsrkZgWavmweFOQmMZ4MYB1%2FOsMP%2Bo18kGOqUBrrWyW0cRD4iMZYBpEhLNri%2FPd5CfHWYiAE%2FL%2BMJhNNE69vzqE25qq1r92OmWvFo8q6iV6Gfk1V0zFB3d4V8tjw%2Biew0Hp3ugkzZH9EjWljxJx24iNWPOF2kvXWrufRaZjNt%2B1gy7dz3pjWZZIzJfFnkJFOVR3yt47fcSSAQMCrDy%2BZk%2FJhgn%2FcZxL%2Fw8K90WV2jOxKnKOIIIXEugq6nHrHK%2BNlb%2B&X-Amz-Signature=72acc1d0bb653510439f4b5fcbe92ebb00984992510616f0ed76c43c7d3fa7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

