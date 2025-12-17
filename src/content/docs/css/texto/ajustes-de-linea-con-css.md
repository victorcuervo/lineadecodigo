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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66GNKLQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BiELvrWOGj%2FJyUaKLPraymBTUdf4p2mhsKUh7Etq7yAIhAMvlXzYPXzK3rPlaDJ1kVO%2BXs3jILyVoBJvvPKQ3Xr9eKv8DCHYQABoMNjM3NDIzMTgzODA1IgxZFxN%2FYtcnBb8fXhEq3APvsThaRBrSyG%2Fpncl7gNOpT%2FV2PmRHQUnOwgPtfc22ld9gWPoyM5u6CdGT3Qabw6x8q1iOif3qzyDl4MAnhSzOCGzbruv%2FpGK%2BpvMTLLQhwrcxd0AvxH%2FN12uom9JC7msXM9GgeSz2MHNcHHpuSEVvOxfedkDBtJrY4WUIVfPH3zQQhEIl4cSAoLuEgjd6ppDhEnGua80iuGfHkOeHpawZDU41z9UsWwiVecZyjYmQaexmgHShDBP0hjbu6wYyJFKeaIbCLRN7p8fxhCvoApebACF6lhXSr8ygDAYeoIFQe%2BYGbbllDcmG6%2BCFwX7IFou3dZW08pjWlX63JLFt5lSGOOU0%2FFVkrZ88amwK72%2FWidXJie070UFz7XOkdZEmWp%2Fu2LR0aebtYzpcnWvIKvE0pIak9xB2M%2FtJTEaif%2FK47hNyUfuFdnrdqCiYwA7zGaYJXdSg%2FQCmWGBFQXSnuyeh8g2QNrcsnT7cpZiyzG63x74YEzmehDWOA7nyEHW%2FsoWwBHC%2BB4Ys1SidKQ3fehS7bWKWKg%2B1sFExGZ7yy08cTAYXtro2nmw0EGmIh%2BqXomX8hOfGrlsPpcnxwnmnudDg5r7KyW%2FBS7oPCnt1mlSxtP9ube1a79zqN5iXjTCi6ojKBjqkAZpKFGRa4G7W%2Bt04W5EI4%2FIw7sHBPnA7weuPEEYSGQe93Z3eim6mIqSPjMsGYsiuO2tarS9%2FWQzj4ucjHkbWBnUSrBzNypQiAuFku5BsILnrR4%2FLAfdqllehf99XrpZy2%2FYA8xhak%2BrTzreI4ivOM6QTUrYUoxDcZgF5a3YK7tNTxgDIGfZAeFhlkwqE%2B9laKoY9tKCDkutez65EnxdK%2FnABnH0J&X-Amz-Signature=ccf0946b60063b374a468502104459c1120cc5dbb9169d0440701a65dc34d5ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66GNKLQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BiELvrWOGj%2FJyUaKLPraymBTUdf4p2mhsKUh7Etq7yAIhAMvlXzYPXzK3rPlaDJ1kVO%2BXs3jILyVoBJvvPKQ3Xr9eKv8DCHYQABoMNjM3NDIzMTgzODA1IgxZFxN%2FYtcnBb8fXhEq3APvsThaRBrSyG%2Fpncl7gNOpT%2FV2PmRHQUnOwgPtfc22ld9gWPoyM5u6CdGT3Qabw6x8q1iOif3qzyDl4MAnhSzOCGzbruv%2FpGK%2BpvMTLLQhwrcxd0AvxH%2FN12uom9JC7msXM9GgeSz2MHNcHHpuSEVvOxfedkDBtJrY4WUIVfPH3zQQhEIl4cSAoLuEgjd6ppDhEnGua80iuGfHkOeHpawZDU41z9UsWwiVecZyjYmQaexmgHShDBP0hjbu6wYyJFKeaIbCLRN7p8fxhCvoApebACF6lhXSr8ygDAYeoIFQe%2BYGbbllDcmG6%2BCFwX7IFou3dZW08pjWlX63JLFt5lSGOOU0%2FFVkrZ88amwK72%2FWidXJie070UFz7XOkdZEmWp%2Fu2LR0aebtYzpcnWvIKvE0pIak9xB2M%2FtJTEaif%2FK47hNyUfuFdnrdqCiYwA7zGaYJXdSg%2FQCmWGBFQXSnuyeh8g2QNrcsnT7cpZiyzG63x74YEzmehDWOA7nyEHW%2FsoWwBHC%2BB4Ys1SidKQ3fehS7bWKWKg%2B1sFExGZ7yy08cTAYXtro2nmw0EGmIh%2BqXomX8hOfGrlsPpcnxwnmnudDg5r7KyW%2FBS7oPCnt1mlSxtP9ube1a79zqN5iXjTCi6ojKBjqkAZpKFGRa4G7W%2Bt04W5EI4%2FIw7sHBPnA7weuPEEYSGQe93Z3eim6mIqSPjMsGYsiuO2tarS9%2FWQzj4ucjHkbWBnUSrBzNypQiAuFku5BsILnrR4%2FLAfdqllehf99XrpZy2%2FYA8xhak%2BrTzreI4ivOM6QTUrYUoxDcZgF5a3YK7tNTxgDIGfZAeFhlkwqE%2B9laKoY9tKCDkutez65EnxdK%2FnABnH0J&X-Amz-Signature=a0215c60b0ddbd2b671b8f4e8df1cd80c5c9a5ee1e39b11baf3d21534bb56ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

