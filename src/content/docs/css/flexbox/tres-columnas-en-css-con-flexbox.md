---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLDHGNCU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRsDEossX63WSZnKzc3LzS%2FKtGmXtEulZsmEm0dAOhcwIhAO5wgoc1xGkNJ%2FhRWni9jfi2XDdTX8l1hWVVrH3ho9XlKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyMMADE1DDBm8wUPMq3AO94ExUHz4gbxIwzIVjYiHOVlF83cl9sy6Y6jp3Foaf%2BJXe1LOkPJU23%2FK82XBNFKYoK%2FfN%2BOVN0inMAWzVv4uvaLfnLx3HFJuxxdHJRFZz%2BRmZnYdt5%2BXZeYGq8RRz%2FVf2qJwu9dEnFqGASQvXoDupJqe8taHS%2BLx5oLhIdIz7lyvjhDSgt%2FN4yvyV2AM4YSzwMzyy%2FZIKKea1ydRgAsSVpgvzmaTAnSYe6IKaUQU%2B4JorN%2BvJek7%2FloWGOG3YkayssVitRu4o3N4OTJUTfT6e%2Fr3CQhYavhAlcpLUAhb1WuFWgdofXDt5m%2BEOVMBZ1%2Bjdj0tltIKKojLkmbPw90c2Nkk7OEvBXL%2FGHZl6CxgWnuPfun2AI%2B6DuNdLXPLIBmoPe%2FyWARit4mfN0X88wrRhmMtPgRuAqGczhSYb4%2BaRNs1RJylrSC9HOwIGqD1cKSDcz8d%2FnwSNaWRaRJi0jHAzwmRyOujN8TzM8mRGuFwE7JQALeXT0m7TKvV3PWOvT6OEEgRnOYOoNXlNqy%2FpLIA%2F15aNoFtdxZLsGY%2BJCpNcOHMURWBWY4TbpolGI3MQX6pzoaHYv9ippodJ1dmuenoT%2F%2B83HNFyMQbG3lqebPBCOE9S0J94yzYuytJm9TCkyt7JBjqkAR0F6k2uSPHB81Wor6AkNpoqLixnLbDz%2BiubjhA3fGLETgI6XRWixWJtIKAIYzDMh1hMAYEL8Z8m%2FoP7jz%2FHxsnUbHt5IvoJoPLBhZK4mwEVjWCPNFLCsnybvOWeupj320UAmf9cXAFF1unFA0eF8jZtWjg2LfU6nKyYFHwnTNWwAHK05W5vP6QSNbGp2FHKORKjfOyqGq1XnNdF8PO%2FA%2F4R0vgn&X-Amz-Signature=cfb6b459d0be7d715cfbf2943900a109640286d0bb4212d66e93ff0f4d0675d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLDHGNCU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRsDEossX63WSZnKzc3LzS%2FKtGmXtEulZsmEm0dAOhcwIhAO5wgoc1xGkNJ%2FhRWni9jfi2XDdTX8l1hWVVrH3ho9XlKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyMMADE1DDBm8wUPMq3AO94ExUHz4gbxIwzIVjYiHOVlF83cl9sy6Y6jp3Foaf%2BJXe1LOkPJU23%2FK82XBNFKYoK%2FfN%2BOVN0inMAWzVv4uvaLfnLx3HFJuxxdHJRFZz%2BRmZnYdt5%2BXZeYGq8RRz%2FVf2qJwu9dEnFqGASQvXoDupJqe8taHS%2BLx5oLhIdIz7lyvjhDSgt%2FN4yvyV2AM4YSzwMzyy%2FZIKKea1ydRgAsSVpgvzmaTAnSYe6IKaUQU%2B4JorN%2BvJek7%2FloWGOG3YkayssVitRu4o3N4OTJUTfT6e%2Fr3CQhYavhAlcpLUAhb1WuFWgdofXDt5m%2BEOVMBZ1%2Bjdj0tltIKKojLkmbPw90c2Nkk7OEvBXL%2FGHZl6CxgWnuPfun2AI%2B6DuNdLXPLIBmoPe%2FyWARit4mfN0X88wrRhmMtPgRuAqGczhSYb4%2BaRNs1RJylrSC9HOwIGqD1cKSDcz8d%2FnwSNaWRaRJi0jHAzwmRyOujN8TzM8mRGuFwE7JQALeXT0m7TKvV3PWOvT6OEEgRnOYOoNXlNqy%2FpLIA%2F15aNoFtdxZLsGY%2BJCpNcOHMURWBWY4TbpolGI3MQX6pzoaHYv9ippodJ1dmuenoT%2F%2B83HNFyMQbG3lqebPBCOE9S0J94yzYuytJm9TCkyt7JBjqkAR0F6k2uSPHB81Wor6AkNpoqLixnLbDz%2BiubjhA3fGLETgI6XRWixWJtIKAIYzDMh1hMAYEL8Z8m%2FoP7jz%2FHxsnUbHt5IvoJoPLBhZK4mwEVjWCPNFLCsnybvOWeupj320UAmf9cXAFF1unFA0eF8jZtWjg2LfU6nKyYFHwnTNWwAHK05W5vP6QSNbGp2FHKORKjfOyqGq1XnNdF8PO%2FA%2F4R0vgn&X-Amz-Signature=4251f995a7f2eb4d4cd1164ce2d7ec076ec261ce09d381b43f8b2b5a9141158a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

