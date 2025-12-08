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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP5GXY3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo01CkQBIKcdd7y9jGAVxVp%2BwvAlTKw8E4gCGX74QyBQIgE24GPFlDIXCJ4315J0AGAjohcLBtiu52bQVjXuXW48AqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNs1xKiMwuJsCDsGyrcA7%2FxqTenZyYpJN0oOXkB1jtJ4lTMexlUnLcsk%2BSwHS%2FQJ%2Bx5mx4DVshSjziRkThXEdaa%2BYKKobyiD8a45HAdd8Xl6xbOFGTz1wG2x2YyBAPMQz5Rv0GL%2BgaEczLPp8%2FaYrVkqOJtYJ9j0JCCzR%2B54aLZX7sagoOkce0QD4VPSbzK4HsXTXafEpSvz0s%2BTEdI7t66wyIfBM%2BVoPcCEO%2Bb0m5TCHRTgWzlHgDj8aE8Z%2BHThT4hwoq5lcGmeJzNjCUf5MbavVSx9GxRKT%2Fvs%2FAN6HXm6WmBr5%2F198Itl9DiTiWcBOoa4Ky1nwVQouxkIN6t0MjHkL15YenrIzf42mP8tVi3XVNLqwhbG3R34e5eGaW8u8zc%2BtD1fgma6KKfkBMR0CCgU9yp7WnVy1aWH9GGEqnRtp6krwirc80Gzg%2FxE5Tt119ca%2F%2BmRQbVvGdEeG9l%2BjevYrv2lrY13HycuwDvXTEizLsGiY4FwbSld4yTkqJEQB7fsmcFbYp6XqyjPLm%2BDt65xcvn2k9l2gH1mNH4MEWXIRyfKwyi8DPyC67ATJJ%2BcbRctdi4JmrtxIxeSV4Jx%2FOT%2B0GNnsGVKslOfrc3cLeQil5EuwNntaWZwZFj%2FmGymU8%2F3hsxwYZyMXirMOSU2ckGOqUBzBBeummivp5dvq7GGGtA8NBr%2BFoCXYp%2BSoycUobsOsExc4VRMx9xJvgPlVUIa8ds4X9CMofDAcvzqyqJNwxYJD7kMM107teMkH3raHALXO4Dlut3Eeg7tD2Z0xNzV8WH30yWhXr3OofQ1gIA1wHk1fig5SUL9AvzJON1NK%2BmAb3gwxWN84C1e5U1nR%2Fd23FUOg0brtOgV8F4%2F5qF8pVndOIKYUxw&X-Amz-Signature=007c7d3943807ae95f125f6ea5f44e735d77f7f8d1625302896910c65743607f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

