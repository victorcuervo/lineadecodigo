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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SX7IIOV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDMd5twp04Wjk4xdyOAxa%2FTZA0wel%2FWFUhWuhm7WYbauAIgR%2BuxffcbyQNJMtb9hOekW0AZ7uQMQLG6AWgT%2BAwRwVIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDK7KJtP4VlPVD5EbKyrcA5ziq1Mp9S3q%2B9QoEGi2%2BufzOcoeqIOyeGinsBFIpT552G8p8k%2BtEjNWk7lYStYgv18ghyMOAiRoXO5Lx%2Fn7W1DIxhlT%2FJ7XAD2yBR4NIu2%2F%2Bna82F7k%2FfVkdmYHY5Gf15hRnMrVKd9MHxRt9PCX2rHeet86nJy97QZA%2FPAaGX%2FONHkX4Zy9ceuZ%2BVOLVkv4g5sq5tXscPn5FF7ahSx2NiY8eW6o8hcHZrlVpMOlM%2BtBX5hWQuEbb0r%2FIz9Fn%2BP0sO2vkjLB0je13BTs9eQS3EVV%2FyAdV5zhNcAGmJNeyJ%2BP5Fc50VeFEAFBL6KTasZr6FKSemHMY8FuA7CP%2Bhu%2BKzjdq%2Fc3BF9VmnNmyy7txMiq2rAusAimZnsYJV4KjRBjXIKpVVV4yTkfWTq%2FnM6%2FBVk65L4OvzfTe9asFgMhoa757%2Bj%2FmBz4JZS96mSRs9R0WjFLcNtH54k83M%2BIdWCvp8R%2BIiAaXuQoaKGZ9F6BHh8ZWHqSqqMVpBMgvhHNtYYWPp%2Fv3I8uLThmmUNPJyI0IB2VkjQzx%2F%2BBTEstjgvi0uay1hFZ19vTi%2F3NdDuc23Prp8FyiVzKzTssC3RY84uipZhdJ9CU1ZQUVjEg9L1skyCTxzI%2F90PmI8dcpIY1MIK0w8kGOqUBCCU9nNJF2JyBU8rmGblbF4NvTg2TAEg6cXRY1fwVFPOynVyAT6dTHZhXHWpPU3SiB642t21JeB48lp8sVfb7KLcIh3svqfR3PBp41LWlSqZ%2FnFlBzkWFb2xX41e%2Bmt2g1dAxkvt3BZVjhfaDc0hnGiTqwB04CpaFsNvYEyIjdarZyIFl8vauyHYQ6NtMaVSgOiS0Qkr7MV3Qdb8b46N98IU7bzdc&X-Amz-Signature=d53ca140506e2d784c94d2d888b3ec6aa6b266455905eae18b7cf523fc1d886e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

