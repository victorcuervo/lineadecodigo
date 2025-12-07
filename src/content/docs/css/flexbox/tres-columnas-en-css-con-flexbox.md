---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYHQC3I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChCpd5V2685sjQpNG9%2BWZINL%2BijWUj8hMin7OMCsNiNAIhAM9M8DhkHZgmwWUAzPUSw3yhFta7MHLJaCS7QcL%2BgN2QKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFWw0jrCGQn0%2Fnewq3ANqNswCMesIVlccG6vx4k1Tu%2FN4lPwBfWuByl8TOU8kWXr%2BbxZAr%2BWJdmEUFrCowuXZVaxaa%2B0YEdkALC6Xdg8jwgrhr30LP3DH30Nkz6IdXQt4BB48coMNvfNWykHnVyXXf3D898%2BAQdhErRR2cjg4KRSiGluyw1PJwJrelB5wEUEvOJupZCZkPsX3RioaY0I3QulVqmr8w22xfyY6ZrTVADXxFOxPGLFM%2FB%2Fm%2BRI4j7zqQDwa%2FQ9wkYkdZ6Fe5WTXxuxjUc7%2BJDTgxdGS0fkso6PJmnyM4eKlxwdwXPOZ1qRk30FSYmc1PLSUet%2FSRo6Vi%2BIOJ1N9erHa7%2BGidD3nBn%2BFPfDKq5z%2BT1j%2Bz5qk0GDEqQJiIBTVMr0MHgfDiHZwRIF46Pijrxn%2FlJrL7avVO57GO1py9zMbIWwJM5bkeDvVvr3k1vBN4rW6VelB2M1W2NmGVrHfeDhS%2BMB%2B%2FUbE25GzrBh2WsAb3NJOk2fvDJcPC4cZAAaN2%2BNW4UXITfalqf95oa92NqHkLJzLhsKegPY3cofv0EGm7gqCgd3KcEuUuFK3lS8vo93fAIpO2WxpylHuUzrkNQXMEhJENFkwrCj5xMePOyBpaQan3Z5ORmg4V7mjqA7Am31gjjCsoNTJBjqkAdAfrewWzOf5cgkL7KfNSlxfLYg68qSqI5FgOlLaNSE4YLYZT9ZezuvhysAcRSRq%2FjvY6svNNy7QYMLTW6xqDf%2FsTWsbRaNmuKJa8QTTn1p7SfUnztx%2BxA4aHsjNCp75Q9lOHjmhY%2BGEYbJOFbKLTL7YaG8u4UNsQkqHBiOlZMxTEf0ZpAIeADxe0UmNYGOG%2B1QRniHhEY2vw4YdZajXgr9Gx9a4&X-Amz-Signature=a9c95b0720f920ce482e516d204f23ce9acbc1c6866a57ea5cb2b1814941afb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYHQC3I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChCpd5V2685sjQpNG9%2BWZINL%2BijWUj8hMin7OMCsNiNAIhAM9M8DhkHZgmwWUAzPUSw3yhFta7MHLJaCS7QcL%2BgN2QKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFWw0jrCGQn0%2Fnewq3ANqNswCMesIVlccG6vx4k1Tu%2FN4lPwBfWuByl8TOU8kWXr%2BbxZAr%2BWJdmEUFrCowuXZVaxaa%2B0YEdkALC6Xdg8jwgrhr30LP3DH30Nkz6IdXQt4BB48coMNvfNWykHnVyXXf3D898%2BAQdhErRR2cjg4KRSiGluyw1PJwJrelB5wEUEvOJupZCZkPsX3RioaY0I3QulVqmr8w22xfyY6ZrTVADXxFOxPGLFM%2FB%2Fm%2BRI4j7zqQDwa%2FQ9wkYkdZ6Fe5WTXxuxjUc7%2BJDTgxdGS0fkso6PJmnyM4eKlxwdwXPOZ1qRk30FSYmc1PLSUet%2FSRo6Vi%2BIOJ1N9erHa7%2BGidD3nBn%2BFPfDKq5z%2BT1j%2Bz5qk0GDEqQJiIBTVMr0MHgfDiHZwRIF46Pijrxn%2FlJrL7avVO57GO1py9zMbIWwJM5bkeDvVvr3k1vBN4rW6VelB2M1W2NmGVrHfeDhS%2BMB%2B%2FUbE25GzrBh2WsAb3NJOk2fvDJcPC4cZAAaN2%2BNW4UXITfalqf95oa92NqHkLJzLhsKegPY3cofv0EGm7gqCgd3KcEuUuFK3lS8vo93fAIpO2WxpylHuUzrkNQXMEhJENFkwrCj5xMePOyBpaQan3Z5ORmg4V7mjqA7Am31gjjCsoNTJBjqkAdAfrewWzOf5cgkL7KfNSlxfLYg68qSqI5FgOlLaNSE4YLYZT9ZezuvhysAcRSRq%2FjvY6svNNy7QYMLTW6xqDf%2FsTWsbRaNmuKJa8QTTn1p7SfUnztx%2BxA4aHsjNCp75Q9lOHjmhY%2BGEYbJOFbKLTL7YaG8u4UNsQkqHBiOlZMxTEf0ZpAIeADxe0UmNYGOG%2B1QRniHhEY2vw4YdZajXgr9Gx9a4&X-Amz-Signature=b047c71cde1b83d602b41c25092cc044aff75a457f5ecdb3f481c12f6254af4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

