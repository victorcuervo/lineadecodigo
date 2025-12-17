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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7Y7KKN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOM4jtd%2BCqdudqp1RsKQI5DyVKsLHgj0phZaCh5%2FzlMwIhANOEFVyadiXOOgueo5RosgubdyWlEXCnNXxMHndtQlCYKv8DCHIQABoMNjM3NDIzMTgzODA1Igy1m%2B04y0FITBRRERUq3AOhh%2F6SiFJ6LERX4gHJBla2ncXI00rS0mqkts9WSW7xYSAIKEcisJ9psqjlEboz5XA1Vo80zZH5H1SQHCeFnowa%2BhQ1wZQ%2F8znyff0iS5zTppd7Qc6qQ2P%2BsqiXEg1t5i5xaEdddEoLCp1ZcpZUPzOJaZgiKF1PocnjWOpnLDVVU%2FlAZjUqfTj04Vgrvu%2FkpdxaH0Yq84sPWl%2BpdZVzYlj55TQawrW8EVp2Y8w7%2BbBceU%2FPaU2WSuJyfbmOF5wnnVmHBpbmOWd1jegRB9L0cSdpu%2FOWYHbEW6He41Sqbso3g6VElFYUjK9Jh9ZuDFlP9KDIuzV9CPkg0w9BcjMB0N1d19LKMyfbNP3zJXnePUmbH666gt22lunj%2FQr2WbZKiDj3iDnlgBvnkptGgy%2B3BGnyDaG5b2MK5kagQZamfLguc6mOlTxwjI8jVHwM4dldn1jtNawIzTw8q%2FSvJNn0l03YhK6jOm0hvydfHWgTZJBXpeloBwlncltcDHmJ4cGOTgOoCcY6RubpNSSXa4%2Fpbk47%2BxcV6MowBvTKt1UGeGVQTenmu5fCXnhGrQVSW1lfrJb%2B6etZrz%2FTi3Q9Fd%2ByxF64COpReDXpi5zDXluGL7wNyiknHELJ%2BPjETn%2FIdzDL%2B4fKBjqkAelmiohR0w6fWPXRx4H5k%2FS7spmIJo%2F5Ge9DHLUVg5eoa47LWRISnmD9EORh%2B3eSyy00pSDgrukKqRYeSkXoSFWlGpA4WL3wIV1IbltCD0DBfQIql1wVH9DzlboBCoq0UVohNM21pQXRbjV%2BLeW4zIK8UiwJ0GmSu%2Bo8aw2K%2FV055Hijpco65laBnkLg06xfAagzoDHvB22HoI%2FxbmK%2FYwrGRgLa&X-Amz-Signature=9ab7eb7c6dc099a861e7d125b73740d829780513fdd181421d5dedb2af3dc323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7Y7KKN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOM4jtd%2BCqdudqp1RsKQI5DyVKsLHgj0phZaCh5%2FzlMwIhANOEFVyadiXOOgueo5RosgubdyWlEXCnNXxMHndtQlCYKv8DCHIQABoMNjM3NDIzMTgzODA1Igy1m%2B04y0FITBRRERUq3AOhh%2F6SiFJ6LERX4gHJBla2ncXI00rS0mqkts9WSW7xYSAIKEcisJ9psqjlEboz5XA1Vo80zZH5H1SQHCeFnowa%2BhQ1wZQ%2F8znyff0iS5zTppd7Qc6qQ2P%2BsqiXEg1t5i5xaEdddEoLCp1ZcpZUPzOJaZgiKF1PocnjWOpnLDVVU%2FlAZjUqfTj04Vgrvu%2FkpdxaH0Yq84sPWl%2BpdZVzYlj55TQawrW8EVp2Y8w7%2BbBceU%2FPaU2WSuJyfbmOF5wnnVmHBpbmOWd1jegRB9L0cSdpu%2FOWYHbEW6He41Sqbso3g6VElFYUjK9Jh9ZuDFlP9KDIuzV9CPkg0w9BcjMB0N1d19LKMyfbNP3zJXnePUmbH666gt22lunj%2FQr2WbZKiDj3iDnlgBvnkptGgy%2B3BGnyDaG5b2MK5kagQZamfLguc6mOlTxwjI8jVHwM4dldn1jtNawIzTw8q%2FSvJNn0l03YhK6jOm0hvydfHWgTZJBXpeloBwlncltcDHmJ4cGOTgOoCcY6RubpNSSXa4%2Fpbk47%2BxcV6MowBvTKt1UGeGVQTenmu5fCXnhGrQVSW1lfrJb%2B6etZrz%2FTi3Q9Fd%2ByxF64COpReDXpi5zDXluGL7wNyiknHELJ%2BPjETn%2FIdzDL%2B4fKBjqkAelmiohR0w6fWPXRx4H5k%2FS7spmIJo%2F5Ge9DHLUVg5eoa47LWRISnmD9EORh%2B3eSyy00pSDgrukKqRYeSkXoSFWlGpA4WL3wIV1IbltCD0DBfQIql1wVH9DzlboBCoq0UVohNM21pQXRbjV%2BLeW4zIK8UiwJ0GmSu%2Bo8aw2K%2FV055Hijpco65laBnkLg06xfAagzoDHvB22HoI%2FxbmK%2FYwrGRgLa&X-Amz-Signature=4ccf7d0fc5b579d3ddfb3f2ccb16e4d0f9cebdc9b630799761c53e122f72165e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

