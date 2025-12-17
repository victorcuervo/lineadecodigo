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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX26N6LZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FCM0VqSOEb6R32JZlyoXQEJd66N82EH7FyxKk%2BHFTVgIgZExQxmHZJh3WnSVu1gZDUUZpJu7iqAK8Ktc%2FR78N28Mq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDPqibgjK1qH%2BDnStircA7ErQ1p9kNOn88go%2BHQnA82lACFIeN%2BS6%2FYIPiv3NHZ3Btcxo6qLfahRAtyKKxpn73HpyKstxEoi38FpwOOs8VrFZll3reg4oZrGlyNEpD76tSZrZFiurRsKmPPyZ5EgiWjDclgCZDtB%2BlGKAFfsfL5xMJvkjErV%2F8a6%2FRY1Wmnna63eytSOVOZch9JchqCnKUAG08A3HGdIT%2BEPcSdJL%2B9SHDpUlTy%2Brr5plMA5QFOth4HPsiL7%2FLkvmt%2BsV1CNOoPwp%2BjNy31UO%2FmvXlg9a7wHsO%2BO66Phu8ic5wFR%2BAOR%2BjDQD1Ms8i5vwymbSEfZQHdqvYR0hEEk578F9PIqZaM%2BVAnU%2BPEgEkjCKVDyXcIZ5cJuQItedrg%2B4Mi3a9S2WyMKsIL4UrWgTA8vy0gK2p0kc2M1jv9na0o7aWnS6Mfd2LKEsJBtlSbt6JL%2FZFqI8JQAeS9vD7x1ZK7N41Fli%2FEaIV7lXdgyKMBjl3Jd5kV8SB4fPWaVF9B%2FjwenAVpWW65BRgZqaz7vGMC7CN%2Fxzp1Dae9BP8bBnzBA%2B0ixwKMAr%2B5bRbyAO3MdJR0PAbWEQurPSte4cVk%2F4OkNIaDdF3H02vdC%2B%2B8jqdQIo0jERmmDod6nmTiewAmltvJaMI3qiMoGOqUBxWaPcuQs8buRRvkS7ltKNgvN%2BZURUF34nAQ5Nn%2FYmd33SGnmySpwNVpHaahxwF0%2F0xfEYGMsF7KoWvNxVQguIlew17B3bp7iFTDRA1Z6NMCRSO%2BOxhkHMAbc7yWQWY4Pi8UYNBdHQPKWzZkeuTKbiNz9rqtAD9jpRtamhxx%2Biip5BhNoHFXFCcojqD%2FE9IbmIYwbwmpF%2BnVgtr0MPi1NlOzwE6eY&X-Amz-Signature=5ad8882d2c17c0105da36fd44f541118483fb15d6be700ec2804aff6e0d22ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX26N6LZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FCM0VqSOEb6R32JZlyoXQEJd66N82EH7FyxKk%2BHFTVgIgZExQxmHZJh3WnSVu1gZDUUZpJu7iqAK8Ktc%2FR78N28Mq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDPqibgjK1qH%2BDnStircA7ErQ1p9kNOn88go%2BHQnA82lACFIeN%2BS6%2FYIPiv3NHZ3Btcxo6qLfahRAtyKKxpn73HpyKstxEoi38FpwOOs8VrFZll3reg4oZrGlyNEpD76tSZrZFiurRsKmPPyZ5EgiWjDclgCZDtB%2BlGKAFfsfL5xMJvkjErV%2F8a6%2FRY1Wmnna63eytSOVOZch9JchqCnKUAG08A3HGdIT%2BEPcSdJL%2B9SHDpUlTy%2Brr5plMA5QFOth4HPsiL7%2FLkvmt%2BsV1CNOoPwp%2BjNy31UO%2FmvXlg9a7wHsO%2BO66Phu8ic5wFR%2BAOR%2BjDQD1Ms8i5vwymbSEfZQHdqvYR0hEEk578F9PIqZaM%2BVAnU%2BPEgEkjCKVDyXcIZ5cJuQItedrg%2B4Mi3a9S2WyMKsIL4UrWgTA8vy0gK2p0kc2M1jv9na0o7aWnS6Mfd2LKEsJBtlSbt6JL%2FZFqI8JQAeS9vD7x1ZK7N41Fli%2FEaIV7lXdgyKMBjl3Jd5kV8SB4fPWaVF9B%2FjwenAVpWW65BRgZqaz7vGMC7CN%2Fxzp1Dae9BP8bBnzBA%2B0ixwKMAr%2B5bRbyAO3MdJR0PAbWEQurPSte4cVk%2F4OkNIaDdF3H02vdC%2B%2B8jqdQIo0jERmmDod6nmTiewAmltvJaMI3qiMoGOqUBxWaPcuQs8buRRvkS7ltKNgvN%2BZURUF34nAQ5Nn%2FYmd33SGnmySpwNVpHaahxwF0%2F0xfEYGMsF7KoWvNxVQguIlew17B3bp7iFTDRA1Z6NMCRSO%2BOxhkHMAbc7yWQWY4Pi8UYNBdHQPKWzZkeuTKbiNz9rqtAD9jpRtamhxx%2Biip5BhNoHFXFCcojqD%2FE9IbmIYwbwmpF%2BnVgtr0MPi1NlOzwE6eY&X-Amz-Signature=a8b969098b480e8e91b1e2d90bf909d4c250bfd9bb1981eca264dfebaf303ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

