---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XW3QCP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFOxt4zHnrImOiPeCbFr%2FExDP%2FzdJPjfB6KZELm91f1iAiBA1QJuVsm8fDnqYJC3sgDNqAwK4upoHRRImQ3BNhMCWyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMdgeKEZgyfLaI4dS0KtwDozl3DgNXMGJfyR7YOC0gJ3r4EfemEikH9WYDtQnIZEslv2kQalveaX%2BOdcQ5tnd7nES4crEwqhMR0yzgom4VmsnDCv%2FAq1O4OU47NPFJmA4QiOZhNz0BAtSbig%2FQILA4uR5Xt0o7QUzm9dBwEaTFdUcUQ4cc0tRiQUna1SEWmYx3Wn0hY80rhncPNrhUuQX2IRwKYBt3iFWKAtZINytW6kXFNRIw4Y1AcHBTmArBKnKTexQy8nUPIJGNWvXZ2vodCW%2BxqcrdwwUJhAM7Ic6OuAhOfuJ1VVLghoy%2F4n5iuqCn%2FB70p6FrH3zlU4bJ92e2fbXDVDV3oF30hZab44rG%2FVqwtVkYJA8AO4c8YK40qQugfnpzhFK37AiJ%2B7WpKKrQ66BBd5Jw59TRPm8nIhLP8YdwsSC9fyurga1OMkl5LWyknJM54R%2BORX%2FWSoGIEeV2Y5RU6vP1ju9KX44Vlii1JjKX%2BT9vPkW1nZ6gcxdsal%2BkLcokznQ%2BM2eAv3dirsjY98n8H0BummYeFtO%2F%2B8QFLDaX4K942qfbefYkNUPIPGr%2B6FtZhwRf%2BcpN5wF2RucrBfCeBMweCApnNFzWFTvg6Wa%2Bexm3DaVQ58Nbp72MQhEKyeD52bmWQ2WI%2Bd8wxpDEyQY6pgE0QtLj0QBQasKfV7R553QLKOdjBGwNZIEfm0iz1ofGwv1Or%2BWN9UdSnibj8MLErp0mydAH528U8ERH39x%2BjxaioXLOFr%2FOxva8mQ%2FlBv9pEIcMzqTJuoiRvWqURwbqr1pFj%2BoFbvTWJHFZLBSSn9BNacBG%2FFJQ5Jz4Z4dh%2F%2FMPM53EBJSfFX9JuKTtUX8SL%2FpmLHfoX79UtfNdA12slosT5YXfFXv2&X-Amz-Signature=c2056968fd1815fcc7f1001f6af5046e8ec32192ea9df6f9d242609411c94d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XW3QCP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFOxt4zHnrImOiPeCbFr%2FExDP%2FzdJPjfB6KZELm91f1iAiBA1QJuVsm8fDnqYJC3sgDNqAwK4upoHRRImQ3BNhMCWyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMdgeKEZgyfLaI4dS0KtwDozl3DgNXMGJfyR7YOC0gJ3r4EfemEikH9WYDtQnIZEslv2kQalveaX%2BOdcQ5tnd7nES4crEwqhMR0yzgom4VmsnDCv%2FAq1O4OU47NPFJmA4QiOZhNz0BAtSbig%2FQILA4uR5Xt0o7QUzm9dBwEaTFdUcUQ4cc0tRiQUna1SEWmYx3Wn0hY80rhncPNrhUuQX2IRwKYBt3iFWKAtZINytW6kXFNRIw4Y1AcHBTmArBKnKTexQy8nUPIJGNWvXZ2vodCW%2BxqcrdwwUJhAM7Ic6OuAhOfuJ1VVLghoy%2F4n5iuqCn%2FB70p6FrH3zlU4bJ92e2fbXDVDV3oF30hZab44rG%2FVqwtVkYJA8AO4c8YK40qQugfnpzhFK37AiJ%2B7WpKKrQ66BBd5Jw59TRPm8nIhLP8YdwsSC9fyurga1OMkl5LWyknJM54R%2BORX%2FWSoGIEeV2Y5RU6vP1ju9KX44Vlii1JjKX%2BT9vPkW1nZ6gcxdsal%2BkLcokznQ%2BM2eAv3dirsjY98n8H0BummYeFtO%2F%2B8QFLDaX4K942qfbefYkNUPIPGr%2B6FtZhwRf%2BcpN5wF2RucrBfCeBMweCApnNFzWFTvg6Wa%2Bexm3DaVQ58Nbp72MQhEKyeD52bmWQ2WI%2Bd8wxpDEyQY6pgE0QtLj0QBQasKfV7R553QLKOdjBGwNZIEfm0iz1ofGwv1Or%2BWN9UdSnibj8MLErp0mydAH528U8ERH39x%2BjxaioXLOFr%2FOxva8mQ%2FlBv9pEIcMzqTJuoiRvWqURwbqr1pFj%2BoFbvTWJHFZLBSSn9BNacBG%2FFJQ5Jz4Z4dh%2F%2FMPM53EBJSfFX9JuKTtUX8SL%2FpmLHfoX79UtfNdA12slosT5YXfFXv2&X-Amz-Signature=91c82e00468cf48eba7de50652ed601045208de299577b7dd72c9635e2699092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

