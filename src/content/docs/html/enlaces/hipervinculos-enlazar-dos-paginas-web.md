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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDIMO5LS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD8mr%2F43R9C5RQwSNpHX895L5Pkz7D3OfJ0ZVPpBARf9QIhAMIQaR7jCHX%2BAgAPA%2BItCPiM5u%2B9D69vOahHjWJkUYPnKv8DCD0QABoMNjM3NDIzMTgzODA1IgwO9s3%2FCM9WnemqoiAq3AMXkh%2FT%2B%2BwvoJj4BD14fGQEtVI%2FNjkAH13dFBKLS0LP%2BW9JDyDt3MmpgsfTQ0FpIwWCAbYt8t%2Ft38BIBXhKvX24piXBsyMv4PzxGz7cS6w%2BLYyg67I7f%2B2owLpBkzvBzpKRUYht%2BSwfpD5e6oGCgZNAhClEm46hci1YcIK2Bxp7Lo7mZD9dcuIkVUUWWzPJgEXf9DopJilDVgHPwedlOkBSSDHklb6eUwBPr1BHhoU3PIRo9QVZbxyqGgckqUxFdxRLnf0FMVdcrewPCd8RR5FN650FASAiqI0w%2Bc7gUmEKzRqHR12g%2FpBKznkPe6o3hyBPDvM75eLXscBw4%2FU%2FyrKo2mvjyN%2FvRNXY71MHcWKx5PNXJkF8AD4xtLkK4CDxc4zAXEGL4v1tRDKKrt%2FPJahiDaLbF4uM9TzidwNICg5GzcXb%2Bo9%2BbIXk9DZnkLsdpsG8X8NjsxZjE4bVv3oWjkpJBYGvVOTTWsA2jyZapbbWi1Jc%2FW%2B46er%2FhbDELYScw34QC81Ifla3tYO431tgy4cXWrfjBDZSiKESvQ6lXl1Bu3fFTznh4tpx6es5dsXWvhLXd8FtxvvAFjRo4bc3oQ4Q1Vv88xl%2BwXNNRoGl0n6RcPBE5jrRj%2BJ0%2BWhSFTCskcTJBjqkAWQ5YTqovfbr2sTxO9Pue6bx1dEEJGq9%2BAn8TFqnD4GOxnfVn4e83sG%2FcQ%2BqPdaVgAIkngRkSPFOJ99lo19slCXhMnn7M9Ja4ri7s7R5S%2FnEmkCDer9LE9ZykAoW%2B7ZUE9tCNuYlR4ftlUgSlOlQCEeuQFqaDYKoskntwBB99d%2Bx1k%2BMY0WyGq5G0NLbv1VD3lkp%2FGBMXG4ZMmn1QB86yTU59cRb&X-Amz-Signature=e46b7705078ece50eb0d4391d22ac7f449b4cc0133b7c81c26171e3b38ee61c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

