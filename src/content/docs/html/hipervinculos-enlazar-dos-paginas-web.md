---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7WXHLI4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICMxtNa%2F4X57hVvTeNl8vfIFqPrDUcsPhlFghPhDVrUuAiAzyR%2BsYBnfV6KmYP%2Fo9VusqtrxqeJw1YPKWAhubbRD5ir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM3lZx7yy5UX76Grp0KtwDsQdoVwYVyWcTM11tDCZ70O2b4NJdr%2B8tqWUfFSjO0q1aAMeLjdyGb139clvQgb0FaMZYIViy%2F%2Fuq5QzKd1POs%2FaGjMWirRao%2Bf0VXXK6XVK7MVJGPRkKDZT5MvuT4kTUsu296CBCQeVVzaowZKA6TEZvFtFjogk0N9RRJi36kvp6gekZAXCtQvGzAnWeahpm%2BdxiFYqptS9UhqHGRli9f1Z8u7i7rczb%2B4W1BAO67o3gyoRM2iuDns7ju%2F6dHWLShs5YalvZOGp6LITe%2F5XKi8RIxb%2BxWdFdbTHdwYgWHSrShGSS%2BsZ5bc3vzYKnJrG71jKquFReTU2Y86qd7e4X8kRtsgCYFlUcxS%2FBGW3qpejJnYgnwO08rF6zbKCw7og2DzPbd5ZUeVgG8jrk5C0n4tGa7gePe9eLJb3XhkauZMQ3eCXbWcHTmDFHRCclXuBQer2jC545fmBTkg%2By7O7J1kgxK5U%2BFXJ2HZk%2B3LDOmJLMGTrpf25bNrWft31nsKrBv36NI8pCPcfs8GUMDMpx28IEV1rb3qKXYxXZndUVXFdAq2eaAVwXJguhILRV8lyg5twUVuhiJqd14XW8WvbKnt4mZ1LQuyk1yAlWfEjDOmh4g5c1Rnx7U%2FIiNQAwmr3CyQY6pgHvE0P6lJ1KW8FabRNfytbMznWbUC2oOYcFoFb%2BkIdn%2FrvRjf3u%2FdxI45olHK%2F%2Fel5UY9pFU0bo8Z2WmftPVe56cr88qyyS91utPgZLTMUdZpWb2l7qj%2BfUWZFANqyK9ZdbC0ulMg%2BvZheyS2WldNNHMNqRLoKEsFqkKalzICIWafSt2%2F37bOpTupdZSSbw1OWmoUzYOwgpfb92p6E71hHJUSgkHZMe&X-Amz-Signature=96f70e17c0d5175e151e1597424ccb592d8e94347c41b09eb0603a4bb445565d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

