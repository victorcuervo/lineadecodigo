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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KR22C3O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4BlFaDCSn%2F6bVl2idB%2BH942ocNn%2BiAdk8XNS0NHOmEQIhAJwi3ejP5auXUtUSrs74s89TJukdLNy3x6QTaW4vsCLnKv8DCHAQABoMNjM3NDIzMTgzODA1IgxADQwgvJbvTlRdr6gq3ANjPMCo2hAp6LUtJVDWI%2FsfmnaPgpGRcwfSRWq9%2FfDEvfNIiJkWheGo7PvfLVD2Bj8qZOd58P27k1okFTNlGr0k6z6PisQlaIhw4pldwB4vqJmpPaOlq%2Bd8HvqTwl7yjjzfnE5J%2FP9bGx9d%2B9hnkdb4pJ82B6s6oMNkw6sJ6mF%2BTpqbRqhHfSYImXcnWDI7ZdGb4CXlL0HlaWsPMb3AkVEiz21OB0L9ROT1h5BGCA9gH9YldaqDp9j8Z1fs%2BTbT2fqqWLXg%2Bg046NursgcU%2FsLo7Z%2BJ%2FRn2Rt3wxifm4%2FohN6t57mvTnFDVeGiQk%2Brg74v9SQ%2Fj9QwcNnq6jbnuWDRPac1jTMu5BFINgKWCLfVe5VosKIwQIDzskQLuorCzYGu8pANU38IKKI2F9zHKyt%2B%2F3D871raLXzvoeMMmNHGDt%2FJvqE546dAojhM2jvm%2FuL00lKrOdZTS6DxFrmc0EA6vOhwkOA%2BH1%2FxZpdgwjVnnwaIHg6xyVanIK960xgsbG7n6ZbS2vy1yse57CjEvQBsw3sVAQLBbidkNvTLKQMiUez3jL33Tf7fYpwrhrKEJprvjnovoiCbUAzwJqkyZ7olwlKEkJ29jWUcvLJi9dywmMP0fqx22GDsmoTSWQTD9ns%2FJBjqkAZq9BLznauv9I7zgLv45Z96Sc43GFL9qSjbseyn1C0jS9aySSYSjBMAMIMCTNnHr5bdFZwsMNi4oodhja20G8Ne8mW6Cy0Rdlr0r8II8wGlXCejPT0%2FJGo7UzvAYBebF2TI3uid0KOx9zidFAZj7AEHH7aPFDNe3An3ZsDEC7ykRL9nIGoKCu%2BmEl7W6TlR48RassMPV2VHSwSos4F3R72eFpkGv&X-Amz-Signature=8e2b377f3e9673131d3af8050ff162e2c326909139c78dd27687f528be928990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

