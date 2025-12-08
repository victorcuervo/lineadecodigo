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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WKHIVY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGxpJKa7JPFfDl6aNAcI3tmJ1GfpA3vWLkTGoqPBBxHAIhAJeClCu3wKJZzQtl%2BE%2BaJRR6nDOlGB7jhmE5BB8aAn4WKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweVByjDyQHnH4UsRsq3AP5bZcUBOS3%2FCJ1hcTMZzcBd4bp4FrgSSHLzWv9ZNBBp14MPFnL%2F4I%2BWcU9l9Zw1Ras5MSfJAJq%2BbNEGbWUzEJ6t0wfoc3Jl6YONcqOCI8W4crKqvis0bzSI0b8HzlyTeXVBLW2X4HB3ZCLvh9oJukOQNAvuvS55C4P2Vog5NFmqo3KDeRRxdz5LATbefZ071%2FStLRwK2c2IEwy2MyiKxrYCAIuIWDMChGwrPBeG6Z9B6IAmvNuuBtKqS%2BPWzBUvuM%2BmowW%2BnS1b%2Bkj06e9HAPJPI8kpzCe0%2BlXIvvNGLi9tsBp%2Bz39uFAcxYJUawhD98D3bFp6qTcJpViRHiV1BQ6BZZS%2FjTd7ZvLCnGj2RxGOOzqjkbCyEXkGAL%2F7Q5Hc7WnCq2Pk8%2Fj2WzGizerLTGMQRZaw4O9L41fuQNotOdLCkfFLIGVaXX5VZ4mDjCBm19IZBDupV8O2bK6tHchDAxSBgIfwwNRyQuGNOXb5qUaYGUTjemS%2BIL3z7KzczOH5TiA6X8E8G42yN4aI8ZRSbVkgxTmc8V1XV8AiXkc6gvpxwLqV4Uc5Io7ZWjNBA7O9NcLa6R8y2D1fK2rA2cfdzlyTHIVEJElmK1%2Bl8otAtVXcuWDr%2B7ZAdCUskaAp5jD3s9zJBjqkAeKy9vLy0wXaBFk7mAsutdVAwIFqNuhwguqgf6ENWY0eDvYAOtJQmvCeBz%2FkOlL2H75RFwu9dfebJqKeTZMAld2yEx9N1iRXsHwdtl0vWx81uE6MQW1Fk1SoeyDeV3U4IIY5v4SUDlZuWr5hqLURumyWZE57cuk%2FQJJaV%2Bx4PhTZmtstQstcXSaZcN7a2hkalaq4ypy5PVmUS%2FiAHELQXOiBUMWv&X-Amz-Signature=1e2caf6c93f9a18d3bd9d527f6f07a485c62d3bcd05cf70dfe96f560171f0162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

