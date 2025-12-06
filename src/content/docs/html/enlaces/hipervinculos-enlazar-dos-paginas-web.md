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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYN7IORO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Pab3yRwEBwewx2iW7ODeF6zjr3u4QX04OVswrPsfQQIgRkMCDm7OnpYvuJADb1L49BVw2OoH3lD%2FlBn%2FsTgKq1Aq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFhnsyIqmA3z2enw0yrcA5plOIxa%2Bo5hvDu9RqYA1DJX1rMi2Omm3lNQAjlHUb7cXP5M63XRcc6phtcxbBN99Dze2o9JllX1VFsZumXCLSHtZ034QIY67TDEKg0ljq6zlOzq%2FoDeIkPgDKgle0RbJnpJW9xeZmRvsGgMIgHBhJmzvJxSdeMxC5gMkcEE37RHkyS%2Bpr0g%2FrVe3IrdgEGsY8A8B%2F7HAKoJXFOgO2GgtaBdckWu4mzUqbLFy0qWDIA8I5qUrCdbnfbA1rrCT21TZxJJXbTI%2F4KPTfMoWImexnJPo%2BE5yfwgME8O1XWqT7FDArhBjmCA4%2FAauXdLKOrDw2k1cJov%2F0k8S69KP%2BcCqakzIgt2QaalRnCNz4y6RUOLhB0S5bO1j5lBIOQnCW2dohuefFMWWJ6ai%2BtTrldGOrsyt5HPPT2WjPDHgi%2FMZlL%2FeL9ku73XfLy00xHPFkfcCsWLVq5T6HUX2rKbE8yaNWD2oa2C8NiMRUMZqlfxw7H7%2FqpeMa2rYQjj0XzeS5P4yluSJPlsV0zi3%2BGFFPWJ31IUU8H2EB6kiuo5f%2BsSC09dhU4fhQ59DfV970EX1CQRloWf3R3wsS67ggJ8BblXrfrJ1n2zJkhubyWkhoRi4ccLkZ7hEckcmz9ycEE2MOTJ0ckGOqUBWhAJ7ZScAsU3keqICamGibA4ih3xbn1CFA%2BtAxeIuKiQYbqDggr5JYrZfOBm%2BmjfEe7Bv1A%2FeZM8hIkJPtbnPl6iAZJiGaGzN8KCypO3NcRP8d4K%2Fjv5p4V%2FpLFmzSxn9CGgg8zkmjOg6rFJnzqkl9WOkipOORrCmKjvYsLOEA8ehM3m9i2dN7inM2D0%2FISb9bErsOQZi626sB1pq7Q%2FGlFi24vS&X-Amz-Signature=36c6748521bc0a159e42f70fd42bf0541a2471197cdd8995c8b697bfc977f0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

