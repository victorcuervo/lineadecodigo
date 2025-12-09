---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWX56QI6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrvbKRLjqatbxyv2SeGiLjCYv2BC8C2tURNpY%2FGzd39wIhAOy60qIjzdjh3v6is8HMqHSbnI3LUpqaDOyDE99deUo%2BKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqpaGTiD%2F2hsEQPRQq3AMXqaGsZIZ7FVucbPP7bzsB0lWbg6OjCFSN2ULZ2WoPDkbm61xw9bqoitbv4CUuF7pJzUYaUHbk%2Bkd%2By4D4Yu9VdtSOWjdL17APsthnXsOBa8k2T90FlViVu0srHHWWwxp7XXDz4jpEIWOQBk1kI2C8JRNap8PYCRwGAmll2e8nLBvy8xRt5cHMryK%2FV%2Brc2gAdPNQp7K%2Brwi7wWGtVn%2FcFzMZ7XDdPCVBQCfLgRAZF9R43Gh4ZHMaI6ZJ5Lc0UBISnZYqb2J4%2F1dOWqP2uALztzWnApiVMV41gu1XFGnYZtUPR7dNiAWPjdFBRSDgQqXEjabyyPUwFj5D6eqrLm8Aa%2BHSjj5cHr%2FAsglPSyOGCDIn4dUKNtnv17zT5CAAXgKAKNfow7afBkU%2B1iecwe8DQ%2BAV2NrwisPYC38Cqhq%2BZNUYtDkgHudEwlLDkRq9OBLagQiV1xMv6hCAZ%2FLgv%2FhwtrsFbzf9dTbCH%2F20eh5oj2t7HnnWP1EbQmcaQ9f4gha8RhddOqA4t%2BDxyY0wZqI6HRqv1ZjDcs19Yi7473rEB%2Fd7M%2Ff9JLtGbjDRRCZNZ%2BPWuep8jqJKXb6ms0fKzqtfzJMBtMyZ%2FgLpxiLZW0vIKH5NayUdrq4WhZwi5EjD1luHJBjqkAZOmZmxeXZa0vRNkRRcN7DR9yuItZKte1cNFwFO%2FtZaUqRldBi1bAVqsdfytJNnC8uqe3kuavJUy%2FRh%2FrXVkWUjV9TdWIGEcej00WO8LbRe4zRuwpyCoffD5RveZXd1300m51NAsqXlrTJNyuG3vPFoLwyH9pFUyWZlqA6l%2FwjVNP%2Ba1Wb1HB43Ew2hfl1S1M%2BFd%2B%2BnxGgbikHqAi5tVZSrqcY%2Fd&X-Amz-Signature=b1c285600f40274a52498d20ed99b830d02a7e13bece92577e90e786e1564414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

