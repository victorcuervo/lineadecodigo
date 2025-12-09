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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGS2ENDK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzAfWv1gB1XLDhy%2FSZJr2qlr5govY7uTSLukd1QSDMWAiATLb5mz2HemV2jhmz0NDzKxDBgfFLTu9jukX66s1RAnyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVcuJO7ASFn00%2FQWFKtwDftHhLjcyXjXB4QzXJ5LCG8jUCWcqkuURLUg5agCL0odXmZx56vtqHvU4PkhU7KHdBukfIVSO3UA8qX3B9yU4yGMIwdrTwqcEvV7ml11szh0A6dr1VQ58Hcu%2BzxblJyvheI4fUyH%2F4fmNRH%2FvHBe6HGUUPUZNi1ZQ%2BvxQcz%2BnOYUPneN7OKS5JdzMyUPRY0Zs8Mgy93277LLpnpRS5ZjsTs%2BLv1S8HNF7W4y9tnBMhazSfTPf8N0b5yDItkw4SBy0glFLISMcBNHa9Hw0KyxSYd6fotVvROYUAakvByY3K%2FxwnQrl7%2BR4Ya6JyzQvnPRm6xVe%2F88OLnkhFAUHDdiy7FvbQNgBmosfVunp%2BQb6rd8%2BZLpzTH5wJD%2FdK%2BDaFYK17dGkhF2zqtFsfX1QWz3PtPGwqCcAtfL5DT6iMhw%2FG5tjOJ%2FZ78ftx8c8sJ5leKEImWNb3wmmL1HkbENS2VsrGqvtW57HhYh%2BAZil8wiNI%2FSSf305UKsqSaQig%2BLAzu%2B8Ntb2jEqfESR1toCVctASy3eUBwSPWX1ThfRMYZt7lMr74W9hpI%2Fs9BzYwBtCC32GF1jbAHgtrI0iCJ4ETu2qDn29tPd4jlzNen08ikheRPcKbnyXFe1bGSQOJ0cwgMreyQY6pgHgJGQ5LxrVxVe3%2F5PqJbOIYJjy95LuT2zPRXwIhGWY1rF4pxttnfTN1HTggcXkTPzMhxKGMljDVeyRftDiyj%2FVrmNBZM%2Bu24RTYety7kdi%2B7jxyHhsNNdCIiZMP9A571v%2BLdsPso93yHEdBCAcWwLzX786zYjGkYFneHtjZf9ReC0whE02THxlzxc%2BX8FCE6x53R%2FsJmynx037uzmbmR6qMdiYYir7&X-Amz-Signature=26cf63166ef3be730c951022c1c79004adabdf256c52a9e4fac7b1cf9943114a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

