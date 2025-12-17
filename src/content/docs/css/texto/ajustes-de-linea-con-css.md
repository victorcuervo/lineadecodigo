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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6AUUKO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDc70GUxvxN5OboGUl9qqF%2FMyJr6X2uufFSKU65jBptAIhAPXbNbyrGG1pIgRpmrLBeldgaROAzdbeJIQe%2FKZC2PB4Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwogCNJgY%2BofPbOOrYq3AMFNyIy0fKZcLtCcDqhFUIfYuf1XLRhk0gTflW3U5KAqwKHShvAgRphQEmc6X%2BJ2hd9pCDjjsWXF9ZDhTSty1WAzm4fsO5WqQG1rpXn%2Fuji%2FUU%2FZQvMBpCDnqExZuhdV23FN6PhOk5gK32gg%2BE7MPsRalVyHcpI9YNZ79pMjbV5ZZozV%2FqnCmJD9X16BjGPpRtyIBIvG8jpjw8KmiHn3Sn5tXk8JXpU105K6v1ESVOJTFh4bDLPhNGQ0hbgS16kXLy2F0nYtnQ%2FE4P0fdmTSJqGZK%2BF9XsCBcVNTexv%2BDLyg5UuO9mM9rPcDf5qh6dbzTmj7loZ8n1Ws4wAUcwPrdCUVhgnKk%2Fai4MxUDLhpx%2FxD%2Fx0zI9sGP94HWl0o4OQ%2FFqRVAAzmD%2FUkr293XD18bBZd2Plypa64tx3T8vrrmA5EqXExy%2BoWhrVP9xf3HmMJaevryH4p4JV%2BdeTi6sa0Sg1RWqMZ33IYglx7amd5SdRqXbQtgmRXVHlX83%2Ba5VeVqFmfc79%2B9adxK1Cp0nWpE%2BlnwvZtfnyZAB%2F7KcPY8knkMRCmSR%2FrgeqDZ%2F1FWhSFJDAaDdJwVPE3X67NXHS8%2BttCb2DkhsZyke%2FLy9nuqhyi8E%2Bn4Krx7jlHgJcajC%2F0YnKBjqkAR7djVE6Lm8mSf2rHkECc8WanWznud6uoKMSwy8axXoILn5dxu%2BzmLcKLldqJPW9AZuGerJ1%2FtrzjMOdBBDa4M27i7GpwxtOvRD8Sskpu6Zgd6exxkUUaBBRcpvvi8Bt7XUKOFwvQcHdtjT8OY8mKAlav42EUh3oCS5AfLK4mnG9Iq%2FD05tSF2R%2FEcYoE7IrDQrdxeZkvbSdtCUfpjRE9%2BAAHH9v&X-Amz-Signature=b9777cafe218b27bf48d07c75ac95412e5638d6b36e30abf8f9b230ec0fbfa54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6AUUKO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDc70GUxvxN5OboGUl9qqF%2FMyJr6X2uufFSKU65jBptAIhAPXbNbyrGG1pIgRpmrLBeldgaROAzdbeJIQe%2FKZC2PB4Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwogCNJgY%2BofPbOOrYq3AMFNyIy0fKZcLtCcDqhFUIfYuf1XLRhk0gTflW3U5KAqwKHShvAgRphQEmc6X%2BJ2hd9pCDjjsWXF9ZDhTSty1WAzm4fsO5WqQG1rpXn%2Fuji%2FUU%2FZQvMBpCDnqExZuhdV23FN6PhOk5gK32gg%2BE7MPsRalVyHcpI9YNZ79pMjbV5ZZozV%2FqnCmJD9X16BjGPpRtyIBIvG8jpjw8KmiHn3Sn5tXk8JXpU105K6v1ESVOJTFh4bDLPhNGQ0hbgS16kXLy2F0nYtnQ%2FE4P0fdmTSJqGZK%2BF9XsCBcVNTexv%2BDLyg5UuO9mM9rPcDf5qh6dbzTmj7loZ8n1Ws4wAUcwPrdCUVhgnKk%2Fai4MxUDLhpx%2FxD%2Fx0zI9sGP94HWl0o4OQ%2FFqRVAAzmD%2FUkr293XD18bBZd2Plypa64tx3T8vrrmA5EqXExy%2BoWhrVP9xf3HmMJaevryH4p4JV%2BdeTi6sa0Sg1RWqMZ33IYglx7amd5SdRqXbQtgmRXVHlX83%2Ba5VeVqFmfc79%2B9adxK1Cp0nWpE%2BlnwvZtfnyZAB%2F7KcPY8knkMRCmSR%2FrgeqDZ%2F1FWhSFJDAaDdJwVPE3X67NXHS8%2BttCb2DkhsZyke%2FLy9nuqhyi8E%2Bn4Krx7jlHgJcajC%2F0YnKBjqkAR7djVE6Lm8mSf2rHkECc8WanWznud6uoKMSwy8axXoILn5dxu%2BzmLcKLldqJPW9AZuGerJ1%2FtrzjMOdBBDa4M27i7GpwxtOvRD8Sskpu6Zgd6exxkUUaBBRcpvvi8Bt7XUKOFwvQcHdtjT8OY8mKAlav42EUh3oCS5AfLK4mnG9Iq%2FD05tSF2R%2FEcYoE7IrDQrdxeZkvbSdtCUfpjRE9%2BAAHH9v&X-Amz-Signature=74f6a7ca9a788bfa48cae19188e53100056967088c39255f57a56708268dd878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

