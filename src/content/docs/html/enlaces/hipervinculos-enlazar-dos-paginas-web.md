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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H5HC5MR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5r8T%2FStjAswL6t1%2FHuyhcMc8VwSBwdDC%2FFLnGXIa%2FrAiEA%2BcGloABXkx5w9MDRAuPjRetWNNAc%2B0P7%2BbN8baLHdQYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDC7lRVg1Cr0fo31HOircAwCxAuIR2CDV1R4pxwTfIfhz8Imz0ct5B6VjZDThrjkocLQ%2FlLiN932Bsz7Y%2F0M4QW2HrbJBBQeFe5SUxfuRwMe8mFbliATv%2BRnY%2BrTjJEh1gXkMTNoffqLJFpNr6M4LwcWzrKREKKpfMNy5Qf6Zv2yaVy88uKmPUARPg4p6WrIVHl9sqdRkXrwmxLMSc0jX457KhQ9DohwX%2B4LPVZlnUKt0CsZNYcAheVi4S4W9Fagla8RT8%2FOBeYKVplWYtb6%2B5loqE1tqJtbhlWeyycdh43YatP57SHlqelOHdCTkKqx1NJIGxerGUdjXgYOqUQLqjpg9M2%2FqMRDXDFbr1MX81IvScOexRnBQkwwCU0%2FSr4l3TjgXDYdB%2FXGtLinFbdmn8brQV5MGOm5eakY6lzWV2ankhgMhppqy9cv9b341vrihIoA54dNQhOKkvMYJ4kF%2BNZq98r9yDeNo3deGOzOSZML9qBbAo7oYLrxtvnv3c2WvcXcTdVbKiyu0sDoc5QTmRMreU8DSPAVttt2MI404xmxJel5QOd4EnbjpGfVwLMjzXlTAbxHZPk6G3iiwA0GKHp%2B3OdiZUfT3rqZayT0eMimZL3rxZPkk29hxQac1Gm%2Fx1fCO2cil2uNHb1PMMJOMyMkGOqUBe9tblLuQ93gpG3iiqhHxhUlYB1kZYTvGjJEj5nLw6P2BQaOcetyMX9KHuxcrOU7E2fDXjWEC6zKnHpKCE22t4qNTHucEDWT%2Bo5GibQdGhVwnkwshkG5d%2BF5itqvSTN0zsdPzlm7VZKaFVRi%2F4YQLtlW3%2FXdKeL%2FyxNFEtfTMoWZ2KX6tBkVB5z694i%2Frp4YRdxCeQS6ENdFrjSBZHC9G3ZeFewqJ&X-Amz-Signature=4ed51737bdb1c7a1af2f5e45e84813c168c2c205cfeba735ea162953bec94efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

