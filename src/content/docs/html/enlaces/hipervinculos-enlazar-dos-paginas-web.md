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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRDFF3J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrxsTQc1gXQGKXhb9q45LsEPX2xIid%2Bb6d8RB6Hw2dAAiEA5Z4GfbPZt3O49Jne9EGKiC5Y7vifUcXMtANtJm8x53MqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJYeh4XtrkLklCmFCrcA1LjXciHa6nIU2%2FnMr8zCFhzUHc56My5jMY55kTEmw7BnR7R9xBV3wkhq%2BKLCDAcqSQISFRbaEgXBQAVAcz8KY2gJOWe0zCVcSvZXFz%2B19hhLKmsSQy9uQiPeIzJPFGPnRXdeppuyeQzxlzPU1XLtkxMYFx18XsJjwMLitr2TZtP6fIREqGa3LAi37E4XAdp9YogLFlEcbBcKN4fH6qBwZkq8XB7oQFUVlpDSUeTnD%2Fll2OCgcL14MZa2DygHmEDKANQY6EwcBtp3RwIcMz4Xfs%2Fc1ATXJQvKRFGbhPIQKFr3dhfWjA%2Ba639ksHzC3p58lOTduTnt7c70KaAov7ITbmy4AcqjVx0E0lDrvFrgHO8bI2yg3VGNEQ0Y%2BNbYaTSxnOQTs9U17hqdjGHJw06Ehhoq9dTjd5FqnQ46mdV8d2%2BYwBFRmJmzOnnVs3X571Ac4r0IxFpGeDO8HtdV1ogtXdEBTqk32k%2BBtDMH43sTh5L3BtmSgzrvQCPjbXuTv5qjhvGCYCx9oZYwQo5hE1hSIiYzgr7niBgWNrmYJ3ASJ0qDB5U5SmB1xHQ9OutBwq%2BdV%2FoysnkOfZIXEZEc23Mx7uhs%2Bo8bIT2QPyltR5VUJQ19AFUiYDlHVkOtigWMIjK3skGOqUBprN52xvrU2muS3Wdzh%2BnuCrJThesgHZCRPV%2BvV5A%2FNfuYB64y5heTJaBJvGJr%2BpcSrSgveoyL%2FUbMX77wUeIH6Mvpm%2FVvylXqfDvYkC1cUbsOcVCp10hctsaEPSdLX8p5XMk4RpSf%2BPg0BF6i3n1AHlr0FIybYoZVKKe%2F%2Fysh416ElOYl%2BPyMBcGJL96qa2H%2F1o4u926cYw7jQVqmWEg6ajoML0J&X-Amz-Signature=556a5988cae4a9dff4565535370b22f10bc091ba69537f0cdc8a437c3216cc3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

