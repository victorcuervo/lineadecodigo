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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGS6T233%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC17gQCfsiwWOHhg8Me9746YcOT7m35AnzH6s2fw44zNwIgRSDcQ1VzT8ZHcdqujQyzqA%2FidjyTKPeAGWPGr1ucGCAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAxjnbZ8PDbFr%2B3qTyrcAwl66i3e8ZDIIAW5nZ5rxKu6pndes0zyE48mGVdWY7JNs8M9kLsRRqxV1UhRpqGOkEJOqfb94GuVVRU%2FPgEpahH%2Fopar81Y449O%2BXBHCp%2FYuYjbLj1rKGBbXHfZ51hMhQz4dpNZ05mWi66BR7dPDhiadnziOeDVxE5CoxRen1oaRApmgXFhSGJQquEjKerg9tWAA%2BS%2Fd9OyVIrib4Flvi8l7uU0Or9OwCozSbUIiUiizCP0ykVK50g6m0nOjUKynF4%2BXrit3jASsGBGvTY5NtygVJFYTp9kAU5Qxn9QzJJcP3e5WxGbhA7x29F9Rw8sq5Q8SAgoz0sOVGiirbDgAKgKRmEWdXnebrvXZtJ4jeoHz0lizJNpClrDBSdD0VOLhOeZBWtJO34%2FXpRAILXShHMUja0mnGNRIPBKqeiZKRqWMIorpEpxMUCgnBZfauY0nxvFHybwD2n8O5XtpVtLaLH5x9QaRSsvlesx%2BmvjipSolUSMwTjBEIRIjec82rsoF3AZfxls3emWiM5aCg2aVk9XhRUoz58esa6BAM%2FK24OMMNPNM1TboU7GTLcBgz1V%2B0eTMNRNfsS91ODdbh741gJi1%2FTV5gvz1qsGDw%2Bo38yRJXbwfp7Pu2NVHnEgyMP%2ByiMoGOqUBZ3BOn0eK%2BdvwpUJkU6WoizrL%2FhSEf%2F%2Bi1GhIPuYmvmpbWJ6DmpWTDgq5yspdMbNfMNm17NoPhncOLUtuZo%2Bk3X%2BteWgukGTFllHHT48AICOAxpJD941acDjnqMgMO5cKXQ%2FDEyXNIrQFDJyReyntc2Kz2BhlqHOrR1VboYIMvfXDeCIjK2enUVw%2FJ%2B4In7r5G47%2BnojaY6oyaEb%2BpzqPI4L20mCJ&X-Amz-Signature=53ecdbabf27700c6fd29e0026b6255a2eb2acac0becbe387fb205747f3232175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGS6T233%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC17gQCfsiwWOHhg8Me9746YcOT7m35AnzH6s2fw44zNwIgRSDcQ1VzT8ZHcdqujQyzqA%2FidjyTKPeAGWPGr1ucGCAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAxjnbZ8PDbFr%2B3qTyrcAwl66i3e8ZDIIAW5nZ5rxKu6pndes0zyE48mGVdWY7JNs8M9kLsRRqxV1UhRpqGOkEJOqfb94GuVVRU%2FPgEpahH%2Fopar81Y449O%2BXBHCp%2FYuYjbLj1rKGBbXHfZ51hMhQz4dpNZ05mWi66BR7dPDhiadnziOeDVxE5CoxRen1oaRApmgXFhSGJQquEjKerg9tWAA%2BS%2Fd9OyVIrib4Flvi8l7uU0Or9OwCozSbUIiUiizCP0ykVK50g6m0nOjUKynF4%2BXrit3jASsGBGvTY5NtygVJFYTp9kAU5Qxn9QzJJcP3e5WxGbhA7x29F9Rw8sq5Q8SAgoz0sOVGiirbDgAKgKRmEWdXnebrvXZtJ4jeoHz0lizJNpClrDBSdD0VOLhOeZBWtJO34%2FXpRAILXShHMUja0mnGNRIPBKqeiZKRqWMIorpEpxMUCgnBZfauY0nxvFHybwD2n8O5XtpVtLaLH5x9QaRSsvlesx%2BmvjipSolUSMwTjBEIRIjec82rsoF3AZfxls3emWiM5aCg2aVk9XhRUoz58esa6BAM%2FK24OMMNPNM1TboU7GTLcBgz1V%2B0eTMNRNfsS91ODdbh741gJi1%2FTV5gvz1qsGDw%2Bo38yRJXbwfp7Pu2NVHnEgyMP%2ByiMoGOqUBZ3BOn0eK%2BdvwpUJkU6WoizrL%2FhSEf%2F%2Bi1GhIPuYmvmpbWJ6DmpWTDgq5yspdMbNfMNm17NoPhncOLUtuZo%2Bk3X%2BteWgukGTFllHHT48AICOAxpJD941acDjnqMgMO5cKXQ%2FDEyXNIrQFDJyReyntc2Kz2BhlqHOrR1VboYIMvfXDeCIjK2enUVw%2FJ%2B4In7r5G47%2BnojaY6oyaEb%2BpzqPI4L20mCJ&X-Amz-Signature=fdad8cbe199934b198fe814721f48d74ac008dfc2743ac02b9e60b043898a332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

