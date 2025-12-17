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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ONMILTL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBewRsivgJclZ3X2c9Doida6USN2sn%2B%2BIf89amtx4nb7AiAtLzGxk3iIQwztaVIeBQuJ24IFHbKCYpJg2L4JfrQawyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMIxBvtI5foBFKaIsVKtwDcY49hU5uxwYjbIJFdcDKDrswJE13wzZN9RltmRj%2BnniT18UGfjBh1H%2Ff%2B5Hx3PdHFUGMz%2BV%2FFP8hD4xQdWgbTIbiif0nkf4l2LvyUnVVgKSv%2BlNQOLYeGO5uBRIzvS1puGAjlxD5qcXHqBrQT4%2B%2FzNTxDsZ0wTB4IOzaP4lTlQIE6GoUw97gh8MuoU%2FUk8ldIq9yviA3LLBsjh%2BR8Tf49EbpChPVxuHnojNtkBG0JRJANNa3I9E4jw7zcaXbJApv6l2kRFtkOcO0K7AQOdgRyaf6WLU4u1F%2Fvi6kv%2FvORCGwkhN2mv9XY514N6STFK5RdIdAT3z9S900raZ6uKpJn7XK4NxyORKqnAifg0%2BRncV%2F01P7Up6T5wXx7KCsSdSQ81n9zVU3H8%2B8A63P3QSHGDl%2FhP5hV0A4hkMf9EIW5Yx4vVOoY8jj81VDP2hppsK25EJL5STWcCyu%2FEU19gPaueSRReNx%2FfB22QAbHC9FOR6VztTmxrJifLioaT%2FUxZ7W7BH0UlUcL82U2QNZI%2BwqnFXaKbo16A%2BiIsD0IZma0RtBMvMXH%2B0rILx9jih8r%2FSudnk1etFirDkMQoS9Q%2BfiwbzK%2B39RvqHgnJgwjkX6K3r%2Bs3e%2FrKOStgky03ww1eGKygY6pgFS3jkPNw6paRO1qCv0mQc%2BKK37IcB7qgUtC8MV0MbE8lk0gA1Z6OZnQw1%2BRSxpCwciXpMywJnVhKG%2FFc%2BO6iTqAOQ9iK%2FTxnbaTY%2FzC7UoWq1kUOY9r9AMiJIVXXDT2MckkhHqG6TSPa1Bge0yiIzHTTZ6SzgeOWqvAt2pka4afIaGScK9SDipBDmHSmnUMvb41%2BW8FMJhVDkSNC%2FpCNtNRz9i3U4m&X-Amz-Signature=0cb7a6e72f73133bc901f4d093ff15ef4b7d4623bdf09d8004864e03091ce7e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ONMILTL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBewRsivgJclZ3X2c9Doida6USN2sn%2B%2BIf89amtx4nb7AiAtLzGxk3iIQwztaVIeBQuJ24IFHbKCYpJg2L4JfrQawyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMIxBvtI5foBFKaIsVKtwDcY49hU5uxwYjbIJFdcDKDrswJE13wzZN9RltmRj%2BnniT18UGfjBh1H%2Ff%2B5Hx3PdHFUGMz%2BV%2FFP8hD4xQdWgbTIbiif0nkf4l2LvyUnVVgKSv%2BlNQOLYeGO5uBRIzvS1puGAjlxD5qcXHqBrQT4%2B%2FzNTxDsZ0wTB4IOzaP4lTlQIE6GoUw97gh8MuoU%2FUk8ldIq9yviA3LLBsjh%2BR8Tf49EbpChPVxuHnojNtkBG0JRJANNa3I9E4jw7zcaXbJApv6l2kRFtkOcO0K7AQOdgRyaf6WLU4u1F%2Fvi6kv%2FvORCGwkhN2mv9XY514N6STFK5RdIdAT3z9S900raZ6uKpJn7XK4NxyORKqnAifg0%2BRncV%2F01P7Up6T5wXx7KCsSdSQ81n9zVU3H8%2B8A63P3QSHGDl%2FhP5hV0A4hkMf9EIW5Yx4vVOoY8jj81VDP2hppsK25EJL5STWcCyu%2FEU19gPaueSRReNx%2FfB22QAbHC9FOR6VztTmxrJifLioaT%2FUxZ7W7BH0UlUcL82U2QNZI%2BwqnFXaKbo16A%2BiIsD0IZma0RtBMvMXH%2B0rILx9jih8r%2FSudnk1etFirDkMQoS9Q%2BfiwbzK%2B39RvqHgnJgwjkX6K3r%2Bs3e%2FrKOStgky03ww1eGKygY6pgFS3jkPNw6paRO1qCv0mQc%2BKK37IcB7qgUtC8MV0MbE8lk0gA1Z6OZnQw1%2BRSxpCwciXpMywJnVhKG%2FFc%2BO6iTqAOQ9iK%2FTxnbaTY%2FzC7UoWq1kUOY9r9AMiJIVXXDT2MckkhHqG6TSPa1Bge0yiIzHTTZ6SzgeOWqvAt2pka4afIaGScK9SDipBDmHSmnUMvb41%2BW8FMJhVDkSNC%2FpCNtNRz9i3U4m&X-Amz-Signature=373fa7968129a568fde68d79c119e1047364f6ca4081c5a611e64eb7b70c6f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

