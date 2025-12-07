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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTF5TEQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnIsOcGRyiYtpP4xSm1oePojTffLhdsLCSBlVIkM%2B0FAiAxr7ZeHS40OvJ%2BBsOFxO46K3CaW9OMX08OXNMJqi6loiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMglWRMgq8EU8PvvE0KtwDhlrzG%2FjymVWMZYgGoMSKwxmJpjYoFaon8cvJKZS5F9TC15IxfsGw1F8C2J1p3N%2FjwalETDKNBCA3JdIRvSYZSNIxQOVO%2F2dx9sCObhmRhaZiJLASDyadjBYrOb%2F6xtZ7HsQVCjQkriXdAE9515yNQYrifjsuf6NwZoZaRYs%2BNs5uoS2kknrNwUxyzxA0I1GHMf5I%2BROr5qRZWHuiIa6NZpgxGzRj%2B2%2B%2BwFUvQQ%2FzALsnDNfX5bfGkxK4AXFLRCwifHZc2wFfv7nneBdHxxWRrR%2F%2FiQrtjVT7dOgWwr%2Fzvf84atwmgQ%2FKI%2BXkyaVHPLm7m3K1DzYPYCBNYOv7qVYFsk8GypLaUY79Y9PfclxfjTg7Y%2BgJ5e84njXc8va830Oc6UQlWyaKJ5kBVu9QmlVumTdarkohGYflmG11M8LQI5BYl30JoQ%2BvBmLR%2FZj8lUSkNp1eEd6l9x600%2B%2BTqXDuxLgPNhxR3Dg5iDT88zXqRsVLerdKq4EyKSUig2WA1d%2Fu1qwMMRIlxpM94ecrcbCiR6FnPRxSspmEWHj%2FC69N%2FtSk%2Ff4rwlC6Ve68FGEnrH%2BewSifHIl2HqMe6IB1AQ9YWuSZT4okiHE2rlZNqJsGF9yADRCqI6SuLcxW9WQwvJrVyQY6pgFit3wWHHeKc1Bx0bSy36ubLYrrqb87ju99AkpfDlkVxKjvoTdl33%2FkXxYCU0s5HgSDdDDWLYnAWa%2F34DM5d4hbZy5mSxiGL4RVoWScZPyUmx4i3UUmfNBqJLRba2TCHmWPkmDDMKkFFbS2Nl7Y5cpiJKSI9zJjgO3Y5fa5ZnnahkOLl4Z0Gug3VKiYZKbYkn5Uf7enf9Ef9mFdxgtx2IvBXO9t%2F7%2FS&X-Amz-Signature=bcda9f7d053188a157b2dd27911b2f42ef57d5a4fc249e4b1e33111af310fa66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

