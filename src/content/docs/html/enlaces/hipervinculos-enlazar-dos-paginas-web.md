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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YBHILP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0iWp8KCEPUEVb6CBE1pwTmJlHCcRE7pG06xC%2Fj%2FRyFwIhAN4vZW4XWdm746LPB9v6g%2Bb2iI17APimjrdSQWCT8PuRKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhOlxhSbb7kmIxzjEq3ANX%2FV%2Fw8TKKGxqg1WWEX36WGT8rQNEJWD7Xy2JTtz2K5S8LARqfMga4rww8eT4mRQr44frJqPpp18rjU%2BDkENtddjh6z95WjY0%2BhPR6xXSfPrKhNrQ2PVle3qjGxT6sl0QNZUyTMufm2OHijUy4LvNYH0iNq7j8oVly2IuukI7lHGsIJDwQfoACTU3upFSkowffOByUcOhwM93O7E3I7MS0hdxwhgS0cY3KTJf%2BowvLtN0E1noMJdljq67EqU0OwfWhxvs4JK6EgXshFZNfEEord11cfbkNoPmatcsl%2BmWwmFf3lCcWhUeZ27ajQor%2BG6XNZwUpmNkTmdBDDwIUEB3UX2JZKiW0D96fxUvFHDSt7ZMshInR51qffnvyEn2UAu%2F7scr66nWy0yhhvWv8MeVxEV5v0CLkidq0h%2F1kIFwUkBS7aXTUyT18ezlNIKc1qiTB7JC0%2F1Z5JfDZ%2BQlGSrF8nTBokO7PKC96EiLTZLaTI93d5oQ5eA4kB5%2FbhIhukkw1zjbdUUhO8cdaTx1V1vKHQgVy4%2FUhNeLZEsrw2cTu5W9h3CITd3B3m%2BzIgZ57DtGqq0ClxSAZNGZNUZLt9u5koaNs7W5lTC00GW6DQEe%2BOiYfzNGIkOgUQl71RDDCo9TJBjqkAS2O8fC1YUd0bd%2FMAQ%2B%2Bgo0wVcIHT0RluTlGeOKlulXegX%2BhnlWl5sfn5gJmBwxaZaCqGYCiRxEd2BKJ0YmNUe0nmXTWTe9XbikX%2F6lwUWAyjWWkyGqolcmDCrdYwAEHY1OEu9LVv7gS1W6OhGUltiu6vyhgLwa6EO2aMSNoGgD4hr6uHbL%2Fe8MvRnSUrll87VffdK9k4K7HolLvhcegvoZA8K0Z&X-Amz-Signature=0846dee559db6da842d902896e71707039d7b9e26476bdfdb3ff1216b14401c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

