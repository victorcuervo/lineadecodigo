---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXDLUX33%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDw8lKIQEYukiaMDHFE2qdvT1hp7vtF3wpBUIEqG4rC%2FwIhAKLjkipM71L4jwdFBRaBvs4IzmYXZDWHMWZ0kh%2F47cGVKv8DCEgQABoMNjM3NDIzMTgzODA1IgzVZSyWwNl8j5DTFhUq3AM9DOYIRPhoalrMaFT4Py5ju6GZe4zZaphvJQ0JZRbmrp3xQzz6htjAWG449RAj7F6XgRhAtjOlqGHkcRWGCA6QkTSLFmF4%2B6Z2J%2F7jHwuimrUMeVznd4CDqr31aQMIoAZ0FHMa1U9ZdiZdXWk7EkCnsgJvZZRiHQ6hpex7tb3yEveNg7844FpKfLsMrw%2BkmpE58ZNU8PYAX9iah7nXLovbqBpgl6m5Y5ZkinmNw%2FhjFjCO2gLKZQM2z6diQv7yIAr%2BL3kt3Fvy7xhz%2F2QajBKeTPPPXH2vp7hSXmLxDyPf%2Bx6EWA9Fdsp2zY4DPCG4iYYOj5wbFzfXmCOC3gQCQEkochxqAqpkg0wGhc1jLgX346%2BvdPVMHC3zkeKadM9Mexk72ZrEz25LKmB3urPrvBh4UBb63excZSk4t%2B3K%2BPugXYGffQY2Z4tEWX6TKc60lvg79BLW6lSWYJCubaSfa%2FNf31zmWVaFynoC3nZQWOv%2FmJSRaeluxis1cS4HxxGVPGMwf7lT8dxc0k0OjVUoxAS%2F9yd3d9g%2B%2FYB4bFiZZ8hgA%2B%2FPDWWdeG7o9z2NGBSFbPscqd8DcRLm1j7noPnlYbOcD1F9183odrcZexAKXFOWCODWlaLd8KNWO6AqDjDTvsbJBjqkATtHrxY574iJnmGFyRwkWW1ZerFwDznU8jpuobcSPqwP3qWLjMqtjikkdV%2BgnGfdQFOBY60jv336PVdqLlNM8488fW7EwWzfJDUUsDDHAvier4JvUrBtrhbNtvg4Xek5BLZPhbLVQr9bgGldOxWYc8%2FDWhNxauHXKOOzhun0fd8b8lkrali%2BU26w2Zmu0arlrgjvch9mM96mpn5VIyQfjAwXqAcl&X-Amz-Signature=bbedb6f1d76e823251c85f2d4a29818a4339c9653ac88fcdc6c0a26f12b42d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

