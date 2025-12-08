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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWHAZ77%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAofrx9I3sfgIkiliMPgHPXKMZafiyejoLKsofQ9yKsQAiBJ9w0NkYj1En4k5CLY7upUiDPmqIlRwvKYKnxZIm8pUiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlI7a%2Fg3%2FJR2HsEJ%2FKtwDHwGJ%2FVBHBhoFkMJ7P1GMCqLjb%2FR%2FQUj67P6KB%2BRHSsbJZDxTrpSGAquYBtqEduhb24EVjWyKDHzspKdN5dWD7%2FTlQ4iY6sK3kpChxV97dB11aH0N8eKQqezoZzHilBhPcwnrso8Mq9UOjrPc8NRSCjVi2YoGyMIpwSpZPwkqwh8qa%2FVZFm3Wl5fOxetzaByu4SgPrh52NqStiotxJkKq7%2FE1fbyLKMXlOJDSzIjBjJpCvtuorCOAKQRWQlgXmNKlW4qYYklNeCikwJMN66Y8fMv6lJdwo0%2Bx%2BbDnn%2B9%2FkUCIhqBBtd9NN5UkYc78nJpAmgpKWKescRIYo2fOvxb5IS%2FWOx4igXLAARZOYnpb6G%2BHmPCzd9ygpnnuVUxBldsi1NYcgIbtgVkVAk7y0euTuvM4Offo%2FSzO3%2FZoFS7TS%2Bm1WqEDsY4laUQU43xgDQFo0trjUz0FdBKYfx0TSZ%2FzBH6GMm1UcuTA0bXalQOTKQKN%2FgkoFhudMurOtYAaxEwcmPx2HiCZDwQmAbB09lNlmV6Vje01haLS5skRX6My8JU6r9eWDBUqVvUuwzKkeEWiTWzXrekMHtmT2%2BWrWjuQQIVlHihRqh%2Bp5tYljPRtM12NJTqouP%2Fvhi3xY9swtobcyQY6pgH2q30hytcYSRuZ3AaSQGw5jw%2Fe0pqc0QFcdJIt1NMoTMcdANTXglN1wSgn2SY0jT975m%2FkWIyTNlivg41B55WWWLFOoECK%2Fju8Q1fGSQJvBq%2BaocHIfbOviCdyrusjwYtJiVf52%2Fi2%2BOU9LWFIIpgb%2FRYwnhcwTpG0v0Qa%2BIyB0X7RDdblvrOYH0XpRC%2BZ339wSKhItPoS4eXHBpLe0bqPx%2Fvd2sfq&X-Amz-Signature=c09de89fc217a38bcb7552e4bd373799b9efe5ed0f7f5aa63643b4a4d5cfca3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

