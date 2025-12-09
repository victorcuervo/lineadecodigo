---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTZWM7I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T232357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUq%2FdYu2IrtYp6B0ktHdCtA45jDbtGxNX2dm%2B6iTkjegIhAKUsURegyM6SlUxz3fhli48tntBeOFKDd5Tebtoe7m%2FXKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFfLBHE3s94BqL5eEq3ANnil925uA5DovIg3r%2FLcwkKHy9k%2BuWcZD7ChddcT%2BqhYQ6QEXFp5Srxk9lNc%2BBOqO1fXqph8zZNSM031vZnOTs4mYKoDz%2BaC1TpDbHelvzP9oi%2FR0dI2rs3ZzkJ2XXTdgiG7RgM1J0NhEapxombPBSKgnkOm5UOtMxdbLT%2B2Vyt54JZWjPaPm8lpPo%2BI847ua2nDmFAuujaOo6ouXw%2Fm74rdtgx%2FIQsxQWzO0E4IfAhtHxU6mYRkqflAVzPPzRhysu5NUbDVY8UCYudaqQ7qn7II7Mb3VbnutPmIiT%2BWxEz%2BVKPgwvbJZ73sgtuyig12QJ%2FE7Yx503%2B%2BjHMZ830A%2FnuY%2F6sKXpNACz4Yx3duRkhZNahuhVg1Z1xyBGKJco5JsCwD19lIDevtzoIlTZRty9N18%2FGSzUdh%2F1KvwiYnPZJyzB%2FAq%2BlmCzNLpUa6En%2BVMbeoD6onoixw8UoIb4VfcIGH5fuCsMzIwdlmKzKlTqXLV%2F%2FzP3PyC9NSIGTKhcUyGDtJnpuYA4%2BVVr2ydsg6yuquAGjD67%2FfTIh1VatACKOCgFKQPJ%2FR2SKtlzb5mkE5G4Ln1nLeK6ts2%2FZLO2EuGdIdmogrlwnb28aglngKkFc4PrJaszIZqNrtpw3jCfxOLJBjqkAfJFcu6yXweQfpcZ1me625RKr2%2FDfOkCt7kMZdUeeJcaGxldryl4hKAXqsXneN%2BH61oEVoTvRIBNnEoWdbiz278%2BNXpbj1vn7GiNiZVYdH9U5%2B9jKeFFII3DE5%2FdDguYrqSyfF7G9hXmOVKFUTYql4eokk9zaviBVcgBNhC5Q2zmFh8hkPuThzUeq00DoN0ziVmH0rJbZYpvAJ4mVWh2ip2qkmAi&X-Amz-Signature=8d3db68da433aa5214250b2490c973f858c7f2b0fe045c2def04583033692ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

