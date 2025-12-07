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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRRD5AQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbFZIsuWJoHropQQiWdAdbOJNPtig%2BAJ%2FeQAYOqhzEuAiALREHq0RHhp2%2F50NbIeSvZ%2B1TJ0am5dBw0C6OHnnfZTCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvw3r7tmUfW9J6fTmKtwDgVFVcJ3qVHhBR0HX6OWab4xXKLFzrjYp6xXNTOUYcMWDhmKpj3wvSn6%2FaU2N7ZLfKC8395Qh9MOebT%2Fg0TszCoRvamjam1jav%2BAm%2Bq47tOYUEeOtd4g9aqn9RMROTB57%2Fxjj0WQ21ekbGC4%2Frc4ziW4TziRLmKIZtyjw9%2FnozJPQcdamxDRcfX62XPhaCQC47HRSOEhYnYFmCeYf4WBHmp%2B%2BNQmM7GmjWgkr0HGU4QUhgyzV222XRPXqdNTbaLfefKhANHOoMmrXLeMaFtmRI%2Fx4iSy7jH8Kmvpyr%2BOEH1PLuFaUz4%2F%2FgVyjj9IpKCrl3QS3JGMLGO5fcttniBYABEp2qYuiTJFaNAvcUDvF%2BX04rrykRlIhYhvgGETCWRZCsPJezvwg7CYlRUpp9M0ntYQlmQr61xzcpJG2MvXc%2Bn0A9j1CShJ8CUE%2Bz63AByoEVtGqGEdYW2IDWeeQjzGW27RXvceZzuiZmYolReu5hAXF%2FLSUKYsbv7tK5YaJvWnvuvJ97gGuvLTa%2BsGfJg2avZ%2FPGOPScLHbrCcuq1OJdeoN%2BhPBwpWte0zY8LAHApX%2FbVHLFiHxQrQGObfbkZ%2BaU7TOqe1sSF%2FJmbVgioRv%2BNVoRCkmnJJSUIDdKPYwhsfXyQY6pgFPMbP0LTE0ZxO20unXjWwrob7Dkc%2Bwa7PQR2MEda5zekrjCNcG7%2FGRrHskZCEfAZEIjXdQzh21khsAZS7mtZG3FjU5kZDsdHTCkl17mWqBEmilNzl6SNaxCWLvWZ1xahsNjEe50WtWXV7IliYAo3UJlTpiFnDL2Sf95yvo20skvtI7TmEkh2j2rjz47oXtIFsUYQOPvZSc0aho2dLb9ANnAVv13291&X-Amz-Signature=f84689f8c0a64bf6916095486e6418953c6aea601db9be5e47dfe0fdc6c043cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

