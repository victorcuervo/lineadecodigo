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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJRKGACI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuLgyU%2B4WxCBTAs3jWqq3zOaqSEkGU1kR4XEd9t%2BR63AiAZMB%2FrD95Zy1ZhpcBoG0RGvkiYGgf3pUP4%2BXgDvx0RLiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhmdMQGv3UpNybeDYKtwDYCNtt23Ki5zEQHHz6KF8ln9xNCLilTXJ8rVV6nepJ1jAyx4TlSnH2ey08FsudvOs2aYLPAR9Ep3xnMdMOmRdGjI%2BB9AmYJc0ZGgLkQHvjBPZej6efNKl2RRyvW4QwJ6mS9Nc%2FG6VQfuTXp2NM%2FeR%2BkD6V73Oa%2BwxFbfSc03w27ZprFW8hIFdO%2B%2FPEUhgUREOdkjd3xCc7CS7F6jKIqfrt6rhAyhUw0ozqf0stMKmnNYcDSzbP38m4Ox5fdIOc%2Fq5SOGxEzeul0pqQQxIhaL8eSBTcfaNf%2FEQPCUywaFz6J8Y5QeVGe3L%2BsnwHI9cFSUUrjl6JMKnNNMge91DnIPsVdfhVXq0SIop3iEYCUydKM6x45N36RMqzlS1qdBdHX6S1N0DFdwm5EMPNdyJZOe6mTB4h%2FVHpT%2Fz5ZEtYIQ9Njsu7K%2BjxSuGejlY7J57Se4uL%2FTKP9WuVMVZAjlw5T1UxbiE1h9DVJl44IEaIjRwu3Icz2IMYQrOvZg0UvNXgBdeieE9jEuE%2BpA0KbTxDHkJ5mDQH8%2FMFaqwUnwQZ423O%2FRPwG24RbXvPNCmUaxhEJ5oXYyEl%2BlhMHts9gbeyim%2BIVwmuz98LjvaqMrje8pfNKzHwBnQ2UoR8EbmlVcwqu7ZyQY6pgFjmSSYAPBGNRVuZ7%2B5%2FviB3xKmZ5MRCZeyXikRvBVJdpeLZLfFUBqSdLJ1IfO9FLh6aTkqzq5ve38apmYo0chT7wR0%2F4tucNRiWbNGwADUL%2BXvilTk7i4dUntDGhmQg1JyhiqYL7qicnR95HophDN%2BBeOivGnbZlWgvO5ehkwi9rxuFyhU2KBTY8q4FUT9xSvyhRti8I%2FzMp5VXe1dadbY19lZ%2BOyO&X-Amz-Signature=68e37a58d72ae9558a06dc6f0489013db795f5f8aa8b2a4caf98eb55347edef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

