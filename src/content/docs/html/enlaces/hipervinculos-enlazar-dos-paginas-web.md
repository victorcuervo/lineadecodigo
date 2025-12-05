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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZKSRGL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi%2Ft0KuBGVZ6WWaPeU3D2DyNDohe%2B91BTweYTvDSBRSAIhAKllVrDyXDZnk2iRL%2FF%2B25sPVt8IaLqTYN4nXKDNXwZDKv8DCFUQABoMNjM3NDIzMTgzODA1IgxmdEvC7SxlE4fL0i0q3APcRwsTxv9xVBWuB9W0Mf5k5I4%2BA5nqAugAvOikNiK38Ox5ZnFRo7gZ6e%2FC9EgPEtxGY2p18D0uIbtP1nCik4b5qS7l07R8Jm%2F9GeSGQlxLC7QU9YUnPCTbuw6PmNjQdLHlm2kYO9AqtCCaiLJKKTF9jfW7mbFj%2Bi4qzpzJ2ta7iuk9f93gV8YHNgbm0No51Kas3K2mzbRJuXnNzf4kXpxn%2BjAUTaoUJ4%2Bcs23eWemikMNHXGwA%2BipVhVnyu9c2FiltNfzQte%2BAU8DJGrRxMYkY1vxNbE7yFS%2BlufxYZP5IdJbEbYNAOJ0pKpMSfx9jkeMw%2BmEz7WdBuqYdbhNjY9RNKye%2Fnt%2B1uUi7pRmI86nxfPfa5fKlrLdkiN0Sp5%2B6e3vv4d7xRDgGbs8KVBrs2v6JqPDdfS8eNUzEnRSiMuGE0gzH148oZF63Xa8qvkKmbla4scE8ALv2CPwJtJ817ojfa3w0Orsd%2FQ0zpv%2FLkft8hoqf7Av0mmxiUsWQPyqOeGY6NB%2FmJwIhlV7H4gUp08KPm4eFxz0xCbE20BDUqOKIGy9luvPyamWIAPae6KrOk53e%2BuUnSI0JkZZE%2FLdSk96SuTEbTu2alfCOEV434V3EDL9aJRbjBmlbS8wRmDDEpsnJBjqkAWTgmS175PlratbXURfZaITZNAk6DIOEHGf%2F3evUen4yg9Wd8z4JxOHL6VdH7pvbMGZ0G6Q8Zncp7oUDX6qFH3YmERjz5PK8t%2Bwh8Yf6D4pw3Y5g7eVz7q3W6w8RKuGlAB4pA%2BuOZsYSY717Ari57nql93psvpdpp4JlMGJVt8fuREB7d2JgyoXU7KwOKLm4GoRd7GNweSaHuSp6vGR3zLgiAF9H&X-Amz-Signature=8dc97070980f9703b5c63acad06f8a4e4754699579c44631f971bb82b3aef164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

