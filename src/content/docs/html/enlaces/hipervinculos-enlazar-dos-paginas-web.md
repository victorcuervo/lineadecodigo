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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF4A7G4V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDurPxlKO4ymRxtRFnzD1bGtncLSz%2Fgb%2BAMYVcug%2B2ahAIhAPMknq6aubJGm8Tv8es9nqh4heV1sraZy9nUfTq96vyJKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX38l5UUDQ3iE%2FtWcq3APplJa6uXvKE%2BX4Lj5J%2BMlfWFyUH3m8laNeiEYvnz6JMw6s5PxiOZxYrcXbEw7%2Fj%2Be0a06q18BbEDrrEvLCL7x2vF2XQY31VrkpkNGwzed23rgLWukA49SOWxghmhmVYXd4YJaDobU38CwkTzH65fYDJGj%2Ff94nS7rLUIgZDMIuIxIsVNeblwQ4NxkgXOLhTSwh5zgcZfayAkDTu%2B8F0iX78VPIJG%2BYHX%2FKg%2BKq%2FZjeHpMXdWIfWVlmRR9mSwsJZrQOqf9XijmPgegiYtXZPTd2%2FhRhO2JY572KEV8wVsBjUTXUUqa%2FM4k3JSCxouLZmjRXKl07A%2Bd1tGXmJhEj1Vo24yoZ01buGRfCwwlDy%2BuYA3Wpw3wvwINGIqcNKGp4OoOtAYRhuBre0cm7O4xGzmrneeUHhgciaYjl9etLp3MBv2BMR6MX8y%2FnfKS%2FgUDHRtQVW%2Fch02chjHPIh3VA45813OtZ5Lv3edkd2%2BKNLLH12EAhZib6xSyz1XOW5gZRDI4hnrn897ky6y6TWN2fqkIy7RW9zv5hVxUim4bJK%2Fusn6Ke3wGX2iMMM4tAd5RJN5JSlDAgdJMBv3Hye%2B4CgeNFxMYC9XPr1dKnZTE4eCg6OwoCRvwjDr0oqR9cXzDiod3JBjqkAeQoRhaCSolVzoTo7W82YUZ0%2Fgpg%2FILtel%2BEWJBl4NXOB74WEsm2inC0Z7gJRmSjYzbUmJE4bbkxBzZgZNokEIDtzVJM0uWBQHcZjoy5AEw6ZJA4ts%2B2EYwwXR%2F0kFGXlHd6MzPUYfH3KDm%2BBt%2F6CX6OjOy1%2BIlrSuv3xi6KDTeDecUYE%2Brs%2FHbl83TUGk3xEiG909ATteUvza%2FupzVFPf1kiuby&X-Amz-Signature=2c6f2c5de3c8711ebd7ab563b4e550316c15f22a06aa5743130aeb882338f500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

