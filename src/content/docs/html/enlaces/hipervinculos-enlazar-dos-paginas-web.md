---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKXO6MOM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T234227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU8V9WwJiYkYuARMzNjXsYIzEaYTNsRcrZ2IPcIWYwIgIgDUVCea2W%2BIQNzPNw2PDalx2KdR3VP8vCFGutSEVBkBYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoopXWe6fxicIyUoSrcAw6VdswvugnL8yJ93EBoXrK8h6HzCzjKQX2bUl%2BKxbpYC0AOkzICs3IYliI1ckas%2BwAZyJXhYDFFnCzu5E3sHew0rzkz5SXugacgr22Vaql%2B6NplDcuK58WAgboG5krKGVsnaGjK2voBPYPtzv4kbESRJ8cbpa9uMA%2Bs90YaBO1WCrEsSYdD3hLteqPo3KuXNqwwlDyHMrI%2F2gNHpXWXcorJgUkpaOCrfNq2FpmHVFfxtaUaaINe1GyO6pAnTzfq%2FPtw%2B10q%2FeMRZsAG6u7XWB52Gbl3oIjxvC9hbmtvzl46R7LtMEH46XsojZ%2F35sDrZPUmQQXPL0BTEb136ZgBU1aw%2FytTszBlji9sas%2BCQZO5r8DtaCVpsjGSTieQnJSA%2FLrks8wn%2Bc1jkynGXTAs6rW5473QPoGGrOttF9IjxU7nGQPwq%2Bp8GgAc4IdPA18ybVTy38x7Z5h2pGLgXLcct%2FErs3eL2QGXzFcQ1XRzXjiHH9YwKYWEAfHGtcSeRSGAoQA%2FMAym6Sn3uBq3zOuGKoJ6alNg3c%2BYgmHDbm%2BrjWYZZxUCn5Ww2o8NpFwr%2BBQKcn3uypoiY56ukQElq7yzJhlcmclt7WTjja3hKnqzA9roB8OZKW0Qo8ocb5x5MI%2FD4skGOqUBlM3v%2Bp1%2F5lCT8An8hdU5Wpja90B%2FFpbNLRjp9OlV2X1yuxtrwj44XH8dC1MWanm%2BKONDy2XfDxm1Ncr9LQ7hQoVOONronM0LGchA6I36Wej2%2FHvGcF7ruGUeUoNhCIJsZC7l9AfhkCj6esYJj2X9PlmUBpmmHpWq1zzzmndnUdBTqsLfUR32Aw6LISTInloj3yHt4uWPZeJ1KBEaJRPD3Dpu%2BVps&X-Amz-Signature=99db280f496805160bce7669e37b400ecd2933c9b110f1ab314d8fc583eb47a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

