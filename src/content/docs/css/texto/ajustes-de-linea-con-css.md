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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFM276Z2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgC8H8kBUWxLB0P%2FLRwt3Z44xc%2FQR55sdQPxWhmvQ9FAiADLRDeM%2FHWIhZDEk4W9AKPh4TCACVKCqTBik%2FJTKNKKir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMyWizQkOgFP6rSvbwKtwDn0T9Ytl%2BIm6A%2FNXFJmgY8yQqBAb2zD968xCTh1wt3VFCQGtgJ3og9COP3O%2BYpRaqyWn1zzFGuDmqT00Lbi6bjPj%2FADAw9zVj1WgDZnNY9ei1llZY6iCiktl2ZdwaXU2X0DYNRKPJinVE6k1imkC90AjVUTTdq5BhZSFylH4UqkBuPbDAk3ENx%2FScREesQJtPXn%2F%2FgFcQytLP9JyKS80JM6c7RS4S9WX9obgS3hV8DUZrix7dgjApkjWdFejLTOvjQTBPmFRNpPbH8E%2BvftRRAZNYFRKHZ%2F%2BgetIq1dzGC%2FpDskjhl%2F2KFWiYVMd0XrkG8vm5iWZ2sa6ZvNtSkbRh4YzxF69KPyv4237Q76gqSCiF7C2EGaziJgaCXnYlQcioW%2BD2faMsruQuj%2BsjlrTx2fW90H3DlbiNQrHoAqClDM5QcOzPUjY%2B93KVMsNKrO42mhOdI2zSdpCgeyDOOE9sClLEhQWWx7GD6gLX0hIstaGqeaYQ%2BJSxDkNYPMDTY1csOimb0UBUw5w7cM7Kar9Sqn1eizrXhup%2BbYDJzGEXv7lL%2BGv6vcyYjqWLP7V9ovwqPjEny0MHH3UALXs3i5Ov0BcG9HbUavD8qOUClWkWLISwFoLV4GLC%2BIwU%2F2Mwno%2BKygY6pgFGEySchcJ6wkHx6Yep4vkpyM4ytZoFpZlgN2V%2B%2BEYbMWJQMxvrrokyW6fhPMGuy%2B21C8uRoEHiwkXOx962e4MhWwvH1AYpNn8PQx85wdFYor7YEBp4sQHW2qyDaUuVAy84NI72E42DaUnMgKE10A322JxXaQCdsxxGtsVoZdTCgTTtpQed0NgqGb88JuzNXWJY%2FxKGhm4OQI5V4lyGmNW2QAICD%2BS8&X-Amz-Signature=5b87823ca63ca42ab1ebde92c3699859c2fd5906ff4c9ccd25720fb3ceaa18bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFM276Z2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgC8H8kBUWxLB0P%2FLRwt3Z44xc%2FQR55sdQPxWhmvQ9FAiADLRDeM%2FHWIhZDEk4W9AKPh4TCACVKCqTBik%2FJTKNKKir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMyWizQkOgFP6rSvbwKtwDn0T9Ytl%2BIm6A%2FNXFJmgY8yQqBAb2zD968xCTh1wt3VFCQGtgJ3og9COP3O%2BYpRaqyWn1zzFGuDmqT00Lbi6bjPj%2FADAw9zVj1WgDZnNY9ei1llZY6iCiktl2ZdwaXU2X0DYNRKPJinVE6k1imkC90AjVUTTdq5BhZSFylH4UqkBuPbDAk3ENx%2FScREesQJtPXn%2F%2FgFcQytLP9JyKS80JM6c7RS4S9WX9obgS3hV8DUZrix7dgjApkjWdFejLTOvjQTBPmFRNpPbH8E%2BvftRRAZNYFRKHZ%2F%2BgetIq1dzGC%2FpDskjhl%2F2KFWiYVMd0XrkG8vm5iWZ2sa6ZvNtSkbRh4YzxF69KPyv4237Q76gqSCiF7C2EGaziJgaCXnYlQcioW%2BD2faMsruQuj%2BsjlrTx2fW90H3DlbiNQrHoAqClDM5QcOzPUjY%2B93KVMsNKrO42mhOdI2zSdpCgeyDOOE9sClLEhQWWx7GD6gLX0hIstaGqeaYQ%2BJSxDkNYPMDTY1csOimb0UBUw5w7cM7Kar9Sqn1eizrXhup%2BbYDJzGEXv7lL%2BGv6vcyYjqWLP7V9ovwqPjEny0MHH3UALXs3i5Ov0BcG9HbUavD8qOUClWkWLISwFoLV4GLC%2BIwU%2F2Mwno%2BKygY6pgFGEySchcJ6wkHx6Yep4vkpyM4ytZoFpZlgN2V%2B%2BEYbMWJQMxvrrokyW6fhPMGuy%2B21C8uRoEHiwkXOx962e4MhWwvH1AYpNn8PQx85wdFYor7YEBp4sQHW2qyDaUuVAy84NI72E42DaUnMgKE10A322JxXaQCdsxxGtsVoZdTCgTTtpQed0NgqGb88JuzNXWJY%2FxKGhm4OQI5V4lyGmNW2QAICD%2BS8&X-Amz-Signature=c40ef174ac419c471fd9bc18fe2a21362e0b430df03ee753960e83239c25059e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

