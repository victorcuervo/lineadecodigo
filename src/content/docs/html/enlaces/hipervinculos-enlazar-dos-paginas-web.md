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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WBOSMJF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEKevuIaWT7Ius%2F%2FV%2F53sBGYiCzVf3JrwXBZnwa7uDMAIgcSc4Q6UL6OucRlM6UuNEkfF6xraJPBA7FVIaCUMmHjMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyTqmRg3KssPw7TzyrcA1y5R5jYANqte34q0Kxiu%2FaPGPlhjNmcZY2Swfj65CTYkVpNESwwtw5tX6Y3VCHTMpwxZjd2yK8FGGkO1IUu%2FXQ%2FU8wLQBu8MwW1SCBGLdtoaahC3GFnB8Q6jkEl%2FJ%2Ff3WdoaykC72pphubaQWG4UKbD1mbzg%2Fnd64C34QZW8Dwg6F%2BCHAnYdquHxtXHi5v80CoFmXXGmoBoio1pktf%2FEdcAHwQOlCPVk0uuGCLMJOeySDPiD770jd%2F32cvhMrqTtFsj%2FBE2NOXCAss3xXjO8XQ5jGKVUv8J7zS1aQSQVCZXS3O1RHDr0dPpaLGw%2FUqzqV2FHpqR9jYlbOkdhtPBpWHQJIhtMa6vAX%2FmkckqBH%2Fr4I62JgIw0JwidwhCOJJYGphnDuzRiI4bmdZJbPP%2B7EzrOMqP8BV8tQ8Nn%2Fsmoc8cg4NPuR7rVrE0F3AXbYYySenbVIyiWCyrB%2F0UUQE4O2btRZaAaF%2FTUt1ivzAM7NuhrEjgKrfO%2BVwtnGQrQDh2ooIySaZe1pvd87XMILcr%2FA%2Fmrh4ptkODLbUhMR53Z0IlrFmVPgCC39TzlQ8hJJicx0PR4tA7WqQXQQzX7%2FZ8E7dy3BtwJSkR9QVtjvVWzjeiaEZUtSMIhntX8yaiMJWH3MkGOqUBii7KovorJANCt3V46VVOzyxGomoVOx3BRD0zxhZFN5N%2Fw9LlmYH5uopcokIxetRAA13Rn8yoOSEvpqAbSi5hrNL9XM3axdzd5lT8x8osGydY%2BU1k4kxndlH27IL%2B0hrVu1SeZKFRYvtEblPn9Tv0GY27fmX8F2SXddJhp74gxZk%2F4FmmM6FJw4PrKVkVonv%2FzNHsA%2BJUpHbPGTGSp495ME74hG%2Bn&X-Amz-Signature=0a224d58bb4355a64d9363007187ec370ef80aa7fa5bf1b2ecab33aeb19c5510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

