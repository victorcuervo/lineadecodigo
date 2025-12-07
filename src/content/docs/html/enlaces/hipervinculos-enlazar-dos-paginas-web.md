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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DLSVIW7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyEkcsj6%2B%2BeHAWk%2BWeOWraIiNonxDjSAJCwFPW8zoOgAiAuguaEu2Qyn1jTKHyZKPXxhsnDG8uGEy8GY64jZv%2Br0iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5NrW1SDHicG2UMhgKtwDnuJkuuS6JgvQO8Y23%2BN134pbKIO5Mz4OV5NUE4wtyXYOX%2Fhdj0UDWyUv%2BmjSL4Y7CPvU2661JWzPfzA6FiAdQPmxjjab4LoAcUUWHR0mvoKb7NUv6e3OIVv04SgPFFsvOvmmgOtmYu8ubqLy3c%2FNcyyLtEiSs%2Bkd8I2ySkLyW4OTzk%2Fsw%2BrjuuMbH1VBf0wIXZl%2F0Kpma6yds0524UkZri%2BZyQ4Q3u%2B1AvIjUJREevEvbrNZSQn4NKU8BXHgAWnPfN%2FVGytNph7qYcGRMhjff%2Fb4kIYXtayIhKPQGgU3x2ScEIlkMPQDFE32DTIZSP1KO7UTCJJ%2FVNfh9AsuplIr8YPP%2Fe1Kbdnh4q%2Fyu6%2BysTI3Q0FnaNpcjZ0T2QBhfGV%2FLJqzfVZUWjZPvgwQshYKAsjhPHWXwBBk3Ceu2MBwLpeik8s654Bh3Hh0hhEUKsWnP7xly3C2Uh1i3ap7H2Wgio7D%2Fe1ahiFW77EET0hLFBuIxRwdIU2u99%2BSYM9aWu%2FM%2FsRCMRX5h9vBfR%2FCFklNnzGsc5%2Fx3cyrIxHvq8ig2sB9c60Ci1P0Ubp7mIVg7tAWx%2BCLlJ%2BlwkfyHVYfEITbqx2cwghiMI6JGBPv14ZljznANcDcjZDaQAOIiq8wkP7SyQY6pgGUnwEXBdPQc0LkhrRmLy2WkWP6O96HDnAHQ57PsElnQEzjFtKUjiidMxAccDJoJ2xqwj1YCFgLcikhjh5dWiGumxQoYT3BIAEtAdFm%2F%2FjDyXjduiJx7pL1in%2B6jrTacKv904hW07wREoGk50fNCyRnsp0dqyIyWjvr%2Fe1sMCVl13qEj6LFHls24bz9WprbIjmSPDn9bHZX2skIApUZOyO5ntfWSgTx&X-Amz-Signature=d07eebc8626a31cca1a1b6882410ba8894fb48eb51c87d64904191b2154e10e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

