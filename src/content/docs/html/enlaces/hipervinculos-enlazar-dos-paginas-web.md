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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIGAWXOC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF00JObyQo6%2Fd0DbzciYbSaXlHh%2BqiPRWLoWX4gzOo6tAiEA9Mtw848lLZvoiedNt9mobVTcE9xGHAn7BhaSTihR660q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMzep7GJpoP8%2Bv%2FHqircA2gKbs5JH%2FM1RI63P%2FthbzYBcntvy3F5rNUL9dspjbHo%2F39R0Xp0Olrr7O%2FP9zbbio3a5j3zKHYFbnvNWauH1G3QV%2F6uVwxZQImLAjHQuTuKLY%2Bj0xVWOy5DLkXkGT7dtFFLCvAfD2zeWZalvtcG3VGvN99mKPoq%2BcB7a5%2B4%2FtinLRGZBMd748efimXRO4wBU4%2F9TA%2FvJYMjt6Lqon5k7m7K5qVV7Uwk6tKl2%2FV56ESp1p3EoH0ZsiBIC6uJNtuNkRtEnRwYwPh%2Fsvoa0m4j%2BTZoqSL6%2F%2FEcNkw53GP3EqW6x%2FyUKQe9%2BTCeptVxKwmZV9gXyQHbzIhX97INu%2FdBJhNj4FafPRu33Qh1qodT5N5sM8huFeMbi6ZnFJyQiE6lB%2Fu%2FxsTNzVfXSM%2FW4cfbCaEnJWOkEBGh%2Fm9vSR7%2BXH8HG09wsHQBTAVp3QsO%2FXm%2BaiDYgynLo8yiC%2Bs1jO%2F3d1P58%2FuK8YneibbAvXG%2FEKvwzHWnjwze4eifQ3jgka1B%2FR9vZJwMyezvgi%2BZV%2BB%2BWmg4CKPQCiUzJBN4hWTq5IQLaXFr8hg0YCbX%2BHCyeDxgkGjZBNqRS8RagJFOTxWbUJz8VkzmamYRVoS9Bi92wUi6VpXJAAoCIRemqu%2FPMIbrz8kGOqUByMXgAUtIP8eEbw72U0bj%2BCoY%2BtbJSTtlmRiCKUqaxLOoacZR39Jueb%2BayK6iab3q6N4r6IO%2F22aV71UR99uweDEx%2FD9oUL3kwyFFEkaM5qNZ0rckkmuDhGLDgs8kvocpaZHW3vWowA22EEVGOC%2FXabuI9gJ%2Bb9Qg31w93Syr1svT7tHcTQ%2FPXdnwvJtqr4L7bB%2B%2BDHj7SRdPyrPGRJG88GvJUFpG&X-Amz-Signature=d4ac64bccb6385443ef255250b7997c0d0995333a81d4dab388bda75cfddb345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

