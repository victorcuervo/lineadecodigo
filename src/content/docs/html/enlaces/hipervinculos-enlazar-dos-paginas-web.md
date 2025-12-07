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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OHBPMNJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm2iz%2BpK1XcOvO3XL269fN01BPwqsdh0QRcCjAc94LtQIhANiRz1rSzQvwoVeRIX%2FD%2FHMtaQVGL6j8wSI1eH6139ZrKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUvnMq4sPU5QabcGEq3APPB0Y3JU80zK1ubLtF%2FbeNJtYf%2FFTHiHAA18dvtAfz79GEVhsMp2TUi2V%2BQ3zAOrk15goo%2Fn0UrmG1LqfLm70IJNgsNo4%2FsH%2BgjX%2BjAlvas4Od3SLSNhO0giNdeaDtduLr2suNNqFPMAx3CxuupmRtQerFCN3H8oMe9fkP06xxgmCyszrgTIF%2FTxHqOFAaZc%2FwGCAqnI9FC9omKFnYO7HRtFEDeIs4fXie2rKsa4DzL0WP1aepA5XPZVgyDCYeKWJXjagQRugW770SeF4GFTFS9gjo6guH%2FsQcypLwyoaLMNnIFPA%2FeMl7QnRjSoYug6JmTHaX9kxw5C6P9L2ZHWbePlU%2BgBHRad6yFWoykLTWWt3AFiKDsZpmgXr6Y2k4H7U0WWS4VyEh%2FS%2BCFGdDrbpB9ppWvN8OwlOwyd83C2hSn3YFcXUqToM1iFKZLahB8ZLemixVp0OXB%2FmLuhGdFC3X2YC3jk%2FG16FULz%2BCWnt7AKLN2NjIwoHoyNZa0XiH8kMJAshRKCGIuPfM%2FItcOdUO6Hv9G5sWoS%2F0GqPNcOQKH2E1FBcjEtkB2sNOW8XFCVbAUoM7v0%2BEvDCtM6rKhJwqTJs9wwlPwfuUxQvd1%2BQbPxFWH4tCbQA9Qa%2BEwjDaqNfJBjqkAdciQLD4x9EFDogOjkSNrMzqwRQJ9Y4Yb2GmMXxTsMNYTUTS%2FMlUyO1HStxpiHgVyP3DaTrUtPyU74pVwQfphIGNF5JUFQAs8dv6OtxRS1jI3ieM6%2BzJ237siE4%2BCNYS%2Bparc9SBekpn2xd1yNI4pyNBOF42HDO%2BJvc9BEjoxVESaqC%2FTHnMapA052iVOtNfaHAIbX4pJHavlyMC%2BxvT7oEI%2BaGF&X-Amz-Signature=83fdcbf09e1eecfc5361e4141b55b7b742a7f129ea0fc352b09ef3fb84e4a06e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

