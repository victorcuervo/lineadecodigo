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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPN5QQHT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAbse4VbKJOu%2B6%2BY9VAlqInyfgH%2FXzN%2BJAIr9Z2z%2BFbQIgA9BvC4G%2FZUevLccri3oaYnwClZpjZZhsj00PezmyrqAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKvTcVGepLhFZEApircAxegJ4JRCSotoeOJJdpsggdiBuoW2Tilwnt0RmejlotrXQCKuPgHod%2FUSipm3RSkPxzV1VfVORvMjQ43aCtGprnbjIVluAwM3fXxrPkFi5PcEeXqoM%2F2G8LskIjVR3v4vxum5Fb5znewmVr3qMCdS6%2BX8OCM7jlfD3MxnM0Xau7OwhuJhCfd%2B6YhyH6v%2B9x%2Fg9FaJwtANmKdOQ2wjhDjwHqw7skLm3Q9IUnd9HPI2Rg4%2F0SdVe1GrSDzlrQ8EeOE%2BrCnEmH6L3JXER1hfjQEJ%2FSk4RHpYI8AdBtHWkRskO%2BIS1U5eEvjU2AmJbQpU%2Bxo8fhGgeJWd7CfaCaBD2Tr95jq%2FFhCKe81w7muH%2BRvXDzsEfhw%2B%2BI2F3JD9RSyLK%2F7ulbMFy2vbsg81YN52twLdeCejbcibcYbceGQX3JmSWNiz4gXISJqD3U%2B9CAFe%2B%2FmV9MHnKbruBMown0JW11Ij3WTwLLXB7tX%2FBOqa2LL6YN2YiA%2BAkfvK7kU2cjaFwTQF3mmdnViSxmFSb920Os%2FqpKavWbdb1wG1ICYVMZQvOgXw1tGioeR2xNZx14oVEYy7nqjr6Z9DomnKpVLV7hAP%2BlJgmUvYdxkW6lyhFeoML69wlRFLzEwl%2BCQYf%2FMMOX90skGOqUBkWHlzIiLJfV0UOyZ2GY7XzVNOg9pxsrDNaOOmL675vCsEbzkfWgKqb54yOdk4cP0lhbZdbXljqXDB9%2BARtYAoHpglxhvjd9ZZj2noxSgGDEwjjXJzGaTfdihskupuFiEROJSkQsAhEsWoNvXIOZXQN8tyar6HUhY%2FjLIQcug%2BwGm%2BO86uQXtAwWfKXE%2Bxz3HD0eXbQRWXMvlpTsBDgCaiqRNNp4P&X-Amz-Signature=66359e6837c348c8c87d899e79ca5b5c6562bd90d6f9f3a9220eb6945c808710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

