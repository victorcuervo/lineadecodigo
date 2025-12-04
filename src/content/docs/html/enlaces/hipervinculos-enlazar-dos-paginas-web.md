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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFQIDAZ5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEQGxRyypSmrmxZgxYoeRUmj93rB%2BhkUpImw7OYWNxacAiBQlndT%2BFVEbGOUJ6u%2FzGS0AebFOAeqUQ0JJtNsIRqV9Cr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMA6R%2B7hAj%2FVkQbV1QKtwDB3gGfZ%2FuDUmw2dvVn9mt%2F%2Bl%2Bv9ml4EfbcLIzXA%2FevahQS2914k4J8ZY%2Ff1VXBP9kSdag1xl2hfrnGtM4fZ%2BbIv4A8zT5MarH0LpvLitIXQaTzBZ%2B7qr36VPYVoWbAhylPmMZL4mliCs2poBP9vwtvOp%2FRDBeGyVZrajbMNfLzLbT%2FdW3J1HfmQR6mQfPh5MVMKp2eSvRVtwWB9mp1LP%2FmksiFsocy3NHGdz5%2FN%2FrY0Vc9b1r4jWjr5o0osXGK6lt8xCXrB70f15MIMeEwS4%2Fa4G7TpDUTeV92922vPvpENcF8GwjC1MnXp82owkniJKlwJasXgdu2XfJFWwaxFOUSFvdBJf4TTIO8WVvBjJ86Jl3PfiWUfus1fhlf9pNm%2Fz0hEHFhchGLu4oLFywa5Ib%2BBrYPHn%2BtjEIc0DBOhKHLuFVr3J%2FG6co%2BxbzPrNZOT7dw6g%2BnxNCzomUy2h7zJoyKcR6FrKXQfsS%2BFLjfi%2BV3Vh6Dvry7k4uZ1saoaBxTvGyvs%2BJDWuljNdjCxXnRpchh6Qn57PwXthRArJXQgLtc6GjHIP8PZJ%2BqoVsGx7JVAgnj6nHLNM0EZ0ULT5ZtYpbWDXE6LhRrxMs6avaV7ByzTIa5SduxjH%2BdMlVffQw0qDGyQY6pgHgOR9uWmZ6DGh1U9sB98lSnhbBLuxPN%2FwZutNucddApFkUy5lQp%2F5AweBcrVCpsXE28h%2BpspYTkCprSBvGtZwdznLlyrbhHPKcjGW%2BIh1DxcOWHh1VT7rFpa5Rre6LV46ach5J8DFDq%2FaafP6OgHE8oq91hN62nooNrWlGD4pjILK8XQ1ceX2Ffmb9NfqNCR8pfuNhZ6ph7knMbWg4qiq48Xfl3t0T&X-Amz-Signature=8f64e6ead21a6bc84d0bac8aebe1ceb23cd315c36ca30ed5f6f6b40fdf0d1247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

