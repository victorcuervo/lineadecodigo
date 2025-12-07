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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV3I26NO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdmkCuso4U9UEG8MzYsmM5%2FQr6hP2Bf5tVJ%2F2B3PhidAiAUKq1lFMq8RyMDnh4k%2B4ab77cN9tOic2EtREkgv9Wb9yqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcV4z4R7LsNc3TxoaKtwDq1bvxUFxqGVCMW7PnqnzJkZQmEyafSxk1j2mXyBDGw1%2BT6fIJzaJ2sgHVI%2B40HZbdMLxv82Rc7%2BWwL%2FxJBkHAp6ADlTtyQ%2FWzGkIy1CbN4ZQQ%2FSyZuBEsfhpINOUQPNh9KZfP5AlEeJutA2mS5XTOBc1L%2FysLwy5YsX8CeDsU9g74OwpbeURwrM9ywoyXooCuuWlhQpRGFGNbk2nJpHdFJIRMrlRHN9LfRT0pkp4lGu%2Fl27TE6SAvvQ7mPaA70csBFzoizVcYFJgpkSXDoY5%2BTy4iyDE4X3VnDh5spi6e47tBYxUeclksyGLTYv8s9hDSGUiwGVtVDMRPqfje%2BuSn6IOzVkNaRHYneyolGoJMiiZCnU4D%2BlvnHJGvkhbHFLh35uCEEexkNafo21Zl6HaFd%2FX1iNlcHor7L6Oj0RwvzbWYb3p8xRzEdwUINQrQttfev0Rw0xjt4OSGP0meGl%2B13pavzGyCzrvrcdlxIH09TJ%2FnXz0l2Imzb9eeDYUkdzOaN25d9vRBlG6kvm5k%2BbJ%2BL5lOZjCGnk6M9XFJxenL620eayrC5f%2F0ryRfILjjBKCgBmi%2F1Wiqfv5yfRy4bMITec2vtyW%2FUf2R2p2%2F7nh81TYZCrDkCpy5GMP1Qgw9qDUyQY6pgEc%2B2wtWkhh0%2FoC8S%2FQpW7zWJz0tVpnU5UkUzlicv%2BozSOpNHh76JdFlZtyVIgw3fL8wDUg0gtxbGZBFTrVCdtbHYEfdzlkQ0ONcN9KV1hkEwfx3WzFXwAppYlR2pPnF1WgqBw4nda1JXiPNxDTfmj62pyic%2FEFPbnu6T8Y67luC6%2Bq3iOcFhQIH56CIz7tu2FdzdOxisSKcQxvbQTrRdET%2Fk28sgS2&X-Amz-Signature=20125a01fe11205426b3355459d7f3e9a8899d75e989daa125b642ddec94766a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

