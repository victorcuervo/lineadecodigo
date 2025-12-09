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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPLCMWXA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn5MiYkIb3yriLMzKMyUGg%2B5qOV7nIg%2F9qC82kdGoGRQIhANQ0QgNwSIMYG6zVGBZohIZpj416%2FuKEZuqKLa2eWbIeKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE9X5z2KMz9mY9VJsq3AMp8BhWHYNoEYxKYD1%2FB39LPqlV9Wo0HuL2QQ16ZlgpOFYDedac4OElbUwHqtmLJY%2BWRoFQIL18ts3cpdguo09cGzaFUXfGcNSXkvoRVnJsMXMqJYfNotMWLHsLrV8THIY9CFthMHeBxsdeV8a0S7yiDJCHGmL29mDYj6MxCjdClspZ9C%2Bh6tjxylvBUoqDQyOOGWTpwusHvUTSoWmhvWkV%2B21jS8%2FAbFHq%2BTxRysww9R8fDfAU90nZ9oDAwHs%2FoBqke9Ecs7pboOl5AqqcuyVV%2FynxmUlxHqxEcAWpViugqmqOOg6PXllqQVDkVZa4O8kxeW%2FZWq9xlwR7hQ4DEELov9lkFO%2BVyGfUPZ9baszRD7qGgley07Eor3G1RlHw8SJy3CC6OiL%2B3NrVMMVjY6O8%2Boq04acrI%2F7qIUO6TdfzaqNbyJW9FY0m0bVcJNVhY6Na%2BmelxhZG3521VMgKviUX4HYm255RVdHXb9GsJaPrQdZC7fj9ku1AZMJKV%2BCGwVtIaQR2DgtVoYJFo9RzKoF1MewVUcwFQXGQZWpa8gQ1DWOchJs%2Bnamees%2FM3yuW79oyq4ogQg03ZapxiDW0PQjIPi541snXh3lPzo22R1MZeP7qk%2FHaiCflfWNH3TCHxN%2FJBjqkAfrINBdr5fjVAKfvo2hXznK62laya8JRqwuy6TIvhulGJJn1%2BUJjivDo6VeTEVgSra5P8JFLyle6I085uebff%2BaDESp5IcCtj5%2BDe6Dw2p4SX7BbhxkE11356ZFNFIdXbrH06S6iy37neYDHpaOz24u0Q7Tc50R0zPtByIjdvJ3yJyTkKeFZgzQWjy4CyBrizlHAkN6Zi9R%2FytCA06TZHh1l6LpN&X-Amz-Signature=dfbef7f129a04333441ca55ed2dce68c84714fc3af81475cd24a2d222a40ca2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

