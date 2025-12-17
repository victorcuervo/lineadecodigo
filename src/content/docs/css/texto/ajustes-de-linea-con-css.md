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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB74EYOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHaDR%2F%2FULoSOS8w4psli1Vj6gcBuEB3dXQpt%2F1HCm7bAiBu2cyPZ2JbKjbSCrVtkSwTBdPJOIi%2F6dadRY9p7Bh3QCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaT1qCySnwCqHUI1nKtwDxrfHFQL8lzquqZaowYB6nbkcoW8fIkpdLMIekqJ66QU80TOQX5PSrBojwnaEbFY387HI8klWEmsbW%2FrhkM6JwUJA7SUKYl4mpVDBZ%2BsRNvZx9jJzRngbihHaVedJhvPmmepTSmmbCjrzbTij2lpNidSiJjzySWxyf9%2BUd56z9GWmZY8qB%2BtuUokMV6MMZgKQxURxlhR1J3tW8KoV0FAUnFNmdDGBk7W8H3zEWj6X6PjvaP1NEjID4w5J4JHkVTRaRs9D9j2Au2fmbE%2F4O972GfEFBPjr%2FhNLGjhSQNpV3qkb%2F0Jp2WZ7QYmGwzybxNQk%2F3O5Vh%2BGxm3TSqoHzXrWu3a3BUvq5bZD3bIyUDVdsuv2G7M5kSUZ0qt%2Bll4we5Aufk%2FG8Cliqyk9irG8WgH%2B4uUykOyWtOfpD7sfDw%2BjC5J316rkaqwAFP1uk8A0mPLCIfrQ3mqOcH4GNjKZp1ZhYuKIf2zbchesLvl76jvuUQPnggfvCExyVz2rgEvj2fwnzu8pyyOSSc7O7%2Fmkd%2F7lb3K59SKjqIphF%2BGvXXAl8gPNvQNjvhKZcWfuO0jOEm7vK3RRGy8qMbooXAHuUsJbhhpqSoeHacwuGq9mfU5L00kPpCG0PVRQk4WITEowzZ6LygY6pgEPZvn4Z7bcZi7HISz4hHvo1LOZ%2FCbvawHYwV1UBzJ1YeObGN8VPbhvow8Xkanyq4v5%2FALRwX8sncnU8F76d8LAvKWkR3p9xTG%2Fy2M4PtTA9Wv0SIIHQ6Ak0%2FLF7cSVF8A3MNyw1iqocNtjnuHDlE4nTPWuSbLl7OdLNaaDPwy8inDJAMqbeen2F%2Bj6SPZ1LpWRrbTpSsY6k3B0FlPP2t2bz%2BBbLqJY&X-Amz-Signature=8e5a701b22c4799dfd26355b92f5c188cba333755f13a2e0cac557511a8b0106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB74EYOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHaDR%2F%2FULoSOS8w4psli1Vj6gcBuEB3dXQpt%2F1HCm7bAiBu2cyPZ2JbKjbSCrVtkSwTBdPJOIi%2F6dadRY9p7Bh3QCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaT1qCySnwCqHUI1nKtwDxrfHFQL8lzquqZaowYB6nbkcoW8fIkpdLMIekqJ66QU80TOQX5PSrBojwnaEbFY387HI8klWEmsbW%2FrhkM6JwUJA7SUKYl4mpVDBZ%2BsRNvZx9jJzRngbihHaVedJhvPmmepTSmmbCjrzbTij2lpNidSiJjzySWxyf9%2BUd56z9GWmZY8qB%2BtuUokMV6MMZgKQxURxlhR1J3tW8KoV0FAUnFNmdDGBk7W8H3zEWj6X6PjvaP1NEjID4w5J4JHkVTRaRs9D9j2Au2fmbE%2F4O972GfEFBPjr%2FhNLGjhSQNpV3qkb%2F0Jp2WZ7QYmGwzybxNQk%2F3O5Vh%2BGxm3TSqoHzXrWu3a3BUvq5bZD3bIyUDVdsuv2G7M5kSUZ0qt%2Bll4we5Aufk%2FG8Cliqyk9irG8WgH%2B4uUykOyWtOfpD7sfDw%2BjC5J316rkaqwAFP1uk8A0mPLCIfrQ3mqOcH4GNjKZp1ZhYuKIf2zbchesLvl76jvuUQPnggfvCExyVz2rgEvj2fwnzu8pyyOSSc7O7%2Fmkd%2F7lb3K59SKjqIphF%2BGvXXAl8gPNvQNjvhKZcWfuO0jOEm7vK3RRGy8qMbooXAHuUsJbhhpqSoeHacwuGq9mfU5L00kPpCG0PVRQk4WITEowzZ6LygY6pgEPZvn4Z7bcZi7HISz4hHvo1LOZ%2FCbvawHYwV1UBzJ1YeObGN8VPbhvow8Xkanyq4v5%2FALRwX8sncnU8F76d8LAvKWkR3p9xTG%2Fy2M4PtTA9Wv0SIIHQ6Ak0%2FLF7cSVF8A3MNyw1iqocNtjnuHDlE4nTPWuSbLl7OdLNaaDPwy8inDJAMqbeen2F%2Bj6SPZ1LpWRrbTpSsY6k3B0FlPP2t2bz%2BBbLqJY&X-Amz-Signature=087c7e83907159a1b501250fcbb83e243ace476150387a0155260c508d2002a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

