---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXDSYNH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD0X79EqUP1KnTeB779jiYEhqFuNYH2CFgmuOsWqBNUQAIgbgLgmhgDTrkgNJKctEOTfS4XRpGqXVWERoBw88Pv%2FQYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLCXij4iPadO%2BuKbCyrcA6c4Hh8GYk0ttXm8Bsnhm%2FJ8HbyC0LNszeBVmWodaVObN8QPBXfmKmTqvnN67oezHRm90CIe%2FMyEhbmjkH2pFtuhWdUmR%2Bc91SyMEsog0HoMdEeHAurm0RPnEZmyqU5G%2FPpGzDiI5nWJDe4%2FP69ZEyhmrIv0BPyL7Z4BhIdlMdanL9vZoL1ohSa6yDrVxvFvRv8Tjezp4pp1bS1t2kiC6o18Kkg22u2ZVfnjh7RH7qhz%2BpZK%2Fy1CkGlTkdoWk5tUDUvVgpumBNnUwvgiYmjSYc99DxalBYL8ayD9xLOhyQYXGAj35I8VvEVVO0bPS1TX7k1NUowo%2B4db2MAY2LJvIpUoXBU%2BJZeNpG9uleC4XWCMt5iqaTaUGRrLX4YE%2FpnQAKmyMecd0GO0a5dn9E0vc%2BWakn5an7D31ha3PQirhhqcFH1Ult%2FieMMCWEf26gS48hbfCCsTvs6arHN7wddxlsp8lRl4WPytEfwN9wJGjUoi4onJaI6aWlJgOldVX2qiRG%2FFAvWu3PyERIHFI52XUpMqw3j9iBLC%2BOnFQOMU2El5UoGY%2FaOOS0XPQSO9kFaanFtAIS60qV3NhvDfvk3dBfpdL1rR3SLxxBGXQrEtS3yquN7sO%2BjgqHfOty3yMIiVw8kGOqUBW%2BGDtvgZPQEeYbTPsh1OKods5OS6Z2%2FXZdh8FxM4ym4x53Eee5%2FzZqjU8Ds6J8YkYcAUnm5qd%2BtTqWZNKp4GnvDqZ2KQsVPJTNQ0yUd54F3ola1hNTq2qHb9HEp6ACjVFgOnLeRmYPYRnRCgfkh%2Ffjff8WMFefHceW2oR4XTruawQsmHNsWmRE7nNXy3cYzR42R8SK8RaSI4HZx%2B3NRv4eGBSJPo&X-Amz-Signature=579c9717e7f5de690a696b0a97578195538cd67988437fb648d25ba2101d41e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

