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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R25PAIU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDPks948tx%2Baw%2BJm660O%2BwMtuFlVHqa7wnnWmrH4UCSrwIgEtQB8hW9%2FlHM7Ypee3qr%2FbBg5CLHzqkRWckbK6oM4FEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCe3GxSrqacVGxl9aSrcA95XIeBNBu57dXx0X1OL2Y1nx9v89UNnnFzxu6SYSVAANYFvUAapkBGd4zB%2FaOx0yEHhbwwbrgclnIwkzRdbGQrfqnRCQOI25xsl%2FIqDTwNAdEskxPV%2FK4fvxBOKJTF9NC0nq4iras9Xqi1HUfClTSkj8te987hW4rnjtvmeHkCL5PQJy%2BtXCzxMklH%2B5VkmSlyxcMqqrwGHZayRIP0VkkCYc%2Bq04aLHxLe3KWwnSt2GulmmjyXVnJu2sXpxpyQat8v6sL7ZhO1%2FjOyY23Gr8MxPTL0pbSnDn5LqOxsK3d9ekOc8usKRRRt4lej6PXuAmqkMSrNUlZKW1sDgG%2FBf6z2l6qC4trEyY710O532NeuSHFLWEJ4PHKTQSSZd5AojgBVA0hr4dhssCYBLVBJCdTQAzQ%2Fy1qNVkPB9WquKVXdy2RpVoQP9CX3l7wqXl0nn8CpEgjGjR3y569MrNGp2B11UcjMSeCNLpcHyjpw8tg9cvLHcvUGndzCQEV20YgjU5M7bGyEhGAZ2cBxcHPUFQPIYXn%2Fn5wMDscqpZMz1LMuJqxZZsNtegD3tM6fRX3y76cmnmwVnP%2B1I6QgtlJ9loJhw2hAlqRUDSpEZxUdc2Y7iKLEhcYaSJll5SPjQMMWExskGOqUBy15HdbhLydi2SIRSO03FKYbgaaCLTLAAIQ8PvoawYsLkrE88CyUqArKy%2FcTqMNXquKf5EgY4joBvGvQwLKkt2SWZfz2kVzMASHLIeZs8GlrXI7EjEv0N89suG0j%2BDS4gdqA29Fm%2B%2BLYMGXiOuB3YL9Ol1KDEo%2FX47DqX0f9vQTO54cnUtquqSzbPGotM9dZfGxPdPpKc6WvOCE2mcfgCa3oJ3Mf%2B&X-Amz-Signature=84f0f912bdac5f5f1fb25671bb3b72c1839f78be73b726e6353dc1f14b20c1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

