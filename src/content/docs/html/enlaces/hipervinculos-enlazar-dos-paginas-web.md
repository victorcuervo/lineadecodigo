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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYNSGYZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNbKegoEap7cdlP9FoiVxKKC4LnWLt0qvCOx8kIfD43AiBCICz%2FKPyRAKcNVMHAnSgD1CzFKKrcFqEuKJDjTGYFLyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM7RRDQWWyY9WWvKMGKtwD6a%2BNBjLXzUah1KnpqGmupJxOS2e0yuYI3Akp5U4Ur6LquPwG48NLn1eQU2i4KoHhkcqB%2FnQNXh3EshcRyei8dNELfQv1F%2BSECrfmZgYD63ARTW6EGFbbQlraM1V8gRFE29Cd2643oqWjSB%2FASAzUb%2BoKwb1NI7XTTkOhwdrEKmokHhMhtg9UrwEB5Txn%2B68oj19tctJ2kp%2BomBoerGYMZjA5g2GKwDaYseZ914oeZq6oaMU5C4VSia4yjoMPdSZbZ3wUdYiHzbG%2F9X%2BUJ6iyqx0lHahwtgk3ASXmYZpEmYMQJHc6q3b7Ess%2Bwzvdilpb2so6ZLg2OOAm2hb21NKtq8ruDxE0DO%2Fd7K4JVtn9o4vZlMth7%2FsSiALkh3heyTRJmadKrKTIwrsIa1gfJR%2FthJCaThwoE3FNMhDkhhXLS5LM3%2BchtI0japRmBhq3sLrhNm31ukJUIA0oRN2QFVD55xUdVBoq%2BX42QetGU8WNtjSiai%2BFDDnykjxAufpXXz7zU2cKBo%2BwDTCCs5KKYjEWjfyZ%2FAVJYMGNUwI5Y5EOmOdtSnEjM%2BNmh99Cf8rIqocj09pMwLMALsMUI1Qmv46bKmbZnTQZ9lOEc3ajWEOem8zr7wKBr4e9PfvxgzMw%2B6bJyQY6pgHqkopjAx8K5wuZYU3T25OxfSN4rJGr7kakl6mc9ADz0Fjpngc%2BSvOFGH1SpClzmfepZhsHBQcz7ly%2B6KGpReiUda%2Fx5OzmHCSIm7Ghhost98dWWtPvtaJh%2FRnGh9lfQNE9qINHMSLe%2B%2BvL4cMvYoA2A1gGQgMaPf1ybWXzkmBbfRvRtpNbH%2BNNZ50AKaHdjPdbjQiQsLeKaIHIfdcDdZL3NHq2WNPA&X-Amz-Signature=1aeb3ccb18463f3eca490bd6d2e3e372c255fadef1f661e3af41ad5cbd441d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

