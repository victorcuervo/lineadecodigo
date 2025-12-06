---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IP75NPS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESIKi%2Bk2M2Z4un%2FmVXx0Q%2FijvIvmdIoo8Y%2FVS7YB6pDAiEAtGkFWTGQbt%2BVpjPcTUcHP54pMc3tT1XLN4Fz1kqEm%2Foq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGO5a0Q5dT6QAWDZvyrcA2RQu%2BEMdfk4LcpRc%2FvcocWy7Gmp8OJK7%2B%2BZRRQGuZ9BucHiH9fPfoO8fkANqPEQWKbMoqZHzE0E5wAB6XvxRlWZ1vCl4FBsMku8vOrC%2BFK%2B0HXMhc9Fk4BhJXntSF3VqOAVfhH1u4yh2JNZ3AhG%2BV%2FhnbC9CF9IP8Mji8QCdKQMwe5fj4TQtfHzYRsoGPS1qatn%2FoqJsrbWqTOfs5etQtFp9nqicDPza%2Fpupxd74DYxiX5impyZAbO%2FD9Wtuy5QZIvVQxfFo2POZGQsLQ%2Fim6BDteSPXYlW2G%2B0srJlfu5VucRR%2BM%2FDO3FB4hEvGZDIrIUDEx0ABCRqHxrZRX82LlZg8dSBJNs0Q%2FqlaZ9H1tBfzNmwt6lGXG4yKyCo4Yp2O%2BBV27Srx28mNzgNwqAld%2BVlStP8wrTQYHUuw%2FmXHXMLm%2FY0P5HaZe3xgBeirTGsx%2Ba3FUAcU1fCHeLj4kBkVfWKIZjMY9Fhoy9ttheG2z7a0JqIf8IOD%2FbwB3btFnEOwusUEvtW2%2BROi4P9Hy%2FJ1NYbCWSpuVUcRX0c0xbSHxQsy9uqyl2F2NJiIbYscu7lN1v%2FdGVxKc8QEncjW0KA5xi7ARqvPzpwmNM9lgeta9FHYc%2F%2FoCuQfjZtbj%2BbMJzT0skGOqUBy8oawMH2SHELid6bEu%2BM2jnI9L%2FPGjH0j1r7%2FSSvzpAZ3jBLRkMS6SRabDOmp%2Bcj2FMm20A0iP8fD3RPMva4feeb2Gz19pGMp%2BMs09H5j6oEwRzVVPZ04NO8d4H019eU%2FGTcqvNnuu2SoB3agC5xqz61bK8YacM%2Fa6r7DExPTJR2D6h6PuqL%2B6CVeOfb7PBzyNi2rrFSPYFXIhoInf3u%2FfY2beDp&X-Amz-Signature=ecf0e2d129efe00f55784e8199f048db7b076f7f35bb69bd51e9febe8377565e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IP75NPS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESIKi%2Bk2M2Z4un%2FmVXx0Q%2FijvIvmdIoo8Y%2FVS7YB6pDAiEAtGkFWTGQbt%2BVpjPcTUcHP54pMc3tT1XLN4Fz1kqEm%2Foq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGO5a0Q5dT6QAWDZvyrcA2RQu%2BEMdfk4LcpRc%2FvcocWy7Gmp8OJK7%2B%2BZRRQGuZ9BucHiH9fPfoO8fkANqPEQWKbMoqZHzE0E5wAB6XvxRlWZ1vCl4FBsMku8vOrC%2BFK%2B0HXMhc9Fk4BhJXntSF3VqOAVfhH1u4yh2JNZ3AhG%2BV%2FhnbC9CF9IP8Mji8QCdKQMwe5fj4TQtfHzYRsoGPS1qatn%2FoqJsrbWqTOfs5etQtFp9nqicDPza%2Fpupxd74DYxiX5impyZAbO%2FD9Wtuy5QZIvVQxfFo2POZGQsLQ%2Fim6BDteSPXYlW2G%2B0srJlfu5VucRR%2BM%2FDO3FB4hEvGZDIrIUDEx0ABCRqHxrZRX82LlZg8dSBJNs0Q%2FqlaZ9H1tBfzNmwt6lGXG4yKyCo4Yp2O%2BBV27Srx28mNzgNwqAld%2BVlStP8wrTQYHUuw%2FmXHXMLm%2FY0P5HaZe3xgBeirTGsx%2Ba3FUAcU1fCHeLj4kBkVfWKIZjMY9Fhoy9ttheG2z7a0JqIf8IOD%2FbwB3btFnEOwusUEvtW2%2BROi4P9Hy%2FJ1NYbCWSpuVUcRX0c0xbSHxQsy9uqyl2F2NJiIbYscu7lN1v%2FdGVxKc8QEncjW0KA5xi7ARqvPzpwmNM9lgeta9FHYc%2F%2FoCuQfjZtbj%2BbMJzT0skGOqUBy8oawMH2SHELid6bEu%2BM2jnI9L%2FPGjH0j1r7%2FSSvzpAZ3jBLRkMS6SRabDOmp%2Bcj2FMm20A0iP8fD3RPMva4feeb2Gz19pGMp%2BMs09H5j6oEwRzVVPZ04NO8d4H019eU%2FGTcqvNnuu2SoB3agC5xqz61bK8YacM%2Fa6r7DExPTJR2D6h6PuqL%2B6CVeOfb7PBzyNi2rrFSPYFXIhoInf3u%2FfY2beDp&X-Amz-Signature=f71706e67dfb5068e29399152b0bb4158b159533b5aa5a7ba9704d513aaf410a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

