---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN6AC3ZW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHhpW9yfh6PLMcbSiBXmDweadrjb0Qz7sGayNrGVXI7nAiBcf9eJ0JH0Hw6qdL1%2F%2B2ibLOGCoT9etCf8BAfSXrnpjir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM4ghAm1QM01%2B%2FPGVGKtwD04EZqdLOpcIpeZJVa9xIze89ZD%2F21oEs9JDNntYfQHwz5Unjm4JYqq9CuTAIY6eqx%2BSHwdy1I%2FgL%2Fs9qtDIKcCl%2BE6ul1PpYo%2BAFLlO1eSWprbX5Ax566SnoAqSmsUbJR%2BKX7QRFs%2F6sOVV6%2B65yKopKGvvroSiEYXOVDrwcpDq%2FABmUzkIUonm477RFNL7fneBe6UmewJjxakCMrXiT0nJZwA73GxR6JxBFI%2FE%2BGL6lTGH28mAWkD6pznavlRb%2Ff6MUIcfypWEroeW7ViV8lg0IHtm0BkWV6Sc4ru1Tl2wLde1HWnQEmSGLmPLq0NelscYVbfWEj8aLJ6r5j2vbQEuZkKoz6tSJgVmxDEcL%2F%2BRuoDOGOxMNVmqU2Ka%2FT7UfIUOONlU8V5m422uRK3o0sn9oihYuI9Umt1nhmycrHaP36wP7QtZclfqRh3bXCwopjD3FkOmYULYdMYmUsKctufOX2Rgy6P7tyHI1ZHn9xZ7cQl18ljHUv11cNZblLj9I%2F1ya7bz1VOhtKNZuRn1g0hj5rDqrNDGAwjs13vDyVAOkmx2MUpvjUT9XtyuGc8G%2Fw%2BJtNr9yODB79iOeX2LJvfbkrq%2BdMyN4ju9ggtsTCAutqu9wY%2BdTenjuCKAw98nEyQY6pgH71ArF33LFgEBSydrloayHt2DZ0TH0iZIhp8ABUpICzPfXjvPF6zvqf%2BYQ5CgHQptHOQZL7dzWcLIjcxLR6513IWtDYDoiiRCjYpgwBsB%2B650mGnDfQ9KRxA00ojxAEv93pN%2FNQdwdmd7jDv8XUUMtd0C1aya6ieE%2FIXpXoxuwwgaNhMzfxYhp0sW5hWqUhecO6tCKoZpewDzXV%2BDKkHlzB32BsOX6&X-Amz-Signature=c7741878b301476edeb6c2bbd0ef512a6b7c31536c8dd5ff79a080931956da0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

