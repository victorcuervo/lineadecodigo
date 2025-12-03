---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVULIBWT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD0kF0MqR88DpfPWAaO4oC7CrcacTPOhpOXpLffdANsNwIhAJZpS2OUs%2BAkfvSanqu0vtMH7Q6J5sdyCp9hHHAOFuByKv8DCDYQABoMNjM3NDIzMTgzODA1Igy7KP7bLLdk5tJFEaEq3AMAiMwmCxnY02x6Qv10pU7rkGZ3fhpEO%2BJNtg2ApLfGaepPII5EeeamYqjwsXDbwcYrhQNB4jPnVt1Ieaq%2BiBKNbDXjGv7Bnnwyt2ag23ZeO57ovF8cL7LcW0K5HpNYHNDjlf4G7rRaYbYuvU1WSOPctqIvLDHZpztorb5ZONm6mSZhcx6mQrM49EYsUUq79tMUuvRiGqk8LlEwCA9yXcu66MKLsTlMWMsZGjW6OCiYaC42Z3PmXmF54qKakkQLB3AkBb7xjl3TciSmb1kBzEmL5b%2Fv7uezN3InEZnSGCsZMSAF2mQpQRcLUU%2BX34s4OzW8hZGVnoh45a6UeNxSaVVMpgSdQ9SFnwzk8%2B7itNhHJRfLJ7HHRIvPRiKnR7DlCl4CLUNm6cVw7VWcrn%2B4gShy%2BzejISAzWLYXpikvGkQ9W5MbKHatCoAcpMCRsujUG1BFyAlhTiw8Rw3%2Fo2vOq3UcCqf4htYHnqtS5sKRWJ4Etd9qSEVtDicrLl9rKsO2T9B9nV8bd8auHmUrgRkDhmBXmaG2nKxbaCaiITz%2B6vdqFGo%2BkwzQeZ4z3rbUKJW%2F8lno0HYC20vncMO3BM5xMmRnAP5ERIwRB7MfrvrL%2Fzcwu73mprizdc7RczlKYzDlvcLJBjqkAYPV8WC7EsvCUJKJtRGgJsFzazacCQPsmAaozzFA%2BnJVgQslx0PPYhudtjPxFwSc3FdA2ghiaMd9KQAV8G9LPn3fL7ef6O8SBbIkJZ154LtvTmLwC70BJrMwjmt1StRUOJBKRE52mXieTnhMh0FXtrEmpTZKx8zz0kWkB4C%2B2sGjK%2FQejk5Q%2BMAvJkwr9kxdo3r8mhMzs38NcH%2FRrMZ1huJRq3JW&X-Amz-Signature=710e1b1dbca0dad1bdfef9e6508dac691b08f10e601fbe0ac8d93f6eef2104d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

