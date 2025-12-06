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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ3J6X55%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF983q8Ip%2FbAF2IVJjiSj8BA4DprJYGf%2BX4ysLs%2BMB%2BuAiEAn1UQxndrSu6xcMCbB4ypVTxCAtlMxNjsMmvASjCrr%2F0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKCnXJgznHJsopjGGircA54dPXK6NwPIhiu5lHFA3OOHD6XC9HazOoThT0P%2Flr4qjyURB25i3j%2BIGjUcE3MU%2BWZG%2FCrjlkdRfOwQoqLJVVBzjEslmhmpZyGz6aUU1zUmN4%2B%2FMh1YlgJH0pLUQsfUPX3rrfqGj6KOa3yQzo3oISSflgeT1kF0TC3%2BnZSpGq3gckDeEMQ%2B3c3FR1VqxA0oUOIDKq1OIahvdWdhysTZ0wZ5Jttu8t3ArFE3O84eUMdf%2FKjUu9%2Bi4fsAz5%2FHrkFzPDxI%2FS1%2FZmLHBvbE2kojD5yMpJ6JSGUtaaUC3oYFpuxyjKLoZLSCmvJD19r5T05yd6RAPipgvtDTSQsUdYnFnwv1Rv9spMZYcaZVak1mYwyiolKdR%2B%2B6zdzLxTpqyb8AtlU0yCy0ZAKNd5yp%2B3Bx7vcEwPzNDPIe0O4VKPshDUt7v0ZPIkNi6%2BPXVSCP88iRtemc8NzR8FWPsYLLer7l%2FCIhJVyNk0s3QCGpFZpAzrmt9Wx%2BNTwLEdX2BZ5UxAcd2zzs%2BgEQshF4KtNFMHh5kWb%2FLF9Y8bKcEOyWLBhtUOVXN%2FztdPvh%2FW3j0qUC3SoK%2BuSAQ4BrqJo3Na8rXQvseminNgUpTrTcIF2viQCR%2Fa7hlMAlMi00xx%2BODChSMJ2KzskGOqUBq7tN4WJCzBHTgzK2RkhK6kLk8U924z89h7tDqdzmhi5%2FpL6HGlRHp%2FExr3ndIzUbruquXgztjYDJyeSWW%2FQSTfpLnnvYPuUlhQ1d4HZdR95CaDEVFD8YJXYFWOEbkR1J71C1C68jPoO2QNa0ArrYGsW2ROPC19%2B2EgU7hJ6CzBjQ1q0yqFkGf6cM%2B4JNY4nvhMf1%2F8v4PsTVxN%2FuGkioEhsWksMm&X-Amz-Signature=20c2aef1718a1e6d0ff336a99bb5a27abb4e3c91981a2e73306e1c5af90f0095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

