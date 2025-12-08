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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKL47GS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsIhqcge%2FboSZ%2FWx%2FCjp%2FKSAfPVsgXAOEaT94TAEISTQIhANhOS3uMgemuPLUm5l51rYnhiWR4msYw9aY3Nw2oD0udKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFILIeFzcVQnMCX4oq3ANCxyoKo17wSYlXNotrMu%2BJ6t21OIHrpBKXH2Fd6OCC0uhcIb9oDK9ExH2cyVVuRFqWwIikGYKLHfrsf4CefRBlWBQQKABec3LhTqgZK3nu9kgzM6qi1enTIdE7Jji0%2B348qf3c4LGZXPsksLrjWXn%2BQ88nfnW1QdsLzy0myGkmksYAttq4IyB4lFT3f%2Bg9RBujTky5PqqcvjOy5ENSY0cJqSSCz6jxj93kzp33yyEzYUx5PARtm4QWHWSu88G2qr1IyaIoGn7XlWid6yheTKDXLSXCrXw0EWlAPbZ0453gRvqMZgNa1uS1ZThoa5YNFGfeIC11v3hy4bPCHX7%2B8q4vAycfQV11aBk9Ki6evnvlyWyi7C4i9BQYRqs6bbX4qnCzophS1yP5ShbeZBDpaCFe2YZ4XBGGh5lX%2FSQanW1StyskJt6PBmzIWIepZIsaPsvsAw6IqoBSMPqe%2ByP9AALNjfIMbxeX8vMgdF26DRNcbgEdaGA7uaeQxFY%2BKORmTdVIXDcJNqp22BvrHh7UoTbSPiLghHikl2xsQop%2By%2Br8TLmKw6yf5CdBn7ZmIhcNnhTa8lj4cDWvInUsYYbIBmCnWJwXh6jCc%2FsXPV2E6N94QUxvenRoo7M8tdUlbzCq0djJBjqkAa7Y8Rlt9r1XBw2NeIcD2aeu3ADzolGjx0LGxZE8gK4xUGH5v52nEjYtpBDB%2Fco%2BU4JlPnlclo93%2BX%2BrK%2FQH1JlsICVBYOcFSxl6GHFGX0C3rEFQ7HDO%2FM4n4PyPez5MyFTaXTop2EiSD34k1yQ55kb7ObXctufasVsgy3vhKEZbJggC2lbslyNbK34HyjSVmM74km15XnAX02YnVZo4H2PbWkKT&X-Amz-Signature=9acd70a3598258e08241d6bd4a3c571b73b16d5f65f38296fc199ce184449c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

