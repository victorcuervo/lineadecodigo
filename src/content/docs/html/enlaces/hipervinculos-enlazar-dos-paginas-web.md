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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOKYYTLD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnLng0LAhjtVuc%2FGrHP3LxSxuKE0AalTEL4LcWw6DLFAiAen4B4IhCvQE9hkb4w2oMBoUJtu%2F%2BXP87mHHmxAFEgTyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIML8uUBnG0WrchYjrpKtwDCqDKLbox%2FHJRV7HA0S%2BGXADSeb4YPGVsC0va6vySxzTGzKFGiWPXxTLpDUxvvCCoJjrbUElWGT11KHnrnS%2FMuOxbXcsyUPffPiF7W3fn086KLRXXaFa%2FH7KqF0cUzAdNjk6abpaUEdwopNZHV7gZhFaX%2F6gGD6237mmk%2F2W5mYz9TVqGf7o8x9MYUx6AZFEgcFmyoxhlX5v618FbGDC3nQhx4KfDE9iDf5kw3imyyBp%2FXDBxU0BSqU6lxCJsrTypWhcT7YohZIQCj1%2Bw9AD5HZF%2BK7J6BMhwCX9dNbi5NU8qDWvZkNkapp6HHNaFKiezLPzTbpr8DJ3n4jekliUJaxoipcFNxpgPEqQ22OwSPKkGiVVv1o3I0anQfSuVY8l%2BwS6ik2fmRPJYgq2WOpDMdV5ASzaleuD70lmxAiUE9QGoT7YDHamSIf6TJBcZrMWm8yDPvqfd6Rrj0ITqDD6SxidtsaJjuGrEOPQqrFmr%2Bs%2BcOzUCG9YWrUajaxcJhTt7VZX2SjAVohVc7Ng%2FDJjhZuDvnwSBVyEdT7WHKdx1xP8mCjK5lhe7E86M0Pzz8QUqIzpdEu4o2vV2nl4pHCYT2V0Zf4uPToAKRhCUKjjfGm6rd9sayR9BU70dEx0w5PnLyQY6pgFhbqEQ3%2Fpeu80NvLrSKN8VNkP%2BptBA7JVhr0JH45nW%2F44sFtesm9d%2FTno4GF%2BYBp%2BsAA7dJAeNrPDHplH7tHqTEQlcMBFgyDEsKA8mFxqWNEQ2fA9n3IMwEg96sNqzjaRH%2FZT1%2FSnIx5H8x%2Fb45AQR5KbCRPs0OuUqeekycj%2BF1HkU87UtxccIMIb7rLeowxbTNXGbSraNytHRaQMXX4uBPOeHPoDU&X-Amz-Signature=f407406ccee9ebb0875cccbba94a9d4626b7a9c9fa7ffd307ebc5897defce573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

