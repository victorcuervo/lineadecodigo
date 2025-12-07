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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466347JEOEV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEF%2Ft6W%2BeiRzQC%2B40815tkYONbq4AwzC0smBaPWZFLCAiEA0nB6hZoaMpGz3Wk2PhGxB5E166wsSq5%2Fgut2n3xWxucqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp%2BiD6MCYjuar2N%2BCrcA%2Bfje391xiXRPFGEm9IAAgt5Y%2FSKVf%2Fyc%2BQAGs%2FDC8j7RshUT%2FixcVkWjLAph51N1Tw8s0bBYnnfeMVKaAS4viNORI4hPx2BO9tY%2BwL7yh9psD2tD6LKvNSu7%2BJvUcJrlrmCR31Sd3ooMasb%2BcGDef9VCQRFqnsWg4FOheOWhzuBfhI8AnXzHbAtzfZ4t1rGbvEIsOIFGaKMsMoBl9KUrvZzeXuq3upeu8k2vQDE%2FK9qTeoCN7B98svX5%2BU%2FlcolR1ywrnAVelyYnX6HtszTZYpqHjwU7XFx5aEHSTu%2BLbOsJDQX7vKNmBiG4WZheOZ7C3SftPu9DIhc0TTvzHQhl0GLXWyWNG97wBTQ4Z6RigOwex2CWEBSNLcXcBKoEFkxkG%2BzZlohT3LLkoSyY1%2F9B5bvwAMmZqDOAGjamznQOqmk4s05Pt7QzTxCsuyix5jMDoc994YlUIGwWnIx2EM8Cvbs%2BDFWBHtvxiyRVhy1k17QCwZrjmp8yRlBkgdsXw%2Fne%2Fbk2bs4%2BEW3ac2fVxUKpbGMkFcnIFDbUe91AriWB7EVrHY7Ki%2FV42vnJzrDN9%2FWeCJR4RWUDS5H%2FPcbZTQLU4EFjikdIQw5n4qo7JkskDtXgacCN4HdkTePrNB2MKL90skGOqUBOlroYzkKkglLMxxjheO0%2BpMPEb85CuWx27IAtm8PnVGEQKpaRBopVEasX8eehGCmS2vxv%2FoLdGhvV7mMoVf9Yl4IROTCZ7YjbbXuzjOVOzfw0VW2aXY1PfI8ABGtC3PfmOmtqDJ%2FtWjSXp2PVoEYocVjsrftskVmN%2BISZ%2BKz%2B0xGQjGH%2FFgv8gPd2ChjaoEd4Jzv9xGeBNQN3WEBrlPFPJhLwiJT&X-Amz-Signature=c41c3e28a309095c4694790135fa47cb0dd4573c3e4920bf2b67e5ef9f5634fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

