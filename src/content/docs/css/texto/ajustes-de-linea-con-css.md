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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCFELZN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAnq2Ry3w%2Fq9%2FAVqjeerrD%2Bt9sm783qFdz9VD021CKnAiBmpMFF8HYi9bpDgY095XeUUyxgYiEcBItogmk80o6DPiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCs10RcoUirtzrmMkKtwD7e0yJHaqZv8tFDSIclNlRtNr0Ag5QVvUWXgT6tXXMsP0YnNGxWUj%2B4JswojvsOCX7U2hFXv%2B5Mc%2B%2BcZo%2FTcwni4q4%2Fg%2F1P1pBiT%2B5I4IM8pneJPn7oyJDXCdy0cejoFvWgLm%2BpHl43wWB5rv%2FeIfDY9er24z1p2TrRK%2BQQj42jBehdAbYDOoARwjVH2Zh6z7R5OOR%2F4NZxRHPpNw%2Fv3nhZOF1gAho6x2Wljg6XlABQlW1xhAxHh68SJDbcrCYa6l%2B2E84K9QJPtE6fLoC3yEN12xAwh%2FkO1A0b07DxD5p6Oyy5lZZFmIbr%2FUzpDhkjYmlIDY1dZSmUfWkwT0CRKZEBjXoe2MedMSmKJzZj25%2FI4YX%2BKWrYgPOiyEL3v%2F033HEYDZzpcLBTjTqKmesvZkrGZTixPAHYxG2rcAXvY3AX6GxCR7h0118iGejzH90Eqa25A%2FMHr1GODKL0YbZyIICCBr2HACTkFxA02aLHK5I1yBwTv4OC04NzCo6WmHx0lgyvo2ouBNus8WyGEpiyxeXFU79mEXgjclG9j9g3LDVNOg4Eeg3spFogDDAiqTrDCNxs%2BO1r4vCvCQOShmremKbdw8%2FzUF1nZdGS%2F4koClfO6Ck6LkndbeTXE8GbIwvoqMygY6pgHeSK6LpwO5g6AzsU%2FZa2bslMpy70Qo7DZglwaVHQjFL%2F1yi82Z46dV5eKsWopg%2Fy4PD0kLJ%2FoZZ0en4m2gEYywnKLmzOfRXsXRRIWgywZa7mjExslxCuVCoQsM5PtC5t%2BJ2UeRGImFOJJJCj3Cfan%2FP6NG2PnZtlDKDTXdOjU1n3sGzm2PV%2FHlmd9BMe11MYzl0LxcclRoWdAN92nKdMcxTNuR7TRo&X-Amz-Signature=28e3b3a856eb6c76a2c0b7d67f71b32518efaa8ecfa8fb0c7bafd0a2506cee67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCFELZN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAnq2Ry3w%2Fq9%2FAVqjeerrD%2Bt9sm783qFdz9VD021CKnAiBmpMFF8HYi9bpDgY095XeUUyxgYiEcBItogmk80o6DPiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCs10RcoUirtzrmMkKtwD7e0yJHaqZv8tFDSIclNlRtNr0Ag5QVvUWXgT6tXXMsP0YnNGxWUj%2B4JswojvsOCX7U2hFXv%2B5Mc%2B%2BcZo%2FTcwni4q4%2Fg%2F1P1pBiT%2B5I4IM8pneJPn7oyJDXCdy0cejoFvWgLm%2BpHl43wWB5rv%2FeIfDY9er24z1p2TrRK%2BQQj42jBehdAbYDOoARwjVH2Zh6z7R5OOR%2F4NZxRHPpNw%2Fv3nhZOF1gAho6x2Wljg6XlABQlW1xhAxHh68SJDbcrCYa6l%2B2E84K9QJPtE6fLoC3yEN12xAwh%2FkO1A0b07DxD5p6Oyy5lZZFmIbr%2FUzpDhkjYmlIDY1dZSmUfWkwT0CRKZEBjXoe2MedMSmKJzZj25%2FI4YX%2BKWrYgPOiyEL3v%2F033HEYDZzpcLBTjTqKmesvZkrGZTixPAHYxG2rcAXvY3AX6GxCR7h0118iGejzH90Eqa25A%2FMHr1GODKL0YbZyIICCBr2HACTkFxA02aLHK5I1yBwTv4OC04NzCo6WmHx0lgyvo2ouBNus8WyGEpiyxeXFU79mEXgjclG9j9g3LDVNOg4Eeg3spFogDDAiqTrDCNxs%2BO1r4vCvCQOShmremKbdw8%2FzUF1nZdGS%2F4koClfO6Ck6LkndbeTXE8GbIwvoqMygY6pgHeSK6LpwO5g6AzsU%2FZa2bslMpy70Qo7DZglwaVHQjFL%2F1yi82Z46dV5eKsWopg%2Fy4PD0kLJ%2FoZZ0en4m2gEYywnKLmzOfRXsXRRIWgywZa7mjExslxCuVCoQsM5PtC5t%2BJ2UeRGImFOJJJCj3Cfan%2FP6NG2PnZtlDKDTXdOjU1n3sGzm2PV%2FHlmd9BMe11MYzl0LxcclRoWdAN92nKdMcxTNuR7TRo&X-Amz-Signature=51f09a51a7b7e47ae6025b2b7aea3350908f12db0da185869103572ebcbf57b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

