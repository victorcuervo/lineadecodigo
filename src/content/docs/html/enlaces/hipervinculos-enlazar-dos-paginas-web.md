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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSTXATM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbIfti4vLY945Pvi7tZq5dq8SEmnBQeXSyY6qmbu8aHAiEAyFy1WxHJ70ozqzegpxZK1BIe6UBYMyeeKr2OJdXXhn4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm8jKBaUcB0qS%2FuiCrcA%2FtDZ9a7xIB5KScGyo%2BJN3h6fAJVANRy%2Be3dWPtu5rJ5BQKtJknA6BsBXUUfmTovHwMiadn9XqMnEq5MHyfuKwBr4xbt6VZ6zVJ8LS3Q0IgxIG4xjOD4U8GO3balNxjQ6P2ENAfvwn5dcuE3t6UK1ub2xbFa4oRD4qK6w%2FnKb92MzwxAqKQWDtnZ%2BtRq0L5YcxL%2F%2BIZ1%2FASuofGD4GHpme0ojV1Q7XotOOb9mXruwN7byCC5hhg15clJPO%2BzeywMWTkw4%2BzITGgVc1QIlR1TNle5jI%2B9a8rr7qRha7Fk04FP5cq0PoHLS8sAt58rI9UuZgWiJNtcSGqezVjHrNE1YoyaTNJj4ut3tSjiqDm6lyM%2BfvfyQZ9KTKH4XxjrpWvq7ZwSWRZ4eM5Y00BDld9fo8QUELLadvVdI5NmKfqHN5i%2FMcVLnoQ1LBEQrZDoDuai%2Fz7fxsAcRuV06ckQHFnore4%2FE6Q3vDwnkx1D9hJJcaBJUfgivC7yiPjGuD40Stf7fWycC7zxjjUC0dXKmyOgHw6AbX3hoQA5aFZ8zlp826cqV2Ptzue9Aw%2BRF8VoWs79p5HzcDy3P0vBeOMzWKeUnpx5SU4ieVhiBbsgPZ6wVuLbo8jHZHlTPxwW4WIoMKmZ1ckGOqUBcpVHT3OlhyBCFLSXvl0dsbQe0Ix4ZTFRk6sn%2B4AlOuNKizCQqOi4VQyRrUoKkpk1EI1LZSRHwMycBbZLS7%2BLsA6TOmrMNPAkiaxomzmuMMJrOPsMO37l8ywoqU%2B0bU5%2F3r4%2BHxKkp5bg%2FDgYRjVDq8QYmTYGOTZzd84QRTv6IpkvLekyyaQmS6eZAsqqzFG%2B9bn0wV1IwczOTodafN4V7K5DBV4H&X-Amz-Signature=7c30543c827d4d61907aeb6afa03fb429f3d949f737938c718812c05cb3e8ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

