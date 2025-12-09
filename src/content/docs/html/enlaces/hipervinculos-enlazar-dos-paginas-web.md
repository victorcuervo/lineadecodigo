---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ITWA4A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoBxtJx5ISnxG8UKCJGqHAoPyEg6VuNqJjOg2jYCcCbAiEAimmkwE0v%2Fclju6jm5PhImtdt0zXsj%2FifS5Ee7Vu677wqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH6t9gEXhDg5tbR%2BSrcA0d7ridp1FBie7BSymN0wHMKSi3SlockD7A5%2F9bIwZH8%2BezpW3GSAHn31JvDpX5M2F9UK%2BRh2JxuqOLJ0iYWHzmi6zUG6jIjmesVk7ELtpyuXVga6IGB5tYj2q0%2BWMLB5VQsUzTxDMRSCVZn5D9OSJa9XWMU%2F8CN0ZP%2Fnuza4JjpGuQwi4picE1AeJbEVuHdCs08Uo1Q%2B86OCvrzJTJrjv3iAMTQHOn98zSK6ePAbQv9dNWX%2F3hnLvzpAlYaFBkLb3Cu1i1QQTOumyiy7slRsfqSbtyWDpZvEs7OwmfVF%2Fo1npwPzIvtihD18AWllOmtiLFNKI4XNC%2FAUZ39S6WFG1zsA%2Bx6re4CXom%2FPtyD6MbRsbKvSKQS%2FUDyobyXgb0CGwzyHnYbf4mwyTrfAIVW3fm0H%2FVIpY8Ix3QEcx4SoUn6laUFkflh3iB83E7D%2BD0Vbu4j1%2BbHqOfCJLjePx6O6N3Vu5YHRkGLfG8COVIFkjLFtmtOKoQZ%2Fj9rlGz8FYOKeLg7DL%2FbZMDK2X%2BfkF%2BZEO5xnu6tcRHRt4NflnzApWw9wazEG6inuwPxUBfEbRhpAPltPhh7klGTvGeH2eSZNSpFWWIz2LT5neY8staCEAb0n30z%2FHAMBYF6EFDnMJGY4ckGOqUBNgsz4aKCVvgh82j8B%2BqSok7ibuXRyBEd7FqunwGQ0x5GGef1c1uG9zUqC46sP8D%2FU18cEO1tJmI4D8ZX3QVHqT9MGpsmYTIACHLHCKNpeoyRhoPlZuOB0NLLqr6zE9L49TJ%2FOHyjoTDinQZmCzSFu8f63%2FreS4EOiH%2FXaM8iRympS82j%2BIoJ7l%2BezuJ7rrNHkeVKyzfD4VzLOvzyYXCtM9XiY3yk&X-Amz-Signature=aafbcec46976e58f57702173656d0bbe7bf0643a77eb9581b546fdd625034db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

