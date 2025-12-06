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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHE42VKG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDron22ClSgMUlbFGS9sOKV7B%2FEtRq4K17LpG%2BxBcZtQAiBg9LovlTAbHisPexLIlGm2vEWCqzYx7j8R5CMPWUGx2yr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMczcL6zxphWVbnZ4hKtwDpP5Ikh050a887lYc2qIJxvoU%2BHmn1ANyVdu0%2Baxma3x5Xlehh1uQAycX5HNCFOjBN5MPH18eOdRgMNKefifPRlo6ymfMfHPObOSDh6qyFSopEJ%2Bb%2BExqA1NRrV2ps88KuoS%2FTKAh3KFFZQYeVxz4JOESKmMGxEtU93VNbBUDa72WnAFJDgkw98ax%2BFCyf4O949J%2BEm5I8WeSAlvVKMpl2hn6r7eS%2BkMHE0yHwMTPzzbLK1dSzLOdJTvvGNQSW%2BVoigCKzUD59yempDdTc4g19ku1NNu6syRTV7q3w7wT4kqECdglveQLys%2Br8UJ8YQdm0MhlHTuSXX8NpFLjks%2FLJhxnLvvLvZVOQSR9eNxsXMHm5gaVkGU7XmA3O2gVz1Cr8uSftqVTeyl3UyRzwTo6jKTlXVoUX7oBS7UhyCno%2FVgwdtslUa5wZ7GaWzCPHHcJy0S35QvK2JAbh6Sopy1Dy606iWQMVLY0KU8%2Bq00WjKIivGfG%2FPnxeS6DBLLVNtT4Mbbu8iVeqLkrqBX8C1NgPwbCNn96e8Nj5ITQOfyg2EaZHmFAU4n8FQR8b2UvkZb2kJBSEkyghTk7t74cULuYWVnBjNh9cwdFADSutN7NGQZ0kKhWRwJcnKCMYfIwoP3OyQY6pgEq9VsAkn%2F8Duhp2ddWOIbmgCjFGmqmDUfChwZ6Jswhv5lDppfZTajtAbJDAZy3jJ2zXqXnLgWxoPnf6rSld0k2UavHqjtlLoB4%2BD7BE3NtUqvj6wPbMsVGWEmsfuQEYL0TGobKfY3e75vpVtqnckiLHlmj7iuChyKbsIhSSDzrjzZY2STjvAiwv5XeROes8PIy1M1SQcpQt9Kz2t3NT%2F52y0JfnSKe&X-Amz-Signature=3bb18e55508a99d0553a10b02dd3d4f0dd5745e950f184ecea2e1affe84a723b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

