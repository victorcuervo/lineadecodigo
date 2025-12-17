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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVS7V5UE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B2QKdiTYrDOwWOAxNJC1LZOxwFWPXKKPeR4fQWGKhwAiEAtEd0PVQznsGzaFk41a1rWeW82bftN2Tm0B6fdi0qJ6wqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOKWsno%2FjO6alHQOCrcA%2FmjhLedUPGfCn2LH22ve24uZnEJOnsI9v7%2FFsisk8u39GseNjvmFW9tpBAn0YotL8JoNTMmDuv5qP%2FDH8UTC4msqLsDYOQ9miUI%2BHQds2%2FWSWDSD0xUNheBAICV3sSYXG%2B8gtB58dfJErg3JZti%2Br0muWVKj36C%2Beoj3UlvlwNv7sPJhfySEa4OwurpdgW%2B5%2B8JM%2FDLR4Je26nSUNenCzxF%2F5DIBnuftngFyC0rhvNkvQuu6a6lXPI5PtaK%2FD0BLvAMvZQAj9rPhHEyVlv7mPkvTjfC9Q3dG%2FHHYvbfWyxkgHQm0brBUJWYa5oNrjCfhce8VtMue8u5HqvUUpjlvVeb85DUQJzkGftGVkjNxUDZGQtYDWXl5H3jzv4jfPgP8MU%2BdY4GJzGSb%2BxQ86aIAlx%2FskBL7o7o%2FLoFlqk2y2oCDQ07vpAahWNnN4gbpVOfElQIfRXZTmixCfrNu40fDOun2iL%2BN%2FmwgslomxoM%2BqAQzATzVsOqMUXMTnK%2FD3EfIkD1w7kTmZkefPXXYKuH2QA7DliHQxcRAqTr9EHxULQdO1ZflP0N2zQpOk0bP3XhrPHdTySe65Tz%2F0bSBZWoMrnxnBVgOeiTAU9FUK9g6aGkqOAUK0pu1xKK%2ByrOMPmfi8oGOqUBWh7Dt2TF60Xore5UFH9f0zIZOn4a9FPDPUISdjq8cdmbVZRjrYToqEzxzKdy6EwB%2FzrdcAF0gE53sDjMKlfKDuaOjX24V%2FtDK4j6kf0hfBIVrjdTl5j5%2B33oKDfdHtzkrB5txywzjrKE0zL%2Fj2kx%2FOadQV8dEwdB3kY3wKF31PA3h2R73B5t9Slglr73Qv63GAZMfuTwBPS00zEn1yMACirbCoCk&X-Amz-Signature=ec89a00fe01b500689301b8f2924445bd392831cf6ec368e18d50a100bf936fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVS7V5UE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B2QKdiTYrDOwWOAxNJC1LZOxwFWPXKKPeR4fQWGKhwAiEAtEd0PVQznsGzaFk41a1rWeW82bftN2Tm0B6fdi0qJ6wqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOKWsno%2FjO6alHQOCrcA%2FmjhLedUPGfCn2LH22ve24uZnEJOnsI9v7%2FFsisk8u39GseNjvmFW9tpBAn0YotL8JoNTMmDuv5qP%2FDH8UTC4msqLsDYOQ9miUI%2BHQds2%2FWSWDSD0xUNheBAICV3sSYXG%2B8gtB58dfJErg3JZti%2Br0muWVKj36C%2Beoj3UlvlwNv7sPJhfySEa4OwurpdgW%2B5%2B8JM%2FDLR4Je26nSUNenCzxF%2F5DIBnuftngFyC0rhvNkvQuu6a6lXPI5PtaK%2FD0BLvAMvZQAj9rPhHEyVlv7mPkvTjfC9Q3dG%2FHHYvbfWyxkgHQm0brBUJWYa5oNrjCfhce8VtMue8u5HqvUUpjlvVeb85DUQJzkGftGVkjNxUDZGQtYDWXl5H3jzv4jfPgP8MU%2BdY4GJzGSb%2BxQ86aIAlx%2FskBL7o7o%2FLoFlqk2y2oCDQ07vpAahWNnN4gbpVOfElQIfRXZTmixCfrNu40fDOun2iL%2BN%2FmwgslomxoM%2BqAQzATzVsOqMUXMTnK%2FD3EfIkD1w7kTmZkefPXXYKuH2QA7DliHQxcRAqTr9EHxULQdO1ZflP0N2zQpOk0bP3XhrPHdTySe65Tz%2F0bSBZWoMrnxnBVgOeiTAU9FUK9g6aGkqOAUK0pu1xKK%2ByrOMPmfi8oGOqUBWh7Dt2TF60Xore5UFH9f0zIZOn4a9FPDPUISdjq8cdmbVZRjrYToqEzxzKdy6EwB%2FzrdcAF0gE53sDjMKlfKDuaOjX24V%2FtDK4j6kf0hfBIVrjdTl5j5%2B33oKDfdHtzkrB5txywzjrKE0zL%2Fj2kx%2FOadQV8dEwdB3kY3wKF31PA3h2R73B5t9Slglr73Qv63GAZMfuTwBPS00zEn1yMACirbCoCk&X-Amz-Signature=e2290bedc4a3f1b590b21b03d9143fd40060e58286d3191f15f1703d615dce16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

