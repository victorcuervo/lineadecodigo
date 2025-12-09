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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZY2V3G%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS1hOyy7lsj0ZPXGqVARpRmlykYjhCbPKf4CM0LTpH6AiEA3100wGJzJjq8PqRMaj%2FwRacs0R1Ylo3RQR783uwIsRoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw%2B8hXWtjQq2gUEnyrcA0HEoJpVA6hhOOYlth2The8wwtd5Uey3f0dXzrw8lbkFWaACnYR08bLHEP8HFENqZWnT%2F%2B%2BH9hjR5obha0NSZ7vJLUclCrERLkJW0enWdbwH3r%2Fet%2FgO83th%2BWWc6ZgvbFRaa8NdiliGWJqU8xrNFg5KXWbqmIPlOQZr0xjYIo%2BAfIxQvyDb6h4AFGEESaAIwrIHQh9GaY3NZ26i47pvSc%2Fg15H8HfBaXnjWx8K%2BCquDN6%2Be3hRBdJswiho77RIr%2B6j64QpufG1QWjAb26hiIF40lRP2mGr8mqfkD71zrF3NMNw5ApDL9O4x25%2BTmju951iM1pBuLRLEPp3cr%2FroPssmi5IRsNDMl%2BZUkro2Qeac0rWr%2BRqtxZwFiqQXdLzOz8cL4Yy4msJzCV855d3eQzFhB7G1eP%2FM%2BtQpDwULnM8H6C4AVApV7si7WYfrPMN8pSLpmEl7A65xbHk5VdRZUsCSqKtaUTWbG8cYFJIU7l7rycuArFjFofrHctBocwIxvfmzznUVtY5cWq3HFHiT%2BTb9ZBnd6X%2FdQn5BMc%2FTR1t8NQ4jVFv5Cz2fAHzv%2Fd4xhVReNUhWNcWwL277mEpj09GB1YnGJy%2BC198XK5Z7st3cEFnjEZ02r2beUKHhMKfD38kGOqUBdeJat1QLTiy%2BVSFlYFS9fqnkJSzH4HAfszZ9wEAqoUT6A3AkCJh3NMuXt4FSV0eYVYi%2BGpD9D8buyQtqqZBAtqCpokRxXszJg9oKzcvUDqydC8hq28z5qvmCXLOJK2VHiauJhWSWDfWj6wMs7GQuRcV8kRWs0LfH47KPGEPcTkR5gqTEg%2B8dfH714As3gGlpcs872V36YaGh6zRPOEVVxqVO6z9I&X-Amz-Signature=729de77d96df91ed28d53d41fe5c6b805fbdf2fb863cd527fdfe339a8ea2a809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

