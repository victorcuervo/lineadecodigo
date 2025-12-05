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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VSPLRQW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPDcBFO9LtxkhPqZTNAAmuBDCYHrgO2AE3VQrxpUPb3wIhALuAp0U5oVmAWFraDTP8i3rHrXUOrRQU23bNyhzs6lFcKv8DCFsQABoMNjM3NDIzMTgzODA1IgwxjUR4EYW%2B%2FIK0fBAq3ANiEiQB%2BH50%2B02rrWCWUNhfKAHds2nEgCEViCNPvbCH%2FzJl%2BDEJH8rSkxdyAu97xYKtWOkG9fx3%2Fx8TfEa%2FTe63ONTS4HbofsD2q2nsJZjmxR3wnVrcm3E6PiAfqbUR2zsfPg9nUfmWjBITg%2FqC5CXYg9mA0IcSY1kYcwiC7a%2BnRgQpeYmDgx9%2BrZJHL9jLFglfht2%2BHqscCcYqFeFV9SqRppYcGMiV3kC09Iol9t5a3nMm1jxY5D3AOYXqaY%2Bvu0a0%2Bz8of8Nma46%2FXzSVD35ZoHM2eaZYJG3e4p9SKfYfthswyWt6MsiiKDa%2BJ%2FwR6Z5cO2bX9OighxKTDyxxfdoBkeI68P17uQFkZaFyFRr1yYW0MgI4Spc7GWrSRcwXo5Jo50R2sFoZdXHi3ScYcwZxMyPq1DktJrjJYkpYH9rPOkTK8mJLjMsuiexTPc%2BAQBgg85l%2Bn1%2FnWko29xUwrvxeWCKjxIZ9Iu1IK21bn8D%2FJayaJwImZD7X9mDqe9Y6p92G%2Bqt8fTYyy1S%2BRqC3usmr1CQ%2Bx4Cy%2Fp%2FPDta3znMOQCbMQKOjiRdm4BPD0z48BwTK1R9NdCcGz2glj35Ccu3S7U4YL%2F0VxEQk8cTIDOnNbHiP8e9M4fxr9FHVPTCpzcrJBjqkARpHypCajQZs4sUDsMf02w1AbLEI6CJ285ScK9nHxBftfDBnszz0pYWWJth8vposvp4G%2Bh%2FpRuA7OaslnPXvypzl49JFBXdOhSCEz%2Bs2qogLKr%2BCVrNZK3c0DB8%2BxIqCxJR6LNj1d3w7jW95Wx1pcvA4PcDwYSRNxU8Vgp0eVatX9hkeMi0PzugT9Z7gZBJ8YX8mE7EjNwqVfLACFTeBB7oee%2Fef&X-Amz-Signature=9ade3cdc1158927dd200168137d1ac1b2a7e554674ae6b8817bcb11f8952fea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

