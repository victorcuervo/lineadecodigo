---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q47HUF25%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKOON4UWapVAbR0WjYfXC%2BsrpCEbwEBeCPSY%2FTxiVGAgIhAJaZsEwK1g0ds61wyYJuhNDRER8iUkM6h2PhGwisomw%2FKv8DCHMQABoMNjM3NDIzMTgzODA1Igx9grRAM5smae17XfMq3AMr%2B7VnpFCPnzXaH%2Bi15TrvLWXFlSQG4%2BH1n2MCxpg6smbPDV2r1eZonohlyH0uYt9q1870LIE6FqQF5OhhlcgbNxCH67d%2FNjShBl4sK6DK%2BX5m7Zoba%2B4EadnwPUgQIjOPH3jWLWxqr4deKrAsSTUginxleoBolGnHvUHf53msYeYs8wtWC5P9mQ5KK3cW%2FIbLY0Vcx%2Fio4xQ%2Blbde5tznHCDCn%2FQ8UCoT5SoADnyy8I3%2FahL9GPJlnq8f9ysmu2TTMha0jUCSHBr4Kp0QYGjKMCz00t%2BYL4vJKfe7fnON%2F3qSBbbhDNuf7T%2F27KRqrSsylW718qFnHtIMqhPPA%2BWun4gjK45bTzZKtLwVv%2B8QYiforYXaJcw%2BfpbOyoYxxi4NvUJvHrXn%2FaA%2BlXLN%2BE8X%2BXZDqANoTZjkvNJxeFUhyiVknCG23qhUTLhaGJ0V9%2FQ7cEWDNF1%2BaUn2rlUaM65YAEij8fn5cy9UVsWJYrhCGuAaokWklG6eUo1gOULi1OeLaJTsxeqUA589cyp1ZFGx%2Fs2Rv%2BuVblmvhbxcA0XAhNR%2BlLDIE5lhpvY%2FAl4%2FQrxXFiRC2OWqfpqRdpIL4qyWPKt%2B3bvJCWxTgQD1p6JmitedPdwd4AuoicwqsjCMidDJBjqkASfXYIKvk5LLuxrABEY7gtt4ru%2B0%2FtpdCjGtgNYn6AyLBrc1Pfyd16LcnPQPKW8l%2FfBtl%2FWIVsnz5ttpSsU6CN0gI8wQOFP%2BO2LQjaGvTIEgkEtp3q9v1KBrgE6SX6nc87B%2B%2BjtrxTr9XjbNOWtun3CiY4s8T%2Ffw4JjysQnX7Vs%2BEDbxSBkB4XVU8GQCbBkwtzPUJitbyiEMykJxQ6iS6j7D%2FDJM&X-Amz-Signature=c16741a99e03d031e1b9660e3912db1218c95536c678c16e9f8c44eb46e29280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q47HUF25%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKOON4UWapVAbR0WjYfXC%2BsrpCEbwEBeCPSY%2FTxiVGAgIhAJaZsEwK1g0ds61wyYJuhNDRER8iUkM6h2PhGwisomw%2FKv8DCHMQABoMNjM3NDIzMTgzODA1Igx9grRAM5smae17XfMq3AMr%2B7VnpFCPnzXaH%2Bi15TrvLWXFlSQG4%2BH1n2MCxpg6smbPDV2r1eZonohlyH0uYt9q1870LIE6FqQF5OhhlcgbNxCH67d%2FNjShBl4sK6DK%2BX5m7Zoba%2B4EadnwPUgQIjOPH3jWLWxqr4deKrAsSTUginxleoBolGnHvUHf53msYeYs8wtWC5P9mQ5KK3cW%2FIbLY0Vcx%2Fio4xQ%2Blbde5tznHCDCn%2FQ8UCoT5SoADnyy8I3%2FahL9GPJlnq8f9ysmu2TTMha0jUCSHBr4Kp0QYGjKMCz00t%2BYL4vJKfe7fnON%2F3qSBbbhDNuf7T%2F27KRqrSsylW718qFnHtIMqhPPA%2BWun4gjK45bTzZKtLwVv%2B8QYiforYXaJcw%2BfpbOyoYxxi4NvUJvHrXn%2FaA%2BlXLN%2BE8X%2BXZDqANoTZjkvNJxeFUhyiVknCG23qhUTLhaGJ0V9%2FQ7cEWDNF1%2BaUn2rlUaM65YAEij8fn5cy9UVsWJYrhCGuAaokWklG6eUo1gOULi1OeLaJTsxeqUA589cyp1ZFGx%2Fs2Rv%2BuVblmvhbxcA0XAhNR%2BlLDIE5lhpvY%2FAl4%2FQrxXFiRC2OWqfpqRdpIL4qyWPKt%2B3bvJCWxTgQD1p6JmitedPdwd4AuoicwqsjCMidDJBjqkASfXYIKvk5LLuxrABEY7gtt4ru%2B0%2FtpdCjGtgNYn6AyLBrc1Pfyd16LcnPQPKW8l%2FfBtl%2FWIVsnz5ttpSsU6CN0gI8wQOFP%2BO2LQjaGvTIEgkEtp3q9v1KBrgE6SX6nc87B%2B%2BjtrxTr9XjbNOWtun3CiY4s8T%2Ffw4JjysQnX7Vs%2BEDbxSBkB4XVU8GQCbBkwtzPUJitbyiEMykJxQ6iS6j7D%2FDJM&X-Amz-Signature=ad702ea856bf9354b7bd4e4949fdd62b058b47c48cb419caf0613810c8fbfb9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

