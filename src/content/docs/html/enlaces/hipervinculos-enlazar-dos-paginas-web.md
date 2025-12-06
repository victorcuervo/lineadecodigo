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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNQ4KRL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXs%2BKjBz3mr74LX2%2BtxjveCJUZW1zKhL22bKkRYeLK5QIgRcYbEiSvFrKKGleLQIt0G4t2FAncPXtoXOve9vhEE0Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJye98BKTNFb32yPYyrcA4rifJhZYSy4AoB4DuHhRPD8fSL3Ws8ukG5g3tIlh84emAs59yRDGzZvv2oXXR3cJk0L6pWzBlIv5RJJTs3ApL4MGIx73QQFwNORIEVMmWyawH%2FtZnCb3KQtnGIFrYyZeXBbJqFKfDUfKld2VuDOdU0mBGwfRnu8TGsrXoGX0ccoEUFnkFAo%2BKBRejfBVGpcSAjVMXP3H1ibRq6D1MYabdJzrQKVEjZyyHUV97aKFseQfIcsmiJa3wfohSMcYeCnB2zMnfKKqI7fBJCGvjgYaGu2RWxHJ2%2FyFKBbaMAIwyCWgABH%2BLdW5J7Qxt%2B9dIyIpokdO4hWoQoSA0LUNAbOUDNP%2FBsnfJyW4XvNCAzFtWTZoDLIJjT6rNq%2FHb72gPzGrupvCdujy2KCJTMbuWyYQQ51m5EoXF1dIVwjnbKPxet3MryJhtYNKZ1Bplx0OMfA111bmEqzOyWImiKJ3ogV4GhHaBZQR2E5odaj%2FuJNQ%2BDn4OsnfkNtB0pNhxbvuHeOOk%2BItN7YcIFzfKduX2SYpdPIfebAdnCUu17a%2Fps2u8zexfyqivkA%2FamKqO%2Bt6ruKyt0PpKcbJ4LLhy0vQeXHtm0mWIV%2FTxpnqH6reeMBfyi6p1Fmj4nQmCfbYmXIMJXT0skGOqUBtAlUzxir99cOlFy6uPQa54WoMXd8pHdxYu32euInYuTO3v9N0IMsqknjcA9Y%2BwQjxNtZoK1bEYhAf40I%2Ff5F79g8dg9NrBQRZT0xka70POfrzShzqrntiXFe6IBg%2Fm5dHVv2wxx0UV9e1vY5kcQtZZGD9RwKNwEZJDASamsCgdb02L0%2B99apbKDyhjcaeBCeuocTWTJQO8kb2Q7vRCgpeEeqG8yP&X-Amz-Signature=33cae16cc5ec98d29268f1f4c548422a9a137c8bd4a3aa13a58fca5dd5980d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

