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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNAMS3P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHA058RCGJtfqeDH8T5QCMLHTXtYKSk4oXSfiZm2SGk3AiEAuPYMLPdyhsZq0iDcEt0JWwt06pQVm0Koa1I%2FFHu7LwUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDE49GerYLucI%2Fg6S2yrcAw7pHS47TcXmmpMvfyCgYg9DVz8e8ys3pN248yXe9zKA2agsm4uCmQsROQPP2Ly5vRKcKJ%2BBLUzP6UZhhWqfhh9%2F3DIBVkUvhUpDBWDsPE7w4qhMHrKWPxgDkVoY7owGpJLfX1yI6JArbYlydn46UBRS2zEY5GiP5E3xorULdZuuWnHvbWHmnDiVM%2FhYTG%2BHSqQRCdSyypbbffJn2OfAcer2j6iWXNkMpXQQ89c9CShL1CmWy1Sw6YYhwKnNpdlEuAmaa5yQwaKSamA7mMyMO99Tt5mAju4coEdoJKoIrgr5uZYWhg7uNDds5Brr4yeHNFNJUh%2BvzQs4w9Z8yqbNVjFKi8kj1qR0zSPptIV%2Ff6goHDnj7Ubc7d15NO6gUUL1MwWQxEcATSnJ3sFC48VOUe2L%2BOg0nJz04VE%2B6Cfil8b702Ob2Vyp4lwtw60eZAGkshqkslktn7FRwqbbX1IQmrOxj9Trw2W5ZAikedpCvOVnJA54K1X65G7Fb3nWiK1NHdzWKlta5MWKDqbUo5TV0OvumUOnlTVO%2Fn2%2BlHDrot4HuJy%2FJWNWozwc6KkPJ6IMc4rAvOEZviJBKUowV0UcnOdY%2BM%2F5KVXEhSFWNiI9IFgn5Mw45uGzLQqbjB8vML7L0ckGOqUBdz5b8D0pVqeyFBGNW8cZ%2Bb5kBQU7e2dxVb2yKbJKpa%2BFFOnYFOXGg1kMYi%2Fm7bYZ0IIO1e4bvwYRc6qzhIeRXyI%2B4eCXdgaEUaKcSa91ZM0IR5umhnsIZnFTS5oVtaTnmvGs8K0bnkgktqCCfvJUQLCSP1R6WE2XxgM6i%2F6FKARhWC7WLXLbm2tIhp7yoe%2BReeCTMcFterB9J8cCXCwGHamVpslh&X-Amz-Signature=cd4c28e76d59ba4aeb01a3db274a8a3f0013b813146472fd40afb39c6860faa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

