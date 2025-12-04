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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EICI7UQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHQPmdXUQHC8AaqI2mag%2FMvSaJic%2Baw4nko34VUfzLyGAiEAjFXFITaM013OMFMs3DWSe4eCQ9GnlKvDSsBs2Km8WLUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCiY4ALWdVgcP3LvdyrcAwHfySi3UN3YhFeU2DB6f3fFgBuxRvyMBqiJmXIaWa1KIRFyhqatbUR3lz%2BbfUATYF9IJFCqkRa5xdOgz4NvE%2FdBrXefPgT%2F9KcaqBs%2FaXdw7dwNt6u3tGoJvnBKNLyYjCPGZE8VycQZ1E1gTcrWI7KeUx9m170uSrOAalzQ8KiDTjebaP%2FmhMN%2BSh%2BqW8x3%2BbaQXunuslDhVYjIC0%2FwRbFxQLDu2mvH933kj1MByH6ZDNSenhuDMXNj8uA7Q3F3pzMPcNHtlQB4YLwrwURW1ZS%2B6WTY%2BMmYp4aGearPttX6D6FubacfQ%2FgLicAjyQHtE3RtiO0kzK3cf6ZnSn5RcFbsNoKy5b9EdbPiISACxuBRiJx7TxAcovkTkAOhHbZ7E72qnxoH8XPwQWYGPdsJ3ei7ufblfh8T5dW1lbwXPDuAz58gFqbfT1qH2NO919RFBYpo1gVh7Br8kOZ3DTYDPiXnVGdCNja5aOUBRDLlTOH4jgRIdqsCAO600nhFcBES7vQEFuDENUGG27c6dZ5chgk4naqrkT%2FUjVA2hZgjFItuFd%2BQPYsxCALDEE6EJgexkVrSUDPULLccd8LSMduDu3bwDlNXMctVeF3TFosIwW68iewZH78U%2BdL4Fi34MOiQxMkGOqUBo7QqU16UDJOl3YLE7Dd9ZBmQI5pygREMlJMPoxywPC0LrPiYnTNtIMc%2FNbWG8yuv623fd%2B0hAW6sPC6eJo4T%2B8pKwPQYnJSB2gDT4SrcxEcNjtRbq95IRiAqxOeWKHAK%2B%2BsqLU8m%2BxwaN5MmPqux9veoOp9Layk2Zi5oUxlf6N5xcTfkX4NAapQNy5t7LIZyhqYH%2FXsTBUp%2F15Mf6HfxKYs7Llt0&X-Amz-Signature=73a701e314c3ee46143a9c458168ae9a0be391a4fae943492a0ff54c3338fe2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

