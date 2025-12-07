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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIN5HLZM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFUk49Is4NDapDWylXcQDeBMLZocVO9HWdnSvGWdEotwIhAMG5CBlNPK4PLllZjfml34rlPqW%2B2%2FbwHAJpABe5oU7YKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwmPZ2VxV2qAkbyRkq3AMt1HZnVvv99TSMG6AUnCPEqdIzIcY89h89YWhP9ZtsNAFjvtn037w4fu7QERUvdwEOQuZW9k0BRUWyxjmrVvqJgRgIJEtqewoSZiom%2F1r3bQ6x4c5OKf%2FS%2BY1Y%2BF2R7td5Am701%2BhLeY8WEICgwtasTyRbVmuiZQTpoDDFI6f0NJV8v%2FybXrdHG5igA2L06VUZti%2BKySjGanUbew9tZwWAN0Mva336QXGw%2FCSpfgrYg1ROFV1WjDTtvL9t24bE05vOwo8mXJNVbovm%2B%2BgdFQ6UA4Y5JPLyC4iSRgDQ%2FjCyOYmbgvimKHC7j%2FA9mQ2LYBvaZZbeP9posbLL0w3U7NnAaAhB%2BMSrQApCGl4GjCle7i5pt0f%2BWE1VJl5KexItxeZoTin1sNtv9O0XsUN0MUWKc9WlZNObGtBfYsI%2FmP%2FeVtJafrCsqivX3I3ZC2ZL6Xg2XhwEePqZfpWsB9%2BY38Bap%2FCL%2B%2F8%2FxYc0fw6jT3hha6CSrkIj3E%2Bqf9DCMnPOR867YJ2bovsFFe5vsE48Gxnb3IaKp6ewW3w0179Mq9VJhmjI8SAuyO8ca4H6a3X7%2BRSP7IxMc4mp5EI%2BvgvinM1Mgrbeglz12cDJRKDycdOrptkZIvJrAhVlsxFydDDbx9fJBjqkARFuYKRh63EwP%2FpbnRvuuVQ57cpunbQzrc9216UtHYy66KyFuyK9V9NJnZpG5H6CiDRIIYNfyjjXL7qC0fv9FBwcJTBG2KI4efaxBwikDpbFSH5%2FKegc9VrDLCEbfzZ87QGoeiwHrO6G4gZshR6eVWAox8yMoIgFHGUYa7HXdt0UDNVpo%2FG0PsCJTX3g4OkLfCMJ%2BC3x%2F%2BHr45QPm9%2FckwDK9RaI&X-Amz-Signature=1fd4eb6a02f1a83c98e2060cf4175a1d7ec285cd7f0fd400f566f4bc2a6d97dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

