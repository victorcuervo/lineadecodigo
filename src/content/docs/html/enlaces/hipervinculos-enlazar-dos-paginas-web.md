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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMS7GRPA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGaw7QeWdfZxSbNFmgEyWo%2BLk%2B6HWGmgxskz17Wf0jSAiB8U9DFY411muWh0fdPaY%2BIm4JUn5St%2BqyTBsb2NipRLyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMvf1ycUTae8omLmqrKtwDtiMXtL4kT5v39THQSn%2FdrXYslBedxdt4YFKjs%2B4YYidm59CmuDBsaKowRynnUJpci3aSRAXum6rfV5PxuczEwpmyAKu0dA3e2geFKifcC4uN2RbP558K%2BnW2ShQSmJgMyM1DLWEsB5R5wjSGMBgXRj3ZOuY%2BOivzrNoTa%2Fyeyb%2Fh30IAAPJmES5EDetwSYuWI0Vuo%2F2iO4WRhVSJLZGeaeyazzmhEQeXV6X1vN%2B4DDI1XG97KGKr1zVPBdDh72wb0pOkkbCcDuJ0iE3zyGP15Oq%2FH%2FcB8ZM1ysMlhHGL2g90dRW31SExH39dl5mAx%2BLAHGTc1YDKTvDKdmMOQaU4BX2WtI7g9AiRLbqXJgODZWCep413u2bEBXmH08q4ZxiZ%2FR7WDCOBS9KeG8MNHlOQl9H1jN%2FRzWSeGGIKEsBx4VMpEYhRNpny4g5bDsjpiHCwnO4COI0CNXptiEFdqUDwdbGOjr1Dj2PWcIsUT9UJeDao3Jin1xDVM%2BDPtRN%2F0ncDf24wjxe4nisjlqW%2BAWTakxfmWfqExQ11FBdS1oUCustv%2BFigjFPc4fszN4%2BM7NZHUIEXBm%2Bua7kJrMkgEdIjimI616Uoj%2FINWxCbv%2BfiapiBbU07O7%2FV2iMmV2Qw5M3KyQY6pgGi%2Fqw1fs10eH8eqxEz%2FEcQpysvBup%2BKknfb3gKRU2PeZXLZDwwZidC6hZrtqe1uYwwMCRunD7njtSmc911bekat7VT%2FV4Y0bslejnzCi2HLn03MriYf1zH1puth85Igznz%2B8bcg0aEJ82Uvtsa6OVGDcMKvok8CrlMSfY6Rt0HLesmq1EtY%2FVYUhXRmTdQWNU4E5tug6Omh7l%2FRCGrbEjoRxUxSEdu&X-Amz-Signature=098f03e680de4e6374e2cdcea9bf3b639b3c4d238a866bad93e484c3da3a53d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

