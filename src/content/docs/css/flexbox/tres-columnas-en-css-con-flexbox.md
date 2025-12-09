---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYAJERES%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2Fm9D2%2BmypYkw%2Bpr%2BEhJJUbDvejU5qb3giavQ1FU3yQIgNBdR29fka3EcsRCV6SrGBvAaHnr7BFsB4GpC1MzOFMsqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuO3Ng%2FgHEHGFVTlCrcA61uKXwn4pbv47zjAAbvWnwsWBPs6TuqyfwOrTl6IiddwKS0eOdFdug4Wym3aepJqmQEow3Iuq9iKO%2FaSx0%2BkHj6PqTKmGxfbf8c9gpWuSk9uitvmLsBOo90Yb4SnrARHhAgkevUTrHY0A0Ms1odjBUU9OmT%2FV91FUFlWhEDtEVuL17uXWHHzBfQvr9oQzTx1ewT9qykpjv9dORDAHOERso4YxNTp%2BXr3mN8KgWpSYs5v83dTSuADjICe2jZ7aTXAtPVIb0iADtoTV7eRrNw5W9xRT2fChlLQ6ooi9PHenDImeYl2JylQlXskAPIm8nlaV0s8Ptd%2FUT5VjKMHcw0gsnt9U2HBAlLUz3iNp%2F%2F0%2BrCD8l92r3Ol57AAZ6Y8IiSOLvM9nfrtrLkvIKE00VeZhd7JaIOa5Jazzg%2B5Af2odz%2B%2BpDfQAdqyDLgCPwgqoT3YNgIfMKZ5n778L6vESN8%2FeDnSFs2EwtjCjswmWlGxM2CXmW%2FZeaWKgg%2BHSYEMiGmgwnCjNntHwHWn6QPcD2nHoxA3vlE8dx1Z2Cv9j%2BSBDLScjLqwljv%2Bey5vqcsmOQB9sSQr7fRT6%2B0YIegvDjQGP6mceygXCYhghrYSY9ovsTkOPcRZMPHYeZpKS6tMM3C3ckGOqUB0uBodNsKeqvYF6IsjWngclzg4Y%2BAJ5trmf%2BSayjiOAuae8aKkml%2B0tu1S0xMqLlL4EXi3YQ24%2FHwdo%2Fj5%2BA5m5SGYe2uqdADTmmQzs2FLfya4iwiEnDZFYXOJ%2FXnvem7vnNRJ%2F6QCUM%2FOYGOF7tBF7uYvyMGTDmwdnI47Y3qbRZrFJfNikVqh3YVTzKA7D6Wxo%2FtlzPqmwGjYGcUxJdbWGV23mkl&X-Amz-Signature=d501180b794c0d3d8579410e9a8f81539a9640d623b2c6612d9cef27667d02c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYAJERES%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2Fm9D2%2BmypYkw%2Bpr%2BEhJJUbDvejU5qb3giavQ1FU3yQIgNBdR29fka3EcsRCV6SrGBvAaHnr7BFsB4GpC1MzOFMsqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuO3Ng%2FgHEHGFVTlCrcA61uKXwn4pbv47zjAAbvWnwsWBPs6TuqyfwOrTl6IiddwKS0eOdFdug4Wym3aepJqmQEow3Iuq9iKO%2FaSx0%2BkHj6PqTKmGxfbf8c9gpWuSk9uitvmLsBOo90Yb4SnrARHhAgkevUTrHY0A0Ms1odjBUU9OmT%2FV91FUFlWhEDtEVuL17uXWHHzBfQvr9oQzTx1ewT9qykpjv9dORDAHOERso4YxNTp%2BXr3mN8KgWpSYs5v83dTSuADjICe2jZ7aTXAtPVIb0iADtoTV7eRrNw5W9xRT2fChlLQ6ooi9PHenDImeYl2JylQlXskAPIm8nlaV0s8Ptd%2FUT5VjKMHcw0gsnt9U2HBAlLUz3iNp%2F%2F0%2BrCD8l92r3Ol57AAZ6Y8IiSOLvM9nfrtrLkvIKE00VeZhd7JaIOa5Jazzg%2B5Af2odz%2B%2BpDfQAdqyDLgCPwgqoT3YNgIfMKZ5n778L6vESN8%2FeDnSFs2EwtjCjswmWlGxM2CXmW%2FZeaWKgg%2BHSYEMiGmgwnCjNntHwHWn6QPcD2nHoxA3vlE8dx1Z2Cv9j%2BSBDLScjLqwljv%2Bey5vqcsmOQB9sSQr7fRT6%2B0YIegvDjQGP6mceygXCYhghrYSY9ovsTkOPcRZMPHYeZpKS6tMM3C3ckGOqUB0uBodNsKeqvYF6IsjWngclzg4Y%2BAJ5trmf%2BSayjiOAuae8aKkml%2B0tu1S0xMqLlL4EXi3YQ24%2FHwdo%2Fj5%2BA5m5SGYe2uqdADTmmQzs2FLfya4iwiEnDZFYXOJ%2FXnvem7vnNRJ%2F6QCUM%2FOYGOF7tBF7uYvyMGTDmwdnI47Y3qbRZrFJfNikVqh3YVTzKA7D6Wxo%2FtlzPqmwGjYGcUxJdbWGV23mkl&X-Amz-Signature=4654868823d3b7665f2fd4eb1308771f71ed547df4ca04badb5e843e91aa6337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

