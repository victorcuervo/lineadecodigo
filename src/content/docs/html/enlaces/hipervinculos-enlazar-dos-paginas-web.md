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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJIMBRU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFa%2FXEoHhG1337cV%2BCfb5EQSMZl%2BAyevPQKTVKAYgWrMAiEA%2FDtj6cC%2BVslKKhx7LdGD9NZrBsjDvOH59PS%2Be1ceU4wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaIKd61pw08Kk%2FVeyrcAy%2F1Guus88e1MfY5Apz43xp7KMJrxCU1Nk3kiydevvhRTyobmUOGXoNVu%2B45bHRAKuwv8LLjOtZ%2FqErHCdwC1CyUcQAig7Ge%2F8rmMxSsEphf5davuzmN7gC6JRB5gCSH8TcSoAOY7BbNKs6ULt0xCfvXx8fyHr5YfG%2BxY4I3IW2GpR%2B4YfYrL0Bb1U060uZ%2FRyk1lyJw%2BIPkROwcCbsCb7uITWw406XcBhLJ7wEQ%2Bg1E1dCqsDO6DiFzvgoKi4yyjZBHUNT0Uka41n4s9QlTqfphSgCxCLb07mtcyLiTey1LLm1KD0LFNGDHTP3K7u2FQkRXeiR6sJCZbhzbyHsPIb7nyA141FnomUNBDW8ECuam5g7kHoKxtf%2FHzehntVteyyFwFLpoDEeezLWmAIMKbG1y940Znq%2BAOne8EcNyP7sQIagw1tnuPP1J7t73fgGCvyRA4ee63jAZq8LRmJq1VfwkEnT5DC4hTYTk3FLm%2BV%2FsBJx%2B8pij9wTTXmPaoPcrJE8SHj2vkg6Hx5WcOmSct7Ut%2B6OvS9Cqv1bQJ6caTpmZ1JVif2jmVkr0%2FwO57qg%2FRswrc9B3o0ObYq0vzqbCAeHA%2FBKUy4PXq3tRs9bYZN12WHSHZgsJmup4knVZMILt2ckGOqUBn6nxdoacykwd0JZAfTTx8BwnSpGy4airiq%2BCIP74CkRJ1r%2FBij7AauEJ7PDWO0k5XJwy9ZkXYyegYbEogl7JRy0wBWJpyFebxQuPMl8pNbvLHon7MiX0QhkYJIUXRl3Cd43i4eUi0K0vdjoLRIzm0zsfLl0Uo56iwH6ZLtIRIm0MWVKiab8d1jc4jOkYCj3j1Hxi4VnzfaSk0kPT77zkgPe%2FSYDI&X-Amz-Signature=e669915d235f20cf800f8f6c0b9ed0f7deac4b090718be8067fbb58b0c84f936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

