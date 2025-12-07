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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJHB3N6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3BbKdIhqz75e%2BxU%2FxCq0RrmYXVGHc6%2F4ico%2F9yE7OigIhAIupwwpjwH%2FP5tDP%2FliV5qlgzsY%2FKzdCbTSD8guvQQuFKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9dSdzHsM2nYHKrOcq3AMEQSv9B73%2F%2BBNEnJER8mlPokWeEeR1EuOYMrb4QmC5EZd9yJaxdLxHwJqm2icLaIqKctExcd%2B1RavSSdiNzDeezfqtFcNBF4VjDj1urEzN4B5ZrGDGyio4OOeFzhwkV6w6%2FT0ygyOf3lyiRNvOev35eeMBmvaXc8Atn3ZGfwvjR1Ivvx%2BJjQteaOGzHkBpuy%2B45%2FUb4UuWgUM7mJBJyzc3uJMXWtqwzJDQ32%2B5WRz55s51OXQ9sIFa%2BXWbiPJLi9rMrU2JFRwX8Z5QK2A4ajnbXaFoW3tYiOhoKfUnSfWhN%2FY1pZ4gUZ5unU04B0lUq9cB1K5MY7R5GUqWHdsKwcDysCbhQpZVzBmHSdk%2FtQBkSNHm7U8e1v16DlM9837lwF7afQ6NFZSHybyurCBNnKm8PPNZWUmqPS8Jo5G%2FP%2BZUDBflKiX03a2X77I7C4YQA%2F3MsrWptY5nhTevY5VKJAFtQF5sebowjAMKdhm5uOfLzIucEFABAHBbzEM3K1XugDsAA6tF4sLSSykXWjuASiMBTQpzcvkFnr14LM2fs7aPPgSC0%2FT7gsIPTJl9Pm%2BTqIw3zr2qlyRGZmbq5tYQC0w1rXfkb0wrINZWbWpso%2BfqLjug6im0HVMsdQlnpTDbx9fJBjqkAVVWcRpednah58ZHSMnACZ%2BJdLi8FYvVUlg6Zx6cJIEmT%2FARraK9qTuf5px%2F0LO3Jauj%2BjJ3tyzAXwhfUaRyfLkkGLR%2FiKJZvf%2FqiKuM9sLpH8mfUlh31ZIOkW0QLtHGFfumhPxDW1RiYsFPIGhYJojzZoENcASWUIYsd2Fmxa%2B8g9XXVEKMOHL7%2B5P%2BoqQ%2BaH62bqKnsSw3nLmi66UL5SKxlaZQ&X-Amz-Signature=6aad2b8479978816b788e36af30ea8fd44876bd99bb89a4e013faaf498767aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

