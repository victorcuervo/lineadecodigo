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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZUWJHF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXQwLmQ8eU%2F2F%2BlCe3kFaLwUlrFZFMPVukRLYjtwu9YAIgbaUKV4gUzMQgF%2BgpJnq%2FRFSg%2B2e9CRe4PGZL5CzZfAsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDC3aqcTwbgrywncPDyrcAxtvANUFLXwVed0lQe9exC5DC6WuCI8YbcZrEkG8n65yIzWq1%2FukxMDoxD%2F%2B5hZZJZPrjQfzIHvXenXJqZ9scSS68tGd3Ub63RyP7121826JOepUkV3zWIirSdHJ0c32NXuYqEGRkprquPEp0li2z%2BoRgTkMM%2BOtN2yN9VB%2BcNE2ZIeYpVtn4C89W0s0QuCRbmrgl6oLLaBSuk%2F3M%2FHHrPbRzLLEZjswtVRHV7oVn%2FYxyvCCs4aAFw6zfl%2BzoRrG8Ia62pEa9fRkhgKSltqJJbDCOJ3uPc33MDjktJxXffpk4%2FikBww31OiYEV2CmAJVmD7zTrksjTUxUNZDDYD4fn7lK2%2FPF4cBeFqvNh3wtyounm1Yu1U7pc0cOVm1Ub1w6f1%2BXT95M7HU121R3bgnq8Gu2My70q6QRlHzkw%2BbTJhLqMEgBHHHQLKXUP01Kz%2F96T158PjHtJkEZIq37AVvNEnBxTk6Yz6AH5CW1EJNeD4XQTA3s3XaFXgcOxbI%2F2FyzzB45%2B%2FBfJZCVCGrcmXSvhA29a%2BJtlyqmDngEUNwPjmW3VlaClnFEPa7hOcW4Bfh9s0bEvBtSKioYDC%2BXsu%2F4j%2BqnowglG9y1ZIJ6RcpXJftyAgcsFjwtbc%2FFN8PMPbhisoGOqUB5TA9Z8vvBFpjCFFGSxNATqTpfTrKvX0r8V3ZrE%2BMCM7lwDl5yP1q7G1%2FeHB0kz99d7s9%2FlKj3aGEqJUJ1qdPWdkXl5T8ugnz1A4%2BX5mA51yE7pQX2r3CPU%2BaWW6rulxusxbjEvurV2Cq2ZO5l73iKlueWgxit%2FCEQae5RxXv8jS%2F%2BAgSuzy73CqL4wcH2EeYalGOnlWCk3ST6HjQwp%2B9LASKZOdD&X-Amz-Signature=4658db0abab0af2aab5f2bfffd110710fc9a32bbdd52359b1b3face0ed0979a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZUWJHF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXQwLmQ8eU%2F2F%2BlCe3kFaLwUlrFZFMPVukRLYjtwu9YAIgbaUKV4gUzMQgF%2BgpJnq%2FRFSg%2B2e9CRe4PGZL5CzZfAsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDC3aqcTwbgrywncPDyrcAxtvANUFLXwVed0lQe9exC5DC6WuCI8YbcZrEkG8n65yIzWq1%2FukxMDoxD%2F%2B5hZZJZPrjQfzIHvXenXJqZ9scSS68tGd3Ub63RyP7121826JOepUkV3zWIirSdHJ0c32NXuYqEGRkprquPEp0li2z%2BoRgTkMM%2BOtN2yN9VB%2BcNE2ZIeYpVtn4C89W0s0QuCRbmrgl6oLLaBSuk%2F3M%2FHHrPbRzLLEZjswtVRHV7oVn%2FYxyvCCs4aAFw6zfl%2BzoRrG8Ia62pEa9fRkhgKSltqJJbDCOJ3uPc33MDjktJxXffpk4%2FikBww31OiYEV2CmAJVmD7zTrksjTUxUNZDDYD4fn7lK2%2FPF4cBeFqvNh3wtyounm1Yu1U7pc0cOVm1Ub1w6f1%2BXT95M7HU121R3bgnq8Gu2My70q6QRlHzkw%2BbTJhLqMEgBHHHQLKXUP01Kz%2F96T158PjHtJkEZIq37AVvNEnBxTk6Yz6AH5CW1EJNeD4XQTA3s3XaFXgcOxbI%2F2FyzzB45%2B%2FBfJZCVCGrcmXSvhA29a%2BJtlyqmDngEUNwPjmW3VlaClnFEPa7hOcW4Bfh9s0bEvBtSKioYDC%2BXsu%2F4j%2BqnowglG9y1ZIJ6RcpXJftyAgcsFjwtbc%2FFN8PMPbhisoGOqUB5TA9Z8vvBFpjCFFGSxNATqTpfTrKvX0r8V3ZrE%2BMCM7lwDl5yP1q7G1%2FeHB0kz99d7s9%2FlKj3aGEqJUJ1qdPWdkXl5T8ugnz1A4%2BX5mA51yE7pQX2r3CPU%2BaWW6rulxusxbjEvurV2Cq2ZO5l73iKlueWgxit%2FCEQae5RxXv8jS%2F%2BAgSuzy73CqL4wcH2EeYalGOnlWCk3ST6HjQwp%2B9LASKZOdD&X-Amz-Signature=d5a14f141b573715e631c89970b557d96a1ce50211877f0a2f69b602768b5d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

