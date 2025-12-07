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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYGJ54W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2pcmI%2BVj1JnEDzuhsJ6Y5jze%2B6H9PBYQGcPQf4WwIDAiAuNgzGH6yDekMH7zhwTE5R4h%2F27fngatzsSzTzgEuxMCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWguTn43DlN6bxqSvKtwD%2FtxBukBweMJC6S1AbcQox%2B5WE5ZbL4PVgvnR9bTmydVFth1ZJY4OjD9ROe6%2FxJwYSwa4pmCMbQORuBX4nSer2bXI4Vsszhx4ddBKzP8tCDMvxsuermzvXSfRtdONESvXEY3eClIQjkCFWiu3VYNjeQe%2FYZtnf1jS2zxKqwSwKksMGziofuTwmiBmbFSekEBYHNjwwMZmHIiypPVH9exNwYsyxKw2vl0I2xfQDCSfBK1G%2FtwSzlIfGrquxj0%2B7C25peq0CqKODijrEwC0IUgmSddiymSBsOlXHsEoflXURmxcnE6hf%2Bf1RKfP4PAPsNmIFCOWVghkIYPWR%2F1YHdDgsWLA0D16yCXSxWukPFbqjIoBcsyQH4uT%2FnVknt2VcnnYQ7QGxSv%2BFMZvU%2B2BudRCNvPVZTo%2Bgk2au6GUrP7jFBNEABQjrjHV%2Fxnjnx%2BXJz0%2FoTfRgSXKL1Ukad%2FHvhcr%2BpbZqgxd1Xy%2FDldYfkkM0OeFjDrzLKzQ1zJc3S7SR082iLg7EYUWLTBgnDmhdrilUv4nmaM77t3%2FiZm9WcNeGbnO5MYPK9z3yI177GPX1BO9VPgZRkXVx4yJHyViMESkAZefjSHhifXirsztb73ZX5Vi2TO7BevZgE9jHxgw66HYyQY6pgG7Wwaky5fK2fwOLec%2BVw0%2B9Ycv%2FVys%2F2Fhkv2mdr3I7GfsKEZHkVQvbELXeTCROq%2B4baae8GzsJdfzgpMKltYZMm967NGRj0XxipR5l2eHD85bZozhp6QVGt6Yjb1QfCetvKTQeAf5V%2Fu2qjNlyWZUEEMgdboJVQve8zg1KtoadPSjatU%2FU5z1r1VvUs4pXwKq2GU6Loind%2BAD8GoEm81D4LLOjT8D&X-Amz-Signature=939e0fda52fa07cf199eec0fd5d89b9765196370439072d9dbf895895f7fe130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

