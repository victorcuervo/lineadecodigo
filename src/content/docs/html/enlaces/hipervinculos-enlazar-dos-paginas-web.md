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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSKVM4H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8%2Fpg9%2FQ3KS5TI1H7T8NhRHesAhz%2BTwEfdI2n3phjtnwIgLSxIL%2BjJa3sDhckpAnkhxbrqQMzSkbwm%2FTkxpJKXpMYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClSg5BWvzGnTnkyFCrcA4TvPpVGGAqrOvN575ystRLvYrQE3vwnjlK%2FkYOISZM3WozjAxMK%2B6YncsCFwl9NR5bAf8fELplc3%2BDzLeY2BLP1gtWp9VZyfWz8iw4rU%2FLx75DQ23dWg6uD6WXhA99hngOKDSQdN8iyfk5xLkYPa5VvPQT9wDWilDexTgogBOT0gpa4C3g0F1rqWW7QJxbhevWojCyKNXZZKfHXqFPxLhzZgX5qdy%2BRyloP3I68H3PdS4WMf0fqiN3HboExUygjLd59ciAFTa2Z966jl89tflwup5%2BNEyfZNY%2Br8CB13e2mqQMAHx6ItaBoyF8hOsugV3orGb1SX7DqzFkwpciBaWPxLthhg72gR9HPGO7%2BKnJ1TWYvQlSJo5Te81C6gbqI5Lxr76S7tOxtXSWuBgRkO2M3vpYD%2Fe5oGsapvcdppMjq8uFN5YnjGGuBn4gavvbP5VsTTAOS2fBAhsj%2F%2BnCnWlVJyy%2FSnRzGayX%2F7VCT0lZa7KGMsrWViAaRRRlqSIO80Q%2BpLRaYwcaowJJg9gpkScH7UJWfxSgugv4pHS9iEdbuDm%2B7ETIpndIaZXQFZaDG71CW0B9Thy6h%2B0fZPst431p%2FGqI0ABd2q9h9fWAo%2FeU6jVISWvzTPn2AWL1yMOLl3skGOqUBNz9PoowoHrqDPssw9tez3u1QB0N14Y75qr04r%2BtlixDbljTD6Mwg%2BsYKEvnE5di4tOtCbvhJXOUawxiNpnpqDzFN6MGxOyVwu%2BS%2FWa%2B3XdVEqHhwH9h1r21A51nZOdNq6GKtzWoS9TBYcul8jnfBPkuP722GnuN4xh6QGQz%2Bt4nJH028yDyVfP3WJQDKKVi36L9arvAFDoTi81QqYHi57WM%2BYcOZ&X-Amz-Signature=f8bc2f0fdcae88d68c5fea231ba30123661d96ef872bd91329c19952f04b095c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

