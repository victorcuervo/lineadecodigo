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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDYO2FT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T172113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHp38yp7XaI5YTgXd0b%2BT5BnALDt%2BHgxFQzL4J7NvlrWAiBZkfI6aLIbzZ2wDmznLjFSglJzN4uSgACOPgDSCwbfaCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMic4xIGRGzSuz%2BcnOKtwD9chZFvgPSPU9NM3UE7rxlgN%2BOW4NonEIrGCm3QgLbEANodYgKKeJqjb0HrFhsrUTbE8uzKk5kaYeUrE7fGcr5SC%2FO2uNFGLCOPCIRAAeLNTYcX0GpWcsr1aFX87cyGj4b%2FbfSJSLm6ZOjYFbj66beDDDa6ZjlmeKyMtcSTd%2BPZm5ujEp2DLNCb%2BLnqZBhdj6uMAtTptfl6sMldOlZm6vS2tM3cmeVM8ms8MahlYm4qeyoKyabCr8I9DAmS46HsNy65%2F3WUyftNllciwXeWVUK9mC9oESqMnTmVs6Zog5L6dslB4%2BHwdLxVpVKi0ZeL0OZIvS0NOcp17kWEPC5q1M%2Fl0HwDDyEHcX0uSo9RRQR650bPnsOqTlHEO6BkTWbPXWTqXBgtbbbUoRo6%2F2vg5cRFo%2BHP%2FVpqlYFc0Hv5lUdUt5Pt3MZUsutVqWltwazEZlc7qB75Qt9Hpvs%2BuAz2nEhUSi8kTwpcqTBdBYiNl4%2FvJ%2B%2BSoaVyb3DR272HFv%2Fucy9t7YTnU2Oo8y6Z0qoVmy%2Fhq31y3nTzYGy0cUA4qk%2BWENSpzDYPnoWzGqc9jX79FGQ46x3NPN%2Fh5tfMYJHZAtWrVKbusQhblWXwpFIbWGWzlVaaRw3N%2FG3zbqsG0wuJfhyQY6pgFeCN3SDqUb%2FqiJhM%2F5snewbWHmGUfeixktJLPba3CzvZU9gYNyNsMFjEQfMiJd3R2ThhwxNanG5zTsuoYJWqLAXrJTSOEsbCquR3EtbYeclnFLFwsPtRMrdIYzmSO4Og8BBQbbiAFy873iofgWckxnSDvq9snrZAJU7paC440RcoQVaTQurZabw4Elz9py4aDbpni7S8ADBhr9FCf%2FhykphN1wl8N6&X-Amz-Signature=976c90bf8d43ef5016fcbd15a99e5917ffb67337719f20eff26dfcb925769139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

