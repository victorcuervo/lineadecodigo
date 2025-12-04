---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6MWKBX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDaMcXhP66wMYUEZto2v7puM%2BKcs%2BdWj9vHF5C%2FligIIgIhAMy1RsBEsHr0fPU4H8HBOJFozoO0%2BNAqgA%2F7gsYys9AKKv8DCEAQABoMNjM3NDIzMTgzODA1IgxmQHSTPJCHvHOV8MEq3ANHqwp6AaEUVqB2cYIA7MlS4EINevXJ4RfMVomGIOVJOKJngXkhG15%2FpHCZadTqO9wD1LDRA9iK4v5aAZwKN617fm527bSxYvMurRk8%2BOg01vyK%2FrihrTkllHqt9jbuJR7SDGvHZRVCGTWGquzwhFVphJ8R%2FKVVn73EEqGsDEsRTT%2FOhpjiX6s5uA3oUdOkJ5uHW0gEB1kqY0SOPCR3MfjWmwlP9s50txzCZ72oMdzLFR8coijvuTFl1q0YgEoNxf%2Fl9NWUX%2BaLZgPtYLOt%2FHKa5tHS3%2FDVZvKfS%2FQyeFH2HSLURoIVy0f27sqTvMlh7rf%2Ftv28rDlMoflpc7xIGKgwzylL%2BwQNyHOZP6ACv9cpYyDxS%2F5cA3rjIklNlamtLcOrDBmpYPsDY%2BQpFw2LHKGe%2BZ9emI8Jy%2BTJbZBe2JmbIaKbmgZifQG5O%2Bqe581%2Bk34NeeqQcKVDefHo1VD92r0WBGhSLn3ztITGBnLUi5GGFNwahOw5T1HCpvfUbYrNUc12W9ilUNz88EV%2FeLB%2FZtBi%2F6trO%2BBiSvzF6%2FUYSi%2BIyWmDNQqvw%2BdWGJMFdOFVtYkgV4AIz97477Bz6QaUEcNcqAUXlatz%2FDSgz0ZIfZVrCwByJOJthHyUFRl9ZjDH58TJBjqkAbceQUaMksdlpDqiLo45o5mSRZbrhgZ2rGM1Bq7xEhpk1WGHRvqA6kpYbhx655ryDNgsYAyl7nl%2FKiIe%2FzxxmSLP912AIGypa9HfPEA6a8xQ58yYNPGAq04JFTfnneDFSNcqqlgyE5chw3fUuYYpJByIKYUDDzBoXqc9gyBfNFCL%2BKSBGaEfUPgcxj7rGFSqw6sQ1NF2pDbc0r79RcqRJk9EUgfG&X-Amz-Signature=7df375aab88d5e70f2adeb3c9e63fa0a11627e1991447a104dee02769a3415cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

