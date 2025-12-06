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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622TRG2RC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpNrCRJJ05J8Mbl%2BW6SWKYf%2FDQCPGnoz6jxLRPSczD9AiEAp%2F0CiatKTRQmiDE59HU5B8hB%2BgtqGiU5BcbYVz54xM8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLhgLntKsckftLzC%2FSrcA6RswvuAX2O2VaE1blRjfxFDqFxqSzJNf7GgIS%2BLimX8CXU%2BwJT72tZMclmPh8k%2FNI2FBJyWUY29nU1es7Ves643h20EYM4Kjln1ZehxrRa6InnN%2F4iLsxRsUzMyAbrZ3CZ4%2Fbck4IP3jEeusg9PTpRT3szxXB3FaZhlg022BwzBQJaPbv1%2BCI0GCoimJq84CKrZ4nckfThq%2FtgLvMo2EJEGvS4bf2y95BtveNvmcoU299J40S0Uk%2Bz2v9dz1ylSgif%2ByLHx2v6odL7fp%2BZV5tac9cG6y%2BBDJdccynWYjKETw%2F%2BD4pi38hIqK4lhHALYC7pt4TMmSFb%2Bi5lokWjwnyzq0Piz3WqSKCDVbChHJ0vxrShwLi3a548qNO54jrydyzBDDHzIsfxY7BmUnx98DsgGU1QhezUj3E6iwD9gyz2pDjuMxZkWwWSDrs%2B1Eqdi6tGpUYX4JVVKvRGSY6e1jXMrRz5cE0YCZphc1BHV%2BX33q%2B7kJCNyLJKfhAsWUMlg7Gu2mZS3bMCR2nFyvcw%2BbbuPTUzlW5sAkgY5WZ%2FETfZWT7INp7sY69vBHS79NjUeDhgXUqPdtzwFc%2F8ZVzHPzM2guuZsowwsvJuOLb15qIvqrGNbYQZM%2F5doNCS4MMbT0skGOqUBhSVKLqsMugmbFfaWPpIuFVKUeG1M9OnKZWhxtEWx9DE56TH54KiaUZkXQMXlpgKHG0%2FDMA4%2FZ365aQp5EbHFDQw2YCISpjLr2hvhl5AAqdP9z7IbVUvn50PegJ1UsmccXzyV9taE6OEIyhK31HQX0W0xYGbFcerqwK6OnEsOiVnfc66iBoQ0nym%2BaMo4d82uHJKZUuYhIQ%2BkjKjPHHqlIJEaZ2%2Bp&X-Amz-Signature=afadff886824f470d55010d5e85864d883208cbe77d673a8e91f8764134a89ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

