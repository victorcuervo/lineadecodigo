---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSJEXUV7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1y7e0f5NrhwT1Kf13qOU0jSNL%2FavsI710%2BMintOz%2FLAiEAnRlOjy5dA1yx1wKj5KjgzF1n7UonihfBngFx2nnsD%2BAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkVBuUHhMm%2FI3of2SrcA04KvYLkOPytw7rPXb5CYtxR8rvb3XKpr63OL3bIycT4gVXJgze9QLLwaJ%2BbV%2BPHHO02CLQPeeN0b5LoJZxjtDLT3VJAgs0zeibbFrsSTq7Ld6kqrIuIvSVL2GCV2kAQl%2ByFntx%2BGsTCNcdJ1UyjabpwwXFrsWLARcuqs3C8%2BNEdX7tEhIWZbFFgNNc2UjREdFYtD6lwPvQbvcAk7IMJexb9RFw6OZfi%2FmxYAHx0A7ZdsshEmnzo%2FzRxBgY7O3Rmwjveb5kV6yf%2BUg03whVy9BEXR7BZXGsNKnoHDsDeQaWXzkkmHvq8%2Fu673MR0gH1NFt8XUxwSpehea54owQk0BmA4z%2Fp1TIJzRozY5Em3sjjIN9T5T%2FPXD3q%2BFMoP4agvz6ybvLDoDbYEwMmrn9RBDBR6pYlobo5b6dFh%2FaGLc3JGJrA5HJDcswSqoLnBHannPaHLHPk2Ob8mphFrXrOTe3faTAw7VM9vCbJ%2BBRWVDFWqbIsRLKUdVqpn3rr1GKX39Nq9ex%2FWZr%2F%2Fxuzea72DitLN%2BFNdXBCbgJzg%2BKM%2FFoF43p87yhG8Czb4wQDJL1B%2BrgoYqVFoa7XhrZYtcGF3721cNTdnouvQ59g7xfhbxQwc0sbvy%2FZBx0S2V71UMJ%2Bgi8oGOqUBXPIt91OAJ6XRPtrOrSSptPLVVWzi4FnCPi2nqHhKhJ%2FzWtw%2F8TgTfx9xt4suXUGQd53CIHECO3muIlmjX6TnMQ6frva2Y5DFfMoIbrlbr6agZCLBcb0uSwA%2FZIlhLi5Ql9EqR70FX11CGBXoZK29RSRzUPTrLm8Yk6r88Co%2Be01k8edIEwHSV23B2%2B%2FqyMR3VvXMsPSejKgvnlAoDO2HtVPEkjrS&X-Amz-Signature=b11c811729c81bf85c76c3778eb8a03358af395fe26f0fd75f20283a9c6d85bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSJEXUV7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1y7e0f5NrhwT1Kf13qOU0jSNL%2FavsI710%2BMintOz%2FLAiEAnRlOjy5dA1yx1wKj5KjgzF1n7UonihfBngFx2nnsD%2BAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkVBuUHhMm%2FI3of2SrcA04KvYLkOPytw7rPXb5CYtxR8rvb3XKpr63OL3bIycT4gVXJgze9QLLwaJ%2BbV%2BPHHO02CLQPeeN0b5LoJZxjtDLT3VJAgs0zeibbFrsSTq7Ld6kqrIuIvSVL2GCV2kAQl%2ByFntx%2BGsTCNcdJ1UyjabpwwXFrsWLARcuqs3C8%2BNEdX7tEhIWZbFFgNNc2UjREdFYtD6lwPvQbvcAk7IMJexb9RFw6OZfi%2FmxYAHx0A7ZdsshEmnzo%2FzRxBgY7O3Rmwjveb5kV6yf%2BUg03whVy9BEXR7BZXGsNKnoHDsDeQaWXzkkmHvq8%2Fu673MR0gH1NFt8XUxwSpehea54owQk0BmA4z%2Fp1TIJzRozY5Em3sjjIN9T5T%2FPXD3q%2BFMoP4agvz6ybvLDoDbYEwMmrn9RBDBR6pYlobo5b6dFh%2FaGLc3JGJrA5HJDcswSqoLnBHannPaHLHPk2Ob8mphFrXrOTe3faTAw7VM9vCbJ%2BBRWVDFWqbIsRLKUdVqpn3rr1GKX39Nq9ex%2FWZr%2F%2Fxuzea72DitLN%2BFNdXBCbgJzg%2BKM%2FFoF43p87yhG8Czb4wQDJL1B%2BrgoYqVFoa7XhrZYtcGF3721cNTdnouvQ59g7xfhbxQwc0sbvy%2FZBx0S2V71UMJ%2Bgi8oGOqUBXPIt91OAJ6XRPtrOrSSptPLVVWzi4FnCPi2nqHhKhJ%2FzWtw%2F8TgTfx9xt4suXUGQd53CIHECO3muIlmjX6TnMQ6frva2Y5DFfMoIbrlbr6agZCLBcb0uSwA%2FZIlhLi5Ql9EqR70FX11CGBXoZK29RSRzUPTrLm8Yk6r88Co%2Be01k8edIEwHSV23B2%2B%2FqyMR3VvXMsPSejKgvnlAoDO2HtVPEkjrS&X-Amz-Signature=5129a713d886ae5d9703fe416531bf3d68da0a3fde99fbcf4ada226d7d9d91da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

