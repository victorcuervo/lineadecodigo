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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKLPYZMB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQcgGU%2FT304ip1XPvFlLYk9TEjW5J4bo8WBIGDUYmf3AIhAOiw4IOG1xqdH5pAq6Yi1%2BBdZA6zM4iSbS6%2B5qME8LroKv8DCHQQABoMNjM3NDIzMTgzODA1Igwdhc13UMhwjQWeY3Iq3AMALwoImuQlBwP1B2efcwdDzpKtZzwnKM7j63sRGSbn76%2BojaXL4CgSAMbWr9aZz3GyRrC7YB16S8BcyxKsSxFJP965%2Fr%2BITI98mO0SwbesC8pwtlaSZZYMCufLQL1%2FukPUZmTpLafCrtYAPJGDc9QUS%2FGeEKtOqWe5lOQURpq5UVsO5pW6cUO1vXtQOYzu5Vlorklm83Gy68iDLflgs0etmwqWQpUpw1rexUDjQxtgHMNSpxC0yYvqjWjssY%2F4uPt%2F4Vo7UiqFLKjcXaqDia3kFgwirbE9IVJZajBjIP7LBXffKNlAu2m31bap1vDwtEjnVpcn%2FnWlbQT%2FWgobiYxqSrbCieninvRjE38Oy2xqlp2tZ5e4mBMuHTPP3YGfSf07bryCX%2B5TTPHU2dAsQ3%2FlbDtHgUnNi%2B%2Fr3IJGHkYKJSME8eHCQvA4YxwxQTH8nWyZR8Q%2Bo0Fanjbhdzl%2FRPqiyXa35vDP%2Ba5IxWrgXLvdbfDIbswxAjFSNa3MnyDWkJfR4%2FXmhzlxxOVjvxjCuRna7wt5UM4n0edqQb%2BYJyl%2BFkClKoca3BGFe%2FyspnXiIlwLUCU8ZR5JpWyoP7NixT%2FqAJ0LWZuoTmrYbOupJzUWTwGxjFHpSq6mmiArJjCmptDJBjqkAT7Zs5FVAsGJoFUq0ikZSpxnVR3xx9gWCpqB6h6VJ%2Bk7t8unYYEOM0PFvaff7mMAozT4qE8FyM7h4SMHWfUUOVt2zFtpwOgxt6I3xVv45skXUl%2Fb7u4tfdjHB2nxh2XRSyowJD9GGSf%2FYQ8bWalepuelxT34ZYFc%2BX7hOcE9Okq%2F7tz3qafR0Z2xDrFWkII6wkmr%2BNGphUQQLw1SHBqIGEAP%2FNwO&X-Amz-Signature=0e40d279c44ff69632987827f605ed33fe44cde4d7c85c1b6e396604c85a3728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

