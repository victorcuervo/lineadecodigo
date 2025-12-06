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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDD3FZN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCigjo68hTA6rtfAqrVYpAIH%2ByVPrpYeU606vUpA%2Bpr2gIgP9w8o%2Brp7AFCu80XLpCSvzUBZ4dEBuaNNCtN5tLsqdkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIZY74NQNkfDG2x9wyrcA0mffDK%2Bmm6PQgM%2BeOqK6D2J2Oy7F7PzQzqK5xjqbu%2FWyR2Q5LBGGDGLVkoBf3xOfQFDO7iWqy6F2znONe4knO5VsW8MWiCN%2FV4KIsWGjPGrh7LZRGfhYDsqAmb86%2FUvxH6wRZzUvNWAwNOHGnnlBveBoy7XWsIHK%2FlAfvQNuazqRVmrIxgeF5kdOaNSOlRgWfZrE%2FHzGofLVinAbdGTe655ciPwpwUrM807aaXSPeXJcg9z2vCs4%2FKx5yuTWzRQSPbit%2BhKwft4gckyk7DOsNlgBZdekYZtJQJ5cScMY%2BH%2B0qEt7gyrbca0%2B0G6zOQ0cXGcVH9vcaVXCLXXCr8%2B%2Fa2xsfLWb%2Fi83Fdvd0fwFXTK7aT%2Bib9j0dYX0bEv%2FWqLOz8uQzJAR6y%2F6An4roXyDLBOcyjpf0%2BtS1puyJDzuuAIaDGPzL5xfFsAK6oUYwXlF80uqGt0TcZNB9BlnwC%2BwYA%2BrMl6KfzREO3PtkcIZJ4vf4xCHpzuwKkeUx32G2HO0OU4kRKN1AFjg%2BAGkDNlrCuimc3tZMXbY89OsvuI1bRuUDad%2FZ%2FMTnXXjpWdd%2FDuuCRZHJvZxQbkzwIJGdQHlDPgbN1DSkYwDuClr7BuuaVtNQRCrdEX%2BqXwKvpQMOvM0ckGOqUBJsUapPCZdaUzY7xwFe1Xd1DUfnR108%2B9sxqtM6c7UHr6AyeP72wVOzhA46wnO6SwNxJoIHzBduiWasZvgmzSzjwBCRw4aCetgq7v91zCA9E1y3dU9duUQe8CxjtHDu13glkdV4oG5kRlL7rkbHmxPl4p8hvzrLb2B6z2o3zhNNCOGkG8AAdXG8bIFo6CEDge4ZOoo9GJ%2Bdyc9raApDbszmxsu8F0&X-Amz-Signature=c22ff2283e7534f9fa01eee1057204c2e1f7258ef247378d935c44dc41b2b609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

