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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMVCCLIK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAn43vUKXVirHpN4Hj4iWvmXcDm45LwZsx%2Fllx0AytVAiAHiLPsc0GTwJYXGGqe3mS0ANe%2BQHHAkPiyyOP%2FoQTsFCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZilCPo0m671R30YaKtwDuX7k1azWN%2B4WlTQOTSHI%2FqIA1QJSaSsR3cc1sT%2FYRLGfc3ZkFUeViHwUJTunYSPKqCpy%2BXv6QAvfe0EfHHV16LxiSrhfyYkvcioIB1%2FH8VA1mV%2BCjzQY%2Bc4R5i2J99A3LrL0s7Ci4EoqFjbUgd3V%2FX3socg1ri9k8mr443yqo5NS5d8QXCymgzxCGPw2Msd5pNYkpMhpaiIJMS%2BWXNVvo8VQtpETu2X%2BsD7HivVO0D3WmqighUz1iNyYbiuoWcPMOlpZdvmDm7TUdkG9TaqFPLkP1cKgGEW9%2B5RpD4RQMMIFbHVS1FsCOG1p2d8KvrTSUOy7sI77HOJXXJKPjCqwH3dAcSKkOv8mA4usr8QHlY4XOcd%2FvK2MVrch2UUI2B%2FL9pOk%2Bu8r8EifsgAXuuJB35%2FUtJGSTt9CeS0Z7N%2FH2630VeE9nSylDjIHdwGJWtW1m20xIJwEd4xTl6KWnK4aFYXM41Rml6Ge%2BWrKg5IfJdW9bTpAb497K0n0h%2FSbUbqQrBalfJSRneVMCNxGKtL%2BzytAZ2DOaoUJjqZl2KAlBEXU2uepJ2rkkcWy1uOoI8%2Fz7dAsWhwM66hA8JrXRlGlMWdZAsaa70b6EvY%2BvXhZQCdh0TdkJKBKWGs5xPcw26TfyQY6pgHC6jU4AMDAee1T8vlyibGTy0CsG2Xm%2FbxxXqK5QWtC6avRkvJlyZgAzk%2BDkfItwAxkRuE1hL0YKhN06hIRrxF8ENOOkbKmfOs9%2FoC5%2F0SMNeG9nAdw2GPaNlLM9p%2FYdiQ%2BqKS0gK02VhJmOcNKjH6dRRAORxZfEnQJtBxQkYHYUPrOV4KS9Xw80JICz%2F21AQijcRPKYOIGhuCwMvZ3Aj38lfOB21Bi&X-Amz-Signature=2bc8579ea5c80d729ea2009c0c50e63a4e8ad2e3cffe6e25204f320056625376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

