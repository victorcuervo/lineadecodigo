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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWPDAWKA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLpwTXaAZtMkWAslpM8SvHFacRZnKBRs1SLXrl56pMoQIhAMPJ8Ad7YaKTywk2mncb2Ec3R5yDSpsI%2BNI9xKqMEbTIKv8DCHUQABoMNjM3NDIzMTgzODA1IgxmMVt8k%2BX1uwS%2B%2F6Yq3AOALq%2BtuZum1pA%2FdmDIIo9v3aN57yAm0dwKhjKv03DK49Ytyfqs%2FI5mC6JO1oBsznvPFBWjq%2B3ticfOB9QquEBmGfTxJfvp5WgVZz55bXlZ%2BoTfQWD8xlhLXVYX82W5W2u81CejQ2oCFO3wLcbu9B5nbTHMT2alfLFnTFbTi2ACKsK6rdr3Gf2MU%2B9fA9Me8f0jcAWS%2Bk5O9giYlgrIdKsYaYcei0RVZZhJ2fRawyuR03xA9hlTIa2sGII8nuh0Zp5%2BMvYGdvYDtff3C%2BxXVhDlzODPhNOP%2F2IWKDs4A9PwS2VrGOofvnP3C3eeMJ9lhRzXsaDvIrtkrlJ%2FUG9GQNNzi2CHJ4Lcn9TLtI1HfXASYrE7WeRGpm4xc%2FOjLy0C%2FGaEXPqFik0PDLsu0v9sWQ7QUcIPqgwOUf6v3RU4GGMY4E6vfQcrdKxbotPMY%2BfbtWfAoqPAEgfvsEFaiJsaPWnHSAQYwkqWUzF9sfUhw6%2FrxzwsKJkdEz68qborWzTtwhWObiUT5lLus3ajIZt6oSqpVsZ2PvoZiCTn5KruiYnCMHimfGJYaL0hdtZNkppjR0zp1oNudVMipBpcYK8maa3sHXH8tx%2FL8M6k%2FqB4N5rw7l%2BEJot8PkhBghHSFDDOptDJBjqkAWmYJabBp50l9dfx2bKYk10LUYHhzZ62Q5e6SOJCrzX8zqe7%2Fboz0vvCDp%2BvHJ86CgB12MqhW9WWL7heeNamxUPmyunDcZiO4nIo8He%2FYKXCdfbuPQBjKDrI%2Bod43AvvOAFhqZFNMV6A9uXBajGJmHzLKxkZgNrl2WyTRnIcdAx8A7iNQCxbVoEbRoRsseiVinap1EXgXaIGuOedjUyKnywYiT%2B%2F&X-Amz-Signature=a6d02f54f52b8a56203955f7afca9c6fbe14d8f36f3f5cce6985ec8b759c54ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

