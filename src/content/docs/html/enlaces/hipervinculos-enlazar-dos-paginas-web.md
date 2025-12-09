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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QPEYCKC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T222743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwi9f6DlcWcSrpZ2PkuhS3NBeeI2tuHz%2By%2F7ub%2FLWJBQIgO9NXuTQBi2zaKIDa0uPJ1MIFwfZZSFzbfRrkz72hsboqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHunVSicxe1TzbnOZSrcA4flL%2F3IG5FiAoH8yClZkWb0r6EBp7mXldLiKcRm%2FTEeCdykkoP7iVlq%2FZF%2BzT3a9bOfi4O1G2cLQHwdgbhpSz%2F9US9vCfx07trSOuw1MkdABIExs7dY9JgxfIU6egd%2F05WWxNIKyvAzsQfol5LsyzKkAHEwl8Ns4MtkyKQFD1CzWAdaXF008eTbL0ThgUG%2B8WPANd2dx%2FCSjQsuyWapqA8zstqXbtrMUXfu4vOwErmuzwoZ3%2FkziLCgqS5xxcBXehsLUUhTKzQdyL7Rd%2FChDaS5eEhzjDA4P08y5dNLYG3ymnoylkHZX5O9T0jeubFeNd9AXmBxA%2Fz1Dbv1uzQslro92nEGdEyePczisWumJw8zgs59Yrl1LGcvLGucf9gb6It0y0KrSqDz59x5kp2ZmN2lwfVp6GM8%2Fz7aaihcCfdfTY6YcfTgiyu%2FRzTaEUTFdaKhnrmn03s8Yc2uDhAi8QsqNVzv1QCc30RjsXQ6AhChMqX%2FfuSlezRrABWTcndTJK%2FWcqYnZrhO0QOX1HUGpEIkTqQhABtTu0wT%2BlFmsz8Fp3ePyL%2BWTB4I54W7mPWTi1H0yWyezdr0eYJSANNiQB8qs%2BR%2B6fnaCz2ifeiBjC8OBjSfvGRCbMbkKrWTMNXD4skGOqUB5QRz4z8GHzzyGXVMtzra71JGHXrk7TBvVmEi%2FO3dEYkXi3jIs6P3lk6Lct77XWnanqzpry%2F%2BNOJlimLfzPI2GO%2Bln6KMB30ueOs5HPoxfKCE7GQTJoFr4u1hsxx4%2FsDjF%2FjyIhrcvpasB2dioc3ynxWIji6ryeyQoqED3CDy8wJ9oDzftO5jgNkhaN%2BrNlwQO50ayBCY9m%2B0EbxZdiyZ3K4rdoWp&X-Amz-Signature=a6955ca0265612c751bdab6b61ba37f02a554a6174427cafa3f759e356cda4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

