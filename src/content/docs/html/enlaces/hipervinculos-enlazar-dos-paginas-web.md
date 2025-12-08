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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGDPKQS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjqD4RAHUgn7xeLvFMEexocnXEdIubmiEN%2BqrpY8n3cAiA%2B5myTBtJDkoOqS5udog8gXDhhlPDbwcy5BDyThkjN9SqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhhX8SWXP6B1sHCaGKtwD40AlEptHxfFJkleSAm4QYaHGhVVVeT2oIoCFSCA%2BuNJwAitIrQJPsk17FlzOj4zz9bGqFonaaz8lIDuWeWo1hQUf2AiGj3NUr7GfOSRdV2Cu%2Fo37AImLZEOprvsxC5PKD9alMs%2BOTSc37WldcerxZmbI4pbV1I6JQNQpQzoe4zrMtce2NuOsX8mhdFHa%2FUGxWrNkVKE0jjCAg6FF4A96puk%2FFsi6S7dnlwP%2BYcA%2F7JQd0laGtcP13ITF09V%2B%2BvFT6J1eY4MUQ8ejWxXi%2BX0XI0Nc3YYvYZ%2BxOltDxofNUlhQKhQV0SZ6PhyUTIVWhQ9DELaSrrzPocpOxeBTuda1gHq9uCyYLgSZD5cUODXUxkRdViD3BcdzPwSTXBhtBbTufzJh8onaEzS10zNHMnuPF6%2BvZeoafrchXfhofHn3ElLcuhWfay3JUGl891P3xVH3BvNU4p3NqM4zflWD6XxXNxh0PA43%2FO%2B7o6LWSpVi4boZDIRKmqkHrD%2FlWRLSN7b5NPM1bfns%2F9pwWBV6ASGdcmGUKYldcaUZSoA5HPmDYbTI3aHYsvmNVoFCndUldxedOAIiRM8o5%2BuCMSomuhRr8P0OtN%2BkpTb4qWM3gcbXqaUrKpy%2BHSV9I8ZYO%2BMwzYbcyQY6pgF%2FyclaO7KYrT4ND%2F3kgB%2FzS54IEd4%2FyaaS7Ssjw1PYoi7iPWLi8sP%2FaWJgDeq0TjCkwZqXlrKZ%2FIDZU8KfXv9wQDyyqK%2B7AwWuXvRlYRcWbwi8ak9dTGMd9HHrp20irXkGotmG2ZsMPCAezZJ2K0ffOr99RBM1uo%2F6qlKoBB%2BnHGXNAlbpV%2FdqIuYK6z1F00uh%2FiJevQAGOwn%2B7qPUuIt%2Fjl6Yg8qF&X-Amz-Signature=9e8d24149a0089109df87cce4ce6cf49b972d0de046c0eb7644fad8f782ade78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

