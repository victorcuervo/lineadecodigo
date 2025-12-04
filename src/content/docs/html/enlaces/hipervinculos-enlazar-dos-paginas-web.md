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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2M3AIM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICmOAQHOfXy%2Bh5%2Focjav%2BBROXJQqUVJX%2FUJhfx8GuYWLAiAcFWAh%2B7Ag7035vxjSI2%2B1TZe7%2BrpdSYD73W1lMewgsCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM8jP8oFWHD%2BvYZWNAKtwDA1dp5n%2BPf5Om3cjtaJgymvgkqvXMq1m2lhC5ID2PfoL63wbS7FFSWqojUnSnXaFWKKx%2Bok7ffjuemLUVHLL3gFYnNlv1shR4APbQB29WerLq0jhJkKFkCSbXR%2FyvLJ24cBOqCPRwSnkt4%2FmK1iQjEV9oygslmFmgQHYcAidHZHqZywmpV%2F9CJC894x0nJcD3Gj9wCAfJircQWkGUta9XsHnKWx10B3U11QQp4f76JVQNfEcB5AGJ8Iow3kPug7FxahUkwqDzyXCLEfbH9Lb7kmdpItTJ%2Bf3bhixPGLefTyUWoeKh%2B2X7LIxzKrKdKnmv3oGOAQheYHSMl5nCFPDLW%2FxOz6SzwPfm1TO2NNNXYmJDpRs8zAX%2BKOUJSQ3EzQhTHzCZDo1X10YD6rQcwbrBQkkdFPGKXjkUx%2BH5vjKG2Wml6E6FYLlWdXvNww%2FmY%2BPwwbKPQ1gxTBYXAamisM%2BfVBcG2nehzjg1NBmKl4G7twsy45F4RgwjvDgzfQbFQfMu3AYwhciJrQSSqi95zpLGsgepcsGW15aUR0IW3CHAW0niSdeHZYCbnym%2B52vIZhjLMm7hTtBJ%2FL7jDcfCwyT0%2BA%2FaSouK8vgeZSeFt21F7M2SG0gz0NWCXv9AGBIwxITGyQY6pgE6MMRYrmZb2QrBqovKz9Ei6xzqDY%2BgsqCO2yCGMMJZlcLttNWSA0sFZjQdP0VeZ4Yi73k3Af5oscTbTTQlBNVrpAd26gcodxhwZ%2FJe6UsR5gZHRbh3NEa7UTP4RkrYaBZhqkgSBMOQndXn4LysIkJ9VhcPNffD0WlnAVUazZoxFdKTtnqwEzXFgO%2BqEyn%2BX5D3kmZLhpmc2E92JdQp%2FcwT9vvffotG&X-Amz-Signature=a12823ac86dc5d3aa6a3b8ed2d88e5108e90ec9ee1ecdbc476565147d791f750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

