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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S57A36XF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmE5IuSG4vTBaI9jrZ5ghNa37offmqE6LwKd8oe51PAAiBMseMNdlJdY7eqhznj5jekO3C3E6nPXumMEyZi3iVVDCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0s8UCEfpmKRx%2FzTbKtwDhErnlZFsfwWCTxFRVMCP4MstTpEZWX6HSz28Gwk0ERxycteVbhBCMF%2BP%2Fcg3bJOvK8%2BnIELp%2B66bDQ3W%2BC5C9IoBzcTEwfj1lFKfuyNwBrd9MbgemwzT5h3ATfTIkSe79yin3zYbtbnTRjkN%2Bm3pfFomtpV9yTzU1aI21jSmVAXbbM7J2LnJdywiHyZxND4hofuo18v2chiLww5f31neES87Epnpqz%2F5cmEsrpcKqaWJHOV%2Bc3376jTAlZ0hivWWjKmsKMmq6aodvSMB%2BgZUfBeeZWQVCKjMb4EySURhWiXRYWovcyqskMmwjKjyr3izVBGfgqjoHJeYEWo3QM6h5ObbvAP5d6UVJg%2FhgSjQLn8taN8tdfxUsALry42t%2FLjmJiMab9xhW3uCqqKt1UcXuc7OqjVFyovUFbtramwwy0ybMvNtrWTboGCZw2owuCFeDoniESBdimJ2U%2BB0yleLeQFtyPsmcF3DsepjLG939qFbUifPxvxVjyV9LTOvrfaITQBLa80YRp8OXzY%2Fx1XJMeT8VLzLNR252I39%2BH%2B22YYOBd%2B5e7Y42ENPhfx%2FOetr0lQ4OK06R3tpbxsBXYFdIUfdtaepNuZ3RxGmTCKob5njbbCbDazfPvR5%2BFUw9oCLygY6pgGz8az9ZIykYubUMBGH%2BrgP7Jikp3CBgssbYRctGvS1en%2B7df4YIvZgF1yIe3Q7m3lAV0xcK84pHlWhj%2BcF5ZCsG8joSy0na9QAwyojCoHSwJVbT1dJMU6ihS15F47AbrIfTzDqtGV%2BXAAjCgEqg88yTv5uEOi36yZIRm%2BdSQFkGPwINF8oQJwIgPaw7KN8dOs%2FSGfTUdr3ZsHyUxiUHrK7qBE4yQTj&X-Amz-Signature=f524c27a505ff991519dce73fe46ecf4c50eb0eaae4335e1d2bdf10530a7ae58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S57A36XF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmE5IuSG4vTBaI9jrZ5ghNa37offmqE6LwKd8oe51PAAiBMseMNdlJdY7eqhznj5jekO3C3E6nPXumMEyZi3iVVDCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0s8UCEfpmKRx%2FzTbKtwDhErnlZFsfwWCTxFRVMCP4MstTpEZWX6HSz28Gwk0ERxycteVbhBCMF%2BP%2Fcg3bJOvK8%2BnIELp%2B66bDQ3W%2BC5C9IoBzcTEwfj1lFKfuyNwBrd9MbgemwzT5h3ATfTIkSe79yin3zYbtbnTRjkN%2Bm3pfFomtpV9yTzU1aI21jSmVAXbbM7J2LnJdywiHyZxND4hofuo18v2chiLww5f31neES87Epnpqz%2F5cmEsrpcKqaWJHOV%2Bc3376jTAlZ0hivWWjKmsKMmq6aodvSMB%2BgZUfBeeZWQVCKjMb4EySURhWiXRYWovcyqskMmwjKjyr3izVBGfgqjoHJeYEWo3QM6h5ObbvAP5d6UVJg%2FhgSjQLn8taN8tdfxUsALry42t%2FLjmJiMab9xhW3uCqqKt1UcXuc7OqjVFyovUFbtramwwy0ybMvNtrWTboGCZw2owuCFeDoniESBdimJ2U%2BB0yleLeQFtyPsmcF3DsepjLG939qFbUifPxvxVjyV9LTOvrfaITQBLa80YRp8OXzY%2Fx1XJMeT8VLzLNR252I39%2BH%2B22YYOBd%2B5e7Y42ENPhfx%2FOetr0lQ4OK06R3tpbxsBXYFdIUfdtaepNuZ3RxGmTCKob5njbbCbDazfPvR5%2BFUw9oCLygY6pgGz8az9ZIykYubUMBGH%2BrgP7Jikp3CBgssbYRctGvS1en%2B7df4YIvZgF1yIe3Q7m3lAV0xcK84pHlWhj%2BcF5ZCsG8joSy0na9QAwyojCoHSwJVbT1dJMU6ihS15F47AbrIfTzDqtGV%2BXAAjCgEqg88yTv5uEOi36yZIRm%2BdSQFkGPwINF8oQJwIgPaw7KN8dOs%2FSGfTUdr3ZsHyUxiUHrK7qBE4yQTj&X-Amz-Signature=1152a4d8e26fc1fd24f177b27c1d34ecfcdc4aca3ddced85cf3d97e81f42fd47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

