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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LX2CMQV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrFMXCjcwbNkufgR4Ub4ReH9sZD8CCllwh3mPpK1xydgIgOjrjaLXGKI3eomi%2B%2BMa3OTFUUVlVzN1Y2tadHSYjcOgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbc06dqdjSLXDgeACrcA08sk92HkGq6inMAhqmBLzqWDHFONX8CVexYs4TyMQiuHhwl1cXesphOPA2eHHl%2Fe445KQQbv6wegpXI233rWfBo%2FLPiGy64gUU6O6o7La1UushTI%2FnpscJUVFHm7Nhvah%2FnbxAlG9Dd%2FrUNhZiadQppvzCYYy9BrQKAoPrnqY4E%2BOyjMDVAdQUaqyBLd5GUcXvx4Pf2pS5FDhqdaGTFd9KfAM1C%2FAQLq01VrThg%2BcoIiEuLUskpcMKSLtLRC%2F%2FBgE5PK%2FIh7Fkh2cGc5BA1lin6Epaq9IzvdmRgh9unWC3Jr1jOrGLczk0rGx%2Fy7v%2FZhsBF1pcG8EUZk6yj2v1W5q1OcStO%2B2bjNXr6ADI7sU8oE5tHc%2FA8d0c4QB5R1KAaIShTqOZN4vNpbBUuqFvhINBCvuQP%2FWGQzcx7ebh56WNFRuUvX0YdOYmYy3WDtE7sZucHvVXBo0dOhXPcI%2FYMPe3lzn1%2FTUmCHfjKQkk7v58sxKrnzgZUcDCp%2BcYL%2FPss0c7sRetKvoN7vF5wE02%2FRurLHUX%2F4VG%2F9HaFKfQKDPB5DhnqpmZrwxjRo86VdeeDcEBn7iGo5WvdqIEdppyu1cpiywZH%2FIkNzG5Ni39K6z1NKWoZqoqHoUcoTK%2FuMJTR2ckGOqUB8%2BHe6a1A1t8es1aIZ25aSjom5VALxfP2%2BIwjZlWd85dt%2BdCZxO9KUq%2BdlDa%2BgcS%2FSF7mNFlTQp0%2BBZbnNXFhiGnpwMMhwjbY%2FF57VsHWx6zkEYIbDdi8yZv%2FsqAYMtaHydozJUbRWfoZF0U5mKpWZ8ctA0wm3XoEZBg68POLOH2j9I7YQ19n%2FGmU3NcNjN5JZyyBYheXHYsfdT9kDDSebsjkh0Yx&X-Amz-Signature=42f7e21f85b82473f0898b50c4756c995e1ea19ce6131e322fa124282986eddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

