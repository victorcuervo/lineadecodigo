---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4SPQCSQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T203623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpdZYTPdTFW29x6Lvpv3BMDM%2BVjtXrSHj7kMJmL%2FRP5AiEArOdQvrCiyjwChl8Qw3Y%2FymQBvW39POCsFyA66f23bvYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcKCdndlzAERkTWECrcAw4nl7%2FJiKQn7QwLekPocpO1tgAY1Y27Ia1B0Tyu%2BKMW46nZoQAGHHL3ArC2sHZLsWfGrGr5dBNTRSwcJJnosPp07n5svjI74SU6udiMbjYjQE1aAbx%2BcsRgYFrk9DjBQXNLCC2TGZEXLbNqj0yFpS8D%2FY0Tsn5SBJVjVOCdSREAypLTU2kFxGiil1oO6t0986xwcEPNHRcgoIEeh4XDs3S6sMNaUGgc6DKhDC8ENRdbKtY%2BwRHpPLkVrC%2BYEkRxUMY2fWumXzozhWerDl3e8xAxQk2xZCr1victR8j%2BRPt9l9fFAh0J0fNMs21Jg6HSc1naZANiC5yIoUNOUZgbJ1LaPYh3yDjhkorZEOQ5Xv2g3qJqaSQLfyDvasmWZN0SMLuUwRO6Us6pQ9wwcCQYH0V65AJkPHsfYDLlZmQSG9EF9F3RSMxaI%2FRyEYyudZf87b3ZvKk896MQCi6LKqNQx95Sv%2BpHeGrRz00EUpWNpcntim2WGGQ%2F7PXocItx2g4bSdGO8DC0XAdFGB%2FIXoJoVwEcidstsBH1rX0R59gb25EmYokQ6%2BV8TrfIjSFqwqVv%2B4G0ky22k%2B9QaBZ7%2BfYRSbq4uHh%2BfrXqu%2FzcBQ6P8CIchGPQAgXXgIhLELzIMMz%2B4ckGOqUBo%2FSze1zReEyrG9mcuI1eyOmJXr7ZefLqkP3WRmO%2Fam%2F1YlWgIzQB17rKDZRr51oXgo9M2BGWLIqfuRvxjtgxkK0UH83M2Q8uW%2FXbMQ7YVWd%2B%2FgwIMLEsE%2F6CeC92sJM3%2FcWyFNcwvKwJYMvCHXhV9jQgrWJ2q%2FPGyMy6Rzp1aiiH8h%2FlwHe4zsNWGdIPAB5VxsQKzCqYzNdmm5PqrKrGL5wTdSY%2B&X-Amz-Signature=c56ac6af8ac6f1aead2cd5ec0d5652b5b6cf2a40fa02be57625a1631b607250c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

