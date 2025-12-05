---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7RDQ6FY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb2AJwF6Pa3pYnBLOdOl6ZsSwJ5RFiVF6a7vOWuODvUAIgML2Vx%2Bg3gAz7qvEYU7IBA%2Bh5qRjGUqatc5b2tf9oJBEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFTM0923JH2kJqAfYCrcA82U1cL4vLzxMxfjQNaAtvGbt%2F65XSGrDaFFYJICTyOZpqmIFytTOb1pmYofA3y6CSqIggZTFTxRC5n8qXPZ8qou74OLIQBaH%2BFSdhjus0DwfCSsjoqMiNneTmb4zJyvHGK%2FdB2Ov7AtNkIkDPihByA2156sb9yVl48EPj4X8Tk7CD%2BfRnQ9CyvtxtR5s5TcpY7F6gKLzzKSh1ygdis%2F8QkbDhbMZQLnb2j8ReAYxBKgpG6EQZYiRhIRXYElci4qGRIvxAKN7doqYr5EzpTRjKNqI4jjLmVgATtgKw%2Ft6olANqoNJXwzHqLanOw4NqfCpmMxEyPbrW%2FfykmlluV4vcIry%2FB9K477bNXhoXkg%2BEj8l3RVeTzRoRXHY84L89rv%2FJJQqpmDBUEW7LMJQcGzQyj1lGj6ZdwSxkGocKt4CGNSTwIUyU%2FvdRInniaGhrFr5271pGcg28CCFAwMvcdcjcwYqp8w4S%2FKznWSXnMoXKBm91B%2BIKSGhouY00v4NuCf8FFipfv%2Btfn4Koej20Idris%2FwDv3A2DTYYeZ1lH8kma15XXF3YQMr5gKH%2BxknXSRJ0RvWJ1PRlBScRehoXOsCCZFXWYJO0GJEpGdlewsNqfgEkG%2B1sTsZ8A1qiJ3MPePzckGOqUBIW7cHzSo1RYi7J8MgKn8P%2FFXAuHTJg%2FyXRgdZdxfQ1bYkZNlb7fb38yFDlFuEThGwQxQ%2BJA5jqvKxZ0vfKPFirXQinP78FwXFr0NBr1kGjtmSXiwlJCeuWia3uEh%2F7%2FTwzov7KF2eiJD5Q1VkTrkXlPQIJaDo7CwQpHvuaJLM8bnPk54Y8gD7eh%2B6fSbEXSbuP1a74gax%2BtNuDpJrNvQJxktxSsc&X-Amz-Signature=d86ff6754c3360c24bdcfe51a8dfdad9ab8620c79ed0a11c61dc442bc9872991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7RDQ6FY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb2AJwF6Pa3pYnBLOdOl6ZsSwJ5RFiVF6a7vOWuODvUAIgML2Vx%2Bg3gAz7qvEYU7IBA%2Bh5qRjGUqatc5b2tf9oJBEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFTM0923JH2kJqAfYCrcA82U1cL4vLzxMxfjQNaAtvGbt%2F65XSGrDaFFYJICTyOZpqmIFytTOb1pmYofA3y6CSqIggZTFTxRC5n8qXPZ8qou74OLIQBaH%2BFSdhjus0DwfCSsjoqMiNneTmb4zJyvHGK%2FdB2Ov7AtNkIkDPihByA2156sb9yVl48EPj4X8Tk7CD%2BfRnQ9CyvtxtR5s5TcpY7F6gKLzzKSh1ygdis%2F8QkbDhbMZQLnb2j8ReAYxBKgpG6EQZYiRhIRXYElci4qGRIvxAKN7doqYr5EzpTRjKNqI4jjLmVgATtgKw%2Ft6olANqoNJXwzHqLanOw4NqfCpmMxEyPbrW%2FfykmlluV4vcIry%2FB9K477bNXhoXkg%2BEj8l3RVeTzRoRXHY84L89rv%2FJJQqpmDBUEW7LMJQcGzQyj1lGj6ZdwSxkGocKt4CGNSTwIUyU%2FvdRInniaGhrFr5271pGcg28CCFAwMvcdcjcwYqp8w4S%2FKznWSXnMoXKBm91B%2BIKSGhouY00v4NuCf8FFipfv%2Btfn4Koej20Idris%2FwDv3A2DTYYeZ1lH8kma15XXF3YQMr5gKH%2BxknXSRJ0RvWJ1PRlBScRehoXOsCCZFXWYJO0GJEpGdlewsNqfgEkG%2B1sTsZ8A1qiJ3MPePzckGOqUBIW7cHzSo1RYi7J8MgKn8P%2FFXAuHTJg%2FyXRgdZdxfQ1bYkZNlb7fb38yFDlFuEThGwQxQ%2BJA5jqvKxZ0vfKPFirXQinP78FwXFr0NBr1kGjtmSXiwlJCeuWia3uEh%2F7%2FTwzov7KF2eiJD5Q1VkTrkXlPQIJaDo7CwQpHvuaJLM8bnPk54Y8gD7eh%2B6fSbEXSbuP1a74gax%2BtNuDpJrNvQJxktxSsc&X-Amz-Signature=f0780358a9813f68b263f07ec72cc81dd8079c9614ce382b500d9381327298b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

