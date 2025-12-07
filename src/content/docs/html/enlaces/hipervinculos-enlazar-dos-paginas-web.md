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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTZB57PR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbJMB1RWcrnnEKnVzlkbiKvacylNDJocc%2FkKxQOaj61AiBwNP6PSTGHmOLHGarPbCk2u3SAAWDTzl2xBL0CN2GpMiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2%2F5Lui5eljlFTN4yKtwDby7ts0FhSZ1ORMhSDeiBCAZSFMbssB1L6P3k7d%2Fl%2BEh6dq5swrcr9tSeOCZDDIvlKfEly9GbdFzFVdCoQUiDNX96q6ZrPW5jr%2Flo0H4OAHGYrBqSmv2Sq21CCTZ%2BI0aJkW166PCLD%2FlRR1ZhXKqCaTBHuwvKP%2FflQ8ihE8INjgQ1R1J0Ou8QjM5%2FRA4t6jmi3iDD4NGZ6g5gpBZ2OyxxGMQVCnSTVjlJ4hK%2FepLRnX58fIg%2Bsa30jnHcmiSpz9wx9M5VtBh0s4VmkMmEt3vd55iqYVrLnw7Ix5iLA8SCkZHWJktVSndayM44NlICKhDXytQGyzh1lxB5vBB4ig%2BRa5wLeqrH8rdG%2FAFDG%2BjhnjT2ugrG50rYpfJw6dJO9WBiVWDxgePww%2FdLVMEZA8ShW5SMWSXW%2Fbvt8pUM3qQM79JynIVJQDGRks1tI64yo4%2FFPMG0e%2BCA16tvb6vEO%2BA1gOFqctgf9GFkeyx%2B4WbdwmjHFLxgb3slgIrUt0O5UW4A%2BBkzXZtc3cOJZgbq3c2H49hQNp7ZJFa%2BRhCmh2e8ytrfOJVsqhPMCqtSjzhegCq2DGgjxeUP6JwXv8Rt277gvFJBLxuJaMTAbX7NCYT0L6xzEG8lp9Wx4QsZctQw0p3UyQY6pgHoA59wDwDrYqddMsfN%2Ft0PZ%2FoTiovzpn6iklBoS50ye%2FwOZGlldU7COS2JaiFkNX4UUqScgTUqWzfX6nWMi%2BQ1X6uAUlP0cQf9cUcj1FZallsYgYc2qFeQlJCUawhRz6MEhQAW4CFT%2BBYLsF12pyLR88G1Dwjh9UK2Vgger%2Bg72XqeDCSiuuQBgzI7n%2Ba7NhhlZ6gm%2Ffc976olRsYbQup0bFTrnmHf&X-Amz-Signature=c3b857fa68c6d9985cba8fd386d3e3d23f705e7d4179c3e42813627c40d53f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

