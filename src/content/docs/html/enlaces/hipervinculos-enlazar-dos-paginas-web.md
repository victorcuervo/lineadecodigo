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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7GTTMK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1yWmXDgVOwHmNieKkfyr65tsjGnifUs9i2ziLSvCHfwIgSKFLgHZ4rdmlQchLjXTj6PB4vZEH3v3h1fGjJPeIIe8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNZZ9TcYurW1sdmsfyrcAy25O6qkjejZYmjbJjFu5xJJbFUw0e99d%2BW6A0c4USi9BubRW77C6RGivFDkG914uq98fPdPFGOBnqshWlPCE4BepShK%2FEuYpJbhBCrfQJccaWMQt2f9P6Z5CDcn9LO7SZcMBOHnNdzQoT5Xb8JnusJWMwVkpN%2Fc4zZtX3VAMHRcBiAEq97YXtTxntRSJlhI0%2BvlYLzKaJEzaRRlWeWAnay4eJ3%2BQlR1sdueo8E1fLhZZzgv%2BTDbbnj51Qrilc28H3TLBbcbLSTVjoGuoZXDupNgp6FhfznOTjTRUrOaLWL4hXUGvHNrS%2BJQNGR0YOGxElnWtCgERhlz5SsY4x3qSc4ZFPKGPCxoJMOUzpq%2BWVpHBVreRx5F6FCtJ9U29tDJeCQPpdkY5Hye7ZUA0byTaA3smMcVElYfdHXZEjwPwN0OZSj5jisiYqr7GAHyrpsP6ZhWBPXRVpEEEYIG4i%2BoW4kHBwztHReHnjIhZe4MHfniz5p7MmcjoU1Z8RxxmzpyLxX6QQs%2F%2FJmpTOJUnzZdR3SGqZO4MOiiyWMef2yzcWJR40PmilDnloEOQVhxX5TCpTKGe8raN4PyTAqp3%2BCpNGgqOzsXzEmWFp7sz4%2Fw%2Fw7qNzjnoj8C7KqE7i83MIHG0ckGOqUB0JplNQ4Cne2GmzR5CZqY7KD8BBF5h5F4Y8zTeYtDeYI78W9HU4UJe1%2BgTxQiBi49B0MHubXjsg9he7fOKv474Y4JQyj0aI%2BIXMp2Zfklts6YQywZFWQQi7VpJTav2CBpIgdTBP8MzD%2BgA17imf%2FJIXJWjz%2FH8poNpgVzGRyxTHxLz2SkqOtMLo6nEDOi0s1gwYQSgrEC4Xtj5eZOMeGFlLhWDUB1&X-Amz-Signature=ddba7c51030791cea462f193557fc8f0ef052fdecf1c38e8afd22f6327d380c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

