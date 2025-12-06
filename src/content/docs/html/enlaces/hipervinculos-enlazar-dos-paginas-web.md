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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GL4ELR7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYAo%2BnGmoPJBPcD%2FG%2ByxfSBcEFUVAxs4Gq5dcPxwPkGAIgVRDRAobxbhj0PlmJwY9%2B3tkZOKkgxYPeFaYJJa8iMZIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBGVzRHPiZ%2FzYouboyrcAyb9jH%2FHpE0Tzhv%2BL0l8UznVdqSt9u%2FeL4clmU7yJXDhVk0zd9d82e8UEPRIEWgljAcZ%2BxY8eaN43fsjY9pnYi5F7YPA5vvl%2BvOAvAX0VdgV8saNxinKQwgoKCLq91Mci1q%2FWdeie3EN2TsWErxMX8EwjtP5TIXj%2FMMOo3jDs9vjDF1KOJebG5mLBwTdAWCAKOpmV%2BzFXSFv69PaQhH1J2Vj5h2afNYXDMLKwbXsvkoy2HpIbqW1PciBjzGjYuOuD9F%2Bm%2BqFCASUcdlDsAA85z6TnTgBv9fFxw1dRozvYssaNXwSUPYdIMLvrQGa3XaMvXm%2FkWQocirrrSJS2ERnCBr8ZiicYi5cS81gC54sLfUjXFTQ22QhtfvtqiIlWP9xGVv8NPd%2FTJkQqWUPIjcV%2B1OenDTFN%2Br4i45LUAM8Qb05OLQqMk9RpF%2FO4bAxFMe4KUcLFQEjRjNK3GmdvmpuqWbfZ0E0R2SJfIVUkeRie7KCPwGbnTAE8ub22QnuLWmCguQEvTgVFCa1ST9rVYdinK7MOtlagl8kzflUJQCMf37PNZ99ZN1JZ6r7NUcLYFctpfwptB3MFJelo0OQOl25EQ%2FhsHDMrFC22VLq8%2BapROVcbbqv%2Bepo50OVpN0WMLPI0ckGOqUBojHxIXtzfESbXcjTeeUxVnIlY1snPB4EXMGWFW%2FNDi3OcZKMkQxYQRGqVefOQtPw%2F71l2HzOs2uUTRDX6F3hw%2BjNc6snKtYwjFw6gTM6dqV61LAtRU3xUW7sfOOuhmB1n76duzGqSyca34eovBFMhFduTf%2FHlS2mPyhvVQj9AUDYWD%2B6eLLgRC40yzCvx6eaAHuXR%2FRfCm54CIs3tdTjpOkKYSI%2B&X-Amz-Signature=8f770df940bde18dca9a5aaba51da0f76477aa39675835e1b5931685ac1c4123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

