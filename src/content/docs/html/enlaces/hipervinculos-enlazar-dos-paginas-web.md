---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBCDPU2B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T224057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpP6n2J6y8IEX%2BEooo333xzli0bdmT%2BJgKqATpHjMuKgIgdeva6YsNTcPJ7BJ01Ujd4Y6iE2RM9pwOUz0%2BXLlHuigqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKYc4DLPFGsHPTQESrcA1%2B2OXbU8uV7y8UIo0qNimTZJz2UMlsBjU2i9UV9zLUZMWFvUHYJNkAc1eXPKTX4TgMWeJTHbYqXby3bihHhYykaJ01b4jWqIH7xIGOSgv56jMJ63Bm%2BDR35zlfoJ%2FtHZ9JeESgakZy6%2BziPbavxk6fw1o63zPUDsZdxZYdZqLNfVdmgQY03FsTioBCj3mQor0bId800DX6sZuttOqu%2FcADlfnFbo1ezciespftFysBKOACud0PmWWezMveEA%2Bi3%2BChPmmW8l66iMy9SWrf6RgLYmRFKDX%2FZnXy5jRWh1N9lPth3WOe%2BW2P6yIbK0UTV2%2BzRrDWWqfv4Qn%2BuVjZ7%2F6GAE0X8pGKLrpPpnfbPNqA417pGQY%2Bv5Ew4s%2FbUDBhpGjHF7ZCVjmA%2BveRcJ04fcFOwg9awVcyq4w7NZlv%2F04x2SDOtCB1BBgKPoeQ2m9aYXEhJv8mW32KlHQNX0dfVw3GsFcUEK5A9FEptJDKJb%2FWN%2B6YV6Y6lDa1jgysDadbyR227Pd2g9XVxv6L7rhDzxFR4Gv0deXIa8XJfmDR0HQsDUCEOL8w%2BifkyplmawXbB4MNkFs5cHlSKrMBHMb9MIMrUY2qQ23gZivEQJM8Z87%2B0GIdzt6NRvTbd1KUJMOzD4skGOqUBHYlzL2XQ%2FBEmN8L1ngSpemKSzypV4PTbUghWROl%2Bg4mWHPdwxO7vCS4VO99fjRy6BtA8RNLvrm3cPpsCiQkZRS8RXOGxSBdKTOW8OsEZTYHjwMVStezq39%2FXjZ6mcBorpzjxb286sMtnz24KMNK8IQh2ZjB%2BECOdZpKXTgHiKQGuAbt%2FE6O2G9DCZiQW4rtVgsDRivs52jbFMjH6oujdn%2BM4yZP3&X-Amz-Signature=4a607922ded3c089cd4a42ef2bc088338de799a5685190beec29b840bee8e783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

