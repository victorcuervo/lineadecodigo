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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5GQP4V4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSV9qHbp7KUORfKpXZCMyylJ1YAsYcqel3d0b0%2BDK7tgIhAIsrX7VgUdf7YKEZPLOMcE6v0o1i8bQeLOtvAkoy%2BhgAKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU3ro%2BO1YgWAr89sAq3AMB%2FzuXWirE40em%2BQ%2FLGvtfXcK%2BWfyxAWlbkOpLXoiSRDwibkrV6RjDFTNrBSc9C78fKeULVu8FyoWG0PUeXMjMJMCycYmG3IkAnJto6Hp0usjKzsaIDchbj8mbwjvLo4VjAEwMhYODn9UMr6IMuq081xFlugGpb5tqUeg10ZrV9BymcFY6a%2F%2FY6zONfX6JcwtkWYPGCpZXbKZNIWO7wJhj2iFzP2qm9fuRpeVhJoDvl3CWhZw6SqrwN3aAWBW2HkxKMghDaH7dpBLnNzcQ8NQjZqw%2BrWf1Nma4KIMPcYiPSFuYQDOe4rEZU1mF7XByNsPe9KSUAT0ms56d6%2Fav2BOlhKAL4S%2FoGLJUfoSIZ%2FJ05HPaH9s38p8eQcgvoJY0wI9UuaT6men2Vp1r2bf2oFDEuVxp7W1V2oFyjd4f%2FOy5UbArg6MK37i1HpeI1ngu2HpK0FgCWEqz6N4OBTo0mzvm0kW4UBMdezcx5y%2BTgvodgNVKcDNzeaTSTjevvLJnpJEhs2jKgVPwiG1bn9816faKC%2F1KKdxJwxsjML7L%2F5qR1NqxPx7cczqNA4RuaE5o1s%2Blj5zTjKJZ80LKy5Jz38MePTRVwKEuZ5M0FYZyoVQ1XZ%2B0mRsPzaJ0Qm8VwDCaveHJBjqkAVRANUqbsuClHWawSOSSNCSGxMxtmuQtfFH8R05lbuWm530gylMEMbpMqvEfgnuRRSSdGo6fVz6n9GI%2B0tcllHowkZveRZlZCuSstlbH%2F7LaTJRfo9I4zToBLwML1MKqueoT2TrN877nNJJ6VQKBb2FaKK0KTxTHHgpnol6dRtyrilraGrcz9czZ4DqQb77D3minMA0UklGPZnYzNIDHrsi%2FKrc4&X-Amz-Signature=758c67f5227ceca96aa2a89a801aeec35e92465b347ec27fbe3935a5cd13dcc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

