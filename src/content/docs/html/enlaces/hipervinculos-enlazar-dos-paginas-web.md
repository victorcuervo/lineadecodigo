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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJIGRC4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUVJCxuMDAygMtU8KLqmJIjoKI5wq89Z%2Bs6sNZVYZJAIgbokVb%2F6udWB%2BvtW0LB5KsdZr%2BJ6YUaK7xjBk0%2FmCnUUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF0QI%2F3yT6zbidXWlSrcA%2FGCiq%2BcHD5hyuTyfatlRSlfu8zGRc%2ByNkk3M0%2F%2BLj2VyXSgtpVmYZ4yG9A5OjiD7PZvNbFYb0ug1hjCnEtoDur3UyW0EYdVszro1nIzyRXUlw%2B2cD%2FkNoG2XsL7Ds0r1HcN0pbXeYfhRWwOO%2FZOpkc0MmPPvBTMdahWbXZ1d77ep3vLZHxI4DY8gqfdi9QoFdG3r8zzBjbbLtxtstDwXVDZb%2FX7I579rcU0pTV5D1FfxdKQL4Vy6ThERsgI%2ByUQvaMZOXNQBoP%2F6J2C5fjNEg2ga0lBPrf3HWjPhDqzi9lHfneTwL02wJjdPnw6nEj%2Fwy4ykIaj6If%2FoCMj89oOgZinE97rfawpZoCS5Z%2F7Vvo4YHX4gl9KbXoDzKDROYFTK3UqrQa1HAjz1Qcrfjm9zzT079XdPkr%2BjspHFazVaPktWA8F5u9he7PrA5U2NBvXe5i7hTK3BoBNVQN5BH5URRpEVu596WNwi%2BVJ%2BZhtTrNNkq1vplhfy0%2FRxp5rg10xTN4QDC0Rc6DUZjwVHPuXqPTJgIc35LEu1AK9KR85BwigVNZWDXaEJPRDtD23VrBk1ZIs24mXWK0tuDHSRktJgRFIvgDGmZ7gf6Djlggpa0K6kqAidw1LY7L%2FpyEFMLPM0ckGOqUBDjrlQ%2BYdXpRIWIOyzoesXmVInLboMeTwkQ6u3rPXjcQokmGw%2Bg%2Bv8dLhh5mX5gvscfwsQbV1sf55DPzatJUdHLN2xQMMcagmCgvR85xvZB6y6IWf7%2Bzzh8gE4IdRWdq4v7IZlROW9G7T9Urnng4%2FAJNP%2BoWruKVNjsIUGR9G1Yna5HeUIjfH69qqDpydB3pxGKr%2FGXwdjEuvhOVdQu7FhS2judQ1&X-Amz-Signature=4edf4381a5e8deafde975b354ada7ef4fff0c4a33ebd3adb1ca09154e1017243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

