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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYCCH6C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuxWtj%2B60EmyBjJ4A%2Fo2zLMjMlz7VHnvJU7L6ZvurDkAiAm0iIGaN%2BLwsoe8WNgvyzSpyO8RbDH1AxGotWdxetTOyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM1JsYxo3OWHnv25BMKtwD4Cb55gF31plWH1b6So%2FeAeSlfcDOopnZv8t0ntusQZoGiwQ%2BVzHBVjwUeggQHbJY4GwaKzbY5Ks17s03PKw9g%2FE54IuqEEUNsj%2B5Ditag8G8kZL2Nybcflg8%2FRQCKgSM2GbsPDhyivCpQZ6zs2yybJFn0GX2h%2FoMk1uh6vQr4xLD4cYmaWnByr%2FpW8l3iYbQubceNtLcV%2F71pnf%2FVm8IszQHQAUn8sijkwir9CKzUKmmhaB3gA%2FskknpagpOsO2ZrR37ACbnph4iVmm34TCRxePyTd5w%2Bl3FKIlJVXwNNVVtAXYrfJjyAET%2FmYXdCIlZbm7hSp2d1WHnVnNl0K5nAXrZNJR4%2FwgS2QQzCh8IgK3%2FRJEgmj8FTz7xtYb4sjg%2Fe9LvPgEsk3GV0tOONRIMFKKYwf89F0kA1LvF1E4fI9n5tYD5Z2nIR0L4OW2BLUts1Ybr%2F2QAkG3kjP1Xzh90pL3gZhr%2FtsmKKQoIL69wyizCTL06ajoKe9tvw9Y80mbGUu%2B0mxQ6%2Bd5JIdOG0GkpuLC%2B2kwt8LjSRSmzqiBqncMSAmHOd6s2Lyb%2FqP0an8WnMFz5U9c5t4AJDMqTcDFz6O6%2BH5u8AasVKfd8CN%2F5MVjNtZbt509p02vV73wws63JyQY6pgFaFOrjwvEuokNAtzHeAlGuVQnPco3WaQYEnpb%2FjEWIY5HmVkuSwuldt%2FXIwgyN8rr7J6pQ0D3laU5pEs9l5H6pXZFv5tKT2%2F%2BtFhEEiKx9Ep7V5Ix2TLrb34vzcOdVQMOnv0pvNweN8S8Fka7ntkKjXi04Q%2BYKebDmXIUOhfTAbikYsTt%2BXSrVYFzitL7baOaWW%2FP147Fr%2B3G55Fpebu9oskRZrC2V&X-Amz-Signature=cdbdfb530abc0c93ad81905aeb10e6fa2e781a195ab1affa25a647a8956a2d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

