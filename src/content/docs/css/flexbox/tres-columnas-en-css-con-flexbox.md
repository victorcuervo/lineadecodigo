---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXJGHB6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICf5TA5zwebyv4DMrr0DjjQdZe96VvEn8IkTcdEC%2FS2FAiByvggpZ49JFl5dtCBn%2BGq3qmXdMIJBdWVztTVMdRnZnSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMz1ZV7eYetQPBCq1hKtwDbrVPcJJfJ4xGSfRX4eAxU0%2B2wP7ID1ks8IQhs7GI4bfnSFC6Lsmr4qGsER6UGl5iqcHcvNbnByyRAe2okSOfYwCvr%2FFcPDOqq5BFZZAmytyLp3VXrgdGnsivxC8uHiaH9CsbtbaWhsaKZVWAs%2BE6b1%2BJUbyCJALSAPY7T8MSQxipI5TcNSxHVHZyHiwiq4%2Fc5iM1RJJzPMelOvC%2BJs752sEG%2Bf1rYeI9bGrTHzQNKbB7oyi2ebkqgPeoL%2FGuKAt8AYDUkPOYDyk9BAMTQCZ%2FSdUvheSXJ0Lb25lAyc8iI1Cl1UnszDofAxn9mQY1e5gIhVNT%2BgyMleJB%2BFgR3tDC2oYSwZlYnIiPxgCM9LYXc7m7lEkIs7Lp5EelyPPnRUk%2B7mHaaNu3UDqyuT32yO74s4QlK%2F98Fovy6%2FAEETwna%2FHIjWIRt1IuWra2znMHOEIOxvSClzj9GRFUqu9WQSKzuaNibTr6KrnJ9PvqqmS9WUdp%2FhIN9fhqRb9HlsVls2FR8aLvsyPtWtC9KnQ%2FrTmVOUeQVPk4t4qF3KyMc5P5cPEfyYMjVTZkwstiyDgs4XgWsvQh0y%2Fogi4%2FyvJBpaf4Q0xM5rMBqEf2V3Ts7IgKSybDZ8k8rVANLnJxyCcwxqbQyQY6pgHjWrNehee75bFIsoxWAsdGRT5RsQi6Kgs978v%2BzcbQqGXIF8%2BJBABjPu1kOl2hUuRERVi2fvILRIl9JaAs63RpKc1Wy%2BcCv8TLaZhhkCkvlf12vS0XOcHMXyKeAJdN50bGTeAtPZeVPW%2BXZiWO7Ov7Zcsfw1SjeQfwckIVSChhJKm4R0RnLATjxR01zyy0cCEkdFLwjksFN%2B7We%2FYsbZUbbKp3UtDY&X-Amz-Signature=fe4856a8f83de31802dc86186c1cdb54026a01cb7249062bd0c93b2e2041fc29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXJGHB6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICf5TA5zwebyv4DMrr0DjjQdZe96VvEn8IkTcdEC%2FS2FAiByvggpZ49JFl5dtCBn%2BGq3qmXdMIJBdWVztTVMdRnZnSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMz1ZV7eYetQPBCq1hKtwDbrVPcJJfJ4xGSfRX4eAxU0%2B2wP7ID1ks8IQhs7GI4bfnSFC6Lsmr4qGsER6UGl5iqcHcvNbnByyRAe2okSOfYwCvr%2FFcPDOqq5BFZZAmytyLp3VXrgdGnsivxC8uHiaH9CsbtbaWhsaKZVWAs%2BE6b1%2BJUbyCJALSAPY7T8MSQxipI5TcNSxHVHZyHiwiq4%2Fc5iM1RJJzPMelOvC%2BJs752sEG%2Bf1rYeI9bGrTHzQNKbB7oyi2ebkqgPeoL%2FGuKAt8AYDUkPOYDyk9BAMTQCZ%2FSdUvheSXJ0Lb25lAyc8iI1Cl1UnszDofAxn9mQY1e5gIhVNT%2BgyMleJB%2BFgR3tDC2oYSwZlYnIiPxgCM9LYXc7m7lEkIs7Lp5EelyPPnRUk%2B7mHaaNu3UDqyuT32yO74s4QlK%2F98Fovy6%2FAEETwna%2FHIjWIRt1IuWra2znMHOEIOxvSClzj9GRFUqu9WQSKzuaNibTr6KrnJ9PvqqmS9WUdp%2FhIN9fhqRb9HlsVls2FR8aLvsyPtWtC9KnQ%2FrTmVOUeQVPk4t4qF3KyMc5P5cPEfyYMjVTZkwstiyDgs4XgWsvQh0y%2Fogi4%2FyvJBpaf4Q0xM5rMBqEf2V3Ts7IgKSybDZ8k8rVANLnJxyCcwxqbQyQY6pgHjWrNehee75bFIsoxWAsdGRT5RsQi6Kgs978v%2BzcbQqGXIF8%2BJBABjPu1kOl2hUuRERVi2fvILRIl9JaAs63RpKc1Wy%2BcCv8TLaZhhkCkvlf12vS0XOcHMXyKeAJdN50bGTeAtPZeVPW%2BXZiWO7Ov7Zcsfw1SjeQfwckIVSChhJKm4R0RnLATjxR01zyy0cCEkdFLwjksFN%2B7We%2FYsbZUbbKp3UtDY&X-Amz-Signature=3e3d23d78cfbc0623ec291cb8ba615388d12d759f9ec8e25ad75ad2024843d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

