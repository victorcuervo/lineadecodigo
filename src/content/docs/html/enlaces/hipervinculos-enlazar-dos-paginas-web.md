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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGL5QY2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgE2ODPD5mUAUsWh%2Btgwud%2BHgsPBMSmh8AhfMns82aQwIhALoJ%2Fbin7MbbI%2FmXzIGNzOEvuYOLQ9hZw0oy6YC3zfbIKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYJBAgsyCEW95CDLUq3AP%2BiDJKveMJd6aAHQQLpdbLXfneD9WDnJB7P0pUiVZAkUTL9U6wTYeAXMMITNca3QdmKJLHTX6u%2FJajUzgawCpPDvWsA%2BbihqfJyzE2gcaCiCwtpaUMrZPX%2F1ACAZp9O%2FjsTSx%2F5vqawYXNX54HcUKmoyI3ZAvee6aHJO74weXPeWDnPq%2FqiuP7BuTDwBSoJxq5ygNU44t5oz7ToKMKqBDwOMKLwLVts5qPwhkqZ2qUTJuGjf07tIH5aAOlQfqsOl2bdvh%2Fk8G8Uxa3Y4t5GJKZO0Hssb0Pelym5R9M%2Frs7gYWTz%2Fndr2DINT63pb%2FQ53K8ZZKLPzJZgzNlNl8GQViCnqUErgCmtGDzi0KsV687t8FIbpQc%2Bwr2t34ABvma%2BlnkLp6Y7rHswqMZR8%2BarKsft73hodDILhsxf6COfDIJ1g9wQOs4qjctMIQ%2BP2vZynRCAq%2FZb7H4OOi60TtDvhxoCV1EUU%2BilZsnnd6q6jRysuprNssnDlc83yR8aQ4EWmmOjql0OgE36ursLsmpCEi8kMGYSRct4TRcZyQ0WcMQDxksVqK2BwJAf1Ge3mofP%2Fvy4eDpUraDecZg%2FQC%2FWqRU3uD16%2F0hSyFs9zQFL9xiEQxP6EMxLCD4%2F%2FstPjCymtXJBjqkAW9pGnMQckvugKGfmVWiNMDjY3J9t9jV8rH5kP%2BIPzGGIqfuVS1ezyOcsOwnehLx7Lsqjjl8QSUer%2B9O3qTAziWEm4fxJ3NXJOKQgtYcOuA5E4FImXDv5MV0eEJXrweAdYajWKiMzuLufLJAKdrdqdi%2F%2BKgp6ohXGmLRxyLAc%2F6ZKveMsxlD%2Fg19ubODdX7WmpHMG0U1Vf3JlndsfRHDPiWF%2FELz&X-Amz-Signature=61ef6c54fa1775e44a73ecfe321a36e98eade0eda474b99c95c7d9bf19fcdd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

