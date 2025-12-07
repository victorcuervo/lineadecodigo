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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4VKWKO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoKJ5bIbFWAuNlQlVPqB1UW7N4Qa2o9jz%2BY4EUj%2BfcgIgbUht1slCQzVZ%2F1FJ0ngvxPPJbjLUkzoS5CX51mxyyYwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcI0yrwpajkSgsGRircA77Zl7sMUdwhFGDlrhwV4HlzDfgBeJXomHw7rV2x%2BxokQgZurp2nIfw%2Bz37nSOyl55dELY6Qb3V710IqjGHbDF82HdSs2RLrVy0oy1ECfrFpfiOWT%2FxhHtTBsaYvnsPtOf5E7nAPQSOUFauj5Q8FmbFJ8Z38jLvcF9CKX%2BZyADAXRfR298O8JDqa5pJuIgGyfRpj91G9mnS7ECyk3uiHX27EoT9V8Xr2gGoIsyGEA7P7IoUlyx10pN3HwiDXcW8gIDfoMDTP8rb1Iszzcp7Is%2FPVzvKUkUTqRDMZXmuX0%2Ft8L3Ism%2F0wUYt6%2FWNd8pjkc0M6GxfMW5WQoQsSt6MjzfqKfWqTVUVTT1XalZOHWnQ8GqogBWDH8mzqpyjSrt66C4L5blhwbQbPRjdhEe5NU9tunER%2BvN0912HWeRTPELjb9p5V6XrFkei4Ok27PqeZi3qv8GABpIs79ign82hn%2BFQ66IFxeukNmHBTg%2F%2BTJg9u3BybV4%2B1niLoI%2B9ogHYLhFFQHZXapIOMveE1QPjMh7OEUEtmBaSfKTAZBXkBO3O8Pf6mMyPlxHJqdLIN5t1hfeocpOtit00rwvzYQXjgQaS9dPl3GbFnebTFCDLu1WLJhZt6%2BXHLjPDXjUMsMI3I18kGOqUBW2PGsbd9CU1A1nYJd9RmIBfnsCECCRlNbOl7jNe61T0J%2BpPeXoF1AZqs%2Fj5dpsjyKMcWP46B0TTqTj6hQFSQQpWrpI%2FCkQgi45o1aCfYyBRcFfA%2Fc1jOvoVtvgmD3%2FlpVJSCT%2BzyTA8Q%2BzUc9Pf5EBVJAoaUFhethmq1Eb09ZdEjq4kc48ficfeLhpvjs7Bxbnvv%2FxBxvwUHBJOtjdhfjQa1%2BUwN&X-Amz-Signature=671c8fe82f94ba1bbc00992079d44b55d6a8ee235d84b7149781013c0a905e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

