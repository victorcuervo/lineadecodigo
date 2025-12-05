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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJQBSCM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZutL%2BLBtvLqhkZFzj7IsRG2wkxr9Ywjhtr3ahQSD0LQIgGiMULmS5LwvyBom8%2FOJfV2iyPdv2L%2B%2FayZoY%2FolZ%2F%2BQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCz6AOz9lRNEWsPOlyrcAxjDR%2BCOhv9M4uoLE2kvT1ZGATFu%2Bwb5Hd%2F6Jfkjk3G9nGkX2iDu4RpE7dndQtnlemRJ19nKUosM5FkU3hZkapLcsp5OPqt%2BylcRIH0kAFXOFExLzCudV1yuNXx9cHYIwpJ%2BrFrh5FvgvqdglAffSii10sSyK2FZCuGaRgkraHvbmZbUHDtt2i7DLjzAQNF7nrjhspURgB%2FEEC%2BPmPl%2BACrCF3VB0D1ets4k%2Few76S52CmibYjmh24R0FzHWHPlp69nAYdsJZ9IDiBujeZiQ5F0BcESuGel8gHH9Urw8stdCMXEdCCo81TCkiWwtz3%2FR8NyxV8v6Bx2vE64FuBtmLMh5LmLMHDp3pRQU6UZ83JHemVQoeG0VA%2BYxWXeU4WXTEZKAWof44TCuV6iSs8eG19D0aJcDoRgSPCvz3ylOM0VI9qoYNeURvUL0EreDMiMtdRVaJaNKYKgPWxIgAfLQwxQ6U%2BxdlIi5hGaKhp1WfvtOBKb1rUuxYqz%2FrEDFFjSbGGHuR8Zuj6ATIIOYfrKDAaRM98mBmvM8KtKKkO1KzzOcx2rdHHLknfsnhtASqEq6Un%2BouzlanFqoZtMbWq33554PVz4NfDfpLL6YWTsVyKwglLVxkXxNo1OXW7EHMIuxyckGOqUBK%2BmUT5QYwug%2Frrg0tWlqkEFZq%2BvDs8PB5jdovdKUPPvKdYFMabPQEix4I9dKfocj%2B2%2BA13H9DwqxE9%2Bir%2F4Rm9w6tA%2FAXi%2BYMt%2BGULooDvmbCkfzhjtmwOzo5UfZjcoiilfQffIXh5LQByLBMW61NB8s0V5d2L02YCSkjoFBdgdmpwLpIBzUkFcvhfDoKzHcPlHqVkVncz3HFFYRMjtUquP%2BU8mU&X-Amz-Signature=951f4d1994198cf6e3bf07352ca336ee6c2ab141da4dd0b95cd0092342981e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

