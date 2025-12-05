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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4373MFN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh5wiKzdO8zoVZvkCVHpLHhTOhOaT7kYvFNbIElC89bQIhAL9c4Aa0oJji5DVdQhAP1%2BAcGYk8eBvpl6EM%2BIWNJtEkKv8DCFsQABoMNjM3NDIzMTgzODA1IgwtbFPbjk%2FX%2Bx1KtzQq3AMn3Wrux0PfyP%2BuDUTWyYWs16WyrLNoLLtEh7T8oGxRrsRkILBo7E9AVWk%2FSL2wjfGPY53TvYmmvFtwv%2B7%2F0v8CQvnLvUo1rLCkgdAFv37wDrTmln0qqeSxVgZLGJKCp1%2F5V1l3iMEJj0F4n7vvB7BfJUF1FClVSQIqsYwlhAaq9G%2BtTGTJOr6KW4Yd%2BiaX4DxFj5SAqLZDJZxfJwXurKxCcy3DrZ1EHcA%2F8Qio9gdovWd56KgfX%2Fht7ZEOGU%2FXV7CtRn99Fo%2BDaDWWiLwqmDVk%2ByqqopKDYljCyUtmC87pghyEV1aaXLW8zsKnRuXPLN8iEprBf0RzvAnl3ziyXbMe7a0AqbmXRn%2BKxnoMV%2FsP8oWWLjerZNUyP89pkFn4rpsniA4TlXnF8a70OAnnQv8e9Ds2C8yknpLVLing6AFKJmZ9yd8dHcdsEZ%2F6%2FCAUGiYZhO%2FS%2BXIAq4La1VNt6JC5O7Bf3NMBmujuV4BuSKzhMz%2FQC2Rj2OK188PIEMM8l7d0ANeZYT%2FpDZYdQnKOVcfxunXOSuptKPiy1S88SHNug8Yc1ELaKa8weZR4RjqbtRwyE8vvPld27Cl0zmTFcX9lUoBBcjBT9do4jB1BRx8aUX0CVCVZ8Z7dt7gZMjDvzcrJBjqkAbgtlVzQT1ByXTf66QYYhECoC4hge2DW6dTSg%2BRE4NRPsOZC6esbFGZO0VI83%2FWZnwAa00eIFQ%2B2M9ZEGmYuV6u9KiNeZ7SN6mPuNf%2FNRSGx3jpdnV4U189x8HQvllJ9DQsd5eoPyJ6Mo6hbXwPaR%2FrMBsvbo9iVSGlc4UyhAtCQTl4sIUKow%2BHE%2BhVj1XT1YY057oCLswQTBODQNEIYrp3kJ3me&X-Amz-Signature=55ba8af017d00f83d5784ec1055508273acea5f318344ba796ad9e1051f1e280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

