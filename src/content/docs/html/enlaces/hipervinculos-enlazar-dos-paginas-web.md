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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHK4HHQJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCcwCtrekCwh%2FDdxNoz0vfdMceZmFSsbECivOOhBI%2FdAiEA1v4ifhjLwx%2BV4k6iOKt9Jr2erM0cwznCvo0PMHixB%2BMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYTWNJ0IzyFMiVAvCrcA8G6cf5fCGSYfAVngkLjVjxFz%2F%2BDfrvrOmvPqSnBf%2Fkp3JLNcKeljsj4uk%2FrKhjiKGpvUYBBxtyM2GxLhmQeGQVPWSatKZ%2BCkaIgXdPKHx0EYGs7jXYTYaedsA1ZgzdEvnW3my7LXkXpNOSyvgtNi3YLibYVnl4EekEMBthub%2FciY5M5HyGehlrlQY4LSLqAAuBdwQghywDQcd1xqpOgX9504rcw%2F50JQfEOYf1FnbatyRHgpVeiXNEjr7p0dVz9I8a3kIeHXnJ9lGAYKgM%2BVQEIXQBl9DKZMVEubzGJyUQWvuwjvmRYSFKwkRpgVTY3DKTkGdJTUBSvRFeDNOkgOj4sK99I8X%2BB87F9XyOuIkccY8MSsNUkX769Xs0ajwFCVLraEtvbaiksDbtB6XZ9poi91dJ%2FeQmyJ1%2FpswsSqss%2FYFra%2F7a2IinDADxhYGQRYICed%2FWgjWI%2FgS7%2FFGTIE2R8nuIpJ1UgeDxsxmoYyXKbTYxWvoAi7ptYsxFZbF8RwZnSluvRIVJR1K%2BLLWMqXDTawZ45TodyGpAd3qPasbEjI%2FzgnOA%2Fm3O4PjnxpWZay16KLrAUfDUi4IKwIycivz5DHB%2BlqRJuPZhvDDTqKrG9lJIGbrZyfoD8jwaeMPWU2ckGOqUBB0g%2FtancQ8wr1wYrOav3BBfN3euwbqhgHveh9H8g5j6hoiHKcqMh0%2BAzebS3C52lFxVirOrKI6%2BWr8l04Bo6oHVvM1oIKkXkO9oKCNYUSNIk6HuPSjhEdwx9hqZH4cFIWBf1E7yP4YHtjkwx9yd5uClej3DDCb0umRPzSq21HdS0QE6eWm%2ByBtTa7dX5PlXog5sjHyL3GdIx7rUI35GQBQ6n1oza&X-Amz-Signature=89b072e937b964402769cf1f87cc682681f36ce1bdca18ff59e74c51c2ed7829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

