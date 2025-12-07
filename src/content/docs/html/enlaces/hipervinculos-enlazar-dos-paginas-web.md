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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYNYDRP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfaWqzkdllzAhH0KvHNjnxRP6upnvX%2B5Eo5%2Bk9BT78wgIhAJGvQKmYqhIdloCVFUyer1zCpArt5DqK78xsgAwQWXLxKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRO8l3s%2F83SKtTaUq3AP4k0oumr8opkEDhBFyZ3A5StQO6cf2MGUFXWpcLSQBVPl4EiNDcE6oWdiBmw5IR02mTFOXd9SN4EElKcti16p3y3O1IU2g22m7oR8dry6bGDzRCElRSAiTbGzdyQKJv%2BCkWx4q6eAuns7mpkOSMW5FQYpkzZvKT9UsbDWm7cGE4WWuk4O%2BHUCZE9RCWiheYY4hHN0M%2FrBr3np2OcTJ%2BSEsNzDD8HSSnzieLD3fTVV%2FMvrjPXQWnpKxBWZWcIUHBmK35V3vp3ySm%2F4iihL0Mv37LBv7Z%2B1FAQANB8LvtCRoVhP4k0NilmPMvICRrVSmTHcd9vGWmvbc1K8qGq8R29wiFsCF%2FEu80pVWClzuzWGJY0HBS%2BSzXFL0XhOXKmiQMiHf3bh4tymBivGBfwBLAzjvt2TWHXUzCQy2R0U%2FkEfeQdnVdhLMxK7CNXmm5nepap8PGf%2BSxvHOsxX677OYOqpl7fs8Xpewc0pFGvxaIsq1iNKaYWgjopbTq9434QIR8fTYbvphyXnA1cAK5vDxqcCEnqO%2FV165sobhwE4SFlnzQJcvOqM3BawLjiTH9fAnmgC23xCLJreIclyx9bYKEkIfC%2BtkwJRo7XDnB6l8yFNjfIAeFIbacWgYKvk7cTCkmdXJBjqkASAByLrdr6vHcqM1gLgF%2FZyStBUF0V6PuSbvwhzawuaC38dmNC6fXj5U3tcXcA2LREkURUWN9kqBpjy4Vnd0QsNjv3BqilCRiTnXP0%2FATxni1zUU%2BvBOfAle9Cjp3zoNHSVw35sCrnsa93lHp6pl6sQ%2B890c6UCf9o9spEnLDZpPvxUNTSyY261w%2B6%2F0qeAjJc7ImeRWCFhlIOnRvMO4bi6IQbih&X-Amz-Signature=7ddb32daa57b35dfa1cd21b8246e0212b323f8239701c402477ebd45a23317dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

