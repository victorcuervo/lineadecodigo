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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARTMMCF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQyokX5d%2BjPHWTPQfGTy7ucSX90SNtS%2BAKB%2BSl0p2CgwIhAPTR2LaPv03bLu7CMNiim%2F4YlAFBLWl8rXPJcnIBWt2HKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL9VNrjN3ua%2FeKdLAq3AMgIUsVuInrqugU4X7rJlq43bYOJ%2Bf7wOHnwiIY4GX9564hRGqrG20%2BCQUnvtP0pgxvmuk4hk0xmPqTphw7Sx1%2B4tKTv1ZB65IjLvf1XgnGEG797jK28JLdQLDDkjNIZpquSiEXbkacxXeGyQT7mzRix63Co7B550jtgVbjS548fvfzIiva2KjxN2Xna0ZXTSwxiv9zVE%2FmNe0VS8cA3cdZOlgIIqyyfEv5URMi1YWX5wz0fTjvSbN3P1T5KrQhrJHzCr61w3dZPxg8K0acn1gg0qJ0fE%2BCDRPSXfQtS3a1z%2BBD13WECdXmBoN0RekafaSjRk9fPkcAUaUKPDVHB3SI3BnNAInUGXjfZJ%2Bex4kjWg3wSR7SEYp%2BQ%2BxSXrUN6jB%2BLQuidsDYXWxFgE1N1jMqtJQtsQPK%2FIlkPxqlJ9ZFbfD92MfJuxgdcYhetDk1SC5q%2BnFWg%2BKXPqGFu5yIOk5kx3jCnPsB73PFuz%2FgLsaT2hwIAOWWElkVLELxP2EUDvuNKTjv6O9TfSa4AArQkDPnnAOYuNtW0yqYfmTXc0X3IbPSk5pJenn4B75pXBY149IWAUMataTmbzFsgq4w0yKyiOIBKoqSx01BZ3MU6zQP4%2BBN1bQ4vOWqMT0CyjCkmOHJBjqkAWP7%2FPTrDP4clxFkuo2GkbPhl6hVApj8mfq4euHs0UWsrqfBGKrlL3yJPezhR5v9D3aToiAyI%2FjYIyV%2B824u65%2Fr4vY9yjJ4IFFe%2BYCpCHW%2Fkd69H3D7%2BrQRvjxFORu%2BDyhhnq8v1uz79PtvyOKkojJnQpEymc0OdRg4V9okd32QeckCTbrz%2F5%2FsQbu%2Bvo75vF03LaCGzJW2BL3ulzP%2FbxSdrYX3&X-Amz-Signature=6b07a0a0a6bb16ca778d29c4bdb55b90229189fde87db6bc6fbefd3c6f0eea79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

