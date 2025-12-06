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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DPBHAOF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIy9MCSjUoYy7aIUyrkJa%2FzafLfZroSPlq228xyzNnxAiEA9IJgyhkwv7vSj0n7SdL9VkKfOitmlKVQRfM4UOvSmLsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAep649ANCAU4AhArCrcA%2Fk08GSvCf8dvNH34WBwJj9Hwb%2BXmof53ENp6sXdScVPVXc9PuV%2FnCmo5QRrx1lkdzjBGzOaf95hFgiDeRct5Z8Oz7VXE%2FRQAvoU12P5fs%2FvOSA27KdRoUEYdDqFsOEBDv19Ub3RNObBbHHcvXKI5vxM5PkkLNbc39ZstAFOFQ7%2FrmyVPOXGtdECfpnoo6FXsZPuW96twbUqDs4S10wfTSjxAiOA06ncWAJ6jjiJNRmA0G9tYC08hBH7Md32c8%2BdjfUYdTKM4bsMwepFeC1Jk%2FZE26p9xEi4Q3yEoMO8z7jwpOUk88zbARBC4pTydj9nSfozUF%2FU1oDNFTcDal2%2ByOMkUyyFifLJKMWmj%2FKBMtjnfBmYM28hFHiAyza2%2BFDZbTHBuDMCxE84YJCoSewqSAJmyZDTVavFNgH8gT8LvtzoLQTCAeKtZ2ExINIXBXWaVnbqpbpdg5gndAM198BZCO23xyVznc1SPJFMYXbqHyrjvIELVgzOdJMOYB5m1aWS5ZazIkhmx3kezwCv2bcF7RPILG7uqFN7tGUec5mgc6woVkKh5YMWLyDMVwufJ2UvH4tnMMy7SDX9H7vRVWCTQtsi9VtuUskXQqq2fxTImB9MJblXGRYEoa9C4RZHMI%2Bn0MkGOqUBbdUuvHmAEuQRzwhqD9mN4glniB0T3YmTkqsQg8e%2BXZodd6GHkof93%2BHCuKEzazqFATyy9Xyi4TxukVOOqNeHp6jHcoG8E0objVNPIVadI%2BoGZqnrFU4DgtL2c%2F2MIAmlDfmLAod2IAiNIqxnoEROK2aHtxXyqgZ4wBGDeZnh0Qf%2B7awkJ4vfW2oLNxiyAUChVUqUqIk5jrI%2B6vrjL36ogbooEVjn&X-Amz-Signature=aa1abbe0bb8bdf2ef0032709ef6fc97f2f1c6871a1f159f6e8cc05686e1a5d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

