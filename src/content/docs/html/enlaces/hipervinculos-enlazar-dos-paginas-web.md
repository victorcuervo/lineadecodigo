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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6OCQBV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ7gTILxiZRhWzRL%2BbFLFQDAlr5K237JrS%2B0Jn84JrPgIhAMk1iBImopmJzTt0ulS7%2ByY%2FEgB7OuKPG8%2BhbkScER35Kv8DCFsQABoMNjM3NDIzMTgzODA1Igw4w6hGDFQRrjUB5Zoq3AMEwyg%2BJlOBHm7ZZlmC0umRcHfBm7HHWT0p4CQbAYlIR5A%2BJBYIxnv3OiSV0R1QSZgoX7gHmJ1P5XJhq6bb9IRwHbW8u2yAAHJRRLMs1bsdt3%2BO%2BDi36lcGFbaR%2F5alyLhHqArBYJLlYUvYPl%2BsizfC13kqNIjLifDzbFV%2FCv0bDBrj1VK2OmukJuULJGt54ayLrWZS9qKu5urIjKtYdYJAL9C5w17jtIZ2s%2FA6coUu%2BGilyQNfah%2FB%2Finq1KOpvpasiZqpiDaVMcBZJI9H35RcG%2Fde9Vpi0HeWHnbv5qqvfGW8UgS34I7ZBMX5RQUJGaWU0%2BsfbYhLgJov4bsM8c9ga4d2S4eG5N%2FeYJVWi9jNn9YJBqTdnNuERyV5eu1BEPeG%2BEwGnEwTp9a5BwqmRpsuUG%2Bel2IFeJi%2FZ2ALdCwEsDu9Dp803x0AHMK4ZLWyRacZ5uHXAhMMG4SnXkNCxXYJ6qrJs5s4TzApyZ%2BAU1PKE6cjnibbQrxVvcJAgTJIvu1EsgMb38%2B%2FiBAiVIpujR%2BPL6x58NW8jyP73Fcvme6UYeENaQsPPYnk4QSHTx4vP9x0zykLV4FcUp2VfkOYVV8bEfQGvfrZh1BI3sHoVVk%2F01NuX8TUPr3YuapfUjCx0MrJBjqkAaUso2KzNrvl2Ie6dqr3BOWpG0rJV445mPZUCXxCy8AwXwO80NraqG9ZaqPB8erOFrrGl6y%2B1WcqbkKAHVeCXFHVqT4qxpONk6LqEFCHtpJ%2FOip%2F8g%2FECNBM5ahxH9IlQRncUgpT5iJfuInOLdRsx93J0SRGQYYHCuD%2F6pxdPHcnQi7MmPWtaRsGhFtfiwLBDWzaFchemio0n2JeSJN9aN17Kdh6&X-Amz-Signature=4fbecbff76d54d326e5a678904b0839e119e98ea20abb298a76b5f8e6c3da8b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

