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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AAQC4GQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICn3NDE3VpRPEMXGzv0ODN8puz%2BTVLhAdYjRPPd8KS%2BMAiEA5NhdUsafTgUxcJxXBfZ7jrC2WUwPt8smv8l6biWjbScqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA%2FgTUDaA01J27o3ircA23sJvE91quT2FO%2FtS3hZtPpEXGWc9%2FbPmBPE700%2FyaAeQaIZYZO1SVlbJVAPebMu0gTSuiVt0r8ITnok8sfysbj%2BQa3UVdan6qrguwrI%2BJyagsozWjErcE3EQQdbT5gNGGqH4%2BPIgKfYvVnmikEcV030p%2FPeJXh05VMhX6qyo7oKkTme%2F5B9DN4ZRATJnKuRH7vkjFhd0fYKNJx944N8QSRwmPPxcJR4TAynJB5opeizrY6eptpsrewe7E7h4JAns%2B5RjzeJ6VNUovj%2BknlqUWQQTzROi0afSB%2Br9WL5lzS%2Fvd0L2OrOzR3GUgJutpBCBZKOtaaifrLPNfJtWJHVfBfMTTcW36t%2BpcprNQAxbUOYaENoDnxhUGUo2bby9g5ddK1ZhXcuYLpdGh%2FXZDuHXQo81PqjXt9oK4GNY4jEGXHfEPVggLWJM69Fh1m5qudGl1jL4XU3BTb0wgvW41zwR7NlHNq3bkcOZOgxMPH0YrfXAWA9p0JDDODfHBLDdJzgB3kFoQ7lYDyRm1KW86E2NyeQZxuNRxrbZLcK7nl6xMjJuZzZZ2LT8YSwBP5kcx0LiXK6ROMOw%2B03kD93bNG6wfZkygxa0NR4YM12tuPlfW92J0mgX1oirnnxVlcMOyo18kGOqUBEpeO03LEklgWgoj%2Fd59Y483y0qbl5UdvdG81xvV7EF8X7EXi7fK2hbYRTcV7LOtTEaMgFF9F11W1IrhSTw7%2B1tcWlR5k%2B0bQKm08cAmis0nNUAn5bGjsXwDvxMBWGyPu55t9OdDjzNeIXcbv7L%2FcdwBDHESGJeSm6nb1P90bydlm8J%2FOo9gUlCDCoLLuemqae%2BxpINfuoXIbrb%2FAZHeFRMjbDBSe&X-Amz-Signature=8a1669a3c3a4b5025b23d12f3f3eb4d1227e7c957b7414e3151fc28c3bcc450b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

