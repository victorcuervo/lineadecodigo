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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YVZ7UM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4LkQbLPbEVOi3um%2B%2FFESTIhaRWLj5mXHAv97%2B40uoqAiEA9fMkGhsAqBGsfcMary%2FvroL4zdEuZFwcweqn9K51H9wqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6x5SVky9gn1Z7deSrcA1rUqihoVfakClCFbDDhuAyz3ygm1ShsS9j%2FQ4EYkdJuA4uuJCPb7bB8E%2FlqWBcMXlQM0YUTJFL6A8XUL8OGwzSUwvJnnHNd%2FksX2a%2Bjg6dLbAWXElKdw00Vcax6eF09xhjrDjqDVF%2FWPMpRpt2GfiVu52qwIs4oryLiEQoTFCLoYIyrPL5qcOHrEYm1Z9hQlL7ZiJHE5zeUO%2Bf8yuBDnLRypzY2fpNrBxCyZIA6OrFJz99g3O8GbHxAcYJnKduw0mLBSM0ESP%2BZyA1BhYaHznRp8IoISiDLnLYF98YwVUuXiLWsE7U0SYYpgoKYBmEf40yN2EvSEW0BHeYwMI2LHh8bew8Blu6oUX6HEWgKcRAx0FRG5drcqZ2Rz2OCh0r9j%2BdEgnGOtgtoBVIyuCPMRb8gXF8G1ghciNr%2FvStzIilZoH7uVNzX8sM%2BITBB5IHAn9Jhiz4hOlWCNNgkPB38KdByd%2B4iq9QmRXqft%2BvKCLLlZhCFJ2p793rvmU1rg41VuVYuD8%2FOntqF3AjY2u0C2vMr97mhXpTGFqiXrGB348d7oe5BQViaR2IweSMzKp0vs3V5wyLFYlhH40QSEryoda8OU5uGn8KOGgGNvGhILm%2BHt8JcSDauzYbXrcqyMNT90skGOqUBjv6IIdBGGSG%2F8FIxNLTTS8vuhKVTrz7zZZOuMQD0sntkZNT1BlNCMEIu3wXOKpNGBLfh%2FeVB6nuTAhgPWy83SEZUhLlEyU6vgbdvKWKCbVsOlMZx9TyTFxWkhQ0%2BpQ6OZvAqsUmm09BDCK6CIrOTOHAsbon1r3NjCgp%2BjVjiiNp4DS%2B%2BNRWSbI8l8kw2rS%2BU07ANBEC0kJYcPjYL4t5YUbJTvchU&X-Amz-Signature=dd8c918ede97b85617f5c6f93cfcbea4bdf1ac1d59380fd5bd1b425bd2bd8cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

