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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNX7U7F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiP7DTAamdoWyWdsSy4Sv9UrNJRKlI7nLlzjyGSCUc%2BAiEA4NQhZiknmD%2BxhVzHNgaplc9bGP08Y3pordasUAoIEQcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLslTjQTejA%2Bo4LWCCrcA8Mma1shzADZhEaUnYIQjFLGHtWFia%2BVpBxR5Zdsybl2c2RyXNQ3f0RQ88Z%2BtVepbicijFaraqVEPOOovhZaKiBYSB1l2iYaRUecueW0y9YkqoqxyBMcG0dz8mZ%2BUs%2BEklOdokNT6xPQAv55lv%2BlHzXx%2FS5xOKPXLYQciQpBPNxR%2FD2fI5uUc0ApO4e5x2Hr5YqU5G2PWI1B0QwWgQ4ZRtQQcpYQe9XmXU52JDe4LBQhTWiIzvpR6gNAc9srJte6c%2FzbjsWr9BERNCSRY8Z2GV80MLffmGM%2F6lWitug8sdUIaEZtH8MziwlXHmy61LBoXjGheWdpSicMmzBlihOWIouHhWFRAM9ocBQ9Xt%2BDZcGLCk3SjkA6aBH9pH%2FfX5eZHa7eHH0dojwX98VWXtAM%2BKrrBeivLyvIgf6nVDA3vbxwYTCbQDigIixU3iBaRrC7BKapMTNHbqD%2FcEQS27TMn2FGuDNkwMUxZPutMH6UmG4MV7oN%2BtVLejL6Mt73tEioekhRq6HtpmQ3HI8INIa9z%2FO%2BXVcxA%2FsUUc8llYoPKZtvcGHhiqfTZkovCnYj6Q6ZbJfBBXGf7oyQVcVY3shkeAstLyqrRPXWdhbZ1Gb8omAn0QDD%2B%2BKMKyI3ylF%2FMJ6PisoGOqUBxll9DkAAJdq2%2BaERyYJvQhRxW5A6EvItLBcyCh9DzFA47yUchPdoOZgm5uWbyIjRBsR4lrHX30yN1mrCswN65QiS3BYuf7iZ4yTY0virj6rRK3zEXc%2Bl%2BasAmRtMEP5zIrDCCMfLy35TkaDo289cdQHt5D4xzEdaWIeDfnP5AY7L7obFz9G%2Frtz8KrGej5m5%2Fhhn5c4BZwKy%2FwpUcgvsE8BQ1UYF&X-Amz-Signature=3a8945314bcaf2b7d3c79a746045a2b5fcfbda79280966734c67dc7adc7f2539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNX7U7F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiP7DTAamdoWyWdsSy4Sv9UrNJRKlI7nLlzjyGSCUc%2BAiEA4NQhZiknmD%2BxhVzHNgaplc9bGP08Y3pordasUAoIEQcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLslTjQTejA%2Bo4LWCCrcA8Mma1shzADZhEaUnYIQjFLGHtWFia%2BVpBxR5Zdsybl2c2RyXNQ3f0RQ88Z%2BtVepbicijFaraqVEPOOovhZaKiBYSB1l2iYaRUecueW0y9YkqoqxyBMcG0dz8mZ%2BUs%2BEklOdokNT6xPQAv55lv%2BlHzXx%2FS5xOKPXLYQciQpBPNxR%2FD2fI5uUc0ApO4e5x2Hr5YqU5G2PWI1B0QwWgQ4ZRtQQcpYQe9XmXU52JDe4LBQhTWiIzvpR6gNAc9srJte6c%2FzbjsWr9BERNCSRY8Z2GV80MLffmGM%2F6lWitug8sdUIaEZtH8MziwlXHmy61LBoXjGheWdpSicMmzBlihOWIouHhWFRAM9ocBQ9Xt%2BDZcGLCk3SjkA6aBH9pH%2FfX5eZHa7eHH0dojwX98VWXtAM%2BKrrBeivLyvIgf6nVDA3vbxwYTCbQDigIixU3iBaRrC7BKapMTNHbqD%2FcEQS27TMn2FGuDNkwMUxZPutMH6UmG4MV7oN%2BtVLejL6Mt73tEioekhRq6HtpmQ3HI8INIa9z%2FO%2BXVcxA%2FsUUc8llYoPKZtvcGHhiqfTZkovCnYj6Q6ZbJfBBXGf7oyQVcVY3shkeAstLyqrRPXWdhbZ1Gb8omAn0QDD%2B%2BKMKyI3ylF%2FMJ6PisoGOqUBxll9DkAAJdq2%2BaERyYJvQhRxW5A6EvItLBcyCh9DzFA47yUchPdoOZgm5uWbyIjRBsR4lrHX30yN1mrCswN65QiS3BYuf7iZ4yTY0virj6rRK3zEXc%2Bl%2BasAmRtMEP5zIrDCCMfLy35TkaDo289cdQHt5D4xzEdaWIeDfnP5AY7L7obFz9G%2Frtz8KrGej5m5%2Fhhn5c4BZwKy%2FwpUcgvsE8BQ1UYF&X-Amz-Signature=a901f6d7a5bd41d0661feefd6fdff42674ed664a82f38675741da3e52bb150be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

