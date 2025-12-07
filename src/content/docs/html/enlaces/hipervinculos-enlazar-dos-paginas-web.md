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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KSU7BVN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcibdNW8KgRYXRd8csY283PNsmk0nHUccMUxVYWPItUQIgEFZWDpx7tXBAvJC53FI2KVfC%2FDMHNmOHfwCt68G2afcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6E7whgebsSgxTy1CrcA2uaY2cb6fKt2hXbbBzrkD8cpWZYeqlHEVLo4fc1UASShzYfIYOeh4dOO%2FIIuLVMLvgjJgY0xd8Y4zMVcCnWR58aqdlVIhlW6mKniA%2BKtJiLbgrMZ%2F1G2Pq668a1ZHym3tkFs8Pa4VjHLjLqGbkfVwsImYCbbiCmD80P7CH9uO%2FhgF7c3YmO2RxWGvbzzKlgRQWeoPXn8g1alaF6kiWR9Tw5S%2B3SQISB08eIKWAEkJv%2FF4BtARfOffrQWHoQ1wK74DR74jWCFYPFHHbiBGw9xdWrNv%2FVFxo33ADR0%2BPBlFxR7PasCWCtjIsJLAF5waoi%2BTljar6w%2FHIRayhZWtcl3RfTm5D0EfigHvMa7x%2FrE8NxDS3soJwYkz%2BUgiNgdli5K43d3L304BcaWUeUvpERRhYfNIexBz5QbSd9wq0YKS1AXOqC1Kf4dqEYEMaEwjTkZ2EgujMY0t1ihkAcbMzjnzYnIxha5nyvSQGaT1r7qmjZQpPZhKhJQ3XReTNQVnukXqYx4CSWjHwqhmZPqFRE44MJuGzDcGryLoFMPx20x9BZEf4Xm7dUKi%2F55oobRG3dzT6aQzSrbh5vrwOQzJIRSj1X6JdeRHseUmJ6mX6x2Tf%2BIWZzV5XMi1piLigtMPG61skGOqUBLk8NRrK6PjOICZBivzNIUy8YgfuMZtGkHbFTFChiZ5uW5Zc6hsh2ZQRQgp46Vw%2B9jn1EIzFYnhQnJh8rFUA0bV7xjpYGK0DoVYvv3A7%2Fej1SAWlb0JQbHrIY3Ym0K0xd5xt9ev8JBH8dEl%2FPanXwBu7gxOE1tym%2FNBhrzEotUjzAI4ByaVk8JOKbWXj1X5ZkPORh5lCWYb%2F1Pf9uLXBdwEFjFev6&X-Amz-Signature=f2a69e86fe24834c0b88738be69602e22aba02420301cb53f78cbfab4f20c79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

