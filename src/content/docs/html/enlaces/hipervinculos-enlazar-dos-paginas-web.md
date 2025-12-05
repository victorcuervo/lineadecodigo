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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSAROBXV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIAhD6jS6WO4iLLvLphoswL8FaMrC5sFlGEPDyvrbr2wIhAOqccYezjcR3d%2BYQS4OR5LXCWhaWXh4qXNecQqlJZhPqKv8DCFUQABoMNjM3NDIzMTgzODA1Igy9KE%2FMEEJk3wrMjvwq3APC5AXTQxrBvGJmvoeYNF2g%2BdutZX6j9FssQ89eu7A9KAQEm3qLSOlD0jX%2FHMTrVdpeEnIRndd%2F9UjxsBk%2FxRwzmuub77FPrSp2IqfdFrt8qLDP0lOZrIgUMpWfcUzTxVPQDc0yvjJZqTItRhVLj%2FwvsHVy2tdRIK2LuXgi2NuBQgbSaVO5rQo6yZvgKAtDioymWs%2Fqe20wBtDJHrJgU5EQUW2hc%2BGG8vbTR%2BPzGT5tEikmcZlVFVwaca2QDg0xW6RNwieEPIL5g%2F%2FGtNcocT2CfnmYCC%2FlKD53D8KqZUaTM38W2TT27BS1FWpGF7vMbS1PQjnqVf8BdPEsnZzUn%2FkD%2FT7yo7VrS8qj347Dzk3PNI57MODEV0PQ%2Fh80G4%2FL%2F7mXz63KHZ%2BspQGx1QMKxZbqeVA4RscFVa8q7PiyKzxS7tpclMTvXpkT7uykNy9my4glNwN1Uo43YkSfgzmwXu73iG1VRR3Gc6Rree8FhoNj20gAeY%2FCSb9U1ae%2Fdbla31ATfo9kOWssGdYZkC2JU%2FvTAlbGXFdz7ndQ71W8nZ7LrJPpvW9xikLf%2FWvB%2F%2FMLjBWOli9xTy8Lm4CWKGP98ABp4UQdQr98ERDwm%2BBQpOdVbD3wQe%2F8Gb3EOv4%2FBjDKssnJBjqkAa921vQ0YUlc3PZ7YxbivD%2FhjbIBAyCAtjxCYnsYS0o%2BzzUnZarUKP7J3nj8SJlNqvzcsOcmeTJ8Hu9cOzVoHn9KD1qJexof00zsKD8PvMASFmxIFUByJQmPrKeT2IpE1VRnN6L3WcJwYigjHd1JL2UBi2h4vzJ4u7HjbIG4AlyW%2FGF7hvn6d9kyXAdJ9hmHG6J3zwTrV3uqEdDGuvG9TWnqgMmk&X-Amz-Signature=971f35dca46c3fbe9655b3c9ba0d8f2c152d57cdab56b9ab3cc0c1d77b73ccf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

