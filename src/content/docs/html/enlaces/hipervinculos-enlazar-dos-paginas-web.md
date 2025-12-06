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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEQM4ER%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNfYo4z4butUXwnUlI8naSXzpwkB8Jyzzkp7knIFiHQAiA55RXEDFixC1OmbO0Oe%2BHQLcMbP9k2pxqjCu0Ye4TQOCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMj%2Fwwp8JNYWWMaNpsKtwDpg2d6jpaywGM4WzTVZ%2B%2BXt6AL5pWSyXkg5HUFXlXFO2vBS3IqyDKlKX8a7aZzrGy8OKSwBPEtl1MjhmEJ09unBWXU%2BjbrTf01l2n5KNqtQzoCU4MpHdVEemfKWAqvprJMSD%2FoyobJkG5bDBqwjg0%2BTngBSGcrzEkptj9uH15fl8nU6RR22xajJAmikbhxTexXDY%2BW9UgmuaLVHhksxE3I1HG94dpHL6P5YyI68ISRQdV0BnzTcLSBoe9OEczDsHd8jjphD1dIOcpAn%2FezSUK74riD%2Feoa9Tx%2Bi5viG9gsDMH6d2ASyErICLNQzzPNjhcK7xggH%2BgU2Q%2BD12hMsBmOiBpGLwZttfT7UsS%2F%2Bkw04Nzy9UpLZ9On8y9m1s4wzOlgS2nT0McbMFzYc0Q06oZZwGqTfZGt7cuRZIoZ93sxfT7l0Byhpzj7PSY3B4ZJflad905sI5kpblZK7AN5o%2Bs%2F%2B4G8aIXCTfHkVWBlBCLj%2B%2BnYooHmJo57XvpRsq77UXrj51WEc6%2Bvi1X%2F%2Fnyfqx2PNoHTuz6ZCDbhf8%2FdAm7TnRBBmH86GZxmFuCfGkNXivZ6plt7ysvnH%2B%2F6V%2BM0sFX7D8Y47BdGxHRXUwMREa2%2FnVA8WRrOzvOqGgU6Ecw8ejNyQY6pgH1t1Jp1AiQWgfmcHGSVEOh0s3hX3xBcDqkrFjeHxtJ%2B343sO2g%2FeEHbzFIczqe50veDQZxiti3EHlSqFuNV8xtwA17COA6TB%2ByPe4A4LbIxb%2BXKSl%2FtO400yKpMi2UJ8Z0sYpKx14nT9xFkxDTjFDQDKnVNgwzFFBCiUlrh47o1ZEvOuwwABb9yrSrJb1eRcvk09zpPr0JzmWscLS7b9biDCPNyufx&X-Amz-Signature=78ef7c66106f25c8565af404924ae5cfe8578a4258d7a8c741a77861b053769d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

