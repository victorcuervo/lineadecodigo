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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNZLRNO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSpqzhVvuJOI%2BBAqQqDfuY7USq76r3HwtJPZ3PZV71xgIgaWYA4Ts3idj7ON2ffDYCakqedW6H%2Bv4voCmgUhzH6gQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNV9ss1zwbRE0xiPOSrcA8DrsfsFIAjwutdxkXLfFZlDFic7YCHUpyjUdnkSwlou6vAn%2B2A%2Bt%2BNkT%2Fo4MIUjfW8iIp9N0EB5soWcR%2FmMYxrU6w4lIIAAfvzmerAhwXVs8%2FbsiSe1xBGtNyoT4fZWRr0KBFyleCF6BglVo%2BnDtGP5TeSyPq9RkE4Bxy6oN7h%2FLqu1RwZ8WsyDKbwZw8yvnjVendm2H%2BOeX%2BYLHwNYicQgmmgQxtzi1AjO%2BktYl%2FfUUBbrPeNORYDlwCKMlLT49nekUuQL9ZDJv9FbMFh2XjAWf8gzjAB8ico2fieYcBhgsPvul0drOu%2Fazvu%2F4YmKktgaSZpK%2BbS%2BQdcs2NfH3nw3zicPR31g4n%2B6TLQ7NR8%2FTDAQZsINc2Pi2t4veFhbAWX%2BURWl7kn3xZzNbiWWcCU2hOl0gYl5nl2HXqWfTW6zsBfRaRNJ014TIyd1s4L0TO0f%2FdU%2BhfpNo%2Bf0xnnrU8b%2FnZXDrGKlKcJFP7Iakjyp%2F9v6KfsHUUs09bqfhBabtUfNBylW3T0SWIftBQMADquqmsowLzuZgOoOon9NWd90CTmbYxUzjyHTNRZxFShol7qdw21Us58IzjI26JsnP5cI4Jmj2dGTpf%2F8hRUvUhdJy7OEju8hb1Fp9m60MJvu2ckGOqUB1Pro5ScZu8LPK7VFbqWSP3IpJ9meU5CD7Hia5cGpPHeqfJt7VeiBRez8hos1KjNuakmrmBl8rAx3X3b3JcQ2MbtHWoP4%2FGHASAqRoKj9ywTFEV97COgitvzVWYSlH7fnplzCLFmzeZ2wV1rtgwUfzD0f6zo2JcP4BwMXkSJXR44IR1XMa7UW28kfH9KWtItSXgzAAeuBTpMCcglQzhMnDLFP6c4X&X-Amz-Signature=164e634f1b4a5802d522ffe70fc39b8a63316607100304c0fd7dea1e70ca99dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

