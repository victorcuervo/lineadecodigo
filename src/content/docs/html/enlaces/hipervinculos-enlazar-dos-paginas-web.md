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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7XWP63%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ7tmLNIm2szHkIxvx0x4KUAxd6S3yGi154tdbjGpJOAiEA4mxgJ%2FDdFaxM%2F%2Bq2QeZQHu2FqlH0PNcikGklrTTGY1sqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvbqFkdGnPLq0iBAyrcAxVa49rJ8b6kKmkqT0PrA0PXAxb0jFxkUf7WSRr6QtLE6WEP1FXwzZpSXJ6uZ0Pe1hCrukA5%2FxBOQEicvZBzpZ1lqX3a0JhIS%2Fk63vzWIzzOfYk%2Fjfs7bitaJfuBdtp6M4o5wGLP8mXeYv8dyzsYFqyMggFQKDlH9rIPkRAE6XOA31aSPKOUZpkQ1pJHqoimBijstzZg1zXvc03x4eGZy9QZ0a5fbWgjuljGMC6b%2FRzWczeUj1kbLsiq4Dtm%2BofauiANUnM6qGEWRj%2BjfHKNfxVF%2FgWwS7gA3c%2BNmi9%2F5wUaxsGGEm29XcK2Jd06WE3aTSns9lpTl8Gs54FoIx2o7r7FJjsmZbVVt9raDfxKwOw456Ks6I8xmgcs9f9n7CwPvzY7onCUJkN7TOd7PGhzLOzrYEuLZ8YCAVzAWcM%2B6vgeBIfL7jxcF%2BOkXqnFXtB6vNy7t468GYl01rqQzvBkzxMFCiLVOZbFAK6KeWBFZ4iuQ84gSe9PgMtiWjqnTSKQ6urxz2TRTxxT9iG5dFJGrRJqacryzJch0W4dq5Q9ZbqVB17BkSGx3o7QZGkFDnCbGgnGafHaKR77LLFYKT3%2FuIHnqMfGjFwwhci9Sd1lPAmMUBaJBROLnzIYsSq3MPL90skGOqUByff1EWDguoieFueaIUKUpZjmwedpLKEuG5mtueFXlq3ZhbUZAUOaoAyxshMWoKwN1CpLcho%2BjTbQRqlh%2FSZobeJOr3oARDl98bqsqocRVKwW2T7esBMpEp0NSPKAqk%2FNi5cGZy%2BR1BpS38V%2BPki7nNMnsduLUwODk4TW7Jt7kJLcZrGcsxgjibm441Y%2FYLbZKZdo7VvDFOmfBxHT%2Fklj6MlmFJZp&X-Amz-Signature=d06abfec298d11061f6c521cc9fcdff59373b19e4b4c71213be473bbfe4b2b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

