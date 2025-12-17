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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LMWP22A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qildf9bDcIzceur7B61MWCw0kKxMNvdQtPI%2ByUPtkQIhALfTjx4zbZQPiwWq853q3oRs%2BFKF835Uybp5osTmLohwKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXIjyJmWVRRD5vWzUq3AM7VHyHrOpt3hOSlzff0F%2FT2Zy6LWWbsOYE2KZHrdrynWiCbbekSxU7vxJJ95hd5kd%2FBCSPVaawNyJ84fe69JpLudjEE9WKYwJkZAjkpEougfEjnh1IHh4xYAHODEMIq0d0H%2BJz%2FsgDs7a4s4Y0lET0xXRPyuUTLLVR0HtL0LnPPuDFvvmgI9R%2BOoQjvCU9NLkOgo2qr6pvZf2vaKMXRC0pK0O4nIJykn66RHjB2PTJ1LdCaxDW9LQ9OwtwQRI3xUZwt%2FFKPmS1Q4VL%2FZtViqLORfTeS0YoyZGywijO8GiEEVckGF1llFMxbG1B94iczq4E058XS17rfhaAaE2u3xWEVDq52yzaFY48YF2JTvIvydgcXT16%2FXyLO1PpQwWZDarK4uoY3EZOhBZGQ8DEeXsd8bzk6TMqInY7GNUebShQvKwfcqDG2hh8CaG7UTdqdYp9HZ7vxBftfAaghxr7%2FmPOW4EY8Ra7bfmGvM5l3oKw1DXpcH7qDQPgAfdljDHH%2FrO05LHA9Oe4u1XFOLMMiPM1O3%2B3cCGxFxJ%2Fp46CL1MwGFWNVNZtOlLId23hqBu5CFk1HRhbRXW4oAATic%2BYasC13nIax%2Ba0zKgoAmUaISmVpBWxzY66k0m4zx32ZjDXgYvKBjqkAZKopdXY3nSiakk9Gi%2BGKkRHo1L4bxg44bI8b6OEeYa78PB3L3BYhngU6HmShhhCvF24ilDwaIbH%2FKHzR1EJMjtzoVtK5jTjFy5oIA5qaVTyFPpozkdOOORSSZ0B6G4cFwW839dHdAakr7IoLiSXhyMvQflE0lfKouZsTeiox9wFMBMwif0PGigTigGqIP3F69%2FkDNn3A4NP6%2FVJ%2B7Gv6faLdKq%2F&X-Amz-Signature=5a511ba02e4e1b36df1f0b5313ee1db341c2bf84a171bd099c9ad03a0e138022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LMWP22A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7qildf9bDcIzceur7B61MWCw0kKxMNvdQtPI%2ByUPtkQIhALfTjx4zbZQPiwWq853q3oRs%2BFKF835Uybp5osTmLohwKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXIjyJmWVRRD5vWzUq3AM7VHyHrOpt3hOSlzff0F%2FT2Zy6LWWbsOYE2KZHrdrynWiCbbekSxU7vxJJ95hd5kd%2FBCSPVaawNyJ84fe69JpLudjEE9WKYwJkZAjkpEougfEjnh1IHh4xYAHODEMIq0d0H%2BJz%2FsgDs7a4s4Y0lET0xXRPyuUTLLVR0HtL0LnPPuDFvvmgI9R%2BOoQjvCU9NLkOgo2qr6pvZf2vaKMXRC0pK0O4nIJykn66RHjB2PTJ1LdCaxDW9LQ9OwtwQRI3xUZwt%2FFKPmS1Q4VL%2FZtViqLORfTeS0YoyZGywijO8GiEEVckGF1llFMxbG1B94iczq4E058XS17rfhaAaE2u3xWEVDq52yzaFY48YF2JTvIvydgcXT16%2FXyLO1PpQwWZDarK4uoY3EZOhBZGQ8DEeXsd8bzk6TMqInY7GNUebShQvKwfcqDG2hh8CaG7UTdqdYp9HZ7vxBftfAaghxr7%2FmPOW4EY8Ra7bfmGvM5l3oKw1DXpcH7qDQPgAfdljDHH%2FrO05LHA9Oe4u1XFOLMMiPM1O3%2B3cCGxFxJ%2Fp46CL1MwGFWNVNZtOlLId23hqBu5CFk1HRhbRXW4oAATic%2BYasC13nIax%2Ba0zKgoAmUaISmVpBWxzY66k0m4zx32ZjDXgYvKBjqkAZKopdXY3nSiakk9Gi%2BGKkRHo1L4bxg44bI8b6OEeYa78PB3L3BYhngU6HmShhhCvF24ilDwaIbH%2FKHzR1EJMjtzoVtK5jTjFy5oIA5qaVTyFPpozkdOOORSSZ0B6G4cFwW839dHdAakr7IoLiSXhyMvQflE0lfKouZsTeiox9wFMBMwif0PGigTigGqIP3F69%2FkDNn3A4NP6%2FVJ%2B7Gv6faLdKq%2F&X-Amz-Signature=6e6be5eb762bd63cadbeb4f9d831fd1f383c06730f0b1963afaaaa5713310656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

