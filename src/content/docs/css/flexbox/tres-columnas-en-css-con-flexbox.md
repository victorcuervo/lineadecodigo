---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YUMX2Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtG6Q%2FWX3ReckjwHcxAao%2FULpJWvHtuClKvfrBuaPcFAIhANBt52lc4W0%2F7IDcbwSiJWx3wa9GhrLXyHTLKHDEh0rDKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIxcfKCDndg6fNCvIq3AMDVGKP8xGqEMOUVNqUCMKsdS6pr2sIKyOXO9doPgk23ypgkMWRdWUuHEW5VprHUYNUlFgNZXsUR4qZ5HaqvDJupAE5YG8yjDxl0WSkCZfnySiXEjD1XDlyVYq5EXgBId5LCcg2iqq6Tno6IHPVtavbfquVlTu8CS%2Bu2tB12Keiy9l86Xa2AGMWL1cbs7GQRAj%2FFO2tYpE2w3v8LmAS34%2FsOELc3qxeSYqdbd3YbvXIcQ2xZL5U%2BvEk2okz5EK%2FDnYYnoLimHyoE4jK1QozkfbnI0339udTaEMdIbOMjvNtdbwAZhEmLFlqcEiJ2adU7Ss7PIIw2Sl6LKEExsu7Ey0nOHVwg4WkT69By2FHlEWZSzukzTy72Anc5sVtvya5awkqNBBjcsdPqA1KsnBIEVvzFHFqodnmSrLRZtW8qjxUzhrSgZ1GY3Bvr2ZzokpLu69SVWK8dgu6%2Fis9ESwyHv4nz0UzD5u%2Fp79MnjG9rYiZd7jwlLuycuZsyOEqGizuHTD1PQAYUrzAaAng91NirOD9DtL6dthRZZ3aYpcha%2BO7JdJSftdDZ%2Ben5%2ByCFMroJg2Fsstm1Xgn2kRRa1SxQAYq1e1Hz3ojlw1s0Qu6Nh8xXQ8X3w2QO3uvCY1sBjCjmdXJBjqkAcnlSU0ozNxWdjUxxTKt6OdbEgh%2B9YEKGK8KdFoWGr818K%2FCMswcO40axfV8MM9Zz9EFXI8C%2BhVFqy81%2FrqPX5qI%2BIzQp1jZn6UUCCkC8BEel8G082yddjlq77ctiIPnMX%2Fl1D2x2pmYua0%2FWeedbcHuUgNVlq3FMVrqOadLW0B4lKUe49JKYcvf1XcL7BhOK052vXcEPpN8Dukl8rQrHlRbwufK&X-Amz-Signature=1257c8c67fc5d4683bda295807212a88f6dba472f7484708bc971c7a1cf77381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YUMX2Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtG6Q%2FWX3ReckjwHcxAao%2FULpJWvHtuClKvfrBuaPcFAIhANBt52lc4W0%2F7IDcbwSiJWx3wa9GhrLXyHTLKHDEh0rDKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIxcfKCDndg6fNCvIq3AMDVGKP8xGqEMOUVNqUCMKsdS6pr2sIKyOXO9doPgk23ypgkMWRdWUuHEW5VprHUYNUlFgNZXsUR4qZ5HaqvDJupAE5YG8yjDxl0WSkCZfnySiXEjD1XDlyVYq5EXgBId5LCcg2iqq6Tno6IHPVtavbfquVlTu8CS%2Bu2tB12Keiy9l86Xa2AGMWL1cbs7GQRAj%2FFO2tYpE2w3v8LmAS34%2FsOELc3qxeSYqdbd3YbvXIcQ2xZL5U%2BvEk2okz5EK%2FDnYYnoLimHyoE4jK1QozkfbnI0339udTaEMdIbOMjvNtdbwAZhEmLFlqcEiJ2adU7Ss7PIIw2Sl6LKEExsu7Ey0nOHVwg4WkT69By2FHlEWZSzukzTy72Anc5sVtvya5awkqNBBjcsdPqA1KsnBIEVvzFHFqodnmSrLRZtW8qjxUzhrSgZ1GY3Bvr2ZzokpLu69SVWK8dgu6%2Fis9ESwyHv4nz0UzD5u%2Fp79MnjG9rYiZd7jwlLuycuZsyOEqGizuHTD1PQAYUrzAaAng91NirOD9DtL6dthRZZ3aYpcha%2BO7JdJSftdDZ%2Ben5%2ByCFMroJg2Fsstm1Xgn2kRRa1SxQAYq1e1Hz3ojlw1s0Qu6Nh8xXQ8X3w2QO3uvCY1sBjCjmdXJBjqkAcnlSU0ozNxWdjUxxTKt6OdbEgh%2B9YEKGK8KdFoWGr818K%2FCMswcO40axfV8MM9Zz9EFXI8C%2BhVFqy81%2FrqPX5qI%2BIzQp1jZn6UUCCkC8BEel8G082yddjlq77ctiIPnMX%2Fl1D2x2pmYua0%2FWeedbcHuUgNVlq3FMVrqOadLW0B4lKUe49JKYcvf1XcL7BhOK052vXcEPpN8Dukl8rQrHlRbwufK&X-Amz-Signature=37cb6b6fb21b7fdeb30ca372f808ba0ed362b75415f2d32cc891ec0c00d725a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

