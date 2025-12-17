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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYFT4UO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKB9SR9bgBsfRxWJSvDdd17j7lP3FshCddyUldE3ASNAiEAkf92dLkfCdpWklPoxa9um%2FfNPT7zvkO8AXZISUf%2BMdoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAr1q%2Bn%2BoQfKSyWaIircA6JD%2Fzo4k6q%2BLvYpFrh8QpU1UH01mURrWJpx2yJ3X8t8ecYwDih3xjEWbsSbDijXRfOAp6FNAF6HbpcED2sv%2BANHNvUzq%2BXUHKkBZZSExWQ25GDkvz1HwEeHiJLuf%2BeOc2pNy4z9in2J6FTybVqtzwKH0A%2B338iABx8uPKR5BeknUesqbTc3%2FHBlndcNwFdNt2vreofkm7JxDhsa66W5d6XeXR6JZPw2%2B0ur1z2fn3LiGX1d62%2FNEB%2F%2FyMAoSoqwHYDZaHK1HSJcLgHyUZrBzgJWNem0hDVhq4Fk%2FA3v1XqM1ISSn5lVLx2VMWvoHOqYOsbcRUdjqpW2%2FsnICRsMfsaA%2BkN2owksgLUkcVvTT8nTVvveGa2Yz4cDGoMha8U26cRD%2FALjxOEyjAup4V8UQj0qlPzAkAxuYWY%2BSL2gWeMuzVj4CFEdLeJhoz6mhA6neYUWwa%2FVFs2WPcuxOpql%2BsesY7cjbSoGOJF%2BjacPEzc7kxYmI8r6UZl20S9Ukxa4Rx6Ivj6%2BlbzF1Bp48e3wYuixtREEx2AYeg%2BsmYXzcfTVp9zyQp7%2Bp9MAX6mJ%2FVgCZVMDvOK0KBBi0nFDJQzBqwg%2BblIwkSg1Gn4al6qifb%2BXO9ChKRPL%2BpNezfSFMNPhisoGOqUB%2Bs%2FqtBNrewjzx0Dv9FeJc%2B2D%2BOJS2CQMfOe8gxqUGxn%2F3GpiFPvfa9Zb4ORi7%2BM4WulcVDFHi9tCNoYKeGFhAAiHcSmNIgebPbKHxOnN4lMb%2FMV4uv4YZAgb%2FOXFM6eLI0GHEnDmDOgj0uYVna4uwGceDd1hJTJzTvnBaMlajk3n%2FrZY67Gj7Ft7DmGpz0SbjFg0AsWLqJiDtoGxhVU2LmrsKIqj&X-Amz-Signature=97778372e5346d9ba8cb8e1f2dfa7737d5748ff2126a2df78eeb81f98738ff9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYFT4UO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKB9SR9bgBsfRxWJSvDdd17j7lP3FshCddyUldE3ASNAiEAkf92dLkfCdpWklPoxa9um%2FfNPT7zvkO8AXZISUf%2BMdoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAr1q%2Bn%2BoQfKSyWaIircA6JD%2Fzo4k6q%2BLvYpFrh8QpU1UH01mURrWJpx2yJ3X8t8ecYwDih3xjEWbsSbDijXRfOAp6FNAF6HbpcED2sv%2BANHNvUzq%2BXUHKkBZZSExWQ25GDkvz1HwEeHiJLuf%2BeOc2pNy4z9in2J6FTybVqtzwKH0A%2B338iABx8uPKR5BeknUesqbTc3%2FHBlndcNwFdNt2vreofkm7JxDhsa66W5d6XeXR6JZPw2%2B0ur1z2fn3LiGX1d62%2FNEB%2F%2FyMAoSoqwHYDZaHK1HSJcLgHyUZrBzgJWNem0hDVhq4Fk%2FA3v1XqM1ISSn5lVLx2VMWvoHOqYOsbcRUdjqpW2%2FsnICRsMfsaA%2BkN2owksgLUkcVvTT8nTVvveGa2Yz4cDGoMha8U26cRD%2FALjxOEyjAup4V8UQj0qlPzAkAxuYWY%2BSL2gWeMuzVj4CFEdLeJhoz6mhA6neYUWwa%2FVFs2WPcuxOpql%2BsesY7cjbSoGOJF%2BjacPEzc7kxYmI8r6UZl20S9Ukxa4Rx6Ivj6%2BlbzF1Bp48e3wYuixtREEx2AYeg%2BsmYXzcfTVp9zyQp7%2Bp9MAX6mJ%2FVgCZVMDvOK0KBBi0nFDJQzBqwg%2BblIwkSg1Gn4al6qifb%2BXO9ChKRPL%2BpNezfSFMNPhisoGOqUB%2Bs%2FqtBNrewjzx0Dv9FeJc%2B2D%2BOJS2CQMfOe8gxqUGxn%2F3GpiFPvfa9Zb4ORi7%2BM4WulcVDFHi9tCNoYKeGFhAAiHcSmNIgebPbKHxOnN4lMb%2FMV4uv4YZAgb%2FOXFM6eLI0GHEnDmDOgj0uYVna4uwGceDd1hJTJzTvnBaMlajk3n%2FrZY67Gj7Ft7DmGpz0SbjFg0AsWLqJiDtoGxhVU2LmrsKIqj&X-Amz-Signature=9e6658333a2d6fa52010da5978707f0da52c4714245b29a72cc966759e032666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

