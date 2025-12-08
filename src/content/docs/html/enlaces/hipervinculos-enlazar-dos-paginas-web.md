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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WAPALJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLZI4Z91IlfThudyA5LvK3efbzcW7GL9nMDAKAQ2t0YQIgFpTDaiy1lu8uT4WGEbeS6qxGvqcS1K3qVN2g0JtgfOIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhZE2PAG%2Fc8DkOFCCrcA7hVG%2BGYTOxkday%2FZttXENgcszyhzid4lut4nMjqKHmBmxaLiQoczd8aZI1HtMQ%2BCRNd6vWdGpBMSzkljGsM7J31C5gYWLENgenI8lzTypBRoZIrF%2B%2F63TdUXmSJzkP5dq22XmmaJ4CTsLTVymk1xaSt0V3ntg%2FYo5Pm3X%2BXf6xJcvXJOqKOhJiHtdKetQeEtATlYIEw4UVj4grPXlaKsTmKPh9CC7cZ%2FRw8ZEiLy70%2Fe7rpw561uScR8PYrPOGkpnjpMR4Dufuf78Y1iHLrFCQx6e48O5eyKTyaQIkfj23YqbaHDNgyldV4jt25n0IN%2FHsf6KC8OZ0dnDkKNr988SU%2F1JYOc4jSbQ83WUY7z1QjYfQBvRrYnZUGhjW%2BhMgX5OeLY9SJe5up%2B%2BeHu4gjPJCMuXdXErAHta0t%2BrfRHmKPY1IpRSvnZQF9V7vf2Cc0tzqIDr6oOzVAZxr%2BodK4%2FZ0vbdc6LbH0MM7SxsjgZpDSShXa2EjbxWf5XKuWfU24n%2BMthF1agiQkMMgAqwHkRr%2BKJvU5uV9ipHp8bp26ugyF3xSYjlKbB9vnk4wkd1jPJDXQo0Z3cjdWNzrPSN9A9DLhHRHh0GNVEVF4YwSWXC8MQFnGirYyos2pzRYBMK%2Fu2MkGOqUBJok%2FJFTlYKGqGERMnr5zQrmMblXCexdv%2Fpsfe005tIJBBHDBrzLL4MJGk%2Frt3dLWcw12b7qSsopzfr%2FqwW4uCBzEP1V%2F%2FgxzZxELPSDtOsNtP5wwCzRvL1tEYeII9LRZOcOl%2FxSJW4phCsZ1MNXJi6SL0G%2FVw7p42zvcfLtN5YEBmJrsJCJDiKRNcBgSAQJRsqIVoP6cYenNOqsZBN0w8K6g8AnQ&X-Amz-Signature=a9e886b5f0bdef11db95197a6dc0f58395eae98b87c49925363a1ae397f9ff6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

