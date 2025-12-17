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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZGVF7G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7TUuYXt4J6sB8t2jfUUijIwpD4uRWttss157asyMkAwIgMqWeBTDIYTj%2By21PlWbFsxVOWm5nbFjEVu8JtHaCRtUq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBM2xbV%2BNXWCdzk69CrcA5sSzncdj3ONHbssFgRGKX7oGEWIrYeYd1JhFwUWJKKxwIan%2B%2BRpXGrxnTa%2FjXVtQ8NkDh17HbC66r0SWs8TnB62EHa6KtS8jQnwECorbvfyNFx783111LK1lHHNFJ1KSt8VzOu%2BoP6%2FuGy1By%2BJ1LS7zaIii1KnfPywbN6sLgxv1v5fyyEUE1%2BDdavCOFd%2F7LUioTd9R6R%2B8mCer%2FNzqpfmD%2FA2KeyFE8gYxLCFP1JA%2Fp8NLFclmCOTCiEB44qZwePXAdsr9g%2FkuXuwQXfvvyS3rnKZtDMMJTsY8m3URKrNpmXC%2B%2FJ58iYoWu%2FobIH6tQ3mKXMBtn0%2F3ZRA%2FjL0NThfExYeahpA9OTMcoAYimUPFnGqCCQ870CNkTmvd6u35mi8VNP%2FYhnM5PspZrbvitMIBQOl8PdO%2Bb7gfc6ZEIOVt9NoATBkIc%2B4dZjtlrVOS2SjhWFIzdsWUd8Jh2sPGzK4IP5Cv2OwJqbWe%2BucWJgyfjGATg293BMi7yQRkPxHSGWPSvsj5Nqh%2FEPYmnymJSPbDM3KvVRBIhCjHvW17ERZpmooHczeQU9V4HP%2FFzrsgLN0B8LWY21d7VI3FTY3q%2BQugkf6%2Bmyh%2F2rnLIZXZTPGHtGIlr1eThTPX2VMMOuxiMoGOqUBq1Pz39oo2G5oCcxCLvspUq7saYMUFHBdgvvG5%2Fv4Nd9ZjxrMrZfkjLhdWTuYT5aKTWuGIhxWIdIZ3jIYd%2B5wtCGe%2B2yeeR%2BMBEL7zYMtYMh8PjiJH79o6EugrobgOogmzDF0cYfa%2BsfMBj86SwmaRapkWRDJDy9MRcfR%2FtZKwE6Rx3UIfBxdvJ%2BeslJtL29lVrPdwTFYsX19Zr%2FDzanNuPyrmDAX&X-Amz-Signature=2ab09657a84fe35d4556357f3fa2c20f75a51c6f18530de535b04d56dcd7cc33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZGVF7G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7TUuYXt4J6sB8t2jfUUijIwpD4uRWttss157asyMkAwIgMqWeBTDIYTj%2By21PlWbFsxVOWm5nbFjEVu8JtHaCRtUq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBM2xbV%2BNXWCdzk69CrcA5sSzncdj3ONHbssFgRGKX7oGEWIrYeYd1JhFwUWJKKxwIan%2B%2BRpXGrxnTa%2FjXVtQ8NkDh17HbC66r0SWs8TnB62EHa6KtS8jQnwECorbvfyNFx783111LK1lHHNFJ1KSt8VzOu%2BoP6%2FuGy1By%2BJ1LS7zaIii1KnfPywbN6sLgxv1v5fyyEUE1%2BDdavCOFd%2F7LUioTd9R6R%2B8mCer%2FNzqpfmD%2FA2KeyFE8gYxLCFP1JA%2Fp8NLFclmCOTCiEB44qZwePXAdsr9g%2FkuXuwQXfvvyS3rnKZtDMMJTsY8m3URKrNpmXC%2B%2FJ58iYoWu%2FobIH6tQ3mKXMBtn0%2F3ZRA%2FjL0NThfExYeahpA9OTMcoAYimUPFnGqCCQ870CNkTmvd6u35mi8VNP%2FYhnM5PspZrbvitMIBQOl8PdO%2Bb7gfc6ZEIOVt9NoATBkIc%2B4dZjtlrVOS2SjhWFIzdsWUd8Jh2sPGzK4IP5Cv2OwJqbWe%2BucWJgyfjGATg293BMi7yQRkPxHSGWPSvsj5Nqh%2FEPYmnymJSPbDM3KvVRBIhCjHvW17ERZpmooHczeQU9V4HP%2FFzrsgLN0B8LWY21d7VI3FTY3q%2BQugkf6%2Bmyh%2F2rnLIZXZTPGHtGIlr1eThTPX2VMMOuxiMoGOqUBq1Pz39oo2G5oCcxCLvspUq7saYMUFHBdgvvG5%2Fv4Nd9ZjxrMrZfkjLhdWTuYT5aKTWuGIhxWIdIZ3jIYd%2B5wtCGe%2B2yeeR%2BMBEL7zYMtYMh8PjiJH79o6EugrobgOogmzDF0cYfa%2BsfMBj86SwmaRapkWRDJDy9MRcfR%2FtZKwE6Rx3UIfBxdvJ%2BeslJtL29lVrPdwTFYsX19Zr%2FDzanNuPyrmDAX&X-Amz-Signature=79ec18bd3234d759a9b715736d18deb99630fed25e58de377c352b074cd1245f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

