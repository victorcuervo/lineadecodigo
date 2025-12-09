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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5XR6UQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwKqecbBUT1xNi8TjRm07iigfjeMNbMj8v9oOBwoBh1AiEA9gCE3H4rL24jm%2F3ch4ctbuy6MQiejEXp4MdeuVzzTIoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIt6DTzKcLbiQI1XyrcA%2FUFYwgLNIgGdTKbGMSjaT8ApSDvtKstotyPW%2FEPA%2FJmkbSc9m78h2eqUM%2BauTBWazQuTTuKsW%2FCrykQiCXjkwcqyiHcUgO7u%2FGtt5YKNIE7EtVNtGU3o%2BWwFkREC1jnCZmxhe5xL0bINc%2FMsEQ%2FeTODMBbCEyI%2BXL8LLK%2FZmWblvxOYFXWcSbHqFZKTF%2FTrA8BcwkHBhFgdWcorzN9mY84BNa9T2NZOM9zOhW9dAGmkjpYhDXrzh9eqTpaHuUwhwuyOBdjHLb4q3%2Bqt9q9H4sFeSX%2BwWn9XrkKzfdnN9DAENH9l7q%2BgZFSwcjfdQQURrUmToG%2FsYRRvqJaxG6tXNxiY3D%2F6PCAiUpD9Me%2FysuHuv3KLwLqIVL15wYqeBW4W7tBJsVLhptJGI0TY3Wyy5O1SCnxNYtyo5ENZE5B5FfDgLVfXZrFtnAVn3qeQGK8LVVgYqiJfkp%2Bam9tZsWyZrJCdfzO1iRhEpDe9IaoiyiaHz2t17feqdbyAO%2Bo4RNcaQoEELkRiD17tuK7AboFr4GUQHCFeqJhrFuvO48PxbgQ0zIE%2B7VNc06gsh5aUgPh9HzsfJp9vfpq9%2BGMO06T7urLmJ0GNBdAcjLNFEdRcC9w4fVszPoW38tFRgT3VMPvk3skGOqUB1uIpBjJ9Uav1xFXVbVimAiGei0V22PBSTYUtzCrw8kYdG3U9Z9kIEkUtLj7x%2Fn50QeBMncaQOvSbpq9WomqWDR8yvfTpl9WUo4dDLobQ0leVdjOJdj7hCCbvcqLIyGtE13rfh21RVb0jEQqPZKZgI1dVOBbJFoCAd%2FGaDzyuvoFLL3G5L7U0TZ2mPta%2BwjwZuFeK7eIby%2BeGA7A5BSB%2FR958PYT6&X-Amz-Signature=2b914099910f553b5fd9015e4310b4d116d6280c55c3c9962fa3609361c6f1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

