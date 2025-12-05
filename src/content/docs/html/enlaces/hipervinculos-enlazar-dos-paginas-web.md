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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5YFAUB3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8GnimpiCE6KsgC0up6Ce10kPhT5gG1lKLkCDSKTbROwIhAKNA8f6dO5%2Bn9Yiv0HJSdqeThH%2BDFb2NyQ3KAC8teYWvKv8DCGAQABoMNjM3NDIzMTgzODA1IgzBjN6fcgRUmwadITQq3AMcc1xuBGqW43YPpW0vMl9MS%2F4BE0GuI%2BgYLGiO7x7f5EzagqZaao1ZaRefrqKr5VLR0WekYAPhx7gX021UjBd6wANeob5rtftORJ9Mh8YOV3O3JsseUU3lGeicyXq9PuzylR6xIVp6LR%2F6wFio2ybbvESPTwT8mbQPnDBJb0%2FrimCkQIGdTear%2FG%2FYgrlM56TqXLfUitOknjXo29dFzKGb8lxLC2SWJRSZqbUf3Tr6DCyhpl%2FHBXQvF%2BS4qI6VpKygDOA6W1jGilKysIdNRZCKqoj6QG%2BeLM5vnbVLpJfJA49q2Gg3jutMnqw8cZNQMoW7tlehDIsJKeHhHK6J2755FkRUofjz8UFIa4m0TCZpqrcRbWPWmleSH%2FPw%2FFb5kFwrgPH%2BkTOHJe%2F%2FiqCmzuC%2BHGWzEIc0cOrhP5lYGvVobTIYAErZeGHIRWsUV76RBjBR2ejLMm4Iv5yo0Ot7Q%2FnAbJGIRqdINBRwt%2Bzq73F8CMf7aTlF2q560SLtt21xPzx%2BMcSmvYnxTy1pa7s6%2Btos4rfb4nuqdrfYZt2rTq88QFNTi4YyYfKZ2u8CnIMf6QNPfkJNiUSYvgsN%2BdmBEp9yJbjFrdalKhWVn%2Bsyi6w%2F9nD7IwCfsZCE9sAzajD36cvJBjqkAe6Km5yJ9%2Fdb%2F871DVjAALUw1bRpSd%2BIA6ItbgcT3oiMh0PcL8nEUrN2mQ8cBoGUL8%2FNpz78QH8lvE6Mw38HXbqJOXdKVKmMZnYzcAW%2BB2YMysG7DVwlQOEoudebzXJV5KqopW6HTSR9fw8pd1SZixs47QwkUkFPbv98WVv%2FORzJlb9yH7RjysZ204ZJeiagKWFmNb11KHIRXOe2usYByc6O7viQ&X-Amz-Signature=293b5cc0ba38b658a7fef0d9d32a8c1fb1bc9c9533a38169bc071e3e6493f507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

