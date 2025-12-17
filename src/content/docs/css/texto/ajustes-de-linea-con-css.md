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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPLVQDR6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsb888U%2FZhdkmE79FjwtvRXsCNtBWloPFpNa4AbikH1AiEAqljRB%2BcFH0d15eXLwN%2FR6qmSLTDuDvO0%2B1YGvX4yhJkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKaiKOlfPLgcv7WS3yrcAxlJimtTZ8stKa5EyEY%2FNSIXiqno2MieQa2MR1RB9uFOhW6XTu5wp%2F0sDikzzz%2BPIMGKsaK%2BU1bTnjq%2FXvYgshhDu6STnB1yqpShHexG7MHwnPJQBzAsbB5%2FJL%2F505%2FIt8qBpdIE%2FJg%2F2jw7D47ARoRASAlGDtS1syfUDtlq8KxvJ%2BkTrhjzSCtonWl9LCDdUa%2B2hifgXhBt3qnmCIsudZk22t4ForOy%2FGDAXIr7qvQmR8dT1g9PHTNnwVMKHmQVBhxrtuFHVsttowS%2FCNxeIECuGfR2DuP%2FA8HGhCznkIHr%2F7%2FYkrvbzM9NlTAiNf5r6gtlFjok42E%2FYD6fayUN0yPRvjbyK2lY6oJFmjBshoBWOR8YgFUla8sl3uF1rxhF9DrBdv0PIVj75s82BcURLPCc76rrrMz4yg%2BfjzqCV4k1%2FHE9bLVbXCPqWKtuHJWYxxOAGm3miee8JNjAeqLRLbqF%2FPDERvHlv9lC1FAkwZcq2PLnVtzCPhciLvYG4xBu9v6bNnkNFt5agUgj7KIwOepqVTyO8uXJtiTBYIJkdVmNty5ZU%2FbhdY1FIBf9qmkdg0mLR2RZV9hEC%2BN0H5JwDqG90vGzhQazzVeakuFivlaQD4HPYijkdSe8OHM1MICWiMoGOqUBt9gddPiEF%2B7Scv7ljDXeSiGL5sY4hUwO1VcNOJ9jEdDRFV6HemkWmNWkV7ZavRu8xl9fRxPOG2OyFgivZfAYTZEsIJq1hc6ssLwogfn8veWD%2FWZMcAGH08aJf%2Fh3pZ2c89LDv%2BisHV%2FhSVPhF0l5Izcg0auHfmAS1hhCrA5l8Y6cPLPgYIiVg7dBr6ihd8mWU01JUXQwcFBHrn21VjAwa1bXDh2T&X-Amz-Signature=0ea233d6fd39ece3033bc3c4618bbf88e2e96cbf1a7922599d8e1059e7599f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPLVQDR6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsb888U%2FZhdkmE79FjwtvRXsCNtBWloPFpNa4AbikH1AiEAqljRB%2BcFH0d15eXLwN%2FR6qmSLTDuDvO0%2B1YGvX4yhJkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKaiKOlfPLgcv7WS3yrcAxlJimtTZ8stKa5EyEY%2FNSIXiqno2MieQa2MR1RB9uFOhW6XTu5wp%2F0sDikzzz%2BPIMGKsaK%2BU1bTnjq%2FXvYgshhDu6STnB1yqpShHexG7MHwnPJQBzAsbB5%2FJL%2F505%2FIt8qBpdIE%2FJg%2F2jw7D47ARoRASAlGDtS1syfUDtlq8KxvJ%2BkTrhjzSCtonWl9LCDdUa%2B2hifgXhBt3qnmCIsudZk22t4ForOy%2FGDAXIr7qvQmR8dT1g9PHTNnwVMKHmQVBhxrtuFHVsttowS%2FCNxeIECuGfR2DuP%2FA8HGhCznkIHr%2F7%2FYkrvbzM9NlTAiNf5r6gtlFjok42E%2FYD6fayUN0yPRvjbyK2lY6oJFmjBshoBWOR8YgFUla8sl3uF1rxhF9DrBdv0PIVj75s82BcURLPCc76rrrMz4yg%2BfjzqCV4k1%2FHE9bLVbXCPqWKtuHJWYxxOAGm3miee8JNjAeqLRLbqF%2FPDERvHlv9lC1FAkwZcq2PLnVtzCPhciLvYG4xBu9v6bNnkNFt5agUgj7KIwOepqVTyO8uXJtiTBYIJkdVmNty5ZU%2FbhdY1FIBf9qmkdg0mLR2RZV9hEC%2BN0H5JwDqG90vGzhQazzVeakuFivlaQD4HPYijkdSe8OHM1MICWiMoGOqUBt9gddPiEF%2B7Scv7ljDXeSiGL5sY4hUwO1VcNOJ9jEdDRFV6HemkWmNWkV7ZavRu8xl9fRxPOG2OyFgivZfAYTZEsIJq1hc6ssLwogfn8veWD%2FWZMcAGH08aJf%2Fh3pZ2c89LDv%2BisHV%2FhSVPhF0l5Izcg0auHfmAS1hhCrA5l8Y6cPLPgYIiVg7dBr6ihd8mWU01JUXQwcFBHrn21VjAwa1bXDh2T&X-Amz-Signature=d7092775bb795311d9c926f716dd3da3658a2af83a5b036ac8488de6bbbf1569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

