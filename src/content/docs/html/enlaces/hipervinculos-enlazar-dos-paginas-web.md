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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJC6PQM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwTyc6inDicmElMw4%2FYtk1nX4HDZsOMD2Pi7BRLihlNAiADc1Vv8oewOwku0gY8kP788FI4G%2BcSREHGqstpKchulyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMlCofA%2F8DygsgJ04kKtwD8mzse9lIIalxGZOILH2%2FcuCM%2B%2F5%2BMh6IR6vQMRxq%2FPpFUskViboPwi%2BwPfjzE7dR6s6XQzFK%2BPSXpaMqnfOLlzp5pK0%2FoyH6TEYVHQj%2FwQ4PaJjLX%2Bb71QPaCxEd4S1%2BO3gd%2FJQyhL7nrMRK7Wg0WkFP3VP%2FwQ7s2yW04yInipuENy3uvLXtpc6f2ZWibNYfjL2HBduFNKo8nD%2BpAF4p0Ikjo1MFZTYwI7TYDnkzauNQjDnonCyO1pvS%2Bm2xk4y0jxbN%2BUmW2CJ5gCQOXl3d3QYd2t4Tb4ALhItfRHySNpt9Q6HJyPR%2F9buGIAso6UBgVYokPJOF67qxPBeOdASFKWX%2FGhIhI5qCDcfNJMi3ijJlGYvmi%2FR8mkDFuXnzFmW3bxCuWgKYlm3W67VqFQmK0OC8woliuShVdlWJ21%2Fj3Tr4mvdEkXsaAmR6owIDopo6ULA3lrhOzypCAXH3GwenIu660uafT%2BRE%2FJ8nrkblZIQoAnl7e2x704oaQlFHXfxWzAAuMuvqjI%2BI0sKhBx15oohNib7DcUCq%2FsnBMFF0iCecr44SGgDxcP6oZ6MiNSFk0CXICKBfcgvx6Yi4J1b29YsOMILVbqx8TRF3nYOxIWH6tckLi3T7E%2FtmJBww44zIyQY6pgHZxzpX6iq4q5MCt8v5a%2FcXRx4%2F9n4MjR43KAAn%2BegPsrk4MAimorsORvQJfi4oYtZE9nENU4fk81T8P5cnvJiY2zjQSmW%2FWgRn8e92JqGMu3BfagUKDjNUgWCzA8%2BE5BhKGdNjqqQbxsKDBoqjGAEPsCroqUjgXqNKwwocUM%2FQTJ6T9btEeS44zYeiUVLUhm4XinGzVZmmYmOGANxwKiuRagD6Fhae&X-Amz-Signature=477b52af5da3c34fd872f028235ef53fd6b4c2d6a0fe4603dae47f12370d7eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

