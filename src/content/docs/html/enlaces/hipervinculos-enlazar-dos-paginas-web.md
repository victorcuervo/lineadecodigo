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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKC3SYTC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpPdrAmGn8%2F0ohhDb2CfRNnW5c3gV78SLi29lGIMKxVAiEAxl1%2FXHJfxkQgzi%2Fx0LhNXuoCqKnAnINijcD3EvNYfVEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6XvHlmtaPCYVfW3ircAw9rxHOcSoGc%2FmQZynT5Me5BoFeDAeXPjX5kYGGJaIkQ0aRec1RiB4v0iN4vDg6V9SjyvczDWeS6ngmfIFA5620jNg4LZ2QvplCh4%2FP7LA7HfO0G1tIckgD7GfDsR%2B%2BfJoFsHzcGecuEuHNytQpHOS%2FYMyM5buENbZcTyckKyNmHJa9KzGal70F504ejV%2FeSv5HrduplBVw4khiDlikbyNZImlvLAKvEgz5c%2B9h12cFBwaXspb7cXU5HzTX4Nu7G40%2FAKSKIGq9%2F0GvmH7Rc%2F%2Brgct0QuanEjvUlNi7IC6LhzraOG0Nc1jfKw64OkUdc8sPQ5gQXxp%2BZHJ9lrAVkGbLkeS8jXjB2qG%2F5SiYzKXInxJ5fdpB2z5SGxGTGZ7p%2BrSr0m5lg0AZ8FekjnMOQleve3OhZUzQwsgt4T7yGz8ROGcBmKxo8veE%2FJn08xoQc5Cl%2BWo7Dqugc8uzBj5pBZWrumGk7Djran2%2ByotgLMujwZI6oe7r8X%2FWHuPlLYrvjLVbmtXkBBnuJb9vY33teEyOb5fYyyF9SkyuHoWHjbIGkRD%2BtgzGixPsWmRnEFyhp%2Ffp7CgWpdyvbqmX6Lz%2BgSs1pfiNCbDPrcuLtXiQ%2BaB%2F5OYMM7vgrinkO3qPuMObC3ckGOqUBgcEIZk9RtkNbTlhzJ7v2WPiG0e2cwikegqAm0So8bux8b4PUa61KfPuv5xodIrNr1S5er1Zu2VSo7j8N8pqbxmSMQdyVqkKUoBRfXY9%2BxiEJ4oL059lnzO1mtGK3hZwRVT5E9pLwKpPYo7KvoCd4TKdYEIg%2Fhv5cH0en6vw9QCmWbNMrfEIhNzmCQWDxCOo79RfRH22iwdq4jR65ouqZqb50KgTQ&X-Amz-Signature=d7894607cc38dabc365f4b7e699716e5fb9bdfa078619aa83ed85d70e0ef10c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

