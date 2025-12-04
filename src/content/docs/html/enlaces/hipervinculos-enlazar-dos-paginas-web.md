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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEQDTKI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEysjDb5gcmIwaOfqlITsCxonOy31LjfRHJrXU3II1bNAiAgJGQdvRascAWRdNKI9tD3nJWopQl6GmBYe0ZowovFpir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQzhiCZzDaKtcD1uAKtwD%2FQGzmVX3WhCR4CaHexQpym0txBdorfrGdQJKTaR7VthsGkb7%2B8C2aAZk6WjVhlDu%2B8qDLav0EDvt%2F0YYTP3fXZRT1%2B%2FXfbhDEmKXhnnAWlTtNuXhQ%2BK2N0YsSet42evob12l9n4bUk0oUeYnrQ2GHJewwBg3plMv%2BH83WxgeblwUEmpbGgcUwWhi%2FQTrwLKR4tOtoVOHMhe7riCuTC5FxJfyOSwKxH32CE6CnvbjLr183s8upE0HC7FKFqxSJZJ8rHwMtpeGzlgife9IqbXaGq4CIPk5h0ErwIMcPcJsJp4%2FxxxnNkGvzyd5ARyBpcAAZVb58iboGDH8Ft%2FkNqtyjYAC27vLIZECD4RoJTUM9PvKvwOocg%2BP2qwO%2BBiuqX4BSu6uuNGE%2Bv9lNb9zTRBicOb2W3PvnWGiAQYMV7NUElqYXVzWK9pCHSLtealeHAyo9o5fRkWFYE70BV6Hf6d42CNd5ZKyClcycTFbKbgbhTtf2lQF352qJbW7rZhlDdRdTsblFtiSf12%2FUyPIJcX3DPs5vnSnZogYKBuS0l3uZt2VPW2zPXAo9myuvWhGQf36zWRxr6rmpfEJOAzesDyPrFsyf06FLt1XwGixzd8N%2F3ivb1agengi1Gl3350wjNzGyQY6pgEJmp66zx5d4OCsVK7Zy%2BhA1EWf3tzSYEYK4gcy3iyA4lym5Ze8kq1NgIiTzU8jtgPPJYob0RAGiXCr0IO7ByOPDfkA6OqQHywFRy8vuwf6ORWNcIYOp8qllMh0F5nJ%2Blq7DVEjeZCdqfGk%2FsAUT3r%2FS%2BWV12NsJ1g9pdyub89Jbcp8qy61ydA1bQ4eaR08SO3bnf0P79qTl4OKppqnmKw8KRl2Crtq&X-Amz-Signature=fe6c2b881c15853c41e470e3b7797ea3b1038519da80be75d66264ed645b17fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

