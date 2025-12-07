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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQ6KF6E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxXbAg2ERrfxbEybZDVmd8l4UZ1naEOYC7Y9lY%2FiAfSgIhAJ3bUzrL41hL82Q2OhRCpfnu6z7SHoXL7EOA8KLIh1VcKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG%2Fgo1%2BiCKwIVvJVIq3ANcDQ2MOqjA3DJUc2nTP3Q4CTtOzCMaSaJNfjKtBvB%2BefkVon7Z0t1t64PZ%2BOYPEL3CGhbtnlKatMlu7l7hAAs6m5slR8F7iZWINZKFVEmmlv3vynnfmi%2BVky%2B3qbmF%2Buu%2Bbx%2FrN47%2B7HtM0Ebt8YwpnTcrpkoBQ4XOgUyzD%2BkBIWT4Wj312Rus0roqchRoMYSt2vh%2F3B1dQ%2B%2BnIG8SgfemxaiZtu7ZbURrhSjuQKw2YR1QQgThW9wTSkihYcFnEMtwZfgm0nfvb3PT3vcmAPUBeYkEUwKIgUGFrvWMEQ6rFF48YHODDnaMYsWLwDCdQHTUj6%2B8zBel2GNmX1zExJs%2FD%2F5Ne5dkcXvAsm7Gcz4KPOqgnUJ%2BQjoFf4o0dHiYeuK4l1pObXRNtq40H2R3zGD01EVHU2wb2E2eMhlfDKi08iDSr8Mwi3A%2BZlOxPHwRu0A4Va4N3jeuKWshHXu7SOeAFzIeDR%2F14ax9CuC2Q5sRYFsX42comY009CSNISqwA%2Bi0j5PPEcT1Zf%2FvOQb8cyrxOiUldbj%2B3b7v%2B3MLhzwt6JavANe%2BvYzRxOcX693N6GzFD4QgH6m0u4CRISFD9GzC6CflDcqxsQJmHH1CCmSejSp0wpcDbuikt5jekDCF%2FdLJBjqkAcP5sNYwhQpBFZ0X4af4RmBIWH9Yw7d2N7LFxRPQ3gdNaw2%2BL4R%2F43Ds73yP8qrBZ6i3V%2BkTrtkvL4w%2FfcQalJkauH2bhsZoxNch8c5C41ULe5C0GpHrX8OLvrKMQeorbndlKik0D3qNO5Z%2FNo66Z0pqhFLAKrFBSd07rxiRYuQMNFygaYCAEoerqYWWdE8IC6djQ4pdwhx0PTGWkgIxVZ%2BceHoh&X-Amz-Signature=fcecf508428c8ec26720a56bc3f44c573dcaa74f5e9c4dcfbeae22f7c723b0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

