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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQS6UPYA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR7cb4t03jAdQa%2FNATB35oFwDhP6aP%2Bofm7N6FuHXpgAiBYVx17WFBY00CQp7FJO95RxQIqcq%2BEE0D9BkrB6gIWUCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCet96SxXNGbPbOqgKtwD3Y9YLV%2FJQxMmx09LNUzb9%2FhtKZbvorYjfOaEfdjqWq4UknHx7PwANTqc%2FDfz%2Bn0i8ITWA20EH6Lxcuw%2Fe4ZwHcVhJHg9T4k4UJi5vaK4BSQ%2Fb7G%2FQ1aJarNpakgRdpyNb5fLZISt8%2BWcLwrI1cpqPtuf1LwFKGAheK%2BOpU%2BgowDM0Ks06%2BUSFC3iS2HrU2TMhVVx6H%2B98fmJ8NLK4KI6weSseVZ61IaaPQ7KjHlz8KwRIR0vOX%2FOKiMjLVuaQsCsTF6jEoa31wpQ0Ob75p8jywVgGRmemK4b0gYpETstgoQWCqQS%2BazbBpXkdB2jSib8cr5jclU6c0A0O8jVg7JM3y7sIJwyqCjVPPSSfcotmZcCGSZOIXLa4bti%2BHS6apAke5e%2FjK2KjTgVlv0umYg%2B27mup28oZrL2tP953EEsXgHKrXnYnMJV%2B4GBG23Bh4iZzzebSUJmlprcAFICeD0I%2FbYUlNOAwdMGDwUCg%2Bw5A4QrXUFa1mxT5K7QO%2BeHDIxPtV5xP4JwnMP0q3h7X1gdfw%2FkMUsnut8AePTttCHt8QJKYoq%2Fudlur6gIQtWAPAGbi5LOM7baqLJevmGVxu4ayZG5qICd32V7sFUVKiUde94RW2ZgHTnAYciyfPEwjf7SyQY6pgF7Ps99H309Kyr1Tix%2BmoC6d4N0ktWhsAX9%2BdJ7IWIcmehgx3EGuhmzotAR52HcGsWnDlsY5PSQgz5ZlWglPDuQtm%2BYZcVodn3BqQEw6TXzIhjWDBwdg5IZPC9O1tur760kbu7UCPitVoYv%2BsEInuvnmKZCePrMLakWB4hITMRjnwZFI8phRhacFZ40be%2B0p7oXt%2F3tjYR%2Frsxghf7vWPeVux%2F%2FywLM&X-Amz-Signature=3db121ff15dee23232b33f989a332b42462054ca851cc2f09131e1e28300e735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

