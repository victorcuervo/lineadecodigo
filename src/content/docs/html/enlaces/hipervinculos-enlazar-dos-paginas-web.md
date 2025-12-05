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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466624L2L6V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHpUuoscYLaYAMwGC774vxqAac7QHEoOasWcSbrasoUAiEA19mqwMIdxgR6sa8g7sn7luC3607DpacV5qXTib%2BZj0wq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEz5380nqdkq22gvgCrcA6eezM36s2zCsK0VdtvpyupsqaFpjGBD6wH1x5707hCLO3Qryn%2Fz5ipBdlyTwjMyYurPiwfBl7y5Mk3xsOYGs7lKSiwzD6dW823V7o3FaeVi0P2Cd5MUEi2J%2BJoXNATtcF2BgPjSMNrfJQNBJLW%2BBiAceC%2BT4moNuPOtb%2BecbfnkJj0YlfV8vaW2BYV2zuM6sT3oxr3by%2FdcXBcc7KxcqON1dekkzuKLzs0NHum1vDwJVhk2wIX8Z14q%2FRWE4DB0CySjrqA7v38frNzI2%2BWxAwySOk1AMQNjFjvSCUDFc%2BQ7nag5LLyVh4UCWUdMpd4ATGN3XviYgntLTyL%2FzBNUrGr%2BMu64XM9ob4CktwEwTCTtN1OiechJH3ntCMcNsFgt7rfqIIvUxVFs04CNN%2Bki2DY6B9AqSWa8rJoyiP4DZvSHA1TsSyWKU9h7s4x8KfPRprDDekybNNtCUjGSZ7ffx2CSYV0a8aKhZ%2F1MxwAVvvCHpg2cAQybi5zUo0cav3gD5BcaHzrJ1sNq482q11zqQriIcWIrKDa1u4kw5jtFpd5hT0ByAt9h7L66h9z9KaLHFfUGgsjx8%2FSQVqOQxDsnpO9QFqIBTTW1M6wd7Vv8jhshpMhAKZ6FpMzzG2UZMJ%2FGyskGOqUBtzF9CsRVLSPWTy%2FwLKfRRJTaaZ8TbNBco8IcRwXXq916BEFml%2FioFjhdzCAeAZQ5INTaggAcXi80tQDY9OQ4tFdzCE%2BoF1H5h5TlDTzaqECCMmL0b2siLW%2BTwCjNCaqGoWzXMRZF8NqbCQj21RWuS4WXHC8ek%2FKae4L04Fe1F2OKh7Fnre7%2Fth6KZ3wWJ31M7UxT2vFH6y3AM%2B07Jl8tUH64GFhE&X-Amz-Signature=d0b86b5b081d631a4e20c7d4c8029cffb134210e6c5a1c0ae1ccbc773bb2b90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

