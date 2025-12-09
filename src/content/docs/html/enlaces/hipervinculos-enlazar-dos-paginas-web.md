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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGENIRB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh4%2BTykwdfUuF51MDQddJGR1gcl8ksgeFLyk%2B6B0r%2FdAiEA73FPISSavWous0dTFM7BWi3UtWR3d%2FqKFGUxEjhYJK4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKllnNjuvxhWBBl%2FnircA2bFBevzxfvJAp%2Bzi0P9CMCYr%2FxNTIcCkmoZuaWLwYYSR0T9PGWUws33o%2FArS7xgQf3PjeoOTuFDa7FO6trflBbe3gfSTIcNb%2Fx8sAOdiomy2Ak%2FAKikfgdQJyihVlujkD1M9RL0Xxbl%2FfxeKa5fn3LK3VHs1XhfRzAgL%2FvVdv3T8g90YRCOpIWGzRH1GAqfikWjOHnLmPl7kqfh5b1Ru107epJrriAIZ8oPwDghrGuSGBX7ccBzZ5RD%2FvtAlecmA7QP4iB7M1GU3yVT7nCirDpmmR1QykLttdtGcKqr%2BbTYkJaIVZbNOK8hDEQPekVHmKqbn%2BdZ7v4HD1rcbD0%2B0eV1olEo0AdcJAkN0Wo%2FcF%2FuLt%2FWsN4QDycEKTg2gqBeNv8v1qdZ6H6IvwVhGxwbxwhok9Sjj86YstJXQecYAiq43AmoXNu%2F4%2BFY1wqv%2FREmtBz8WYAGYNkanqHtYyTCE6y5x6T5FNgiiXYa2%2FOAr6g0Gp3hyrpweuDTbrMZDhWZj%2FVlVarLQfL7oug61MUQzuCJxGEfjB0TWXf6j7mGpRNh726O9XiPq5DCvPRyV7SWV0N4u8N%2Fk%2FOWyOs5vI8GNFU%2F9ZhS%2BDVk%2Bn9nY2v9ocGP3mw27w5p4WGNlAT0MLvJ3skGOqUBcvWq%2BMh0XW6PlnRZaI5F7lhrUYqyKcLnt8j9cQXtCIC2MF4DjWppaCP1w9472uLZmYEwMNnOsV4glzWuG1Sb2LFZXLCLE%2B8Qvh5mWyFzSyAAhFm0zKXCZpxgLqo23ntowka0ZWqNdIR5nQ69WsFy1xdcHaVQYFmdqXeRSrrIVCSFJbQmGRBqqdRMQI6wHjcy5GkMzcAWpL2y1nXsGdHICuj2Jqai&X-Amz-Signature=952efa909cc96cff4f9c8700524be7a9a7a242f6a7fdee82b379af376f2e90a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

