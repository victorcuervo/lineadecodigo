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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RBIT4T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyCx7UsuFvDd7DUHc04WjvK%2B2fdJrOg3OMusXAXY14twIhANQ2Y7pl%2Bxj4Uy%2BMXgxBOcws5qRgQm0Qo2i7PE8AyCwdKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8fyhbgRvyhJdLeigq3AO0yFdmAdXQvMkLfKd4%2Fucx2FIvj5o5kqjfSIBq7sBLaGJjS%2BX%2BWLLBB%2Blm5%2FF%2FgVVxyaQUHirkRUTnGSWFQxPXfylwA8wQ3z1O2XpZj%2FivUi%2BoIr7iQ%2FLqPeYy10T3MyNbH6WivgdtkI55LsTGt6P4elni68ePldrMkd4Vk9F4JcyQ2l6LsLaBch2%2FldWBsCGUWl1FLIkl06T36ZFoppq02BxlbvrKPcLCOubJ7yc%2BoVCrBavpLSTvvHWM9pUakr8IfFdgPIsvhDoxKhsn%2B0bkZkx0%2BAY366HiH0wGpN%2Fv8UH89jrgtmDqiprMbOCYVI%2BuEBHUWqbXIhM5zlOAU%2FxtGqKo71RaKRHMwDM2%2FIO41phi0fhaUQDUad4%2FFAv7liNeKzpLzfsafPTrIQkThNA2vUTaTzsTICFX%2BDhoc6McsWanqYLDfrm6sPEN%2BHUymAwtpKpbLmwK7tuiVdbIt6eaTp3OlemKZbLMq7aSkL5iq60tB%2BxcwT96niCI7QwC7EL%2BH4Ty9ezbpzCxTxSfC0aptzyYO%2FDKT%2FAA1l9OYV6qPqRQRs6yNiD0X1IGnZa5g%2FiVeSXKgQ6E3cthJdRfx6UaILrHxLKPPnG6qT5IEsJix3hp5QOG8IEoWqUqSTDZnovKBjqkAYKzLeaTfDMHEG7kyyC5PAEzdVpRgREblXYjPTI19rrw3hj9PG%2FF5FOgw1Anta6YtvpCR%2BNspwTJng55%2BdfB2kpkB7bme4%2B6RNoeSjsyjHR3m0%2B4x1g54M8f%2B%2FHqQzosEvN%2BN8bpGPry%2FGd3Jix3AODNWMWScyrM6TqVeJwQzxmJjmfiOZ6lRan6%2FoekvR2wAiqtABLwu4mCTx6ryW64KEPHqCzQ&X-Amz-Signature=1a29a7820dcff66295bf39645aebfd6a2d4ee8de22734a2cb9dbce849ee46700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RBIT4T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyCx7UsuFvDd7DUHc04WjvK%2B2fdJrOg3OMusXAXY14twIhANQ2Y7pl%2Bxj4Uy%2BMXgxBOcws5qRgQm0Qo2i7PE8AyCwdKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8fyhbgRvyhJdLeigq3AO0yFdmAdXQvMkLfKd4%2Fucx2FIvj5o5kqjfSIBq7sBLaGJjS%2BX%2BWLLBB%2Blm5%2FF%2FgVVxyaQUHirkRUTnGSWFQxPXfylwA8wQ3z1O2XpZj%2FivUi%2BoIr7iQ%2FLqPeYy10T3MyNbH6WivgdtkI55LsTGt6P4elni68ePldrMkd4Vk9F4JcyQ2l6LsLaBch2%2FldWBsCGUWl1FLIkl06T36ZFoppq02BxlbvrKPcLCOubJ7yc%2BoVCrBavpLSTvvHWM9pUakr8IfFdgPIsvhDoxKhsn%2B0bkZkx0%2BAY366HiH0wGpN%2Fv8UH89jrgtmDqiprMbOCYVI%2BuEBHUWqbXIhM5zlOAU%2FxtGqKo71RaKRHMwDM2%2FIO41phi0fhaUQDUad4%2FFAv7liNeKzpLzfsafPTrIQkThNA2vUTaTzsTICFX%2BDhoc6McsWanqYLDfrm6sPEN%2BHUymAwtpKpbLmwK7tuiVdbIt6eaTp3OlemKZbLMq7aSkL5iq60tB%2BxcwT96niCI7QwC7EL%2BH4Ty9ezbpzCxTxSfC0aptzyYO%2FDKT%2FAA1l9OYV6qPqRQRs6yNiD0X1IGnZa5g%2FiVeSXKgQ6E3cthJdRfx6UaILrHxLKPPnG6qT5IEsJix3hp5QOG8IEoWqUqSTDZnovKBjqkAYKzLeaTfDMHEG7kyyC5PAEzdVpRgREblXYjPTI19rrw3hj9PG%2FF5FOgw1Anta6YtvpCR%2BNspwTJng55%2BdfB2kpkB7bme4%2B6RNoeSjsyjHR3m0%2B4x1g54M8f%2B%2FHqQzosEvN%2BN8bpGPry%2FGd3Jix3AODNWMWScyrM6TqVeJwQzxmJjmfiOZ6lRan6%2FoekvR2wAiqtABLwu4mCTx6ryW64KEPHqCzQ&X-Amz-Signature=9961a28d3c2965c6da9ee03fe12bcb6d342be49bf8bc3ad688df5ba664c60457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

