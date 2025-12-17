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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFMLXJK2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDHPshTc6LWoUtDf5m%2FwBt9Oy7jI0qfDJXVpUAyTkK%2FAiA4iwtSVPmJeKJt2NXv575rwY8XGiX6pk1MKaZMoKdy7ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMW9vI0cpYuKZVsiSNKtwDl71Lnh2lQVrrlsnh2WRmnz%2BLuD4AYqdqyWwFDlQpVoxqtpC%2BE0hMYbW2v8uruhZzpTgs8Z336FQ45yQDqXka8mjRoM%2FwfNpEuAVXycb%2BrbSuIghLCFSQQQ5AytthAYJIFLSP03fRIh7NCrx23uUBKM64P0Y30llAqhxbptM%2FdlI%2BiOtfy3A3834363L8C%2BK2TapNVPJMeYGdT18pNLdmVBoVGG89pt5KoAmS1UhIAipsZ43HzhAy7OZmbbMQw9YHswimVDu86vactv78XxOsauhU7m%2BmzpUFxq0BVRhzzQre1akdD5l3HTeOd5Ls%2FJroMXS4g%2BPp7BSvqx%2FvYFjiWC2SNoUIjeIx6QQinFHlMCG2AX4qRyuSiod1cQiN8CUtMeO0IYPp6DGNGe9fZnlCT%2BE5e8ZOL8eOAPypCFIWK6dfNwL7GSOCzbqrXjknpG9mGUT08rH%2BiOKMNJpZd467vQWn%2FiqE2a%2F%2FSKmX1HP2d9%2B3UV4PT1VNpZof3scxO9D0ikISSFzzGVPSZs0Cedt0J8bnTbClgGceU6UPp%2BZN2FlX3FF27jD4I9AUaSGcyESEaKCRCZHLn3YArEJS2zgeq4IlYtSHajIoCAgUAlfQbElgsVxlSokqaGQzsb4wlo%2BKygY6pgHUUdzxy%2Fhbj5A58lo9bEKzaeZxtPGdaQGm%2B6pIVnUZY9TezrQSwgsis0P8cLtYv7woaN73P6VjDj%2BxQ%2B71j5Bxxcpy%2FgHo89%2FyVNfgfFRBo9%2Bqme7V8XLhUKXViH4sLgM8ov%2FHAu4m6J%2BNh%2FdmW2lZVWsKmQ%2FoqBxkLFUMlipxVv%2B34WG9DGil8hqqJQopFEGlY4YpeB4gVoGVrQkBiPfK7sY0SknW&X-Amz-Signature=93cf8087dae78cf3f6aa7b6cc82b9c39e4d8ab5da85278850de93cf8159339d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFMLXJK2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDHPshTc6LWoUtDf5m%2FwBt9Oy7jI0qfDJXVpUAyTkK%2FAiA4iwtSVPmJeKJt2NXv575rwY8XGiX6pk1MKaZMoKdy7ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMW9vI0cpYuKZVsiSNKtwDl71Lnh2lQVrrlsnh2WRmnz%2BLuD4AYqdqyWwFDlQpVoxqtpC%2BE0hMYbW2v8uruhZzpTgs8Z336FQ45yQDqXka8mjRoM%2FwfNpEuAVXycb%2BrbSuIghLCFSQQQ5AytthAYJIFLSP03fRIh7NCrx23uUBKM64P0Y30llAqhxbptM%2FdlI%2BiOtfy3A3834363L8C%2BK2TapNVPJMeYGdT18pNLdmVBoVGG89pt5KoAmS1UhIAipsZ43HzhAy7OZmbbMQw9YHswimVDu86vactv78XxOsauhU7m%2BmzpUFxq0BVRhzzQre1akdD5l3HTeOd5Ls%2FJroMXS4g%2BPp7BSvqx%2FvYFjiWC2SNoUIjeIx6QQinFHlMCG2AX4qRyuSiod1cQiN8CUtMeO0IYPp6DGNGe9fZnlCT%2BE5e8ZOL8eOAPypCFIWK6dfNwL7GSOCzbqrXjknpG9mGUT08rH%2BiOKMNJpZd467vQWn%2FiqE2a%2F%2FSKmX1HP2d9%2B3UV4PT1VNpZof3scxO9D0ikISSFzzGVPSZs0Cedt0J8bnTbClgGceU6UPp%2BZN2FlX3FF27jD4I9AUaSGcyESEaKCRCZHLn3YArEJS2zgeq4IlYtSHajIoCAgUAlfQbElgsVxlSokqaGQzsb4wlo%2BKygY6pgHUUdzxy%2Fhbj5A58lo9bEKzaeZxtPGdaQGm%2B6pIVnUZY9TezrQSwgsis0P8cLtYv7woaN73P6VjDj%2BxQ%2B71j5Bxxcpy%2FgHo89%2FyVNfgfFRBo9%2Bqme7V8XLhUKXViH4sLgM8ov%2FHAu4m6J%2BNh%2FdmW2lZVWsKmQ%2FoqBxkLFUMlipxVv%2B34WG9DGil8hqqJQopFEGlY4YpeB4gVoGVrQkBiPfK7sY0SknW&X-Amz-Signature=52b3a468e7cde7ef4edfd37b9c19fba8ac5387a9c5e67f73f69de64c834bdf57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

