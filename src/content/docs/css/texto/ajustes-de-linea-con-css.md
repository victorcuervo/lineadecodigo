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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIMHJJG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPs3VIpdncNnmtrenx8Z9ozni1Jz7E%2BBTCOWrMK05HswIgdDwsOeB3D1wSwg98wdIlNbEqzrj4NJu%2F6IRcqX7%2Fil8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEtbrt8F0%2B3849qUQircAwsUOR%2BfSc3InTFjrr7JVKktX20RiDdqiz4lSOnhmSsHoyen4RnDJoFMykrPHoVz4dIhcKLIUhskDhMjOI3b6h%2FhWSyZbMAswVEbWwpyowI%2B6YJDCzWerye4BndfZZyH0%2FFHwv8LzYF9QQR%2F3HJdMmWdi64dxnrbkZ6pbY4vldgr4KcVyoA8CvtXntpMfIViWabIsN59vixZvxrM0zpH6Oy8Oo%2B3OEHB%2Fcy9VL4eL9MWTKtn1HSxz9RqFdRVasSXzc0Ov0zuj85F4XDXZSzr%2BF65wgylh93hf5BLL0yyPjP4h69G%2BVNSVmGaD0yok%2BioerjSq3xLG%2FesVetTm2pOxgLJPJClHGC63jVpp6jwpHIt%2BGyVYbkI%2FchLT6BgQsPAZ9tH3lQ13K3gZtfyrxIOYiD%2FVkIzrqc2d4ytUp2I%2B15ghcq2KEmfYEDyuxRgLo%2BbYw9ENfgnkbWy%2FM2W%2FalXLvvSOFQKorfpdVdxkGYn7WNG%2Fghobhry6UmjtkohlN1tXZ5HB12im9wYC%2BKmy1UAdsBncfeLJBJ6tSW9VK2x7MtqzotHD2S7%2F2cPEx7Dxd6fd2jqhMHhJeQUkv9PzQgNbVfRczcH81e4zUwHF9GE1Lxxnj0IWU6fg2Fei7MpMOfpiMoGOqUB7vo2vBGmzYk272MVZK9lOQ3BtyR%2BCnvEcB4MY47XLngKkG5Co5Aodg7VXeGW4o%2FzGFiZITz4XHCQqlvpENKfvklmOCc2zUqxtSziVLaoBy8dqjF5Kb0iAcGBhi45AfafnTi0fdoXUarnYWKUXfeYg8fSsZGxHepqVqhLxGALQZxYUjyR%2B3I8Phs6XLNmYQKIKokJkqOoQdtuy%2Fl%2BV9Rh2ahu57xP&X-Amz-Signature=46c7f44f0986a0f430858de058a2398525e740bdad22476b0a6e601b94241baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIMHJJG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPs3VIpdncNnmtrenx8Z9ozni1Jz7E%2BBTCOWrMK05HswIgdDwsOeB3D1wSwg98wdIlNbEqzrj4NJu%2F6IRcqX7%2Fil8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEtbrt8F0%2B3849qUQircAwsUOR%2BfSc3InTFjrr7JVKktX20RiDdqiz4lSOnhmSsHoyen4RnDJoFMykrPHoVz4dIhcKLIUhskDhMjOI3b6h%2FhWSyZbMAswVEbWwpyowI%2B6YJDCzWerye4BndfZZyH0%2FFHwv8LzYF9QQR%2F3HJdMmWdi64dxnrbkZ6pbY4vldgr4KcVyoA8CvtXntpMfIViWabIsN59vixZvxrM0zpH6Oy8Oo%2B3OEHB%2Fcy9VL4eL9MWTKtn1HSxz9RqFdRVasSXzc0Ov0zuj85F4XDXZSzr%2BF65wgylh93hf5BLL0yyPjP4h69G%2BVNSVmGaD0yok%2BioerjSq3xLG%2FesVetTm2pOxgLJPJClHGC63jVpp6jwpHIt%2BGyVYbkI%2FchLT6BgQsPAZ9tH3lQ13K3gZtfyrxIOYiD%2FVkIzrqc2d4ytUp2I%2B15ghcq2KEmfYEDyuxRgLo%2BbYw9ENfgnkbWy%2FM2W%2FalXLvvSOFQKorfpdVdxkGYn7WNG%2Fghobhry6UmjtkohlN1tXZ5HB12im9wYC%2BKmy1UAdsBncfeLJBJ6tSW9VK2x7MtqzotHD2S7%2F2cPEx7Dxd6fd2jqhMHhJeQUkv9PzQgNbVfRczcH81e4zUwHF9GE1Lxxnj0IWU6fg2Fei7MpMOfpiMoGOqUB7vo2vBGmzYk272MVZK9lOQ3BtyR%2BCnvEcB4MY47XLngKkG5Co5Aodg7VXeGW4o%2FzGFiZITz4XHCQqlvpENKfvklmOCc2zUqxtSziVLaoBy8dqjF5Kb0iAcGBhi45AfafnTi0fdoXUarnYWKUXfeYg8fSsZGxHepqVqhLxGALQZxYUjyR%2B3I8Phs6XLNmYQKIKokJkqOoQdtuy%2Fl%2BV9Rh2ahu57xP&X-Amz-Signature=2897b52565f6b1ccacbaffebf585f0d1e7a3db07f8d53a0a6b98eb07cb3b3771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

