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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP3GXC3L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGew%2FOhi9BASpbsZ0Wh8fUm2GO54I6AOlknmJrXgaPUuAiBsXdIj%2BJjxH2PlMTueSwWFcOYI162TsMJedBAyWPIv3yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhutAaGuaO8CkpWUTKtwDmYOkya4DCSYSQ736H6bsJVwx0Vhrg6M6E6%2FBUUuHlPdAd%2BXMoHrUJoECYMgcgh33UcwW5PcbhHHNnY8alXBT6%2BlT03X8PNin2AhnnR76XajaCYp4wTb%2FAsZOP3527UBWHAXR2sCiO0rljt2OQjc6yGLPPFY4yyWfmWq3SvJPybVrzEJJWUkJ9%2FYDHNcxJA1E2jXNLAhgA%2BzV2ZG2DDXbpl9KrcKtc5cRNEEvK1n30OX0Y0d1A6XyJc6Rb%2F4wOanoZApvqCmQvPkpO3exFaLWh38IMEzq2duMDDWaZ1I%2Bbnp0hHvhSy5gj5p6pzNUQ73ohpqP7NWhbcUpx2cjsX5lt18o1TC50rQKwseaVUCOiEVGUuBcjBshOMDwW9u5RK6XMGvn9aLJhkBwFD6MEBfV9OUkl8fAa3ZQoaPSDeeUcaNz2MmImArASilalggnjiNg%2FQ6QB4FEkQIDDslFUwwLlrmBFQ3Ap4YsF9BhNNJW9t79Cqah6AROkRhUYPpqCuTBR%2FXqshllN1LQVMkoR7mSPXR1ANa2ZqUL4zMXCVmobYdvsbVrUp6joC81JxrvXZGo%2BXOl%2Bh%2BnYNdinRgIKXWF4tCpcCN8ZHCMv6ZScAkTBpSHGJAKhVhGnUBcpHww37zWyQY6pgEOJldK7mxiusjO%2BAg2j0RVDrFUIvn9OHEUwYyOfJDpfhktmZu7YdCPVEJE3y0b%2BHoUBbolgwxQZBUxahjH%2Bf5S%2F7uy9hofx7sVGPEQSjHjjv%2BVCnoHqoPq%2Bh9qdYvgmz6mlhBZmvG41xUN%2Bnq%2BkWxL2phhFotikh8SR2tZu1e60C%2FRaGXG37Eap5ev7ma3dbn7wEoOyBftlS%2Babk%2FIcZ0WcNN0y7dB&X-Amz-Signature=948c49651a2afe0bf58e9fda06e1459c51393f87d3f305984ce5db83d43bcd50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

