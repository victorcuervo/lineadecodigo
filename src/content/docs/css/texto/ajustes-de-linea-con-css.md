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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647TC77HV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGH3PEcjjQgDr9iatsFHXU2V0vx8UW%2Fj6o%2FLgJw1CEuGAiBqyaxRQ7M7hqLKWxjrVIfSXSOw5rIblbqA%2BIGX5KI54Cr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCrrP0O6XDiUvJ%2B2XKtwDWtn4BfVHCdjW%2BNeotjeOCjNoJEafkzN0%2BLxVk03y3SrwAtpPunm4xD%2B41anm8%2FveNcUWQlXkqpB%2FHroxFoxt2WpvLd8zyA%2FEJ%2B7NxPdfrp8W4qcCySZQalx%2B6CZnvKda2OmuoCyT6jY%2FQSZZT1qHu2o48qTR18G6qrCZu81%2FMdb3jp6Rv3A%2Fk2kaJh5JdtKHbCLs3bcRpQSMZ%2Fpib567dxmZPQfP9T1aRaZ8JBtVX%2BJI5Oyq6qpZDUIdGwjAOzapKD4%2Bal97825WKO2678gPxzC62jCk4%2F3IVYdTwzKRdt7V2e4VjdloMudlWnUi4J8NNgRihRe4rduQDMzmydyDjrQaxrOUu5vjjBjTZEz4lolD3rDoDYjPCvM4Jy3joQXJdHU3Q%2Fd6359l1C837CEy5LrV19Y4cEX4YKpnjJIM%2FTlHU1eyYctEJm%2FvO3Cs1ztRHBYoIpeHqEcmOUjCR9u8Enux5u63SLVoKgJ4jwjBgd9Te3yCaHmRXuPsnFkL%2FVPdzYF%2F%2BZzmNLANiqUPHgP7esSYtBck%2B4ory0yRgrt47rBLXvmwd01RY%2BFMGWGyLk7xxg4LEAw8M6sp%2BrtPVHMYaXQ0pzZKLo7f7JKobvdNzFs3NdHIa8MJDy3k2d0w5NGJygY6pgGY05Dn27l9q6Wjq5ZZ4U5WLh5bgaVIHuXt3%2FhR2SM8VZuaPVsoO%2FThFzHyjWVhA5F40eMeixNPdMRIGg8ZKaHuyAWPHGgbWV1WOulPCbBEjJ7qSuoQDN59Pl%2Fo%2BQnYsgDu16spO%2FRVa7FzpT20UpnU992iGw5%2Fd6Q1b3MDrYoW6q%2BWj%2B2mP4fG3AOshb7D%2BoWf7Ry4%2FMjhyyIvWMPvnl5ISUHblPVz&X-Amz-Signature=05792f1c1b79e8a8ff7418d781d66008b18eba142cf99dc390314030ba95bf50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647TC77HV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGH3PEcjjQgDr9iatsFHXU2V0vx8UW%2Fj6o%2FLgJw1CEuGAiBqyaxRQ7M7hqLKWxjrVIfSXSOw5rIblbqA%2BIGX5KI54Cr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMCrrP0O6XDiUvJ%2B2XKtwDWtn4BfVHCdjW%2BNeotjeOCjNoJEafkzN0%2BLxVk03y3SrwAtpPunm4xD%2B41anm8%2FveNcUWQlXkqpB%2FHroxFoxt2WpvLd8zyA%2FEJ%2B7NxPdfrp8W4qcCySZQalx%2B6CZnvKda2OmuoCyT6jY%2FQSZZT1qHu2o48qTR18G6qrCZu81%2FMdb3jp6Rv3A%2Fk2kaJh5JdtKHbCLs3bcRpQSMZ%2Fpib567dxmZPQfP9T1aRaZ8JBtVX%2BJI5Oyq6qpZDUIdGwjAOzapKD4%2Bal97825WKO2678gPxzC62jCk4%2F3IVYdTwzKRdt7V2e4VjdloMudlWnUi4J8NNgRihRe4rduQDMzmydyDjrQaxrOUu5vjjBjTZEz4lolD3rDoDYjPCvM4Jy3joQXJdHU3Q%2Fd6359l1C837CEy5LrV19Y4cEX4YKpnjJIM%2FTlHU1eyYctEJm%2FvO3Cs1ztRHBYoIpeHqEcmOUjCR9u8Enux5u63SLVoKgJ4jwjBgd9Te3yCaHmRXuPsnFkL%2FVPdzYF%2F%2BZzmNLANiqUPHgP7esSYtBck%2B4ory0yRgrt47rBLXvmwd01RY%2BFMGWGyLk7xxg4LEAw8M6sp%2BrtPVHMYaXQ0pzZKLo7f7JKobvdNzFs3NdHIa8MJDy3k2d0w5NGJygY6pgGY05Dn27l9q6Wjq5ZZ4U5WLh5bgaVIHuXt3%2FhR2SM8VZuaPVsoO%2FThFzHyjWVhA5F40eMeixNPdMRIGg8ZKaHuyAWPHGgbWV1WOulPCbBEjJ7qSuoQDN59Pl%2Fo%2BQnYsgDu16spO%2FRVa7FzpT20UpnU992iGw5%2Fd6Q1b3MDrYoW6q%2BWj%2B2mP4fG3AOshb7D%2BoWf7Ry4%2FMjhyyIvWMPvnl5ISUHblPVz&X-Amz-Signature=63b6ad06b5db8c55967887bd0ad10233533be5177ec27779ad08876f0aa1b214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

