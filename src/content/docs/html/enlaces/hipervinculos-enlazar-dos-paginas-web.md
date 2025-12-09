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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEH3HYOD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIhL8F7j9p2p4zRvXU%2BaZ5ctAwLG3KzxAq0ngKkTmqoQIgFGOBLkn5ECueETKwNARxUwDxHPd5D24tUsnRyWphaakqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzrSpZP%2BXszZqHGBircA%2FrrXjAx%2FQ%2BOm%2FhjbksQH%2FFYQJi7CtMTvVkDkkhV4z3X99iMS%2BXfYFUuXrqchqWj3Mupvba%2BcM9oXUMejRMVwng0qtHlLsgKCWXymuT7WEw28oIWMSyuPVFUyZfIPv2v%2Ba6iAG0%2Fxc40EPtu0LRoab1A9FBHT9%2FVII3jcXKoaS4A%2BuFOS21gcb%2Fe8DGoREZN3SVyY3Hojy%2BpcWYIxsXkVwQQpb0LyZPzZdXK6mIjHHd5ZSE8iqHfnNmYM3YuOdmzhNEwW%2FRpN2zMvEcja0GFYOv0FQVq7ejQZxam8WMO8uDy09cZ3pNIcgOlxSzzDr09LWGUvmKZxnMffwUJB763yKRoPn5%2FjBezwpF58FpZqQyAPoF2BY0EADX28wXvTzWcqYwB1Uf5QyqvuFgIUT6YlF3BgD2tc%2BAwaAnjs8WXVdaCOiC2i3zag%2F6J1dz2ZhEKIzsuqMOwD6YRHdecyGWwOX1X94RBYETktKIJOauryotnR%2BM5Z3SKd8CPoA7EFVnM9TejmBEh%2FqcZqIyTEcBjufwCNSXc4495jhBF4rEpnYDR52UML7kIkStmx%2FmJCm5rphl7E9CA3glHoTJoqyjPLyhZJcRhAHznEWKCZJsDGGfLidE9roFMgsYdzEbNMJjl3skGOqUBbXbzQz%2BAZvXtIdHr87xz6Wewv19TpSJ1GpAdpSJh5E4RwQgpj2NuofnSE6fMOn9V9sFmRFRN7yQA4UC0IR2LMNukJ5gYbufquGq3IRkdfNB%2Bj%2BclZkt%2FkEglQSKeV12WlDC7B74T6aMMicLlOWlz%2BZfXgN%2BKxAFZYOvyXcWtw%2FSp0BuPf3lLlh092wYBkBeC06b34vOXgRPwfnQIkLcRvOTjzKdJ&X-Amz-Signature=31296e1b82104d2717c2aede7419203d4718a3769760ec23491a5078a6abe323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

