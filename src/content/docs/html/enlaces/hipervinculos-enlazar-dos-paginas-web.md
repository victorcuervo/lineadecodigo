---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOXRMJP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICFkLNiaJMmZ5nslmZqkEzjy6ESSw%2Byzz1KrR34QKLMIAiEApZNK6XgFiBs2KDTqnI1iiF6HCRKo4uXv%2FLBM9KAfvSAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJGiggj2kMhkInMvxyrcA%2Bv5x1ZabofTS%2BiPZ8A7JfsF9pEcCI9gqgAR0wFzVQKsKGD3BabrrdZCmUHAqKnlMFY43MEJK7KQYq3kp5KlDKxMfxCkIXJgNtTl7pDD9w2GjYrElFVGQ2pMCE9ldr%2FV%2FPkQW6tzAA5IgU5ul7XARjbxeLw5gJ9BTIwGP5Z6Bwgi%2F85ka80sT6lLaHrQXHpI8NLhrc0BPYbXaK%2FZlEHjImbNcsuWoiLip4mWpstwIx2bEpd6Hjc2vSx%2FPLNe2P6AP6ctGBtK86w3fYyLXdnRJs3H59YidM9J7vE7TreDrViMahOl8bI6bniShMYXis3XNjPY527WLMn1%2F1MsPJzPm316XB0v9vBUDjE8oM%2BexsPbf65btkZrQZDA6VSFhzFlidW3%2FIgV91M1wOgCFacYl%2BsE%2B5hSxvlmYwQr0leCukaBDiVhzzV6ynCjeX%2BuAE8ijvG3sK%2Ff4xbYB5ijR7KgKoPd%2FqCR0JAaT3UUo3S%2B35y3oFARIXdoy5eQcbrKZsZOkYdS6tgxZ8v9dJ%2F60LUBTeJ5%2FXEUbs6sTfo5SMOUkzB%2Bk6QwvYejwIJf%2F7%2FFpga3TtuxbH2g7WHSrQS%2ByLqsYvCeFc8MW5svbqhpPj55IinA%2FTDRdOCHdSOCD668MMKtxMkGOqUBCwbfsmPWe%2Fp76OEyX3JzUyD6tVM1QBT7i%2FNHcUfCoVte3f3MsSKhxu9VDkJk17Rti9pFecnt4cA3sVuEsdDToKbTSioNh8HicRGznkEpiL5B9%2Fa8Hgt9Uw%2BOAOB9c6wDhf%2FL3NVi8Y15R6gfX0eoFCXrbOPe9jSv9s7DUri0ckezuEayuFAPcCzxj082uCy5YsHaBvmBmS%2Bu1%2F8f7aEHiWPrHMHH&X-Amz-Signature=0aae83706d299c6c73a55fdd19cb30a50b09066554e53419174fc0d7265ee71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

