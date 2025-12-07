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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCR3GAI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBqR5bwY2pjjfauquVMOGu%2B6TVrRWLbMDwz3opkzf%2BxQIgbTxG66ZbJZPeB%2B0DO6OhkmuaQVKRbdADtic20LseUPgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2F5N3hFEGba6CJIwCrcA1ElEYDwckrkzpnlexNEnUJdIkhR5nt2WtRXhG2UpDISLUyxKigtxo7ZpLVO5Tv8tMpaSBJ9XvB76hVPmJpq5M5RPDQyod%2BRpHzKIuDnurD9wEdBFqn86weOa3M7Yetp1%2BdaW6bIaLkZ2XYiw%2FbFPaxY%2BCPWwDd8rOu%2Bmq4Ml92AUjXBm8%2FFMENjtrunuxqChBOr%2Byopc80czdoDgquIRImW%2F3j5tVtsCuXQTjpScbvE4iISYaLaZI6TfuwQmj8np02m9x4tfOhp8E1lMkaG6Pvt3sjA40uHZOC2R9RPccGphVRv6hHlyV1R4K83sRc98i0gaYAFQlqPfNXW7hnm2%2F1szlIxo9slW7DSUGyMlmpGPCxzSsRm7a6VNpRRE06uhhdfJmuz3DrxU8dWydHtDOAHuUv8TuINKI3KAlLf1wYo5JZv2x3mKFfumvPxcVo9oJdtpclKRsDD%2B1NRspxb028ntCXL7ae7i5pTHcTFP5ED5O9%2FPTdLNtsySLtSRqsyrc8G5C8eGKm3vSmZFj%2FRxwTgHRh1OmIO4KwgdqJo7YtAW5maTzIv%2BT0O0ViV%2B%2BjO3SXYhF%2FV9lFCfgLFg3LtL4xKN2LVuuCXX8xWdEqTulZQfH7ZJ6kmT62w%2FPMhMMqY1MkGOqUBBmTGe50r%2FjGEZCVUrl1hTwDMlJzk98V7PYkaAqD6xBx67yT1GpkLDpsQXdqQy4LZc8DyeRHj57uIP%2B1iTJ%2BI2D%2Fq6s9NdY2TUciHcvdFB7o%2Fr%2B5R7k5MpeJRwZSh%2B0dKeewEoinJf5ofh22jzUbtnbzg6NkqLkyZvlY10K%2FJPQynv62lX12CvO1OSV%2Fn4gNIeBbgA%2BmWVtMZl1MMsqrDisacrBvq&X-Amz-Signature=4d42ca16889fa9180c87370373d3cc563de57b744b0eece8d2af9e4c88c958fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

