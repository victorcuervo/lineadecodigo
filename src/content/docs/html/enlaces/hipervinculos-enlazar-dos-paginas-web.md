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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3K6Y5DK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX8QNmGsEIjQ0LilAPUodNruWmrqgYY%2BJdLZsGdv81SQIhAMxSEEUXRpBQwh4hOukP%2BlOQGszRU7eKu6X1rT11hEfLKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAoKN1D%2Fc6we6MVzkq3AO4VreA1WeOH1NH8SKNrgillXkJupY7PFbXk1opHJ5qr1mSop3TrDVAsAtDxIiI7ESxYYe1M8dPScLX%2FY2x8qSCGtEMScYOitJ30YMcsERL8kapUv8WqGoSmDTyjJcDQ4olOgNalaiFQH83ShVDoS62knXkVvpk3ByAq%2Bopnx8FNRDXfR7wRBwjxgs8QDxOibC9tZy0PuEpUpHf6gInmEw5KSpFmXAVyvVaUFT8JKgF5eV7Ftm0o1vmlrfOeA0KZyiRCeVPODuHGTS6szggoV4M7XUkShsCBGnesFwpVkgwJp%2F%2F%2FCL8aBVYFCDbqo6mQN3EhUaIlR6FkQ7xKnvTJJ3lH3DZxgF53nu20aYASOY%2BDwwgN3GKt9fwabJYDilDuJPwq5D4THOCvch1u9TG85QUzi7f5zvxSbmYPFApGjpsAx7lGBIsTVhT%2Fx5bSNvEZNHOw637OjgXb5dl4N%2FlhOdfOHu6iSBtpb%2Fcaw6di7v9i4%2FJefPMOWO698%2B8RRGzLgatTkShNvdbcvF759zVDX%2BJkabirNTSJ7SYH0g8d3fKqtP0JKPwTn80IBS7om69Jhr%2FCCqXC06tcJk%2Bur4hB1oBTL2mnR8yx8b08ak9hp%2BH4GIoy2BF4t8geQCQQDDYhNjJBjqkAaAUAyGKkIjDcdfEKAq8e60wKaF%2BnRMzIYm8SqyCdar6kvOk7JmbIt43alzL506q4otThxP8qzuDjpdsSX3%2F7Z2MQSM0GI5ehb6djhsjE65KN%2FxOK4%2Fu2OnIOXZI0z82dmrgxTwVKBK67HJtB8oevUMEomEmN2OAfTPJ6Ks5dWGxvP4X%2BcsZn0UYQ3Z92S%2BnV0ZPYSSktP08wBOpj565Wu8qL6UW&X-Amz-Signature=1df545f08a4870bfc0ab05384528f1e6892d02cd426679ed23800520c05bef7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

