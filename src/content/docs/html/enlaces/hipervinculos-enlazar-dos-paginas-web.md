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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ3TRGJO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfOKJCcX4L%2FRTAfTRtivFya7Dp8DLn5M28UsDVvAYjXAiBrL%2BjHJTaV4V8shkTMdTcRmv2i%2FN2BkBqe2ulM99Is9yqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNEiYYGa4b9HKQmuQKtwDZEYttWmUoFsyx8mUt1weC2SeyeHVkR6M1xdOGFvXULkkCKzVV304s4EdstGRXR1eYUfi15fg34Y%2BqBzORa3DKP2b4qMz0Pb1gXs3R6IgvQebLuOcIbUiwlIPWNAxswlPc2XX2kbOrqSQP3c4x7Ozgn86tk7Tky1mb0jjfbQoRWxPCwg1MToeboyaHGSjFhdVw5%2Fx1%2F0jVVy5Gx%2FtdOeOF4JQ8T4%2FcnWnK9VJ%2F3%2BlywLT%2FnN5uuJuU2%2FQRKGDr5LTXVNL%2BshVY1Jqa5vrJkz7QeKLM47B74HxvfQmGyihgazmHPm7Gp%2FenKEJO1qtuqFvm2lJrrXtptuv86sHdDGApb4gcOOUWYgr6PEZkKjTAbNAj6z%2BkQqYr%2BlX7F4rgdSXRAu3lp%2FWwBgtHLARMmp9t0LKmp6eBq3WHbrwVXXP8uR0Vg6iKE%2FYSPenv4AVKeyi3gFlS8kqEUioLm1fJOOYIknbg03aBNiLudehs3qQ5x%2FPTy8DPzNdjoZoqoWeprcwwTD7dedjynvNnqHT7lSJx6Tk9NpSl06RzQUsrPKvJigQ4rSVoh1IyEgSY2RA6%2FO9zQ9Lplz17cAJYFjgdoZ0jQRmisAnScKk%2FqP3NL0teIePrwzpf%2FBQRjkfMFkwqO3ZyQY6pgEAxDIepDtFh%2Bu887i6Bv5j5ZwQVA3pdHAOq0PqUtplkkjJndb05Y7TDD%2Fo6Gp7RU5MCjsfvqLxKk1ySNs9kchGkfEKEiE9ByF9G%2FR6UxdWY3iu4mZhAEFErCcBqOQZMKA2U%2B%2BgFpgzNMRcMzlnp4QVn30%2BVB%2BsHTSD0rb%2BvnysqkkAYKJzS8yghv6sYgmOH0algenAUXj624SSHpm7G1HZAsV6NhQh&X-Amz-Signature=404f2c57fe1c38fcb76a53b0b9e1dbfe3d0c3c7e2026b74b1b619b4ae6094ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

