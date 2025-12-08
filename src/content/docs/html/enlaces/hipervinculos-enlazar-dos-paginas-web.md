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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5JDQWI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExIZa8Tu2qBygo2SzGWo5fuH0IBZIealZ9I2iXC0aMtAiAN1nvD3KWPdznlCkjP6M4VWbooBNe0y44L6J1tW1CKpiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLQnkv1eWeZsOB01SKtwDpNlpSLJdb4bRAGt1AMb1P8Mqn9tnzHAMUJOfwO3xnG8L4IhoKx20AbR6YkuLHlb8M%2FpQYaFKaWAg1LKxEuQ2F0G9BYaFvuh6f84n5p2nAIzKFLTTFGXpECRjt5jA1SEu6OYQ9aaL8o6mnu9TimtCIpASgfGEeyFYJ5onRxhARnhLaffW3R0wXtBqiE6pAkY1HE5JZpbXXd4t%2BztNAblj%2F6sBB8ciYNnfdOmFlPrPToAb9FFqW0dk16fOTXvyiOm0DysJC83HngtZMNC0N%2B%2FnToS761fxsByaNb8PUqkSxLVSh5B0u3ixGvsecjq5i%2F6c92KsVHGN3wLiflEit8%2Fxd0ePoX6GG%2FotebOQ0bFIdZCk%2FchhAKF6NbgNRwVrbYpLYAMnMlxag1El2Lr9CPiwoOsnj%2BlIW6nQ0tbXyaaaOHckrRl%2B6vU3FZ3LEWVvP6g5bBVxbPHN5AGr1PZo4sO00yc8jkNDbemv9mfZf53KnPtesybDoOMk4eLOZP%2FBQ3oBh3OHJ4hrG9EOBRcTu9r9AUJiIbBGv916jcXXbl93tZG995ICIy%2Ff8RV9h0uY2gyhJYy3p49hVI3MesXORH42OB%2BXZoflZs6mH9f0DnKHXXYCIFvzn2gJ0XBhjf0w24%2FbyQY6pgFrMkYQAI%2BLJA%2B2c7RE4eoCYQikF7s9nmlxStHJ9hvhCmy1yJeg3Y9xbFA3ghazPw1wkyeSgRUi6%2FNOFJzfWgOFVT3hIxLrkmdzHtR8qjUfXyi12ET%2F4kfBpCyEafsyJqUDI%2FaorUbDJyLhYohmV7MW0dqpvh4DU4Un%2BqT1XlhDnGttRpbPRp%2FgVdjT%2FdX0c1t1m%2BjZ%2BORZ8cf13zfxbpnQHEyr8sFx&X-Amz-Signature=58b89027c996d82224d8c2ea798ec68d3713dc1d61abc4876f2e1abd86e84554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

