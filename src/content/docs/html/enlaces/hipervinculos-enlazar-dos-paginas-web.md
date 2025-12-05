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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO43U6IT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRgRcnB0FFFGpb9jDXvWkrlXKTbwmCeFlTYszWYtWYlgIhAKJNc54RLAEd0TLpb9pjlsijhJvzwG0oRyHtlMv6NUr0Kv8DCFsQABoMNjM3NDIzMTgzODA1IgyBhG5exZq1Tt2BeKEq3ANJVz6oNY3li21i12Jp6LJp3YrD51Dz9HAlAsibXuqtR38TOSN3XY7GoaJv9i49WLzXsF0KMvfSc%2BjOREJM6O5uhfVgAB%2BaYnP5IV4Rm%2BROlps2CDNE%2F8mrCDc8O5FOzjmY%2Fcp%2BfVjVqZUhkl%2FwmO5dbJ6S3LL3usPYQtSrgByLKWND%2FM4IIrWDe%2B%2FnGrnEcsC3bEz3xiiq0iZOTKKi6RqJF0utzaf7Eou2BouTqN9Ly%2B76IVyWlopFAfRVM%2FQQCGLiEo%2BJT6gGkug%2B5cNbbwWYYQ5yzWuA%2B%2F4odt1D%2BcSn9Lo9UeuXtqF6LlJ4pS5ZC7DssMzFls9RcVSQWedTT%2BylaO%2F%2B%2BDhBok0nZrhHPape%2BNb7fYHe6FyOIhN%2BVi0FuO%2FeUg5gUi86RMMsjBskjJvW6povzHKYhtEEvTGDUEZm9KRyIxvrKrMwaPDI1lO6NMJplbDEt%2Fb2xDG3XoPR%2F6Z8EabP%2BHsQX8hgMB1wkgr3kjrOf%2Bb6HVhO1hNt%2Bm4Xd%2BfSBwVbrLPf0VOVeDnriNg%2FxSXXtpUeffW61iRykp9kSCq7JIL0e3cqsS1%2FAJSqVQ6sFr0yR0TUGZtcr42w8s6c4urrhg4oLiqnCPNsobCNNClpo%2BQtVnXJZdeGljDr1crJBjqkAdEbdOYM7Omab%2BZ2JqetbU21hUzvH%2FJ%2BqJRRlJ83QRO%2FsTpuILqBCsyqi9jGC85GQeqlG%2BlMw%2F2IVHhgcYT%2Fv5KSUMpsLrFv69ikqcqmk8E2OTchQsaGjwghvFQuAepM%2FmEDnKnGEQXKzx3GWj6ULHyBf%2BQsXbaVoojYco93D6ORLRqcE0ZQi5kcXjV86qpaUzdl6UOPoqHXvtElfNzdflAbFC1C&X-Amz-Signature=e39a417b5f5c8570f0507559b5ce83e9f3a39cb7271aee843fff825ffd15fbc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

