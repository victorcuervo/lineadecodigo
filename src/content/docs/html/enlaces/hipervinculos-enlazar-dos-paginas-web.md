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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWTUV6T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLOb8olP5nO2nCk0D0wtGszbw1NQrhqntunO6loGj4%2BAiEA6bPGvs7BNHH8cyfbp91TUhYoUkqvopXc9f5dFARJQSIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPy4ZozLMJUDoKUupCrcA962YHhMjTOjO81UVgQwUsyGz6Wz7L%2FXUBNqrVGUFm2bQHoE9%2Fi47Iadd3kdYRXzwSQY2leM5tomANxByLbj5fE6pbpgZi1XSmVno65vjA2iRvamHyG%2F20yUQzPaJqoh8TpI4txlhMC12FEi10EHEM%2Fz9Z%2FN49B2vsDTp2dI8ldshAyyGRqyjjB%2Bbh8moLwAtmg8g%2FG67klc0uJXh%2FgpqN%2FTAqDupF314F%2BwKBkKtt2urxzS6Iml6fmhEpj7ovPERogs%2F%2Fnu8P%2FtuMnoulEQNolL2USJnJXQKV9YH2muHRymnesv9BjE64bdq%2FlVbxRyGPTCXNQv1JgUaQ1Kpswdr9y%2FqvCOZCMamhnNduW3gYyfVuwmWYe0XQenig21Iph4GjW%2BaYhx9tkcqLMveI3qe0DhAR6FSBXwb08wp4UmQvrLywv14rXBLGTwetj7HL1dO5Y2mjEVYm5kR54PtC5peYvflmVK%2F%2B4jnI1byy%2FuAX91WdTPI%2F838VylAgXTvBAgOOVPVSx22AEebY7sfpgmgw94%2BKEm29y4aI4va8b590wMAqGNmr8N72EaCJGEJ7%2F4dkRqgQ2mfgO0yRBWErG9WB9c5qGEI4JPzd4bzJY4G8AwAxJuTChlXbP1wpujMNn6xskGOqUBqL0UCuRUPxQZqdltMlVLLzB6O2Bh8rmkY3wMh7C7auw1PCDHi6lqICl2IPUCJ6kVTrIAjlRQaAFKDSVIeYPK%2BcDnpiDjbdur8npdAyNyttPu9NPabLMSiBFcKwsIy4f%2FdNWWdpQAe%2Fpj1Lkwzwm%2Fevt7ckEUZYJDpwUQiJu4zYGYWfNoL2cprz2bsQzw5UNIxH8gLSeAZTeZ5C8a2YJhzasHtmVY&X-Amz-Signature=f3c9478ef0e564e2d4e0c8421d61b0696f3671ff456cbfffb7abec2b893219a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

