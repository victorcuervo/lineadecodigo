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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFP5JQFV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOv9fFDhCkb9N69VBtl6shmTdIubaOzceHX3QFoqW9xAIhANSxkcLeg7Ci1DifpUaafdG6msjjvRxBFvIE%2Bu1d20%2F0Kv8DCGEQABoMNjM3NDIzMTgzODA1IgzBqJqCfjCr25WX5e0q3AMqq6kFa0W%2BKJWpfXVIrCDmSqWUutMDqOCmb7zfdzIIY75YIEmh4K41hulGTH2BCK9R8leHfUGBIrAg4ICkYBuEwnlklqiCfRc%2FHJuFaNGZ%2BXs7j7QWZ5dtwaYor3IZVgEiVkZ%2B1VP1gXImvlnIRzMkXIOLOMj6GJ9rE237LS23In8LsPFL1ZDMbSKRc5ldeUeaog%2B%2FmMwoNlHGDj%2BELEgaaKhpLVKJ6PcW58Ar1tToB38S0QdyLbQljsFWb%2BTPfbnU6XvTbpz0R5nKN4cNasHQfk2hh9jYbfcreWQkKO%2Fcb3Y3XeerO%2F4JluYwCgJmKNMwGt4CG2v5jSCQKkgannGZGU%2BaVU4noJXvN6YLMGtUIBOo%2F%2FktZM%2Fg4CmKbxmzvbK8Fg86o%2BVReLXbpo3Nd3m%2FXCo6KylPbjAcs9vlu7f5OS7WsuVd4zFzGskqIpxqgvdX42GmNacn0q4pc2ewrhOw9IC7swXi3HFWwFwt9FtczAPNg0fvImvXpkIeHZIECdr5R%2BD0VD4i%2FUP71zJwmpS5lRXndNA%2FBTYmTLaLOn%2FlacXCyio%2FUYre58HtpMlIWXqc4wpvewZMbR70NuFN4U%2F6WaFP5Ws8FtX%2FkIphbaxrE9HrRxPckuMlNq%2BrYTC098vJBjqkAW7AnbAlIvuaJ9kcuC1Gwe1Xx2ZkfGQYJ9xp9INgb2COYjOnEN7WBbUY%2BxcNHCXUvuz5OyMfHdEavqmixouHiDSev4CCADeGBhwNA4NHXIeasWwyBpqQGasNImfLM3kEGRc8PO%2Bgqsgnid%2FQSetNG60N%2FLEw4DUzUe%2B9d9oTBvmElmzSp%2Bv1zALzlCjlpD%2Ftbts1VyD44usAsn2%2BAQTrmUU58RxB&X-Amz-Signature=c2d11f085793ae6699a197b29c6de934a768e403e6245d923519d8a98b1266b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

