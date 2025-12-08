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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAAEGP4T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbDH0xZe%2BvNPRNB%2Ba8F4wym3G3uUYhx26f9qVD9R%2FmDAiEA7xkWs7Gl5Me5ipzXg0UxEO6sXyShT4GRF6AUVMtZg%2FYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOXNGI90B3doGq26ircA9%2BkFdMSmupNFDdccsa7tzAg8haCvM7nQORR1zO3dOyjPE%2BrI22nXrNk9sWY6j%2BpnJYYRSSsdYjgIp%2B8YHBaWrNKk6N5tfy9gfICDVY8tve07HHke1mDDHSaB3kkCa56183NXnCGygo3D9ZBJz16JkhcHyqfpGQ7M%2BIpYfVoOlJaYPyg5y5oN5NcTUORDhTTQc6%2FKTbVsly3W5wF0xqQ%2BOJBeXPrGi6MSQuRbv1XX0R8hUjhYsKNG%2ByMC3TzaewXjflWIgoAeWkaGidnVegLu9XBbS5lhpkZZo1VL3gCb5FIojx5cfJEzpGefqX9U%2FXMTT7TBY5iITNDz3udGQyLjehedNaA1LrQy0KHPX%2F9XRhR5l4zeDbYR5zqLWST%2B2IjIluP2JeS6gq4DB1RD%2BzFTk9kQjRjVLz2tZ24mbU0ZYvmJ%2FrrLX325GizHvJ%2FHy6YiSx9uNK%2B6ISonEHj25kMt4j7JFIwklF%2FNSK%2F9N6AdfbC8GaBy7IkmxXojFg2FszHrZRLSOUt%2B0AXZrd8kiITwuxu5mkTq%2FHIyLtj6RePKo4wFPzCA4y35uIHFWZq3O2yu4SctekxhkDhz%2F5biCQ7wH82upDgVx5UoctXwwLoJv8t6DCxc3dXON5jifYzMIHd3MkGOqUBMUaYWohwxXHgtjIFI2wtpJM1riRZBfGf70Go0p7OAda88jX6OCsxPGTE3My3uy9XM6%2FCn2rmx2bTu28j7muMKCVmEdYmAYmYDrYSZbHrBRjDQgbH1QPGn5TsGUVjZa%2F2CnBwdCwiOXYcCACkMFDQCt3suvgOUzsR%2FLW1LwWF1%2FuoMF91N4Yp8BMY3B7R1Lflid6aHHOB9LaMYG9ie4pyo5qMmK%2Bx&X-Amz-Signature=469741b4b375f725ddbdd0f9df7409f03a9899364b6f1cdfd0cc3418515c92a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

