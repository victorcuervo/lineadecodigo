---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWW7GQF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASBx8e1%2F1xh1TwUQXiSfeov22ipYo5EMeVo83mkOYT5AiAchmCUmkW03VOikB%2BhAPh2ou2E3%2Bbv2LAcbkzFYLzPkCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2hOGkAPgqvLhnevpKtwD3Sn85WrkOKQXLoG%2BvOZrzple%2Fe7siB%2F6tGODHmfYh%2FUJNmnAh%2B1AfbHcrfCvei4boukff82pm2L3gxf4%2BNZ7Ek73glbXABoD2VZ3l9GE4oTD2Sfp0%2FT%2Fln58tQRnDzIyD3%2FS2grmq0Yv71mJFJfzeLuhJQVPv5x%2FGCnsIg136BqrBxtUfk4y28XffZNwTHUu7pQGuiJUilnuX9oMKq0BDtZhXSlCr7AhGGy47qBBTfoPj2zzAQAPcMhyt3uoObLZ%2BTidHep%2FCyg%2F3%2FXzdRzKStNzBybrbVt7VUpwoAB%2BjtdeYntDMDF9DDn4ngmcYqnsDzsHOouV%2Fbf5RkYwCgYrdtjrSQKpLSBUSJQ69Tkq9mg%2BEp%2BWLt5viMnF1ozlTzRSp3TDaMoYDNu4%2FqWiXZh%2Bj4teHqSZAEcyARF8sFISBCEF8TxhoD4SKhRFsZZU%2BwrGxqcdQml%2Bx8xbFDofkZRqjO59M%2FS038CCaPg0nRiBj5QsChdsky%2BAO%2Fxj1Yjx7v8dSL7E95D95QUIRPoZbU6vTsGgpigv4bUIRbWF9Fq2%2FcWxBAm0L9Ppc3kq9bR48p86mPiUrvc4tlbs%2FVVZV%2FIivUZmOw3ZEfRSIQfvbgZQQmczURp%2BKnx7VcKYi%2Fkw1aHYyQY6pgHwNCatl5uuEMkfAJESmNMYtKxL0MfebIMKKHSMCLwsbLZaJc5BDDSVP9w3JAIULyZpgZk8yNzDRYkJbkxEldS%2FfrlN5MHMRHlHOpEi04Fbbjw3fAMiHIHrpxLqFCsFqfCLh6yHh7t3DM5gq%2FW88Z3R%2BgJLW7aVf1wuZ%2FcY8NAyPf%2FnMkMAB2QhMPgl02sSjKbeAqXS4Ls%2F9E8o%2FnkO3cNBVgGUlscB&X-Amz-Signature=0431dc7b4768353ef010ff2f1596641d75c49096f036f8ddd7ece845ae2d0ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWW7GQF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASBx8e1%2F1xh1TwUQXiSfeov22ipYo5EMeVo83mkOYT5AiAchmCUmkW03VOikB%2BhAPh2ou2E3%2Bbv2LAcbkzFYLzPkCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2hOGkAPgqvLhnevpKtwD3Sn85WrkOKQXLoG%2BvOZrzple%2Fe7siB%2F6tGODHmfYh%2FUJNmnAh%2B1AfbHcrfCvei4boukff82pm2L3gxf4%2BNZ7Ek73glbXABoD2VZ3l9GE4oTD2Sfp0%2FT%2Fln58tQRnDzIyD3%2FS2grmq0Yv71mJFJfzeLuhJQVPv5x%2FGCnsIg136BqrBxtUfk4y28XffZNwTHUu7pQGuiJUilnuX9oMKq0BDtZhXSlCr7AhGGy47qBBTfoPj2zzAQAPcMhyt3uoObLZ%2BTidHep%2FCyg%2F3%2FXzdRzKStNzBybrbVt7VUpwoAB%2BjtdeYntDMDF9DDn4ngmcYqnsDzsHOouV%2Fbf5RkYwCgYrdtjrSQKpLSBUSJQ69Tkq9mg%2BEp%2BWLt5viMnF1ozlTzRSp3TDaMoYDNu4%2FqWiXZh%2Bj4teHqSZAEcyARF8sFISBCEF8TxhoD4SKhRFsZZU%2BwrGxqcdQml%2Bx8xbFDofkZRqjO59M%2FS038CCaPg0nRiBj5QsChdsky%2BAO%2Fxj1Yjx7v8dSL7E95D95QUIRPoZbU6vTsGgpigv4bUIRbWF9Fq2%2FcWxBAm0L9Ppc3kq9bR48p86mPiUrvc4tlbs%2FVVZV%2FIivUZmOw3ZEfRSIQfvbgZQQmczURp%2BKnx7VcKYi%2Fkw1aHYyQY6pgHwNCatl5uuEMkfAJESmNMYtKxL0MfebIMKKHSMCLwsbLZaJc5BDDSVP9w3JAIULyZpgZk8yNzDRYkJbkxEldS%2FfrlN5MHMRHlHOpEi04Fbbjw3fAMiHIHrpxLqFCsFqfCLh6yHh7t3DM5gq%2FW88Z3R%2BgJLW7aVf1wuZ%2FcY8NAyPf%2FnMkMAB2QhMPgl02sSjKbeAqXS4Ls%2F9E8o%2FnkO3cNBVgGUlscB&X-Amz-Signature=1e053821ccb336a14a3a04b67ce9c0fb20397f5aee17357775cebb016d03b6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

