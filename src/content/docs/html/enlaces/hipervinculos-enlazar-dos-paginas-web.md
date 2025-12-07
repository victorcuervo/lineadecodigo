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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6H575H4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5CmcS01mULz%2BEV2v2xFy65YO3UKqXfiYauG7tQuSbZQIgVTWc3bj9Sz8S0zLJcR7fhR%2FWtEfzUtplcsFIVckaTHMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK63u2n4mmo37x6urCrcAzNtBa0hB7I3a6sMq%2Fm2eCKJ%2BNZAA2fWXIUQ4u2AC43WEFJiDZFKlju8h6UmFT%2F0DS1SM1mHAbYMKiP08qX0ydI%2FdZBNf82Tl6xE8aWXXKaD8xSEpmchZC%2BVBh4s%2FVTXLlEA6NsE77A4ch8QCrE9UfXYmL8xutnbVFJoJs659jNnLBpylzMowCswF1eN9528QWQ50x3hMnXQOUZ1ZSrlQLb%2FEE4u%2FVv%2Fmx7%2BRZlikxst2zBCEfU1%2FatXclAdIwIFkxUD6EgVThe6w5AxVjHzzfhq%2BSYBd4xll%2BcBJOkChkbOsE4yzE%2FKGNprGNRkyQuNfcl2kAaI%2FOXn7vAy26ECQPNu1JZIqFsX0mDwjfcisuI%2BRXz2kDII9bjytfTANihVqzdsiBbSDRVh8Nlqq2v2LVX1EdpXgHk0Z3e6epoe%2FycErkbO29H7LTMkM1CzHFAeuHuLd%2F2OQJm9wA%2FPkFvK5txhiqowQ%2BP9PmVl4Xu2LdUB1ydRBkM7xeh8cfTMH8hXjQWtM%2BByE8BqSG%2F%2FhCzYgu1lecbGEs2iNjXyBYM1xYPV%2B8yCeYBxHkYk5dqr64xnv5R%2BtRiLHeUU%2FeeJYPHWdBhV5R%2FvqxvNnfldGqhmMwapZxBR1k4GVCB8fKUBMIii1MkGOqUB3HHhpFJV4E9epHEcV1AMIASgQF3AK1j46ycUxE0ORKSIIUa%2FVpOuVM5yXFdihrVBEIx0drZTA6JR7aN6YysEI7seGgR9ZhCQ21nvN7sG%2B0DE4JODev9LubXmJTfqcdrHbzVQNjNTHMl5Ebzza4j25x1hQ8LgWdXKjTwmtWKOKNWcjxh7kgEfABQI8InlmHf5kg09QWepagOH9R3YWP1Eelvbf%2BeY&X-Amz-Signature=767018cc5c3199c712e9300f8e451a2364868f3e79505e41c26462741182a95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

