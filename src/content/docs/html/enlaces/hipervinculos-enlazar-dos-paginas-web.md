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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKZIA4U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T202131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDVOSWEHcGZaKoKWaV18VORtNBlSwUZx8MGjzx8RFTYAiBgnVmOsP3xo0DU0BM5fVxD6fP7fgg%2F2SQRR%2BVKx306YiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGAkuNxjqDPmJOiDWKtwDZz4t1ruUECV5ggtRsQr5AJqE8cCJ1XTxAm5MvHnf%2B2FQfMe2%2Fe0rYff3qzEnR82oolCXOtwvjC%2BiRC5Fn8%2FaUqUIrh2aUOpCuqmdEzQ9FkfNjU7wiGUoe4mUqSV5G3SKcXYhjFtMwlFXSpVyayXK9RK8u2Vb9y4JTaJJC0TX1JROJ7PziNJmyf9z8LuHUHUPCetCyO6PmiEY5SPPDlmk4KviaF2dtvQoaTAthd3gF%2B5x462G6T2KVwiKNVgiy53dtaXX7Jcw01sKSBLtULltuyF4wGuHFcDC36SFYafErSbNLEQdu71WrG33eNA6jif4xWkUvMUUif3FkfFIhLoYJdl6DRg1RkDZ3ibvqC%2BhefPPee74vZ%2Bw0T8ra7tlfkjU3Z2e6J9vMR7j%2BnzGMMkZbAx2M5sC2bKxNFSbNMn8jYsTqFlMW7Of9YedgLq9uxREMp33%2BOSny35WEIaeHa1nkl418OOv9OI%2FRnNzwOCkk6TBqvzO65h%2B46mah9YSZohMnjzB5u5KpIMjCArxU45KVEK3Ywm6w4BjqlYwE%2BU%2FiyBT1nyB3tzMbet6qkh7wmKy%2FDTENJerUIuOBASuNqeNTsOhELxsPna9NHZ%2BeIA7Ko4v3j3nFyi2ZWqeT4Iw1%2F7hyQY6pgHkZ0h5yWWbABmLuv361SvLta5FIT0f95LjGb%2BJU1opqLnrhiW%2F3amSwTAVS1FlSqel6lSDtg5%2B0fWoJXhn8pFijhRZvvIE0DuwDEkjUnYd8Xntokw8Vhy1LlZX8%2FzEPUAW0xfSKvKYKLflDTp1WNWhVXePx0Oee8Vj4SbL1HCsXQ7%2F1Vs5Bglv8kql9md6PdQxrMg75EuIZtjF%2BRccpwTnGOockb4d&X-Amz-Signature=e3fdfdeb60ed6ffcb315cb103590ca280a465322c77450d20d14b45aa6bb2ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

