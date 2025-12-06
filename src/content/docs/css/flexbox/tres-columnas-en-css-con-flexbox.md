---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTZN25X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVES721YsMj4i4jjus6TJHDnN%2BasH4PL80eark%2B8idzgIhAMYUiZcGL9xJ1LOuCvB4Q0Yb0eYMjtp1sdVxqWhDhVXiKv8DCG0QABoMNjM3NDIzMTgzODA1IgyIqLuTleBsZ8QpWJMq3APg2VQSIzj74zvWoxAUSTdKx2ryV9K7ruPbe%2B%2Fh8%2BJlLA2wh93puHIcuAE0aIquKu3IRfr35nN1JoOBawVMsSB2xqS2zbwSgHpgTN6zv9rlrJLGUautYcjgsYZ2eHVyuDd4N2hoi54uNtDbiLNnjNW2ZkxswzPVh1K%2F0ojPmNr1Tf28UH5u4mM2caNKuJDPkdcSQrRZ%2FvgM76mBzGCQoiVBYoYxjML%2BB5hwz2go%2FFYkRW9fwQunN6aKv%2F4prQCmSG9x99gsRHRhDRQAnoT%2BZj7dUH5OnrvJHFHxtw%2FNitVvf8fi2C%2B1S%2BxHOLO2vdeR7EdULZnwYne3fwYUBZc8wc6ylxdEJoiELUmoOTIxmKcQgFmqR6lJanr%2FbgBAzpExZrubqvyGbESTGgf2kLai3sukwFrrByYejYKgJpUR0frGCGp6oqmpOKv23rHKPQwpuf%2Bmgj4SttsFupeYKUCB5eWJjLkF6kZZzkQM8O220FUgw1jNthkIA16vONRtxMKQqlfSgpyBLjxaxANKP1Izqw011rrgYZKlDSjT%2Byep838n40TMNiiScf%2BC0dfEnM2IsDMTT3fL4sM82zm1NKa0XlyC%2BgjrSfNJKEfRRXT1RYr1JrJWKR68dio2xIytijDC3s7JBjqkAVDF8qIwQLskg7lMUQJ%2Fr1ij%2Fw8htnUkc7B0jJU1qLXKPSB%2BJwY9t%2BU1d%2FFWhvkyOtpLM%2BkOcWYuxYvGfcbPuLN96ZyKFsR1LLVprMLU1yYIZjOci%2BeHIK8L4kWkMbCFWNbaDgFy69VvtrR1WvyZP0V1BoqKHwdGokucy3e6kMXVFgEpP9djmf%2FVd2jra4F%2BckH0Tp6ByncuJ9z9WJmDLjcvXK0n&X-Amz-Signature=e4d7b4c04645e442c93d9123c8ae4e92e904d730f2729e8a875716405a94888f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTZN25X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVES721YsMj4i4jjus6TJHDnN%2BasH4PL80eark%2B8idzgIhAMYUiZcGL9xJ1LOuCvB4Q0Yb0eYMjtp1sdVxqWhDhVXiKv8DCG0QABoMNjM3NDIzMTgzODA1IgyIqLuTleBsZ8QpWJMq3APg2VQSIzj74zvWoxAUSTdKx2ryV9K7ruPbe%2B%2Fh8%2BJlLA2wh93puHIcuAE0aIquKu3IRfr35nN1JoOBawVMsSB2xqS2zbwSgHpgTN6zv9rlrJLGUautYcjgsYZ2eHVyuDd4N2hoi54uNtDbiLNnjNW2ZkxswzPVh1K%2F0ojPmNr1Tf28UH5u4mM2caNKuJDPkdcSQrRZ%2FvgM76mBzGCQoiVBYoYxjML%2BB5hwz2go%2FFYkRW9fwQunN6aKv%2F4prQCmSG9x99gsRHRhDRQAnoT%2BZj7dUH5OnrvJHFHxtw%2FNitVvf8fi2C%2B1S%2BxHOLO2vdeR7EdULZnwYne3fwYUBZc8wc6ylxdEJoiELUmoOTIxmKcQgFmqR6lJanr%2FbgBAzpExZrubqvyGbESTGgf2kLai3sukwFrrByYejYKgJpUR0frGCGp6oqmpOKv23rHKPQwpuf%2Bmgj4SttsFupeYKUCB5eWJjLkF6kZZzkQM8O220FUgw1jNthkIA16vONRtxMKQqlfSgpyBLjxaxANKP1Izqw011rrgYZKlDSjT%2Byep838n40TMNiiScf%2BC0dfEnM2IsDMTT3fL4sM82zm1NKa0XlyC%2BgjrSfNJKEfRRXT1RYr1JrJWKR68dio2xIytijDC3s7JBjqkAVDF8qIwQLskg7lMUQJ%2Fr1ij%2Fw8htnUkc7B0jJU1qLXKPSB%2BJwY9t%2BU1d%2FFWhvkyOtpLM%2BkOcWYuxYvGfcbPuLN96ZyKFsR1LLVprMLU1yYIZjOci%2BeHIK8L4kWkMbCFWNbaDgFy69VvtrR1WvyZP0V1BoqKHwdGokucy3e6kMXVFgEpP9djmf%2FVd2jra4F%2BckH0Tp6ByncuJ9z9WJmDLjcvXK0n&X-Amz-Signature=e9b0ddaea64fa6876b67efaf0ae16d2d517c241eeef4b289fa46e0d019f90ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

