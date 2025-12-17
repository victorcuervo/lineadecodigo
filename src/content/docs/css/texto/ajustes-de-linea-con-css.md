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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TEVKJR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4OwDLx1ku5eerYcDpFu7RGUzsftuJdovD5QuXycSM3AiEA3wK5vfltixcA%2FCh97GaaOvo6Y5xMqb%2BtbcCMkuBtIW4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDC5Rb%2FaA%2BuOYjxhN4CrcAz6vbF0yGCHagKgjsKit%2FPWTyl5HFX2XI5EjkO6ZCXGREHc7kICyE2NHlELdmJz4tFwwReQuCJLP3jYycQOOH4V5Ar%2FvA%2BthOx%2FjE5NmG6eOB9zBThkU1CFb1PVugO0ZeOWfxeM%2BUOnnMfKc%2B79B1oPAVOF5A1KNgOM1STQvUaq21LSlPwY%2Btpm5jDdT2WszPZpfvEIlod%2Bhq8hugzviSADiEhxqcel3AYOGVQva2Xfu5ZTTdF1BN7iRo8J0n0k49TvwI7n6YMqOw3dO4x2IJZQxt2d6h4uT1zugDa49Rwvvkl8JVkOTfe5RSxXlNh6Fxb30lFCLPZrk4%2FApQMIE%2BYbn18782VsXnGIiej8P%2B%2BV9PoUBaY68eLxBrU%2FfGklPnyJABySUcCiZfYSi39tE5YtzbFyE35ergGrjlnjt8UjIWjqledXj3FeODilkMulzUY2utI8YlsmoqZ7qjhpKL6U%2B7cqmo%2FnH5aPPSCj%2BrPjGekKEt9dRLNpd%2FTj%2BWLJCYkK0KqE7q4JUX8GacKfFQR4CqZ1irizPjIu0K7y3IdGBWBJqlyFY5OPRdHnEkVv2cNHFFa3lR7qV9nvGIz799p8YWfiF5TMITPUw%2BBp3jbD%2FneNkKvBv45pa3U7XMJTRicoGOqUBbLE0poN%2BGMY6%2F4%2FYsPYqvcH6N0USTqAvdsa2I9iwg6Y4idE9BA%2FtldM1mT2MOtEOjhoEjg4niP%2BmEAD8B5Pi6qL1TXL1Q9pt9UmsGPZNEi76ngQwmnryCxvQc6P%2FpgxL%2Bqu7fbNdrkXSPL3z5ut362ku6KSb9UkhPJ5%2BbE3r4ggt3M8HKxNd6F5%2FDjY%2BrYt0uIZUjhq45bwBZBJ%2Fpyirwhs3o1C3&X-Amz-Signature=6b27570e0f49518e01b4a99cd0bf238ef2707bffb3adff55222922c278397343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TEVKJR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4OwDLx1ku5eerYcDpFu7RGUzsftuJdovD5QuXycSM3AiEA3wK5vfltixcA%2FCh97GaaOvo6Y5xMqb%2BtbcCMkuBtIW4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDC5Rb%2FaA%2BuOYjxhN4CrcAz6vbF0yGCHagKgjsKit%2FPWTyl5HFX2XI5EjkO6ZCXGREHc7kICyE2NHlELdmJz4tFwwReQuCJLP3jYycQOOH4V5Ar%2FvA%2BthOx%2FjE5NmG6eOB9zBThkU1CFb1PVugO0ZeOWfxeM%2BUOnnMfKc%2B79B1oPAVOF5A1KNgOM1STQvUaq21LSlPwY%2Btpm5jDdT2WszPZpfvEIlod%2Bhq8hugzviSADiEhxqcel3AYOGVQva2Xfu5ZTTdF1BN7iRo8J0n0k49TvwI7n6YMqOw3dO4x2IJZQxt2d6h4uT1zugDa49Rwvvkl8JVkOTfe5RSxXlNh6Fxb30lFCLPZrk4%2FApQMIE%2BYbn18782VsXnGIiej8P%2B%2BV9PoUBaY68eLxBrU%2FfGklPnyJABySUcCiZfYSi39tE5YtzbFyE35ergGrjlnjt8UjIWjqledXj3FeODilkMulzUY2utI8YlsmoqZ7qjhpKL6U%2B7cqmo%2FnH5aPPSCj%2BrPjGekKEt9dRLNpd%2FTj%2BWLJCYkK0KqE7q4JUX8GacKfFQR4CqZ1irizPjIu0K7y3IdGBWBJqlyFY5OPRdHnEkVv2cNHFFa3lR7qV9nvGIz799p8YWfiF5TMITPUw%2BBp3jbD%2FneNkKvBv45pa3U7XMJTRicoGOqUBbLE0poN%2BGMY6%2F4%2FYsPYqvcH6N0USTqAvdsa2I9iwg6Y4idE9BA%2FtldM1mT2MOtEOjhoEjg4niP%2BmEAD8B5Pi6qL1TXL1Q9pt9UmsGPZNEi76ngQwmnryCxvQc6P%2FpgxL%2Bqu7fbNdrkXSPL3z5ut362ku6KSb9UkhPJ5%2BbE3r4ggt3M8HKxNd6F5%2FDjY%2BrYt0uIZUjhq45bwBZBJ%2Fpyirwhs3o1C3&X-Amz-Signature=4e7707e85dd933867b4a2f666e2ce904ba5986c41d5283421268215f5c610d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

