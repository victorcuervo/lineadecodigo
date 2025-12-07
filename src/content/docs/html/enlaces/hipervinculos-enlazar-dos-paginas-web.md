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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN62QMYL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvnewNTlxy9bVS5mdhpXAe4V0NUY%2FjvtBcAsCj0w9lxAiAXkdIgu%2FmZA4CIovYcA4UpsEucCL%2FOzSu5pEQ7DOtA3iqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94zRVn3Yz%2BUfDDmIKtwDvV0tY4GBaSHVzYmQHJxTZ1%2Fwk%2BQcqar%2FPC7A1j%2BfRVeSBUJWFHxx4tgaLFZsrTKs6ezOcCYV2XWEGfQvLNCaClQT8GVhbnAEseZrY5ec99lkRFiV8JUge14da8BqopaASZBuu3s%2FJzg6zCGEkqSHIp2QBM%2B3GjI6sZGuHzKtfDoQLjJEeGMs83hAY5GXx4Lwnr1tYw5pG5SO9Qdp3pX82R2cErtEnmKR1fWnixQytJOpIBw72XzfKcRLfYPThRX3UbomSzJX4slXkmKMamqQjv%2B2n%2F97w7RZkg%2FkYgwAeaJIK6ekuE%2F6XHVDLsfSTmCrZZMmJRWMtZE6gc%2F6gDLNZ41IXoWM%2BNnFS0K4R5EHQ%2Bc4IVIXoTZhFWWvny30ht1dWCy9rat%2ByciwpMEwISmXdG1%2FmCKmfe8uPYZcSTY7Mn%2BJPuEZt2m8WtDcgkSBd1ZhrQqZxbOoNnQNWGs41Rgagn7Vz%2Bm1t8w6vAMnkxbfk%2F4hkXvNx9NRQGh0Jmhyc6zUaqaNIaGzQ3vF6CJU1yIiChemRwRuo2DEJMG3afqOVvwc5xKKuV9U1eFl3M9xl%2FqW%2Bedyo2y2aMf0qkvHHm071MiPF2tbJHeO6kBBsNk9uugxA6ity3eTQcCPgdkwssfXyQY6pgHjUkGckJElqtqktuJK5Ee2qm%2FX0M1xe%2Bb43wZYdyvuEsu8%2FJS4dPhJcNoKCzRzF4Oges0ZenYD49n7Ni4THX4l0PcvNG804%2Bxxu9tWtvq2mE6bfumUw%2F0eMxVWGsjZULZ%2BBAFg%2B%2FfxYIV3sphhtYTaupgP0S6Dr1K5520zgigR%2BLhJRPI733jy0lQUoU3%2B0e5YSKCNs5RUkfDFssgD20wNiPoebxjF&X-Amz-Signature=4143a460f3ecc5d9553c71e665b625ebc42adf61d0df7f66ba363e4eafcb7cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

