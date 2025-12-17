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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5HXITNC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8s70oxzh%2FqQb68eGM%2BINaO6N1V%2BLM3KkyRuOAx27vRQIgH2m29pSklTK12dUxkYl2hkhr%2BsrTbjJi6LSzRoRwILEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDN7C%2BP2rvotXr8DamSrcA7so5IQDrr4jtXaVfLwhgO0mktTZ50F5ufiMrhbNrlHo0KBl%2BcFxup0zxoj8E8jPzKxRGnu1KJSptny5UVQd77SNF2isPa0AM1kJHkr1i0xO3iJNkg4uckRvR3lR0BW4JTHeyHgygzXTcB7OlrChz%2BT1ZcnkBvJE5jLYWAlpIVt1hYEuBHS1ze9m9c1bhWWUmQ1%2Fa7ybA1E5kFNtCtvwkB93WrvyCAL1v4O%2B%2BY00KXAFM6aUfXJcCC6aJEJfKRPYXoQj0CkrdwpO936mYmI2%2B3gs%2FOkBcmdl5mcXtW%2FPilmHmJxo6fQnoqb3EKgiCP%2F2ahrRNhO8mDmjA8qDHBHUMxGAmkbSiXWiMvCeNGO%2Fx%2F3ce2xE2Hg0zxC5vjoEIY5aJ5I44rnAOxk5p%2BWZJB2z1%2FQ6TV7%2BPKZbiH4pI01eDLDnSbgbThj5Jad0JRGpQ%2FTD50iUAFPb65Y25XEkax49x9H68%2B81bYn%2BaSsSy27o16hLiaxKvtRlCsvHdIn61Api1Qi8q85naKU3HTqtgF4yxSikRmOdHbPaC%2FiGf2femwNl4nSbXFeFeV4jDoiIYCLNNtwuHW%2F85EUL9h2x1KicE4eyEiSDZyV0lfDj9%2BQfWROCZODBqHcFQwYWnikoMOiWiMoGOqUBe1Cs5hSXMvDq7YMuubAq31jnYA8ZsT39f0UrCEwbqx2mfrJU28sTQzSnO0jrdpxYz6p0jPamq9lE34DGCyXlteGn2%2B0EH8bNM3OFmxfZE0ErPKA6ppWeOCOEQcWidfwr%2BePvUqNDrU8kXP9P8A3re1pvqiysfet8wiTefrfg9RdSH9sPMHvv9Wwf2F12h69dQJpZHhTgUs%2FJX1pW5I8nsVLVkRxB&X-Amz-Signature=e5dc87ca2f33ef47ecb94ffb58a4b287367589f3a994acfcaf35f83ab9e64095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5HXITNC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8s70oxzh%2FqQb68eGM%2BINaO6N1V%2BLM3KkyRuOAx27vRQIgH2m29pSklTK12dUxkYl2hkhr%2BsrTbjJi6LSzRoRwILEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDN7C%2BP2rvotXr8DamSrcA7so5IQDrr4jtXaVfLwhgO0mktTZ50F5ufiMrhbNrlHo0KBl%2BcFxup0zxoj8E8jPzKxRGnu1KJSptny5UVQd77SNF2isPa0AM1kJHkr1i0xO3iJNkg4uckRvR3lR0BW4JTHeyHgygzXTcB7OlrChz%2BT1ZcnkBvJE5jLYWAlpIVt1hYEuBHS1ze9m9c1bhWWUmQ1%2Fa7ybA1E5kFNtCtvwkB93WrvyCAL1v4O%2B%2BY00KXAFM6aUfXJcCC6aJEJfKRPYXoQj0CkrdwpO936mYmI2%2B3gs%2FOkBcmdl5mcXtW%2FPilmHmJxo6fQnoqb3EKgiCP%2F2ahrRNhO8mDmjA8qDHBHUMxGAmkbSiXWiMvCeNGO%2Fx%2F3ce2xE2Hg0zxC5vjoEIY5aJ5I44rnAOxk5p%2BWZJB2z1%2FQ6TV7%2BPKZbiH4pI01eDLDnSbgbThj5Jad0JRGpQ%2FTD50iUAFPb65Y25XEkax49x9H68%2B81bYn%2BaSsSy27o16hLiaxKvtRlCsvHdIn61Api1Qi8q85naKU3HTqtgF4yxSikRmOdHbPaC%2FiGf2femwNl4nSbXFeFeV4jDoiIYCLNNtwuHW%2F85EUL9h2x1KicE4eyEiSDZyV0lfDj9%2BQfWROCZODBqHcFQwYWnikoMOiWiMoGOqUBe1Cs5hSXMvDq7YMuubAq31jnYA8ZsT39f0UrCEwbqx2mfrJU28sTQzSnO0jrdpxYz6p0jPamq9lE34DGCyXlteGn2%2B0EH8bNM3OFmxfZE0ErPKA6ppWeOCOEQcWidfwr%2BePvUqNDrU8kXP9P8A3re1pvqiysfet8wiTefrfg9RdSH9sPMHvv9Wwf2F12h69dQJpZHhTgUs%2FJX1pW5I8nsVLVkRxB&X-Amz-Signature=df3ea1199a4aa50fa46ffe79f92270cab5450d6f9061ae732cf26c012aca8cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

