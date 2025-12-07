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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y436R2OG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyK5z1cOxnfL%2Bsq5LxcTUEfOtXt7BRBXMET8yWI5zLNAiEAg6ZiaJyXZHp8kVMbc59%2Fu142oy9kpaiCg7fJMz3ouEYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBh29a1yGC9ADo4btyrcAwVDmjpnI%2FzDoKakGyNHtSG%2FYrIRklegUq0vSpvO4uoe0A6XvaSX%2B%2Fdx1RT4o92RmKWe0pS7ERHQ4cLMD3A8rWh7oOKnhoUrOhI1Dkqw1ngUmCU1yLB6L4IjlFGg3BJ%2BVdpJ5cIiBW0hTmznCbfugiEW471lZ1Lfs3GLleYCqx0fFoRmcVicRzmp9jC25HuU9zBLO4r8XJZkbGx9syrqrr1ak9ORg87gIBcUs2dOaZvvGoSXQcJF8BDeuu26nNULnIX0bvTLmTpsxFn2Y%2FR4KYhE9Yw8GaQodPeaVEmsqZuO0nBF1P6HASg%2BsUjOD2qQEJ%2FVYkWCLwOmLWB77k%2FWDU40tZzJaXImEx2nRRFgApIxtEOGcv2jZAOi%2FiLD1xRfNCh5Xvv1Z6C4Ryr9%2BZ9e8vpJhQhWV21WYPBRDivs8mr%2BLG3j4c%2BoCts5UqgDeRe4q1T7KgGos%2FyOb6QX2F9CdHrVngDal49t2dPhf7zjZIvq1Bs%2Fk%2BAE96dU13sJ5YczSAgLkWbk3s%2B9Z8Yat6uBaC77%2BJxLFGBE61%2FGcDGfcDGv4wZrdD0Z1dhADqVkzMk0CoizUIq%2FaaGYGhdWOKLmZWeB5F4rGdTXZXGbFRx4RTtprFHUqzdF9Bgy3nN7MN390skGOqUBhP2gLle0B%2BvlWX4BOILiMe2Lxs9dn1u2HH0cHLXkccdl9l4FUGi4osWYqUbcfoFs7J%2BztqfTPNw%2Bbben4qdzyzXtw%2FeybrrSBgEiZMCa6y1X%2BGAEc4Np8Ej09sEndg705S3Dm0k9UGOpU3y0ariSmaJ7%2FJFLo4sI1jXQ1PhB7vci00h80gz7msoCmXLhCeYo3nUob6hzA7j8wFmCu2epiT1u3X5t&X-Amz-Signature=3b41f6769460e82349b350167d790da0ae00fb3ce997613d51c244e306d124c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

