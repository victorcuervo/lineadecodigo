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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYXGQZUL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB570hVIUHcjcTeMu1O30%2F3HrlBEPCVTx7o4WiOLRY7oAiBI7NtTqJyal9ewSeU0IlmBg3i6W11cM5UpCc%2FTI0SjXSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2BxL43xzrJqnjKxAKtwDnhQvnJcABP2Pyp829fpF7bbjizzg7SpORYd5szuDZiSH1q5U6q4gKWQaA2r9%2BtDtF9NCbqhlTkpjfUB0%2Bh0smJBOhzKs6ubuORtAGOXNGJtezkNm%2B2WufCmAw6%2FyjogVvB5%2FiHGmQS%2FyYb%2FPQWeETUnvgryGpGXNcTlEmuTKsGGPgWFe2UB7ysErgA4VpQoqbH2A5runv7rDb%2B7Ew2G%2BziuUC%2FjiXBUO2b%2FV2IgHIn3F7KK8U0HqVD2%2FiJac9f6hOD3%2FW5gD7RXrUqcU%2Bt%2BEbj7dPrj4ani4rrSO2U74ALGxieZ%2F7on5LWlTtIT890lwMo7f%2BDOddEacbheZ%2Bfq4cGr8BsnT1O6JhhiBhZO3O0Dsh1rj3FOqyU4FDAoW45ioGsOKJvC%2BrUOC696EWdgNeEzEE9vuDNAHl1o%2FlBb3QG0wM4Mtlno1ZIprBjPFHDoqm2aJOeXT62q5YEzMPMxpX6x%2BPuQqYgt2M5Nj4rlqEliVfdJx%2B5tXfAciwrFO%2FFr8zFAgekemZPQWB27yCogUc1SO17C9EMurAhZKJ2%2FH5Bj%2BoX%2Brod%2Fpad%2BSp%2FPy9NDHv72gFDq23wVf0Fxa7yjD11nC6WCMy3PcsS%2FN%2BQPadF0K0mND6QXq8VkR7m4wjPPayQY6pgHoI%2BA9Bpj%2BDe1bFr2Bu9vn0qlw7etW9ELwfzD8JEly1h%2FvD7JrjBdXjcpmd2QCRLkzqgbjNXL92E6%2F1MsTprR6qAgWMvyywVx3o3SeLf39AQ04XKx4nZda73bExdsTtud3%2Bnn8eaYudiElMDuOj7Ve1JHTVXU%2F6EpJLMkTWHucHA0m58%2FXLsyPt4okaVvZZABk%2FEYDlbNfRWMNQ%2FNpkVGdsYS8Mvum&X-Amz-Signature=27b6d0efa8dcedbeb63f1adb479642e22958203b9c2a6512b0f717ff7074f57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

