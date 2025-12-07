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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLDFAC7G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIeh6%2BQzJhr3ebuPzqaJAFikLGQ1v5xf6qwUF28pWlaAiB3wiJakCYdtHdpVuVYUx%2FjFdfzm0840NW%2B8JXWXT%2FHLiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNsqeLTGRCwftaLE%2BKtwDY86IRR7XBgFyBRbHKa0hE3mK9UwnmibHorpSS%2F8ZSOnIDYVcO1gOiH%2Fwk1Gu8m7V5gbBez1GKqBM8GZ9E5iU6Na0LEElw0U5k5J26WB627gKFIjGxg5UsDa9cZvgm%2BwY4Xu9O5kVkw5wU6WqecNPZ2mS%2B5fTCunGKnnV8f80Ra2uNXYp2VcdSVH%2FQrGOhD%2BNB195EPk6NbO7vm3dzDx5Bw57UtXQcqvbCLzYHJFOYJMda0eHZK72CZwtI%2Fz8eckxd9PSlUxNqU9YMBSkbeDKvmWcoKMfK0CRbe5qn1YmJwl1fzDY39YwfH9Mvq9146bS%2FkMOvcD4BpQi0vxzRhwJgapNNI469qUWIvK8fMxpaM5TERe%2BCevQ5vNW%2F2%2BIGRZNTAjfIYxWfmmA15Sol%2FlGWs5Fi0AY5xiwoUt9MSvS41m335zfnhyOxGNObfmtg0uD5Lds0utWnQhegP7UwWE0pw6SpM%2B5GGQfYHAVkyu7rdQ%2BWNWK5fjRw57wkfR1Ai3AEXZ%2FCz9nF9szNHuGgclX3y7bVfU%2BtaDz6P2QEea8t9qFirGF384i65qEV6BaQXEOroRj4UapW6%2BxCxS0FzUOAowMZwI3Ef5W4qFqP81JfXwW5kZ3hNi2y2%2BXjuUwsprVyQY6pgFj7HnPKLP9I55uBYo88rWNY45E%2BdG5On3a1Tq3WfmPWNKjS8emDpswhkEOKGzYgdH5wKdSJ9FWXWorP3rG0oW%2BHcU%2FHDaSWMteSyUJDStSAgUv%2BKEbQgmpaExs2yTVniYSXfQXZs0eIT7ZKSd4lbWjubHtpu1LwaKMJ0tIY0TB80ruhue%2FgWDJQafNH4D3zUmfszoTQmU4T%2Fgv%2BEWp5GR3OujSp%2BuD&X-Amz-Signature=8c6e83a9fb8cbf1d6e736d980ed23f0fc56c79043847be3dd9c375d01f27f1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

