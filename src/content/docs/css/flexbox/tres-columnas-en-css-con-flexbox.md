---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVE3GP2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJmRzGGV14whCH4IgSo15tP0DQH3Y4%2B%2B7a4%2FNaieqXWQIhAOA%2FPFDYthFIM34RYBt3JcpwtpWWDMlvbF7nO7kXSZGcKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSi%2BWJL3xUhYcbmBMq3ANTcNqaoercBaEKTZANEzwg6bGLcLdHvPuMZjx3MYSRl%2B9q8QdsF%2BL4PamFt%2FY4LQx1yC8sAFxzPbfAPMPfXw3m8Ab18XGluMKIJ0X6nEHb%2B2lvd%2FHrczJgvdcLrR6mppUZTqRyu8OdbhPWx3ksZjN8iOSJzDBhCeCEubbvvaShNTPe7teQfGe4WXQnY%2FeiIuUsImaJ0nr8bGZA%2FYXkB0rMSc%2BlL5veBanZercrjGsCfT7t3zFONUwlOIWFxNwINtDVe7V2Ey4Do8uDOvNFJHRKJSwT1JJxGimNL%2BwX9t5P1FlDQWXaZeI1MwwtCdUoFnuA11Rrt4Pw93Y0bub5tulFnNXCnr%2BjEOc4b8reNkBlIZHhXd7n2HxOwZ4LmaGzDH%2FoWQR4B3V859s%2BgliCH1nNhdgERQGv4oFcuzps8oQaR1HMeXiii4lRaTf4I6Wk9zD41wbd%2FpRvy6vrYL%2FfF3%2BRrEsheOenFjl6Xh4ZYz3fPqS80L890w1zD0592iM%2BGZU66ApBGfJtbRyElrokRPzraMN77ESDCFvloWwLfz3mbDs45Ym2FayBRfwYPIHepSL6BXSvSdzgGZG8f%2FYPpIzd3oCBTCRR9%2BQxySoMWyLogR7CHgAHGMB34hghXzCr5d7JBjqkAWoz5sDaW1gBeePx6h9QrQDYQkyUjNAk0PcqqPnmpWRBqvBmM3aZ8ViFyhI%2FO6t2qY9OIcxAX5ol1T%2FUh1lNG5qG5VZPAtCSTR%2BYpjE%2BHxKHMOdVOX7WWflHLS1uGiX1yeHg1JFdM%2Fru8TEQqo8HaVa2mnk35%2FqshDl2DjWFI2GB%2BkY9h5n%2F%2F6j5bCygvO7S332LSRCxttT18V0zwSyp4%2F4KJz51&X-Amz-Signature=fd433528b2bf42a979aea6048988568888c5e5e29a132e1e04fb39631361c657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVE3GP2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJmRzGGV14whCH4IgSo15tP0DQH3Y4%2B%2B7a4%2FNaieqXWQIhAOA%2FPFDYthFIM34RYBt3JcpwtpWWDMlvbF7nO7kXSZGcKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSi%2BWJL3xUhYcbmBMq3ANTcNqaoercBaEKTZANEzwg6bGLcLdHvPuMZjx3MYSRl%2B9q8QdsF%2BL4PamFt%2FY4LQx1yC8sAFxzPbfAPMPfXw3m8Ab18XGluMKIJ0X6nEHb%2B2lvd%2FHrczJgvdcLrR6mppUZTqRyu8OdbhPWx3ksZjN8iOSJzDBhCeCEubbvvaShNTPe7teQfGe4WXQnY%2FeiIuUsImaJ0nr8bGZA%2FYXkB0rMSc%2BlL5veBanZercrjGsCfT7t3zFONUwlOIWFxNwINtDVe7V2Ey4Do8uDOvNFJHRKJSwT1JJxGimNL%2BwX9t5P1FlDQWXaZeI1MwwtCdUoFnuA11Rrt4Pw93Y0bub5tulFnNXCnr%2BjEOc4b8reNkBlIZHhXd7n2HxOwZ4LmaGzDH%2FoWQR4B3V859s%2BgliCH1nNhdgERQGv4oFcuzps8oQaR1HMeXiii4lRaTf4I6Wk9zD41wbd%2FpRvy6vrYL%2FfF3%2BRrEsheOenFjl6Xh4ZYz3fPqS80L890w1zD0592iM%2BGZU66ApBGfJtbRyElrokRPzraMN77ESDCFvloWwLfz3mbDs45Ym2FayBRfwYPIHepSL6BXSvSdzgGZG8f%2FYPpIzd3oCBTCRR9%2BQxySoMWyLogR7CHgAHGMB34hghXzCr5d7JBjqkAWoz5sDaW1gBeePx6h9QrQDYQkyUjNAk0PcqqPnmpWRBqvBmM3aZ8ViFyhI%2FO6t2qY9OIcxAX5ol1T%2FUh1lNG5qG5VZPAtCSTR%2BYpjE%2BHxKHMOdVOX7WWflHLS1uGiX1yeHg1JFdM%2Fru8TEQqo8HaVa2mnk35%2FqshDl2DjWFI2GB%2BkY9h5n%2F%2F6j5bCygvO7S332LSRCxttT18V0zwSyp4%2F4KJz51&X-Amz-Signature=1e7c9168525e03110d9f0daefa1d37158e7b60e62810d33fc61b0121016d06b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

