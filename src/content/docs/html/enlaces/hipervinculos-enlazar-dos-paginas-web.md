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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657HDE55T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaAOUVXgzcRu8cocQdX25g9mVuulQMRJhYxkSUdw6gWAiEAlDQrIl67AtEP5KNovTRJNDFei5Li6BqukrhDfTAyxzsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGxrtYigdxumdjHCCrcA3Saqqf5PEZfQlNM9gQdHdO2LPx9JoemnAaRwkLFPSeWQV3e2U2cxqEvxCLMbUPeZMKKi%2FU5wNu%2FrPGS%2F6mNcrFA0sk%2F%2FJq2IR2c9mpyphuj1HEc0bU4GGfv0zjdm%2B%2FpZIS6Ise5pJQSKN%2FXBDxWZUsxV%2BbcvWOEG5lyT6OOv9OjZ3vXdOoz9v0FXUfAL0m7r4jCbsHbmooWP19eqSKL0gaFewcCXnCsdET699oo9rxvSyXqCtE77r4uF%2FUlZFQZjjsyQl3d2fwaxZkzu3UeTpq%2Btitghxxbah02Qrc6sUry5Z%2FTavvHLmph7px9oXeU4d6DtPY%2FKiH74Qj7%2F7YGcmb6lfYpVvACQMKPWo4pkTQUmOF82cPNaLFJ2dMd96kGSuNryebNuKuejc8ED8aCPZ5Lj2rN7M3n3a4MOFrtyormp%2FslPwvABlrqq%2FXVnTVVCcO54HQsn7Um9YHoq5EU8uJDHd3aCtas9w1jAO77D4m3Xm0hHfxJKQ48Wyhumq1t2%2FHVKa%2Bl7HqW%2Bnkv8wp%2FU1RN90jftrv%2BhOUj%2Fy6p71%2FIth7QD5S6u45YEnfK0zg6TaCrOX5FLpp15g7kcgNwpdiP1CPoXWs52e0tiaUYaEQ4KPwPDLWYWbKxyeLMMPzP2ckGOqUBuvaGeLRRl1dxmtu0WZxz%2Fa897S77JmhIimfGpusbYqU5uieX1YhZrBkkT1Jl1Yct90ECs3fgEcQ7vllmEETuuEqaI8u0slWbA%2BTxX5QZVkFzHzPYrASV7ZIkaiy0RIgVDKHqIgF%2Bowocdy4mMPyhKu%2BuQHFZO028JKDxzKS49dZVF3wGBnV%2BQdJ0unBv7auV27rmbBB%2FIQOsicMcU%2FbArfsbuKU6&X-Amz-Signature=cd72573f7759dcae7641a2b9a95a0edbeb337613c073559f812e116baf48c0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

