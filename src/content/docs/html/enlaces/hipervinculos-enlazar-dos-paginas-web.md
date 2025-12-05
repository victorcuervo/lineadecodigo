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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL4Y4KXZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkbbJKDuoil2JA%2BWNjVzbEa7VCSptBESBRiJzFCDOHJAIgZD8YNlbIjkI3f5GNNkiR%2FMGscgHCBNmFBWhVAIfgnowq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEV0jSO8O8p1ASrlWyrcAyCoKCLwZcVP3RrOdnu5yPCjERlPbyYfweEq6ACqFUroTHn6ITPw%2BrhnqiPATK3MuQ3rmcIxtk9po9hPgQghpA%2BErL%2BPJqqBwdG20n6hT4fuRUU%2FLfZY1%2BPf9LQj2Pg%2FiyoIK7NMUPI3waoaxy9LPpfLWhQ4POJfD7lnUA%2BPgRjdsNPQEkHcAKR3MG5IobIJYtxaqrbhizA5fHvteVKw7QEIUTvAGvMYKtdyLbJWcr7gea%2BQq0hb4AvhOPjlMBV%2Fxrzi%2F0SdbMK2E6SSzQSXSZYkLx5eKFHn58JEX1%2BmUAU%2BvegC9RrXbaGyW7Y6xz5Zr1DbLifcEfKKkrXFFv%2BtcQ73WRhu44bLJhvpOrvYnPuUA3IiXxvjpknZAHH8JeL739x%2FmJOr0NOCZEI5865Z6VcltNKLB2dvb8FYUVeRM9b80Z1v5gImtYv%2BH6G%2FvSVX4UrzYDdHRgoNRZI6zOPfjq4aQxnDH9hhAZbrfbZNw7wvURQcgnU3TkF5eGFwAPDOoh9MGU%2FhljVuDlAIR0bh3bPXhCZk%2FXzEouK%2BnA%2FJ6V8aPSrq6FzA1BWEXa1qASmb5gCmeKaXiuY6EOU7bUeeqTKQtnLirMxQSVxHGyuWCEhKeMzL5jd%2FqFI9hUvBMP2vyckGOqUBCfPgMv%2F515AGPI84gOWuoaSnngvy38Hu4K54Er%2FXUz1U8b1z6dOnhP2VCu5D9%2B6epFfOkL%2B2gcz2OXjO8IMhRXM2Ybg%2Bh07WSUPleErXDhMt1Ur5orOxC8emQQs2hlOdj1wmSa%2FyIzNyqGVbhivU7MyClGwlEkpl6mzO9604lPw36DqAEJrsUO19ct7F2W%2FIOa%2Fa0B%2BtuLaqDV%2BGr40kyu%2Bq0fkR&X-Amz-Signature=f8d762fa716f45a87047a0ccc22c19b29a39f888b45d4f4d34bba3b11f74b3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

