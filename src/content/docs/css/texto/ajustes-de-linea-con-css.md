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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLKPNTV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2TsvLzKGTBC7clkvg%2BoauMm4E1ndSJ5hdjX8iNjfdYwIgEmUhu4UR5y5rU4lRgEGgdMJNXWCCJe5nFnHMj8ZJ%2Bswq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF3oxkzaXMddutNPySrcA3hqF6HaKPOOLEBna7rfneb00XT2NmKcjL%2FUkW1pRyTtLJ9UPuzFxPE0USBjY0%2FElCM3nryizJpqklWiIB28soGdJfQqEbeajBVd02%2BPkOFEB7T2kq%2B7eRJcn1cFaec9aswVS9YHzZCEADe1gURJ8lmwkVPRuu12G0u0vqF2x0yncHWZnxjtgJuh%2F4T06GLqxMz1Zf%2FLj8oJ%2FlYm2qkdrqMucIny4afzxzYQhKgy2h%2FOFgL3qeMdG0%2BPmHf%2BaRdZv4h05s0bKqz%2Fb8pYoGvC9llClRx8hEVDQNsdqH7TZ3Z4wBXmavhjKatHgAe31bXMkExDi1gHNc8Y5FwCBWMWvXBAdckq1n2A%2BScml%2BFQgbOCHAs6ROduuDNIZ%2F%2Bme0n3%2Fjn1waBcBt88LHHGMiPr8CTKk4BtpfalnsDSLY4xW9ncgyraxS%2FKA69FUetgleYEShtGx7hGukb4mvhX4Gi%2BFpVKXSFbt2tQpw0xXi2y%2FPDk8bn9a8fCi8zy6GUTlPncs2Wp%2B1E2vpEZGs4rVaEkE4jUr0wPUpHlGA%2FignpA9ucN%2FWT4HWgVsvIOShRZZLDvsxqk5ZD8aPzmylFdyH282rxgIezwunEnj07LGf2MELqZV2nY4H235B76qc%2FFMNKdicoGOqUBraJoMp%2Bp80jYCZHYA06oQXWuDC2uzdjLccEIB1lHyt2FkaBNOtgd%2FeYec19mMntyXQpgxj1lueIp4t7XcJ31ibmETMpCY7recbQ0S8j6f9vTXFUgMmu2UClGOx0O9nYcOc8GD3tFWTy4nk116%2BRF%2BoOISsEEzA1mjatsml8v0b7lUBlDSIVTabSkBZrU5MF8YIRCNfmwR27tJD0VnJRXSr1BWyiA&X-Amz-Signature=551fe736f6a09352a1fefe1b919761f8bd9d73cf29c5b72b5835b6d5491572e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLKPNTV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2TsvLzKGTBC7clkvg%2BoauMm4E1ndSJ5hdjX8iNjfdYwIgEmUhu4UR5y5rU4lRgEGgdMJNXWCCJe5nFnHMj8ZJ%2Bswq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF3oxkzaXMddutNPySrcA3hqF6HaKPOOLEBna7rfneb00XT2NmKcjL%2FUkW1pRyTtLJ9UPuzFxPE0USBjY0%2FElCM3nryizJpqklWiIB28soGdJfQqEbeajBVd02%2BPkOFEB7T2kq%2B7eRJcn1cFaec9aswVS9YHzZCEADe1gURJ8lmwkVPRuu12G0u0vqF2x0yncHWZnxjtgJuh%2F4T06GLqxMz1Zf%2FLj8oJ%2FlYm2qkdrqMucIny4afzxzYQhKgy2h%2FOFgL3qeMdG0%2BPmHf%2BaRdZv4h05s0bKqz%2Fb8pYoGvC9llClRx8hEVDQNsdqH7TZ3Z4wBXmavhjKatHgAe31bXMkExDi1gHNc8Y5FwCBWMWvXBAdckq1n2A%2BScml%2BFQgbOCHAs6ROduuDNIZ%2F%2Bme0n3%2Fjn1waBcBt88LHHGMiPr8CTKk4BtpfalnsDSLY4xW9ncgyraxS%2FKA69FUetgleYEShtGx7hGukb4mvhX4Gi%2BFpVKXSFbt2tQpw0xXi2y%2FPDk8bn9a8fCi8zy6GUTlPncs2Wp%2B1E2vpEZGs4rVaEkE4jUr0wPUpHlGA%2FignpA9ucN%2FWT4HWgVsvIOShRZZLDvsxqk5ZD8aPzmylFdyH282rxgIezwunEnj07LGf2MELqZV2nY4H235B76qc%2FFMNKdicoGOqUBraJoMp%2Bp80jYCZHYA06oQXWuDC2uzdjLccEIB1lHyt2FkaBNOtgd%2FeYec19mMntyXQpgxj1lueIp4t7XcJ31ibmETMpCY7recbQ0S8j6f9vTXFUgMmu2UClGOx0O9nYcOc8GD3tFWTy4nk116%2BRF%2BoOISsEEzA1mjatsml8v0b7lUBlDSIVTabSkBZrU5MF8YIRCNfmwR27tJD0VnJRXSr1BWyiA&X-Amz-Signature=82fccfa3eaf7e41300c0f7006edebb2d490af690f54d5a26e2c46f8354994aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

