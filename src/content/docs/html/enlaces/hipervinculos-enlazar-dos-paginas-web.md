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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJKRX3A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOEPXwzRePWCSZYl0SUPM6gnyNU8BHvARjZJkAxM%2F3NAiAiuFizCsfp%2FTU8BEWQawaWVuPYqAo90eWKyEduee8m1Cr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMm9WNpUXlapFWFh1YKtwDjz1wBnkwNOPt27WlpAoih9daNVlHgAZODw7jb6tZh7XBDsyYPcx79S7erH0yDFDAW8gaMQfNZGIGkp930Bgo4KNBTWawM%2BIHHcl6wMqCnNxBLlsc2QRGteNmK7dhq16jtvpJaN7wjZ1jbDPYQ9UV6k8CNy2JzSx%2FTqVq0vTirzTFIPFAl1kVAzK1btTeXs4Al8ASUyUEDcaSJQWYnrgj%2FSA7%2FJhwnRPM28YFeNLxrio4HWzBdjz1qt%2BSvbEIyzw2nw12IZOAd4b8mY%2BAA78N47Ycp9Cbf%2FHn08GHGQdsbiyNCy8voMd0uqXYfPNGJHL9w1o5YKOdr5Ht5DTWubXHYaZWcI7g1k2u5aO00oMvZe3cianv6tpS%2BcThPOs3C1HSvQ8Y4pod%2Fw9t3ZIMqSgFODFmMYI7OPNwGHK7p1zY73NRGJzLwqkYHB%2BVd9WU%2Bpaw5VbOnSZY999p1%2Ffxj%2F0sjipTv7e52MQwqkC7FY9gb5ddkHXLgEP8ZHxqyWRQo%2FF4WU3HMMcxse5EpWN%2FvVThWJDd63MP26sXe%2FESzwv0AOF1r%2BsdkcXx0a%2FeiSjBh3CNAXj2T8AOE4tD%2Feo7paAOnipmTTj8zJQEFsmoGC5z35ON8LVhMT8nqyszEv4w3NTKyQY6pgHh%2BRSDJiPCtuIB95K5vSe2AYgIEQCeJAK4BAa%2B5mRy2vJB0%2B0uTTJq9bguamzNc8f45NrADAT84Igi0O6M3%2FVxm6C%2FC%2F6EwOXT5%2B0UJnxCv%2FSlQenbfZCdkWrV%2FJ%2BK3y6pLrS1x6cSSbwjl5LA9MfkUZblhubtvRmMJ8cjAK%2F%2Fjnw0B94naIpYBfJpba4RunTr%2B0vguInOJhO%2BNk0%2BuUpX8oFPvY1r&X-Amz-Signature=83980e931a82eaaa2184f1a24ca06b30c5e7c0fa3337c1b81e26c0e6f23d4bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

