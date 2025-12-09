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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4AHU4QE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjQm%2FtsQzKEYEt99suapL9qSc0bY2awd0NG9WKjMD6EAiAbch0rBmJl7nfaQIaPKxoTPnMLrEhRb6N2knr7shvu2iqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeKG9h9n9J6LrWvf%2BKtwDjByh%2Fvx3Y1zPaFQmmmZqEvWOGlXmaVTMqOlDiVoDsUY%2B%2F1bJqfXD%2BtwpXJOV%2By%2BEwEIONwHPhQXnrUvgdoT52f4G3PTPXrcoyZC6THALcBnVqK577nmti4HXSlx3ktzLf6tJDffsmspcQX8erSUeV7w%2BcVIFAeevksvNDpWeU6C0CI8IkCGHCdea5Ehrrx3MIQr%2BTSmPAecBm5Nmt5zQya18%2FWRVh0hh1z95aHlFQH9pzHQgg5hadzsfLIrn2%2B0ZVn9h4qjjZitLf290ANZQYmQz76rkPzXcaUIRZsJEMMWqqgLdJzZcd2NrH3JeLGwFZ%2FcldSWp%2BeVppOZu%2BUynlxzhLQ7dRsm5aDjjos8ZFVW4j2KK%2FwSr8bD%2FXW3jm43Dt%2FzjcASN7zKPNnkv07jLV8CiT69FkAaWruz8KZNYxhkLc2zhOUF%2BF21ho6Er%2FoWk1CwHIStbsM95B2yzW%2FQhtGwMIGiUphweq6lYp8Md4EdDmCc1k6WeRz6GaUDDBVqipJTzdddK5mKicUHTAfdEyzLI7RAwMtrLtgp0EJOwjYDvDJm%2F5c%2FrUx7s29e7kNmP143niv%2FHf%2FvmXYa%2BT%2FMYk2IAzXnaYKQFIRW9J65JWTi9tewv7TFgd25K%2BDwwyuTeyQY6pgGeURGDnFJIdILVESGo14Y17qf8pXJ7l4L%2Bnsy1HJMQCDqT9IPzbOPaEX3cWjvUJyYLqUVeb%2FUlxHbUcgn4ssoC30gruY3IvQKkr3D%2B%2B5Zc1u7yeeDCmk%2FFaIIJKBwo%2Fv%2BTpLl%2FePQsz49e7k3eMfOQLk1in8zR8Vme05SvE6H0TbM4bFoHZcb2oNR%2F2coCVQhVv73hSmB7cZD0kkgB9yiHQXtRuS%2BH&X-Amz-Signature=332e7c6ed723f0aa9cd0167a3a5fa8db00db1dd7821ddb7274ed177cc469bbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

