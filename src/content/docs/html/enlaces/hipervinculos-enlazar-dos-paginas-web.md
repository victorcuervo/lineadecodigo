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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YGYSYU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbdfMO2d80mPQc%2BcBUKbC6OgDupVod48g1tTiN%2FPyJHAiEAsDCsovJxKK%2FORR%2F6rghqR1D5FGxOl7236StzIQ7D3w0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMS1aJiXY6VSje9z0ircAx9b62DRwGg7vwO6ZgMANhsrbC%2ByVbkosqTLBm%2BXw%2FZrTLERFEyiminyec9n0klBO6r1%2FXkmyk%2Bla4f8UHRAH0cSEoEZP%2F2pyVmjjSUMHexnEYhvDkg38aj1jdEWNlQ9CZCplfEFX47eM8uFzf3F%2FESsJy0WAb%2Flj3hiJZsCoJoC3aq5m5KZcU1lqKoTsPUbcopTRhqpbDLHBzXG%2FpGemYa%2B9XDVtr9hcNh6P%2FOGfzYQ9ymt%2FGzslL2wfc6f7K%2F1lsmY7VzodNaiWbjm1BJWSPCZTu6R5YJF39%2BfnVgKcfEX8lZPaudF8zS7fzXbirR%2FrJ2lwUPJOba9SGGYugD12QLPvECqcnlmbeJOFhpRcP5gskPjTOdF%2Bjriv2uKqjC%2BaS4q0wQ52IXcJ5JLt17JBq%2FR6CIVvOLjZVZRZaTADV0H9LJgHfl7Ivj6OkwyNJmNvSuSPmmKLFmz0bDNqMvv9RZPmD9CP8ze7f98qWCPtEDD6cp8ldDSkrmZSsXG5uZ4TvJTOnPYJHVe36lra9b4M6O7YzcUhO7LSH4iQ0%2BQSlUFe82oS6qkEHqfeC0TIl%2FWLIPjDuEfP7yznEW60ZvtITjploKrKIOa5oFguaUrv7rRNhWz3sYwMo049t%2BMMJ7ezskGOqUBNgji4mEKo4pbqblMtZeXFBpWX%2Fib0GGp9yQOqJC%2BzNkQHE0HewsqnyenK2bIpc0RzIKhwtqL%2FPPK%2FPs%2BFYbyronxY1xqUq4tECwH88XnKxupV9AlMN50SwkmpfodiW5F8iucWc6imDOXtX%2FJ8bGKVeUxURPvrZCP1BGflfdHt9BE42OMfC%2Fdwoo7pJrs%2BNxmUE%2Fryky4COmO3tb01DEKmoZa7wbo&X-Amz-Signature=b4efedc731a113851923730c777e9d935df9e1ee1a54a5f0341ebc24baea0083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

