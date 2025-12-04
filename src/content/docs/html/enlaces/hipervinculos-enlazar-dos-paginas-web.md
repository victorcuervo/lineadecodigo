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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GVH5NFL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDZahLolmIr9bFrUK0hki3%2BHParrt04MAKEpb8A9n4LtAIgd5o03qgwzaFPfsfGhvMagTItXk1CPeiWiub4T5N4zvMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDA%2BcH8mp6kru7XJEiCrcA9SSzqGjkFsuklAy15knwiDb76uRJokfcb1zTNRDDG50VDe6s0Nfer137JugbNR9iov4v9uvD8oCa7W0pOM6JE2lVJpeCT47%2FABBfchLJ4vMVhIeWI1sC7vwlGF4NL%2FpApTgR5vhij4JfXhd%2BpL9OG%2F9ZrrTGnkQBa9xTh4pYI65Nl0lCHc35uI6izgGrH9J5OP2dOBTOrNsT2sXX7NYAmrwvi2mXfugmFN6%2F5WWXSbz%2FuOdJIZE5z%2B0HsJFjNdcUwgegXr1jGzJvcBI3g8ZzRMtg4YoINvNpnFOOm9LpdMAu4dl29Lz11buBoLNfPQ2argV%2FyXlExlp5R2PxvO%2BUtOajBffs7sqdl5yVogjGrk7mLC9kUQwg7INGps9N60QS8odj4CxsMib4%2FAPZ1r%2BTFf9iAQ8NUVqPpCOZNCESbCeMF6zhkMr%2Bxy7aVcC5rWDkqJlPnmFHPWKE6lBTKh75PbliuF1XYUjq71%2BpP0egU3lK4nDeCjfZ6T3CGbJW94eeWC67vd01Yun2otYCrmWXFmvU6vy8ydMdZ18Mtst6IL2QqH8kHxxkibR3Vzlkr7LP8CU3JUFCtQOzKRkM23TLuc7Sfw7WyH2fXy7uHWBdOv%2FSSg7mT8LB%2B%2BO4G2EMOWuxMkGOqUBAEVzCGe%2BF0Husl0bKQX1qtZpswQGxCdi6wR7uPpx6lJxf%2FSSQUifvTamhydNGD7iANd8Vx1DlrgJtqGiBoGoNhM16V5vheQV60rEkunyOL1olE99ItyyGunVWJ9L%2BHvH4qbbGaSurrJxgZ483K%2BsPpGObJwcG9atrGEVFXWpXrTgBakBgz5ftMdz2xBQai%2FvUHMqCqtKIuMKgJb%2FHo%2B5xeSEqsld&X-Amz-Signature=3c7f9983d6a73a8d31c7b9f257509a9cc46bf34ead53ccce6564cfa41ed4e0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

