---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNJDEMKH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIH5xBiLFmT2D8YD5p%2FlvAc%2B15ESeYOTb7S%2FU9zMEBLF8AiEAyNfsagbsl%2BXGK3580qqf313KgDJxvZ6thmW%2Be5Chr3cq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCIr%2F2KrwXz0X%2FgpZircAzg1BspDbzhX%2Bv66g2QI33gqzFTj2TCJdh4W2V9qYPHJIY3Jd4eb0gQG84EMPWUzZ%2BoxGRWlpN6mIDHGmRh9PKAUeIdKtamdTt3f2EbnRDItpN5PB4UDTPfMy%2BuxDciBBDiRHBuaO%2FWgPnfMqUTsFV6iEwJHE2lves4UuSmQEmLPG3AQNK2Ml6TqM9ll0vqHoDn%2FDM0bnE%2B%2F4FGOMLeXugV4OvebntE8k%2FB2Vrqj%2BPOQLpN3gUD4kLb0XX2J%2BeKwrCsFyc9NBsYRAAumotUiilvHshR2yIm2awDdv1vzJsGetrZpgnPF2OIEO16m1UL0Za0gE39XR%2BHIjjzcjzwRtyqF%2BeFdOJW232Jf4F4DHxfdN9Y4zgbwwEk6EYA4PHtP7Y0g2aZ0ui0Cy439eabA9sZSBs9rnDiU5LZEV9td%2BF%2Bt0bYPrhimWNyNmxHfzJTSaGTmxcCZl%2BrNen00f60L5pik%2FIrCHIxCw6WplS85Q3sjgsVeMON9TfLrXfjnu2wB3SwhMVETGbeB15xUReWpcR7L1AyX0UUwR%2BKoWKS66crdhwUsAwM9fvHxrS0qA%2F%2BedrNowiU%2FzcAFXVDElVm6ffvbZCDuLhM%2FRv4S9xBMUeOA70wJ21I8ByUMsDd8MIuRwskGOqUBdpHat%2B6J1%2F8eGBWwkRicSVNXui5l0VlZuxRF%2BzY49Ow4JiYFQGoHGscelGv%2FgwlfGrr1SsdC9hlSFWx%2Fbvi1jU0rExfTHndTthXYCsb54bCEB3JvbmEQONl4%2FU6G8l0Xukd3pCUFgfIWHLpWJZ%2BQSOfQ6SA5%2FqEuYC09eHksASNvGDPTCoFaVQcAx42ggjsjpeyDk9q9tnrQ%2F8KiQ8i1%2B537BDvr&X-Amz-Signature=5f01b27a2e7e82096bec29e76a94d39dac7c3828bda63f579db6587229a2722a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

