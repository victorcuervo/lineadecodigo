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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGCO55CN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaV93cAW%2BdAMLYBhd0Jb%2BagZaDO%2Bq4i6PRqUEYny3gKAiBFwRF1L1G42yDkOs9C98tnIPfHNTwEPRV9BhLT%2Bq2mDCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMig8MQRGk0xdkCyuFKtwDzSsCsFBY8s2af%2F2lqVUHLY076zPiWROOutRXWkXgYmAlmcsQKy%2BC%2BYWVN3EuVXHF98GQXtg2BwYOos3zJWAf7MyIz4jxkk%2F%2FHU8TIgWOTL%2FxX9Njr0apCY36OfvuDMNBMpZ8%2FDSj8fq5v%2BdY46Myqm%2FNXp%2F7hIQFt8EfEU4BzsOG%2B%2Bat6GvH%2FbtZ%2BgPXG4GwG539m%2B%2B7VPly5lqSw%2BoxEKo7rBV8W34w%2FSgcHVYvB7KB9FWS2kG1KbYUpRRimWY5tUgpXv93xUJJBMXyfcMwvi7Itn8HIIT%2FrNNytUA2HuSrXbtYeyQZloomhEXJPBGejD%2BickOXg93QQR1HM%2BH35ZgHAgblGDM25HWEg4Cy2w0AMNg1HAkcKExmKwk6HhT7oX7Q3djYCPYz%2BG%2FQ2%2Bx3z2aUQqU%2FeGfNQl4pYRFCM3bTuQLA1AbWVE5OVqmGHW4tkwGPm8CbyM%2Fya0Z0He4%2Bml9v61KuqcmOT51ql%2BOyILiqoLU0IKBq5gmxQbp0pvs6UpYrHZs518j8kp%2BOT%2BfOEVknRkzJHqg%2FbxE1h2%2BDsvlys0WVMqcdu7sxUgyagqT1bAWeruIJI6oW%2FAeSyleWwm%2FMeCeJBcwocZ8orQ35WzsXes8Gq2Nj1uIvnoAw6MWKygY6pgF6PqBBGgI25xYQGCZ6aUhvgsFSpntdd0FwLn553t8a3EB4opv%2Fj2D%2F5AM1Mu%2BJHYKHN%2BN7dLqH8F6cMYru4x6vNp1n9lRj46UDMfcv2lt3RgZLf6IUKnGi8N8vUCCNNyrZZKVxfZe4xB%2F1ikkDbSlBBj5El0VZAxyBX6McDShQPGMlsCLcofL3UGSatuO1xB5u%2BequoP765C42JENb12Oxo1eAP83X&X-Amz-Signature=c15c5c172680c75ddd58a8a351cdd88323ec455040529d3611038936cbb69f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGCO55CN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaV93cAW%2BdAMLYBhd0Jb%2BagZaDO%2Bq4i6PRqUEYny3gKAiBFwRF1L1G42yDkOs9C98tnIPfHNTwEPRV9BhLT%2Bq2mDCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMig8MQRGk0xdkCyuFKtwDzSsCsFBY8s2af%2F2lqVUHLY076zPiWROOutRXWkXgYmAlmcsQKy%2BC%2BYWVN3EuVXHF98GQXtg2BwYOos3zJWAf7MyIz4jxkk%2F%2FHU8TIgWOTL%2FxX9Njr0apCY36OfvuDMNBMpZ8%2FDSj8fq5v%2BdY46Myqm%2FNXp%2F7hIQFt8EfEU4BzsOG%2B%2Bat6GvH%2FbtZ%2BgPXG4GwG539m%2B%2B7VPly5lqSw%2BoxEKo7rBV8W34w%2FSgcHVYvB7KB9FWS2kG1KbYUpRRimWY5tUgpXv93xUJJBMXyfcMwvi7Itn8HIIT%2FrNNytUA2HuSrXbtYeyQZloomhEXJPBGejD%2BickOXg93QQR1HM%2BH35ZgHAgblGDM25HWEg4Cy2w0AMNg1HAkcKExmKwk6HhT7oX7Q3djYCPYz%2BG%2FQ2%2Bx3z2aUQqU%2FeGfNQl4pYRFCM3bTuQLA1AbWVE5OVqmGHW4tkwGPm8CbyM%2Fya0Z0He4%2Bml9v61KuqcmOT51ql%2BOyILiqoLU0IKBq5gmxQbp0pvs6UpYrHZs518j8kp%2BOT%2BfOEVknRkzJHqg%2FbxE1h2%2BDsvlys0WVMqcdu7sxUgyagqT1bAWeruIJI6oW%2FAeSyleWwm%2FMeCeJBcwocZ8orQ35WzsXes8Gq2Nj1uIvnoAw6MWKygY6pgF6PqBBGgI25xYQGCZ6aUhvgsFSpntdd0FwLn553t8a3EB4opv%2Fj2D%2F5AM1Mu%2BJHYKHN%2BN7dLqH8F6cMYru4x6vNp1n9lRj46UDMfcv2lt3RgZLf6IUKnGi8N8vUCCNNyrZZKVxfZe4xB%2F1ikkDbSlBBj5El0VZAxyBX6McDShQPGMlsCLcofL3UGSatuO1xB5u%2BequoP765C42JENb12Oxo1eAP83X&X-Amz-Signature=62f95482b8f6794a8464d04f064eb76f9e8bd7402340f886fb94bdbed0463d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

