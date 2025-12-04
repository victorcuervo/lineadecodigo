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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NVFVZE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQChW3Qh6mZEwO8TSyD%2FgjG4yh4LJ9BBYpZuH9eqcHUTbgIhAOrp4q994HlGm8lC1VT%2Baop1f2ut5DMw1s0mvjwkqD6kKv8DCEEQABoMNjM3NDIzMTgzODA1IgyiuwgwuRtHJUrusFMq3APKRyWaYyeFnQlw15oPjJPF3UxFZtO9l6Rv8Sr6fFnHGyBQCOrtDpqcNRIJSbyO%2BxDtZNd%2BgSJ7z3ET0KCqlsTe5upPu%2FbKxbnHTFxDsO3icar%2ByxmYm4zvCLOidsJuKJeeJQhMdiPvvjQ%2BceB37uH8lED33DMU6ouMLXP4joG6eBaFO9ag%2FpahG7%2FMlbQaX8M5R1BDqfYvttNM8%2BsdYG87wALnMjAqYsbeZub7RSpHJOh2HGeaqDm12Ugvonc7x0rtXnTqv48VO6phb6QGfiJVkIM7zCN%2FTPqEQ6JKkUqNbjmqW0cmgajMT9rViJOmATUWIzZeYGWBvYRAG2itVxrXOEb4hpBmW6WNmOYFRN0SedGTNMlLc%2FQYpRg57xQ93oUMCOo0fJFlsTOum76E4FFc0bH4CFiWPL79B0QujwDwHkHpZGoUqA6sVN%2FDwao1Okxg2dR3FS7ZOGX4KzUqsG%2BjiUjc8elUx2yvgK4GXlBwWHbSm7JcS1yyuiKP9dZGW5D0vdpxGXB77OCnazs3LtaDbi1wH5dKx18%2FuW1T51mUB2IjV%2BgetD4EzTEoRwuybW136xfTi%2B3cLTmnuylMlGwAIQj0G9qRzqJ242nEXOQpp60g%2FNC6z6yOIFp1pzCBhsXJBjqkAcnzELhR4QeEWdnau8CsFdb4DaTydB40MuNbtaXZYVupXiC4%2F0Nr1GnAqqNdW8AoJIEPtHakhUuonMuHThFmvS38iZamhWMVU%2B37w0qGpQgQ9O18CjoWImNcKPOvhkGvbK42FaSFkhgw4Jcb%2BwSArlBTGjnjqhDVl2AhxC6mvVO3WyUpWhtxnLkhQ6IVgz9A4dtss4SrYnFe0RW7%2F221%2FaMEq7j8&X-Amz-Signature=0e6fd54ffd6ee453d824cc200fbbd73b52c5d8cf8e9caa26187695db9644b2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

