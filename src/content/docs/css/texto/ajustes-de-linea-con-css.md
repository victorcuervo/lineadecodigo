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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQ5VQYW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B4052M0MlPM8xHkNMLov%2B1PV8wjc9uy9fVFxOyI9o7AiEAj%2F9Hl6FsBsulTo779V87Pn2MrA%2BYgv6aexKjnWIwKn8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb%2F4SGr0a4XyKugxircA5ABCeeMhdKzlJ4O%2B7gFI65dTlgLJAR7nVN3Vvnsiz7eKI6EoZsTiFZ9fuNSsti6Msbzj7Z1szQPtxJY%2FcdCHQVLMUxdSzOPdGTYDFMZC8rCrzsIHyIBfe5BkCIPHQyXpD%2BAjHuCTpEmOtOOX9A9pR%2BiSB1aSjR4WiF3wikjQMXQM861RLb276pts5djc6vzI50%2FuOFmuRB%2BmMC1WOBKbNB8Ob91V3cqTt1bM8Z5ejLqLoBxSKYukw1j7%2BpKCNM9tqiU23ESbRclU72aARSNoqpXdW5xKYAf0USn2Vz0bEKk%2Fb80ZKGMqEVDAhfx2DCS1ccrBXLarqvo20SO373t%2B3wNDrtTbElVwNx%2FrIQvcYBJEsc1Azb5d3P8jQ4T4XXri%2FeXxpwWUbRFSBGyDUtogRbeQVVgxpY13GQ90bGSiqoJ6lbGAZ%2B71lljNC7uyVT025NTAJW9rPzw%2F5e7Bq8xx9yL50GvsXz0SCmwfuIgjP%2Bsf8DTAIgzhbSXgUVXHDQI0zn1I3utqHkom6PdPEwgH2L5PJkCcjLpazr98eYUyTHXZxKIZD4O2F76rOEDwfXaPach51z%2B85PdlHSgw8uhZShyip4JZTM%2BhrHSq9pDsq8hiVoeTgid2is9UJjXMNaei8oGOqUBUCv%2FgbVfoq%2BuoMHAiXYcB81VC5LpOLHQM%2B8ycUltZ7DAPn00QeWg77hkPsVB1LrC5KNxmtm7GrKK9P100D1LdkkFj8TKWZFdVE4Vdo82%2FgNKvYGu8pi31CVIhibtOtb2ooo2eSbPUuFulC2sqgqe0Hwve0GQJe%2FPDtc0X3utg45uDL4jk1okqWJ3RIjGTAgB2aTfDNnKLHDKwhY6YQkb22xtzLHT&X-Amz-Signature=33523a48fede736df8fe3aabd255f88e32303ce1749a3138a176d1931ea39d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQ5VQYW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B4052M0MlPM8xHkNMLov%2B1PV8wjc9uy9fVFxOyI9o7AiEAj%2F9Hl6FsBsulTo779V87Pn2MrA%2BYgv6aexKjnWIwKn8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKb%2F4SGr0a4XyKugxircA5ABCeeMhdKzlJ4O%2B7gFI65dTlgLJAR7nVN3Vvnsiz7eKI6EoZsTiFZ9fuNSsti6Msbzj7Z1szQPtxJY%2FcdCHQVLMUxdSzOPdGTYDFMZC8rCrzsIHyIBfe5BkCIPHQyXpD%2BAjHuCTpEmOtOOX9A9pR%2BiSB1aSjR4WiF3wikjQMXQM861RLb276pts5djc6vzI50%2FuOFmuRB%2BmMC1WOBKbNB8Ob91V3cqTt1bM8Z5ejLqLoBxSKYukw1j7%2BpKCNM9tqiU23ESbRclU72aARSNoqpXdW5xKYAf0USn2Vz0bEKk%2Fb80ZKGMqEVDAhfx2DCS1ccrBXLarqvo20SO373t%2B3wNDrtTbElVwNx%2FrIQvcYBJEsc1Azb5d3P8jQ4T4XXri%2FeXxpwWUbRFSBGyDUtogRbeQVVgxpY13GQ90bGSiqoJ6lbGAZ%2B71lljNC7uyVT025NTAJW9rPzw%2F5e7Bq8xx9yL50GvsXz0SCmwfuIgjP%2Bsf8DTAIgzhbSXgUVXHDQI0zn1I3utqHkom6PdPEwgH2L5PJkCcjLpazr98eYUyTHXZxKIZD4O2F76rOEDwfXaPach51z%2B85PdlHSgw8uhZShyip4JZTM%2BhrHSq9pDsq8hiVoeTgid2is9UJjXMNaei8oGOqUBUCv%2FgbVfoq%2BuoMHAiXYcB81VC5LpOLHQM%2B8ycUltZ7DAPn00QeWg77hkPsVB1LrC5KNxmtm7GrKK9P100D1LdkkFj8TKWZFdVE4Vdo82%2FgNKvYGu8pi31CVIhibtOtb2ooo2eSbPUuFulC2sqgqe0Hwve0GQJe%2FPDtc0X3utg45uDL4jk1okqWJ3RIjGTAgB2aTfDNnKLHDKwhY6YQkb22xtzLHT&X-Amz-Signature=018d0443f7ab6c537f4399c559ae6e9d23dfd9e187a4edb0e5d1ab3991a78ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

