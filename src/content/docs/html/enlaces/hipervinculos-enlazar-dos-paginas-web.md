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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X32FEQTY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfwHGwCH9xxPxMsl8sm5uN2CwsbAxIasIIxlJAXSN6XAiAGUeNEJgRwwjRrzykSrVivNRLMOfVBEPL8iG5qgt2WsSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM3uG1QhkPWQF%2FLStJKtwDecaXislPTTsceWlO2oTkoAkDTWeu7RrW7sn3mbCO0sqxy%2BDPovrK5MQXFhEq4Zro8MF3n%2BNg%2B2VJ%2FTiPpB1bEsfBxsu5ttRHTUmC1DzaRbyudz3v9GrqQBG4n7l6WA7E4%2FKcgSF7BWQ9Igfocc77BInzqTxRcDTTrE6%2Fp4hB%2BxBJrfogF05CA0pvnchG2Jcy1LDKYqUN0D1wFZtwkPsW7GVhDE78Wn2tsnKe4%2F83gJX20h7sjlX3BV1M%2Bznbxa8gPkaMCyNZG0s2MIjwF6rfupCkR9gEK6FUYIxzCcK%2BNGKdH00HAXjIGFQfeRFM1HrdZqe2ju8PcGsgTrFZnEDW8jg13s6B5E64npOvlnT4nfdDSohFlLKSLZvEiQr%2BREce7sne2XOYiQzjG3AM6LGdqFJqEFaQs6dHuRzo%2Fo1bXgkzQeX3VLXWXmUosq0VjGbEIA6tdTrh2KIyr9Pp5Sv1uP4fYTxK4MCb3e%2FOSyK5Ol%2FzYpgIWcXgpo%2B2Rw4oK%2BseSKOteI5SA5ChfYxLYP84oIEP5m3Q7fcw9c7nQ7EbAafe7wPWLYXiSR7NO4qSNlMNZFwbVN%2F%2F4TqM%2FK3SrewHC%2FFKqcnf23HQV2kNB94nn1NrDW11J410%2FSRfl1wwr5fNyQY6pgHcj1rvKMauTHwzCf9sHVf%2BKnuveKYPQxSBGG%2Bbes1lZtS%2BWCdNRhOizB1psKHd1ey78qhNmAtyWe05WQ%2BWDudW8ufPPvuXyBwzeU758%2BI%2FcOxj9FAuSQQm3vdG31tqgslbBoYjT0BmBAyA41y9tfvHV0VbYtvYR4LNsKuvRDGmDjNJK8VTMtJO1PQaRvTqrxrI26hhRUGzEU6Us07pUC7feL4EMCWE&X-Amz-Signature=d4c7d88dd83f101a47d4f4a1f4cb4e9425c8ab845904751d5dc1ee103a4e670b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

