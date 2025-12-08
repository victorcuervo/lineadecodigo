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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SOGWW2A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFdTVNgvcoAMd4X7XrVubElKeJ3ikCfzSI4i4n%2BUMztAiA%2Fyk2eikn9Uo4nFIvqArTNN1%2FWbPiddR5P69CrLTY86yqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BhDQlPbO5LTuYekKtwD3vJP9KqY2gQ6M3V%2Bw0mhGis9StkIhHCEMX9UjgWtvhlak5qE3Yp8nBJHOhKHF5dP1ZBs28EdSNYPw6sMWfGdUwkIZjyy1dM1BriZ4adCZfzfrNwVDs9HSQkau%2BuWdX3ijMdUbkPZvdmpAhBr8fqkS%2Fx0q4WIAV8tf4wwZom82gytWzXHsTxzmc43%2BvuRdzIYfljtTxSkhAVacxv7CIoFuAzbSBaVOc5U5UXcPxoxLMun5V3FA0QsCBhBV%2F63V7bLtk2EgOowLKuH0GH5mGaYJ6CuNJutFXNJEb3VdjDE9DtYFLgrZkDlD2CaIc0EZ%2FHpzbtlZ9YFY2BscKdLpiWaRPnvtN%2BTTOGt5xxss0U3g%2FGuM1bt9zo1tVJScNQk0vvTcOLspn0Nzc%2F5rDFl8ZDnie%2BFHTUoqgW2vJdg%2Fm0%2Fx61b%2B1hso0L73PEW7UknZ0mphBEMefwTsPCv3prt37sWdfckTmMSJp23tx4kpwMWHBocXV8MCJfqBfI3K7c%2BA6W8yktipt1EPrgq16hUuNItL1oEfb6PRaa71LHl3Z25vM0QfF5Bc70d9VgPzCUMMBbh%2FtywaZBXlUqzGRLlrXJepSOL8f7Npnhad%2BK%2FIlHgbTbCLjTDK9hXcRWsz04wge3ZyQY6pgEAZ87SI1JtRbKN%2FGvrApiI9pbee3WSr4goS304CdVN6cqIBQ%2Fk%2FcQYm8UEY%2BKXvBzWs9PIJdsrQ3fZhGfDQTg3yCOYUFdQ7IV9Evs6vdJVkPlASUUthcebeupfx%2F9w4qNFDHl6uggEitc7o4XybLHFQCuEE2rn3ZFTGPaqqDQHMH6PQZAw7usF7m7f%2Fb53iMLTWDARWgOISq4TO46o1iX9hnJqsAQ5&X-Amz-Signature=3f4f890e2fb92ecbe34143df6b3903c730e1cb2d69613803ce899ef9b79b8b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

