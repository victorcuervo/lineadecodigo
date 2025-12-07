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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGY2FNBW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBS3yui%2FEtQawppi0O%2B%2BMWLRAD5T5nJitDqf5GY%2FpyAEAiAL5Gz92em%2FYBxXqDCS%2BgC31vEgPRweCwTKO3xS2gNogiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjznPRhJd0Fu6WD6SKtwDxrJWVk0nyG0XXjjdq71h0YPyQFP%2Fr26x2%2FmlBudGngBYoI2GmzXIYr3JvvNvsRO1JdvrkEBb5uaqyqA0AzHIoqKPlX9T%2BtPANTO5O%2BmUshuzkKzVWFmz9lS7lKVxclcnGIyrg5JBk6NVIuLSwhUh36IxJooq3pF1vlopQDH996KZj%2BQykG9pZ9%2F5M5p3GFLCXlASYH8FT8uT3aexA%2BG7BHXdXFMlJM%2BnykN%2BqBN%2B0lbmInNocJkQi5VeOBO6zm0b0TPsNgZ7bGjdUDO4W%2FDpD2gK%2FNXmDdhiV232vgtylYbVS%2B6XFEKqwXmvOcGBXERXZDVWVfo1iEskn87bFSNmfiXmOOpTyQAjvjcQ3CCvu%2BwDZHM6uu2W6zV8CXoc2bssiV9WPOpMynzNxBRty69JFfeAPLOgR0CW8BRy1f5%2B4d9tyNEmSaEfYKSZAJpzCqfGUzRP11QaowDVgEpTbEfKO%2BQRCMO1%2BqsUYWk1chdlTpdVznmsN%2FV8OeX3xQ67NhM9MEme%2BV59QVYDriDhPVE5I0eThi2GgDciGxYidUuk8pmLn%2FeUq9Tta2Nz9sOQ0MuZLb0EyWezV1A5PT590Nb4gr%2FYXtLEdApgONX5X4QZOKybSAxVT1JnlzvWmhIwk5rVyQY6pgEnM23TvD6iMezDyxtuzBfyVDEQ7BXMHkKhLwDYeabd8YIV7u2%2B8tNlx8YEMYUCkacuXiE5nb5k8W9N6kSQ5NLWU4kQETPsENbmvNcT%2BhNwPv8RKXA6vr1s0ZANRs9WnPxI7sDKKXfxEHmAm4%2BSDOmSjPCtS32h2%2FONPQSip%2FQiYIApu0sgUmAG95DgeVW9juXORV%2FwYAUJLEVjZxc6yqJ2KBb4Lpip&X-Amz-Signature=6a77cd3eef4c79bd707388ce1ec90d6f1ae423e5e55d8f9d38d9936ec393bcb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

