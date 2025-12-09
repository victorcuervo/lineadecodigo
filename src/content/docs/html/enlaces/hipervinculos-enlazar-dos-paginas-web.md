---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HEJPBKL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T211214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClpDFHIpFfkYTtfoQ4eFazVDsb0edSOroQzgeI5LjWowIgahX5BavKQjzcBaebDsWqsd7xcwzknp%2BdiUkNUxsyCoUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF%2BFuBdfN6XRybsTSrcA20MJNEaP9Z%2FWnNPvqVVeemFCZIpTiafsqBFaFVbgZ1MiJ1UdDFabPzn5uzgoi8xF0vRkFNezfd4bDVs7UadGkfa60gE40wbsVCuWYbCwUD63wgPReB2RaspZwAQ7PlsMMewaf%2B0zq6fBjXe2d4c7frb0723hGLDbx0OFcPIiVYJ6P5DR5c2%2B6Hol0NzjGBlsi%2FOTGXxvgDvb5hn5MRDIgpb5QiFJIn3QyldSKUw2lhXZKLClOkI9y9%2FtMW9uBcK%2FnwhoFbN2s0sZfB2Z60gAP84xwbdJCko3yHaOy4IhDwnvAhaYXpIExtXzxO8H2OJ86Ost4O5Pti%2B6FvNsV9UAik9r1d6Tgzd41Qh6zdT%2BJgLSfd4oD8mnrMILkX9d%2F0%2FumKJcO6Wl%2FohxHKeiWUWjEaBg5pRAx17i4uW2WO0S0tXK%2F7jeZcTi1FhFscEP3yt6CBG4AvAel7c3%2F1AzVRfD4qrZOSgaloPIc7pcVHXGAquT1xjLrTTeOlNwsIN%2BvHxWliXzQhQ8T1wKhL1YwIOMQp%2FH5MEKJJXUqCEdaqVaJxu8hESKfUZ7z8haknN6Zg0IHAOArea65GrHtrbazOjDJjNo%2Fb60K%2FbGz%2F6FKzpBz6O5ed6kf8LPImwRhPxMKGg4skGOqUBlcX%2Fb2Ekq3g83cf7eVOaApS7dBzHQ33NvVc1LlNZMXQ9S2djhv1estyEI9Z8neOtQ616UQZi7ypXEwo0THcbHYg6mHT52nFmoRXLVh%2B1HFlhTOIe02bOWuJbKIh6RBXp1XFvBwQ55JCZ%2F8N0QB84jfzGtoG29UmvhYsxeKtDR%2BEAeIgmKQitqUU755ZFOcetQq03ycLkiXmV7pxo2Ez2Qdk4AiU%2B&X-Amz-Signature=617da5b59d6f12476311b30d8157602e8d74961d4d23db8b63a61bec68e813d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

