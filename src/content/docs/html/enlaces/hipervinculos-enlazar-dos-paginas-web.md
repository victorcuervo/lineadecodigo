---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFQZIBNG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC4GWwM0wwCk2q%2Fc8rM9h4jfepOfERcEtGH%2BhsTXG9DdAIgK5K4Isz%2BEVaOA6vrDHfV%2BUujV8cYwL%2FukfMNbhjvZtMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDP1ir75OfCkE8ruynyrcA%2BqGn%2FgEvg2qwn8y0Sy%2FnaVvUAQy6%2FKEHZQ9LfyYB2MC7sbl7Hbg55745C2DmWVUs7U8P9%2FKBBPcYBLSmD%2FPxu6ovLKP0PtqRKZce4sxdwNHRDIdO6%2F02xa42eorxFxC3icxdHupqeIDC6JZ2DKgt3MxBsA7BHa4T%2B4tZWIDOEZkepZ8%2BtXJehVahqhygGjssIz5Mh6iEn%2F4n%2BSvN5FUuZVkgYBj5gZE0sV%2Fa2NDtKAHYy%2BycfXkJwPbJe3aD9CRzpDEW%2FOI%2Bsr5YP51aIYRYHvzffBv%2F%2BMnmSQ4erEkRvQxGW6JIkfFTz8bM3g9h1KrKldjI7YlWbBdrrFONszyfNHqIEmQwHJ2LNzd0359EAZgiOBVfVV33NKonqOvk1nGjCfNKhpckwvG%2BRBNQC7sLIwHIF6R3b52OJKn6wldduekZSYTEnKBkApK%2BG0%2B4TQU2tKXmivxrUSh7hnahal6L2eMnj6ftfCW9PKtD41aabVgyhSkioJEqTdc7NkotFpmDCA6FA%2B0BMTRJEgdmUAZZiVuyfsgX1nW4fv%2Blq4jxl2d%2F2hEII%2FtfEHqp5PLND8T3pkbP8DUSLMhe5FCYez1%2BcgOR3MK7iNPvLm%2FWPVHpgHaGwwDZ8xIbKz3j%2FhvMIzzw8kGOqUBw1FryOn6lGo%2FZ%2FqAC6xj2fhKQ38B4QeRhArpNdj%2FonCWdYkSB8OazA2yWbcE7TSMOj92zgDrN2Vp430fgNDBNjXmPx%2B9iZx7KE6iv%2FEfa2zfJpQtY4H5qNPzmVWIctBksQ3ur87cbY2UUOztgCFc0OjnaapO9mbEEzZv23wcLmPrjOI%2BWeydCAwxN4%2B0yhN9IeiDOp%2FH6MiNffgDCLOou%2FmxXJWc&X-Amz-Signature=497025567b196650813860822923abad89aa991046a187284a29a5b383491962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

