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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTJXQ7Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVX83WqE7T78YBA3808zzygcoHG3s5589saSWAYzZD7AiEA0EcNeg6TXBWai1it8ID%2FV9qgLG1GoQwvNJS%2BG2bp0Okq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBbfPdp%2FFyKpqTurSCrcA5NmRibeLz8Iqj%2B9r69XxEKUEI90284LZxHd6l6pdr4zsTD3RolGeFyWrYxCzZwihDL6OVdFHTjKYQvZPpl5rt2E%2BReqnj1cCwmrRwwW78I4hJSiKIM1iWuZT3VL%2Ft3cgwPJDsv%2FCJwP2f1EWg7YbczmaVJQqpZBEjoPe%2FHoKfWVajBy9wX6SF%2FqOsYcRrkPda0waTLajdt5MH3C1SdbNxcdf8FZUIrDyufje%2Fh90%2FQVqUBl1Qyhc0B4ZLQ3ihDt3q%2FYruW7ffWazOZyZrAIDvwiyvvdeW2VvnA7U7QngjtU9T5VqeWHfIEjVUI4g8RghpkK5348HUGCUiQqmjFK3iD1SWrRrVGzi8M%2B5AB12xStO%2BNDUlpXrmFWJm0vpMkeR%2FDMNWrtiZgCQuMAJwBRLnJnAlGxvQdi0u9sNCHlgxsxg8aR4ND50LmO55D5ZQ%2FvVLrZbrQf1oAxAYgqh9DQWtscyFgn0DapbNyr7jGq%2F%2Fc%2Fx0mu16NR23DV51e%2FndZvN6%2FmtbRce1gtBPl%2BWjSTyfFhPCxbIgGyzSypChp7JQfGfGqfhTPWzMYatvgogkQQ9cCXaOWQzhqfa5Nq7i8uDGK0MkoZOFU%2F0EbyQr0bZxCu07Gjs%2F1hDvynGVM2MJjJyskGOqUBg%2BWqsGWdB%2FksiTpLdMo34kgNFeDC5oQMKpjasHrV%2FCE3z73FuhvwNNToBDVty2UDQn0ajiv9804EONcsml9gw8EeiVBAPfW8Y3eHJEJ%2FydEOAUrm9zgDFFuxn10OcUvWo2e%2FAl08rjQYLMCMUpyYBY1SkmGW0lxcBRTsWO2Nbwk0TKsdvwc60YbThR8W0q9okjn9N39JTburo57L6MGGiHEXbwOf&X-Amz-Signature=bcb2ca5eb31d58334f762efbc8b96ab3cf063d8f8c11e3be0de065c6efbff3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

