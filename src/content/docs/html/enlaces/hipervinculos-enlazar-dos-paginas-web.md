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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TNBUSX5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1HDyPWJQAEKLDPOH6%2BFi2mp7Yod829ggn2ySS3V%2F0tAIhAMz09UZ6dUCwIu%2FlO0GMedYaDKFyZK2Ino9omYbyPLbSKv8DCFsQABoMNjM3NDIzMTgzODA1IgyyaxoIRDdvtiGxB7Yq3ANqpyX8mBwS6gYG%2FRyQZ%2FwfJ%2BCPoNmecAr2DggHfDmijvsgXzOFZYumRcS%2FcXz4WY%2ByBa%2FeOKY8ghPhbNCXQWLhu%2F79CjskczhiohCNKnCrb2MJYWACpYI8IqUEvRs%2FRZAg8keiNx4dxJkM%2BbCSUQCz%2FoZ5k1iBOvMX3InBW%2BiSAY1SK1t%2Bhd7qQAg3%2FxmQFQDZ01pQ%2F2e0SJFcf3dTnifuB%2FONMeqRQ8ZJa%2BpX4LkErnMB9Q%2F4kBNs9KtGERqpDn%2BXYxKe8GaRjoGxn0PJFcl5qF7MI6XSPnthLClJ5SPXSF2K53w183HtS7hygK6G5EtUZy1AnFYvnP0ThfCZxHcWuTFddw5m1kSsAP2rFdbMNpOSu9khJD6JO1yenf%2BcuMJ5MAVoIwEHKC5w9rFouuXr7nH%2FIcWyQ3LrWfOpcT78OAksyKqF7z3Gfe7JJesk7F4zmzLVGBLSRfVAWip%2FIzmkhuFijcHkf2Zp%2FxYoFlpXJbiFYSTyGgMevG2W8sSkXMMtBgbpO5X29kz%2F7BUmjE17%2BOhxktt7BNmhecL8cfiMEFMl%2FPB5GihXdjUH6GpTJLsNhUpoEPHFBpve4bpYEy2EF6zt%2FJ3zaINZYOc3zr5fSu9vgGuN21JuqBjeQjD81srJBjqkAZvLbhzVPecXUZwfqtctRynNpWnoFU3nHEaFfsHTsjWhE26JJ7BMeZ7UlqoTYBsrvweVu%2BI7mrkvi%2BoR28ULcSf%2Ba2mTsq3PeArs%2F%2FBDObAnL1YwnOKm3XM1RnMa6%2FrnvMf2kJw0iuAV0o4leYwdrswENRxVfNnDajtqjx0pdD8lFjHRrqay6cP5%2BZjbIctc6mRkxXOs4maCvXBYU52vJqD2s1aM&X-Amz-Signature=502ca92156d38362ecfdb7f788eca28493744f622e4f3945b75c21a130dfb91b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

