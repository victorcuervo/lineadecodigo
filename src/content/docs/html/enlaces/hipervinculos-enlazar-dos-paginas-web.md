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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2KHACL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTy1WHd1s6rjNHJ21RuTk4lTrs1hoXc%2F%2FmReGrUvMtgIhAIGAxyW19dMOaW5JAebx95yhX6gOSDvSCAC4Z87h12CTKv8DCE8QABoMNjM3NDIzMTgzODA1IgyD587NDF2GxOYDG3Iq3AMsOoa1wBxM9ICVgwXboNYPCg7vjJO9z6E8D5gNhrpEcOK4HU%2Byov%2BEFLhLow745tygR3zkUH1o1AvBHOyAA5MeM%2FNoIRDoCoqJ97lHk0U9G%2FRcaS9RvYXQo71a2vqKXB9MnE2cilyTINzMINBplSVzGdCivB6Y%2F3FoEZb7EwmAt%2FKUxO970wZZE2%2BXYO26YD3n6C8IW6%2BISiDdh7H95HqKTZyQvMV1SS%2BigArpcDgX7zLze1Pod2EQUar0tZbW6QUMnVpLHRhFX%2BwAd5ARToz7QpxRzG%2FDwgL3gc1oJhefH0Xar6Xw5KYjiqpILPhdc%2F4DbImzV3ptIEqEHXimoyWMQNwNB17LMwfh4I2ZpHagh4x4kKfH%2FvKOiSnTg1ebOXdfgwg%2F4IrvqEe6qMRojvmO8PzKPArU1xvKfcSQNNmrTz%2FfmbUJVZXPemeVJvqNGUIcGDzKJmWpZtXROy36zyz9FHIw9bd0tiGqHC%2FRvp%2FM95a3RK37ZeYSnntThl4R%2FC%2B7zSKW9mgJkjNjvo5Cg%2Bs%2BuoYL1jcnTRDikG9nqIBzgw%2BToCoDhHBx%2FQ6PFcaJoxNEjC8Tqx32b3IFU70Rl6FI%2F1rAFCbgMy2hSVUx1Y7%2Ba4WabdTlCkIm3BH8FTDQjMjJBjqkAeG68Wb%2Bm%2BNIw3GlUIfvhFr2C1v7sMUwqfvV6gS2bCcsRfpnOU5YZOVALCBCszdeEfD8OqkYkNUikL1GfnqZ%2FSpadA9PNn3FiIDi%2BIESSGla7y3DN%2BBpgA1z7jCtBcBe%2Bl4CwNMhNZoBGxMYnEOcKu2Tz9%2FaKnYojBoJjPdJYFLZt3LSsAI9iJDKAgrsstXRx02NKR%2BoM2Qqyb5ASccW7Mh%2BaBY4&X-Amz-Signature=bbe3ea5751a99d964d67db4f55b65be429959ea9b1610c1a646e69716c22543c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

