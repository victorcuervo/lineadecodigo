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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD45KM2B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFojjDZ0BIRZ7j9%2Bz6DNIHNbhD8cQYQh8tkUmBNRRtk7AiEAmaXOozrgtjc1t7rRcQDp8d3ZUaCiWpP%2FmVTasqxiQu4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9c9HinHrY0tGXuSrcA5beiVdgNUf3tOPb6z4l8WbbSkmRs9uLNe0MGRzds4wZbTW5jYrIwRpYQQT%2FSlZQ4quhDQFgPVe3ychMWjCi7uNLT5VD2sm2L7yg4lp429QuCCMWPiPrIFJMM2Tjn3TVNk%2FKdUzALZ%2BGVDo4%2BsU3JCMtebl04KqXraSDMW4XvLYbxNepJ3Jq0mWwJ1Sw9RZeNPc3au43cPvEia%2Fj4AtMsIWjdlYm2UjHbTe%2F0F%2BL8ph%2B5mCY7RA0qCWc7wDMzLeMFZdEoR9ESYBMweywnPutBxKnkJ%2B1qgLNmNnGsLfzLNK9mo%2F9a3qsfAJlDGU1n%2F3KKcs95TAVJbAwJKECu%2FmDTPM2%2FXspzfisHCXECYwDuuHx1P6c%2FKb3hDiFPMGWEW13vtrobc9CSgQlL29m5QSrDG596ovwX9F3LoTRbpexKYFn6CXGuwIXwOLxM4XA%2Fa1Sg0EN1J5EtsDbLfA%2BWDXZpg%2BK9famHDWuPyzba3u%2Bs93qbwzU8IeW18ZnLmZC8pmKuWR2JUFsDrprfHzK79v7ARP%2F1AeIg1xxAvKJjD53JWlgOD8L6JDAUSDmYXH8iuJ2FhFIGmeoUwmeq7SXuBFvyMb%2F36m8zJUsvDVGveFj9xFECNuljPnbuUMH0BzLMOPQ2MkGOqUBMmdrVtZe5DqrZvrhFcHzlnrmYzaDQ2eUJSidDZiXAmBBNPZBVXRsn70DIit9Znr6kkZHAqNE0NYK1dYoCJpFUZ5FtYWRHMQ9N3DhnPy9%2BvDIUnXZto9tYSQAFJ%2BRXPdH3yWRT4Y4yln9aBEVrE0mCRgv%2FjzDKtlyZfWzcWdNbNa2epya6JthN1r1Yn6XgqSFG02OEzmF9c1Yyqu7UbwHudEUtu2R&X-Amz-Signature=4ba972507dfe9e9923ef9e83088fd6cd806c29048dfe9524d9a5b4f1795e46df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

