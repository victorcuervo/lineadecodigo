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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGKPLB6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDnGgrsZlbUWAqDlNyJMJUgCvvC%2BWJjmsv6rox87Xe%2FSAIhAMAphgWT%2F%2BDRzRQ6jzQogtiRrgil2lKf3MDNqns9nGYuKv8DCEMQABoMNjM3NDIzMTgzODA1IgwpbvQd8qoAY78m7Agq3AMtUFivWHa3jPgg2k0SYC098Hfi%2BDpjZvtedMbxaxI0w307eSnWE2e2dPygCF%2BjkI9hMcM9M64qJPESX4ps4ueg%2FWo4evWfsAKcpSGzzoUFrqL4J59lbYLAHg3bywD1cmOFeOCxoqBis5%2FUucLxEUvabIZ9YDRTRlsJcLXxKUynaQowAY3G8MWa4XS2GKnk7ZlEd2fpbeVv6OrdjPDn1dKf1RVU%2BkqlahT77XN1WGA%2FSAJyV3gidTanpDpbVPWVLQ4Cka6arFKv%2BgGq1qh%2B3ChPbaKgchqZ9F64mokzdU7v5TIytBmHYxFALTWRGAsGjbSC30cdz8YTWwuiUeWrhk9RSNmomkEyeCbjTKccK%2F5wMfRjZ6aerMZCT%2FEIbYXCzPaYIeKbeCIv6fzTOnWRRkd%2BllTZa9CusB6mYnQlbBjohMDkKnFcCP8C6peDn%2B7BDNrg5XjnYWkRQyg5EJSEPcHmR1Ml7GbC%2F7OqoGX9HhugIQyN2pNW06C1kfGBSq37BvL4FVkSehBsxSJTcSX42uABjkgXZPFpDMuFAdZl7ShDIe1i4Q1ylHf7gl%2FAXsGPOBoIpEdfY0dUjGUfdONEhdlbOGAX2i7W0gwmVSpgEpsuO%2B5XFULfHMc3HEcbxDDkq8XJBjqkAV51%2FOGT3Ans9fKctwabR7f9lwAd1NNbPjzpMDF2htPPsgUWMvFqnCik4IeuDl2b1NZmEOThTeNIkF4nogpLM1QwTLAc2RHE6jthEtoxhGD3%2BOca5W%2BxqAbvPzUH4ZV4AeHCBvMj2bFsf9cgdmhASS9ukf2p8yk2IVoCuA%2BsMQwHd87mkFXJ8ePkxvPnGUhtzedeTSTmeb6hQJ8BMlBJCT53EXrm&X-Amz-Signature=7b04b91e4e6a3a6efe15774a4c07cae94190983975ccc3bd0e8b73ccb33c7850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

