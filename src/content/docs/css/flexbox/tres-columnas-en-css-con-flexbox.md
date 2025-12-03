---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCX2MFH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBJSNQZG6LIbTpiHA916gUDPRVN1UdgrzXHuZNOwW3kjAiBUAJG8Slg8Y609CI41j8zuW9EhN0R%2FlT34h81J7VrSVSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM6%2FCYuQ2Lszh%2BjapQKtwDQe3WeEhVtomhHnEvZ55eH1vCcjzhbvi3oNRBA88%2ByTP4PRGVIAy5RncI%2B%2FvztB2mfQdAIViteN8ggz44cOw7r7ygCxgxe33E2UhkjHUql3fEvgtwvF%2BsM60Bbn95Mo0ocFkU25Xlc9TTV4%2FpuZBoHTAjhxdmjYLypkoDpd8Ok7qbaT2pYDsAZACTugtLDo9Ft5vx1qHo8zjQR3JjJtpp3JFQrQcc7wDjMaBuGUN6rgsqSpsJcZ0SGp%2B8CxwlIhfS78RXM1oiDUpBeEJDt0Tj8NNdAUe8xHwcvQsmTMYJrK%2B2XBwwhHxglckaLVpUqwUZo9ZuYGcS%2Fgs3%2B1Pc1EH1BmdWiQodFHzoD5lLImsoRJM80rnzG3uaKgSBhha6b6xl7SVOPeQEmufC5iGp%2BnoOowIVij9oSXR9IIvY6q1YP3b6FzuMUh1mnIHe5jc7AcsRbFHx4nwprMBJftGIW1TzhwqIFcz%2FDFg91X9PTdhKyVBITDe4tAxYyGYgpFJLYG49dXb8mTHe9VvLfdlKTvOIrX8JAfkREgPXPlbHj1N0GX1u3m7bBaqq6vuoVNgYBy1iNek6ix8ac90J526Ufs01Vx6zDgnW5CUKP4nG7PT%2Ff6esjmeWRZoHotz9wVkw0ffCyQY6pgEHmioj0s5iYyG%2BCh7MQqnDVIDdEEw72qFQywFhruOTtlT91lY5fbo60MhObo2Ib09IFVqIoSK1cbzFW2OB%2B0H%2B3WKp7fQ77%2BGAYXJ5QIsws73eXdPL7iJQWHavMAkIRaC32GFno3pp1qYstM6K3RBMhpH6VzTcamp%2F%2BOloX6slINJpMLI0PhVFZTSqTSbJXdN7dLCPhn%2BRa6x8mOZwz1mr%2BArNCq45&X-Amz-Signature=e4ae3de06f7baaff0e11470abea796184e7ca1c264806c0e50cfe3af53c21457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCX2MFH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBJSNQZG6LIbTpiHA916gUDPRVN1UdgrzXHuZNOwW3kjAiBUAJG8Slg8Y609CI41j8zuW9EhN0R%2FlT34h81J7VrSVSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM6%2FCYuQ2Lszh%2BjapQKtwDQe3WeEhVtomhHnEvZ55eH1vCcjzhbvi3oNRBA88%2ByTP4PRGVIAy5RncI%2B%2FvztB2mfQdAIViteN8ggz44cOw7r7ygCxgxe33E2UhkjHUql3fEvgtwvF%2BsM60Bbn95Mo0ocFkU25Xlc9TTV4%2FpuZBoHTAjhxdmjYLypkoDpd8Ok7qbaT2pYDsAZACTugtLDo9Ft5vx1qHo8zjQR3JjJtpp3JFQrQcc7wDjMaBuGUN6rgsqSpsJcZ0SGp%2B8CxwlIhfS78RXM1oiDUpBeEJDt0Tj8NNdAUe8xHwcvQsmTMYJrK%2B2XBwwhHxglckaLVpUqwUZo9ZuYGcS%2Fgs3%2B1Pc1EH1BmdWiQodFHzoD5lLImsoRJM80rnzG3uaKgSBhha6b6xl7SVOPeQEmufC5iGp%2BnoOowIVij9oSXR9IIvY6q1YP3b6FzuMUh1mnIHe5jc7AcsRbFHx4nwprMBJftGIW1TzhwqIFcz%2FDFg91X9PTdhKyVBITDe4tAxYyGYgpFJLYG49dXb8mTHe9VvLfdlKTvOIrX8JAfkREgPXPlbHj1N0GX1u3m7bBaqq6vuoVNgYBy1iNek6ix8ac90J526Ufs01Vx6zDgnW5CUKP4nG7PT%2Ff6esjmeWRZoHotz9wVkw0ffCyQY6pgEHmioj0s5iYyG%2BCh7MQqnDVIDdEEw72qFQywFhruOTtlT91lY5fbo60MhObo2Ib09IFVqIoSK1cbzFW2OB%2B0H%2B3WKp7fQ77%2BGAYXJ5QIsws73eXdPL7iJQWHavMAkIRaC32GFno3pp1qYstM6K3RBMhpH6VzTcamp%2F%2BOloX6slINJpMLI0PhVFZTSqTSbJXdN7dLCPhn%2BRa6x8mOZwz1mr%2BArNCq45&X-Amz-Signature=b0ef4638e522a3e363a4f640bf5c58d9da208b3bd584a1dcc170db53a8157cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

