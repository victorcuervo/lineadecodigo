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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT52WU4T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIG5o3dRiBqz6z0IwFOjUuud%2BiXJnfG0RL9Q4iCcy00myAiEAuXOqNbfAHVub3%2FGDoVSB%2BVpbDBejTaIaqi0rGn96ougq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEpEeLi8ajEaJPn3eSrcA%2B932yDqsbsf8%2BtLSP1PWftlb29m9mT7ZWgq0MopgNostvb3MkybT3LZW27nJ48Yb6gIt%2FYnBZ4Tlu5iSazS5TBVt6j3KyS6JuWVIlOAbNomCu0u2cQ92UVaixl7g5GnDOKMYPaT%2BVSi%2B9PwQ7M8HwNyoRKo3yQsdA5G1HkJxuZq%2BGcWRnRZErxVPMUexeCHaWk5PkX%2FvHz1alYdryq%2BSavyJQW7VYTfIVcT2CM8TI1VrXJ2InpHFtJLTNxdfN6ytCHWxtv9AbCBIZy2naBHP1jd6BoNsk5xAMDeUY90XntxyqKEE9b96m0DDPN%2B8Di%2Fm8eXYO%2Fy4og2R4BpLyVS5dUNawYJki3WaHkaAip5AuOyOg6I%2ByeIKswFh4IIw8sAHjqWr2XhGxJTfhH2g3hOSXoFLi69Sr4kSn%2BE7ACcrSYF3HexTIHdSiMUiimB8OWl3tjC1QvBYe%2FRXNSE9FbSQqoJmdDXiJnsngXYTcoKpPl4HWdGQ1HyYm4cxxl3cFkpaTfRMqlaKvQWMbhLfp19U0%2BJiIUeQKxwBlqhAShmkqi4SU5loMz4MImhIl6wln0puzgcPE4HwaAJoCJiRbCy4B7rK7c1DZdhtpa0F7zrriuwizFMuUpLQd87CJ2CMJ%2BqxckGOqUBgJSAHLkdUbFgORXm9xIqcljltaF1r7q12S0kkCdDnjByfwvVeBiWbDslfdW4u%2F2FI2VIF9UMUBlXEBRX%2FTrc6SgjvSXbx7a0iuFEDC6SzGOMJl8ch3G7kGNmC2KxWORnmHjdDAQz24DX0hdZY14UHToHmo8X2UinErb2591D6qV79ehtv2OTVfI458BnL8vqDVdBd63bS5Ej0SymZa5gTvIFbWsu&X-Amz-Signature=f4fc3088b8f2e94c8882d9d4e2c6404389ff678335d4fe371801fb2a25de0351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

