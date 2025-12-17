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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHLFTGR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7yEb4ZA%2Fog6EvXKmLI%2B1t6yR8bjWdKitOLqdxF%2Bm%2BRwIhAJz3VLahqTVFJFrM%2FSGo4j9xyUlTmVksmdyRw0SH8yl5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igxv%2FbVFetBOIUYQy5Yq3AMXe6BvhyZT9X27myXKzI1XXezq%2FdMJ3m4xg3v7Biae7L3E6RMnFbxJ%2FRmnSJS1r8hckBByWA%2FJUwywVX3ugzLZ2Y0HhvAejcbNo3VwaiGqmi%2FBA9SImdVWDOp86y6Be%2FFTWBhtu1m%2B5E7%2BKBnC%2FvMcBb7MnEdhxkQxIjvh2lP%2FgulFfrQCpfi4JfJBbeX%2B1D3PRg01Pitu7LZrxwy2WEnbLpl08pV5Qu1MiwmLbVRPkDAHfkzE95UJOGqRXQ5suaQ8K3Jc7JQhRB4sjvO90PQ8kGYFw62KGo%2BCLS5odlpPPycffv0ZFhUIWghysHc3lKEiQQlVWYMLVXfzfPDyM1B%2BbRqm8VTl7jcuI%2B%2B%2BtUC5ID9FkBpT%2BdY2FHqIatALwH8jXGtMCE73kS3g3CzxKarHLu8G%2FMw4RKXJrKmpPI6uIhn%2FCCEU6r5SS1s%2BEPdO8zrqVbUVf6X33iyXd6JTIxfoFuIwlsmSWgL3urcjbTpKPGgdTbvyY%2FMrF1sVPzsrag9xczO1oJ4EQNELkGAII%2Bup6QypxGR1RY3izUC0gs5fPXGmjUfAJNuW6tvSbot%2FjrkPPIlG3xjxAdJRToZ3yVAPlhvr74qaYN%2FuNavcamcurXg%2BeiDjnFv%2B8vF76TDKgonKBjqkAb8uyuZfei%2FUYteQJhtNU1%2BOnE5bhHGwZNa6%2FgskF90LhZamhA6KOFpEoRKaqI2Zr%2Bn5pV%2FCkcqMRhpd458YDR7k%2B6Y2nIhLVnGFt41qjr2DWIcMt7NmG4zhfZDx%2ByfZ8bAkdzh31IJYsvTIIGyuMXW4C%2BjDkjdHe7GQO5zHxgkHFj%2FxRZMDSp8rtmPFK9%2Bskcy24TqnlaH0eqYsMQNxW%2FSJEl8Z&X-Amz-Signature=d2f118c0a8df7ae7d1895e2f75fe5891fb939d88b19b5626393a4f7861b1a919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHLFTGR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7yEb4ZA%2Fog6EvXKmLI%2B1t6yR8bjWdKitOLqdxF%2Bm%2BRwIhAJz3VLahqTVFJFrM%2FSGo4j9xyUlTmVksmdyRw0SH8yl5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igxv%2FbVFetBOIUYQy5Yq3AMXe6BvhyZT9X27myXKzI1XXezq%2FdMJ3m4xg3v7Biae7L3E6RMnFbxJ%2FRmnSJS1r8hckBByWA%2FJUwywVX3ugzLZ2Y0HhvAejcbNo3VwaiGqmi%2FBA9SImdVWDOp86y6Be%2FFTWBhtu1m%2B5E7%2BKBnC%2FvMcBb7MnEdhxkQxIjvh2lP%2FgulFfrQCpfi4JfJBbeX%2B1D3PRg01Pitu7LZrxwy2WEnbLpl08pV5Qu1MiwmLbVRPkDAHfkzE95UJOGqRXQ5suaQ8K3Jc7JQhRB4sjvO90PQ8kGYFw62KGo%2BCLS5odlpPPycffv0ZFhUIWghysHc3lKEiQQlVWYMLVXfzfPDyM1B%2BbRqm8VTl7jcuI%2B%2B%2BtUC5ID9FkBpT%2BdY2FHqIatALwH8jXGtMCE73kS3g3CzxKarHLu8G%2FMw4RKXJrKmpPI6uIhn%2FCCEU6r5SS1s%2BEPdO8zrqVbUVf6X33iyXd6JTIxfoFuIwlsmSWgL3urcjbTpKPGgdTbvyY%2FMrF1sVPzsrag9xczO1oJ4EQNELkGAII%2Bup6QypxGR1RY3izUC0gs5fPXGmjUfAJNuW6tvSbot%2FjrkPPIlG3xjxAdJRToZ3yVAPlhvr74qaYN%2FuNavcamcurXg%2BeiDjnFv%2B8vF76TDKgonKBjqkAb8uyuZfei%2FUYteQJhtNU1%2BOnE5bhHGwZNa6%2FgskF90LhZamhA6KOFpEoRKaqI2Zr%2Bn5pV%2FCkcqMRhpd458YDR7k%2B6Y2nIhLVnGFt41qjr2DWIcMt7NmG4zhfZDx%2ByfZ8bAkdzh31IJYsvTIIGyuMXW4C%2BjDkjdHe7GQO5zHxgkHFj%2FxRZMDSp8rtmPFK9%2Bskcy24TqnlaH0eqYsMQNxW%2FSJEl8Z&X-Amz-Signature=8219d810df419245d7cf2b67f33ac5da42c20168905600801bd03a4cd0eebb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

