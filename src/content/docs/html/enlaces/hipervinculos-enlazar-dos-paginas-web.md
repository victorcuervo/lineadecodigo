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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V224CC7Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7hRVaqSswzEgdqNHTTZCNRTj105xb4t0Gw7BX9eKC2wIgZaR0YQ6fNEvr9nmos9O%2F6sBUz3uwu5loatlBqwV1yfkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6RF5rUhEdYKz%2B7qSrcAzZG0Azi1GI2G1mN4EQ9zlbMSo84ITcYYKtiUuYV6uGoYA4YaWikOVe%2B8Z2gCNuuHAeOHpsEBi%2BvuUI1%2Bgrh31UelospY9gpXdntM18BvUfurpG0GbJQ0UoSLvrSBUXX7NoWWoDdfxbVfu0bNjQzMQ2i35zf0zUBEYGmurazvqc2XoH7qNDgvNQ7qGpKC7zGjrHwPRtEljsIfFS56rQgMDxrFXXYAJO3KFh7l%2BSF1j2Dovd5GmXlm2Dgsmz9EonjobSdtdSeQiu5lrgMStvZA%2B1sjWvZe0ovZvtnfe5EjmcFQo4oyAJ2y0HSJkzKCRQDQeEqCedsbcHZnwlxwHKQNl2RP6TFcu9v8sltv7%2BSvYVNvt0PYdhfHoKHOmCTEPavN4Y7vkWP%2BtDMVgOd87oYg%2F4e%2BfltFEG61u8uet8UQZibMhjlKuNiy5sQDE8Iaplo2o3GbNV8xrRGHJ6joeZCYwD9HeEa2%2BjFqgIKz5Nd28AxX%2FBb%2Bjkab12pEgLi89DnR03UHHXUWpmhifeRIEisbNxELEKpVzBQeGbtRiHmTLwrbXHfc4ZJqHzK%2Bsi0yWmVJxGpe7xCwnwCx%2BfXsCWOVAGSqq6jn3zeC0WDYTGihC6ZZffD5Y246qYIYhcrMP%2BT2ckGOqUB%2FZ4D3W0qnqIq79m41iCyfNgGSf3EDWg8kz7vnTBQGhL2Pul56BRy%2F98oDhY1QpNnBUCDtdsoTfY%2BK1moyCMTyS1VlY%2B0eYqQUehM8%2BElNdiYqugsCju4Fg%2FxuGaobiNNYna1E0CYP%2Bh3lDmJrIuCzuq03oJh0RovwUz3XjipULlXjqb4JoBCKobo0Zp4%2BggXi7482N3BZnCsA1i%2FDmqmcIgLl6xN&X-Amz-Signature=454f7531b560f250b45cf1fd9f6cfbbd96efe46f1bec626be327dea47c79ab86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

