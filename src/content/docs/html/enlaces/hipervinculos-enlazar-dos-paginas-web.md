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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBICMKD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChXB%2BPEwxFuuBKTBY1ayl1M%2FgoCtMRbqsonYfeYf5yBAIgfBZO0Z%2FQpySmZYVmBJGNAgom4W0sbMCW4Tc8khw5T1cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkuYCxZXir%2BDbMnZSrcAzsstLcSyE43awGat0IaSzwjEchNiMg4F8tNKthHlZ3VkuF3mWlubP8pDign4wxE5QWZ6PDy2DuA6MOJBvuguqjXHFw5X3FDzLM%2B9bzcAn3PGna3UVyQIhz679DE%2FnxVgBaz6iFzOyXBgXGL3S7Px5g%2Fgr%2Fnkj1RGxaro9NSDF3qebDi9w8DOFSEFqK8%2Fr0J240miUjNjw0bQ1vOOApFhb2kMHqSYGQjwunmqfGo0BLVU3vGm6GRYDr1as555GFxwtREwVOFCrLXSKj1eFBklfjmuy69sb79AQPQN6imv5JDPlZAtu7cOcfj%2B5eMZBBB%2FS64TfW626rfW1RmB%2FlWG67qu5apLTaqX73YnKPn5TBAh7h0q2Gndbfai1sJ4nFIj2FkEqBFiacN2%2ByzbpAita7AAbOY8P4Pkql7b7TFRkDmnUqYF5Xart8gvQNh6OKOILKN1M%2FPEE5X8NzbENk2gbJp29VBdO5TVsazbv%2BNeuc4UdmwbOtQtTneKtnhoHBufqeanHQ7iHIqPMiFWRoFQkAHakvJ6Thlw%2B%2F6rkTeRFzQ6dfvFq4B1PMgsTq%2FNstuM7BKDsw8jNKpLJj8tP5iLBs8MnZKwz7hi1LQHcZWsBFmb%2BJ%2BTXhMQyjjNStQMMX90skGOqUBlZSGFTdX2dtPoH4qiqrl1CdtC3jIdlNXamhv7nbyOHfHj7gysh50LCSRmD51%2FzwS3Lbnf97bjQVZogo8VdwR%2F%2BR8xY1FeGcKrCGzd5w%2FxA6aG94sV8upqhZWUH1ec3%2Ftyle6atmn8xPRuptYagyAZ3EXlLiHfbmIJrMvT3kQTeKq7u75WM9ZQn9gM6fQoQUXBzZ%2Banux%2FggI9arHHYn%2Fq407cGrZ&X-Amz-Signature=38138c62a2043c1922cd78f9e82c1aa8298ce3061d7f070a340709768244f42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

