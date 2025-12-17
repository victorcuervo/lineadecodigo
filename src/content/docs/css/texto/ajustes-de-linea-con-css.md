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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSCXXLV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPwRbKl9V3i%2BcP2xD15%2FRHVMda8FP%2F4wad5Lz0tdaFwAiEAhdMK%2F2J6Y5pnghTkt00mxdllTwrxuKOziHrcJKHuPWgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeUc0T7R4%2B2DHCAASrcA9yQOQ09PIVHyZeofqxjmhalIvlXXUui1kuU0M%2BDJwwek5LmjavuQB9m3KucsnCUn2hce2%2FF1leSdU%2FmYTkXIdCBpaTDTIJwhsOh83AZzul%2BF9OX843PcL8pMicHGNN8IodGIlKWWEvRyAU7rd1xSXclTiD%2FRpxNEkdXGionnbJwReAk4hbQ1jPPo1G9G15VrQhf0jmPzXNNXLZ%2Fs7eRP9d77snazow9sto20vFeg1T6j0uftDz%2FNbVmvQZe0nHMok8kUwH2Inar%2FOhiDAAHqcWuZAKRemQaz70LbF9F97Myef4fWygAX09pNJxX0ZPneNPxk5I1Jh%2FzJI%2FZXE0NUKwBG%2F2tPaSweXMn4y%2F5JLg9CY1X2vU2AH%2FZFRWCB7ClRME5tC1avr4NKixOxaWjI%2BR%2B4J1Xc9XHfG8BZiBmiq6Gi4n4rb%2BM96joSC7%2B%2Bjmp45Ukf2F%2FrsYJKHTKNbAwBqqF9ZyqkyGoIkb0OWM5TROdZhXsCoFyXVR2gvP42k%2BGqL5T91BVSSqdv4b%2FG%2BFAULGzPHzpJoKt0ozDLO5ApDAu9qG4uWRr55QmbFgQXVtYkJZbo%2BbxA%2B9lghmkzM9Ab3Iu6URDbrRitdfc20njrE5Bsrq5i%2FKXRyG80nkwMLKLjMoGOqUBjTsTjGV34qHP4Hf5YN9NMVYIxyGgOQf5%2BVqnDqBK4qRgOIRf9UVlpLVsTBaScjl78Fq1phowLm2jMb0y%2BSf6tYY0eDbdvPglos6EsH8wYf6yO%2FrFn%2FjkLk6aRvL0KjTLe4up5jQlw2JVh61Zh9p%2Bg5%2BWnjvsJ6Rb4nBWbb9ChfUXyiyvpuxgk66lDK89xIn3QxzuEinWkzaRRxpelyvtwJT474yG&X-Amz-Signature=a1e5d22d585d630978da847d8d927a138afa2481bbc3f5f2103f039b7210342c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSCXXLV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPwRbKl9V3i%2BcP2xD15%2FRHVMda8FP%2F4wad5Lz0tdaFwAiEAhdMK%2F2J6Y5pnghTkt00mxdllTwrxuKOziHrcJKHuPWgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeUc0T7R4%2B2DHCAASrcA9yQOQ09PIVHyZeofqxjmhalIvlXXUui1kuU0M%2BDJwwek5LmjavuQB9m3KucsnCUn2hce2%2FF1leSdU%2FmYTkXIdCBpaTDTIJwhsOh83AZzul%2BF9OX843PcL8pMicHGNN8IodGIlKWWEvRyAU7rd1xSXclTiD%2FRpxNEkdXGionnbJwReAk4hbQ1jPPo1G9G15VrQhf0jmPzXNNXLZ%2Fs7eRP9d77snazow9sto20vFeg1T6j0uftDz%2FNbVmvQZe0nHMok8kUwH2Inar%2FOhiDAAHqcWuZAKRemQaz70LbF9F97Myef4fWygAX09pNJxX0ZPneNPxk5I1Jh%2FzJI%2FZXE0NUKwBG%2F2tPaSweXMn4y%2F5JLg9CY1X2vU2AH%2FZFRWCB7ClRME5tC1avr4NKixOxaWjI%2BR%2B4J1Xc9XHfG8BZiBmiq6Gi4n4rb%2BM96joSC7%2B%2Bjmp45Ukf2F%2FrsYJKHTKNbAwBqqF9ZyqkyGoIkb0OWM5TROdZhXsCoFyXVR2gvP42k%2BGqL5T91BVSSqdv4b%2FG%2BFAULGzPHzpJoKt0ozDLO5ApDAu9qG4uWRr55QmbFgQXVtYkJZbo%2BbxA%2B9lghmkzM9Ab3Iu6URDbrRitdfc20njrE5Bsrq5i%2FKXRyG80nkwMLKLjMoGOqUBjTsTjGV34qHP4Hf5YN9NMVYIxyGgOQf5%2BVqnDqBK4qRgOIRf9UVlpLVsTBaScjl78Fq1phowLm2jMb0y%2BSf6tYY0eDbdvPglos6EsH8wYf6yO%2FrFn%2FjkLk6aRvL0KjTLe4up5jQlw2JVh61Zh9p%2Bg5%2BWnjvsJ6Rb4nBWbb9ChfUXyiyvpuxgk66lDK89xIn3QxzuEinWkzaRRxpelyvtwJT474yG&X-Amz-Signature=d0e8b0184da23c57ec00b7de0e899beb3e8cd8724e38a22bbe762d5da7e3a288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

