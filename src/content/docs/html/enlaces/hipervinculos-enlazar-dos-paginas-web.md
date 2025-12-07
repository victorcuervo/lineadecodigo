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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MTGXBYT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlWKTmfeHuGagqSrO%2FmGGcZcLCBiVH8gxft%2FnQ5OJXUAiB%2FvD%2BizJJlIKzfsle2lomrk0tDomUjXpwwEziijnrauSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNX1VVau7rELcNwDKtwDG2AUuXbInQMFmr7ZWpq4a7N463p5TfTgAHO6haiTKwNc3HTgaZVhx%2FnMTcwfjoOo0ooYBBQJ0bhpGzQteqEwrIdGvd1Qgs8nmRUSnfIe81u%2Brr4gRM4HqMUXnRoO5eEGMUH50wyumTLNxy9e5ZWbtALa2YxE94E4LfL4eFCIDfhFh4GHLJuo%2FR4Km061FwQgFSDU5%2F7CwBEI2mlqeZTpaqRMryqxma72CC9%2F3vQYvWBUMIivP8SQykhRQv5QPtGWyq3foAnTYNOlXCRxM0vV2xd1fgX3jovQdxYVeDZi35bkWSx%2FT932%2FFHbM5xjbLJnowJ%2BuBDt7z79Q0cxBsUbwNaAyN2TGRfIWSrfoLP8NhF4nIZRYMgQSap8yRFJyZqkuKMeN6eyh%2BjCShWwKyxZzITriW1iMtkwf6fo%2BTLLMXZia7XiclkA6jMWP4gIxPWNQG%2FaxARzVckH3s7d5u5cbeBLOdQ%2B6DBEM7i%2FVmh%2FNkTGhN5HhRE4EFHhUZ0JxCV4C%2F4zgyYWm769s965UfKuYy9tgdsDSHb7gJ5b1ohcpsaNK7UaHEpXsXRSuiNWfvbDrfMvomdbsSsx5Ui9iYNgPMot8eSoM%2FqEghKtt5Ogk36y5Lb356TCOyhgD04wxJnUyQY6pgGnrbabSP8dhgSwdOHOQN6NEGQCa0%2FRzVnbMXQ9Vu8ZfocHBeWG28n%2BM6BCkXEhIuBzcnxka2K79F3z44MDhe%2FWf1ZmNffJ9cqxJHYaTBkAtVxtBWrvynX7RK%2FtodiXbfpP47eRVYO1YoIVM38xfZftu%2BvZy4ohh%2FqtHOqOtq6GC%2FlcHgUc90eq0LUd2kTqcEcI1eUGdAhAuUv9tp63gA2qVvvFlLl1&X-Amz-Signature=e82a20c0a04bdeeef3f8e26f1c4eab1c4473b2b9d557dae3f29d2a1537871469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

