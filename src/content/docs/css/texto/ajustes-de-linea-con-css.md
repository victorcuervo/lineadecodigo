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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZWKZAA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQvuG77UdD5YMl9Ft33gScNxd0rW0m4OgvIsg3mixXYAiEAhle0cr2GrS52xEIBJd1fDen9BbydgEl%2FwggylfOtUxgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDt3q9TOEmTXPThk3CrcA0sScYIrqD6j83m%2F7DAA4Nv5X3DRrhEmi9DOfq3NH2H5ZzuPkYYBUP8kPm%2BoARMYZHTgqVEolweHG1ogNoxXKEgroY%2B0H2c5Ci93sOQsirHiIx1Hv0%2FIblUqm97G50Vs4CAvD3D7vH9MMGup3vum2nnXoTBv%2BwEaRXjmkHzpF3GMsylM6%2FKjGkXSQCQI%2BQsarrhEWSukV0ZakyZ4VAbElmMze7x68ztYuwbHUGOXL0YFbJyz1%2Fox3dhc3aMuy8HSB46Yn24JyN9nrCodRDOlZfiieqcWlYHSMKS0lPC0OYc%2FMjEaaGGLt5t0hvN4IGKqDQpmWDfTWegppM5fUCE8%2B20gB%2FFGI5qkgFyCw%2BxrxS3PzM4dXGRrMaiGa0ml9j4GD3H7ZKzgZ0yeKH5QFWXeZwLuqSvp19BTCaBcZJtaApLfN5%2F%2FMiicWvCF01XDCU9UKZTIMaHc6Ln4OSxlvf%2BHBXyKiBHax6f5jeXQFUnDOJuOl5bqRvwunW%2Bla%2BiZ8mgvz7fvdN5I5zyieZTNLvbbHLAza9nRJOcgQA5Jir1ZgWDkh%2FgMR%2BVITxlKwZQRwVD2EyLXT30ubaGCAuCqvmWlNxCzPLykrIrdFmM1PVXuNG%2FKKd61jw%2FtQ1YFaRs%2FMIPwicoGOqUBsWwns5IV3sy2pQNzsBmPfgL28JrKvGSvMFtmQU5ZJgS3PHONZwGd9%2F0OEajMpTvzedaWnSkqT7LxWS8LiAcNkOeNASzNwY2Z%2BaYhoCEC5woDJFftfcRPvLEHEh4Ede07%2BkSiASpZxOaXE50qPx%2FhBeqd7uln%2BHZG9KYrZ8zXMINEzHaAP2egNp3VQIwhzGRs%2FXUGJA9BS8tnxQ9Q5qe1MKRA1Lcy&X-Amz-Signature=82b5d141a2351cd951a0fede03785ced60df9e7105c6c0fdb0f5a88ada8e9964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZWKZAA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQvuG77UdD5YMl9Ft33gScNxd0rW0m4OgvIsg3mixXYAiEAhle0cr2GrS52xEIBJd1fDen9BbydgEl%2FwggylfOtUxgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDt3q9TOEmTXPThk3CrcA0sScYIrqD6j83m%2F7DAA4Nv5X3DRrhEmi9DOfq3NH2H5ZzuPkYYBUP8kPm%2BoARMYZHTgqVEolweHG1ogNoxXKEgroY%2B0H2c5Ci93sOQsirHiIx1Hv0%2FIblUqm97G50Vs4CAvD3D7vH9MMGup3vum2nnXoTBv%2BwEaRXjmkHzpF3GMsylM6%2FKjGkXSQCQI%2BQsarrhEWSukV0ZakyZ4VAbElmMze7x68ztYuwbHUGOXL0YFbJyz1%2Fox3dhc3aMuy8HSB46Yn24JyN9nrCodRDOlZfiieqcWlYHSMKS0lPC0OYc%2FMjEaaGGLt5t0hvN4IGKqDQpmWDfTWegppM5fUCE8%2B20gB%2FFGI5qkgFyCw%2BxrxS3PzM4dXGRrMaiGa0ml9j4GD3H7ZKzgZ0yeKH5QFWXeZwLuqSvp19BTCaBcZJtaApLfN5%2F%2FMiicWvCF01XDCU9UKZTIMaHc6Ln4OSxlvf%2BHBXyKiBHax6f5jeXQFUnDOJuOl5bqRvwunW%2Bla%2BiZ8mgvz7fvdN5I5zyieZTNLvbbHLAza9nRJOcgQA5Jir1ZgWDkh%2FgMR%2BVITxlKwZQRwVD2EyLXT30ubaGCAuCqvmWlNxCzPLykrIrdFmM1PVXuNG%2FKKd61jw%2FtQ1YFaRs%2FMIPwicoGOqUBsWwns5IV3sy2pQNzsBmPfgL28JrKvGSvMFtmQU5ZJgS3PHONZwGd9%2F0OEajMpTvzedaWnSkqT7LxWS8LiAcNkOeNASzNwY2Z%2BaYhoCEC5woDJFftfcRPvLEHEh4Ede07%2BkSiASpZxOaXE50qPx%2FhBeqd7uln%2BHZG9KYrZ8zXMINEzHaAP2egNp3VQIwhzGRs%2FXUGJA9BS8tnxQ9Q5qe1MKRA1Lcy&X-Amz-Signature=649efad6fe5324916323368af470e66a262174aea6b238b31bd226b4a0c9b98b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

