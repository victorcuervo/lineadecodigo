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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7UIKRA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChbl%2Ftd3VScGFSJIByuKDwjAX1BxXYKaL3Ym7gL1KlbgIhAOBtGvC73naN2egDlmriKfszqnjqzJ4Tvf5R8EW22vDOKv8DCH8QABoMNjM3NDIzMTgzODA1Igwicw86K9pMzadGlqMq3APCGZRxyBL8D8npc02B0B3NyeKqYdka32V5tY%2FpQbRdPXVNTZD%2FiUH5QWDeFGa2VBeL1RQXzQbr8mhNRP2AUQjpqtH0erooSrKSEU8aSN5a%2F7dTv%2BB2Dg%2FHbNlK4Cp44q6XpeIPi2Y0AEsTIhqjWAQZAr99Z1T1WVIZdiuHbSEsx294GjUM1AVUMPle8WXjwaYShwAcJyHwgMjvJqSO3i5pAlGlfUDokOOmCTuUIdMCQljEijzKDfM3tLalYSUrCN2Q19N2aB0WfOLeLckxCVWd5xE3xfC%2FBJ9VmPwolgCBnIaCLm7DvlqCMGhncawTpBhoRwRh5BKB75DOMFGZ%2B3kcYWI0FHcNoZAX5uwWi0Otw8k76foPWrHV0EHDILEURd0FR45lN1dQlndREkJMAu158Wxdnnor6%2FOklij1xssPd8GZJysW4Av6nISjLHFgD%2FjIp4EPL%2FFxZ5bBIv9XFa0kyeeYR%2FRpk9wMlKSpsYlpth8FWGWLAaDL9%2BPPsnjiVrqKdIyYv%2FFKB69BbeKv2lGfW3JrKmExYhlb8PXn%2B0lDOsOTQSgoM0JX8qip6LGkbD4O5e2q8Q4No%2BO1SKI9mV%2B6i7KLKp7jGATDO5fOv6i2h5ehCFEpa%2F4Gq3yoTDCs1NLJBjqkAZZE7gD55RLuwkGG3iO4PQXC2okiRfcs2m0hVrVOthcfM7hRuHJvIpUoVw62EIckvrTHrOoD03%2B6PLzTkMY%2Fc3ZXWlZudwDCWcFWVhk5Cv9uASpfaE%2B%2B3j5%2BWq8KKpK%2FiTqkBJ5gtqdIZD3p9f0L3F1GgE76gaax8ZAaXl5noU3WxgCTELtmGU3VgmEQkNAb5atU1CTOtWsuGb3kgUIChTBaQiUf&X-Amz-Signature=4b6510308023d920c39de945e92c88fea784e8aeb8f0644ec539bda1baaa4902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

