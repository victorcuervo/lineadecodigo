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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVRYMMU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjpENgQSS33H7l4wfDS7ZwS%2BFBpSk2m3EAdD0veRUTQgIhAJDBUyp7hQo%2FCpz1UIaAoBIwEYRTtE%2F5ThVKHV4om7%2BMKv8DCDgQABoMNjM3NDIzMTgzODA1Igzi%2BKleFGymLpbwDswq3ANX%2F43wOPMLbW09EDM9eTF1MdxebT%2BNHnyg7GrMulM6hVppQa2ZRJeAby1%2B2YwtfFZBzDxtGxNxzRGS1%2FZ7HIWG%2Fp%2Bq0HuYetTG2BQAdnsWtp5bx3ebBzMupTsiIi5E4Z8P70REjmXg9hbi6mK79ncsqe17Q1xSAiByw%2BKC7vUBLa14qkXiq8bubdZ6hvwCBobOLLM3E%2F7%2BTJnSh7RG6BAcJs0Jt3Z0QkStRJxv29ZLjNPgDa8oW1KOSRBy9JI9LppIC4p5l5CKHAmvqXODpw%2BcnZglyuoO8opCxMnW018MUZzFnCahZgYvNMNskiWXMquKDW8bsHFLzIg51YYnsKf280FaOPmR1fhhbYmOMdVyYfkFgQT3CMZ%2BSgj1hU61zqf4dnKFAI3r0YfAt8M1decscIWViKJyjA434wWlYOaQHMAqVk4WegJBFaO6eZY0SbwX9TDcMPe0GrCfw4umoY8xGA%2FeM9xyIg25WQtvYS8tHlbod4FJoq3J84NWF2a2WzBOddB4XbOkpgniCJAEUSkPc7Kf5lqv8Rp5bFlX%2B3INWr%2BRB8hPUaotEaAjp9yppKy68Op%2F84hz%2FFMnZaMhDixB5b6%2BjXBNLI%2BGROKS6yjYqSwmvC0IpRzcRF58CTDC%2BMLJBjqkAYNelI3oQOG6bcwKPOHevDXr5WkFMhETFhUmaiDXmvy%2FkZbrjshsEYPa36j6LRh0JxIYLuBjOR8q8%2BUDKOVeVqYsg2b9LBPaCZ%2FF8USuG%2BQ0I%2FGPUIy8IVZrAnsqrVNeGI96AMMgmbA3hZHDgGXYLOtHvGVKn4Mnh%2BTUuFECIemAbnIFYqpRyXXoZQDEm9m3DJU4EMQo4Cj0blM%2F3TtbzOgzBTBS&X-Amz-Signature=b3a6f6381002bca575d315b0db84f859d700e88f6193ada47634441176e3820c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

