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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DBUGPP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe9gC4M22VIm6cRBlE%2F18%2BPtj4DRm9zsWq%2F%2BzdEpqW%2FAIgXtZ6L7ElTp9cNnOmhgNg5c243rGoN6twlcvVbwqCLpMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDf%2BwaQxTCPxr0J52yrcA21i7RdYjlfwCw8QV92ZfGdxIlVGJE2H6paWtgBlAIqLF5bGTR1J%2B%2FI%2Ft6y3nxs3V1p9VMRiYNsCQD8g1dQynfJXsr8YAqDAnZNofYZjRkGCyqnNXZlFeBWMWWXJXHxjRGe420MAZj0lwb14PDHH7ps2yl4LZ9imzDioshEezD7K%2B6Dd2PJdZyapZEawSAZQBbYCXtn86bN12Lyro%2F5gMpy8BvBJLiHoyBDi3hSpe87A5r9zfdC%2BzguumCyeyTCwBkPg53yaVXeEwq8fvDv2bHjVqBMrrRZUjh%2FBll8jrnNPcx034YZ8BXEmCpkQ3RX34WqHDfKA%2BARyXjRrNdr%2FmiVaNfkfGlTxtWskxvZL6lpfvCfByWfxicHnTB6lo2gZOdoWY3K%2F%2FXypV52ObWJH2Mo%2FPnw%2Bw7ElFeo6Vk1M099LXOY7DauwA41e5EcMF%2F6nTAQmr%2FtI%2B32jFYMVkHVFEb8ZUqsM4UlicBM7u5uKP1yn%2By9ljEQ%2FO4ycBWUq3p85jNmog%2BEFs%2FKDrk552Ca9hKOuR49A5zB8T6w%2FovW9LTtS3mBsojSEjpEpfHl1Nl5V5tAYiWO%2BgE9q5vm4YHF3XMiE3zWindCc9ftmD4i6Mg3%2B3Bh8XGB2QIVJXGuaMObTyskGOqUBDB1GjwHBQL%2F%2FYdPfd4Pj%2BvruyGaWYMX5BNFYnTFmo%2Bc2XkKeS%2FoQCSEmnJNbLhgC2Bo9YrIJTCBPtcH0QsAYNBnZ4zZtigImcE0JAD7ioTToZpk7cM1ExbKEMSAijRQePwmxFfTHW81S60F2OMiEXNI752QhVc5h3SB%2BQh0lfSSSOSeUwxSPixCJw%2BUM%2BQvVMkJEK8Ewqf5Jsp5GI8kJuLLtm14m&X-Amz-Signature=88f242b53a61f9ebc1b7df636d3427c8840f056892f24da7976a15ec7a93e991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

