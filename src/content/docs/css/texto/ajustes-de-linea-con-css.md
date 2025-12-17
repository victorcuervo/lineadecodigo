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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRJ7YQ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmzZuLpqljh3Rn3HcXxF%2F%2Btaq53D3bxWAGfZv9dSg%2BpAiAtaE4CkYQQk5EFyjb2mxXicPlqR3bzt1jKBGGcwb7wpyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMUYy3OqjiQBepfz9WKtwDcO4j7jQeWK3wGpSZvhOD1F6%2FBY5c8o3wvpdpviGoG%2BUJ%2BrlgPeeH6jOA7aZcF99SNgAuAHhfugEyEpv78rEoAGEBcuBtHgIIJOexTzWMimk300LJbhHdlP%2FAx8ozVZZt3ik23iiNrIBCWgk33YOaa0O2pz9DgjM%2Fjvct81sgaFYYxBFLTERhdHFfVHovewH40YdZJmOPbEZ%2BMN3DzUZJ5jUSGpzSiW9rVlMprIrw3%2FRDNI20QDpRLhTBtg0WVkWZ82D9jmZ%2FlyQqxiPQ5GV5QhLIUfUIcoBjmB%2FSRktwszechBDAJx9rY1IOmLDGrwVS7MxKZOd2cplktB0wFaCkjIWJ4GMvZFvR09xSeB%2BksFO8SHZrAUhKHixebVIgNqQDFjTa8X1VK2cCRWTGp%2BzQ%2FlCghosRWhQKRo3mpTigN3AhdXX2noWLT%2Fu%2Bkpos2B7n0xO%2B7uPFqxFxAq4hNnfgc7XvZelOfgAI4hJQn1qjbd9tXlTYog1mIQ2ISM5sTWxMpQ46k9aaWnSCKfOzW3ws2puGTmbkohEjHNdeGgvMR3SZO74b%2FCR5tWZpBuqrCS5tCaaCpWXy2XoV7hZuKUCtkwNXrUVO1%2FAOwaIv5Z4Shf%2F4YYlIqS9eS%2B3yQvAwz4OJygY6pgFonqWMrakoW4yPahol6t8jG1ti3%2BMiLe%2B9S3HEXo6%2F1F%2FYshvdwaAOFRY7py2vDTuEATRVDuXclZ5vYIWAxrRzssGKFqovQH1wNWt%2Fq4FdLpKPUtfmpE4WLoMMHEjMZqVnCnoMEsiv4OUqD%2BNML1s0T4ul7PhOE34cSg9cbOE5wUOOWNfpJijyrJNYpAwJK5r4T50qfD%2FKvK1akomUhRKGvvTFVOjT&X-Amz-Signature=221673b544b2fb5f5709e545175257016e47f180cb31bc17bbb4e41e7923dd90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRJ7YQ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmzZuLpqljh3Rn3HcXxF%2F%2Btaq53D3bxWAGfZv9dSg%2BpAiAtaE4CkYQQk5EFyjb2mxXicPlqR3bzt1jKBGGcwb7wpyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMUYy3OqjiQBepfz9WKtwDcO4j7jQeWK3wGpSZvhOD1F6%2FBY5c8o3wvpdpviGoG%2BUJ%2BrlgPeeH6jOA7aZcF99SNgAuAHhfugEyEpv78rEoAGEBcuBtHgIIJOexTzWMimk300LJbhHdlP%2FAx8ozVZZt3ik23iiNrIBCWgk33YOaa0O2pz9DgjM%2Fjvct81sgaFYYxBFLTERhdHFfVHovewH40YdZJmOPbEZ%2BMN3DzUZJ5jUSGpzSiW9rVlMprIrw3%2FRDNI20QDpRLhTBtg0WVkWZ82D9jmZ%2FlyQqxiPQ5GV5QhLIUfUIcoBjmB%2FSRktwszechBDAJx9rY1IOmLDGrwVS7MxKZOd2cplktB0wFaCkjIWJ4GMvZFvR09xSeB%2BksFO8SHZrAUhKHixebVIgNqQDFjTa8X1VK2cCRWTGp%2BzQ%2FlCghosRWhQKRo3mpTigN3AhdXX2noWLT%2Fu%2Bkpos2B7n0xO%2B7uPFqxFxAq4hNnfgc7XvZelOfgAI4hJQn1qjbd9tXlTYog1mIQ2ISM5sTWxMpQ46k9aaWnSCKfOzW3ws2puGTmbkohEjHNdeGgvMR3SZO74b%2FCR5tWZpBuqrCS5tCaaCpWXy2XoV7hZuKUCtkwNXrUVO1%2FAOwaIv5Z4Shf%2F4YYlIqS9eS%2B3yQvAwz4OJygY6pgFonqWMrakoW4yPahol6t8jG1ti3%2BMiLe%2B9S3HEXo6%2F1F%2FYshvdwaAOFRY7py2vDTuEATRVDuXclZ5vYIWAxrRzssGKFqovQH1wNWt%2Fq4FdLpKPUtfmpE4WLoMMHEjMZqVnCnoMEsiv4OUqD%2BNML1s0T4ul7PhOE34cSg9cbOE5wUOOWNfpJijyrJNYpAwJK5r4T50qfD%2FKvK1akomUhRKGvvTFVOjT&X-Amz-Signature=83c7b911442f3190427c00e69b899370f90babd79a8a969484d947bde0f0b46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

