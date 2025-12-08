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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOYSLWJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdQwN04JNn%2FqXBBGHPAURhKuWqMKqxuTDouuYuXSzEDwIhAKUuPNstJR6Cp9GlxaRYKYYP6KOo%2F8OJm%2BQsPtCqw6RIKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlL444uJ3vU8qYHRUq3APLwMgl9B34S6qCt5j6mi6Q5IkjpMjzQIM%2Fgw%2BY1XLf94aoZEPQeZpGDs966CuYvZibTl1gYhJ46Jj%2BfBoQ%2BmvYj8fx8Osx83nDKNZdYAywiC6qQy%2BiLRr1vcNINA4xDoW72UW85LsUbvGxFznf1nS5qF5ppAuxn5Knukson3m7uP9cpwoH06ktQtTRvI3PbqSdsD4ZBm6k0lv8aUQeRjG742IH83VGpXt7cLUDQ92R14v1QCLp49PJTBs9NMXEErDpyaLza6hXMb%2FNB0mfN%2FZEVCg9TKOBBaxC7rNswk3aJMvcobXxkWXD5Cwy9rvKVnRFWIcuP%2FxfIbdNiKRzb1%2F743mrbwd42Lmf0jnFZfKLmwTkpNf52Aja%2BR48URsFtc4R4qe5vqUs4DmCCIRMrTA98x41M388b11G99tW%2FIWr3IeMMnt%2BxbBgbTG6W1suwP17RS6O0LTiciEhh%2BHWYsJe9QHydxVxAzehEwfm6eyYLYzgKAowgv5ovBZxgxEOjmT32BUkgsFlN2y47l8hS6G1YwSJYo%2Fa%2BGb1ygQoRjafzCRPMOdDq%2F9V%2F%2FS2Tjf6v5vmlo72GJgpGDgoLiodEndKUL23eTRBNz8hWIkQ0isJ8r2N3AioaK6PlZc47TDo7dnJBjqkAbe9tONwO2o%2FMAcoj18qu9FE%2Bk4XZKUxNQF8Y2T%2BFJlka19m3TKq9xBNqmqY1dIujTF%2FECV6H1wSJJ9W%2BxmQHKL4vDkqiCql5%2FwyiWsDNGToG%2BuEJUfYEgUbZAsiAo8hW0Sy2op%2Bf2ExlJdjl8%2FzHfwlYe68Q2YtJVlpsmnA7Tr9gA7xbJnN%2FqTBSOo%2FhnkVMV4vjrNlfHn4o6qrxQkv9qB0QPNx&X-Amz-Signature=4c5097a2a77a1c81dd85a9c690edd9e6cc086a2e00559af098affbd228370863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

