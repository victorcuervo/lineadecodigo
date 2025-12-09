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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASMPHFV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMOUI%2F%2BjHQOnqpvWD%2Bv1eIExoD3tjtPIMWJ44NX737RAiEA1Jhp%2BajwVPdBZuxQ%2FQe0FghVYFCdUfXqwsfB%2BVExtz0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfadLkdqb1wo6HoayrcA6XgZU%2Fxda4H4soG6oEWcPuFxSKC1DMjqexhW8ITA62oV%2Bgn8dnUnr80kuytTjZEejeUPy4GptYpF11O1YDb3yxkoWC8ShWv%2FjGEU87jkoqagy6rBah2jD9yInGUJJpumRn7F1uoKMp7p1EKUsd5xVKihr%2B2dEjr%2Bv8%2FyGXynV5LvEA4ZolPz%2FoEZiu3KSw72DbQO%2B3ZIbvdygLRWT4Jxv997UyHzymr3o3%2B365xMD63464fa2jE8PrOtyluZ6KpfHXrUKiHxPpb2C2i%2Be9lY0xbvJK3B86ssLtCZiPIfOaV5K6Bi6osjBKZbUXWYQT%2FGR2bLOZpgFkCxQTRZVBNWimIvU5oCTwjVOMZz6vq5AEP3IR1oE5gbytgO30jlcKDqlPxlVbO7JqEiR8SjYE4pxYVzzu9j%2B6VisvoH32mejlQmClXgONrVHmAaOCb7%2BJFL7GYnxXZyj4FbItaGjnTVdzVaiACI3w9bybtY8Cz07wiUVoEl5SKL%2B2LEiFlpXUsDmVJvhMuPvMpTz9kZZovhSEwNdWy4rGdMQsnzlJ1FWeQ7iRzUUHejMj2bFCF%2FsMPSurk1xwFthYXimUg8UVkLb9pkA3v0Q6TU%2B8L3kCcC9PE9RppeJxOsoFcFvWhMJrl3skGOqUB6pWgOd48GRB%2BgPQhtrqjajKPISubOr5jKwzXvWrDOXqgeHYIz%2BUhKEz0NJ1sJ4mle0Lrq5djWmF7NrZls0xqn%2B0xm04f6BKMXsUuOCciJvkcuDqiEA7ipNEjsp8hUy%2BkUsS%2BUQSnAFDzaTBpjMHvVjZ26aDIwWShK3RKWrI%2FiZOoTiorWfCf7%2BzH%2BHSI6QrB1LDVL1MOPsu1WS83%2B6%2BrvskpCNkN&X-Amz-Signature=7661272a7f7bce58c59746ecded67dd1f9329a4a2585e5b96845d80f90c196b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

