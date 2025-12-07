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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3C4ISZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxH8J0JCtN%2BqLrvD0H1SPPYv3M8kRN0xRvRqwfAIGuSQIhAK9jTFTjalLAf24WYNkD3mUSnNJhXBlU7%2FZO18B8LfDmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwYOHIYlYqoK%2BfgAYq3AOw7UaBZRuzKVt7W8WSPjlhVVabxmG%2Fy54sZCDxmoaH9cg%2BLxaYpl0%2BZrPwmXc3JyLJtKslyOwoaBcA61Hi2RjLOQUFAVbVMLArrqKF%2Ft%2FLUkIcDOijOO6qvBGwvkXB7c8MBBhANY0XQjIShKN7g%2Fq%2BuV%2B4vy0j%2FjyPGbFZpmoEu8JdBmRQmXRsxOuth9TNAH7QOth5b%2Fr0vWIwkzFnhHGAR8v8yAJJqoA%2F9V4AFe%2FwDQxdVWbFmzstm3jjqlGLMYAmMpfZF0A4x9DDOX9rEZ9oOG3XFuR%2B0icHtLAUw2HdAYFctRLXHlJKVZF3NGM6Z5eLzHyRFXTPWVgVsdFuaY%2Fad1X8X7WcgGFAbaXfMcwrPCwzXTRHsw2Vtk%2BKXHa5feudgjkYkRiH3amEPFiL4V1x6spk4LvpSenS%2FIF5FEUNQslTzIMl4Af92L7TA18fFhXc9yuJPhryi%2BjXVNYLct2l19Hnn6XEKB%2BAtM71AW3JBrQo3APf0XaymOrfE2XTyN8hD9IczF9k%2BItg6ELCd%2Fv8q0vIMOhNyRkyQBZbabgvAyCQ2rO94QHkRYTWwL9ZobvTPmYwIOXOXSpcbzthji7FdbbfoqrAVAgs%2Bc4JJ%2BMvLhX867xWThFnOHgILTCx%2FtLJBjqkAQmMQArFyzr7Ft%2BlP647JTrpoNkZQhfENQEBkfaFSgBoaNFD3eDK06BCXFN62XOOET369s1jEiWkc4bbdMyyFAHWwWnGhWagHoTUjOWaswOCu0D0hdiPnQ9JSTxYWbulmgFcPyKHjiWAIUkpsv9JI4BeY0neXn8qixLIcW7r25G7Bzi%2FGE15gGSnsUVZG7sHiT3A2dGZgUd%2FL1mURobK3IT1k%2Bdy&X-Amz-Signature=5ce8a7d37da01bdf341027dd9538ccd6e35dd949ca9a7ec1c7994aaaa55c0ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

