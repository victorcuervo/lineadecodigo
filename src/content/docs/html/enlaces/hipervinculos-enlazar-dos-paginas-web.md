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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQWBRUDC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw6KXEQjnkI4XKaG%2FQv5uPJqkVLlHXx%2FhYdmLAHd6b5QIhAKv5zYEFl%2FtqdngNQ3menQgcnoAumrwdbJOzsHv25hmLKv8DCH8QABoMNjM3NDIzMTgzODA1IgyM1XOuGDcjC0g9C10q3ANJdgoHQeq%2BpO9GFwbInzzklMdQXLHqcpIwyjR3B4InMQFqvdjECcIieCFJsF%2BKVyuQI8y%2FJHIZIxEKnFaEMSbk3U9m2XZ%2FEXvHE5knqGlrMsV09l5Y78n7NqAmbMaGaa%2BkuDnvi39f2Tm5nCIogJmLWB2BrcdJgD9AESqzbEQ2mDNZyjZFGKDlU%2FyLZXKa%2FQn%2FQ4LlbiQLMXRwE4WWFM51aM0GZoXIblQdXIzOAhHtzh3yo6L%2FTFNiJ6%2Bwa3mji4wXlaBsSYNwDyok5rl7D4rQg%2F4%2FQ0xzJnNCQ%2FH3fA1jF1lMLnjbj0103vqR4WT3QYkzVnsvAGL98N60Bm6tr%2FAoN%2F%2BRj6GozeqUmGR7OZumy0tpzqRK4HHlNk5BTf8wAqUZGV1FV7DGyHTl6CxrV%2BIh%2FeFBA3ippmsf1g9qMkveNKu%2FZWqOXulUDdF3hCDAF2hoZrfHnLeFcUThx7WM0P0c72TT3KdRAUCKU7bkSjtEKi9927T%2Fr05rapIOc6w5i6OaYoblooyWPs9e6PKOQBDmbbQ16rk3hsN6zPOICekxg3bvNnDTBIToSl22%2B92NlSUK5rsxrdVqqKsIzK0zJVE%2FytuRxN9hBmmNy2UENSxwDCtrbFa2amOtbVt7jjDC09LJBjqkAWhFASpI95LCA2cHZYskFXVLoKHSXFO8fchF%2B13kG%2FUAa1pOe52tAo9jm2XuEKVaGsgKrLBGJeJO1Bu9F1dOxnHKOl5ytCDGXvWpYvxPp5p8WdKESwitHwVdVA1j%2BqIKpjcBsNCsIXdchuS9HV8KYek9vXWDEjq3Xp%2FfhiGX3vLNhFsUufEGHTUeOAFpwBREWsPK%2Fnw0IwmyteR%2B9AYDDWx4sXDN&X-Amz-Signature=db77d99e4d7c3ddc60f9e96207c3653e7c3f0986e1f79f3e5c015ef6bca85b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

