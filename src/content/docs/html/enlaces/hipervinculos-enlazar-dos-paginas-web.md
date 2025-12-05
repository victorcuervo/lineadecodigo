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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBCJ7HOI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvNhb7XfClafRF3v6TiwiwxGVcQxoTIzJlVzw16XkD4AiEAy65E0AENrS19TWu0lLifchzX1BAqF0ocRMz%2Fuo4wp9Iq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFYJpyHZ%2BlCpNo5H8CrcAxfHvuILul7n3kcdtQb%2BsGifyD8BjDsBmr2PCzDxOcmeZl63o7X1whvTDbAZB5ZoOUUJRS07Z8XmFGV4z4UcfuvY1FbnxkDY%2BNdVJr1bbc6SyKQVE4%2BQ5nAPpsZaWS0a8nQzkC5M9FKtGKqPToXmEyCDcPOtgFtuI078DAz73a4GizG8xrWcjBI%2BFXnbsKL0NuCwJTljcb%2FSw%2BRSkFCeRzvtUdoEoivyb4G2YyI7WA12F6XLM431RqvTIjGmumehvJ8hnqmt%2FABN91FdoZpIDAHOPQEV6VXYNbiAjeXXDZgX4vpENxuReGGR0zg3Yo4MdcXkezibWncL8Zz030V7T14WT8utwUu0nT%2BtI28kE4Lnm86mW773vGCX8zFgydL6Nt%2FW6ME6iyUoDvv7vW53Rkg9rES5nlaQXafay7aVGP5z%2BvvYmAQbyHeambzd%2FI7djAjG7yvvcHclWcu03S36D8Za1t9oG7KvItQqRayAc1weuupexxON5MmXOj6nlMMLbcI5o9f06prMgoiFkz4808YrjYGtQCYp9fVbGNcB45bq3g796JEL4qPS2LinistZIpAD4Z4X8jDGStM36SytPYU5kM%2F4VAYGCnP2sy3kBzOKNRwdBJFCSsyt%2BuERMOKMyMkGOqUBxlCVRLusW47UVLO2miqhp0GXkjOSJheKCzjUGifsUKAT25X%2BZWXGs3hJlURHG1R0td9AHLornVz30DvkOHWKcL6D%2BXyitJSHJ1bKOlTOAQ4Kl%2BNBQEKmLi4U5CkYP4MRrmY9ET00guzk7tGM4DWnjw%2B3GqmrANed8Yfj22Z1IlrJ6fjFRPdMYUErTAa1IZI9d6cfKrR4VgU8XG3ky0xIrXoT5a1P&X-Amz-Signature=d50371829a0ebc0bc64f2b218daad96658d3ed7e5c17e5328accc2e5b8494084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

