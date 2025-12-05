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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRAFJAQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2FsYucwm%2BpKkdsg6JvpII60vtDCxPbjMmo7%2BKpzfSogIgUH73jpqbRSWfT5ifICmtvEDjqmbNNARVMchz1JglG3oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOblogh6BnnO9CAE7yrcAxY3B9MMGrAleO0TCbAojZYl2sVaWLKPW%2FPMH4xasSnG3N%2F5xLn84JIflXx%2FF9o%2FIFVnDqJDPGW0uCY4Pp372oE6KKh7ykib59fhbYFcLiKrUkWD1xYd4qUUBnWvy7P%2Bp2ysWMz%2FQE7BWNcrFV5RNXi6gGnGRGdBj3n7u4IoIQAtRudMfpkeDbouBgL5sCELNbUgvUWfNgIh%2B77dKO7ZmaggNEw7fAh4q0q701qCxclheqw9QQdua1UkOo%2BzKHHulKPhXlAeBiYamDT6y%2FmsFQ4v4zkLSheEEwDyb6veR0%2BK9gy8KJjJbwZUbZpGCA1%2BDdMs2MQIcHtHjmFYlH2NIOhK9q%2BS1O96KpQOgo3ZwENQ9ADRQS3izyqZjGXx8VZUiV5HNOzLxg9GRdgZBGt31DANVkwQSv7rcO7LDu5LEiKQFuuaFsAEG0aUz5PQOJvdaY0t2%2FQbDweitWJxI%2ByZcd7xTBbo5lqYyVzHvTIlWOV0AySSmoJjuTFt6zUmEhXOKR5jKIkTn96tO7mpUOW7E7VGE2myQ8tfy7LQ6wbIddYBIl%2FMkcvQPl4%2FCiDzL8A5YFY4qi9UFkrY5GDyj6wB4axNbSr7yHf%2FKhIU3KO7bZ1Ue97igkDyX0cEbGsWMLSuyckGOqUBg925EzakJJbGX1rDhlj2oga8PAGhD5RAC2QSJyx2lk9oOu4FMoAdZwWpmiZvi0I%2B01eGc4U8CZbtBh9NDb567MMwsGx%2FgxTfSN2FQh1OT1J6elk6M%2BEToAIOvMmxGQAs%2FqZRFnIuOJDBEq2VdeYyJfsokbcvT5J3PuEpWyrWEXBtUilF4oW8LkD0g7i8hxOXPog%2FkqWFoEh4KUBInzyRDkHGoUHB&X-Amz-Signature=7da37174feed526cb0282f2a44b1a9287e3aa1ffe0bd099534a091a11fc0bc90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

