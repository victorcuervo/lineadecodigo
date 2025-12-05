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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OOHL3SF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR2SzHkpWpqu8lJTsxI559ndwbdOLjcUARwU%2BbBYtiZgIgQMw7M5ZNdvGNvheRl4pT%2FrrSFV61Ohtz7u8EFctqfekq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLabu%2BoAm6v4pbOfqircAyk%2F%2BI8jfZiAErzGwORduGmH54itFhQPV%2BMCuJBUfUuzfxBWlg4ovE5D%2B3lqZ5vPuvkiyMkoanx1Usk31k%2FDP%2ByS04vUAqdxVZQE7hF3uJ2Z1Y9n1O5eiSyV4m9o1EuuM9CWZ4d7twiEoekP9KIqOAkXElG2zrmfHXXS4Ki1r7JYQAwxRM77GrjR7RyB%2BR%2FJCVqP1eLTVoMIgt7JUSCEY5NtTgjfWpkzHVyt1SIzy8UcQzvpc8xNnBvj%2F2SqVWIvNOQHhoTWXAlaOQETXLTL%2F6Uq7n4rV9uSvNvdfh3ne0ieuNRLJqXxKKxcPg%2BTL%2B%2F4Avj%2Brqm33Kiluz9uE4FAL%2FgKP4ktNQbp54W7J32W5fMMuOuD9YEOFRA3sjZd2VElE9duOW1j%2BEhIYn9vsgYkC0Xd6V5phOCb9NH%2FMcCl2z3SEtkF0rjGndQLKL7Ds6hDOxV7LFagauu9FyF2f2aHlO3qf5iGt2Z7mAwuTmqQY1crkpFWxabrW3REBlRqwOoDlQFeBM97wB7ebC6p1zspLIEmUrk%2BwcQAFgUG66rDHxuPAUG84ygDbPyeRr1HYlFiPTXD21NdgWX89raLSEXB%2BQrmB7vGSK39ww8PSB2hzPfN8YYzksBkpSecxyT2MMiMyMkGOqUBWnC%2F4H55k3LfN04v4USwwAMV%2FPTolR9wtLs8ZOWtOV5nzU7OxQC%2FGmzgeIft86JHyizwDwtx6PvWDZn6Ix7kHWS4Jf8SejQC2%2FIN8ujR%2BG2gviaQepZwp2FYwpJDza2viJczvinF9lsGurpibArrA1dk9ydOb2%2Fh0%2Back7SC%2ByRlQGc9VmyzCsnOcCGIcYyHjtjPdOVOCg9VhIZpNBXnaPewIrGo&X-Amz-Signature=cf99656bcb1b803b3815dde63d0ffc873946f91ef3e292d25ca29906ad844de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

