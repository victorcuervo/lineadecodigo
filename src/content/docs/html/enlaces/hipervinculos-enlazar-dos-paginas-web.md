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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGLBEITF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FxBS1DxeDp7ytpzzCchslR1%2BBjFGR8hzCFC%2FaAIjXjQIhAPC%2B%2Bo4QrvkXrtwWtCkqvsMC5PXFpQm1uOumB8M7x%2FNiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoKY%2BE8v5eMy%2FK3J0q3APpdD653dgh8s%2FOYXx792syvG7AlkAznPumpT3hEzh1%2BP63kqYRm2lMgCklLYkHBmPgCvy%2BBBU9p6ohnbrneGORPOHtyQ2IPjJdSPP34EblnCCx0wiyxDzMbpdZnxBc3mE77S%2FyHo9pSWkawupwY0HPZEOdaRJGleXE8%2B0J9DqQ6GTJenzX3cY9X3I6KY%2B1KGHaSJ7WAJazb6YgFzQK6qlj5BWI5HdceLTsS7uEzXGNKLC4LbmGqFMy8IAm322v0%2BevfakPNuHUeV6LHt8gmgDKVMsrIbdP5XEvsT9uyRIR%2BQamG5lnRMfXN18WultR1c0pGdWIFCca8iJcXZE7DzXf1EtIlY757Z8Q4l3klvIB7I4UZ4p0%2BQhkDhQF2c5t3TQXD%2BfGIGFLf%2FFaCQJUtOrC%2BM88i3ss%2BeraoL5v%2BbmwTdcjf3a44lcA2DZyZInktDYqh3tsATG6Aaw0vx15n%2B6RLgEr8M0mbhnK16AX5IiSLzYOpe79vsBf%2FwVPwDCfXXwGasECuxlW4k6XKBdYEyJrZHfaez3HXeNMIGNuJPDqI7IM7C5RJaCLYbN7d2RFsfKBN8cEEF4Z3r7QwwXH3fQleIQNlJ4tQ9mLKwp5erQGVoZamDeAGp3P5hWO9jCvxN%2FJBjqkAbDE%2B3vrK2WIu7F5Vb3brND%2BOa6XiDUJYUFQxp1nAzdSrAFw65ImMSm3K1ZEn4VOjEDR2ONXUQUK5%2FFa1ggy7sq7%2B7waNiogMHSCg9ePbLAQtsC5OTKcdREQSqYIxgtsbqgdhS08i4N5ZhwRwa7NvEpjD0aNwyX6gkAJUHi8aOBwcVeEhwmiEXLEuX9JdxIXUXC4VbfLXZMMXgx%2FI%2BujHCLZX%2FEI&X-Amz-Signature=50d17a8084b4db59e3b9abfe8451e60ed113560a49359c8bef137ebbc4eeb440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

