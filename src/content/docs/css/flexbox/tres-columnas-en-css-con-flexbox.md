---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHWSNQL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCBzrkVvo9f2KOwbHMJcO4b6OYoT6Ob2c%2FDusgco9NMBwIhAKFcM25TBxQhMD7XPrLNxfDuyvX06%2FE9rDALRPQatZpBKv8DCEQQABoMNjM3NDIzMTgzODA1Igw96YLaJcNWUeVC1rAq3AMtDQeBUOR9M%2FQ%2FjlXLQFktvZFEoBVwQbdRQ4cuuh22FDDXSXDeYVZDTK3HpANDFLh1y5eI11iUpLh6JQy1YcIB2XZwDwtp2shZgWHj2rp2KBKhlfrXuEMsnXRMIP6O2u%2BOCUkclR0mBe9sh1kb9UHAynfI7pbbgdJ1Wjs%2F%2Bd%2FBhrDJA8ZmNgYuUCU4YQJE6tLfEf7ArBHfBgkFh9E6FJ9dcgVNxnKx4bBeckh51NjfcvKR%2BL6ZA3U6QIXuZ0jk7EntJ3lwxShZ6eojA5ydnOfRObGyvqttjule5PJzi3GXJspwWXBzoKvWR%2B0yw5iEg4JC4uxGPiLAE5gmU3AJoMq4SeO8jtsnLeecma8AazcajtxHHwXbRW6D%2FFsZsMJkS1fBfGR2OGjA%2FTxLD5MMI9NtI5WT1anXxufrRY5BidRiFG6l1YBmZesdo9mOZFf%2FyOoXins%2BT78MZeK0AOSbjpVjBWapcABQXHLBw0Z%2FWPTtn%2BVuFXhE1AIpHY8hIJ%2FrqVHPvBviv43scNEcwtwCmbDuNi83bO04twrY6VOFgQXwxWwvmc50L6LrxAq8Yjl8sMVoIhiuoxmM%2BEaqjI6ANedmkBp91Cpw4c9VC3K0vGlcVWxz89NGKt7751fmUTD2yMXJBjqkAXduPovS%2FYYc2DiF3W%2FExXxU9WQHETS6LD3rRldWOFI9i0ES67J9gaNr2PAE3567I7m6HME9j9vhSag13pIJgmU%2FQZKMXe95ODH4mNJCxlzFR9Zi8btVtNmXL5N%2FR3nnrJhA8yKRJ%2BfxZkrsJS6Zwt9HBuV9UjoVRI03p%2FrCAtr1INPYMgLwqC3dqLqGQ5Je7Fk%2Bae%2BQrLKYBeEAjOinhOuN1zQU&X-Amz-Signature=156c964ddf0f0f5158d3099f33784e0a7bd8697f91c664c1e8bb02373ddbb1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHWSNQL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCBzrkVvo9f2KOwbHMJcO4b6OYoT6Ob2c%2FDusgco9NMBwIhAKFcM25TBxQhMD7XPrLNxfDuyvX06%2FE9rDALRPQatZpBKv8DCEQQABoMNjM3NDIzMTgzODA1Igw96YLaJcNWUeVC1rAq3AMtDQeBUOR9M%2FQ%2FjlXLQFktvZFEoBVwQbdRQ4cuuh22FDDXSXDeYVZDTK3HpANDFLh1y5eI11iUpLh6JQy1YcIB2XZwDwtp2shZgWHj2rp2KBKhlfrXuEMsnXRMIP6O2u%2BOCUkclR0mBe9sh1kb9UHAynfI7pbbgdJ1Wjs%2F%2Bd%2FBhrDJA8ZmNgYuUCU4YQJE6tLfEf7ArBHfBgkFh9E6FJ9dcgVNxnKx4bBeckh51NjfcvKR%2BL6ZA3U6QIXuZ0jk7EntJ3lwxShZ6eojA5ydnOfRObGyvqttjule5PJzi3GXJspwWXBzoKvWR%2B0yw5iEg4JC4uxGPiLAE5gmU3AJoMq4SeO8jtsnLeecma8AazcajtxHHwXbRW6D%2FFsZsMJkS1fBfGR2OGjA%2FTxLD5MMI9NtI5WT1anXxufrRY5BidRiFG6l1YBmZesdo9mOZFf%2FyOoXins%2BT78MZeK0AOSbjpVjBWapcABQXHLBw0Z%2FWPTtn%2BVuFXhE1AIpHY8hIJ%2FrqVHPvBviv43scNEcwtwCmbDuNi83bO04twrY6VOFgQXwxWwvmc50L6LrxAq8Yjl8sMVoIhiuoxmM%2BEaqjI6ANedmkBp91Cpw4c9VC3K0vGlcVWxz89NGKt7751fmUTD2yMXJBjqkAXduPovS%2FYYc2DiF3W%2FExXxU9WQHETS6LD3rRldWOFI9i0ES67J9gaNr2PAE3567I7m6HME9j9vhSag13pIJgmU%2FQZKMXe95ODH4mNJCxlzFR9Zi8btVtNmXL5N%2FR3nnrJhA8yKRJ%2BfxZkrsJS6Zwt9HBuV9UjoVRI03p%2FrCAtr1INPYMgLwqC3dqLqGQ5Je7Fk%2Bae%2BQrLKYBeEAjOinhOuN1zQU&X-Amz-Signature=9a1cfdd7f8d05e6860d546f95064326c46f79f3a18562d3682e667254821a42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

