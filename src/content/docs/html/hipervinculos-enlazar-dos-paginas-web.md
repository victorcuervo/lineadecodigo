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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BO77JHI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD%2BmEuudmmeYa8%2FZlkXr5rxlEsIIWwRE55OEOs5rHBhvAIhAMFGj%2FtpV4fOihFRpzgBuHRyF%2FQlQzzHWE%2FZHqViyXsQKv8DCDcQABoMNjM3NDIzMTgzODA1Igw3XSxlE2TooD1iBXEq3AMmGJj3d1%2BFwrdLCbLb1ndxHTH%2F5mvvL06Ke4qKDTm6d3P4zY2ZxWvxWLwt3cGz%2B00FKzJORCNx9y2K%2FAUy2551DqYK8hOxTrhDnkh1mEIcQGAMneFu0wK18wUF6OWTLwUfDxO8uY4ikT3nDcxfOE4mnDTvAITyhu8UVx7SS8rI3ZZ%2FvhGbjk%2BN3ssKWjIiF75%2BF3jnQAqMSQfctVtTXshKqNnNP3BlcQsLaAiluyBV0FlZtszvGFgw912kkH0mb4nfV0fL8F1HY4otuu2AoYIXa1IAReeQGOfv70EXL8BYU5ba%2BTHOnTPAIp46ADDJAGNxx9RjM%2BtandUimwoKp5u3i2qNGahUD%2FfmHRbNPfYHIgL4SjLA88ta2S895kL6A87qfq1n6eWQPfx9NqCsPBdLscpiLHXWlnEE9oC%2Bo3N%2FrMHnfSjMmJnbZ73FJfTMkyTsT2ElACudP4i3ytHuaQ9tWczynZO8ehPmLJzhhDG3GzwXmAwt7NUtkjun8s2WU3m4N9LWDzVfX%2BGXrl69jyUZA79lXRhcekFYjMNCrb8axXfPibnSaBY4BXcBAhSb6eRxiH6H7I5LEGeIpn69H8%2BpcySPgpEz5HmkT0Ew9VB%2FOqWDcqTX4%2Bgko3LniDCo3cLJBjqkAb6F%2BRSLrXSldHMCZ4d%2BzX28gyuZUWQsr5KjjC3Arr961XTSQPAtamEpYy%2BBAX7K26KoaKWQbxzlE%2BT7lccBfLA9ifLQUMDue4L4Dxy81pY18MCcnpmxQYGIzVyQOI16CZwf12wsKn8klKd7GOLuKS7Tfw60O%2BHtrkhqU9RzQJGoEKtiCeSbo91sOz8bd4MMkTkDyh0mttych9vUDYx4gNNuPobZ&X-Amz-Signature=75b205e0b8c07ea27ca171d5395c716ca724ff414a3ca3f3c013eb1cf2d498b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

