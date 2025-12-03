---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DV44T2L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCMLoSqrWjQ5Zo%2FNUwFhGjM97ajgv2tiP%2BW25sU41cw5gIhAJYoTgGhZJxChskJ%2FeEjqQThu8ICw2NDDUlvBI8yO3PbKv8DCDkQABoMNjM3NDIzMTgzODA1Igy4papgz5PcoHg45Pgq3ANPwjC9f2NOYgpVHyp%2B4iWaCEVg%2BInEI034ej9zEUL4cBwkN%2BhFAOYSS6%2BQBQO2s64VJtzu26ZPQIl3Ru2UBE3%2FlUp5GD1H6G%2BuL2vgHW9YCg%2BrwfdZ7%2BaerokTYUy7E4fhugmZW7gm6k5ng4UX3fK974DRpayO38NcVwUliv1CfktOmjSjq%2BXXW8FK6ay6StFP1NYSuZIfNs%2BOHqyQk%2FY9u%2BLeut0XbNkPeT1LEHMrzVjSChehSf4ooBldz%2FQgyXMzXweTO5VbgpcBuqG4JhMCkhKu27tuFK4xgdiax29xrvoMborDJYjxzLvBS4%2BKrrMWJwtwShIOpxsiWPHxanHBItyjNegJZLKYxDpilijoWUpaub2sdi3W2CJX7aGgEfAT4YkInW%2FipMJSchKQBa4PxlUuci9Ox0Z4wGGMxKLbplK9iRu2XhWmCI4NwQSn18fLdI2KFPL7Np2VJzGKWl7rQeqkxv9LGCO4dIUMROE0CiDyTWmE4lOHqk6G1%2By1eLbVNupbbtWwYaN16GtfHjPkfFqiiRcaB%2FV8avxi0hHjTP4MmlNg1lOhAbcPw3ykjcLiQBSGFQlZp6tnkwML%2FJt6RcYV9zoiRELm3hfu90ITYEwLsCmuZ%2BU7DXTHKDDplMPJBjqkARIySEJ%2FDSD0iGnP2%2BfbaiLA%2BMAdlV7w8iczY71aefjLuTMtuWRnXfo0t1xK4HSqywojFL09rzdINIsJRaiebMzEBVbPDHnGOrJ0HMVxPs%2FHgKtpxyWmnKLoGB82uXkIsk7FP7VO6d9IJ7iDQbqY7H3p%2Fjonv7ylOUvEpDPpsQb7JtNXKStn9WPvGTe1JqXXoLZE9JQ%2F1UTuLMrtXWfx6iH3%2Bzu%2B&X-Amz-Signature=84872377f7b8d2d83e0047e286e871985c20a16f8f535b1bdd4f513786929b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

