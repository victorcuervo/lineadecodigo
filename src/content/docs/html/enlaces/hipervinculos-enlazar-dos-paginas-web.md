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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WREDNLE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCcp6n6s5L%2Be1rK1UKcQuQ%2F6V%2BZii27KpA8Q4%2BQZW9NywIhALdp9KvT3uVyXQO8hIhW0D4ndDtXLrhcXK3DHjDF2eDqKv8DCD4QABoMNjM3NDIzMTgzODA1IgyvEKzzjxXsrIFrcrEq3ANii7F1DEGogJW5pCnyVKtz2g8LS7Pmgk9T%2FO%2FT9PBAyiPk1vXEFHeqvcw7nSshs6PDNXOxgpYSPaL8aA0QCG1h75TSxz1maKn0LHfsVYnnlzS7MaeWM%2FOLWjvlScW1emePEDIkJMtxKIBrZqDdgxIyNpPmgND%2FnlJrUPHIgSpkJDHQhMwtaMMNOcerbYZi%2FEmQAwS6rpfkpYYejyOPou9R3kTNeoOyECTncea9eavXcwBn6JfkWxhIc5qVHyWVhpeSNJNuF%2BEsK7O6kiP30lEoAK31PrGh4rwhwb2NYK9dLqxVrfHI74rG4tYlwj8IeXPR5sSCnsV26b6etrSRyN%2F4h2cyEtYes4MTkTOe%2BrLDs8nH2JkUCRl6vXNQv5SPeUxJuCkcejk1GVOoiyW8seOL5eaHP7Ux%2FErp3d7i4l0igREhSVIIiJmrlDdUk20yPy%2FgUhmTY2z9P0wJhgk1HOb57bk6RhrgdOiR2%2BEjAkVQoOqZIcXS%2F7kpdZPKcq5hJ44cRmzDWT6TNGf7tuKWug5NxVlkvdrXfMw0ejDkr5qFh5f%2BaWTsSx0skGtqTwSJICe965%2B7kZtZFKKmVq6RYdE9zPB3cOMHLhz4%2FpT2UTEWeilFVzkIkiKAHNOOzTDmrsTJBjqkAb5aR%2B6ADLAaMm%2BtWAK6j3OaiF%2BWAi1ZNqLWPZw%2BpCKjMh5Napr15uwVkC%2B6xCWtPPpYS11L5BQDD2eqDCsu54rzLqXkhoX6F7HgqmkMJBiVwDqvIgB4RsdgEQ4xLIfwP5FqSYYtzNlxTZXOTLfYZwuozavILnbVSkTFEMblfp7cCbNMmsvNnw9UcPhVnNvOz1tkZXAnGhpRHOHOyMgyQ9O8O6rc&X-Amz-Signature=160878ae3cac751351b21a7deea2510c46013aa69f2e034d6008d13bd094294a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

