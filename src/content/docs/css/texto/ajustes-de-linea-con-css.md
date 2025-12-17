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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJOQ3ERQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGTaI3ZZ48nMjOWWfyJ4LDzrs4VNetxqVT%2FWkx%2ByrCvAiEAmGZfiFWntPfIU9mIenU41jFZn9LFmUiuF6BFamo7u30q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGP9Al9untvT49Y%2F2yrcA08oqINEgQRAz8RXt%2FOj5tEdF8ta2mFgWU1zTfcK1FPnpL7JLGIGteYjYUhmxXrOacO9eKWMuQt1TTjG8U%2FH9xiUgZwd40%2FLirC6EjjybwU%2BaeWgsTVlYyu44wZ289LchC2Ry6b5gxhGVXpnitgTJnfYJEJ28bjPG6u2HY7F%2BEdOfz4m8AdaI1f4hKlq94oFCjKSi4dZQgnYrZ2bcBqX9Po8MysjHT2WcAQik0%2FvOxpDIDzDhNOulg7aX0VMhZsCGNDwVrCXrixlo8HlfDPNsRj0oPYtQ9YItQwaoR89P9B1n4d0marLUuglTzDQsMK%2Bmjkns%2BAXLtGPMo0ZiYfdxEI6DJmXgC1fh2DChlUoSVIfzR1ZHUr8F%2FMoilRuiWgcCjRJu6G%2BFrTP0TCIkLvlFYA8ilAVIHzP40Dg1g3e8mvWxSkDD63h3BVfUZGLQa6HzoIaX4G6tISGab2bkSd9dmt18VG0MD8eUSf%2BDbOoSyzu3o%2FFnRapmcfb6JwdAPsadZV5vExixiTX7RndB0Dqn9N2SREvdtss9JTMZ4Zp9Co4gQY6M3WNQGq9ydSgXCgS0p0ZNHNDGOVjeKIus%2FTy0d7ie9lgj3pDTMvmD0Eo61OTdOtma98LuUe87GCqMNfwicoGOqUB3DovY9RTHELRAV%2Bg2db05flI17iAqygujur%2F%2B2CvkIdWOL%2BYWfX8%2BfN6YqzoGe%2Bcvpe1PRyJGdHoSlmL6sNbM7vEilfckgFHIIMtO11inxTTr6GBTKFSu0HBCzm%2FGmk5sxCkoosTCs36%2FbczQT0gEpEkcz3LrigKC3GyvZH9UHdDtwLKs9NR2E9ElKAPAth7DvpK2%2B4w%2FRsh8GYDo7tIK2GDcjwB&X-Amz-Signature=04f4611bc8bc637c9106690b805c3f7fa1d5bc591762341cea253e6ee63ea8b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJOQ3ERQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGTaI3ZZ48nMjOWWfyJ4LDzrs4VNetxqVT%2FWkx%2ByrCvAiEAmGZfiFWntPfIU9mIenU41jFZn9LFmUiuF6BFamo7u30q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGP9Al9untvT49Y%2F2yrcA08oqINEgQRAz8RXt%2FOj5tEdF8ta2mFgWU1zTfcK1FPnpL7JLGIGteYjYUhmxXrOacO9eKWMuQt1TTjG8U%2FH9xiUgZwd40%2FLirC6EjjybwU%2BaeWgsTVlYyu44wZ289LchC2Ry6b5gxhGVXpnitgTJnfYJEJ28bjPG6u2HY7F%2BEdOfz4m8AdaI1f4hKlq94oFCjKSi4dZQgnYrZ2bcBqX9Po8MysjHT2WcAQik0%2FvOxpDIDzDhNOulg7aX0VMhZsCGNDwVrCXrixlo8HlfDPNsRj0oPYtQ9YItQwaoR89P9B1n4d0marLUuglTzDQsMK%2Bmjkns%2BAXLtGPMo0ZiYfdxEI6DJmXgC1fh2DChlUoSVIfzR1ZHUr8F%2FMoilRuiWgcCjRJu6G%2BFrTP0TCIkLvlFYA8ilAVIHzP40Dg1g3e8mvWxSkDD63h3BVfUZGLQa6HzoIaX4G6tISGab2bkSd9dmt18VG0MD8eUSf%2BDbOoSyzu3o%2FFnRapmcfb6JwdAPsadZV5vExixiTX7RndB0Dqn9N2SREvdtss9JTMZ4Zp9Co4gQY6M3WNQGq9ydSgXCgS0p0ZNHNDGOVjeKIus%2FTy0d7ie9lgj3pDTMvmD0Eo61OTdOtma98LuUe87GCqMNfwicoGOqUB3DovY9RTHELRAV%2Bg2db05flI17iAqygujur%2F%2B2CvkIdWOL%2BYWfX8%2BfN6YqzoGe%2Bcvpe1PRyJGdHoSlmL6sNbM7vEilfckgFHIIMtO11inxTTr6GBTKFSu0HBCzm%2FGmk5sxCkoosTCs36%2FbczQT0gEpEkcz3LrigKC3GyvZH9UHdDtwLKs9NR2E9ElKAPAth7DvpK2%2B4w%2FRsh8GYDo7tIK2GDcjwB&X-Amz-Signature=aa7168c728e32c739ee555f29aa2ff7b062b5eb0861d25e3e63667918a52e993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

