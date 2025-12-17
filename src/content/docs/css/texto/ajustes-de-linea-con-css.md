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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLAHVQ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAOmML93z8XPPOyHRIvbfh7ukcwD96l7R86a6KYdHMYwIgf1GMleBOsSumB5HJ2FBx%2BLHvX%2FamHaNAMpHpvKvRkS4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKnuS18Df2LTCSvpSSrcAwEzW8epmOXcAOo%2BX%2F%2FatqJOSgEYihsAN17jKic2TxiCbXGuX0GYg8sX65v8yrwbDa9k7zIjs3c0pLB331e6lYUUVHM5Y4O9X67QD6X5MBz4pIEJ7B%2BP6K9ihFZRPvnGgNZqOtSbTyOf2aoI0s988gITmpF3%2BpPc1kSCnXBtVlnOeMnT3q2KhsnkE%2BCPZ25oBJDD%2BXjl5EDnFWpjZJ6DeFxJkQYAwvDNaOvUPse4IjhvdoYxJm5erNFrjV1taulFPCN7VCxv5fjvyAIhwNb799zwzLhLPCIrvO4jvkYuUkfNIhUl9fWDvRqOxTtpNbUR4niHo63rCVCCE8flBqxKJViJTpNQ2VNXtq5C0JyA4oox7AGSt5RQ21n4Vc298V%2FNLI1f1eS%2BnMvAg47OWdSO%2FD29KoxCFCXHMm76QyqIY%2BSfcSZxWBoCAuwYMFwtAyR%2BI6MC14cpROkYt80XQzVRxWezH3Xb6y%2FDJyfBRURue1PwMAr5COp4iXc9FdqfmWs63KOuFxbDme8ipjyRumv1A3xUD%2BbLMQbUxud2c0qe49UNTDiFq2l2PFX2BbwioU14W5lNp8Zv5AJIPIvjYaHbD5vksHs%2BYicKeOXGSKgKer%2BlfsCjulKavaMTzXCxMLmyiMoGOqUBoKlA4j61tfTvon5TP7Bf2n9ESoTUUQXmuXJI7RbfZxNZKlf8N60KSVbtfUwnyXNB8gRXDxnqMt4P%2BmPvR5NF5u0lwXYy90PZA0BSNVgXQcqypgqKkkgMZxf67i%2BLvnk4QN3O%2BrGLFbLEg3vElBQYmwrXO0c5D%2B%2Fr5wwK9eOUM5Pwv90WYT9P%2F6AL6nqrb9MXVyZ3wdgiZIZUAsw4vw2CkXQ0rBs7&X-Amz-Signature=1772e713f3dd4e54bc50ba753374c2bef78113c8e59801020c0fa189f940bc10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLAHVQ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAOmML93z8XPPOyHRIvbfh7ukcwD96l7R86a6KYdHMYwIgf1GMleBOsSumB5HJ2FBx%2BLHvX%2FamHaNAMpHpvKvRkS4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKnuS18Df2LTCSvpSSrcAwEzW8epmOXcAOo%2BX%2F%2FatqJOSgEYihsAN17jKic2TxiCbXGuX0GYg8sX65v8yrwbDa9k7zIjs3c0pLB331e6lYUUVHM5Y4O9X67QD6X5MBz4pIEJ7B%2BP6K9ihFZRPvnGgNZqOtSbTyOf2aoI0s988gITmpF3%2BpPc1kSCnXBtVlnOeMnT3q2KhsnkE%2BCPZ25oBJDD%2BXjl5EDnFWpjZJ6DeFxJkQYAwvDNaOvUPse4IjhvdoYxJm5erNFrjV1taulFPCN7VCxv5fjvyAIhwNb799zwzLhLPCIrvO4jvkYuUkfNIhUl9fWDvRqOxTtpNbUR4niHo63rCVCCE8flBqxKJViJTpNQ2VNXtq5C0JyA4oox7AGSt5RQ21n4Vc298V%2FNLI1f1eS%2BnMvAg47OWdSO%2FD29KoxCFCXHMm76QyqIY%2BSfcSZxWBoCAuwYMFwtAyR%2BI6MC14cpROkYt80XQzVRxWezH3Xb6y%2FDJyfBRURue1PwMAr5COp4iXc9FdqfmWs63KOuFxbDme8ipjyRumv1A3xUD%2BbLMQbUxud2c0qe49UNTDiFq2l2PFX2BbwioU14W5lNp8Zv5AJIPIvjYaHbD5vksHs%2BYicKeOXGSKgKer%2BlfsCjulKavaMTzXCxMLmyiMoGOqUBoKlA4j61tfTvon5TP7Bf2n9ESoTUUQXmuXJI7RbfZxNZKlf8N60KSVbtfUwnyXNB8gRXDxnqMt4P%2BmPvR5NF5u0lwXYy90PZA0BSNVgXQcqypgqKkkgMZxf67i%2BLvnk4QN3O%2BrGLFbLEg3vElBQYmwrXO0c5D%2B%2Fr5wwK9eOUM5Pwv90WYT9P%2F6AL6nqrb9MXVyZ3wdgiZIZUAsw4vw2CkXQ0rBs7&X-Amz-Signature=a1c8b0252c3d73fb1848514e7ae78e85d41f88e20ee3fce888038c70c883b25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

