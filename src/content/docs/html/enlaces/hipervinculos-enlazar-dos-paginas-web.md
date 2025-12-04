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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHPHBLJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDoTWsZ7BrJLNRMvC62MB0OJcPxdlXcd0ssYPkLyUDOpwIgc7t4WID9bHX%2F53uKu9QQcSer7QwodgAfIPBe5hggPlEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFgotlgXrAVXsWymVSrcA%2F0H4oIhW%2BAuLol99E%2FMyqVpnsi9NaOeAl3z08DxTNI9Eir6ZV4g7sax5dFDL2bqz%2F3Wm3HYCoZVWGZJDBjDTOTIVrlgMFiICLCd4VTrLMYbaACTH%2Bd7%2B9LoeTxhN3p%2BPRBEuZ4XNLVwpEf6NODWEDoIktZMcum46E%2FSgRKjIaXPEYYCcG0PRxruGNL%2BoRystpS%2FsKKgrSxfOEBx2T83N3EClpnc%2BPYt4tm23kyD%2F0Hg%2FzFoVAq83I8ejQbO8nG0s7eq%2B572%2Fo5kVLnIgEw4O9%2FE0ibH0n19yg7U%2BbvK%2FvsQzd5jy3LuRyxzycK9fRiJIgUEduryNqIp9cnfSBKMTPg%2FOxhj40RPF%2Bx4y%2FRRdlF9MBVaTTY7h4Yn03TahwkPBJK3mAFNYjAjQv5v3OgSYT2gVskNg71o8nsfYLax5sTeCUNl39xyelq4ex3QTRbdr3hD7Si%2FOFeSRfzh%2FiF5nKBye%2FPs0jA%2BCdn8xVb%2FlchbSIcGpMS7ghlgMsNrnjRL7NkPkHmvCR52lo%2BWFaRon6SKwnmeo8oSq0w1VuBJ1kco5%2B6qFc%2Bn8vJQKAOBB1x8CprP7sQQLSCus%2Br0oTq4qtSb%2Bk0QavVaPZI%2Bvk4mUmHWkzEUet4ZNNx2nT5%2BMMHKxMkGOqUBObJVMd2LnmCrIAIVERnthsFyFifJbCrB2%2BfCHOuKPJD7Kn8tyq4hWr3tEYER3xmzBdAzOj%2FpyKiEbOasOOEUul6iePKprRX3TXcNT%2F3OG1CznVDgPKYbZ7wcjs%2FclQ%2BwwduND56blX3arVu%2BJqSHKyFcRqDdIfw30oPWLqVX1CUcCL%2BWMrr65IJTyJFE7LDL8CkhFIX%2FNribRDanLNFb87pCqMbN&X-Amz-Signature=fccffaf7bc3c290630361f859aa68450fc425f1b38c50bc734d2ee0f86682363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

