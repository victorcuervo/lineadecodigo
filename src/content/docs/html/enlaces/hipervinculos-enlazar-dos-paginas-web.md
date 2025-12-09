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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVA3CAB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6thDk0wZlGJzl%2BKzuxAqqE4MwHJ7m0Sb2VXTbZn2k2AiASHOTtKK8aHXKJKVCjnDN8YKuS2577dOnnaLFFGUGxvCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTLPMrnHv5P1tzJLVKtwDnT%2BFRY7VdumV10mtm7ntilrTNWZ2Ku4THHOR3A%2FTTFgfMaiqt09RfVVuyiMn%2FfCb2jCHHOCDa20T5o6pBPl%2FDei7DDvZnzcRUm4uNXSF%2FZhHDyyMOZD00QsFL071%2F5qvbBbLzp0%2FKG6R9k9rwrlSiihQS34Rlxfkc8syubvG8Lwhxlw7Uw47F6sE1QN37TGEl%2FkVRuZn3IAIxI3uMbtNF2ZdxWmfmhTCalJx6%2BFvfshKauhoxG2adKGzaLlsLEyrvBwDyY%2BWNTuSHn13PxIWMYwBzowdtQQmmOgtutEd3NRr3WbBRsaHj8aJSMqSuOZPuKWQI9JpnlqUU0FT6E%2F%2BuHx5ulUvNsngJvjg%2Bl56rnXJfJRx%2FKiBOjcv9Sb8PUGp9DFnXq6i9lv7Wj1NT713BLZl%2B34eI2AZBsRaryKOD7lsZPdEUfedh2cvUNf%2FTs3pg1yovo9Uqos4542tWGWqDzvQ0gN%2BxlzDNI2trmxN6wh7RI%2FZqAhW6JA6cWdrwpoQW3tvppSqqet4xiDgSrYV9ptFK6kKV1uEIGOjXvdGa0P7KKYplY7jftOBL3ARH76l0kESrWYI0WlrAtNgMAIBsx1yK4L3NRorXH6nDWE%2Be5RIMXNeIEg1HKOiwbYwnJjhyQY6pgEMB9gEQqXLcXCWcc3%2BrW8f1VoJ%2Fw9WzgrtAoNaE8Md%2BEUbAGnHixF6aX4uJHb8WfXXhIK9CgfF2Ts1uwmdDLB1tQHS%2BLhps69V3b%2BekmpLd4cAebHp9tj%2BHSqycabRR884ZXN0hKySUZLil55qikEsfqVNNUg7KDFsvh5%2BGjyaUxq0hmpu9CV%2BWXwHDl036zK6wHZ3oMpbqvaBR5%2FBMcgFbRIk%2BUB1&X-Amz-Signature=9e51dc10edd57021899e1a68cfb89fc1aa427c41fc8ad1d551e5c2f71515acd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

