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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLMAUUI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0YgMddhlYqoJepCu6DhjWtsKRSrfYyUtaFZcDUwyt%2BwIhAPsJWs0Z2BmzbmuATqpIyrwIghqTwo5ApdTq%2BI0fWWlfKv8DCHUQABoMNjM3NDIzMTgzODA1IgyirFOrKeQnxpMiHXwq3AO0MOE9Er%2FtShNFpJg4iMMaraGhJuAxHgDkeGYMCUaZeUtG4nmfjRraDlO%2BayVUns3Pk287AX9VHE7Qg9rVKG2jqtXZe2%2B4RbpzHv7ofjQalwP80%2FMLApm0YZlKHBHLcjBGhH%2FccRRRbJyGdRJiKc1%2BWwqFPRhmpw7wyo%2FM370mdMjag30O1sIEHosX4P276qFD75iETzzf9wXDzvUoXmyAguA0UEaSASjwuDOTlcEFzZ7XovJbxsiV3eES628L2Rq99PfIwas8RW9ZQx91bMrBfzl%2FJ2xgT9oY%2B%2FshrFmvIBspShlZj0HxbDwr%2FuwwnesLhGkl3le%2FKSr9fQgVJl%2FfobkyDwNrqTPRTHvZWce7ELVFlpCKvhyhqGyyztS7Ru2wrdhKc%2B3i60L%2FVkXBOWXfAhP0yGzk0KVojFdXV1xNEvrzP1gO6oHuWohtOOjilKEXgEkNBpd9ovlgffImfqfUNEC1ztU7yRtVIVTjSdP%2BH3GaZkHfGvnSaHy7hJpajVC2cQ8aVmndNPgkmfvCMVu6W8n6WwVPcrH%2BYg4hxtLI8urUylVDM4KuiHAn5q8pHy%2Bkd0xBhnZmhVYH%2Fj3k%2FBUR3e%2FsbeEQrD%2B3kue0lp%2FRPK1bKLnhAmq5L9Y%2B3DD8zYjKBjqkAVXiW%2BOaO8Qn%2FPvJmwoTPVwwLsRLW7Agdwu6V3OyYV8lGlWnq1gs0yZKXxf0mz13H7IeHXmTuZ4dD1IVDOP3hEKqtDRp0mjV2YKosNGvu7ltB7Z6V9QwZIOnAZIxC0JV62WZuNjCzKUNj8Si%2FzyWnwmf41%2B9so5E0bcvsqmwSiT0r0tORat%2Bi%2FIhLmEkcwmrCNQyyjEVSaaKN0oej0ss%2BEcexLUR&X-Amz-Signature=7b5cd4c1b846f4788dc2c342b10ede5071fbf37056f2170a6c10f5cc7fc69cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLMAUUI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0YgMddhlYqoJepCu6DhjWtsKRSrfYyUtaFZcDUwyt%2BwIhAPsJWs0Z2BmzbmuATqpIyrwIghqTwo5ApdTq%2BI0fWWlfKv8DCHUQABoMNjM3NDIzMTgzODA1IgyirFOrKeQnxpMiHXwq3AO0MOE9Er%2FtShNFpJg4iMMaraGhJuAxHgDkeGYMCUaZeUtG4nmfjRraDlO%2BayVUns3Pk287AX9VHE7Qg9rVKG2jqtXZe2%2B4RbpzHv7ofjQalwP80%2FMLApm0YZlKHBHLcjBGhH%2FccRRRbJyGdRJiKc1%2BWwqFPRhmpw7wyo%2FM370mdMjag30O1sIEHosX4P276qFD75iETzzf9wXDzvUoXmyAguA0UEaSASjwuDOTlcEFzZ7XovJbxsiV3eES628L2Rq99PfIwas8RW9ZQx91bMrBfzl%2FJ2xgT9oY%2B%2FshrFmvIBspShlZj0HxbDwr%2FuwwnesLhGkl3le%2FKSr9fQgVJl%2FfobkyDwNrqTPRTHvZWce7ELVFlpCKvhyhqGyyztS7Ru2wrdhKc%2B3i60L%2FVkXBOWXfAhP0yGzk0KVojFdXV1xNEvrzP1gO6oHuWohtOOjilKEXgEkNBpd9ovlgffImfqfUNEC1ztU7yRtVIVTjSdP%2BH3GaZkHfGvnSaHy7hJpajVC2cQ8aVmndNPgkmfvCMVu6W8n6WwVPcrH%2BYg4hxtLI8urUylVDM4KuiHAn5q8pHy%2Bkd0xBhnZmhVYH%2Fj3k%2FBUR3e%2FsbeEQrD%2B3kue0lp%2FRPK1bKLnhAmq5L9Y%2B3DD8zYjKBjqkAVXiW%2BOaO8Qn%2FPvJmwoTPVwwLsRLW7Agdwu6V3OyYV8lGlWnq1gs0yZKXxf0mz13H7IeHXmTuZ4dD1IVDOP3hEKqtDRp0mjV2YKosNGvu7ltB7Z6V9QwZIOnAZIxC0JV62WZuNjCzKUNj8Si%2FzyWnwmf41%2B9so5E0bcvsqmwSiT0r0tORat%2Bi%2FIhLmEkcwmrCNQyyjEVSaaKN0oej0ss%2BEcexLUR&X-Amz-Signature=54bed63cb402030e74032ed81ee3d34eb1fc69830e45866f3cff9dc59a342bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

