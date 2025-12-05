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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657SMUUN4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFGvjvxsT7QybM04IihSl%2FMlBSTezECXTWir%2BPhrRREAiEAvTl6lmVMvWYAbaZYUwt7rN4Oxrgq%2BY%2FNnC2o%2B3C6r1Qq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFz%2FIZsCCqmRnVHGUCrcA%2B3jw%2BQlAQIa%2FumF1%2B3ixeCIuyHZ0UNcvM0VgCVFRYIvvyFMOnl2NwezKR4A95BqS81iT7TGZgK6cxC4c8xle8%2BaYwFLyv269InhE3S544tmzPGl%2FlogwQ5BifJBNRb9ulLDmoqfsvzx%2B9%2FeW78yI8SjxtEcUPJ1wkjpOuSNM67BOsRo9VyK7y8Nqn7cP5ShBj96EcoHi8k2AIWwQtFkbbQQhiX%2FenN%2FjjpWNKPnI3AW3V48QGTL5%2FgbZPDKrYuTCw3FcKNXoR%2B%2BbIHZu3H20Z0QhFGWZQdLHJ%2FSA5HtkBJr415sLwi7sXERgVU7b5R8Yv2%2BnXCYo40JE5zJQ8n4ayhTYxZRxzqkfzCKocvxBc5CGQeyWIBWFdAl%2BoYp4923Yxs%2BbTPditrPqT8z3hBZitWbpFH6eC0UVKv40uvE1bmwy8ZIZZjAS5JJMqjURf5BiZeUzFd0lbQ8llBD4EIRvUYfP3HgbhBMbI3vAtMD90p924iKi%2F%2BUh0J%2FnuEVCv%2BCpzmpGM9WFPl9JAaXRAAgFSv5jMQjANcHGUYdATlN2lpQYmUeM%2BvXuM8%2BA4eNbhwIVN3RRFtfBtIIX%2BvJPJFLYiFKb7qrHuaENOIYiPkfASYNVbdPVuipjqVlzyemMLmvyckGOqUBDbBzS8ilkqgWy%2F3GcdYTuPV9Vvv6FEYMz9Ywbp3TQ3cvL2SZtGF8kZPqt0wP0T2XrkT3zRQr0w33sy0ag4slhG4FY5GOdE79qu%2Fk2vU3yuBQSeC9EGWrrR58NsBZ%2BOSLq4XOkSgli6R5338Lh0KgR2YW3OidfLvu3hXrBiRdSicRyysd4P7BFeKvQRV3aPBusr7bj8nFFwgpdjewKPCEl35ARYp0&X-Amz-Signature=3cff122586d7366e9ffd8deac05000495c9dcdb2e08c40afe02b4661bea082b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

