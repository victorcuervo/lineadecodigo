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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIT45BVC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQTJ2xNWZa3w8VPo%2FY53i%2Bt2FSRgYtJUheQFdCgOCegQIhAIUaTtON%2B5kt7KR%2BaHGBO3jPCRjwMm32nR2%2F436IzM8sKv8DCEUQABoMNjM3NDIzMTgzODA1IgxXZvrgr%2BycOMrvnHcq3AP1yQSu9DF5%2BmDUT3l7ArgtZAqf46%2FbvAidaxZwNMKx7e0AvuzPm9kfK9iSQ%2F%2BvjttJDHNjkRtia7NyV%2BXDbuqM4q%2B5GPINlJKtpPUszLgd1Np8k%2BSVDtx6zrbnl46lLGcegJa4E4A2or0f7zBhRmz9CH1NPsX6WwdF0qHJN6h9p6G%2FrZ1yurpeoljcNCf2aqIn3%2BIpo6EpPOwj0D3GBf%2BQOEWLbGhPKGiHCmtKPa0uxx0Dcgsbvq0yvgBZqBAnXKYfbyh%2F3%2BjeQS5c97HNODUoNLQJk%2FvGURmJwTsKCPK3niHxNvDP%2B3ch%2BqihiuFF814kJVE9xGNTajcQeFG9btsSKHNHomh%2FCRTNUS9R2C2Ml8ob0CwvDsscqE9nLolbxEvawvWfrre3Kvfp2HcfIpA96v6IQwYZkTgcKn7L0x70qtdV%2BKuguYGzOFxdYX9W7YwVRr89QvQBumFIQwEXPJveaNZvFKjqiAMFqpYFd9VM5AEkng06%2BCFHy1NV9Vcp7FmtjsZlBaBvK1Xiid%2BKdORLbpLjtqFF3V6X0oaDagXsR46nOBg4UmsgiuHAv0%2FdN%2FwMcwdb4tedha6s174VEQVSEa804e5ezmIUoJLupDwm9a7qL7Yhhr5%2BJV4RlTCI58XJBjqkAd348ZdFkKQ1YTyv5GrkLa%2BclNnlehpCRlCxCaEf1qP%2BTn1ViEEcN6l953GV8PptaRd7xCh9H7llPgV5BdzSoNFSB4bZDm4A9x2xvjGiktxL%2Fvu2XjloYCxzCQcwxTIoqxibtaafJN00%2Fz%2BjXarIvm7C2%2FBxxGmgGlqm3pFECiKhh%2FEyeAecpc5FH7CD9NxbsXRlPcaRFz7Khwy1tLM1%2BUs7N4HS&X-Amz-Signature=6218417dffe789ba7b763508cd133f503b8b3cc6404599fbf7a5d3c920852d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

