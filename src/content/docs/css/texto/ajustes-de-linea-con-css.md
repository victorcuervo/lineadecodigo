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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRFXDAR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BCr7HBhfndqFVm3NalaFEhNHoXD25umPKXoZ5ijfwZQIhAIWMOgPDAjNERumQjAldcfLqfX5YRg57CfA1BfYY3VRcKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysoGjSl5DxItoGH9cq3AN0LR%2BiP0dDTfEOtqyYDe0duQdZnzdPRdVOBh7Wg59HMtsmYVjIBYkqPqISRMAL%2BppOXVmzaIE8Nxr3hptV%2FUNrLvscT9ZK9C8YvLDTHZDQ8ilAttVAMy1c%2FX4QNi335fXPg7%2BupTb7pRwXRhKWBSOJPGMKBvvaSiYbFZimuQjtXQho8J5VRLAJ8OMwHclVWp%2BMsq0U3GiaQltVOcYogi81UEw%2Bs0hFq7nmgRGnn3oEsXVjxfglAw6vObHB0nyZXSkZ35iYsBXYwAXcwn0sV%2FccUl3Rh8p2KQ9amHXSjCYOgRTV6eurJXEsvnnxI3hgm86JlmS7ukSKBXr%2FPonuPMBt3j0KMBfxGefWWTlLzRyBiGI%2FBae1HLY3vS8bZBZnNa7JNgY4Zv%2FwlCfmt5kodHBj0165L%2F28Y1FXZapYo7KtxVrGP6BbOs8TJhr1VUPh9AtBA%2Bux%2FaIs808Hfbw8qK3Oo201gs67IQ50Su6BNXpM1ZpLKEmPKuFWK512ZKklo5N5ikiF0vUbbuFpBxGaPynKwSTsNlWaZewilT1xh7NzsYUehmdlB8HPRTUJuAx6hUmv%2BLKMJ7%2FDRR1lk2q9Xp3jImKMABlpqclt8pUpiQUkKgpznkvLdtwbwqRxWDDli4zKBjqkAcW8iP4GK7bSWMEThiDcmwG4N0F9AV75SOxYGfrvErd0HlOC2t%2FgwIZyi%2FrsjacbptcSTPSlqOnTUYVTi%2BzCa0jDluXYz9KCH60stZgyN3sUmYT%2BHbVE58F3pifejTIMxjFXShQjrXnuzqmiyXfJA%2B2IIRTpzdlU4xubR4DmD9YdBbW72rEKb%2Ftr6hI%2FoJHmib%2BjPZv7lUO2%2FChADk2txYDCONiR&X-Amz-Signature=5ca16b1bba18db6111661fa42834f52ae099633f475be5acc9911b765624ae33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRFXDAR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BCr7HBhfndqFVm3NalaFEhNHoXD25umPKXoZ5ijfwZQIhAIWMOgPDAjNERumQjAldcfLqfX5YRg57CfA1BfYY3VRcKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysoGjSl5DxItoGH9cq3AN0LR%2BiP0dDTfEOtqyYDe0duQdZnzdPRdVOBh7Wg59HMtsmYVjIBYkqPqISRMAL%2BppOXVmzaIE8Nxr3hptV%2FUNrLvscT9ZK9C8YvLDTHZDQ8ilAttVAMy1c%2FX4QNi335fXPg7%2BupTb7pRwXRhKWBSOJPGMKBvvaSiYbFZimuQjtXQho8J5VRLAJ8OMwHclVWp%2BMsq0U3GiaQltVOcYogi81UEw%2Bs0hFq7nmgRGnn3oEsXVjxfglAw6vObHB0nyZXSkZ35iYsBXYwAXcwn0sV%2FccUl3Rh8p2KQ9amHXSjCYOgRTV6eurJXEsvnnxI3hgm86JlmS7ukSKBXr%2FPonuPMBt3j0KMBfxGefWWTlLzRyBiGI%2FBae1HLY3vS8bZBZnNa7JNgY4Zv%2FwlCfmt5kodHBj0165L%2F28Y1FXZapYo7KtxVrGP6BbOs8TJhr1VUPh9AtBA%2Bux%2FaIs808Hfbw8qK3Oo201gs67IQ50Su6BNXpM1ZpLKEmPKuFWK512ZKklo5N5ikiF0vUbbuFpBxGaPynKwSTsNlWaZewilT1xh7NzsYUehmdlB8HPRTUJuAx6hUmv%2BLKMJ7%2FDRR1lk2q9Xp3jImKMABlpqclt8pUpiQUkKgpznkvLdtwbwqRxWDDli4zKBjqkAcW8iP4GK7bSWMEThiDcmwG4N0F9AV75SOxYGfrvErd0HlOC2t%2FgwIZyi%2FrsjacbptcSTPSlqOnTUYVTi%2BzCa0jDluXYz9KCH60stZgyN3sUmYT%2BHbVE58F3pifejTIMxjFXShQjrXnuzqmiyXfJA%2B2IIRTpzdlU4xubR4DmD9YdBbW72rEKb%2Ftr6hI%2FoJHmib%2BjPZv7lUO2%2FChADk2txYDCONiR&X-Amz-Signature=178c0937e6926b0389ea3140057a4f8362b53ea91ef65bc4d1c37d07c3a541f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

