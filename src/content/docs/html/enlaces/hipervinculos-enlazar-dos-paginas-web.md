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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YVDZ3CI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7ZjxwMo3tOruZx%2BDBVcJQD99WfXGYVymRiuu4x9LRDwIhAJC9EScymDTpwMqR%2ByJuy5GordSWWfIkOURCPziJO%2BfzKv8DCGAQABoMNjM3NDIzMTgzODA1Igwy%2Bzl%2Bns6wklioN%2Bkq3AOX4iS%2FbgvQKUhqcSZOqHpieIu8MCzqFePHCrUiEoyZufLet3Zeecc90nSTtZ0rT9EqxVz%2FE9FSXTdqRrIKqUg%2BtRlneQoD823FiDBb7JSvxHTECBR%2BhuOjaRqCniItyq06HgvE9EJXAIUIkFWMDWTz5wwfJnx9QObDU%2FsQm%2FTIsUmQ0MsftHmDnpC94gBoWZYQFrnSKJDtIE0SbTbD50r%2FGXLrAC0C1iKhr6VQbSKWQWj3ApZ0NvnGDNMUFSzWzhiilnYccokiwHYvcZWY4vik4%2BmcjzOIjUl%2Bq8DVSDh8Gguq1aBsciFS1bho3B4UNOFzwkLVSOYzcFZ3gNZYTWwWi3j6AzBfL4NSU0phy4u1y4syiaZNAuH0E5nt%2F5EDkjVo%2FOK%2BYRDWIBryhVYSSOrL9Am6OX2FJWiz0%2FZUEju88riKHTGNmY1emcEZpzKdzdB%2FnhbiJqoZdztAjXjW4W3Ot32WFfvLtadV0grbp%2BieJmO5U7SBMP4W0XhRCLDnnYf%2B6PDKLc6waeLMqkSXVnHBXsN4O%2FpCZzhvv1RkSQgvfN66EYb2y5FMqpHU6SNsWaTUZMAD8%2B5PvYFHfbxEcyQeRV9%2FCqELyZFltHF6sQC6JtHtBDgaosP%2BlNGfJjCf48vJBjqkAVSuiA5Y1XTov5Ma8bV1zVguu7wZzIk%2B2NtQscBNBOdn5GAd7baR0JMOH%2BEoxd6m6f1J9d5DDJtj8QCZ25J89II6z7qloo6TdqBMIOXpczDsiBjq1O3e%2Bon8LL%2Bddwe1CWXH0RA4yXyOmVvSeIKVsgsPltj2eBAb4tWNyisf4W%2FiqOvb%2BxwNdEKQ%2BE%2FToOm1uy1duaKgwlv9qzClgp4lNHhCZ4He&X-Amz-Signature=a382768b8d5c54f0d81779deca7f4019801a4dc07c0e057126508eff6e2ddba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

