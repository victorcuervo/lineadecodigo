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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IWYXJ4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH12%2B%2FDLIKVxM%2B0dLuvx5RzPQ%2FeO1r2HZqh9Q5tSi%2FuwIgQt%2B1btb0JTaXNCgABD%2BkNQJoTR0OGZs5ul6ponMUM0AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqAYN%2Fl%2BctXAWrTAyrcA4GaiQHjDyYfkMOIqhESfvGqRenDVde4hjIj%2B6fRSGj8bstRa9K%2FJwnZpoNjvkSsz6PMFn10bI09wsOUM9n7Reeb%2BT5uPvmTpo%2FGhR5xJIme%2B1Q5WWgOjSIs3Dh0VFlwX0aKm4yBhfoUZq5CgZYU95ZBSDnUr6%2FarO%2FWpsVl7d1OBcb9d6gnNWpYI982wC9ifeEeH%2BNKTmuQTchKeXR4ERgx4DHg%2Fu%2FwhMEuHP5YEyoe9J9vY5NuxIcYeyrqxsYBvVKvXLHXrGemo2Aq%2Fvw0Rc%2Bteo6hTUrLCMKedhcdsINQSYsCS95EBhz%2BS6hEjSz3JJDRK9QtSFKx5hIU5ECkREqWnyWnle04bQDlNVNhtVG8kan6X9fSiexnpSzxDGyuOeJEnfSJKaxkIap4JzSMtE%2BnqntNBCt4eE%2B9A1onq4kXo6NQiQqif31h3%2FhF62012snG6D9WhfPw5jkRRX6Os%2Bln%2BOXFYa0hunlrgfFMpJ8Z7tOH2PNSne96ZqV9Mxb9b4%2BmukuKGfn6jzO%2FSB6%2BfDr3hU%2F2xECvcx2js0dVKUXC0NZkP0ONCjEe%2Bg7avwEe4FFMCPjqhQrrfZ1RSWDmplztErVfGXsVCfEB0ik7tM0AhpRQ2HpWtS7Fi%2BcmMJW03MkGOqUBy1lxZazasKU2Dt9twyU%2F6tw%2Bboee6QnFRL3mGoEeVD0XSRvhUKNYyytORszDdlVWvDOilmwwJlrFGAjPh3j5xp6S89Z7nbLY7QWTpedMZuRmq3qY7B4cG5u6qSyna2JJmW9fW0PJXCG3mGlvEbgyLamlHLrkFPpl%2BE2P5cjqNplma2cIb%2Bcjh6%2BKpEAbE4ipbQnUpCLH9jUZB69N%2BWfFh6IHC%2FmT&X-Amz-Signature=871402b15784a3aeac7b472991b02fd062af0b16bc8aa1d6ddd7e89e07c68475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

