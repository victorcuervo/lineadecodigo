---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWKHPHB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqP3h4IRRvWFgUcJS%2B04JYAbuHtUPiGFkEbyuwvdpZUgIhAN6juFaN13I00UcOHbDHXe6BZnpNruuSncJwU5GjgfUXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzftAmoxb%2FsmA5oMB4q3ANliYcpL20bNKHf8qRuf8O9WtTYEkTVj%2BDROWaW0pY%2ByQ86dQ1L58wHEQ9GJmWoQB0lLqmifr01FJcC1AwAcTePWvYQ5%2FnYbOaAyEeQiy%2FimZFg0TbBaVOIXZYPo2HRji0osmXOgwLxnMQ4oGEmendgzKC9vd6baWYyAtIMEm8mo9VjmKJjhRiVv%2BF0ySzNztw1AxUHYKRij0JPfNThHEOXvJE%2FZuY1nTCr8q4f2z343g9oqFwedv88r%2F6cnBt7mi1S%2BIr7EXF9X6LrWew%2Bt0Ivd%2FtaAix53qrR9Ie6r2wOw21y2Ao5J0bhXUKmUjEM2MOlpsdc8j%2BxIrW2gBnrka6WgBS5DPOV48xxJFn4%2BaLVQMHcvTZz5HXUDc%2FYD0lWMTrYaMROOtuhDTb%2FOl6wtfCHE0EjAws1w9Laz2zciGtOC6o8JvawgjogclK3IhLA7kpT7sEAjskUYC4wjdt2nCJmm33CajqBtAQhVCHaS8zMsXDksFp3kyCyOf5FrdBX3RJS%2F7Tb7XDN9C07jaqv%2FLIS43UB2VX0BlYZpnKJc2cUULuBKIKhAcuEZiw67xXM0KvJYwYJMFuz2d6xcFTjjaxOKqg6473Zgy0bQ5Y3tLaHOp4aKCqxxyBbXS18XTDy%2FdLJBjqkAca1NqyI%2B3SG5sJlW1ZhsoMhcRtn0FrRstZcB9uvY4cpmx6Ob3bmwQFnYAQDByYYE42l7cQdg0XCNV6xFUvi0fWq2q%2FYPWtj5%2BAmyps0KQwgen2EgXGp79vEAerSQbkf%2BwpRpFCjp5kmhW8GpleldYXD3qpFX3423IePecVLjg7dv8SyuAa6Xy2Jh85KNdcgbByy3wa3PIG5wrcS2Kge3cNipy8W&X-Amz-Signature=70b4d8370f5b68af8ae2a195cd25d392022749466ebfeff01783c45c8ce65a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWKHPHB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqP3h4IRRvWFgUcJS%2B04JYAbuHtUPiGFkEbyuwvdpZUgIhAN6juFaN13I00UcOHbDHXe6BZnpNruuSncJwU5GjgfUXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzftAmoxb%2FsmA5oMB4q3ANliYcpL20bNKHf8qRuf8O9WtTYEkTVj%2BDROWaW0pY%2ByQ86dQ1L58wHEQ9GJmWoQB0lLqmifr01FJcC1AwAcTePWvYQ5%2FnYbOaAyEeQiy%2FimZFg0TbBaVOIXZYPo2HRji0osmXOgwLxnMQ4oGEmendgzKC9vd6baWYyAtIMEm8mo9VjmKJjhRiVv%2BF0ySzNztw1AxUHYKRij0JPfNThHEOXvJE%2FZuY1nTCr8q4f2z343g9oqFwedv88r%2F6cnBt7mi1S%2BIr7EXF9X6LrWew%2Bt0Ivd%2FtaAix53qrR9Ie6r2wOw21y2Ao5J0bhXUKmUjEM2MOlpsdc8j%2BxIrW2gBnrka6WgBS5DPOV48xxJFn4%2BaLVQMHcvTZz5HXUDc%2FYD0lWMTrYaMROOtuhDTb%2FOl6wtfCHE0EjAws1w9Laz2zciGtOC6o8JvawgjogclK3IhLA7kpT7sEAjskUYC4wjdt2nCJmm33CajqBtAQhVCHaS8zMsXDksFp3kyCyOf5FrdBX3RJS%2F7Tb7XDN9C07jaqv%2FLIS43UB2VX0BlYZpnKJc2cUULuBKIKhAcuEZiw67xXM0KvJYwYJMFuz2d6xcFTjjaxOKqg6473Zgy0bQ5Y3tLaHOp4aKCqxxyBbXS18XTDy%2FdLJBjqkAca1NqyI%2B3SG5sJlW1ZhsoMhcRtn0FrRstZcB9uvY4cpmx6Ob3bmwQFnYAQDByYYE42l7cQdg0XCNV6xFUvi0fWq2q%2FYPWtj5%2BAmyps0KQwgen2EgXGp79vEAerSQbkf%2BwpRpFCjp5kmhW8GpleldYXD3qpFX3423IePecVLjg7dv8SyuAa6Xy2Jh85KNdcgbByy3wa3PIG5wrcS2Kge3cNipy8W&X-Amz-Signature=8c18fd5b03caa366b17cf9752c6755ac33cdf7b13dde0ea8b0c85a0405453bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

