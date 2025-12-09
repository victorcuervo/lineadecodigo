---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYNXFS6F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T171911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8rRbLq4SfAusmtsK21RyeT2IA8mWkkkfI8ch8tH2t0AiEAr4YxlbEtYm09T7fkkTtmoUyh5WbrtXVKjL1oHnIKebcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7SotjvzB5BFz2EgyrcA2I5vW0SxOF5FrQIi2cdTJK84jDlk%2FYMMUQai7l1eA9KLUgtbX%2FXl2HLyoKrpgoBz4zMrx4mq99pG%2FkiSp5%2Bzeq5O4yArC3hpruLmia6D9uHVfHPG%2F4KjJDZufolv%2FLy7H3H1k2xnfMqNfGWTymY7L6txZaG%2BSouULBFnd9om2CV8cVCorZ1zPgwTfXuoN%2B%2FOdwcD%2FaK5EUYUTkri8PRc7GOq7loOhXRbbZWQp70GISm2DO3HkMx%2BPIjcIsxmLycezkwdJNxG9tUj4SPW62T7saWkE7oLtO%2FmrD0oXX5Ijv4P%2FuDzwsIGfzuAERSilc3a%2B8FnulhHU2OYm9JVjxVA%2FRmqvXkD8QPIzvr%2BGYDxc%2FI6gmgjy3s%2FIKJ9JShejS%2BwT3wfMsLJf5mOqcbmM%2FzavO0B8tlWpHZOzgI6x%2FVd%2BdVsBX8AURqtWh0Zi6u2qf%2BahyofGZb66vGBXOfWhR3EoYzbIIayWdQTZFy0UmQCxw2Eq0ZezCla%2Be9ZWUJi5Cl87V0wrTsUZdJzawbGGx6%2BAeIyZcHUiddMkK4Uqrb4KmOVFoA%2FRYhJifyWITFDeZP0G27Ic09WobqG09Sg8EREvW7KL9zHr2bK0i8EYmT3C1EGbq5BJp148OFeQ8DMMGX4ckGOqUBTlAPQsrPFMidlDFbNXOO8L2wD%2FzqNynSK8ZMUYuEj2nJROVqBG6%2FkpZR3q8Y5kVSo887b4Y%2Fv8IJX0DcOjADMa3ezm2P41Opqh9E7WIY6M4ecFjAqDbsUeEvJ38vnuK%2F1%2Bz4mOoo4u1tFQMH6%2F6I5eMkaG5nZIn0PtQ5tZzK9GuDaDLYTLGkt9jVzUe1YMIq%2Bbn5bIo6IjiSDjwziQ5SYJaO1zdh&X-Amz-Signature=487380600ca4ac298e42db6f9f4937ca92fb0fd6de95574b38eb420da5e20166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

