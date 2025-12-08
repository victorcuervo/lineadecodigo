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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662WQTQW4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC193tLwWvNOAkZ58PywDIf%2BAP%2ByWiXZjgKNcevwAMZBAIhALU6crQ%2FJ1ks9y6pfxhWDsf%2BVvogYwvRTyJdFPFEiL55KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznY9gT2UqfSG0Vq%2Bgq3AOS1l83ByJq437t84FVj5SKtS3twLFFfREMxRJhE4lfZRGjhy6voMzoOqKrMro%2FyRpyH00Gabx2e6ctATw4t3NXEwqJzWI9DixBgYW6lwb4Zf9GZRrNZWewipkIJ9aWNG9RAc77IIaRErpcdQf2rdjco8inHJTe9BGYAHltkX6Et7HJs7%2Bk7gUyO8f%2B7ZCP%2F53eg2xxiRYVr1LnhlPF0kgZUXXRiZkGgkFzNUKz5UbqX6RdgWUGnkJghiFAGn%2BE6cLlvtLhusvMeykavUNK5je2L2H21etk6dkJRtFFkPgTDIk6Y1InMTdWJmdD3RAcq55GT35Gt1zzbFDe%2BdUNPl17F6jUaWmtPs%2F3fSRJ%2FlkSw%2BgsjfFpdAfVmnCepDjxofAsGIqtKXPjPpg5zfiuZit54Xd5quEZ%2F47D%2BzKt1kco1WGVUW5iLF3vr1fzefgO5qTM%2Fn1OzI6DAWBy2i5RF3xrb6WH%2Bq5%2FysseVNJGG4qwG%2F37qKYQCpw90bKAr6Uhny6fjbPFbIM%2BqoPTqCd1LwgykNcCkFLLiR3QWoo8S2yCB0TZdiopCHipeZBZmUytCe2R6Y%2FUqBu9VCMs8Suel%2FeinJGCa%2BR%2B9Sf68CfQpnuguTkK075OiDcKu42p0TDf0djJBjqkAcaHQlEZv0a3wlNWCqAgCEPBeHO%2F0wQwL37uBkmTqgY4dLHsRJncgWr%2Bls9Yj4edeU5iLCpoXrWu0FAo%2Ba5y%2BcSuFZ9yqjqSqgVHtJJOhuKY4tIWJBnBqShGCwv0qNxhhEu%2FCslIvYeC2bnFYCMeP7flyiAucmj8%2B9HzdTJPmg3QXKUzb1yXCyv0SMJqaRM7Yc0EK1gJNJwiKxov3juoBF0UenXV&X-Amz-Signature=a88404d07cd85930c3aad0bc428fdf579c56f6ab6b915ad386238eb8c2a42229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

