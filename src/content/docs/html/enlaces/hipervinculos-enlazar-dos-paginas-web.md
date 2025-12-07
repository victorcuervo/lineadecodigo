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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OD3FO4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7bCYapHzmUrWcYKlgGJ8weK5XJgDLKG8Av1uFwtjcxAiBFLHFqci0gOVJ4py8FWezPIUDiGGcYH5ZFedwODHijkiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOTe0iSUFN%2BKahP6pKtwD%2B4moxhreF0PND%2BdRtkbVOWt8X04BIBH22r%2B7r%2FAdZiQkcMSgyY6odqYSBr2jvXnguRKoEvf5KBsiWeGZjRqbImFCRXO73ejOzTxf5FbCPz2PpzQq0Se7alaHdKJEe82plj7EvD9NOKsRdevswOEYHCiI8CU2f4PbQTWrra0hX%2BtFIOBYdg0Fsi1kNVFUrlKswDxhfP1HhZ8pq1KBJxuUsDf4oYJLf6YcKPn%2BfhTUOrQEzEnCJ%2Fasr8imgqNtuOuXLT4my57d%2Fzj%2FrH7Srt5XAA2%2BzmV4Mq6KnrBcnOw3nL9zv2%2B1BIQj6IHf9epkHqCcJVgkX60y%2BLhTfAKgpYtlEy1LfeqjGrg6HQaC4GazmOeEb0hxT5GjrJ9XSXIC4A0wVNcPJ7XnXxgygeRd4i9RzW7mNVCqVtMCmqswVPiYr5gphMZnnI2%2FkdtHE7OEbfuWLEbV4KsIGLpn4Km%2FwrOvTOqK%2BmPvriqRAIhKRPOkzg5QJRUQjgRz92UmmFYrSFfXi2epdlmwYDyGd2yJEYIBJZn1HkWcNZxuefo2tJ5ulr%2BOoDDJa4tXsdzoS9nBNh5%2BjfdKnyUNLgFAJjz83wyR25uOWJXIj%2FFnonhL74HHI2ZJMjKn6FVWD8IGvQAwvaDUyQY6pgHZ9dhnDSmeb%2Fnl%2BuHvJJLnsrvGLXGPmwt%2B2sRjr4LpSLSuU9ldmd28cGHOPXNb1DZ6pUzDU2iVfsOZOVJld9c%2BBnZDDq0YkUYCAjyL4mLQ1VTdv3oR2alPeWhLKJlrcbOmUx%2FH2nTpoOfsZfC00se1bn69vEKOcJIyYZ2QimFvb4B2PltFJbaFoP%2Bnp3CjYE80jAQP%2B3NBEzSZyY0Mmv0HZmb%2Baj3T&X-Amz-Signature=30c95ac41134fe8b9157ca42f5da9b83aba845070331440672992f4eb5b37dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

