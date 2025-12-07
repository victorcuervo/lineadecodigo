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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDQRQBE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUFGSz4RmulvrkPyFfMd6tZH67%2FmQr11spOGk%2Fzig%2F5QIgb3Rm5ADXoRQsusi5riC7A2m41ZKRHho%2Fu11r6lXMuTMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoCZjHC6XkDkZW%2FPSrcAwgm6bzh4ZBAjCWNstmu2kzT6fXbVerDE6CqBwUpvemm8p1ShXHj%2Fl4K58UnLQMSpym83Ou4ay20yz87euyRNzPJ15nw4deg97z8IpT8srJp%2BH0sRqvXg4NPEQQ2XKmwzVzcHUA6goxjf280%2BOhlH%2B8HX%2BD%2BCFfVv9GwDJn1K6hd6WqAJoQIqYguYSf%2FK2y85jItredxzjeb5HN%2BDynKSYHIk10E4RUfFGCfPQ4MsG1Rs1RPodUn4gy98y5ENk27j8r%2Ba3jgd1e1UqSVrPxq31qPI4ZN5TQHc4ausAPtr5niNJIPJmNdiVxyxJo46BZ9YtG785L%2F3u2R3I4df8OrIOzoqGLCyS1MgwOPdrNPTaNealyi5AsttX2pPGIvB%2B8quxGOvZtPP%2FEQTG4fOS6FSBhrR1DFHDtKcU177aXI8CegAbCj%2Brs1Puaqv7KGeSbAsOa%2Bv4Ad57%2FB9zqtxw7q%2FUvQiEPNGFeQJrbayXFkCUWfJzgwmDf4c4i1L0bRg1F8N4B6U3PYjxs1Rddv6Q8b3J5AXN8HW61L7iCHN5lwc2Y4oeyYQCMAd7PUc9rBEYMh6ifrCZevva5JH4vPFZy6wU7Qj84cbxpz%2B4Rk2AFhO7japgLyvsD%2FTfMBXD4wMKy41skGOqUBp8EbMYzcuhxfENaReoQzIMVXv3XfO66035dHCfu%2F9Sk%2BmwWs9cRkzMsiRzkLqCEJeye1hZrY1M9S2lK1fwuX4FbbgRa6zLQX3%2FNXbJ76froELGnwnaqYXbKuhGhg9Ed9FNQfxMWIEPaSq%2B5J%2FxtsOJL%2BlD17IzfVcd5b2uwfaeoj%2FOwqStFKAt2HWbnQ1EBHvRdQpk%2FDG3uCEv5gHSgMW2%2BWp1Z8&X-Amz-Signature=72e0a0db3c35b6c13899fc4c481181ac44e224400ae3679878b6d63e80129810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

