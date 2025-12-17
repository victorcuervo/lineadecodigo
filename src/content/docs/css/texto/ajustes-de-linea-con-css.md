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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWIXRTY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByCBODg67MoaSRI9uOzB2FEqMK6jkXBqMhqzp3IxK3vAiAG7yBJMztlEYCcilSl%2Fy7L4GzGffPc2gInvjn4TErS0SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tyO%2B7tH6QW0ycHfKtwDCS35fYbVRTxd2troemfXMo1yOfqtFNwXWRx7TznbfFO31MilzB1zbNxNrrBZseinBqUhr0JdWwHecYsvyLZO3EPsZHWGyAbKc0YmnuhdiJPPSl%2BFkn0AC92%2F413Jx5b5x0M7FnCMaPRfC19ZnOIbueQ4q4YIl%2BoQnS6NHXyg92e2YzD0siYT5uSeFHoTuBqxf0m0M2LHjlwozyfGuuepFQvPMz6DPQN8yvi5pfXkYiTjWhwtoQKZ2waxuxNmZLEStTAWGZ21Op2dN51o8wOuWeBxYSup%2FKejvLbHtKSh%2BRqFNgNctG5HzbMSqkKH0xN3P0ITNW1kq5zNtOVRwnF8jvQROWFzgPFuWznMd4WTWkZkKluZtuWPStEG195Zb4UA%2FRW6wwfNpeogKKZFfBe520aGbDUGiqxb46BwU4FuU9gpbzQ9SoiIsomKO%2B9jvJ%2B3tlN1pempVi7cuA64Gd2uoRCTwskUIOQ%2BJOPTGr%2F0zc9zAnN2sYU69Q9Ryxc3Rp5DKXYvqlnmQOdOrHOsvPqkGco%2FdFH3LHF5gICwOR8EqyDak8yX8Z%2BDiWPOcfvv9sQRbWl3E0lK2ioIDXeQmfsOin66ElcXgbSmi20OZHwu6fOJQ1WPbWgi%2B4wMjGIwyouMygY6pgG766V6q9Wkdvnji3tU%2FIcVHUxTRK%2BXsa2OXxnjZIiJLXvTOQse2Wi1h01J2Jpr2yjRNTYoQ7p7tI7uHGvg4spm0RziOYF78yEYUZU%2Fl%2F5tKHaigHW%2Bs9W0NkuO%2FT5JtoPJM5vJom1s%2Fa%2By8NeRWT4jJCu4x3PcUGbN3LkpoTuO0bMpGVhLHBvGR0I6YnHsaP3fw0sJDN9Hl8mafwYb%2FH93afervS8R&X-Amz-Signature=fe77ca57a7d1b81a2bae8cf974b622b9f71f2afe12ae8ec2f0e8a07e347e0105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWIXRTY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByCBODg67MoaSRI9uOzB2FEqMK6jkXBqMhqzp3IxK3vAiAG7yBJMztlEYCcilSl%2Fy7L4GzGffPc2gInvjn4TErS0SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7tyO%2B7tH6QW0ycHfKtwDCS35fYbVRTxd2troemfXMo1yOfqtFNwXWRx7TznbfFO31MilzB1zbNxNrrBZseinBqUhr0JdWwHecYsvyLZO3EPsZHWGyAbKc0YmnuhdiJPPSl%2BFkn0AC92%2F413Jx5b5x0M7FnCMaPRfC19ZnOIbueQ4q4YIl%2BoQnS6NHXyg92e2YzD0siYT5uSeFHoTuBqxf0m0M2LHjlwozyfGuuepFQvPMz6DPQN8yvi5pfXkYiTjWhwtoQKZ2waxuxNmZLEStTAWGZ21Op2dN51o8wOuWeBxYSup%2FKejvLbHtKSh%2BRqFNgNctG5HzbMSqkKH0xN3P0ITNW1kq5zNtOVRwnF8jvQROWFzgPFuWznMd4WTWkZkKluZtuWPStEG195Zb4UA%2FRW6wwfNpeogKKZFfBe520aGbDUGiqxb46BwU4FuU9gpbzQ9SoiIsomKO%2B9jvJ%2B3tlN1pempVi7cuA64Gd2uoRCTwskUIOQ%2BJOPTGr%2F0zc9zAnN2sYU69Q9Ryxc3Rp5DKXYvqlnmQOdOrHOsvPqkGco%2FdFH3LHF5gICwOR8EqyDak8yX8Z%2BDiWPOcfvv9sQRbWl3E0lK2ioIDXeQmfsOin66ElcXgbSmi20OZHwu6fOJQ1WPbWgi%2B4wMjGIwyouMygY6pgG766V6q9Wkdvnji3tU%2FIcVHUxTRK%2BXsa2OXxnjZIiJLXvTOQse2Wi1h01J2Jpr2yjRNTYoQ7p7tI7uHGvg4spm0RziOYF78yEYUZU%2Fl%2F5tKHaigHW%2Bs9W0NkuO%2FT5JtoPJM5vJom1s%2Fa%2By8NeRWT4jJCu4x3PcUGbN3LkpoTuO0bMpGVhLHBvGR0I6YnHsaP3fw0sJDN9Hl8mafwYb%2FH93afervS8R&X-Amz-Signature=2930ac51b3e97ac9f9f5ec4136b0ed3bedd863e6ab05aeed4a425e5b8fa0b1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

