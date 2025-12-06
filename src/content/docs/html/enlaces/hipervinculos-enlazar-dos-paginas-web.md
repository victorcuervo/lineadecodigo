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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466742LXRED%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLUkGupPmWcrzjcXv4bxjLNpg2r5qGdA9sJ%2BgdfF0gtwIgehLhYasxfSEDzZzrfXNL5VCLbC6MM0V04NeHhOvWblQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPusEYKxFRCOmWMqLSrcA9ls%2Bpkd6c%2B9NRv5xESyvLpBCVVJAkbDUahleLGo6t2zmcZ0qBlnKP%2FruMniCbP8YxytJmYFjTAUSltZO4NJNZSbQQ0zVgeApD%2BAp3AfecD50URqcWNaXdOvcHHpZ59ntR7etYGQqRv845sno69AibN1gxKQhs4goUqR89F%2B2%2FanatnasKg79MDiI0iTEWvg0HkVQXpPrIXJcp3OKJ%2FIrlDEvPxVuZa0PNK2eCHwVDmQk5D3OeNxb1NOAi%2F4G96Iencgq7L4F0OkH4FdLm830OsIrsFm4ChJMMlEa7Y6F2pbSQGoFW69Q%2BxYtTie1lblvJ9oOc%2BjTmkHTSUozy4X7cLccjkbXFzbs2onEpXgBwrldZ3ZXCfrNtyFceBcPJEQokz0v8aOdM7uDA0f36FNhCkYyaDiac2kFm42SvyaSKM5ksh%2FY1VjgMXgfIIaikASdnBgG77LyMHOWi3xA1hgaeN3VLnvkrewjwLnhqLSah2ZwJa9cyBzLXFQ%2FOaLqOkaI6cl0E08g15L8BpUjFH7BfwcCUZFudpiw%2B0C2z878QMTf7L%2FmnFo65u7kSAVv%2FwyYSzZQWvvoE1rCk399FFLTMRehfTQW2qYKQzOlC3H9RJuH%2BFBsQxhAw%2B9xDoSMNv8zskGOqUBhui3d3lCaijh022e0PaSX6yuEsSTt8dfgOQuvjf9R94sDcZ4A8SPGZubRvREHtVz2iPDd3MMTpiVJagM5GbQIA%2BznHtFAAsyy%2BpFM5uH2dcmtQubfEmsKDcfc0JWKZ7DzlFmuWwogH1LoVnD4rAmy1yKOBVKO%2Bt9rSpVdEmkBNUOztQ8VrtlGLZeuWkfZx9j5vNbqbKsUE2KAOVqlR1bb16Ten7o&X-Amz-Signature=38c2165afc4fa824fc5fd04590992685abad57f76358c6719291fc3348b814be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

