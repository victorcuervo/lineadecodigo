---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNQSQ26%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDbHZZlGpGiB5gc1qNzZFbQ4JItqNxxYKZTnsafU2w24QIgWeSue8xFwrPIETPDTefA%2BtdOKw195e9QO914j7Nnkjgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDA2VmCsjkByyn2s5BSrcA7vl8gDBERwy4p1m%2Bdar3vyirYunGW6s8UnTLsg9t%2BjZxNWxiS90XIUgDg5ae2xXJdJRvtxk2pbj7fLKYANmM2Jk2LrjZk7Z8OroCmDJ14pKsokam74q6fDTt%2BvwFRuaPztssTYHSpN8sMckx%2BwGeaBdUtglQveygvqb%2B69qK15dV9IzBAMrUjqDtBp40Wr3MFqMWdfvNq3GjZGF3GIEZo2u7EFlLCdswcz7%2BpL3GVG8Jqw0KXxU97aFFHFO2MbpSHo4aTd5PXRccQiQO7yr7FQinyePWhSJvTn0FaAO8aPD9jxO7TgwidszH34%2FfbzbuVbJh7FQ25lA%2FORHa1z3VdsS0FwzBZrIeIU3R3v5yU1jLomukxaOgqYuZdPIYdcQHNj84%2BqGWUzNuR1TsT9Pvghy9O1zwy62p6156%2BeRCDumGqjKCTDb6pi9hN5lksRn9RTFd0tZQ7MqB0hj2sEstD2sMqYhqankHJwk%2FGAi2D1QCAsEVauz3IMypiSsJ4syRcU62aHs2yLCr2e2xIx51veiauVoj82Q%2BEj7RWOD%2BxaVC7X6ZdbeOsT1NHNuhi%2FDOVNUDfNon0uphyXcKzge9VUShPZcG%2BABiy9jb9OYeCCt7X10%2FIUc%2FLjxUqn6MLe%2FxskGOqUBJQKf2fPxGd%2FlKEr9sK54wHjfOqSDcHS8ORMHY0qIMv5K02uSi1bDtLJCwHx26CZDVK2OBQX1MKULe9fNyYO61QJMZVOwLt0sDCxThYuw4sXDqIlfyNuHhLhYcaKAPHRH4HvFF0uxqUPf0hdM9ZpzUWICLRjtuZlhMRla8JM%2FHCHyZZL%2By%2FsVqD1aDa7rD%2BJVbUFpjXuJN3vVwtRVgRt2j9qhC5w4&X-Amz-Signature=1ef6bd38f20b0eac07e7b38faa513f823c5ddbfac2aa8def6eab01e1f919d380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

