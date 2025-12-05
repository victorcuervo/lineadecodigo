---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGM7ZODK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgYssKbIsR%2BC1K0356q5x6zzHzKWexNrJ8pVrW%2BOi%2F0AiEArHisPC%2BS5f0w33vWZX9BJVJ%2FBNrPj%2Bg02zO3pEIct%2FMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGHJm%2BfNPR6QE%2FHpjSrcA5cNlYALjKwU4%2FpxruJ2A7KVD6kL2W5Ot%2FaZgftMKLXXnp3Dx7xRTwMEc19pz6yhvxl9Bj%2BG40dqEoaMhhXpdwxnu2IoTIxukGaMud%2FrzHAiAZ0Hok39asaJr0wgWl10if4%2FVGXHIz6RmB6bZZaTuQjMQNrh%2F%2Br77P5OVLksVpEiQZ1ogErW2lH1YUj6HXPuHQTEDC%2BKvMPKdK4YYupCETTSv2KZ44DirDnkS36%2BtjCPv%2FKnbqQnoyGHV%2BJPrP6foU57oH0LCdbzaqKNO2l8OVpXAKrTxAzP6I86PmP1vV4ohc3HxXKJNOyexbokHgy25eD7MK0FeBFWkH4zzTw0lCZXMYwjtb0GsVKN7nyNyzlSVdR4BjSFIi%2Fnrx%2BTQ4wmpX%2BAAormnxUVqeWS7Bz4j%2BcCA9qcPEP7ZE62x1hpRw3IQHxCyu1ddWORoWhVAvH0MrSQvyU0cjPIB5DF%2BQPmMGMWh2u7fp%2FyLHqjvFGo3XaJ7zdlelZEz7s9H6%2BtXI99lRFAjqABkIxGjmJgp3nuy7mi8%2BGzVREmaQKCsX8ds%2B93bJAa3QR2RVQEgSzsL6nwnwOAExzzxLJ1s5EtBKWExpQbuWEEkfkJd6jkjLMRG0EfT%2F7%2BbKk%2FwkHxFDSQMOrSyskGOqUB9upruewo5HCjPqASkuD%2F%2FbSOQ56E7lZQOGlKxvrPQUhY7kI7QUbHnYyu0UXjUjNAOckODDxLUchfFv4Z88qP9zV14JN5vo4VFbGGLUNk3ugd%2F7IKy6GweqpTGrWFbr5Cm0xNinKjV21NxvnT99WEPJNUVRnjhwhy9zGkp33sNYcuNDjal%2B3FXFdQ7nCjvm1PlgtggXjAt249Yula9ptd5Ycijlpo&X-Amz-Signature=26fbd56d0db8a40cd859671127461b857492f687c8382870e050d97eff0ab2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGM7ZODK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgYssKbIsR%2BC1K0356q5x6zzHzKWexNrJ8pVrW%2BOi%2F0AiEArHisPC%2BS5f0w33vWZX9BJVJ%2FBNrPj%2Bg02zO3pEIct%2FMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGHJm%2BfNPR6QE%2FHpjSrcA5cNlYALjKwU4%2FpxruJ2A7KVD6kL2W5Ot%2FaZgftMKLXXnp3Dx7xRTwMEc19pz6yhvxl9Bj%2BG40dqEoaMhhXpdwxnu2IoTIxukGaMud%2FrzHAiAZ0Hok39asaJr0wgWl10if4%2FVGXHIz6RmB6bZZaTuQjMQNrh%2F%2Br77P5OVLksVpEiQZ1ogErW2lH1YUj6HXPuHQTEDC%2BKvMPKdK4YYupCETTSv2KZ44DirDnkS36%2BtjCPv%2FKnbqQnoyGHV%2BJPrP6foU57oH0LCdbzaqKNO2l8OVpXAKrTxAzP6I86PmP1vV4ohc3HxXKJNOyexbokHgy25eD7MK0FeBFWkH4zzTw0lCZXMYwjtb0GsVKN7nyNyzlSVdR4BjSFIi%2Fnrx%2BTQ4wmpX%2BAAormnxUVqeWS7Bz4j%2BcCA9qcPEP7ZE62x1hpRw3IQHxCyu1ddWORoWhVAvH0MrSQvyU0cjPIB5DF%2BQPmMGMWh2u7fp%2FyLHqjvFGo3XaJ7zdlelZEz7s9H6%2BtXI99lRFAjqABkIxGjmJgp3nuy7mi8%2BGzVREmaQKCsX8ds%2B93bJAa3QR2RVQEgSzsL6nwnwOAExzzxLJ1s5EtBKWExpQbuWEEkfkJd6jkjLMRG0EfT%2F7%2BbKk%2FwkHxFDSQMOrSyskGOqUB9upruewo5HCjPqASkuD%2F%2FbSOQ56E7lZQOGlKxvrPQUhY7kI7QUbHnYyu0UXjUjNAOckODDxLUchfFv4Z88qP9zV14JN5vo4VFbGGLUNk3ugd%2F7IKy6GweqpTGrWFbr5Cm0xNinKjV21NxvnT99WEPJNUVRnjhwhy9zGkp33sNYcuNDjal%2B3FXFdQ7nCjvm1PlgtggXjAt249Yula9ptd5Ycijlpo&X-Amz-Signature=c6ecd45ecd200ecb6624caeb0dbcff0d6f2145ec813f7cbefa3d107f4c56db51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

