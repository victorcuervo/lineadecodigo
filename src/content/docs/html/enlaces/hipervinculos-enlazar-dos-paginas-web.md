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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2XDVP3Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAwrVzvScjcMSgUWRNLd218hhL1mWXYUVmHWPsOTf50vAiEAkgU7zcf5fK0UPR0B9QeyMwL05Coaw7ZEonRnxGENtVQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDK9xywBfw7ApYiJFlyrcA%2F%2B%2F%2FxQTgm5XPOQGsuZhysy38Vd9EG1f%2Fp%2B41D9JWZcp%2F374kq5nb9f5bjjs0ANMeDdM1PG8vEFawdeGpAQKjIfiMKm6oeIXnbGpFqdcDPPphxoDVulDAmlCy0FLYO0kXAFy0NYBG1E4VHFmJjWYiWIv0pGCMDJbf5M1nKYRNLcQQoL0h8bibHZVKOTnnBdjGaX7XXfcHpCoEErK2xeDRYghXZqo6CddBkU7iVHXuPLyhUfRv9w9BufAnmBUhNYE%2FFnYo7brFNwYpqb3P%2Bwd63J2crICKLzqPh9URUP9895F0bq9ALWimr5XEnMCaznMT5Z%2B8e9Fq6OOouAmy8fg2rcc494rozkWVvfznq2YUwRbR3D300M1ViHMjCNrfysJ4i3RKcn7ID1VLYBIm1FmV0zE9k031WafLaRTp1CQ9UyZIFt8S%2BmFFq%2BxZTF1StAvATT1gGFM1NWUngpdidHP%2Bvv7zVIAbe13TJj3PfcaFHRig%2FDUqdq%2BFAiIpG3qrznglAuNOjqKtb9EiOgGyxewt0EnNqi4QdjirCFtZrMKazhKRiEAcbziiS2ZPDWiAzkL6R3JDSf6jhA5r2yxWFXCxxWye3wkOgxq0LskaoyOW4n1OhW2W1QexseT9PX3MNPUw8kGOqUB4u%2FGKJU4tf%2FBUrDg7kJucR0TF0fCaLl84ZpZrTH9oB3XG106lk4DLUcmWi25U%2BdrCJZ5vC66zObnhc5T4%2Buki8c0zZmZ08iysYqu0psdXMdREcKOCcKRHMv2ozwPpuZVH8FbWkFIemT4ULr457TPM3%2FtSMOHGeeeoZ%2Bn9Wzv7LcFPwaSYE6tnVTBxLNCDQ0Kj%2FSKxkF32s523CK%2BtGh%2FPJM7LOmg&X-Amz-Signature=acf83489c10a064d46a0ffd676be0c2006088eaa46d58d4b94b7ca71ca587840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

