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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFXOSJEX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtobQ7J6%2FNvFGluC0S2W3IwLHJwvn6cma8Pf1fxLWktQIhAJ4jkrPMcBK3dUoKtRLdcJfVQRo5zDBr1cuPzxN7QJ1vKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDAtGvKRohr23AurUq3APzcqUKb8xOGVRxMEWcmjhB1nHgCBtIoRHMfoslhUXR4ZqneRChDtD28mIzxDbN21H2rJXBsHyXZFDAy4oQcozoyrXAiqD3IZP9NH3NXHMvD%2FqsiVNIKbQG7trZCN7i0dGCCdyKbBOc7WjwP9yddV1IWdNJ1QVi9eKyN9a4Cmqo7FvcXhdQvg2kgwj4MYkokn2BYRLbFHK%2FqxX40fDHVyjjllqABNCvVsslti9BvTfilHeb7rx54aS4ns0ZCvHrQbvm5AqNp6lZWYGS36wyzoVlAd19cJhifOPQweisUM0xMfb4nx%2B2725XVx%2FX2Py6qxLvIULyo6C5Tm8movv0%2BP2O1dl5KFRCuPbTH5F3S1Hosb46ZOQNS6BuIYS0QvRasiX0KK%2BsJMvSVh3CjSBeZFHJHodOzLuT%2FpUZ4QEH1YqDmuJaMLCuwJkjOvR%2Bs4ipyaHrX132m4KfxLgnaQO4tsp1R5kYP7u0TBtm%2Fw%2BB3T0rIECCo2kuoM5qUuMtUcUzcPH8HvGT%2FplrBlO%2FTEbw86vPadROWB4Tkkc0mLceFO3nXlrxB4lY%2BR%2BsN6MJMiN7bkv1tLYDsGEGm%2FSOQiPrGrUZ6%2BmD%2Bb%2F%2B2JakeuHJFVlI%2FTQmXZuYSCXOIJeonzDAjt7JBjqkAfaHWhkprPCKIdZ3gvBbCQuXVuEYcItM2kOAeeXGwrHr%2Bvmus1jGFdoDkywk2BkXKmFyVk%2BqT6RFulSlb5ae1wGWqQheFHBDm9Inxj7Kk2eG%2FJbDAprS1JUNUUCpqqWdW37rBMfDUXyGCCl5NV7nnudiLJheot%2BUQr75KAddxFBVXi7QN9zXRHVyLp1qrpYCogSc1r6Xfo1roZIuNZ781uyMPuaM&X-Amz-Signature=ffbfb05f7e10dc1403df01d787aa0da0e25698aefd46a1840b8e06c5501d1f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

