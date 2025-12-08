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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R76AFHAC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZKJbEozNU42fSYY6n51nFONfDEWVVX02i4rZ%2BX3TPowIhAMepKPdLncGTCqmOEXSz%2BFL%2Bng10cY3q60S7%2FxJlzBD%2FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygVntqET1AyaSz938q3AMBk%2BTOVc%2FuXemTGhOz3eqFzOblBXSi7HUFZgmzSOGDZwdg1RrYseXtDtYn9789Y%2B5vaH8i%2F9GOEpHhkjM%2F%2F3FchRZ4qQH68SL6hKv9dZZ8CctuRfaH%2B0kP4z3jFWvx6BZ2ekh1PTBpmB2PXWDNEOsUNZc%2FdgL6icX2CfAx9aDIWkTr4c8CHZXxIKIyaXuf0%2FepKhyA7WAn0Huw816mbg2paQGCb%2BpdOMaogvB2qZrodq0f%2FYmKYhBksklFzQ2KNvTPxVUxWhlZkINYF%2F5RgFRAW9E6o40KubDmNLKXvyfT%2FV6RuKTFIJor%2BgFyf6L3mSGMVoSBjaMLIp2rZFr%2FguTgBe8j2O95UDucynylquwJMMvl6C4EI%2Bgck1eVwEwP%2Fb0YzYc6VcCqqtGEFm0X7We0ZXpbp3sdOcfRP1GILeW%2B%2FDpCwvh%2BP2loK1aN9m8x5rgB6j2Ro9Fk%2Bc%2B%2BcT57EvW8hs%2B%2BADqqXPwUbxgBKQ8YjVh%2BU0Cbg5tBFXp5o0awThRkC4tkbmeUjTOiutvmEJMITcJK95W1ylSJ1lz%2BUCVmQTUtxh4Ffy%2B66i9eJCN2rNf0hp%2BcmzXJkQXw9bLbgRCr2yCOntC8ns1HjQAN5dXh4nNt66JizcMx9nD5PDC67dnJBjqkAfaAHnsBm%2FqGHr1IAJv9kk3G1uj8Z8bzhS5kKzLYh96lOFoTF63eXERgG73KVEnGJUZLfOLW0PCcs5zNOQQrXEFNqH5yjgQyZlmceIfzfQvv4jp3oYJgNRDVi6ArIF3i3KYorJS2MYy22HM8Jzt5Vk1Vn%2BPCCLGNUX7Zi0ncJ3PYl8Z8jFVHV9H13xGYnVYlPnl%2FpcjL7dJlRF3p6sTPXgO5Lxjq&X-Amz-Signature=7024931f9951eb882f466f1d2ee3794c21eb89c49e1b2fe9957c05d22257be62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

