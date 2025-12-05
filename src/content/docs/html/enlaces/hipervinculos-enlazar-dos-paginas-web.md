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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MA3VV4W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaLjOXYAp1whWbfNdlrvriRc1JHkLAjZa7KQqL4rBqDAiEAnqHmWRrLZ50hkhcTXTBCd%2BhHGTQ1Yy%2BSGf26MxKZwi8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKySqYRiS7tAc4A7hircA0rFZNzcLwZqwrYJ266x3WA28BzK3fDZ%2FxwBYhjoIcdC3XrNZ8G3k7cLWLYCwZOo5yVBxsJxaUxyOxR%2BnfM1czrNRky2mygN%2FV8CZdNqo0H4LzYumu5FLEk2iZBMlJicaoE3XBAwOLfLIOMY03KpbuyW%2B%2BVMGsMhdvzUDaBCIIoBTTLW7ICa0LGDTorojxPQWuJ%2BxiJ73k850d70wEa8PRHSZBpTHj%2FXPU%2BTTgEkCmtaCrYsMvArFkSN1Y6DT%2BYI%2BbtxynJd9Xz%2FTnjLVN4N1pMN3HPN9CZXavnycyy6nmf84DwS3hZpNPU%2BcDjzQifWh6kuGpcYy584ulzFpm1fEKERJMOyl9UT4l64XsGxASk6le9MBn7BJLL52tjBXlv6amFIxE0c9fK%2B4jYmvN5BhQRgcR4EN6kKUqTe7c2NMHCQD9AOZVW9A9hcdr2mxNfrYStMyQXdd0CU%2FUwPZ%2FP%2Bl%2F3A0v55t6VZ2U1ZWtlzhdV8gzkPglAJbHEudmqShfWkzYvZ0UEZ766db28%2F7kam7STlOWVp2VPNudMO8EKlCYyFkZEDZ%2BwK0L%2F%2FzIAiD8MqwXqC2KG2k%2BTo7bVIllnUPzXLhhWuoq%2B5AgSJhT3qJmVbsO5NGdSahnmFXMT0MIbyy8kGOqUBav%2FFGrWflFx%2B7SUYo0zwf9j3yABYT4dSCw6Jde3dEjCNQECOcZo9%2FbyWFzweW2yKyOiTas02x0L%2BgRsSthm3Dbyuc5kZpj%2FwDgzRXHJ4t%2Ft3KFHnhcz2KMauwhmN52m9LDQX8z39G2Qd4SpBjasodrKla7n0hIJez0KoN3lBCK8R6u3WDlF%2BLuiFfeKWi0qn8k7qEPEdjj9549RS8Lcl4FW4%2FGpr&X-Amz-Signature=8e4aa700aa8c3e5c162e6e40763e3b99f122c914cd251f3c9123605046d0238d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

