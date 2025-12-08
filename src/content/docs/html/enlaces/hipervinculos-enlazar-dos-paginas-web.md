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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPLTXJJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxon9kA80FXh1mAjzQ%2FQ7iSG2%2FoeertESdmHotj1w0yAiEAz97x6NamgXMqc11FdEaPoIT6Qu%2F%2FDUNOnGkBfGIqbwgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXBc%2FIEKtwaRTqg7yrcA6XtiuAzOT%2Fn1NpeeP3C5h5ig2Rz3GFfS9%2Fb%2F6vJLN%2Bg4do39VXYfoqhDG3tcxa85u5KHtjQTZxwmnhpeT6vY6AtB1I1QrIt9NwB%2FnY4dsc7YATvzBvQrHd1EuhCpGEvIga%2FrLNnasy3mh7Ot9nqEVMzxAsaP%2FaZzk1gh%2BZFoutcG4A1oNMH6rYXLt6EF%2FoeD9I6EWmSOyyIY3z1zkZslg2IomW9ABQ6%2BN1cQiJiBSpDd5MjRIVFlbzMTPu8GhPrn3E%2Byn7tomT89hOfaZ3wcaqBhDtEaixKhECSK%2Bg1n6DgRa%2FLu9VMJu7hlA2ZRpPNTMpwnUyuz%2BIO9KacWfCe%2Fv1MVkMzVEVN4bLxKocbnf0qXrokpguMzQfwbBoIF1G2XxfEKZQmQ3xW0s5wTr0isZz5%2BI4xEst0ROYvg0s4XqeqEzGT%2FJS24DzYfwNpZiXXsDuh%2BwWn9ny2NZq%2B6rew%2BKrpZTHQ2KAyaGc2NBxXaVwlyoEebZmp34JeFVodw1fIFqrOOUz1c37Ijvuqt4hA%2BDKq6BjzlyBhE13fpz6dEPHiQcpAmu3G8g9eDg783tNua76WVjBi8EM96DCvW58qCeQEPsVkC4CtIwzA6fNgsozKkk4IL0OgHkhaTWqwMPLy2skGOqUBV4lteD0l%2B4mtL5RFcnRERITZ7HAMjflpmAVqwqbeuMQThzgOXoHv9okyAEIKu0efbn1p3I0DyqeC7Xt7nhxqqkPN7ln2g5YHEUz109FvpRincGezbERDSlNi%2FzhOWhQhWQprBM%2BNIsKOUiap3qrYPOxJsCIaHy4jilD%2Fj%2FqjCJdwe0ud2I8Ob6uf6H2JZulmpgZGd2U%2BMQFKLe%2F%2FP9QwAGGhAT1V&X-Amz-Signature=cb9cae338057ccbd194ddbf4fb10503a71e1b551b39728890f0be42b83ba85d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

