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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBY7UUOB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1u832OyYgYGYpGNrSG8jzMSRMve3ll2AmKSrj515kYAiEAxM98G8WQ5E66b3gvj7U5hdZBOY1sNusRUN68rgtnGvIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDONHxK62dEsJyLIyeSrcA7VpNvpfQmVJtKEtf%2B8eNo2TgYskvGliYS6vDOaw0Hda8itqmK1vk9L0FXx2mSrui6Fh4CR7R3P%2FBc5xgVYiSgoMgqF0kbhozMoI7udbW0rOpj0kTTFJHlOnkW3X7sKPNcw4574gYyo8S1EpMKcT2YOXqa0KYgyGjMucGVtc6eAZf5rCl8VIAorzQOS9XcM17emATECEMiyHKXSO2ncnxSxQYaLj6UQ2svQKazenEbvfepQw0Kn96InHDhfPK2Zx0QPymRTXmxdz0jo7cGxh3nNXfFXHxBPoCDTnrFF5YMNrNqOMTgAkMnvTk50ewQYrgSiTnR00hBqxBo2erj4ahUd9JsX8pLskxZJU9nGnZLfvQ%2Fi7wLYR5r8DuNBrQjhmPAJ26Jc9AWLKwtIcfpOiVAEnmOPLItOW0Io74lr5DEHG9H5Xzk5RiO%2FdUSq9wcaz1mdjnFiqlG8NljZQfFMiUwjtHBr2cgyxV87ScHQNjspxtJVq7f%2BlPMFwYlZMIDfM86g6H2ctifctp%2BSaBnsLES1cs%2FPofRrE6gjPbY4WmDiOM%2B%2BEbXg2vDSCDrKRPaofSPhnUCpvsmc43FZsM%2Bu%2B73bJUXaF7Ppe2Y9Votp0t2kBN9617rCl3d7l77jvMPrMy8kGOqUBYbaZV5LnfIn2IZcpPXpv%2FSPFruptbHEUWZK2g6xxVF4Lr0xFesnZ8KNcxhL69PKgod0cZCjDomFHoxC0RwWvTtxcMYqpM1z4AU4nmR9FW3nT7g86xUceBfUi768IR7TTkTXmxjOI9%2Fo2G2fj9cN%2BJzRXC4cTcwPNeYx2PbaEtJCjfHHqIcJtHGp1Pk7IQiwi%2Fmwm0gyO%2FKjsLb0GH6ZZBMW7gG8F&X-Amz-Signature=89e0bb7f60000fecb3f4e3309009aa5f612562698de8839a9a4dd0b9173fe3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

