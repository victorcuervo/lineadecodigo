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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7KNBSA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIE6rLjXAodUeUG7Kh0NPDXSfmO6Fs%2F%2FjPGErgtchw9QzAiBXK8VqvSpH8hFXUv%2F9C3XsNo5%2FA1EMRiCUhgAGUtOpBCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMDu05PqXuTI0uwa42KtwDtsIpDByKOBx2TXBzYTreGmNZNv5oJH6d1M0UnC69cvSQc4pcLzzaxIkg8K9pKJ%2F2K9h9V6ejW97h4wI%2B0L7Xykvlzh12Xd8DvXbZalUyc4lgqeO5wfsERPy5RkPEzhCR2nf%2FbjJxrATxQGJNMjtX%2BgzgrFoznFVT1X6a4Lb1%2FlP9MOK%2BP2cT3BPBjkuKZRbi14s6TcC2fIbAIMsmyFzsW4Jpr993MLMZd0T6bW69g4duvJ4IDChFGRz9RM7S7W1%2FFORAFxfxbuq%2FHlvW7xd2qpmJYLFZBWWzsXg0cN6gdUsKtJucKH%2BKjfGMlPcVpzXQjcDBhr3hGD%2F5wQyA%2BejQUi0lL41euOVaW5mvi8%2FKKYHE%2BcMj%2FdygO0iEdjZdZVL5oPTVNdPEcOSDbZlI9dHGc5tOQqc37pIfx1tURNgzApnIvXT4NTN0gKkqdZqM5CkGQrhKTZAv8gmG1KA0gfOrcHxf62R3pvBS78PEVd%2BfwM1YXKjH202HIWBI%2BG59%2BEwFOD0RrIFvNiYsnNGl2%2FAUUxAVA6US%2FmDt8zG78YIyqa9yQG3AAQwAsgRXPo7CTDByf4COwaqSe8f2pSYxJVp%2F9yl3vGj9TGsqCiskKbCjs96m6yBMYI9lTXQsFQAworXDyQY6pgF8qnvkhbJmg1vJApQymQXU7gROva3PjJnUZRuba%2FKAFTy1GxKqqlvjRXJagfPBw%2FxO%2Fnw%2FIVzTZ2%2BVoAA29eN%2F527zBO93tV6jj3%2BauIxc7vptLJ5EkyVCt97KR6USxTgTdepAdtobUSZCfDa%2B10KGzBGGP9qhbZ0NGKLyTadqvyUjFBiIR6keHP5Qr%2BZMaCNxEY%2FiBNNn9mG8K3maUYnnwmaXG%2BBc&X-Amz-Signature=5f64158c0706f4e599064a9a2eeb8c9d6ba769321a54b9db5840778e68cf99dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

