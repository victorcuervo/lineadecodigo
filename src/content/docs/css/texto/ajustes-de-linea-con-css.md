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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677UILC72%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMzjB7J9mTVp%2FZA%2B361k5U5sVgUIN3u6dPlsvJhh7FzAiEA4uHZs%2FqrSnhtSeIwlKEgMU0GgoiBleTH5a0ycovcrggq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPpzimXVrRR2lCmdHCrcA49o0I9PXQC7QzJVZhpuDRLBP9BPC2nTswOWb0QyHfqS3mwiP%2B1MG7WxhlO4uPNJvz7Is8H0p3XVNhPootZaOkJws%2F%2B5h5jEc%2FjhgWUd9KUVvGO%2F6VAf%2FjEGCe89zXcQat%2Fk7rfzlo%2F9shOZkW%2FDFj5DnEiVYjXsa%2B2JT6pdpAV1x28QbRTQX8NfDy%2BdsZcUd2Z11s42TL1ISx1%2BcW7DTCwT58N6hpubpcIefuha6x5wj5LBzI%2FsYcWN%2FqcDxTa0ildNZLmJvNzXCBT0zlw0fohmP5NHRZ3XnIMKGm0FB3HorR2JznI3EEsrjGwUDnKyyLWFQereHZ3iUmohA%2BudPBVvfCjCTjPAugnwfQVZ7%2FtrNjMIPzo8IL1bDI4aBpqU8jFud6MKyFI%2BENxP6eNqiGbRh5WDMyGybr4XlIUl883smvhdjSRJuICoJoGgZoCKu701JsEadbqNVDFsqbBHdT%2FlHRQXbB5FkqU7MS0plkUs%2FnpDWuDnz5rVNx7JRzaJFKLrR0BoAZU%2BJ9%2FyvEI%2BJKD%2BTK3xEZLFgQ%2B7sA8R%2FImHXdv3bJNcXy61Vl8ZbroV3DQKkReinxi59WZgniYfNNyvbNfr%2Buogy2ljbQfpKvR3XVHFUBG6pTn5fT8dMOqCicoGOqUBjnxfIOlkoRRMDgVxS%2Bm2xGFiVbMhCwHs2iMn83C7vJK5loeYV5OqAyvLn4tKLw%2FK36knRxeC%2FVoFwupCvj4%2BjNlXJbuG82tulGAEKpjpLzy%2FFd%2BRLcITobx7f%2BYNSur3ca6yq6gsUxKunRiGrTzXjMz4h5iIvBCWTOWjGHmA%2FGQSjclG84nsgGMoyM53Vl%2FmIHVelaf%2Fwg0gExW6ry0ON7z6Fvie&X-Amz-Signature=c144c083111e054fa5a5593a97cc4b406850befa2ca298616c639c09ed243e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677UILC72%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMzjB7J9mTVp%2FZA%2B361k5U5sVgUIN3u6dPlsvJhh7FzAiEA4uHZs%2FqrSnhtSeIwlKEgMU0GgoiBleTH5a0ycovcrggq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPpzimXVrRR2lCmdHCrcA49o0I9PXQC7QzJVZhpuDRLBP9BPC2nTswOWb0QyHfqS3mwiP%2B1MG7WxhlO4uPNJvz7Is8H0p3XVNhPootZaOkJws%2F%2B5h5jEc%2FjhgWUd9KUVvGO%2F6VAf%2FjEGCe89zXcQat%2Fk7rfzlo%2F9shOZkW%2FDFj5DnEiVYjXsa%2B2JT6pdpAV1x28QbRTQX8NfDy%2BdsZcUd2Z11s42TL1ISx1%2BcW7DTCwT58N6hpubpcIefuha6x5wj5LBzI%2FsYcWN%2FqcDxTa0ildNZLmJvNzXCBT0zlw0fohmP5NHRZ3XnIMKGm0FB3HorR2JznI3EEsrjGwUDnKyyLWFQereHZ3iUmohA%2BudPBVvfCjCTjPAugnwfQVZ7%2FtrNjMIPzo8IL1bDI4aBpqU8jFud6MKyFI%2BENxP6eNqiGbRh5WDMyGybr4XlIUl883smvhdjSRJuICoJoGgZoCKu701JsEadbqNVDFsqbBHdT%2FlHRQXbB5FkqU7MS0plkUs%2FnpDWuDnz5rVNx7JRzaJFKLrR0BoAZU%2BJ9%2FyvEI%2BJKD%2BTK3xEZLFgQ%2B7sA8R%2FImHXdv3bJNcXy61Vl8ZbroV3DQKkReinxi59WZgniYfNNyvbNfr%2Buogy2ljbQfpKvR3XVHFUBG6pTn5fT8dMOqCicoGOqUBjnxfIOlkoRRMDgVxS%2Bm2xGFiVbMhCwHs2iMn83C7vJK5loeYV5OqAyvLn4tKLw%2FK36knRxeC%2FVoFwupCvj4%2BjNlXJbuG82tulGAEKpjpLzy%2FFd%2BRLcITobx7f%2BYNSur3ca6yq6gsUxKunRiGrTzXjMz4h5iIvBCWTOWjGHmA%2FGQSjclG84nsgGMoyM53Vl%2FmIHVelaf%2Fwg0gExW6ry0ON7z6Fvie&X-Amz-Signature=6051ed9a53f75bc3bb1a68f86cb3dbf56839b2581e5489df190bc2d2a1b62c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

