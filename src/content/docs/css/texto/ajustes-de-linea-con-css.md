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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJLCGWWS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCenNisgtxlAESJ%2FFNE3%2FaZF5qIz9trm1Wa3lCJKEA1AIgJTgwwCpkTMy6MQNjhJicCkHCUi3RlqhDXxUMRU3r7%2BoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESkn5c%2FWOGVavdFdCrcA%2BCLvqZQRkrqXwauT4pJB%2Bj6ZUJI%2FqwlzOJeG44UjTAPqNyUFpCFTLgtduP2DjH%2Bjix6ozTQZobyqVZBtIuwB55CFjCeRVEKWG3QwbAmatrEPdXPzlnN3NjxCpaONowdtbXoboBDKuGRzkUIN%2FAlLi6qTHo%2BXwCgXJ4But5AIUQGryG7xSAqHxriR0fA9oMsCxP2OI75d967Gi3NC7HldafcAZUkwRKugyTUD4d%2BDn%2FkJ21V5lYINetmGy3JnkBtPYW0W3gzLNtmyo%2FwymZzv1R5WszMaQsqbtdUeV7DjemRb%2FLdBa9fSVw4i10MgAxfntowGTXaZluUPFk0ifGNJyRBRk6kw5%2B1rYAPqQEGO7LbB7iN5wWIh%2FfyCSrmkbN5p5P1AnyHfdVHOu%2FjxFn4FBw4wfCA4HPo%2FHm6kDf6%2FL2MuB3Cr%2BCsanA5AfLJz2vrE4oKUNOsOrKT3v3KIQXp0fcOOXSjbq%2BFsr3jqPBFXCZaLZQA2mOx145HecLK6bBK8XoHFd5jXeLy4IhlFsDgj3RtyglO%2F3MzSLyS2YQuLv%2BLmjDfX8RU6tCeMCIWTETzqYHRTDd45xYrhwYF6%2FUQAgkDuZePJO9vAuymw7o1ILiiXmbLgbNJTOjgjwx%2BMMmgi8oGOqUBP10JV4UsUBarP6MrIjJI2sPvL46rdpVY3HK%2F7OysxTHZnFnf4eTueChHvXUNYet%2F%2FKPoqNzMXaLS6z4lztZZwj48GnVMC6ABQ5g3JZKqhN890glcWmU7xtP9Nu0P2ZoMzjzSZ9%2BNproI7LX1o0d2BtOK6qSkvOtB4sNRuF%2FSH9z9bG%2FMEUGYUBIdzwaIXcO9Dl6aPMo3AA0x5pxiuyuPayJ8QTVv&X-Amz-Signature=9240e7586fb2c3aa593236060658c021a96c0071c84f7b7f48a94ae7451fe6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJLCGWWS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCenNisgtxlAESJ%2FFNE3%2FaZF5qIz9trm1Wa3lCJKEA1AIgJTgwwCpkTMy6MQNjhJicCkHCUi3RlqhDXxUMRU3r7%2BoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESkn5c%2FWOGVavdFdCrcA%2BCLvqZQRkrqXwauT4pJB%2Bj6ZUJI%2FqwlzOJeG44UjTAPqNyUFpCFTLgtduP2DjH%2Bjix6ozTQZobyqVZBtIuwB55CFjCeRVEKWG3QwbAmatrEPdXPzlnN3NjxCpaONowdtbXoboBDKuGRzkUIN%2FAlLi6qTHo%2BXwCgXJ4But5AIUQGryG7xSAqHxriR0fA9oMsCxP2OI75d967Gi3NC7HldafcAZUkwRKugyTUD4d%2BDn%2FkJ21V5lYINetmGy3JnkBtPYW0W3gzLNtmyo%2FwymZzv1R5WszMaQsqbtdUeV7DjemRb%2FLdBa9fSVw4i10MgAxfntowGTXaZluUPFk0ifGNJyRBRk6kw5%2B1rYAPqQEGO7LbB7iN5wWIh%2FfyCSrmkbN5p5P1AnyHfdVHOu%2FjxFn4FBw4wfCA4HPo%2FHm6kDf6%2FL2MuB3Cr%2BCsanA5AfLJz2vrE4oKUNOsOrKT3v3KIQXp0fcOOXSjbq%2BFsr3jqPBFXCZaLZQA2mOx145HecLK6bBK8XoHFd5jXeLy4IhlFsDgj3RtyglO%2F3MzSLyS2YQuLv%2BLmjDfX8RU6tCeMCIWTETzqYHRTDd45xYrhwYF6%2FUQAgkDuZePJO9vAuymw7o1ILiiXmbLgbNJTOjgjwx%2BMMmgi8oGOqUBP10JV4UsUBarP6MrIjJI2sPvL46rdpVY3HK%2F7OysxTHZnFnf4eTueChHvXUNYet%2F%2FKPoqNzMXaLS6z4lztZZwj48GnVMC6ABQ5g3JZKqhN890glcWmU7xtP9Nu0P2ZoMzjzSZ9%2BNproI7LX1o0d2BtOK6qSkvOtB4sNRuF%2FSH9z9bG%2FMEUGYUBIdzwaIXcO9Dl6aPMo3AA0x5pxiuyuPayJ8QTVv&X-Amz-Signature=a3e4aed9eeba4b88a7b74ab56ec6e4d1a4f0effbd3edeb9a37d18caa5117f5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

