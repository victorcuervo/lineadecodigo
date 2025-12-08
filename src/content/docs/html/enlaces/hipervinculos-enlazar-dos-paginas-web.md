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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYM553GJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLcRJVCfqVVV5q7TtNhMrdODn9540ETNlws0E%2FTM7RKAiEAg0enfcENg3odBX3wokUsdE5cEODmNCAqc07sL7nAsAoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxlDhUAJvesbTB7fircA9Bl3J4aX8HeWCgvF50Uwx%2F%2FJcjGMd4tz81ereoGh2tmFuqnuEZHQE6gmEBvyPkDK5fkx3UXfe4GzxPKIg%2BrDCMEwBV6XMpCyFKgX%2BjWiReMA68kA86QZ%2FqS4MW03JcjmZXn9VpX0qUFVKlb8nGjoiURbGH2NFVJXs7iAZzfUP5wbi4ra2FAjdyvGCLZSspDddBJ4FEtV8e0AkG4LfvdxF8%2BkeTyGl%2B1d3sO%2FdbtTvcGl5ycWtrX%2FaVz6lZFwE9TQ%2BCM5jqaYUOTmVtIX7tJdkwqLuMv9WVvCQqmrNjbZ33rDFVnO05rk3S5K7DHghW406%2FgyjiBJEYTvBmJMFX5o7xs7d%2BADm1s4xJNYoB8FB8Lki%2FUqBzl3CffT4iMJ05kl8sFZgRf7mlvmGMLg2nqDNYGeupjA1od0JIRorwHM4knSERNkgstS%2FXnYqXLejGUi1eyRxl1G7xfeZ4zhSe3BWSBGUJDCG%2FRj6XhMwcnRvEPGaZhQj5GzskGrsl2TmJGrW4Y4htTRs%2FxStqydga%2F%2Fwgpldt06eDPze5Z14rPpeVhj%2BicXvrP4314wXGQ72ktkZSsneGwk3ZxL%2BTuTyivglUbY3C79ZDLnl54Pj%2BCIkr4ahgXRPGKRAkfYu%2FhMLDu2ckGOqUBEOJ88DnYM3tUUKHCR4e8m1vjckP5F9ySOBNVEd45x12eSC%2Ffx1AdRyKHkvNqbGLyOQtHUsWItPJORpB6oJEVtaeHP%2Bv6WqFdMqf%2BLlZJ%2F6o5%2FqH8U%2BY9T547O%2FgiK0AWDu2bpdDtiH499hMClF7aNunnDxWj7dEJ4KS8Z96x28TWtFjJtM1MI47F6KLkw7K%2Fw5ZHtBcwkXHemvUABolmN0g2jlSU&X-Amz-Signature=111396d3c6207eb410bd17af844c4716ddde549c755815f394988f31e3df1753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

