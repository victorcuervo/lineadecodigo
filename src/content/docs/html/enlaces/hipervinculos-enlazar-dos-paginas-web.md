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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUJ3RQX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy6u3ugq8gZccZ7APyoqeE0a8IrUBnbHfKyrXncDDErQIhAKu2YkcLG8J9rGj%2F%2BWiZpJafTZThoNmqoTzWg8qcJlHfKv8DCF8QABoMNjM3NDIzMTgzODA1IgymGvVmHebzaFRl%2Bf4q3APOXxbpE9JoB6cXVCZukcgA0SppNGU3E9%2FRl9ZbUOJUPFVYeR3V944NuZU7gBCJK%2B49ef9MisH%2BpXtE%2BsNpeiHqeVEYcp4mvRALqx5Ypzde9CeiK%2BFXFvWcZdxiUptWbieVn%2FMFvWt0YkihQ4hmcnWCVrSsDmT7sW2%2FHtwJP5M8wW2mAJIWt7zZEb8ftxiBnk4%2F2OKfc5J6v%2B6R91dB6hj26vY5cfbRNeNsa6t10G%2BFGWVP25xDxJXBNT%2BZuuHNPw96VqWLulYmrokBNpzUo6d8I%2FA0ELkAnUWzbTQrcHhwRR%2FnfuSWPukoHAHHuLsOWkQ%2FxTDqh8mjWN0%2F8vbhXGGNkXNCfs%2BFH7b0hl8G5QVyOdtzOqG1kWvsi8AXY9sflSV6KcPrjVtWfj8JITEx5iahQc8ta4GfHw2UMc9rBLQuBOQUGKAlItyumpqjRoTvJfIuyG9McBSsnnS2zjpvSgPCV8714TcgvSSg4o9nSkNV3yMlIeerXTDOP7654DuM38RN%2FMw1MWS93k%2FsJnlrpgaKWC0q8xLmYV2FtmbXHftQjpdajoHkNKa7YUW7RywvgTHl9HCgt%2FCKabLZq0dhjYZoRSg8U4dpAzl6ttO7bgZolr0Gk1vGmIzn%2BUNMYDCLysvJBjqkAfcrhlFkjju74lESyn4%2F%2BEoGPruAQbQ99gwOa4WLs6kUZkWulYU1HcXr79Y6HYbKchTO%2B7dOLpgHxdBl0%2FDqzlgsnfSxvN6MZihMWt0y78DvWAWcMak6Zj05YeApnCtYdMXSBgzRQMYZ8qnT60po9HyLCcTg83y9GDFJ5UCJ5%2FWBfZd0irZS4ikNL015qhQ50vjvmlnxsYPQ2%2BEzNDXHOwuSdBSm&X-Amz-Signature=6bc91c5caaac6c678cc08045fea341660db88237393377c92cf67d3696a97c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

