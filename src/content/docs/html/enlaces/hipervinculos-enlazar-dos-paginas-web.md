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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTS6VB5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCshTOgGK7609wX0WreskyryOxH1n26ZcAX4WUgOKTNxQIga%2BKs9Z5MtGmASfzMQ9O7pj6zAU4qGyt02CvGXhDcyKgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDL9aPtbMuVHglPeVPSrcAw5QmleCfjLtEchYxeFBdoX9b58jNmu8RhSBo4njazwKAvDcA5TYEUNleNRfkQy8BICsHnOWdEDkZv9iatJiF%2F3tGy7oxLbvWlVLlIfVDlrKcHSWmoDbDKnd%2FWKTTT7UFtMnLctCXREo%2FJziDn7KIDISbV5%2BscEXc96NOA0niO7goTkFEaQibW3ECkLET5UdK%2F4i4lsm1wq8%2BktKGjHxcf5V7Z6oR2lpesBplYTLV4OXBPQN4T1wZcYwEEjmyyBH5SGyWdNiRJyEMPPmB0CXcfkUjJoK5IpoG578wmccZCqAQDW3Z%2FeTiHjeCUjzk%2BSH2OWNDkx0gGHcP4%2Fv5SpnTfjwbRfioy17InIiEI%2FH1m6eqtxxA%2B4YiOJeTyGBOOUm1ZVLzjj94wzy9TTbnl%2Bxi6o2rVLIx7xSw9py3tGGmJ6t5PJhOLjxGK5CsTvXFrvEOrbMdSJaB8%2FEJMfyNVdQF6zfXrAmXlIYHX5SsZBF6%2F27rxRpfTOlSoUKGrE4LCsWEL8KZpcpvVhARRSiCCWwtYyOzI%2Bxs6gH2GiekSUn9S6TAo068Mm5vC7hx6izES%2BAxgRC6GJaXfvXvkjM8iiRwC7Y1B2pTNMhYCCSs%2B5XvsLw%2FqfdMUStrC8UXOupMLusyckGOqUBCAS7RL8McHpZzwcwPu4oljkSFiBofz%2BZDJcbTdCyiKP3s0GqewbGQ%2BH4sg0FZLeUjrkzdphMLwqr2u5Et%2F8xiO0HhN5Gpdt430vHESwAYvVT4ll95emHgeye7w6UQOlzScAl3gL5DCVAEuu92ttFF5tSWU6sDwTdozMLOsnOSmGuxtXalb1nPy84fYl%2FhoK5CK5spPCrlbBL33h4IVMuWXEfKPRg&X-Amz-Signature=8a8fa25af7921082ace4fb76789a129e0ec229b42f1d2acb2349ba2b9b4849df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

