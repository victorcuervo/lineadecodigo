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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCOX5FC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2BYRwq05PoBzldS5InBI2IvAgxX32naCg2vVn09a%2FOAIhAMrHo%2F7zC99kZbIBo8J6NBUXUQFboXtklwOWL5YaimYkKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1uf81kz3S8%2B8wFJYq3AMRiR7IZfULBd4NZ1Wyf5WUZpprtAWsJrzaMwHcQtsDgfcx4vkr1HRni1%2BQbd%2FvGWHBTdwzZn5XNYUwONn1cw6YQ4dbylMC7GnZV2bh8SChX3WgUxELdsHsexX96CNpL9J5NoQPcom%2BrAwAZtTCb6Xjnt%2Ft%2BDMtteg0nqm%2FgP44dAWpYrwMO%2Bt9S4RzLa%2BtQlQ0oP6v39Z11fgHSlRP6Fjxf8Kj%2BKyLf0zykYk4b7Q8EaKf%2FGxRyU1A%2BeUAsWcsZHibK4cgIEuuo3iQxPqWGRmasH8qIfO2vAcFaIjlJPcCQG7qe%2B6AcxCf86Kf7F55oSl1F6r0hC9%2F9gh%2BOq0EyPbkmzMK3XT%2F7nvoIb17fuZ02eDprIy2Yam6T4%2FbVFORcDFgCVeZyJnj50im8NU1AFJ8ov9wN4ou2qFl8nIgVI6SOBQT5wRepG5G8KyptBpHoqIwLw6h7QpitxvHfm9nE7tcn9x0S85GXr1Vz8fd3CebgHnF5aPRaaZgWszQyotKeZgiks10Ga6cS4ou77yMGB7h5Z7yLUvZKiC3nzyGJhno2u4Ui6igkPnRCHfWfs5n5M%2FhWikpkYOstK0jfKdANhZNzeMnLpvpB%2FnqHvl539npeYtJqKoVBJf%2B9194vzCutNzJBjqkAZ3ob1vATVqj%2FpjuEaBdqioHGqvEA2VjlnLRbYLEY1Zrsau45hrW3XCs%2FlZFZh52wRzyeDWWqHJ9yCBomAewb37nHQvK%2Fxvu0ZJOEnfQOt8yiU4otTYS1bTunQYC6poWkhf607lQ1Ju9e9wsa%2BJ%2FgT6pv4WIEHCvNL6ILXJXj09v%2F%2FGHE5w4%2Fd9ZAYGZrzkk%2FbH0VNMSjU5HVHqprcKjQh4PzN7d&X-Amz-Signature=2e35f918eea42f808f59a5f79ca0d08e046170c1285eb6a1197edd0fb9f1ed0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

