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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UAZT2E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcUApsl%2BufqT%2BuawOpMXeUFB1frvENuQrjwRlSk16ykQIhAPRhjkweqCr3FCsepZZqHb9JLWLElQvL%2BxA%2BJGjQ42pcKv8DCFsQABoMNjM3NDIzMTgzODA1Igwmdxiq%2FSW4q35q0gQq3AOacWF1hjaxNFWQml5hP5nKESx1DpmhqkQATUP9%2BA7wMu3EtA33qEnClhm6xYO8nzWNyZIvIo2%2Fh0ZtJr5BKTDdxOVfO1oW6EMjmaojRwbOpyFCqgFDIiV0aKKwt4helxZ0d%2BO44oTfR1tsXuCQuX8mTM7iwIMBYUY55FgfkOWc2byiRFErThXxzMz1cA5%2B89iSWCd3X30RpzUWWLamw0zOBRgVW7W3uwTbNy359hMC4SbImXayYZjdBLyNMjW13LI5%2BX7BIyZWPYxoPl3yYrFXcEEDObDL6IGJNyoMyGPcy1%2FZzRmxkojSYHeRegbKApEyhiRCcIfoO%2BsbBf6At3VGTPntqvHpJd7GUSck87RnHt8LAlCW0LFTXTHrTuiqNZ2m4QeMAajIb04XT9qS74nQ2wKBu9LkJ4tTWt4mN7Sti8V%2BYb%2FiV13TnK1dRZG7hoZ9W6tc7VNJzCRlcPU5Ait06tpenW5P2OJISoSfhFOYDK5NJL4ixkty6jM3inBFa5wTUqsII1hsf1GcKtfqVhg8gvgKzpvpvZQAG7zvou9xY5AyH9IIDh%2FZvEaQkyg0BNqXtgM7ITlXrJxGqQRv5NpQBtdLY4SuSK6vLESGpm3uuHyXHcO9l0FglvBVlTCL1MrJBjqkAZ6obHIV63RW3rze0FOXAURBqxCe3aFciW8O%2FUuHdB0f0LUK3bLVQzBFfqG%2F%2FgdAtF8c6F3hV1Tq0XEC00YzO7UoofLY4cW02i6lapfuAqutdJqZ7zPSSVzh8tXxaruEVp44iYFNpYMuTT6JiPj0hVhtXpN45kV%2BOiiq6kbsmSHTt15L74gb2b4b9wD%2BDFsM7kPel4yRhBGZeqPyyDm%2B%2Fulv%2F0D4&X-Amz-Signature=63c727e6ad0974d6b74c5dc9a51c346491ae9c4e00b3d207a150d25cb1316051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

