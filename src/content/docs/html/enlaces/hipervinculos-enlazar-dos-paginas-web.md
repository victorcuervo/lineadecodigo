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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPG5ANWN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBmZVUzwAhj0PE4orlOLSyGj%2FunQskGyHBurx4Tc1%2BaAiBqS3gnQR7tpR%2FofFKEoXDVnP4ebSwGfNfThCRYmsUKwCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiCqvJ6AoNZtV4ToWKtwDK1kYoL9Rfd2aaTh6x4TY%2B1EZF7%2BAfnWwBh7T7kzzgjc7FbyKw8G3BnJcID8qHLgC2UCKz13POhhdkwo3QtmbIPx2zDYqFNk79s2aWBzccjKmUlFiZT%2F%2BXc7tPlWEYHqOFoVZeV%2FINDp72qyNWn6CPtDhWIaC1JRywjLu9r0gV%2BCjsFuyceE6NryXt7o5UTRW6rbhxIzh%2Blwr%2Bc7NeF4ooMW5wPFfpiLe1SOFYlQKF3AQkaL1b%2Bl4NuYLY78Vyj%2FwrSHgf6HUJZ0Usz9HQ7ILWBs2cOVjhtbM%2FEhKqdoOQY1zTILCWI5yYZymdKxJSbwBHNj%2B8Mgxd84XXYXgoa%2FUIUrI%2BzUUZVuTTzx5hfUEowQkr87rPQm%2BF3SSbrRZzdi%2Fw1acHH3e2bHcO6JlX4q8ieyveNizMMKSlLEsaWwqA8soQdQt7WOpvhN0rJCeYKJ1x0W3HXX1jaD%2Bihv7c8Q1XebSYcOQcbyPh9Emuomo433kaK6iHB5P9Yhu%2FJdtr5VQwGImPrqnor3n8bmh6mnDq6uNqSgNqCN7%2Fs0Ufc2QSV1kHccV1kMgshOMIvxm4mlrOjhLPn1AwwfVFOYB0zU%2FpcVm%2BPkq1bKi6DFFPPF%2FrQVJ5QDA0os7D2xzqrswpsPdyQY6pgFm95OKKOk%2B1R3dWQSTiY3HgCQez%2FNR36MfhR8o8iLk01S9G9u6ozxMiH9y8sUkZoIwnNe7jdmoYtn%2Fy8LOptZxugTTJcnP1c%2Bl4M9z9tgf6UCj0pclOBmemVKMhzEiXB%2FJQ8zw6X3rnldgeFV7MwLzryBVrU18ph0%2F4lpQ6jkdYLO2zU0uHNd%2FQcbwCeg2U1YYQvuuknwjjPLx3LgAwZtq8Gqqgf%2F5&X-Amz-Signature=444e6f1f20aece182e8321a46cb5822f12ca122b086f419ea08d769dfe5d627e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

