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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BR4Y73X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt%2BKJIoqJDFWLA6JY0oVT%2Fs3IX6fgJNe9zZv5anI5iCAiEApdjJtsQJyonopWFZ6f%2FspcUweilgUKYMHDlTSeXOiN4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOnItPZw7Cd3wRNtKircAzFpYrhpWGK2lzdyzLQOkfkRs0nSHT3oyytk1iH5gIJqs8oKn447CkVwr5fUXQBz%2BqJoUjpAbGX%2FX4VYvp6KsPMzez41jFDbx7r7pdb9DXDKGmunLR0LOlRPWx6UhqvPinHG4wj86cEH%2BUKLu1CtB2dwMV%2FOZ%2FHeXIQ3BBcsAudU3pylnYGjz4z00o8igZSn8sfOoNEAf%2B6azjqk7fqWtvGmskbyitSUjmjZ9hcwue%2B%2ByQr57xJqyGSho0LLGoXj3%2F8qLlK1Uuru%2FUH%2Fpy8yyvatxwcWNjDKlRXeNbkijOKR9cC2qe%2FYHYgx31Mfgtim6DkR6auNGmfTFj%2FDbqAAZUF9sFnYhrKWXSe90DAV%2FTLpP%2B0xTYWKmkME73q7UspLIS7hXi3LUDaPNkNEE%2B%2Ff9q71Ytf%2FWwZgj4%2FFw1LC4h7h77X4ObfQxOq0RyDDL0O9c7WUcgzlevPkwGX1ZvKUc1uZ%2BkNEUD2lLTr4GRH3s1lLwSHCHBCiChVhVK%2FGhs94HEY%2BAo3JMt7e%2F8K3Wg1mLpZWH0lE2iC63WQKU2TJxAnkT1jL4wrzMGI7bQflYrK3BS4icDCkxY6VWt%2Fz8W6jaUQTHyp6%2B0vYO308M%2BscR%2FQQwaboz8FscEhxuaXmMPPMyskGOqUBGhOW0Nt0ZZ7DJuASuOQCJR8J68QFu2lCm1ikh8OuCItMzpAzGwh9KmjY%2BM7NSi%2B86A0Hslr7wlHa2t5PjjpYOQLEdQLAKlSn0AelXu2h5U6dyHXUVL8pZcX6IZWMSuqYMQ3EW6qNLjY6kLmd85tio12YmmTB5kUcj8VH%2BoHUkVB8h8sxEILtGmWLcUflqwkvg0XfnLNFZ7GSgbPFMZFUWICyf5z2&X-Amz-Signature=9b4f9bdca2ad348d5ba478f36dedb03f32d74be9e401bd4a84b395bd36ddca75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

