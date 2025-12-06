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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNUII5I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOX0%2FdsNSwPgZ0YQRgX1%2FOf42Ts02T66uGMXuxG8D0RAIhAIiAionWXy09qqsVQA6U%2FrxEO8NEs04tipFSZfatHSgSKv8DCHoQABoMNjM3NDIzMTgzODA1Igw9DK9BxXKO2WATSVYq3ANIBK535clOsq9BvhFawTg%2BMDmfngmBXLzpGP6fSrTKZTkCxIs%2B8X2b0Wrud0sJCf8bfAQoz1QbEYxPQL5ToUy%2B2GH7Eiihmk4%2FMzlqVLbzA6m55rBHl5k56rKFCm%2B7i%2F3UVBfpbiGaz0oC7CVuXnhiWNyM0YA4IcQZy%2FnROAjc75L6nymuUD4K7PqqSav22fgEjCvYfmdBlYPasWMxe%2BulHgEdlaVhFy5SYEUZOLfQ3NcR%2FIo%2FSLMM5AxRr%2FCLa9B1qPUr1LUV65nSTHK0Zc2%2FNUF%2BD1FclF2Ir8tZMcf7RxstZWzgZYGw8IY1Szmjh73%2BkOMcv7zEcKugFUsZ5XvZXil4wPE3VKQsZNBfhf0kjEqBTDq4tULFnnJ124LgCYcEJkUHb46fPW5g2rojI1dALBghA4Zo2fbbMOrzNYX8HOt1qu0neIYh12G1FdvhsrWdLlFncR5HLYwSokqsZRDHVZs1SHArQr81mx5IF05v4%2FLjnz0ndKo1maz4m%2BiW%2BrF%2BvogiK26SwpWSC5GTpBqJOhtyeJvZjV8LyrPk73Aukbz8mrzW0YoNWdYKi%2BB1b3tAEetLPAyB6qycH4PAveiay6%2BL0%2B1QifT1MdZWBp0%2Fi7mfXb2sPYAiHisd8DCyxNHJBjqkAbjHuqkpBo3jhGtJQnwa30qri2Ks3hPctIhnMxfZUIXRtlhKnUo%2B0NH9%2FduzG3akqlh0ueOrVzB1nKYiuyvI9bH8uR%2Fci%2Bul897cViP3G8osFgYsQWvQUNxIJQ%2Fpkw%2FFuJbypB34rTErUd8An7IZqysOb13zj7UTtx0CfQjsfKc4gxklgBDK3cVJ%2ByMf7Dkc6yeZxce7hQYMe4FvS%2FYe%2FgdBDQOD&X-Amz-Signature=7f7ddb4f082e6f8fbf53fbaf6bff9be68427c3b1eb011990678ea8ce04f3b865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

