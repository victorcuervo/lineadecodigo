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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XWZIV4N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgih38HzaG%2FrKCAvB9u0%2BhrOITxSlCAVLnKo3AIPq18gIhALaq3BwbDboNVEQoyVXRzyDtE6lZQscJS%2F29FQfvOhYuKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznKtznWJsGIZhzvEgq3AOGX%2Bdz%2Bf4vqqSwokoJl151wRsFDxBuKwRlLpo5wote1H%2FY0CzbcAwHZyMVpoJtIynwegyuqQUhilPVTYLD5VyTB2mc7t8m10y7FNLx7yO9ZBd%2Bh10%2FQXqsvSh6O9g0vOez0KfiyvBmDHLYKBuFQWG72snP%2FcG4s5zo92%2FJDDWhtKNJNEQDcCCML5p3zBkmyd4BJXZfjJ7HZniz1VINBcnUag9oKtoOW5nyImRDLQE6GBHbTk4jw6M5YzpM%2B8ARiy1AxED6DGzNlKq5DinCsmAGVu2BNSzqNQK7142vHrnhaakascpd2LV8EDCfqzHrvj9o3s5599VLkEb%2FPAfC1a9AqKdypLwG5m25YW2kuOIa28RyInHCXWncZJ2%2FyM31E%2FUxGWBeO%2BtDIoAw8h38OCPbe3w0PyBtC7vMhzvQzaGuah%2B%2B9FA%2BCRaPCBe4YQ1QInQaPNbmdk3Sr%2FUZcZAvORM%2BPVuxrEfi4J4UK9nzxjVyK%2B8wCHBS1Ry43TEeVeVZfpKnNYzG3AhJQuwY02VMIpzqmjfwkFFI8dioZhC%2F3qiyDvD8wpecD6Y3ZEuMSAlRCFQoHw2QI5usThG3rOeh4Kt76Ng0GQ7aBP28UAdv3hnP5o7GQUo7XYGCsrJ0LjDwyd7JBjqkAd9kpBDFBZiORLnInoKlHOT%2BIhFrHvzVTWmG5YcY719p%2BrcS257IlyxGXYdjKCgiQpH2plAqcMs4KpUpS4ndolyzlD1dwkQX7SDEMLpqMFPsG3muntJaaMotFvUppJgNFzz4rgkLhjVGyJMjFHHyZtotv1MyR%2FKt277%2Fzl%2BjybnBsV8SaQQrZ6Y7%2FjF0V4IXtJTnnQOF%2FG69txWTvZ1zYOY50af4&X-Amz-Signature=26882e57372fb97f2dc057d3c50b8682a7498ec8ba73ce9b9dfe877c7001f353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

