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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUSLTMYS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzmXfVVbPr1MG67nnJIBThbYMi8g3fmw7esMQpFLGpvAiEAnJGQFI9TupFgE%2F4dIYBj6g03dL9dE2SfKIAHeFSwDDAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0zzzCm7d0QzO4pTSrcA5jfe9ISXiwvXiio0eSvxeNdLlMVTY1%2BZ0p1BLrzpBVdQlh2cS1TMqfAKADRelLFpAgD2DHcXM%2B1VveJDjA%2Bx%2BDf8iZhahKSopcVWgeldK1U11tV8gjwk%2FqfpsKLR61OO2zMb%2B7DY2skKLcsF2sBJZGhCK7i5ZxlI4g5zOGzX0%2B292KPfL%2FKKUJIZMUheKWgMGKxAU2aWxmgwDow0%2FKTILQKIuBme7dUHwiGaGY7UsrSxKMv2qlFfaHlNsNZ3ijTRQiRstIhGoCojOduR3hJdcerJIDjwx8FgasF77Jpq3NdhZadu2qCNe0r3XMHvT0NarwvqsOFE%2FX0HvssekHo4vdzCsyVEC9UH4hja7ThDNj3NEsVPrL1eqPB6D9XgbMLhoJ6CnyJSkzkvHkf%2B7iie2%2Fr8mB2hvaDvvWvw9sbSO450FeW7kvMrWEqE5SQ2ziazLgH0X5I15Yk0Zhq3bROyhUjGI28x9qKHSE9QSOLsajXoCbOyfgY3MMl2Dp3CHQH%2FlhxCS3Uwg8frBkFfqFfY1wqj4jDPA86Vfk1dGICODjnYPFImCFE%2FymHT7o0yG%2FNe1bJ3fy9FGlA6b8WpWyX%2Fnx0Cm2Eih0Cv4Q41251SEWeMjGHTGH6STbZHmDRMKPp3ckGOqUBOdGaEfNyVpTfwHDaANFASmXgKjNXNHk%2FARqopHr%2BGeC5enRMndbAih%2BAMAQmGb8hL7vbCe2NuYXJpc58Wm0iJgMwzfIJQCW5WZvSII%2B0svVQPJGqXaoHjp4tuGeJM%2F%2FZnpwREUEMIEYcgOFq6wD9aGr81u%2FvTvdqxmc%2FdPVQyi8Brp%2B9wfv8eCm%2FnkNcCNCnIuywWoLnnYZZ0xmWXKL25iUcxmWA&X-Amz-Signature=270d7149716b6165009969404aa130a80e1100098611eca7f3d58e190dde683a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

