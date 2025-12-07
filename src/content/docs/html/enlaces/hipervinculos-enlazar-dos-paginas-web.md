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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDML4VQQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmg9cjRKUn8GLSQSHnFVwEhPOBM%2FHtWxV6dywsQFESPgIhAKvik663Xc9YgXH7o82NLieBc54jMrxsLSY%2FgBwyqvPJKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkyF5G1yqITTfeYdoq3AP%2FM7eV6qTXIxtduPIKOaS%2B%2FngPm6GWKv5TA5Am%2BSsUJ8ApsWraxct4aUAViHZjKP8wTyUoH4LLEYYL3SB3NMC91OrY39pishrezIwm%2BBv6MGPzVVkpVFP%2BQfYEynOUrgA9FSXFYh%2FxTdJanxXV8tW%2Fl87AlyUK7NIKOK0Y9%2BwZi8RQxtAJF%2BTAnzg2VyNuPsZxw4iq3oQ396yz%2BIC38V0zUiM5avDMbRoA2ONUDH11NSrCj9AcEuSIK3SOVAkpoPM%2FDT6%2FHIbp2iJtEXo2v%2F8L47RwDCt6x%2BZxvr4BLtaHo0avppKdlw6Tv4ToOORatvC%2FL7U0isxMTBExWtep3E%2Fzetp2zqQRCiE36sPiD1k%2BA14vj%2FfwICscE%2BzPD1Qw97v%2FJXyi2XGTVcygXgcCOw6%2Bz%2FGg%2Bb6jhE9ExqEZw9PN9O3Z91Yk%2FJcXBYMU2C%2FzPgkYgNfe0ksk9Pmk4bA0UPnhSBsM4ipiyRUNfTI464n8Uf%2FIk8UalhLlGZPf9SzbF3a2OmFsxEe8h3Umg2QJd48opClRVMEToIyrTZDRb4bo4TSN%2B2TBE00nArgc%2FSiYTg7WYgUOeNOY%2BwG4C3WvW0WFcYwWZfKk5y378m4YAkOSRLZRheQP7ubOULElGzCi%2FdLJBjqkAZxFlqCcfUUUDfLDvS9bpo8GjN9J7u%2FHPyYzg6il4vFmdUa87dIS35Evyt5q%2FO0oWGnjOUedo0v3OjsI3nqpCul0nu%2FRexOkZG6ogMhX5O4P%2ByTNuxjYafwfxo6EoEC4VlkCOASQ5skMsjde3HBnfq8xM1qbljsjo2kkwmrNLxsNuFB29mf17Hqf2KsLqvxgvmoi3ZrGh8HDbSRtatJQDJPbnH9%2F&X-Amz-Signature=faf6999b405fd325e6eff0b4a4bcc71b6bd96392078c4028a02b53fb522fad4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

