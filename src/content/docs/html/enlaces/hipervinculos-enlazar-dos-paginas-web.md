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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB36WRN2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaRoonvV6F0vxV8sOts0bqbdOeMavEBg5%2Fcii%2Bg72pIwIgckcCkYUHSybE%2B8g7%2FUgOGF%2BWCYEYa0UG1rdpDNUnKkQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIArNhRSl8WbVI9S3SrcAz35MQ4%2FIErZtiF8WPvlNKx4U8x%2F6URD%2F7rXTdW2EC%2FyWBjoiWCXmpoBAvwtWm4%2BDgpZ%2BeW0O5dPfTjo2NfPWy%2FDr9AG3SJ9R0J4mW3S6R3VY31WK46nngIZ2FFQP01JDdrQi0AMxbd6KkhSARxQHp6wU5aiME3tJCK3YRjkLNttO53wN77If6izh2VM5mKPWwzBqS4nT48%2Fxj8RP%2FxxexMKbFikpvWqu%2B2RgKaJ3L6XaGqlxc14GOjoq%2FBQfrkremnzB2PijpdefHX8mFBjlig7cV7nO%2BmSmachQ6iQRBQ4r3ODCeJlMCiQ4EGaGJHJfXDdr76y9xs9aWr%2FkiPtJc%2BL8QJZx3S4UU2PXm5ZKTGXuxbZ3X5vuuoAhVYzgHPOdD4ixYVkAi21r%2Bc%2FuNsZPW0jA61C6X1H5iYVfOOQ1KidUrz988WvWG2hYvXof%2BkOONNB3By21WBfxVidenPaGXObQGr3ByogtKQu4CJnjXWkZFnR1KZSREwdJYjNGzOcRu2gBlKDaSh8MIbvXOkZI7yoBXiOgjnxDcoxjG1GGdBskizLa8h2jph5U6c0FO5Ibmqw2AWAqrWeS7Goby1kbzh1n2jZjh0ft%2BMEF5IOpKT0aw1VacWUVFQDb7tfMIuH3MkGOqUB%2BP3%2FoVwddrhWNMPtwwpDGE9iGEJxZnchUt8l6YC8WNAxvLbb3NRA%2BVnc9koEUcKIiR2KMsEAJkZ5Ye5EAOBgDqYiHVCuydoM%2F1mbPQN5mEZ4C4quRK51HL0LRqsVm3cJ%2BjxEpFWnANmr66lfZeYDfD4jRK4LXrOA%2FxDdGwPmmQ9nZ29Xw09TIeeQHgnFX5kZE5g1hQRqlpuY0zAsY3UjaM3cAFFD&X-Amz-Signature=12b2add1625a7e15cb8ea684b796250dd5ee54de664b81944e3586f5908cb1aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

