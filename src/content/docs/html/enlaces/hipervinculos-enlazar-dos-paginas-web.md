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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXC34TOF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2w5BkPS6xBnVffx80AISJWxkTMHG%2BH6YG2TUkI679NAiEAqwPL%2FPqh2rDWRJbWmmG7rEiFHL6ioYiII%2Fo1Y3ih08QqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkno%2FmyFL50nHY7AircA8GpVeSG7UAJSU201Q9XNlHznYVc%2FBcA3ucvYUlUO3jE2XrF%2FgZQvhzuRjvSsx5TRJHfVriSJkpHtF74dc70%2BP5vR1kriodmW9PTIPTsUy91KMSLU2OsTkzoK6hb2V1fAhedtbiLbYfPhEI5c2WUTCsUn9nR0RwwETxi9A8%2ByCI3QG90W8y%2BHLTj2QV2uI3oJsaAEH87YG6f%2F2k%2BHyYk15AwKUueDx%2BFM%2FSVpwdGklcSZlrOWIfyIrcOCjMB6qnMUeIRQKiTCI3z2BsqQbuJ2XCwpSVryL7V4ENTH61fvQnCKR1K%2FY%2FzgWTqY36qsu%2BoijC5i8KovsJ%2BWXGNyArpjmjULB8KJMuGcckanFT5kJA36toJZthGuleSCOMm%2BtEtCadg%2BCllKIlHt3e8HE0bohPEFTq5Dt7RCLON4scx4ZtcyUDH9IVyYWNCDVJ%2FLHrTT9p5aESpgpYbMbJe1ecWI3zLyuXD7Pj6fT6e%2BYzYvSmUVqEqpfMRlD3Vg90B0%2FfPNc8jFKlMEK%2FlSVe3s9C6FHVBcLpLYy1%2BmP5VKy8Eyk8ZYnaHa1raXAw6awZbmhsTN%2BjH1jp1z2jwR8FkLkQjW02IoBOXuR1ar%2BHLzN8OnLthquZ%2BQsEAD%2Ba97I0WMNue1MkGOqUBZesPHa99gQZ3J5X7S9PuYu1TX4AQHm0PuH27hjfBlb5gVb3Oar6QixkK4qeJZ6PZ1o31%2FLV6GdKNEBvVPiqvrdtpUKz6L7FuE0ZKLG%2FC0jU6BYyu0BuCaxW%2FcWCQ4bAnmSW2S6skFvHmSk3GVfn521oVTtuIPd3%2B%2BqjJ2hm9GC6d4YLp8M1t2F%2F%2FuxjnsDCrQ6AlF%2FSXaNTN75pNv8UwHKohEO7s&X-Amz-Signature=6f2d1a8ae80a75020387cb68a32cf21010825775bdcc971fc5ec2e1d3190f3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

