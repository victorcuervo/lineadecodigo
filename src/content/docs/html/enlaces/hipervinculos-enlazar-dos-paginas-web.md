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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZIVK5X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHODkF0s4yw%2FY4yqzdMhaUpwBkMZNRCLD2QEQruFHtpGAiEAsdmOvQgTqKmAR2PgAR6YRPrvaglswCz9%2BzhD9n4uWDwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKpga3pzJ8TmhKouQSrcA3EuV%2F3%2B5JbfR9qTK%2FEM%2FFZTgU9ymSz1JesQFojguuHCCy9EYoF%2BrhkEELxHZgkk1qja00C9TMdqcEqw0N1QSkzizZ7lPof1s4%2Fv6NwCJaxW%2FEZpg%2FY%2BKt6%2FGF2epujVE5YQL2aGcMODApl4vejGGRDoEAh4%2FaxiOX89vv97SsKqP68U21oxW2dUXKb7VhMP%2Ft2B6n7ie8WboBRI6KpmLOmPNNuhlweHvBWCW0jT0Lz2kOZTe2pWxONQSThv3gH8fDlp6WnFJC3VUe8xscyGu4y8JJUAU4BJkfQRwNnnneKAFe6Zpg04IWq6S8MS9f4NJh5kylv0UlsnovraN3%2BjTdEIN%2FH0YY78ekOvW4fGFq3APX4cQsUVTly2cxR9cm6%2BsCMgtelLxbQQxfmQp%2FjmiUsV23lx9XC6froxFzEh7dG3plDjLTs6hk9nHmmBzUWHFuNf7Cd51lxBNyf1eZcEy3vP5QX9qrlbKa1X2FqMgRdAHKeFt0RkWxncHWfS6gEvJ5rg92qnbGWJZ2XquzWHVOhk1lZs2M7ApoTtjXrdLtcoxpMOzXWLh0pf1e%2BJBMfB0%2B12IiVcI5LyGBFhb9gic%2BwuuqW3HgdIVdV%2Bu9yPwHn%2BYOAUP7h3sbD657rDMOavyckGOqUBd7ob4OpOvK2lveUE0%2BY5K3WRTKaX66p2laHDz9d9EiuhWkLH3K%2BpVxnQ8Muvf2V2L%2FD8Ejvu3r8XYR2mSUxRi4HIbdH33NijZsqRIUvZtif0%2F6YU5vda8aa5bvN8GRbwSlMAbnG7R2HIHOKECcLm%2Fsne14FYCQd%2BjWvWwBfAUM8mMvaQ0%2BG86qDrWJzGY%2FT40kz61NJyW%2B%2ByJoUiXiBh5T%2BKPbCK&X-Amz-Signature=0da3c6416b402747963d5d108e62d1b8a204e7eb49e5c468fdfec09566aa4d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

