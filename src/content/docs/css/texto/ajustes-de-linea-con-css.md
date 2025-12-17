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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUV77UT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BwN9pmjLGd7osP8qfxp0kqc4AKl2UVbDFyP96zID3UAIhAOpgYlHjir8FEQRNADSZwzGbVuDPo%2F7jpHyQedeJMCiqKv8DCH8QABoMNjM3NDIzMTgzODA1IgwsnYH0fgaDRCi3ldoq3ANf0pcsjro6aEsD0Z8zb3K5fL7GLxDJraFMoU%2B%2FVL%2Blx8vif%2FeGyLSVmMTiJIBOjIa8%2FX7sX%2FVf%2FCvYQFUODFVrhhGWvLXz7USed0VOzZ8ufIe0Py2wwpjzkc4JglK8NBOvZHLnb%2FiRzLY7EdTW68OBFFSfHznRaXCnWvxMwBIgyoFyHwPmaT4voKlix%2BelvRb4FnSrRjDBahDXSeytB71SCGh0LPgSYa5xbwKgfKrnm%2BHfKkDcBkhbUkqkyNgul65C%2FFcNoC3sxRS%2Ft0SSuJ7aO6ID0phQfxyPgn9qoOVE0hDCVzTLEP%2B7n7tmUQVrQLDPtu6rJndZgo1VL1fOPFYxCFXn3w68tl5IHPpraVnxI8LsuBRpVD306qk3n3Gxx4i5wVqHUPbeNgu%2BoSie0Ka2F9aG1LBLmpCtDzRrxlHVIYQcqHWVB0%2BtQ7KiLpzDkxmDkwo%2Fkx6EckmDQBHGLjg21PcBVkolRgopTHy5hO3DJ%2BRXq3nbSTUMF9qxymW0UUGpanDYdY2%2Bz%2Bgx7pjZhSA%2FsZMeWzag%2FbuPAhH%2Bvjsqh9LyZfpeedameKFMgl2a%2FyaF4lc%2BUp2VFFw7MxFJ4AhbsQ8Uir2JlpOWqm%2Famd8XS4T%2FUVuxOijjeR1rWDCt4YrKBjqkAQdUf5bq%2B7l8Mz32l31BtV7FqZXT5PHqaGG6rFTVTrAJWFcurOsCA3t6WK78g%2B7aUApl9fazRJHcxwZzS4%2FKm3leBkY%2FfulC%2F2oyxGTTfETT7YwHBPSObsjPyUXB1X6jLUad7Ld9lwFw5YDtuhZdO%2BddmgeohqfiQ3cW%2B3h5k4MLtQLBjebGyzGFqHrGQvg8NzIfIpxLzAstN0pRSQzC0vmMO6ik&X-Amz-Signature=7f8e15e531a59d58d3069de9195df66f3c602bf8addd7710da1edc33625cddfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUV77UT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BwN9pmjLGd7osP8qfxp0kqc4AKl2UVbDFyP96zID3UAIhAOpgYlHjir8FEQRNADSZwzGbVuDPo%2F7jpHyQedeJMCiqKv8DCH8QABoMNjM3NDIzMTgzODA1IgwsnYH0fgaDRCi3ldoq3ANf0pcsjro6aEsD0Z8zb3K5fL7GLxDJraFMoU%2B%2FVL%2Blx8vif%2FeGyLSVmMTiJIBOjIa8%2FX7sX%2FVf%2FCvYQFUODFVrhhGWvLXz7USed0VOzZ8ufIe0Py2wwpjzkc4JglK8NBOvZHLnb%2FiRzLY7EdTW68OBFFSfHznRaXCnWvxMwBIgyoFyHwPmaT4voKlix%2BelvRb4FnSrRjDBahDXSeytB71SCGh0LPgSYa5xbwKgfKrnm%2BHfKkDcBkhbUkqkyNgul65C%2FFcNoC3sxRS%2Ft0SSuJ7aO6ID0phQfxyPgn9qoOVE0hDCVzTLEP%2B7n7tmUQVrQLDPtu6rJndZgo1VL1fOPFYxCFXn3w68tl5IHPpraVnxI8LsuBRpVD306qk3n3Gxx4i5wVqHUPbeNgu%2BoSie0Ka2F9aG1LBLmpCtDzRrxlHVIYQcqHWVB0%2BtQ7KiLpzDkxmDkwo%2Fkx6EckmDQBHGLjg21PcBVkolRgopTHy5hO3DJ%2BRXq3nbSTUMF9qxymW0UUGpanDYdY2%2Bz%2Bgx7pjZhSA%2FsZMeWzag%2FbuPAhH%2Bvjsqh9LyZfpeedameKFMgl2a%2FyaF4lc%2BUp2VFFw7MxFJ4AhbsQ8Uir2JlpOWqm%2Famd8XS4T%2FUVuxOijjeR1rWDCt4YrKBjqkAQdUf5bq%2B7l8Mz32l31BtV7FqZXT5PHqaGG6rFTVTrAJWFcurOsCA3t6WK78g%2B7aUApl9fazRJHcxwZzS4%2FKm3leBkY%2FfulC%2F2oyxGTTfETT7YwHBPSObsjPyUXB1X6jLUad7Ld9lwFw5YDtuhZdO%2BddmgeohqfiQ3cW%2B3h5k4MLtQLBjebGyzGFqHrGQvg8NzIfIpxLzAstN0pRSQzC0vmMO6ik&X-Amz-Signature=0f345efb204093b72b2e3518c294f6d23a28636cb71654db2c6e66fe22d20478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

