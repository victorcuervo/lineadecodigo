---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGD463GY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgvKTXdbCCyRxOsIamc7DUL3yPoRK4IfOIomw4hJAX2AiEAgWOwA8q0NlqM0TcWX7vSpx0m8HsKP438iyts3DGuCUIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOTp92LavH1njIh1OSrcA5wMXOV3EvOgm1KPzeaBAnFkqP6puvoKLv3TLDJNYpWDI2gScQOvdlO5FtXkGCb7DnYa1sSYgnLjfbkTUphClJYBc5JRmqazX0l5mb2z6%2FJmjr17p8ryDZEsoWFayfR9TFxU%2BH0NXRzaAC6Y5d3p3%2BoijIcMbqRGl%2B85FJnbV6eMTSwgFhPWVgkEefMPT3X72wQz5%2FifvL7YywSjFLTBGxjkSZkMGWeXMYktXpXA6Wav9ftJXUbj32Paj6BevhxiqyxwquRo%2F0uJ5ve%2FQx2Bt0ZYWYYKL8%2FSqVzrlOONzYC0%2B2F5HB1KkrOw6hqu%2Fi%2Fa8t5o6gbxgXNjQ1c0bjUvpSJ7R5sSJ8uDRPYZNszel0OuA449J0DIjRdSpLYTbsgE3H4x9fggEkldb7Ux8G%2BX9ifkYJHXb9Lrvpy8t7gvDWgOvb5t8ZXoEnkn8ORCOF9IPO1b61HtamidO9s3vl1GHxkF%2BACthXcZTeFojvVxQDO9kXCN9hGime57uBaY4Y7KMLz04%2BbZ9okdQgcY2BQ0PpxKYhbE9QhgOpY0RuMCbLkD60kmuZ7By7D4U2c8Aq6L%2FNUaD2ZB1m%2B5tp5r7YSCCrJDK8NnklIoSrfDzj45u1%2Bs9RGBwVHtVYRB13K1MNzUyskGOqUB5of5YdfhwwGveVtYrMeNZANPRr16il635ixSBNalP%2Fq9TWdi3RxAP7ixZuXnFtdZJ6dRuP9TsSBzUHcN95%2F0AHUJDGZT0yyTKSB88JYsODrNkdvCENx0Kg1A2ebWHvaAhvZQHHSLBQb4ggDRo2BBWJfEQsuIj3X60pPk%2FzEve2BJ84xXJjwx%2FtgBoVXFbl8IPXIPCKLRNqnLyl6M6xW9kBhUM1k5&X-Amz-Signature=4e1bdc120bfc3458bd960601d7667a188ff074128cc68cf841731b15a40f793d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGD463GY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgvKTXdbCCyRxOsIamc7DUL3yPoRK4IfOIomw4hJAX2AiEAgWOwA8q0NlqM0TcWX7vSpx0m8HsKP438iyts3DGuCUIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOTp92LavH1njIh1OSrcA5wMXOV3EvOgm1KPzeaBAnFkqP6puvoKLv3TLDJNYpWDI2gScQOvdlO5FtXkGCb7DnYa1sSYgnLjfbkTUphClJYBc5JRmqazX0l5mb2z6%2FJmjr17p8ryDZEsoWFayfR9TFxU%2BH0NXRzaAC6Y5d3p3%2BoijIcMbqRGl%2B85FJnbV6eMTSwgFhPWVgkEefMPT3X72wQz5%2FifvL7YywSjFLTBGxjkSZkMGWeXMYktXpXA6Wav9ftJXUbj32Paj6BevhxiqyxwquRo%2F0uJ5ve%2FQx2Bt0ZYWYYKL8%2FSqVzrlOONzYC0%2B2F5HB1KkrOw6hqu%2Fi%2Fa8t5o6gbxgXNjQ1c0bjUvpSJ7R5sSJ8uDRPYZNszel0OuA449J0DIjRdSpLYTbsgE3H4x9fggEkldb7Ux8G%2BX9ifkYJHXb9Lrvpy8t7gvDWgOvb5t8ZXoEnkn8ORCOF9IPO1b61HtamidO9s3vl1GHxkF%2BACthXcZTeFojvVxQDO9kXCN9hGime57uBaY4Y7KMLz04%2BbZ9okdQgcY2BQ0PpxKYhbE9QhgOpY0RuMCbLkD60kmuZ7By7D4U2c8Aq6L%2FNUaD2ZB1m%2B5tp5r7YSCCrJDK8NnklIoSrfDzj45u1%2Bs9RGBwVHtVYRB13K1MNzUyskGOqUB5of5YdfhwwGveVtYrMeNZANPRr16il635ixSBNalP%2Fq9TWdi3RxAP7ixZuXnFtdZJ6dRuP9TsSBzUHcN95%2F0AHUJDGZT0yyTKSB88JYsODrNkdvCENx0Kg1A2ebWHvaAhvZQHHSLBQb4ggDRo2BBWJfEQsuIj3X60pPk%2FzEve2BJ84xXJjwx%2FtgBoVXFbl8IPXIPCKLRNqnLyl6M6xW9kBhUM1k5&X-Amz-Signature=bce2b24d802019933d91b6fdb3c460523c85811ba62327da8a0b6b069eff8b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

