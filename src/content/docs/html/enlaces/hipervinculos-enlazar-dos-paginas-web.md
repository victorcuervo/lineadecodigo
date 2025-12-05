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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWLA4R6T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8jLb%2FIrfswoKWj7W26fZyRtN0STJxMa6eB7MekhqflAiEArBg2r%2BIRR9JnzR%2F9d4lhEYz9WSoLFFaxLSAHjK%2FelW4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDISmXuaTGplmz4cufCrcA2Lv1BZeeqUPjVQib5IbZeyPAnozSABrSwMP5UgyTISljO%2F1VfG5bFOWlyOWNSjfwR8NMG9b2FY%2BuyRvSICkKB8wX6yyIE0Q%2BOANpRMFVONndFKnRB6pQuawaJxFH%2B2znZKPvxB7A0zj6%2BN1ZmEcA5RqkjkMAUtIjC1rHNReWUPQp9ZlgtJwEJ8z1nuhCJs0qCkS5%2Fhd1tkI27oI0IE0iAyyblPUdQiMzsWmcnqVin0VqN1jklIhEFpLlmzubKLOkn05sQXcEy%2FEyvtR45FC2e3rxGO%2FyP5KMNlk%2BJl7Uo3Zm2orkIU97Ow9h1gPDUohwmcKecLf4Z0qNhG0cwY0rIRAKdBP%2Bgqzu5g5GV%2BIOR3GiXx9W1WRAgNcfLEy3MTq1mQLHEe6rM4Q60cky8HQXj%2BXuvQeSDLcLl0%2FZA6WD7UfcowWVykKkm2n2zp%2BLarxoPmMU%2BLAmHSRteUJyIce9%2FAviv7m7jrJ42wolxc1V%2Bo%2F263nsTVJt3qNLRaYOYNDW2PpeNErMjuWF3nDyWwCP4hAkPA68dTDSJuFD5dJKU6WQ4svNC%2BcNfRkrkTE414JlyHtYwJeoYsBx9gyAxZRbi2Hp%2BLmejWMny3SYCSV3N9E0LWpEd8pzZwkSFtdMK%2FQyskGOqUBhowqkO25Us5YAmqOc6ZYYq8UtfzOV2a4rWGpsiL6PJ2zgCi1Vhla%2B1zmR8AYpZFcaQ4YgN9bBv3vepD%2FFvF8iPStfATHEaP3C%2BPUj1Jxat7P33JvsTCUewVfaA6VAVzh0YxV%2FKNN7ubu1Xnc6SW3I9A0otzNdqeJX9H0riYl32BNIPdTFIUJkTGdshRXsTt5mcjiyOXhqcJpVRKwr%2BAJCTcF4cBS&X-Amz-Signature=e2b104fe4fd0d4ca6808e49a0da027ca13a4298bc78348680f8fba9fa4ee6574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

