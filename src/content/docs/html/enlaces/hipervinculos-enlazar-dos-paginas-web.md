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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RTQOLJK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2Le5T9UHL0sPOWyq7oJYiG8uMyUWCOzLYEacGaKz3gAiEAsCbwTgTDj4ZTZID7j7z6aensNQiRHCNZoPK%2B3GEiWrgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnDKvanfPnEHynJlSrcA7tx8bQjs9DSqSkA3r5fEhnGvRpy2O7vQuMU0i2wsJQfq7o9Q3meVLB%2BeC%2FrK4H2u1vjZzzKpq8TQZpTy1EqjjoQNIhf7ecsPqNP0d16FI9MvvccrP%2FuC%2B5SUSExOgKm%2Br9Rl5NxxER8api5IewD1bea%2F8hSEPclMZvd2gld0nLZvGRCOHPAS0bMyoIwrZLXCqlT203VpwLnNszZ2c6ZWFrtQ6EP%2BS8oUMYJkt5JC%2FC5cWyYMpe5D2733ZIUMw7K%2FexPqGvn5pTyf09QJkZL6M46VqUPwfNtbYuf1fzaPfK9UzzHkDm4R2Tj%2F63ZisfSR5uAZ3BLBHi0qzH3CrCbW%2FiH60gvdwexUn1sfFDjHCJlF9SDb9zqTbSttMwGa%2BOFycUTjlHrB9jEbFOVlO7Br9aI3VEQP8S7%2FZvstSu8ZQExD7fjx4p5MRNUnyyI8RzRTQVtDXb2Jk3HgIqCPeSO1Guw%2BITasysDQ5PVijT9XmnpqFr56%2F2MWAU1S6s3q8WG5dBuv%2ByvPezLCBTV14yMopVwM9XWH6qny7%2BqFH6A05iErwHGQhE3eDs6%2BK4rG6yVKfKJ%2BAx9Rh5nRid2T1Ji2ZF0H4JOXe7YbyLBRAU68XJnqVT14txDU%2FwlBMyWMJqZ1ckGOqUBwRfNqg0ewkTWnnl08n%2FeHmsO%2BH3aaimQAjWEGU9PB3Gdsn6hKg5jMTdUwNtmrQMeFXYFeOrrT4pdDyjpJRgupCKDft5CO9r1QzKIkzAkZLmszJcrRW7fj63U3dHzMo4cjt%2Fs3JGKzca9cQ2rYkSs3F7uHXvKV7whwICfpYx%2Fi7iOwJtH1AtVTwqaAd6acwx0RzUfn64CYcyTzUyF4CZMjKEKsrYR&X-Amz-Signature=a21772f23eff56d962daec4e73b19590ed1f30d43cc7ffd0d9f6e93ec8ceaed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

