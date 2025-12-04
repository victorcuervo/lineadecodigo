---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIHHIE7N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDr0VF7z0RZIbBAzwfvamBimx0ly3jAhJpPOugFDLl5yAIgWAtZtI%2FWdKNOdqHrQ1yM9I2DtsB%2BMNC0E06Y%2BT9s9z4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEMm5Dy3y4JFtuCA9ircAxdGP026gz7SOPxNPcbB0uUvjMiBUlNGU4h9qbZGQWZnIUykVrFtRHML1XFOYpLQm%2BxUtY4JMNbM8ZJ3w21GU6FxiuOV3BBFd5D3mUoY8qY39enUi1iIy%2BPNRGCELloCrIUgPfbbx%2FkeE3SyNzdoB%2FWsvU3UaKxnIbc4cyxJxwfwKNVhVICxTkWhq7pTZ12tBu42GqhLrVVy%2BL8wAeB7v927BFLvqz93P8R%2BHcznTOBEBNoCBNeBr6u%2BgKoYqv1MbPd6DwS6mmB%2BnFkhl17T7ODREYZKrNUN0V32Qc5Kqwss6AwJTplKIZDyAB6z%2BJDp0R2yWtglBzAFfXEJLL%2BJYFoEX2B1UViiKQwo1ciNSgSWTp%2F0gWD23zjuO3Idys4PrkTs06zom%2Fja%2FXzQ2m%2F46k4fdc2V6YCXhgzCRz96k%2BxcNW2hlcnBh27jUN%2F2FqQmqhIvipJglpYODkCZARYB0p0%2FV%2B0TzrMpVQcyLx0SPt%2Fqgj7wSUnxa3FmQLlQJjz8COPvBGoiTzzCNrhAvvFqxQM4Sk9x0b03mvUYrdeVG0rUcKDjwH6YF1Nisq4RoJuZ5AiLTzCjaeQyuS6F%2FFhSVmvyyaz627IXkrPK8g5kBOpb%2FZ6Umk7LwAQGX6eWML%2FKxMkGOqUBIgigjxlx6yIQMYK%2F%2BqRP4hsX309AAjS5wHWa7CXSHQYALvTVzP7p%2FRAvIoo8zGlp2UiQQyB9NPc%2FPm8kTA8tdHztV14YJhliUqk%2FFDpQy2BoUOsUCCEq8DWN9djTSzrkaAvOyvk4KPGePFDjYwMh3%2FfZOn24Rk9dSPFJ%2FH7eh%2F%2FIswifLaJzHCSKvXg79Wkdnc%2FZCoQLyHTB5tXwZgzKnsrdGEMV&X-Amz-Signature=301e88983333c21ea8414776892c70f2119a97c7501bcc60d867bdd4fd7103aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

