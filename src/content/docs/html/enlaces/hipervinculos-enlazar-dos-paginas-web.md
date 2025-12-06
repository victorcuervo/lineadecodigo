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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVH6NJO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSB2rePirAyKSTMFPQcnUZAmS1g6Akir3Wv28LXcUTGAIhAIphlYMRHw9NFTARxtQA3pAkzrXS5%2FXV%2BrcL9zz1eK8kKv8DCHoQABoMNjM3NDIzMTgzODA1IgzZp6aRvBR9ZI%2BxxIQq3ANye5B9OFLd9hVQNP7Oa9birFXekr%2FSK69B3XuFL8FdG2dlDuhrcBaTtYtAXi1dJ85AV%2FkHQd8XgLxO16w6n8pIn2QBlu6Hvfy494fXnZhcp9cv%2B5Jke1PKdifDPK7FMLD%2F%2FgQO1nzjvxwLC1vHBUwrW%2FXCw2GoFVotkaLr9NnkYRCp9O6lx%2BasvKVCS8dSY%2F42N4tO3uLdVQsdPxAu08zMx%2BJ9h7WPMbxxA6clpGeIHG6kOqAbeZzuFd9sFNei75e40pNdhlFvRjoLS%2FQNTIGoBSYsP1XLtaCOgs3QPUnl5%2FV7PzATDs3Qaf2jD79h89LOvKTdVLfTT7imtTSYy9sQnvT8WJ15vzfq9Ot9%2F5U8FV0h7RHEP%2BV7LsKrW49lyMjsrAQcap1ipuV0I%2BoufWDCJEg16URiWB%2FRCL%2F0P8DCgx99YKY%2BMG8LiTEbzxTXWznG7An7%2FzvvLLqePvTMsODJEIR0MWgO1Lkv7Go8WNuQE2IBXCGJ05owBY06oXcNthepxFElSetaIKGMdqfw0DK61kZm4hdZ4JVAolKxlYlOjpAJw2n9WAxv0d8sEugCDvCc%2Bhpy4q%2BKi46kVSoWjU01Jbu0nvekRguqx%2BKrPNo2mUD%2FqjTsXu1RfUtFlDDfw9HJBjqkAb3mBBFXXS%2F%2BxfQYfR3cMNptoYFV2cZTJMQM01EXNCshmqvWAqVQ5hHn4ETvCwGlZpklmKUqfXRAVt0vK5y8eDoraEbouy0xhP%2FNECVikWzVNQxgmoOqk%2BzzaqqXLSN1JLTygAOu5kjQ7cyXNrQ9xJcGtecrYG5A%2FHaxFNgWxCfST87nTmV8Z221CZ7GtNvAkSAO%2FnqYAWL9sx87VXYeBUJRO8J7&X-Amz-Signature=bd5c91e1cebfb4c5c0a70bd227901d1599408f63fa4aa1cfb79e88c298d7427e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

