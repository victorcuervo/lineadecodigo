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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM44OPNQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAmbiKn33rc3H0UwqjoRZgaRC2P0N18iWvuYXhBi6fgIhAP17S1V5n8B2HVdSFUX28JQ03%2FaArOtUHBqiwn%2BVGmZ5Kv8DCE8QABoMNjM3NDIzMTgzODA1IgxCkQ98I2uJ0KFqQNYq3APMgojNQunTuLIu3M91CQScGVHPI4ZOg0jp9HYld7GljYr5ab1pZ1p7YW0WqX7tMWU%2BIh%2FcHTyXMspqsZmNoOBhAm3kztxijafPXdQwTYH8hmzF1W%2FFh%2BKXL3%2By3j3k6LIMbwh943KbS%2BA2H26TlSsMYBQDY7HuH4Z2msSqoQB1n0B3r1HM9Whr9CJQxWQ5mD1EMPVaa4tFLHZfafe1BO%2F%2BnP9UWMAjyXlQmRch2LTq%2FBBHboeVZ%2FhEk5MxjesYLsw%2BmFTe%2FVzeSProahtFxOaNVT%2FudLcSxc4Vdy%2BO%2Bi%2Br0obO5SwTnISo9sMf1P3D2YrGjYDJDqQvqJYJBuOsedphMaX%2FHScMI6iXXP9gXSc6Ks5tmS95cuEKSyIg6B%2B7jUU2XTLv%2Fv5PRbtYc1pa6hPFrVqrxCxo6GTpeNWWksJ92vWfukh11HfUUeQ2%2F83Z9Jo%2F4IaYtJT7gFcGcGFw1vKxMsfAL5qoOFzplW1ErnWEgS6xab5WIf%2Bk4Xaqfo%2F1DLoipKNzp6dirxG2nPwwOpZuMXojyoz8A3Di4pjOeDOeA4ToQ5hC%2B%2Bp%2F1%2BPet7W6lg0xkaOYiFJnD02RMbRlw5ISy4zv3BbClEEsDBk3Hj9WSRCy3gZ4E0tptbGsNzCXjMjJBjqkAQgwb1weh0bS88lTlEw%2F3sHxI%2Bf71Rb5e3KZ1z0MGTT7pK2xqbkdpFocD5irwsEjXRtzI8rorMLozI8ipO%2BKltDiiv5mYb5R8z588L1towyKbrRBwGqShWz6P2G%2FjLsmMtS3%2BAWd%2BPqW5c7Oae12ZhGfhZkFH1iMGIcQoC4nrGOWQOTOuT2botCMTM6RjydHnzTqdUiiRKrq7s4ysr3J%2FJUr%2BrXX&X-Amz-Signature=ad35779c46880c62e64216ce006439197d3c15b1bdf66e7e0ec31c5eab5fa481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

